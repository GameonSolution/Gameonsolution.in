// "use client";

// import { useEffect, useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import TextHoverAnimation from "@/components/textHoverAnimation";
// import TabSEO from "@/components/seoOptimize";
// import { seoData } from "@/common/seoTitleDescription";
// import jsPDF from "jspdf";
// import autoTable from "jspdf-autotable";
// import { FaPlus, FaMinus } from "react-icons/fa";
// import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
// import WhatsAppButton from "./WhatsappButton";
// import AnimatedCard from "./animateCard";
// import { useNavigate } from "react-router-dom";

// // ⬇️ NEW: Firestore
// import { saveTurfEstimate, TurfEstimateData } from "@/lib/firebase";
// /** --------------------------
//  * CONFIG / CONSTANTS
//  * ------------------------- */
// const BASE_PRICE = 1_500_000; // ₹15,00,000 floor
// const ROUND_TO = 50_000; // round up to nearest ₹50,000

// // Utility: Indian-style number formatting (e.g., 33,00,000)
// const formatINR = (n: number) =>
//   new Intl.NumberFormat("en-IN").format(Math.round(n));
// const formatINRCurrency = (n: number) => `₹${formatINR(n)}`;

// // ⬇️ NEW: validators
// const isValidEmail = (email: string) =>
//   /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());

// /** Accept:
//  *  - 10 digits starting 6–9 (e.g. 9876543210)
//  *  - +91 and separators allowed (e.g. +91 98765 43210)
//  */
// const isValidIndianMobile = (raw: string) => {
//   const digits = raw.replace(/\D/g, "");
//   if (digits.length === 10) return /^[6-9]\d{9}$/.test(digits);
//   if (digits.length === 12 && digits.startsWith("91"))
//     return /^[6-9]\d{9}$/.test(digits.slice(2));
//   return false;
// };

// const normalizeIndianMobile = (raw: string) => {
//   const digits = raw.replace(/\D/g, "");
//   if (digits.length === 10) return `+91${digits}`;
//   if (digits.length === 12 && digits.startsWith("91")) return `+${digits}`;
//   return raw; // fallback
// };

// const INCLUDED_WORKS_TITLES = [
//   "Turf Installation",
//   "Synthetic Turf Platform",
//   "Drainage System",
//   "Fabrication",
//   "Painting",
//   "Goal Posts",
//   "Net Covering",
//   "Electrical Wiring",
//   "Lighting Works - 200W Flood Light (Round)",
//   "Field Markings",
// ];

// // Detailed scope for PDF
// const DETAILED_SCOPE: Array<{ title: string; details: string }> = [
//   {
//     title: "Turf Installation",
//     details:
//       "Joint Tape: 30 cm non-woven seaming tape.\nAdhesive: Ultra Bond Turf (Fevicol IS SR998).\nSilica Sand: 10/24 grade diced (Micro Size) — 500 g/sq.ft for Eco-Friendly grass & 2.5 kg/sq.ft for Rubber Infill grass.\nRubber Granules: Crumb rubber 1–4 mm, 600 g/sq.ft (for Rubber Infill grass).\nLabour: Installation using professional and skilled labour.",
//   },
//   {
//     title: "Synthetic Turf Platform",
//     details:
//       "a) Boundary wall using solid brick/concrete.\nb) Filling using 40 mm aggregate.\nc) Filling using 20 mm aggregate.\nd) Filling using 6 mm aggregate.\ne) Initial compaction + compaction above 40 mm & 20 mm aggregates.\nSub-base total thickness: 6 inches.",
//   },
//   {
//     title: "Drainage System",
//     details:
//       "Fixing of holed ISI-certified 4-inch, 4 kg PVC pipes beneath the sub-base for efficient drainage.",
//   },
//   {
//     title: "Fabrication",
//     details:
//       "a) All ISI-certified: Fixing of 16-gauge poles & interlocking H poles up to 30' height from ground level; box-frame pole in the centre with bearing arch truss.\nb) RCC foundation for industrial leg bottoms at ~3 ft depth & 30 cm width.\nc) H-frame at middle using square pipes.\nd) Two cross bars using rectangle pipes (top & bottom).\ne) Doors with latches: 2.5 m height × 1.1 m width using rectangle pipes.",
//   },
//   {
//     title: "Painting",
//     details:
//       "Two coats Epoxy Primer on all MS pipes + two coats industrial enamel paint for long-term protection.",
//   },
//   {
//     title: "Goal Posts",
//     details:
//       "One set of 5’s goal post using 3-inch round pipes (16 gauge) including ‘Garware’ brand white goal-post nets (5 mm thickness, 100 mm mesh).",
//   },
//   {
//     title: "Net Covering",
//     details:
//       "Side Nets: Garware brand braided net, 2.5 mm thickness, 50 mm mesh.\nTop Net: Garware brand, black braided net, 1.5 mm thickness, 40 mm mesh.",
//   },
//   {
//     title: "Electrical Wiring",
//     details:
//       "Distribution board (assumed 5 m from ground to office), 2.5 mm copper wire, cabling, and all necessary electrical works.",
//   },
//   {
//     title: "Lighting Works",
//     details:
//       "Heavy-duty 200 W high-bay lights with Philips OEM driver & lens; 60° beam angle, optimized for football turf; 2-year warranty.",
//   },
//   {
//     title: "Markings",
//     details:
//       "White line marking using white grass: 14/10 cm stitch; 30/50 mm pile height for 5’s as per tournament standards.",
//   },
// ];

// // Exact pricing bands
// const PRICE_BANDS: Record<
//   "outdoor" | "indoor",
//   Record<"rubber" | "eco" | "aqua", [number, number]>
// > = {
//   outdoor: {
//     rubber: [260, 280],
//     eco: [280, 300],
//     aqua: [300, 320],
//   },
//   indoor: {
//     rubber: [480, 500],
//     eco: [500, 530], // "edo" clarified to eco
//     aqua: [520, 540],
//   },
// };

// // 360° (cage) constraints
// const CAGE_RANGE: [number, number] = [320, 340];

// const faqsData = [
//   {
//     question: "How is the turf installation cost calculated?",
//     answer:
//       "Cost is based on ground size (sq.ft), grass type, and environment. A base project floor ensures a complete turnkey scope with all inclusions.",
//   },
//   {
//     question: "What is the cost per sq.ft in this calculator?",
//     answer:
//       "Outdoor: Rubber ₹260–₹280, Eco ₹280–₹300, Aqua ₹300–₹320. Indoor: Rubber ₹480–₹500, Eco ₹500–₹530, Aqua ₹520–₹540. 360° (cage) uses Eco ₹320–₹340.",
//   },
//   {
//     question: "What’s the minimum project size?",
//     answer:
//       "Standard turfs require a minimum of 4,000 sq.ft. 360° cage turfs require a minimum of 10,000 sq.ft (Eco only).",
//   },
//   {
//     question: "Is there a minimum project value?",
//     answer:
//       "Yes. The base turnkey floor is ₹15,00,000. Even if material totals are lower, the project will not be quoted below this floor.",
//   },
//   {
//     question: "Can I download a PDF report?",
//     answer:
//       "Yes. You can download a professional PDF with project details, pricing, and a detailed scope of work.",
//   },
// ];

// const blogs = [
//   {
//     id: 1,
//     slug: "turf-construction-cost-tamilnadu",
//     title: "Turf Construction Cost in Tamil Nadu (2025 Guide)",
//     excerpt:
//       "Planning to build a turf in Tamil Nadu? Here’s a detailed guide on construction costs, from land preparation to lighting and turf material.",
//     image: "/blog/Blog21.webp",
//   },
//   {
//     id: 2,
//     slug: "gen-alpha-aqua-eco-friendly-turf-rajapalayam",
//     title: "South TN’s First Aqua Eco-Friendly Turf Is Here - GEN ALPHA",
//     excerpt:
//       "GameOn Solution launches GEN ALPHA in Rajapalayam — South Tamil Nadu's first aqua blue, eco-friendly multi-sport turf.",
//     image: "/blog/Blog34.webp",
//   },
//   {
//     id: 3,
//     slug: "sports-infrastructure-products-gameon-solution",
//     title: "What We Build at GameOn Solution - Our Sports Infra Products",
//     excerpt:
//       "From multi-sport turfs to skating tracks and pickleball courts, we build world-class sports infrastructure across South India.",
//     image: "/blog/Blog35.webp",
//   },
// ];

// type EnvType = "indoor" | "outdoor";
// type GrassType = "rubber" | "eco" | "aqua";
// type TurfMode = "standard" | "cage360";

// export default function TurfCalculator() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     mode: "standard" as TurfMode, // "standard" | "cage360"
//     environment: "outdoor" as EnvType,
//     grassType: "eco" as GrassType,
//     size: 4000,
//     name: "",
//     email: "",
//     phone: "",
//     timeline: "",
//   });

//   const [result, setResult] = useState<number | null>(null);
//   const [openIndex, setOpenIndex] = useState<number | null>(0);
//   const [error, setError] = useState<string>("");
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [isSaving, setIsSaving] = useState<boolean>(false);
//   const [isSendingEmail, setIsSendingEmail] = useState<boolean>(false);
//   const [firebaseAvailable, setFirebaseAvailable] = useState<boolean>(true);
//   const [emailSent, setEmailSent] = useState<boolean>(false);

//   const minSqft = useMemo(
//     () => (formData.mode === "cage360" ? 10000 : 4000),
//     [formData.mode]
//   );

//   // ⬇️ NEW: derived validity state (blocks button & price until valid)
//   const formValid =
//     formData.name.trim().length > 1 &&
//     isValidEmail(formData.email) &&
//     isValidIndianMobile(formData.phone) &&
//     !!formData.timeline &&
//     formData.size >= minSqft;

//   // Enforce constraints when switching modes
//   useEffect(() => {
//     if (formData.mode === "cage360") {
//       setFormData((d) => ({
//         ...d,
//         environment: "outdoor",
//         grassType: "eco",
//         size: Math.max(d.size, 10000),
//       }));
//     } else {
//       setFormData((d) => ({ ...d, size: Math.max(d.size, 4000) }));
//     }
//     setResult(null);
//     setError("");
//   }, [formData.mode]);

//   const handleBlogClick = (slug: string) => navigate(`/blog/${slug}`);

//   // ✅ Typed price-band access
//   const getRateRange = (): [number, number] => {
//     if (formData.mode === "cage360") return CAGE_RANGE;
//     const env: EnvType = formData.environment;
//     const grass: GrassType = formData.grassType;
//     return (
//       PRICE_BANDS as Record<EnvType, Record<GrassType, [number, number]>>
//     )[env][grass];
//   };

//   const getAvgRate = () => {
//     const [min, max] = getRateRange();
//     return (min + max) / 2;
//   };

//   // Round UP
//   const roundUp = (n: number, step: number) => Math.ceil(n / step) * step;

//   // ⬇️ NEW: IST time helpers
//   const getISTNow = () => {
//     const now = new Date();
//     const istString = now.toLocaleString("en-IN", {
//       timeZone: "Asia/Kolkata",
//       year: "numeric",
//       month: "2-digit",
//       day: "2-digit",
//       hour: "2-digit",
//       minute: "2-digit",
//       second: "2-digit",
//       hour12: false,
//     });
//     return { istString }; // e.g., "04/09/2025, 22:35:10"
//   };

//   // ⬇️ NEW: Save to Firestore with enhanced error handling and local fallback
//   const saveLead = async (
//     finalPrice: number,
//     rateRange: [number, number]
//   ): Promise<boolean> => {
//     try {
//       setIsSaving(true);
//       const { istString } = getISTNow();

//       const estimateData: Partial<TurfEstimateData> = {
//         name: formData.name.trim(),
//         email: formData.email.trim().toLowerCase(),
//         phone: normalizeIndianMobile(formData.phone),
//         timeline: formData.timeline,
//         mode: formData.mode,
//         environment: formData.environment,
//         grassType: formData.grassType,
//         sizeSqft: formData.size,
//         rateMin: rateRange[0],
//         rateMax: rateRange[1],
//         totalEstimate: finalPrice,
//         createdAtIST: istString, // Human-friendly IST
//       };

//       // Try Firebase first
//       try {
//         await saveTurfEstimate(estimateData);
//         console.log("Estimate saved successfully to Firebase");
//         return true;
//       } catch (firebaseError: any) {
//         console.warn(
//           "Firebase save failed, falling back to local storage:",
//           firebaseError
//         );

//         // Fallback to localStorage
//         const localEstimates = JSON.parse(
//           localStorage.getItem("turfEstimates") || "[]"
//         );
//         localEstimates.push({
//           ...estimateData,
//           id: Date.now().toString(),
//           savedAt: new Date().toISOString(),
//         });
//         localStorage.setItem("turfEstimates", JSON.stringify(localEstimates));
//         console.log("Estimate saved to local storage as fallback");
//         return false; // Return false to indicate Firebase failed
//       }
//     } catch (error) {
//       console.error("Failed to save lead:", error);
//       return false;
//     } finally {
//       setIsSaving(false);
//     }
//   };

//   const calculateEstimate = async () => {
//     // Require valid details BEFORE showing price
//     if (!formValid) {
//       setResult(null);
//       setError(
//         !formData.name.trim()
//           ? "Please enter your name."
//           : !isValidEmail(formData.email)
//           ? "Please enter a valid email address."
//           : !isValidIndianMobile(formData.phone)
//           ? "Please enter a valid Indian mobile number."
//           : !formData.timeline
//           ? "Please select a construction time."
//           : formData.size < minSqft
//           ? formData.mode === "cage360"
//             ? "Minimum 10,000 sq.ft is required for 360° Turf."
//             : "Minimum 4,000 sq.ft is required."
//           : "Please complete all required fields."
//       );
//       return;
//     }

//     setError("");
//     setIsLoading(true);

//     try {
//       const avgRate = getAvgRate();
//       const rawCost = avgRate * formData.size;
//       const floored = Math.max(rawCost, BASE_PRICE);
//       const rounded = roundUp(floored, ROUND_TO);

//       // Calculate first, then save
//       setResult(rounded);

//       // Save lead in background (non-blocking)
//       const saveSuccess = await saveLead(rounded, getRateRange());
//       if (!saveSuccess) {
//         setFirebaseAvailable(false);
//         // Show warning but don't block the user
//         console.warn("Estimate saved locally but failed to sync to server");
//       }
//     } catch (error) {
//       console.error("Calculation error:", error);
//       setError("Failed to calculate estimate. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const logoBase64 = "data:image/jpeg;base64,/9j/4AAQSk..."; // your logo

//   // Generate PDF and send via email
//   const sendEstimateEmail = async () => {
//     if (!result) return;

//     setIsSendingEmail(true);
//     setError("");

//     try {
//       // Generate PDF
//       const pdfBlob = await generatePDF();

//       // Prepare form data
//       const formDataToSend = new FormData();
//       formDataToSend.append(
//         "pdf",
//         pdfBlob,
//         `Turf-Cost-Estimate-${formData.name.replace(/\s+/g, "-")}.pdf`
//       );

//       // Add estimate data
//       const estimateData = {
//         name: formData.name.trim(),
//         email: formData.email.trim().toLowerCase(),
//         phone: normalizeIndianMobile(formData.phone),
//         timeline: formData.timeline,
//         mode: formData.mode,
//         environment: formData.environment,
//         grassType: formData.grassType,
//         sizeSqft: formData.size,
//         rateMin: getRateRange()[0],
//         rateMax: getRateRange()[1],
//         totalEstimate: result!,
//         createdAtIST: getISTNow().istString,
//       };

//       // Add all form fields to FormData
//       Object.keys(estimateData).forEach((key) => {
//         const value = estimateData[key as keyof typeof estimateData];
//         formDataToSend.append(key, String(value));
//       });

//       // Send to backend API
//       // const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/send-estimate`, {
//       //   method: 'POST',
//       //   body: formDataToSend,
//       // });
//       const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:3001";

//       const response = await fetch(`${baseUrl}/api/send-estimate`, {
//         method: "POST",
//         body: formDataToSend,
//       });

//       const text = await response.text();
//       let responseData;
//       try {
//         responseData = JSON.parse(text);
//       } catch {
//         console.error("Raw server error:", text);
//         throw new Error("Server did not return JSON");
//       }

//       // const responseData = await response.json();

//       if (responseData.success) {
//         setEmailSent(true);
//         console.log("Email sent successfully:", responseData.messageId);
//       } else {
//         throw new Error(responseData.message || "Failed to send email");
//       }
//     } catch (error) {
//       console.error("Email sending failed:", error);
//       setError(
//         "Failed to send email. Please try again or contact support.\n" +
//           "Also, kindly check your Spam or Promotions folder in case it was filtered."
//       );
//     } finally {
//       setIsSendingEmail(false);
//     }
//   };

//   const generatePDF = async (): Promise<Blob> => {
//     const doc = new jsPDF("p", "pt", "a4");
//     const typedDoc = doc as jsPDF & { lastAutoTable: { finalY: number } };

//     // Brand header
//     doc.setFillColor(8, 47, 14);
//     doc.rect(0, 0, doc.internal.pageSize.getWidth(), 80, "F");

//     if (logoBase64) doc.addImage(logoBase64, "JPEG", 255, 15, 85, 50);

//     doc.setFont("helvetica", "bold");
//     doc.setTextColor(255, 223, 0);
//     doc.setFontSize(18);
//     doc.text("GameOn Solution", 40, 50);

//     doc.setFont("helvetica", "normal");
//     doc.setTextColor(255, 255, 255);
//     doc.setFontSize(12);
//     doc.text("Turf Cost Estimate Report", 40, 68);

//     let startY = 100;

//     const modeLabel =
//       formData.mode === "cage360" ? "360° Turf (Cage)" : "Standard Turf";
//     const grassLabel =
//       formData.mode === "cage360"
//         ? "Eco Friendly (360° only)"
//         : formData.grassType === "eco"
//         ? "Eco Friendly"
//         : formData.grassType === "aqua"
//         ? "Aqua"
//         : "Rubber";
//     const envLabel =
//       formData.mode === "cage360"
//         ? "Outdoor (locked)"
//         : formData.environment === "indoor"
//         ? "Indoor"
//         : "Outdoor";
//     const [minRate, maxRate] = getRateRange();

//     // Personal Info
//     autoTable(doc, {
//       startY,
//       theme: "plain",
//       head: [["Personal Information", ""]],
//       body: [
//         ["Name", formData.name || "-"],
//         ["Email", formData.email || "-"],
//         ["Phone", normalizeIndianMobile(formData.phone) || "-"],
//         ["Timeline", formData.timeline || "-"],
//       ],
//       styles: { fontSize: 10, cellPadding: 6 },
//       headStyles: {
//         fillColor: [247, 247, 247],
//         textColor: 20,
//         fontStyle: "bold",
//       },
//       columnStyles: {
//         0: { cellWidth: 180, fontStyle: "bold" },
//         1: { cellWidth: 340 },
//       },
//       margin: { left: 40, right: 40 },
//     });

//     // Project Details
//     startY = typedDoc.lastAutoTable.finalY + 14;
//     autoTable(doc, {
//       startY,
//       theme: "plain",
//       head: [["Project Details", ""]],
//       body: [
//         ["Project Mode", modeLabel],
//         ["Environment", envLabel],
//         ["Grass Type", grassLabel],
//         ["Ground Size", `${formatINR(formData.size)} sq.ft`],
//         [
//           "Rate Range (₹/sq.ft)",
//           `${formatINR(minRate)} – ${formatINR(maxRate)}`,
//         ],
//       ],
//       styles: { fontSize: 10, cellPadding: 6 },
//       headStyles: {
//         fillColor: [247, 247, 247],
//         textColor: 20,
//         fontStyle: "bold",
//       },
//       columnStyles: {
//         0: { cellWidth: 180, fontStyle: "bold" },
//         1: { cellWidth: 340 },
//       },
//       margin: { left: 40, right: 40 },
//     });

//     // Cost Summary
//     startY = typedDoc.lastAutoTable.finalY + 14;
//     autoTable(doc, {
//       startY,
//       theme: "grid",
//       head: [["Cost Summary", ""]],
//       body: [
//         ["Base Project Floor", formatINRCurrency(BASE_PRICE)],
//         ["Total Estimate", formatINRCurrency(result || 0)],
//         [
//           "Note",
//           "Final pricing subject to site evaluation, access, civil conditions, and selected specifications. Amounts rounded up for turnkey completion.",
//         ],
//       ],
//       styles: { fontSize: 11, cellPadding: 8 },
//       headStyles: { fillColor: [255, 223, 0], textColor: 0, fontStyle: "bold" },
//       columnStyles: {
//         0: { cellWidth: 180, fontStyle: "bold" },
//         1: { cellWidth: 340 },
//       },
//       margin: { left: 40, right: 40 },
//     });

//     // Inclusions (list)
//     startY = typedDoc.lastAutoTable.finalY + 14;
//     autoTable(doc, {
//       startY,
//       theme: "plain",
//       head: [["Scope of Work (Included)"]],
//       body: INCLUDED_WORKS_TITLES.map((t) => [`• ${t}`]),
//       styles: { fontSize: 10, cellPadding: 5 },
//       headStyles: {
//         fillColor: [247, 247, 247],
//         textColor: 20,
//         fontStyle: "bold",
//       },
//       margin: { left: 40, right: 40 },
//     });

//     // Detailed scope
//     startY = typedDoc.lastAutoTable.finalY + 10;
//     autoTable(doc, {
//       startY,
//       theme: "striped",
//       head: [["Detailed Scope of Work", "Specifications"]],
//       body: DETAILED_SCOPE.map((s) => [s.title, s.details]),
//       styles: { fontSize: 10, cellPadding: 6, overflow: "linebreak" },
//       headStyles: { fillColor: [8, 47, 14], textColor: 255, fontStyle: "bold" },
//       columnStyles: {
//         0: { cellWidth: 180, fontStyle: "bold" },
//         1: { cellWidth: 340 },
//       },
//       margin: { left: 40, right: 40 },
//     });

//     // Footer
//     doc.setFont("helvetica", "normal");
//     doc.setFontSize(9);
//     doc.setTextColor(120);
//     doc.text(
//       "Generated by GameOn Solution • www.gameonsolution.in",
//       doc.internal.pageSize.getWidth() / 2,
//       doc.internal.pageSize.getHeight() - 24,
//       { align: "center" }
//     );

//     // Return PDF as blob instead of saving
//     return new Promise((resolve) => {
//       const pdfBlob = doc.output("blob");
//       resolve(pdfBlob);
//     });
//   };

//   // UI helpers
//   const priceBandLabel = useMemo(() => {
//     const [min, max] = getRateRange();
//     return `₹${formatINR(min)}–₹${formatINR(max)} / sq.ft`;
//   }, [formData.environment, formData.grassType, formData.mode]);

//   return (
//     <>
//       <TabSEO
//         title="Turf Cost Calculator | GameOn Solution"
//         description="Calculate accurate turf installation costs with strict base pricing, professional scope, and a polished PDF quote."
//         keywords="Turf Cost Calculator, GameOn Solution, sports infrastructure, artificial turf cost, turf installation India"
//         image={seoData.blog.image}
//         url="https://gameonsolution.in/turf-calculator"
//       />

//       <main className="min-h-screen bg-gradient-to-br from-green-950 to-black text-white px-6 md:px-20 pt-28 pb-16">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-center max-w-4xl mx-auto mb-12"
//         >
//           <p className="uppercase text-secondary text-sm tracking-widest font-secondary">
//             Instant Estimate
//           </p>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-primary text-white uppercase leading-tight flex flex-wrap justify-center gap-2">
//             <TextHoverAnimation text="Turf Calculator" />
//           </h1>
//           <p className="mt-4 text-lg text-gray-300">
//             AI-assisted estimates with <strong>strict project minimums</strong>{" "}
//             and a <strong>complete turnkey scope</strong>.
//           </p>
//         </motion.div>

//         <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
//           {/* LEFT: FORM */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="bg-white/10 rounded-2xl shadow-2xl p-8 backdrop-blur-md"
//           >
//             <div className="grid gap-5">
//               {/* Mode */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                 <button
//                   onClick={() =>
//                     setFormData((d) => ({ ...d, mode: "standard" }))
//                   }
//                   className={`p-3 rounded-xl border text-sm font-semibold ${
//                     formData.mode === "standard"
//                       ? "bg-yellow-400 text-black border-yellow-400"
//                       : "bg-black/60 border-gray-700"
//                   }`}
//                 >
//                   Standard Turf
//                 </button>
//                 <button
//                   onClick={() =>
//                     setFormData((d) => ({ ...d, mode: "cage360" }))
//                   }
//                   className={`p-3 rounded-xl border text-sm font-semibold ${
//                     formData.mode === "cage360"
//                       ? "bg-yellow-400 text-black border-yellow-400"
//                       : "bg-black/60 border-gray-700"
//                   }`}
//                 >
//                   360° Turf (Cage)
//                 </button>
//               </div>

//               {/* Contact (all required + Google autofill hints) */}
//               <input
//                 id="name"
//                 name="name"
//                 autoComplete="name"
//                 autoCapitalize="words"
//                 required
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full p-3 rounded-xl bg-black/60 text-white border border-gray-700"
//                 value={formData.name}
//                 onChange={(e) =>
//                   setFormData({ ...formData, name: e.target.value })
//                 }
//               />

//               <input
//                 id="email"
//                 name="email"
//                 autoComplete="email"
//                 required
//                 type="email"
//                 placeholder="Email Address"
//                 className={`w-full p-3 rounded-xl bg-black/60 text-white border ${
//                   formValid || !formData.email
//                     ? "border-gray-700"
//                     : "border-red-500"
//                 }`}
//                 value={formData.email}
//                 onChange={(e) =>
//                   setFormData({ ...formData, email: e.target.value })
//                 }
//                 onBlur={(e) =>
//                   !isValidEmail(e.target.value) &&
//                   setError("Please enter a valid email address.")
//                 }
//               />

//               <input
//                 id="phone"
//                 name="tel"
//                 autoComplete="tel"
//                 inputMode="tel"
//                 pattern="[+0-9\s-]*"
//                 maxLength={16}
//                 required
//                 type="tel"
//                 placeholder="Mobile Number (India)"
//                 className={`w-full p-3 rounded-xl bg-black/60 text-white border ${
//                   formValid || !formData.phone
//                     ? "border-gray-700"
//                     : "border-red-500"
//                 }`}
//                 value={formData.phone}
//                 onChange={(e) =>
//                   setFormData({ ...formData, phone: e.target.value })
//                 }
//                 onBlur={(e) =>
//                   !isValidIndianMobile(e.target.value) &&
//                   setError("Please enter a valid Indian mobile number.")
//                 }
//               />

//               <select
//                 id="timeline"
//                 name="timeline"
//                 autoComplete="off"
//                 required
//                 className="w-full p-3 rounded-xl bg-black/60 text-white border border-gray-700"
//                 value={formData.timeline}
//                 onChange={(e) =>
//                   setFormData({ ...formData, timeline: e.target.value })
//                 }
//               >
//                 <option value="">Select Construction Time</option>
//                 <option value="15 Days">15 Days</option>
//                 <option value="1 Month">1 Month</option>
//                 <option value="45 Days">45 Days</option>
//                 <option value="2 Months">2 Months</option>
//               </select>

//               {/* Environment (hidden for 360°) */}
//               {formData.mode !== "cage360" && (
//                 <select
//                   className="w-full mt-1 p-3 rounded-xl bg-black/60 text-white border border-gray-700"
//                   value={formData.environment}
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       environment: e.target.value as EnvType,
//                     })
//                   }
//                 >
//                   <option value="indoor">Indoor</option>
//                   <option value="outdoor">Outdoor</option>
//                 </select>
//               )}

//               {/* Grass */}
//               <select
//                 className="w-full mt-1 p-3 rounded-xl bg-black/60 text-white border border-gray-700"
//                 value={formData.grassType}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     grassType: e.target.value as GrassType,
//                   })
//                 }
//                 disabled={formData.mode === "cage360"}
//                 title={
//                   formData.mode === "cage360"
//                     ? "Eco Friendly is mandatory for 360° Turf"
//                     : ""
//                 }
//               >
//                 {(formData.mode === "cage360"
//                   ? [{ name: "Eco Friendly", type: "eco" as GrassType }]
//                   : [
//                       { name: "Eco Friendly", type: "eco" as GrassType },
//                       { name: "Rubber Infilled", type: "rubber" as GrassType },
//                       { name: "Aqua Eco Friendly", type: "aqua" as GrassType },
//                     ]
//                 ).map((g) => (
//                   <option key={g.type} value={g.type}>
//                     {g.name}
//                   </option>
//                 ))}
//               </select>

//               {/* Size */}
//               <div className="relative">
//                 <input
//                   type="number"
//                   required
//                   className={`w-full p-3 pr-28 rounded-xl bg-black/60 text-white border ${
//                     formData.size < minSqft
//                       ? "border-red-500"
//                       : "border-gray-700"
//                   }`}
//                   value={formData.size}
//                   onChange={(e) => {
//                     const v = Math.max(0, +e.target.value || 0);
//                     setFormData((d) => ({ ...d, size: v }));
//                     setResult(null);
//                   }}
//                   min={minSqft}
//                   placeholder="Ground Size"
//                 />
//                 <span className="absolute top-1/2 right-4 -translate-y-1/2 text-sm text-gray-400">
//                   sq.ft
//                 </span>
//                 <div className="mt-1 text-xs text-gray-400">
//                   {formData.mode === "cage360"
//                     ? "Minimum 10,000 sq.ft (360° Turf)"
//                     : "Minimum 4,000 sq.ft"}
//                 </div>
//                 {formData.size < minSqft && (
//                   <p className="text-sm text-red-400 mt-1">
//                     {formData.mode === "cage360"
//                       ? "Enter at least 10,000 sq.ft."
//                       : "Enter at least 4,000 sq.ft."}
//                   </p>
//                 )}
//               </div>

//               {/* Band helper */}
//               <div className="text-sm text-yellow-300">
//                 Current Rate Band:{" "}
//                 <span className="font-semibold">{priceBandLabel}</span>
//               </div>

//               {/* Calculate */}
//               <button
//                 onClick={calculateEstimate}
//                 className={`w-full mt-4 font-semibold py-3 rounded-xl transition ${
//                   formValid && !isLoading
//                     ? "bg-secondary text-black hover:bg-yellow-400"
//                     : "bg-gray-600 text-gray-300 cursor-not-allowed"
//                 }`}
//                 disabled={!formValid || isLoading}
//                 aria-disabled={!formValid || isLoading}
//                 title={
//                   !formValid
//                     ? "Fill all required details to get estimate"
//                     : isLoading
//                     ? "Calculating..."
//                     : "Calculate"
//                 }
//               >
//                 {isLoading ? (
//                   <div className="flex items-center justify-center gap-2">
//                     <div className="w-4 h-4 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
//                     Calculating...
//                   </div>
//                 ) : (
//                   "Calculate Estimate"
//                 )}
//               </button>

//               {/* Error */}
//               {error && <p className="text-red-400 text-sm">{error}</p>}

//               {/* Saving indicator */}
//               {isSaving && (
//                 <div className="text-yellow-400 text-sm flex items-center gap-2">
//                   <div className="w-3 h-3 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
//                   Saving estimate...
//                 </div>
//               )}

//               {/* Firebase status indicator */}
//               {!firebaseAvailable && (
//                 <div className="text-orange-400 text-sm flex items-center gap-2">
//                   <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
//                   Estimate saved locally (Firebase unavailable)
//                 </div>
//               )}

//               {/* Email sending indicator */}
//               {isSendingEmail && (
//                 <div className="text-blue-400 text-sm flex items-center gap-2">
//                   <div className="w-3 h-3 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
//                   Sending estimate to your email...
//                 </div>
//               )}
//             </div>
//           </motion.div>

//           {/* RIGHT: RESULT */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="flex flex-col items-center"
//           >
//             <h2 className="text-2xl font-bold mb-6 text-secondary uppercase text-center">
//               Estimated Cost Breakdown
//             </h2>
//             <p className="text-base text-gray-300 mb-4 text-center">
//               Project floor enforced at{" "}
//               <span className="text-yellow-300 font-semibold">
//                 {formatINRCurrency(BASE_PRICE)}
//               </span>{" "}
//               for turnkey scope.
//             </p>

//             {result !== null && (
//               <div className="mt-6 text-center">
//                 <p className="text-xl text-white mb-3">
//                   <span className="font-semibold text-secondary">Total:</span>{" "}
//                   {formatINRCurrency(result || 0)}
//                 </p>

//                 {!emailSent ? (
//                   <button
//                     onClick={sendEstimateEmail}
//                     disabled={isSendingEmail}
//                     className={`group inline-flex items-center gap-2 mt-2 px-6 py-3 rounded-xl border transition shadow-[0_0_0_1px_rgba(234,179,8,0.2)] ${
//                       isSendingEmail
//                         ? "border-gray-500 bg-gray-600 text-gray-300 cursor-not-allowed"
//                         : "border-yellow-400 bg-white/5 text-yellow-300 hover:bg-yellow-400 hover:text-black"
//                     }`}
//                   >
//                     {isSendingEmail ? (
//                       <>
//                         <div className="w-4 h-4 border-2 border-yellow-300 border-t-transparent rounded-full animate-spin"></div>
//                         <span className="font-semibold">Sending Email...</span>
//                       </>
//                     ) : (
//                       <>
//                         <HiOutlineDocumentArrowDown className="text-xl transition-transform group-hover:translate-y-0.5" />
//                         <span className="font-semibold">
//                           Get Estimate via Email
//                         </span>
//                       </>
//                     )}
//                   </button>
//                 ) : (
//                   <div className="mt-2 px-6 py-3 rounded-xl bg-green-900/30 border border-green-500 text-green-300">
//                     <div className="flex items-center gap-2">
//                       <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
//                         <span className="text-xs text-white">✓</span>
//                       </div>
//                       <span className="font-semibold">
//                         Estimate sent to your email!
//                       </span>
//                     </div>
//                     <p className="text-sm mt-1 text-green-200">
//                       Check your inbox for the detailed PDF estimate. <br />
//                       <span className="text-green-400">
//                         If you don’t see it, please check your Spam or
//                         Promotions folder as well.
//                       </span>
//                     </p>
//                   </div>
//                 )}

//                 <div className="mt-4 text-xs text-gray-400">
//                   Rounded to nearest {formatINRCurrency(ROUND_TO)} for
//                   presentation.
//                 </div>
//               </div>
//             )}
//           </motion.div>
//         </section>

//         {/* WHY / FAQ / BLOGS (unchanged aside from copy polish) */}
//         <section className="max-w-5xl mx-auto px-4 md:px-0 mt-16 text-center text-gray-300">
//           <div className="flex flex-col w-full text-center gap-10 max-w-6xl">
//             <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
//               Why Use Our Turf Cost Calculator?
//             </h2>
//             <div className="text-lg mb-3">
//               <a href="https://gameonsolution.in/">
//                 <b>GameOn Solution&apos;s</b>
//               </a>{" "}
//               calculator enforces minimum viable scope for complete execution —
//               civil, lighting, nets, goals, wiring, and markings.
//             </div>
//             <div className="text-lg mb-3">
//               It supports <strong>standard</strong> and{" "}
//               <strong>360° cage</strong> setups with strict minimum sizes to
//               avoid under-scoping.
//             </div>
//             <div className="text-sm text-yellow-300 mt-4 italic mb-10">
//               💬 Need help? WhatsApp: +91 96157 37373.
//             </div>
//           </div>

//           <div className="flex flex-col w-full text-center gap-10 max-w-6xl">
//             <p className="text-[12px] font-secondary uppercase tracking-[1px] text-white">
//               FAQs
//             </p>

//             <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white uppercase leading-tight flex flex-wrap justify-center gap-2">
//               <span>Turf Cost</span>
//               <span className="text-secondary">Calculator</span>
//               <span>FAQs</span>
//             </h1>

//             <div className="flex flex-col w-full border border-white/10 rounded-sm overflow-hidden divide-y divide-white/10">
//               {faqsData.map((faq, index) => (
//                 <div
//                   key={index}
//                   className="bg-black/20 hover:bg-black/30 transition-colors"
//                 >
//                   <button
//                     className="w-full flex justify-between items-center p-4 md:p-6 cursor-pointer text-left"
//                     onClick={() =>
//                       setOpenIndex((prev) => (prev === index ? null : index))
//                     }
//                     aria-expanded={openIndex === index}
//                     aria-controls={`faq-answer-${index}`}
//                   >
//                     <h2
//                       className={`text-lg md:text-xl lg:text-2xl font-primary ${
//                         index % 2 === 0 ? "text-white" : "text-yellow-400"
//                       }`}
//                     >
//                       {faq.question}
//                     </h2>
//                     <span className="text-secondary ml-4">
//                       {openIndex === index ? (
//                         <FaMinus size={16} />
//                       ) : (
//                         <FaPlus size={16} />
//                       )}
//                     </span>
//                   </button>

//                   <div
//                     id={`faq-answer-${index}`}
//                     className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                       openIndex === index
//                         ? "max-h-96 opacity-100"
//                         : "max-h-0 opacity-0"
//                     }`}
//                   >
//                     <p className="p-4 md:p-6 pt-2 md:pt-3 text-base md:text-lg text-white bg-black/10">
//                       {faq.answer}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Learning Hub */}
//         <section className="max-w-6xl mx-auto mt-20 px-6 text-center">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-primary text-white uppercase leading-tight flex flex-wrap justify-center gap-2">
//             <TextHoverAnimation text="Learn Turf. Build Smart." />
//           </h1>
//           <p className="text-lg text-gray-300 mb-10">
//             Get expert insights on <strong>turf installation</strong>,{" "}
//             <strong>ground development</strong>, and{" "}
//             <strong>sports infra business</strong> in India.
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full py-10">
//             {blogs.map((blog) => (
//               <AnimatedCard key={blog.id}>
//                 <div
//                   className="cursor-pointer group bg-black/20 hover:bg-black/30 transition rounded-lg overflow-hidden"
//                   onClick={() => handleBlogClick(blog.slug)}
//                 >
//                   <img
//                     src={blog.image}
//                     alt={blog.title}
//                     className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
//                   />
//                   <div className="p-4">
//                     <h2 className="text-xl font-primary text-secondary group-hover:text-yellow-400">
//                       {blog.title}
//                     </h2>
//                     <p className="text-white text-sm mt-2 opacity-80">
//                       {blog.excerpt}
//                     </p>
//                     <p className="mt-3 text-xs text-yellow-400">Read More →</p>
//                   </div>
//                 </div>
//               </AnimatedCard>
//             ))}
//           </div>
//         </section>

//         {/* CTAs */}
//         {/* <section className="mt-28 text-center bg-white/5 backdrop-blur-md py-14 px-6 rounded-2xl max-w-4xl mx-auto border border-white/10 shadow-xl">
//           <h2 className="text-4xl font-bold text-white mb-4">
//             End-to-End Turf Construction Starts Here
//           </h2>
//           <p className="text-lg text-gray-300 mb-6">
//             GameOn Solution handles <strong>civil work</strong>,{" "}
//             <strong>fencing</strong>, <strong>base prep</strong>, and{" "}
//             <strong>premium turf layering</strong>.
//           </p>
//           <a
//             href="https://gameonsolution.in/"
//             className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold shadow hover:bg-yellow-300 transition"
//           >
//             View Turf Services →
//           </a>
//         </section> */}

//         <section className="text-center mt-28 mb-16 max-w-4xl mx-auto bg-gradient-to-tr from-black/50 to-green-950 p-10 rounded-xl border border-white/20">
//           <h2 className="text-3xl font-bold text-white mb-4">
//             💬 Got Questions? Let&apos;s Talk!
//           </h2>
//           <p className="text-lg text-gray-300 mb-6">
//             From turf estimates to full-site execution — we&apos;re just one
//             click away.
//           </p>
//           <a
//             href="https://gameonsolution.in/contact"
//             className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold shadow hover:bg-yellow-300 transition"
//           >
//             Contact GameOn →
//           </a>
//         </section>

//         <section className="mt-20 max-w-6xl mx-auto text-center text-white px-6">
//           <h3 className="text-2xl font-bold mb-4">
//             Our Turf Projects Are Active In:
//           </h3>
//           <p className="text-sm text-gray-400 mb-4">
//             Explore our local turf construction work across South India.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4 text-yellow-300 text-sm font-medium">
//             {[
//               {
//                 name: "Chennai",
//                 url: "https://gameonsolution.in/blog/gen-alpha-aqua-eco-friendly-turf-rajapalayam",
//               },
//               {
//                 name: "Coimbatore",
//                 url: "https://gameonsolution.in/blog/turf-construction-cost-tamilnadu",
//               },
//               {
//                 name: "Bangalore",
//                 url: "https://gameonsolution.in/blog/bangalore-largest-multipurpose-turf-gameon-solution",
//               },
//               {
//                 name: "Hyderabad",
//                 url: "https://gameonsolution.in/blog/turf-impact-local-sports",
//               },
//               {
//                 name: "Trivandrum",
//                 url: "https://gameonsolution.in/blog/why-gameon-is-best-turf-construction-company",
//               },
//             ].map((city, i) => (
//               <a
//                 key={i}
//                 href={city.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:underline"
//               >
//                 {city.name}
//               </a>
//             ))}
//           </div>
//         </section>
//       </main>

//       <WhatsAppButton />
//     </>
//   );
// }

"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import TextHoverAnimation from "@/components/textHoverAnimation";
import TabSEO from "@/components/seoOptimize";
import { seoData } from "@/common/seoTitleDescription";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { FaPlus, FaMinus } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import WhatsAppButton from "./WhatsappButton";
import AnimatedCard from "./animateCard";
import { useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

// ⬇️ NEW: Firestore
import { saveTurfEstimate, TurfEstimateData } from "@/lib/firebase";
/** --------------------------
 * CONFIG / CONSTANTS
 * ------------------------- */
const BASE_PRICE = 1_500_000; // ₹15,00,000 floor
const ROUND_TO = 50_000; // round up to nearest ₹50,000

// Utility: Indian-style number formatting (e.g., 33,00,000)
const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN").format(Math.round(n));
const formatINRCurrency = (n: number) => `₹${formatINR(n)}`;

// ⬇️ NEW: validators
const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());

/** Accept:
 *  - 10 digits starting 6–9 (e.g. 9876543210)
 *  - +91 and separators allowed (e.g. +91 98765 43210)
 */
const isValidIndianMobile = (raw: string) => {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) return /^[6-9]\d{9}$/.test(digits);
  if (digits.length === 12 && digits.startsWith("91"))
    return /^[6-9]\d{9}$/.test(digits.slice(2));
  return false;
};

// ⬇️ NEW: block trivial/fake mobile numbers like 0000000000 / 1234567890 / 9876543210
const isLikelyFakeIndianMobile = (raw: string) => {
  const digits = raw.replace(/\D/g, "");
  const core =
    digits.startsWith("91") && digits.length === 12 ? digits.slice(2) : digits;

  // all digits same (e.g., 0000000000, 9999999999)
  if (/^(\d)\1{9}$/.test(core)) return true;

  // sequential ascending or descending
  if (core === "1234567890" || core === "0987654321" || core === "9876543210")
    return true;

  return false;
};

const normalizeIndianMobile = (raw: string) => {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) return `+91${digits}`;
  if (digits.length === 12 && digits.startsWith("91")) return `+${digits}`;
  return raw; // fallback
};

// ⬇️ NEW: Axxeler phone format -> 12 digits starting with 91, no plus
const toAxxelerPhone = (raw: string) => {
  const d = raw.replace(/\D/g, "");
  if (d.length === 10) return `91${d}`;
  if (d.length === 12 && d.startsWith("91")) return d;
  const last10 = d.slice(-10);
  return last10.length === 10 ? `91${last10}` : d;
};

const INCLUDED_WORKS_TITLES = [
  "Turf Installation",
  "Synthetic Turf Platform",
  "Drainage System",
  "Fabrication",
  "Painting",
  "Goal Posts",
  "Net Covering",
  "Electrical Wiring",
  "Lighting Works - 200W Flood Light (Round)",
  "Field Markings",
];

// Detailed scope for PDF
const DETAILED_SCOPE: Array<{ title: string; details: string }> = [
  {
    title: "Turf Installation",
    details:
      "Joint Tape: 30 cm non-woven seaming tape.\nAdhesive: Ultra Bond Turf (Fevicol IS SR998).\nSilica Sand: 10/24 grade diced (Micro Size) — 500 g/sq.ft for Eco-Friendly grass & 2.5 kg/sq.ft for Rubber Infill grass.\nRubber Granules: Crumb rubber 1–4 mm, 600 g/sq.ft (for Rubber Infill grass).\nLabour: Installation using professional and skilled labour.",
  },
  {
    title: "Synthetic Turf Platform",
    details:
      "a) Boundary wall using solid brick/concrete.\nb) Filling using 40 mm aggregate.\nc) Filling using 20 mm aggregate.\nd) Filling using 6 mm aggregate.\ne) Initial compaction + compaction above 40 mm & 20 mm aggregates.\nSub-base total thickness: 6 inches.",
  },
  {
    title: "Drainage System",
    details:
      "Fixing of holed ISI-certified 4-inch, 4 kg PVC pipes beneath the sub-base for efficient drainage.",
  },
  {
    title: "Fabrication",
    details:
      "a) All ISI-certified: Fixing of 16-gauge poles & interlocking H poles up to 30' height from ground level; box-frame pole in the centre with bearing arch truss.\nb) RCC foundation for industrial leg bottoms at ~3 ft depth & 30 cm width.\nc) H-frame at middle using square pipes.\nd) Two cross bars using rectangle pipes (top & bottom).\ne) Doors with latches: 2.5 m height × 1.1 m width using rectangle pipes.",
  },
  {
    title: "Painting",
    details:
      "Two coats Epoxy Primer on all MS pipes + two coats industrial enamel paint for long-term protection.",
  },
  {
    title: "Goal Posts",
    details:
      "One set of 5’s goal post using 3-inch round pipes (16 gauge) including ‘Garware’ brand white goal-post nets (5 mm thickness, 100 mm mesh).",
  },
  {
    title: "Net Covering",
    details:
      "Side Nets: Garware brand braided net, 2.5 mm thickness, 50 mm mesh.\nTop Net: Garware brand, black braided net, 1.5 mm thickness, 40 mm mesh.",
  },
  {
    title: "Electrical Wiring",
    details:
      "Distribution board (assumed 5 m from ground to office), 2.5 mm copper wire, cabling, and all necessary electrical works.",
  },
  {
    title: "Lighting Works",
    details:
      "Heavy-duty 200 W high-bay lights with Philips OEM driver & lens; 60° beam angle, optimized for football turf; 2-year warranty.",
  },
  {
    title: "Markings",
    details:
      "White line marking using white grass: 14/10 cm stitch; 30/50 mm pile height for 5’s as per tournament standards.",
  },
];

// Exact pricing bands
const PRICE_BANDS: Record<
  "outdoor" | "indoor",
  Record<"rubber" | "eco" | "aqua", [number, number]>
> = {
  outdoor: {
    rubber: [250, 270],
    eco: [260, 290],
    aqua: [300, 320],
  },
  indoor: {
    rubber: [480, 500],
    eco: [500, 530],
    aqua: [520, 540],
  },
};

// Map grass type to label
type EnvType = "indoor" | "outdoor";
type GrassType = "rubber" | "eco" | "aqua";
type TurfMode = "standard" | "cage360";

const toGrassLabel = (mode: TurfMode, grass: GrassType) => {
  if (mode === "cage360") return "Eco Friendly";
  return grass === "eco"
    ? "Eco Friendly"
    : grass === "aqua"
    ? "Aqua Eco Friendly"
    : "Rubber Infilled";
};

// 360° (cage) constraints
const CAGE_RANGE: [number, number] = [320, 340];

const faqsData = [
  {
    question: "How is the turf installation cost calculated?",
    answer:
      "Cost is based on ground size (sq.ft), grass type, and environment. A base project floor ensures a complete turnkey scope with all inclusions.",
  },
  {
    question: "What is the cost per sq.ft in this calculator?",
    answer:
      "Outdoor: Rubber ₹260–₹280, Eco ₹280–₹300, Aqua ₹300–₹320. Indoor: Rubber ₹480–₹500, Eco ₹500–₹530, Aqua ₹520–₹540. 360° (cage) uses Eco ₹320–₹340.",
  },
  {
    question: "What’s the minimum project size?",
    answer:
      "Standard turfs require a minimum of 4,000 sq.ft. 360° cage turfs require a minimum of 10,000 sq.ft (Eco only).",
  },
  {
    question: "Is there a minimum project value?",
    answer:
      "Yes. The base turnkey floor is ₹15,00,000. Even if material totals are lower, the project will not be quoted below this floor.",
  },
  {
    question: "Can I download a PDF report?",
    answer:
      "Yes. You can download a professional PDF with project details, pricing, and a detailed scope of work.",
  },
];

const blogs = [
  {
    id: 1,
    slug: "turf-construction-cost-tamilnadu",
    title: "Turf Construction Cost in Tamil Nadu (2025 Guide)",
    excerpt:
      "Planning to build a turf in Tamil Nadu? Here’s a detailed guide on construction costs, from land preparation to lighting and turf material.",
    image: "/blog/Blog21.webp",
  },
  {
    id: 2,
    slug: "gen-alpha-aqua-eco-friendly-turf-rajapalayam",
    title: "South TN’s First Aqua Eco-Friendly Turf Is Here - GEN ALPHA",
    excerpt:
      "GameOn Solution launches GEN ALPHA in Rajapalayam — South Tamil Nadu's first aqua blue, eco-friendly multi-sport turf.",
    image: "/blog/Blog34.webp",
  },
  {
    id: 3,
    slug: "sports-infrastructure-products-gameon-solution",
    title: "What We Build at GameOn Solution - Our Sports Infra Products",
    excerpt:
      "From multi-sport turfs to skating tracks and pickleball courts, we build world-class sports infrastructure across South India.",
    image: "/blog/Blog35.webp",
  },
];

export default function TurfCalculator() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    mode: "standard" as TurfMode, // "standard" | "cage360"
    environment: "outdoor" as EnvType,
    grassType: "eco" as GrassType,
    size: 4000,
    name: "",
    email: "",
    phone: "",
    timeline: "",
  });

  const [result, setResult] = useState<number | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [isSendingEmail, setIsSendingEmail] = useState<boolean>(false);
  const [firebaseAvailable, setFirebaseAvailable] = useState<boolean>(true);
  const [emailSent, setEmailSent] = useState<boolean>(false);

  const minSqft = useMemo(
    () => (formData.mode === "cage360" ? 10000 : 4000),
    [formData.mode]
  );

  // ⬇️ NEW: derived validity state (blocks button & price until valid)
  const formValid =
    formData.name.trim().length > 1 &&
    isValidEmail(formData.email) &&
    isValidIndianMobile(formData.phone) &&
    !isLikelyFakeIndianMobile(formData.phone) && // NEW
    !!formData.timeline &&
    formData.size >= minSqft;

  // Enforce constraints when switching modes
  useEffect(() => {
    if (formData.mode === "cage360") {
      setFormData((d) => ({
        ...d,
        environment: "outdoor",
        grassType: "eco",
        size: Math.max(d.size, 10000),
      }));
    } else {
      setFormData((d) => ({ ...d, size: Math.max(d.size, 4000) }));
    }
    setResult(null);
    setError("");
  }, [formData.mode]);

  const handleBlogClick = (slug: string) => navigate(`/blog/${slug}`);

  // ✅ Typed price-band access
  const getRateRange = (): [number, number] => {
    if (formData.mode === "cage360") return CAGE_RANGE;
    const env: EnvType = formData.environment;
    const grass: GrassType = formData.grassType;
    return (
      PRICE_BANDS as Record<EnvType, Record<GrassType, [number, number]>>
    )[env][grass];
  };

  const getAvgRate = () => {
    const [min, max] = getRateRange();
    return (min + max) / 2;
  };

  // Round UP
  const roundUp = (n: number, step: number) => Math.ceil(n / step) * step;

  // ⬇️ NEW: IST time helpers
  const getISTNow = () => {
    const now = new Date();
    const istString = now.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    return { istString }; // e.g., "04/09/2025, 22:35:10"
  };

  // ⬇️ NEW: Save to Axxeler Automation API
  const saveToAxxeler = async () => {
    try {
      const payload = {
        api_token: "b32ee517e4aea683ecaf892f38bd873d",
        contact_name: formData.name.trim(),
        contact_email: formData.email.trim().toLowerCase(),
        contact_phone: toAxxelerPhone(formData.phone),
        "{%contact.turf_type_pgf%}":
          formData.mode === "cage360"
            ? "Outdoor"
            : formData.environment === "indoor"
            ? "Indoor"
            : "Outdoor",
        "{%contact.select__lpbsav%}": formData.timeline,
        "{%contact.grass_type%}": toGrassLabel(
          formData.mode as TurfMode,
          formData.grassType as GrassType
        ),
        "{%contact.sqft%}": String(formData.size),
      } as const;

      const res = await fetch(
        "https://admin.axxeler.in/api/automations/68c7c7c3d41af/execute",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        const text = await res.text();
        console.warn("Axxeler save failed:", res.status, text);
        return false;
      }
      return true;
    } catch (err) {
      console.error("Axxeler save error:", err);
      return false;
    }
  };

  // ⬇️ Save to Firestore with enhanced error handling and local fallback + Axxeler
  const saveLead = async (
    finalPrice: number,
    rateRange: [number, number]
  ): Promise<boolean> => {
    try {
      setIsSaving(true);
      const { istString } = getISTNow();

      const estimateData: Partial<TurfEstimateData> = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: normalizeIndianMobile(formData.phone),
        timeline: formData.timeline,
        mode: formData.mode,
        environment: formData.environment,
        grassType: formData.grassType,
        sizeSqft: formData.size,
        rateMin: rateRange[0],
        rateMax: rateRange[1],
        totalEstimate: finalPrice,
        createdAtIST: istString, // Human-friendly IST
      };

      // Try Firebase first
      try {
        await saveTurfEstimate(estimateData);
        console.log("Estimate saved successfully to Firebase");
      } catch (firebaseError: any) {
        console.warn(
          "Firebase save failed, falling back to local storage:",
          firebaseError
        );

        // Fallback to localStorage
        const localEstimates = JSON.parse(
          localStorage.getItem("turfEstimates") || "[]"
        );
        localEstimates.push({
          ...estimateData,
          id: Date.now().toString(),
          savedAt: new Date().toISOString(),
        });
        localStorage.setItem("turfEstimates", JSON.stringify(localEstimates));
        console.log("Estimate saved to local storage as fallback");
        setFirebaseAvailable(false);
      }

      // ⬇️ ALWAYS attempt Axxeler save as well (non-blocking for UI)
      try {
        const axOk = await saveToAxxeler();
        if (!axOk) console.warn("Axxeler API save failed.");
      } catch (e) {
        console.error("Axxeler call threw:", e);
      }

      return true;
    } catch (error) {
      console.error("Failed to save lead:", error);
      return false;
    } finally {
      setIsSaving(false);
    }
  };

  const calculateEstimate = async () => {
    // Require valid details BEFORE showing price
    if (!formValid) {
      setResult(null);
      setError(
        !formData.name.trim()
          ? "Please enter your name."
          : !isValidEmail(formData.email)
          ? "Please enter a valid email address."
          : !isValidIndianMobile(formData.phone)
          ? "Please enter a valid Indian mobile number."
          : isLikelyFakeIndianMobile(formData.phone)
          ? "Please enter a real Indian mobile number (not a placeholder)."
          : !formData.timeline
          ? "Please select a construction time."
          : formData.size < minSqft
          ? formData.mode === "cage360"
            ? "Minimum 10,000 sq.ft is required for 360° Turf."
            : "Minimum 4,000 sq.ft is required."
          : "Please complete all required fields."
      );
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const avgRate = getAvgRate();
      const rawCost = avgRate * formData.size;
      const floored = Math.max(rawCost, BASE_PRICE);
      const rounded = roundUp(floored, ROUND_TO);

      // Calculate first, then save
      setResult(rounded);

      // Save lead (Firebase/local + Axxeler)
      const saveSuccess = await saveLead(rounded, getRateRange());
      if (!saveSuccess) {
        setFirebaseAvailable(false);
        console.warn("Estimate saved locally but failed to sync to server");
      }
    } catch (error) {
      console.error("Calculation error:", error);
      setError("Failed to calculate estimate. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const logoBase64 = "data:image/jpeg;base64,/9j/4AAQSk..."; // your logo

  // Generate PDF and send via email
  const sendEstimateEmail = async () => {
    if (!result) return;

    setIsSendingEmail(true);
    setError("");

    try {
      // Generate PDF
      const pdfBlob = await generatePDF();

      // Prepare form data
      const formDataToSend = new FormData();
      formDataToSend.append(
        "pdf",
        pdfBlob,
        `Turf-Cost-Estimate-${formData.name.replace(/\s+/g, "-")}.pdf`
      );

      // Add estimate data
      const estimateData = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: normalizeIndianMobile(formData.phone),
        timeline: formData.timeline,
        mode: formData.mode,
        environment: formData.environment,
        grassType: formData.grassType,
        sizeSqft: formData.size,
        rateMin: getRateRange()[0],
        rateMax: getRateRange()[1],
        totalEstimate: result!,
        createdAtIST: getISTNow().istString,
      };

      // Add all form fields to FormData
      (Object.keys(estimateData) as Array<keyof typeof estimateData>).forEach(
        (key) => {
          const value = estimateData[key];
          formDataToSend.append(key, String(value));
        }
      );

      // Send to backend API
      const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:3001";

      const response = await fetch(`${baseUrl}/api/send-estimate`, {
        method: "POST",
        body: formDataToSend,
      });

      const text = await response.text();
      let responseData: any;
      try {
        responseData = JSON.parse(text);
      } catch {
        console.error("Raw server error:", text);
        throw new Error("Server did not return JSON");
      }

      if (responseData.success) {
        setEmailSent(true);
        console.log("Email sent successfully:", responseData.messageId);
      } else {
        throw new Error(responseData.message || "Failed to send email");
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      setError(
        "Failed to send email. Please try again or contact support.\nAlso, kindly check your Spam or Promotions folder in case it was filtered."
      );
    } finally {
      setIsSendingEmail(false);
    }
  };

  const generatePDF = async (): Promise<Blob> => {
    const doc = new jsPDF("p", "pt", "a4");
    const typedDoc = doc as jsPDF & { lastAutoTable: { finalY: number } };

    // Brand header
    doc.setFillColor(8, 47, 14);
    doc.rect(0, 0, doc.internal.pageSize.getWidth(), 80, "F");

    if (logoBase64) doc.addImage(logoBase64, "JPEG", 255, 15, 85, 50);

    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 223, 0);
    doc.setFontSize(18);
    doc.text("GameOn Solution", 40, 50);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.text("Turf Cost Estimate Report", 40, 68);

    let startY = 100;

    const modeLabel =
      formData.mode === "cage360" ? "360° Turf (Cage)" : "Standard Turf";
    const grassLabel = toGrassLabel(formData.mode, formData.grassType);
    const envLabel =
      formData.mode === "cage360"
        ? "Outdoor (locked)"
        : formData.environment === "indoor"
        ? "Indoor"
        : "Outdoor";
    const [minRate, maxRate] = getRateRange();

    // Personal Info
    autoTable(doc, {
      startY,
      theme: "plain",
      head: [["Personal Information", ""]],
      body: [
        ["Name", formData.name || "-"],
        ["Email", formData.email || "-"],
        ["Phone", normalizeIndianMobile(formData.phone) || "-"],
        ["Timeline", formData.timeline || "-"],
      ],
      styles: { fontSize: 10, cellPadding: 6 },
      headStyles: {
        fillColor: [247, 247, 247],
        textColor: 20,
        fontStyle: "bold",
      },
      columnStyles: {
        0: { cellWidth: 180, fontStyle: "bold" },
        1: { cellWidth: 340 },
      },
      margin: { left: 40, right: 40 },
    });

    // Project Details
    startY = typedDoc.lastAutoTable.finalY + 14;
    autoTable(doc, {
      startY,
      theme: "plain",
      head: [["Project Details", ""]],
      body: [
        ["Project Mode", modeLabel],
        ["Environment", envLabel],
        ["Grass Type", grassLabel],
        ["Ground Size", `${formatINR(formData.size)} sq.ft`],
        [
          "Rate Range (₹/sq.ft)",
          `${formatINR(minRate)} – ${formatINR(maxRate)}`,
        ],
      ],
      styles: { fontSize: 10, cellPadding: 6 },
      headStyles: {
        fillColor: [247, 247, 247],
        textColor: 20,
        fontStyle: "bold",
      },
      columnStyles: {
        0: { cellWidth: 180, fontStyle: "bold" },
        1: { cellWidth: 340 },
      },
      margin: { left: 40, right: 40 },
    });

    // Cost Summary
    startY = typedDoc.lastAutoTable.finalY + 14;
    autoTable(doc, {
      startY,
      theme: "grid",
      head: [["Cost Summary", ""]],
      body: [
        ["Base Project Floor", formatINRCurrency(BASE_PRICE)],
        ["Total Estimate", formatINRCurrency(result || 0)],
        [
          "Note",
          "Final pricing subject to site evaluation, access, civil conditions, and selected specifications. Amounts rounded up for turnkey completion.",
        ],
      ],
      styles: { fontSize: 11, cellPadding: 8 },
      headStyles: { fillColor: [255, 223, 0], textColor: 0, fontStyle: "bold" },
      columnStyles: {
        0: { cellWidth: 180, fontStyle: "bold" },
        1: { cellWidth: 340 },
      },
      margin: { left: 40, right: 40 },
    });

    // Inclusions (list)
    startY = typedDoc.lastAutoTable.finalY + 14;
    autoTable(doc, {
      startY,
      theme: "plain",
      head: [["Scope of Work (Included)"]],
      body: INCLUDED_WORKS_TITLES.map((t) => [`• ${t}`]),
      styles: { fontSize: 10, cellPadding: 5 },
      headStyles: {
        fillColor: [247, 247, 247],
        textColor: 20,
        fontStyle: "bold",
      },
      margin: { left: 40, right: 40 },
    });

    // Detailed scope
    startY = typedDoc.lastAutoTable.finalY + 10;
    autoTable(doc, {
      startY,
      theme: "striped",
      head: [["Detailed Scope of Work", "Specifications"]],
      body: DETAILED_SCOPE.map((s) => [s.title, s.details]),
      styles: { fontSize: 10, cellPadding: 6, overflow: "linebreak" },
      headStyles: { fillColor: [8, 47, 14], textColor: 255, fontStyle: "bold" },
      columnStyles: {
        0: { cellWidth: 180, fontStyle: "bold" },
        1: { cellWidth: 340 },
      },
      margin: { left: 40, right: 40 },
    });

    // Footer
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(120);
    doc.text(
      "Generated by GameOn Solution • www.gameonsolution.in",
      doc.internal.pageSize.getWidth() / 2,
      doc.internal.pageSize.getHeight() - 24,
      { align: "center" }
    );

    // Return PDF as blob instead of saving
    return new Promise((resolve) => {
      const pdfBlob = doc.output("blob");
      resolve(pdfBlob);
    });
  };

  // UI helpers
  const priceBandLabel = useMemo(() => {
    const [min, max] = getRateRange();
    return `₹${formatINR(min)}–₹${formatINR(max)} / sq.ft`;
  }, [formData.environment, formData.grassType, formData.mode]);

  return (
    <>
      {/* <Helmet>
        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1431820297926243');
            fbq('track', 'PageView');
          `}
        </script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1431820297926243&ev=PageView&noscript=1"
          />
        </noscript>
      </Helmet> */}
      <TabSEO
        title="Turf Cost Calculator | GameOn Solution"
        description="Calculate accurate turf installation costs with strict base pricing, professional scope, and a polished PDF quote."
        keywords="Turf Cost Calculator, GameOn Solution, sports infrastructure, artificial turf cost, turf installation India"
        image={seoData.blog.image}
        url="https://gameonsolution.in/turf-calculator"
      />

      <main className="min-h-screen bg-gradient-to-br from-green-950 to-black text-white px-6 md:px-20 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <p className="uppercase text-secondary text-sm tracking-widest font-secondary">
            Instant Estimate
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-primary text-white uppercase leading-tight flex flex-wrap justify-center gap-2">
            <TextHoverAnimation text="Turf Calculator" />
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            AI-assisted estimates with <strong>strict project minimums</strong>{" "}
            and a <strong>complete turnkey scope</strong>.
          </p>
        </motion.div>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* LEFT: FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 rounded-2xl shadow-2xl p-8 backdrop-blur-md"
          >
            <div className="grid gap-5">
              {/* Mode */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button
                  onClick={() =>
                    setFormData((d) => ({ ...d, mode: "standard" }))
                  }
                  className={`p-3 rounded-xl border text-sm font-semibold ${
                    formData.mode === "standard"
                      ? "bg-yellow-400 text-black border-yellow-400"
                      : "bg-black/60 border-gray-700"
                  }`}
                >
                  Standard Turf
                </button>
                <button
                  onClick={() =>
                    setFormData((d) => ({ ...d, mode: "cage360" }))
                  }
                  className={`p-3 rounded-xl border text-sm font-semibold ${
                    formData.mode === "cage360"
                      ? "bg-yellow-400 text-black border-yellow-400"
                      : "bg-black/60 border-gray-700"
                  }`}
                >
                  360° Turf (Cage)
                </button>
              </div>

              {/* Contact (all required + Google autofill hints) */}
              <input
                id="name"
                name="name"
                autoComplete="name"
                autoCapitalize="words"
                required
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-xl bg-black/60 text-white border border-gray-700"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <input
                id="email"
                name="email"
                autoComplete="email"
                required
                type="email"
                placeholder="Email Address"
                className={`w-full p-3 rounded-xl bg-black/60 text-white border ${
                  formValid || !formData.email
                    ? "border-gray-700"
                    : "border-red-500"
                }`}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                onBlur={(e) =>
                  !isValidEmail(e.target.value) &&
                  setError("Please enter a valid email address.")
                }
              />

              <input
                id="phone"
                name="tel"
                autoComplete="tel"
                inputMode="tel"
                pattern="[+0-9\s-]*"
                maxLength={16}
                required
                type="tel"
                placeholder="Mobile Number (India)"
                className={`w-full p-3 rounded-xl bg-black/60 text-white border ${
                  formValid || !formData.phone
                    ? "border-gray-700"
                    : "border-red-500"
                }`}
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                onBlur={(e) =>
                  (!isValidIndianMobile(e.target.value) ||
                    isLikelyFakeIndianMobile(e.target.value)) &&
                  setError("Please enter a valid Indian mobile number.")
                }
              />

              <select
                id="timeline"
                name="timeline"
                autoComplete="off"
                required
                className="w-full p-3 rounded-xl bg-black/60 text-white border border-gray-700"
                value={formData.timeline}
                onChange={(e) =>
                  setFormData({ ...formData, timeline: e.target.value })
                }
              >
                <option value="">Select Construction Time</option>
                <option value="15 Days">15 Days</option>
                <option value="1 Month">1 Month</option>
                <option value="45 Days">45 Days</option>
                <option value="2 Months">2 Months</option>
              </select>

              {/* Environment (hidden for 360°) */}
              {formData.mode !== "cage360" && (
                <select
                  className="w-full mt-1 p-3 rounded-xl bg-black/60 text-white border border-gray-700"
                  value={formData.environment}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      environment: e.target.value as EnvType,
                    })
                  }
                >
                  <option value="indoor">Indoor</option>
                  <option value="outdoor">Outdoor</option>
                </select>
              )}

              {/* Grass */}
              <select
                className="w-full mt-1 p-3 rounded-xl bg-black/60 text-white border border-gray-700"
                value={formData.grassType}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    grassType: e.target.value as GrassType,
                  })
                }
                disabled={formData.mode === "cage360"}
                title={
                  formData.mode === "cage360"
                    ? "Eco Friendly is mandatory for 360° Turf"
                    : ""
                }
              >
                {(formData.mode === "cage360"
                  ? [{ name: "Eco Friendly", type: "eco" as GrassType }]
                  : [
                      { name: "Eco Friendly", type: "eco" as GrassType },
                      { name: "Rubber Infilled", type: "rubber" as GrassType },
                      { name: "Aqua Eco Friendly", type: "aqua" as GrassType },
                    ]
                ).map((g) => (
                  <option key={g.type} value={g.type}>
                    {g.name}
                  </option>
                ))}
              </select>

              {/* Size */}
              <div className="relative">
                <input
                  type="number"
                  required
                  className={`w-full p-3 pr-28 rounded-xl bg-black/60 text-white border ${
                    formData.size < minSqft
                      ? "border-red-500"
                      : "border-gray-700"
                  }`}
                  value={formData.size}
                  onChange={(e) => {
                    const v = Math.max(0, +e.target.value || 0);
                    setFormData((d) => ({ ...d, size: v }));
                    setResult(null);
                  }}
                  min={minSqft}
                  placeholder="Ground Size"
                />
                <span className="absolute top-1/2 right-4 -translate-y-1/2 text-sm text-gray-400">
                  sq.ft
                </span>
                <div className="mt-1 text-xs text-gray-400">
                  {formData.mode === "cage360"
                    ? "Minimum 10,000 sq.ft (360° Turf)"
                    : "Minimum 4,000 sq.ft"}
                </div>
                {formData.size < minSqft && (
                  <p className="text-sm text-red-400 mt-1">
                    {formData.mode === "cage360"
                      ? "Enter at least 10,000 sq.ft."
                      : "Enter at least 4,000 sq.ft."}
                  </p>
                )}
              </div>

              {/* Band helper */}
              <div className="text-sm text-yellow-300">
                Current Rate Band:{" "}
                <span className="font-semibold">{priceBandLabel}</span>
              </div>

              {/* Calculate */}
              <button
                onClick={calculateEstimate}
                className={`w-full mt-4 font-semibold py-3 rounded-xl transition ${
                  formValid && !isLoading
                    ? "bg-secondary text-black hover:bg-yellow-400"
                    : "bg-gray-600 text-gray-300 cursor-not-allowed"
                }`}
                disabled={!formValid || isLoading}
                aria-disabled={!formValid || isLoading}
                title={
                  !formValid
                    ? "Fill all required details to get estimate"
                    : isLoading
                    ? "Calculating..."
                    : "Calculate"
                }
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
                    Calculating...
                  </div>
                ) : (
                  "Calculate Estimate"
                )}
              </button>

              {/* Error */}
              {error && <p className="text-red-400 text-sm">{error}</p>}

              {/* Saving indicator */}
              {isSaving && (
                <div className="text-yellow-400 text-sm flex items-center gap-2">
                  <div className="w-3 h-3 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
                  Saving estimate...
                </div>
              )}

              {/* Firebase status indicator */}
              {!firebaseAvailable && (
                <div className="text-orange-400 text-sm flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  Estimate saved locally (Firebase unavailable)
                </div>
              )}

              {/* Email sending indicator */}
              {isSendingEmail && (
                <div className="text-blue-400 text-sm flex items-center gap-2">
                  <div className="w-3 h-3 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                  Sending estimate to your email...
                </div>
              )}
            </div>
          </motion.div>

          {/* RIGHT: RESULT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-2xl font-bold mb-6 text-secondary uppercase text-center">
              Estimated Cost Breakdown
            </h2>
            <p className="text-base text-gray-300 mb-4 text-center">
              Project floor enforced at{" "}
              <span className="text-yellow-300 font-semibold">
                {formatINRCurrency(BASE_PRICE)}
              </span>{" "}
              for turnkey scope.
            </p>

            {result !== null && (
              <div className="mt-6 text-center">
                <p className="text-xl text-white mb-3">
                  <span className="font-semibold text-secondary">Total:</span>{" "}
                  {formatINRCurrency(result || 0)}
                </p>

                {!emailSent ? (
                  <button
                    onClick={sendEstimateEmail}
                    disabled={isSendingEmail}
                    className={`group inline-flex items-center gap-2 mt-2 px-6 py-3 rounded-xl border transition shadow-[0_0_0_1px_rgba(234,179,8,0.2)] ${
                      isSendingEmail
                        ? "border-gray-500 bg-gray-600 text-gray-300 cursor-not-allowed"
                        : "border-yellow-400 bg-white/5 text-yellow-300 hover:bg-yellow-400 hover:text-black"
                    }`}
                  >
                    {isSendingEmail ? (
                      <>
                        <div className="w-4 h-4 border-2 border-yellow-300 border-t-transparent rounded-full animate-spin"></div>
                        <span className="font-semibold">Sending Email...</span>
                      </>
                    ) : (
                      <>
                        <HiOutlineDocumentArrowDown className="text-xl transition-transform group-hover:translate-y-0.5" />
                        <span className="font-semibold">
                          Get Estimate via Email
                        </span>
                      </>
                    )}
                  </button>
                ) : (
                  <div className="mt-2 px-6 py-3 rounded-xl bg-green-900/30 border border-green-500 text-green-300">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-xs text-white">✓</span>
                      </div>
                      <span className="font-semibold">
                        Estimate sent to your email!
                      </span>
                    </div>
                    <p className="text-sm mt-1 text-green-200">
                      Check your inbox for the detailed PDF estimate. <br />
                      <span className="text-green-400">
                        If you don’t see it, please check your Spam or
                        Promotions folder as well.
                      </span>
                    </p>
                  </div>
                )}

                <div className="mt-4 text-xs text-gray-400">
                  Rounded to nearest {formatINRCurrency(ROUND_TO)} for
                  presentation.
                </div>
              </div>
            )}
          </motion.div>
        </section>

        {/* WHY / FAQ / BLOGS */}
        <section className="max-w-5xl mx-auto px-4 md:px-0 mt-16 text-center text-gray-300">
          <div className="flex flex-col w-full text-center gap-10 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Why Use Our Turf Cost Calculator?
            </h2>
            <div className="text-lg mb-3">
              <a href="https://gameonsolution.in/">
                <b>GameOn Solution&apos;s</b>
              </a>{" "}
              calculator enforces minimum viable scope for complete execution —
              civil, lighting, nets, goals, wiring, and markings.
            </div>
            <div className="text-lg mb-3">
              It supports <strong>standard</strong> and{" "}
              <strong>360° cage</strong> setups with strict minimum sizes to
              avoid under-scoping.
            </div>
            <div className="text-sm text-yellow-300 mt-4 italic mb-10">
              💬 Need help? WhatsApp: +91 96157 37373.
            </div>
          </div>

          <div className="flex flex-col w-full text-center gap-10 max-w-6xl">
            <p className="text-[12px] font-secondary uppercase tracking-[1px] text-white">
              FAQs
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white uppercase leading-tight flex flex-wrap justify-center gap-2">
              <span>Turf Cost</span>
              <span className="text-secondary">Calculator</span>
              <span>FAQs</span>
            </h1>

            <div className="flex flex-col w-full border border-white/10 rounded-sm overflow-hidden divide-y divide-white/10">
              {faqsData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-black/20 hover:bg-black/30 transition-colors"
                >
                  <button
                    className="w-full flex justify-between items-center p-4 md:p-6 cursor-pointer text-left"
                    onClick={() =>
                      setOpenIndex((prev) => (prev === index ? null : index))
                    }
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h2
                      className={`text-lg md:text-xl lg:text-2xl font-primary ${
                        index % 2 === 0 ? "text-white" : "text-yellow-400"
                      }`}
                    >
                      {faq.question}
                    </h2>
                    <span className="text-secondary ml-4">
                      {openIndex === index ? (
                        <FaMinus size={16} />
                      ) : (
                        <FaPlus size={16} />
                      )}
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="p-4 md:p-6 pt-2 md:pt-3 text-base md:text-lg text-white bg-black/10">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Hub */}
        <section className="max-w-6xl mx-auto mt-20 px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-primary text-white uppercase leading-tight flex flex-wrap justify-center gap-2">
            <TextHoverAnimation text="Learn Turf. Build Smart." />
          </h1>
          <p className="text-lg text-gray-300 mb-10">
            Get expert insights on <strong>turf installation</strong>,{" "}
            <strong>ground development</strong>, and{" "}
            <strong>sports infra business</strong> in India.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full py-10">
            {blogs.map((blog) => (
              <AnimatedCard key={blog.id}>
                <div
                  className="cursor-pointer group bg-black/20 hover:bg-black/30 transition rounded-lg overflow-hidden"
                  onClick={() => handleBlogClick(blog.slug)}
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-primary text-secondary group-hover:text-yellow-400">
                      {blog.title}
                    </h2>
                    <p className="text-white text-sm mt-2 opacity-80">
                      {blog.excerpt}
                    </p>
                    <p className="mt-3 text-xs text-yellow-400">Read More →</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </section>

        <section className="text-center mt-28 mb-16 max-w-4xl mx-auto bg-gradient-to-tr from-black/50 to-green-950 p-10 rounded-xl border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            💬 Got Questions? Let&apos;s Talk!
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            From turf estimates to full-site execution — we&apos;re just one
            click away.
          </p>
          <a
            href="https://gameonsolution.in/contact"
            className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold shadow hover:bg-yellow-300 transition"
          >
            Contact GameOn →
          </a>
        </section>

        <section className="mt-20 max-w-6xl mx-auto text-center text-white px-6">
          <h3 className="text-2xl font-bold mb-4">
            Our Turf Projects Are Active In:
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Explore our local turf construction work across South India.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-yellow-300 text-sm font-medium">
            {[
              {
                name: "Chennai",
                url: "https://gameonsolution.in/blog/gen-alpha-aqua-eco-friendly-turf-rajapalayam",
              },
              {
                name: "Coimbatore",
                url: "https://gameonsolution.in/blog/turf-construction-cost-tamilnadu",
              },
              {
                name: "Bangalore",
                url: "https://gameonsolution.in/blog/bangalore-largest-multipurpose-turf-gameon-solution",
              },
              {
                name: "Hyderabad",
                url: "https://gameonsolution.in/blog/turf-impact-local-sports",
              },
              {
                name: "Trivandrum",
                url: "https://gameonsolution.in/blog/why-gameon-is-best-turf-construction-company",
              },
            ].map((city, i) => (
              <a
                key={i}
                href={city.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {city.name}
              </a>
            ))}
          </div>
        </section>
      </main>

      <WhatsAppButton />
    </>
  );
}
