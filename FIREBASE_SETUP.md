# Firebase Setup Guide for Turf Calculator

This guide explains how to set up Firebase for the Turf Calculator application with production-ready security and error handling.

## 🔧 Firebase Configuration

### 1. Environment Variables

Create a `.env` file in your project root with the following variables:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

**Important**: Replace the placeholder values with your actual Firebase configuration from the Firebase Console.

### 2. Firebase Console Setup

1. **Create a Firebase Project**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Create a project"
   - Follow the setup wizard

2. **Enable Authentication**:
   - Go to Authentication > Sign-in method
   - Enable "Anonymous" authentication
   - This allows users to save estimates without creating accounts

3. **Set up Firestore Database**:
   - Go to Firestore Database
   - Click "Create database"
   - Choose "Start in test mode" (we'll secure it later)
   - Select a location close to your users

4. **Configure Security Rules**:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       // Allow anonymous users to write to turf_estimates collection
       match /turf_estimates/{document} {
         allow write: if request.auth != null;
         allow read: if false; // Only allow writes, not reads
       }
     }
   }
   ```

## 🚀 Production Features

### Enhanced Error Handling
- **Retry Logic**: Automatic retry with exponential backoff for failed operations
- **Timeout Protection**: 5-second timeout for authentication operations
- **User-Friendly Errors**: Clear error messages for different failure scenarios

### Data Validation
- **Input Sanitization**: All user inputs are validated before saving
- **Type Safety**: Full TypeScript support with proper interfaces
- **Business Logic Validation**: Ensures data meets business requirements

### Security Features
- **Environment Variables**: Sensitive config moved to environment variables
- **Anonymous Authentication**: No user data collection, privacy-focused
- **Firestore Rules**: Proper security rules to prevent unauthorized access

### User Experience
- **Loading States**: Visual feedback during operations
- **Non-blocking Saves**: Estimates show immediately, saves happen in background
- **Error Recovery**: Graceful handling of network issues

## 📊 Data Structure

The application saves the following data to Firestore:

```typescript
interface TurfEstimateData {
  name: string;                    // User's name
  email: string;                   // User's email
  phone: string;                   // User's phone (normalized to +91 format)
  timeline: string;                // Construction timeline
  mode: 'standard' | 'cage360';   // Turf mode
  environment: 'indoor' | 'outdoor'; // Environment type
  grassType: 'rubber' | 'eco' | 'aqua'; // Grass type
  sizeSqft: number;               // Ground size in square feet
  rateMin: number;                // Minimum rate per sq.ft
  rateMax: number;                // Maximum rate per sq.ft
  totalEstimate: number;          // Final calculated estimate
  createdAt: Timestamp;           // Server timestamp
  createdAtIST: string;           // Human-readable IST timestamp
  createdBy?: string;             // Anonymous user ID
}
```

## 🔍 Monitoring and Debugging

### Console Logging
- All Firebase operations are logged to console
- Errors include detailed information for debugging
- Success operations are logged for monitoring

### Error Types
- **Authentication Errors**: Login/signup failures
- **Validation Errors**: Data validation failures
- **Network Errors**: Connection issues
- **Permission Errors**: Security rule violations

## 🛠️ Development vs Production

### Development
- Uses fallback config values if environment variables are missing
- Detailed error logging
- Relaxed validation for testing

### Production
- Requires all environment variables to be set
- Optimized error messages for users
- Strict validation and security rules

## 📈 Performance Optimizations

- **Connection Pooling**: Reuses Firebase connections
- **Batch Operations**: Groups related operations
- **Retry Logic**: Handles temporary network issues
- **Background Saves**: Non-blocking user experience

## 🔒 Security Best Practices

1. **Never commit `.env` files** to version control
2. **Use Firebase Security Rules** to control data access
3. **Validate all inputs** on both client and server
4. **Use HTTPS** in production
5. **Monitor Firebase usage** in the console
6. **Regular security audits** of Firestore rules

## 🚨 Troubleshooting

### Common Issues

1. **"Firebase App already initialized"**
   - This is handled automatically by the code
   - No action needed

2. **"Permission denied"**
   - Check Firestore security rules
   - Ensure anonymous authentication is enabled

3. **"Network error"**
   - Check internet connection
   - Verify Firebase project is active
   - Check if Firebase services are down

4. **"Validation failed"**
   - Check that all required fields are filled
   - Ensure data meets business requirements

### Debug Mode

Enable debug logging by adding this to your browser console:
```javascript
localStorage.setItem('firebase-debug', 'true');
```

## 📞 Support

For technical issues:
1. Check the browser console for error messages
2. Verify Firebase configuration
3. Test with a simple Firebase operation
4. Check Firebase Console for service status

For business logic issues:
1. Review the validation rules in `firebase.ts`
2. Check the calculation logic in `turfcalculator.tsx`
3. Verify form validation requirements
