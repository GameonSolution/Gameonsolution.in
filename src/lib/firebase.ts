// /src/lib/firebase.ts
import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import {
  initializeFirestore,
  serverTimestamp,
  Firestore,
  addDoc,
  collection,
  DocumentReference,
  Timestamp
} from "firebase/firestore";
import {
  getAuth,
  onAuthStateChanged,
  signInAnonymously,
  Auth,
  User
} from "firebase/auth";

// Firebase configuration - use environment variables in production
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Validate Firebase config
if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  console.error('Firebase configuration is incomplete. Please check your environment variables.');
}

// Types for better type safety
export interface TurfEstimateData {
  name: string;
  email: string;
  phone: string;
  timeline: string;
  mode: 'standard' | 'cage360';
  environment: 'indoor' | 'outdoor';
  grassType: 'rubber' | 'eco' | 'aqua';
  sizeSqft: number;
  rateMin: number;
  rateMax: number;
  totalEstimate: number;
  createdAt: Timestamp;
  createdAtIST: string;
  createdBy?: string;
}

export interface FirebaseError {
  code: string;
  message: string;
  details?: any;
}

// Reuse app if already created (hot reload safe)
export const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Initialize Firestore with proper configuration
export const db: Firestore = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
  ignoreUndefinedProperties: true,
});

// Auth instance
export const auth: Auth = getAuth(app);

// Error handling utility
export class FirebaseErrorHandler {
  static handle(error: any): FirebaseError {
    console.error('Firebase Error:', error);
    
    if (error.code) {
      return {
        code: error.code,
        message: error.message || 'An unknown Firebase error occurred',
        details: error.details
      };
    }
    
    return {
      code: 'unknown',
      message: error.message || 'An unexpected error occurred',
      details: error
    };
  }
}

// Retry utility for failed operations
export async function withRetry<T>(
  operation: () => Promise<T>,
  maxRetries: number = 3,
  delay: number = 1000
): Promise<T> {
  let lastError: any;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      
      if (attempt === maxRetries) {
        throw FirebaseErrorHandler.handle(error);
      }
      
      // Exponential backoff
      await new Promise(resolve => setTimeout(resolve, delay * attempt));
    }
  }
  
  throw FirebaseErrorHandler.handle(lastError);
}

// Enhanced authentication with proper error handling
export async function ensureAuth(): Promise<string> {
  try {
    // If already signed in, return uid
    if (auth.currentUser) {
      return auth.currentUser.uid;
    }

    // Wait for existing session with timeout
    const uid = await new Promise<string | null>((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('Authentication timeout'));
      }, 3000); // Reduced timeout

      const unsub = onAuthStateChanged(auth, (user: User | null) => {
        clearTimeout(timeout);
        unsub();
        resolve(user?.uid ?? null);
      });
    });

    if (uid) return uid;

    // Fallback: anonymous sign-in
    console.log('Attempting anonymous sign-in...');
    const { user } = await signInAnonymously(auth);
    if (!user) {
      throw new Error('Failed to create anonymous user');
    }
    
    console.log('Anonymous sign-in successful:', user.uid);
    return user.uid;
  } catch (error) {
    console.error('Authentication error:', error);
    throw FirebaseErrorHandler.handle(error);
  }
}

// Enhanced data validation
export function validateTurfEstimateData(data: Partial<TurfEstimateData>): TurfEstimateData {
  const errors: string[] = [];
  
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters');
  }
  
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) {
    errors.push('Valid email is required');
  }
  
  if (!data.phone || !/^\+91[6-9]\d{9}$/.test(data.phone)) {
    errors.push('Valid Indian mobile number is required');
  }
  
  if (!data.timeline) {
    errors.push('Timeline is required');
  }
  
  if (!data.mode || !['standard', 'cage360'].includes(data.mode)) {
    errors.push('Valid mode is required');
  }
  
  if (!data.environment || !['indoor', 'outdoor'].includes(data.environment)) {
    errors.push('Valid environment is required');
  }
  
  if (!data.grassType || !['rubber', 'eco', 'aqua'].includes(data.grassType)) {
    errors.push('Valid grass type is required');
  }
  
  if (!data.sizeSqft || data.sizeSqft < 4000) {
    errors.push('Size must be at least 4000 sq.ft');
  }
  
  if (!data.rateMin || data.rateMin < 0) {
    errors.push('Valid minimum rate is required');
  }
  
  if (!data.rateMax || data.rateMax < (data.rateMin || 0)) {
    errors.push('Valid maximum rate is required');
  }
  
  if (!data.totalEstimate || data.totalEstimate < 0) {
    errors.push('Valid total estimate is required');
  }
  
  if (errors.length > 0) {
    throw new Error(`Validation failed: ${errors.join(', ')}`);
  }
  
  return data as TurfEstimateData;
}

// Enhanced save function with validation and retry
export async function saveTurfEstimate(data: Partial<TurfEstimateData>): Promise<DocumentReference> {
  try {
    // Validate data
    const validatedData = validateTurfEstimateData(data);
    
    // Ensure authentication
    const uid = await ensureAuth();
    
    // Prepare document with server timestamp
    const docData: TurfEstimateData = {
      ...validatedData,
      createdBy: uid,
      createdAt: serverTimestamp() as Timestamp,
    };
    
    // Save with retry logic
    return await withRetry(async () => {
      return await addDoc(collection(db, "turf_estimates"), docData);
    });
    
  } catch (error) {
    throw FirebaseErrorHandler.handle(error);
  }
}

// Test function with proper error handling
export async function testWrite(): Promise<DocumentReference> {
  try {
    const uid = await ensureAuth();
    const docData = {
      createdBy: uid,
      title: "Test Document",
      amount: 0,
      createdAt: serverTimestamp(),
    };
    
    return await withRetry(async () => {
      return await addDoc(collection(db, "turf_estimates"), docData);
    });
  } catch (error) {
    throw FirebaseErrorHandler.handle(error);
  }
}

export { serverTimestamp };
