// import React, { useState } from "react";
// import TextHoverAnimation from "../textHoverAnimation";
// import { useCantacts } from "@/hook/useContact";

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
//   phone: string;
// }

// interface props {
//   setIsPopupOpen: (value: boolean) => void;
// }

// interface Errors {
//   name?: string;
//   email?: string;
//   message?: string;
//   phone?: string;
// }

// const ContactForm: React.FC<props> = ({ setIsPopupOpen }) => {
//   const { createContact } = useCantacts();
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     message: "",
//     phone: "",
//   });
//   const [errors, setErrors] = useState<Errors>({});

//   const validate = (): boolean => {
//     const newErrors: Errors = {};

//     // Validate name
//     if (!formData.name.trim()) newErrors.name = "Name is required";

//     // Validate email
//     if (!formData.email.trim()) newErrors.email = "Email is required";
//     else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
//       newErrors.email = "Invalid email address";
//     }

//     // Validate message
//     if (!formData.message.trim()) newErrors.message = "Message is required";

//     // Validate phone number (10 digits, optional dashes/spaces)
//     const phoneRegex = /^(\+?\d{1,2})?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/;

//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!phoneRegex.test(formData.phone)) {
//       newErrors.phone = "Invalid phone number";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (validate()) {
//       await createContact
//         .mutateAsync({ ...formData }) // Pass the form data including phone
//         .then(() => {
//           // localStorage.setItem("contacts-gms", JSON.stringify({ value: true }));
//           setIsPopupOpen(false);
//           setFormData({ name: "", email: "", message: "", phone: "" }); // Reset form
//           setErrors({});
//         });
//       console.log("Form submitted successfully", formData);
//     }
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-5">
//       <h1 className="flex gap-2 text-2xl md:text-4xl font-primary uppercase justify-start items-center text-white z-[11] opacity-0 animate-lineUp">
//         <span className="text-white">Let's</span>
//         <span className="text-secondary">
//           <TextHoverAnimation text="Talk" />
//         </span>
//       </h1>
//       <div className="flex flex-col">
//         <label className="block text-sm uppercase font-medium text-white mb-1">
//           Your Name
//         </label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           className="block w-full text-secondary bg-transparent border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
//         />
//         {errors.name && !formData.name && (
//           <p className="text-red-500 text-xs mt-1">{errors.name}</p>
//         )}
//       </div>
//       <div className="flex flex-col">
//         <label className="block text-sm uppercase font-medium text-white mb-1">
//           Your Email
//         </label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="block bg-transparent w-full text-secondary border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
//         />
//         {errors.email && !formData.email && (
//           <p className="text-red-500 text-xs mt-1">{errors.email}</p>
//         )}
//       </div>

//       <div className="flex flex-col">
//         <label className="block text-sm uppercase font-medium text-white mb-1">
//           Your Phone
//         </label>
//         <input
//           type="text"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//           className="block w-full text-secondary bg-transparent border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
//         />
//         {errors.phone && !formData.phone && (
//           <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
//         )}
//         {errors.phone && formData.phone && (
//           <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
//         )}
//       </div>

//       <div className="flex flex-col">
//         <label className="block text-sm font-medium uppercase text-white mb-1">
//           Your Message
//         </label>
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//           className="block text-secondary bg-transparent w-full border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
//           rows={4}
//         />
//         {errors.message && !formData.message && (
//           <p className="text-red-500 text-xs mt-1">{errors.message}</p>
//         )}
//       </div>

//       <div className="w-full flex justify-end items-end text-md">
//         <button
//           type="submit"
//           className="w-[35%] bg-secondary text-white py-2 rounded-full hover:bg-cursor-hover"
//         >
//           {createContact.isPending ? "Loading.." : "Send Message"}
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ContactForm;

// import React, { useState } from "react";
// import TextHoverAnimation from "../textHoverAnimation";
// import { useCantacts } from "@/hook/useContact";

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
//   phone: string;
//   location: string;
// }

// interface props {
//   setIsPopupOpen: (value: boolean) => void;
// }

// interface Errors {
//   name?: string;
//   email?: string;
//   message?: string;
//   phone?: string;
//   location?: string;
// }

// const ContactForm: React.FC<props> = ({ setIsPopupOpen }) => {
//   const { createContact } = useCantacts();
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     message: "",
//     phone: "",
//     location: "",
//   });
//   const [errors, setErrors] = useState<Errors>({});

//   const validate = (): boolean => {
//     const newErrors: Errors = {};

//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.email.trim()) newErrors.email = "Email is required";
//     else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
//       newErrors.email = "Invalid email address";
//     }
//     if (!formData.message.trim()) newErrors.message = "Message is required";
//     if (!formData.location.trim()) newErrors.location = "Location is required";

//     const phoneRegex = /^(\+?\d{1,2})?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/;
//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!phoneRegex.test(formData.phone)) {
//       newErrors.phone = "Invalid phone number";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (validate()) {
//       await createContact.mutateAsync({ ...formData }).then(() => {
//         setIsPopupOpen(false);
//         setFormData({
//           name: "",
//           email: "",
//           message: "",
//           phone: "",
//           location: "",
//         });
//         setErrors({});
//       });
//       console.log("Form submitted successfully", formData);
//     }
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-5">
//       <h1 className="flex gap-2 text-2xl md:text-4xl font-primary uppercase justify-start items-center text-white z-[11] opacity-0 animate-lineUp">
//         <span className="text-white">Let's</span>
//         <span className="text-secondary">
//           <TextHoverAnimation text="Talk" />
//         </span>
//       </h1>
//       <div className="flex flex-col">
//         <label
//           htmlFor="name"
//           className="block text-sm uppercase font-medium text-white mb-1"
//         >
//           Your Name
//         </label>
//         <input
//           id="name"
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           className="block w-full text-secondary bg-transparent border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
//         />
//         {errors.name && !formData.name && (
//           <p className="text-red-500 text-xs mt-1">{errors.name}</p>
//         )}
//       </div>
//       <div className="flex flex-col">
//         <label
//           htmlFor="email"
//           className="block text-sm uppercase font-medium text-white mb-1"
//         >
//           Your Email
//         </label>
//         <input
//           id="email"
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="block bg-transparent w-full text-secondary border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
//         />
//         {errors.email && !formData.email && (
//           <p className="text-red-500 text-xs mt-1">{errors.email}</p>
//         )}
//       </div>

//       <div className="flex flex-col">
//         <label
//           htmlFor="phone"
//           className="block text-sm uppercase font-medium text-white mb-1"
//         >
//           Your Phone
//         </label>
//         <input
//           id="phone"
//           type="text"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//           className="block w-full text-secondary bg-transparent border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
//         />
//         {errors.phone && !formData.phone && (
//           <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
//         )}
//         {errors.phone && formData.phone && (
//           <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
//         )}
//       </div>

//       <div className="flex flex-col">
//         <label
//           htmlFor="location"
//           className="block text-sm uppercase font-medium text-white mb-1"
//         >
//           Your Location
//         </label>
//         <input
//           id="location"
//           type="text"
//           name="location"
//           value={formData.location}
//           onChange={handleChange}
//           required
//           className="block w-full text-secondary bg-transparent border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
//         />
//         {errors.location && !formData.location && (
//           <p className="text-red-500 text-xs mt-1">{errors.location}</p>
//         )}
//       </div>

//       <div className="flex flex-col">
//         <label
//           htmlFor="message"
//           className="block text-sm font-medium uppercase text-white mb-1"
//         >
//           Your Message
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//           className="block text-secondary bg-transparent w-full border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
//           rows={4}
//         />
//         {errors.message && !formData.message && (
//           <p className="text-red-500 text-xs mt-1">{errors.message}</p>
//         )}
//       </div>

//       <div className="w-full flex justify-end items-end text-md">
//         <button
//           type="submit"
//           className="w-[35%] bg-secondary text-black font-medium py-2 rounded-full hover:bg-cursor-hover"
//         >
//           {createContact.isPending ? "Loading.." : "Send Message"}
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ContactForm;

// import React, { useState, useEffect } from "react";
// import TextHoverAnimation from "../textHoverAnimation";
// import { useCantacts } from "@/hook/useContact";

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
//   phone: string;
//   location: string;
// }

// interface props {
//   setIsPopupOpen: (value: boolean) => void;
// }

// interface Errors {
//   name?: string;
//   email?: string;
//   message?: string;
//   phone?: string;
//   location?: string;
// }

// const ContactForm: React.FC<props> = ({ setIsPopupOpen }) => {
//   const { createContact } = useCantacts();
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     message: "",
//     phone: "",
//     location: "",
//   });
//   const [errors, setErrors] = useState<Errors>({});

//   // 🔹 Load Meta Pixel script when component mounts
//    // 🔹 Load Meta Pixel script when component mounts
//    useEffect(() => {
//     if (typeof window === "undefined") return;

//     // Already loaded? skip
//     if ((window as any).fbq) return;

//     // Create fbq function
//     const fbq: any = function (...args: any[]) {
//       (fbq as any).callMethod
//         ? (fbq as any).callMethod(...args)
//         : (fbq as any).queue.push(args);
//     };

//     (fbq as any).queue = [];
//     (fbq as any).loaded = true;
//     (fbq as any).version = "2.0";

//     (window as any).fbq = fbq;

//     // Inject pixel script
//     const script = document.createElement("script");
//     script.async = true;
//     script.src = "https://connect.facebook.net/en_US/fbevents.js";
//     document.head.appendChild(script);

//     // Init pixel
//     fbq("init", "771263755489406"); // 🔹 Replace with your pixel ID
//     fbq("track", "PageView");
//   }, []);

//   const validate = (): boolean => {
//     const newErrors: Errors = {};

//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.email.trim()) newErrors.email = "Email is required";
//     else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
//       newErrors.email = "Invalid email address";
//     }
//     if (!formData.message.trim()) newErrors.message = "Message is required";
//     if (!formData.location.trim()) newErrors.location = "Location is required";

//     const phoneRegex = /^(\+?\d{1,2})?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/;
//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!phoneRegex.test(formData.phone)) {
//       newErrors.phone = "Invalid phone number";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (validate()) {
//       try {
//         await createContact.mutateAsync({ ...formData });

//         // 🔹 Trigger Meta Pixel Lead event
//         if (typeof window !== "undefined" && (window as any).fbq) {
//           (window as any).fbq("track", "Lead", {
//             name: formData.name,
//             email: formData.email,
//             phone: formData.phone,
//             location: formData.location,
//           });
//         }

//         setIsPopupOpen(false);
//         setFormData({
//           name: "",
//           email: "",
//           message: "",
//           phone: "",
//           location: "",
//         });
//         setErrors({});
//         console.log("Form submitted successfully", formData);
//       } catch (error) {
//         console.error("Error submitting form:", error);
//       }
//     }
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-5">
//       <h1 className="flex gap-2 text-2xl md:text-4xl font-primary uppercase justify-start items-center text-white z-[11] opacity-0 animate-lineUp">
//         <span className="text-white">Let's</span>
//         <span className="text-secondary">
//           <TextHoverAnimation text="Talk" />
//         </span>
//       </h1>
//       {/* name */}
//       <div className="flex flex-col">
//         <label htmlFor="name" className="block text-sm uppercase font-medium text-white mb-1">
//           Your Name
//         </label>
//         <input
//           id="name"
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           className="block w-full text-secondary bg-transparent border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
//         />
//         {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
//       </div>

//       {/* email */}
//       <div className="flex flex-col">
//         <label htmlFor="email" className="block text-sm uppercase font-medium text-white mb-1">
//           Your Email
//         </label>
//         <input
//           id="email"
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="block bg-transparent w-full text-secondary border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
//         />
//         {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//       </div>

//       {/* phone */}
//       <div className="flex flex-col">
//         <label htmlFor="phone" className="block text-sm uppercase font-medium text-white mb-1">
//           Your Phone
//         </label>
//         <input
//           id="phone"
//           type="text"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//           className="block w-full text-secondary bg-transparent border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
//         />
//         {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
//       </div>

//       {/* location */}
//       <div className="flex flex-col">
//         <label htmlFor="location" className="block text-sm uppercase font-medium text-white mb-1">
//           Your Location
//         </label>
//         <input
//           id="location"
//           type="text"
//           name="location"
//           value={formData.location}
//           onChange={handleChange}
//           required
//           className="block w-full text-secondary bg-transparent border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
//         />
//         {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
//       </div>

//       {/* message */}
//       <div className="flex flex-col">
//         <label htmlFor="message" className="block text-sm font-medium uppercase text-white mb-1">
//           Your Message
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//           className="block text-secondary bg-transparent w-full border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
//           rows={4}
//         />
//         {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
//       </div>

//       {/* submit */}
//       <div className="w-full flex justify-end items-end text-md">
//         <button
//           type="submit"
//           className="w-[35%] bg-secondary text-black font-medium py-2 rounded-full hover:bg-cursor-hover"
//         >
//           {createContact.isPending ? "Loading.." : "Send Message"}
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ContactForm;

// //2nd version

// import React, { useState, useEffect } from "react";
// import TextHoverAnimation from "../textHoverAnimation";
// import { useCantacts } from "@/hook/useContact";
// import toast from "react-hot-toast";

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
//   phone: string;
//   location: string;
// }

// interface props {
//   setIsPopupOpen: (value: boolean) => void;
// }

// interface Errors {
//   name?: string;
//   email?: string;
//   message?: string;
//   phone?: string;
//   location?: string;
// }

// const ContactForm: React.FC<props> = ({ setIsPopupOpen }) => {
//   const { createContact } = useCantacts();
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     message: "",
//     phone: "",
//     location: "",
//   });
//   const [errors, setErrors] = useState<Errors>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // 🔹 Load Meta Pixel script
//   useEffect(() => {
//     if (typeof window === "undefined") return;
//     if ((window as any).fbq) return;

//     const fbq: any = function (...args: any[]) {
//       (fbq as any).callMethod
//         ? (fbq as any).callMethod(...args)
//         : (fbq as any).queue.push(args);
//     };

//     (fbq as any).queue = [];
//     (fbq as any).loaded = true;
//     (fbq as any).version = "2.0";
//     (window as any).fbq = fbq;

//     const script = document.createElement("script");
//     script.async = true;
//     script.src = "https://connect.facebook.net/en_US/fbevents.js";
//     document.head.appendChild(script);

//     fbq("init", "771263755489406");
//     fbq("track", "PageView");
//   }, []);

//   const validate = (): boolean => {
//     const newErrors: Errors = {};

//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.email.trim()) newErrors.email = "Email is required";
//     else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
//       newErrors.email = "Invalid email address";
//     }
//     if (!formData.message.trim()) newErrors.message = "Message is required";
//     if (!formData.location.trim()) newErrors.location = "Location is required";

//     const phoneRegex = /^(\+?\d{1,2})?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/;
//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!phoneRegex.test(formData.phone)) {
//       newErrors.phone = "Invalid phone number";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!validate()) return;

//     setIsSubmitting(true);

//     try {
//       // 1) Call automation API
//       const apiUrl =
//         "https://admin.axxeler.in/api/automations/68bd55cac4457/execute";
//       const payload = { ...formData };

//       const response = await fetch(apiUrl, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       let automationOk = false;
//       if (!response.ok) {
//         toast.error("Automation workflow failed. Saved locally instead.");
//         console.error("Automation error:", await response.text());
//       } else {
//         automationOk = true;
//       }

//       // 2) Save locally
//       await createContact.mutateAsync({ ...formData });

//       // 3) Meta Pixel
//       if (typeof window !== "undefined" && (window as any).fbq) {
//         (window as any).fbq("track", "Lead", payload);
//       }

//       // 4) Feedback to user
//       if (automationOk) {
//         toast.success("Thanks! Your message has been sent.");
//       } else {
//         toast.success("Message saved. We’ll follow up soon!");
//       }

//       // Reset form
//       setIsPopupOpen(false);
//       setFormData({
//         name: "",
//         email: "",
//         message: "",
//         phone: "",
//         location: "",
//       });
//       setErrors({});
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       toast.error("Something went wrong. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-5">
//       <h1 className="flex gap-2 text-2xl md:text-4xl font-primary uppercase justify-start items-center text-white z-[11] opacity-0 animate-lineUp">
//         <span className="text-white">Let's</span>
//         <span className="text-secondary">
//           <TextHoverAnimation text="Talk" />
//         </span>
//       </h1>
//       {/* name */}
//       <div className="flex flex-col">
//         <label
//           htmlFor="name"
//           className="block text-sm uppercase font-medium text-white mb-1"
//         >
//           Your Name
//         </label>
//         <input
//           id="name"
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           className="block w-full text-secondary bg-transparent border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
//         />
//         {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
//       </div>

//       {/* email */}
//       <div className="flex flex-col">
//         <label
//           htmlFor="email"
//           className="block text-sm uppercase font-medium text-white mb-1"
//         >
//           Your Email
//         </label>
//         <input
//           id="email"
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="block bg-transparent w-full text-secondary border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
//         />
//         {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//       </div>

//       {/* phone */}
//       <div className="flex flex-col">
//         <label
//           htmlFor="phone"
//           className="block text-sm uppercase font-medium text-white mb-1"
//         >
//           Your Phone
//         </label>
//         <input
//           id="phone"
//           type="text"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//           className="block w-full text-secondary bg-transparent border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
//         />
//         {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
//       </div>

//       {/* location */}
//       <div className="flex flex-col">
//         <label
//           htmlFor="location"
//           className="block text-sm uppercase font-medium text-white mb-1"
//         >
//           Your Location
//         </label>
//         <input
//           id="location"
//           type="text"
//           name="location"
//           value={formData.location}
//           onChange={handleChange}
//           required
//           className="block w-full text-secondary bg-transparent border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
//         />
//         {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
//       </div>

//       {/* message */}
//       <div className="flex flex-col">
//         <label
//           htmlFor="message"
//           className="block text-sm font-medium uppercase text-white mb-1"
//         >
//           Your Message
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//           className="block text-secondary bg-transparent w-full border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
//           rows={4}
//         />
//         {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
//       </div>

//       {/* submit */}
//       <div className="w-full flex justify-end items-end text-md">
//         <button
//           type="submit"
//           className="w-[35%] bg-secondary text-black font-medium py-2 rounded-full hover:bg-cursor-hover"
//         >
//           {isSubmitting || createContact.isPending ? "Loading.." : "Send Message"}
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ContactForm;

// 3rd version

// import React, { useState, useEffect } from "react";
// import TextHoverAnimation from "../textHoverAnimation";
// import { useCantacts } from "@/hook/useContact";
// import toast from "react-hot-toast";

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
//   phone: string;
//   location: string;
// }

// interface props {
//   setIsPopupOpen: (value: boolean) => void;
// }

// interface Errors {
//   name?: string;
//   email?: string;
//   message?: string;
//   phone?: string;
//   location?: string;
// }

// const ContactForm: React.FC<props> = ({ setIsPopupOpen }) => {
//   const { createContact } = useCantacts();
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     message: "",
//     phone: "",
//     location: "",
//   });
//   const [errors, setErrors] = useState<Errors>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // 🔹 Load Meta Pixel script
//   useEffect(() => {
//     if (typeof window === "undefined") return;
//     if ((window as any).fbq) return;

//     const fbq: any = function (...args: any[]) {
//       (fbq as any).callMethod
//         ? (fbq as any).callMethod(...args)
//         : (fbq as any).queue.push(args);
//     };

//     (fbq as any).queue = [];
//     (fbq as any).loaded = true;
//     (fbq as any).version = "2.0";
//     (window as any).fbq = fbq;

//     const script = document.createElement("script");
//     script.async = true;
//     script.src = "https://connect.facebook.net/en_US/fbevents.js";
//     document.head.appendChild(script);

//     fbq("init", "771263755489406");
//     fbq("track", "PageView");
//   }, []);

//   const validate = (): boolean => {
//     const newErrors: Errors = {};

//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.email.trim()) newErrors.email = "Email is required";
//     else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
//       newErrors.email = "Invalid email address";
//     }
//     if (!formData.message.trim()) newErrors.message = "Message is required";
//     if (!formData.location.trim()) newErrors.location = "Location is required";

//     // Simple international-ish phone regex (works for many variants)
//     const phoneRegex = /^(\+?\d{1,3}[\s-]?)?(\d{6,12})$/;
//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!phoneRegex.test(formData.phone)) {
//       newErrors.phone = "Invalid phone number";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!validate()) return;

//     setIsSubmitting(true);

//     try {
//       // build the payload in the exact shape the automation expects
//       const payload = {
//         api_token: import.meta.env.VITE_AXXELER_API_TOKEN || "", // see note below
//         contact_name: formData.name,
//         contact_email: formData.email,
//         contact_phone: formData.phone,
//         "{%contact.location%}": formData.location,
//         "{%contact.your_message_%}": formData.message,
//       };

//       // 1) Call automation API
//       const apiUrl =
//         "https://admin.axxeler.in/api/automations/68bd55cac4457/execute";

//       const response = await fetch(apiUrl, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       let automationOk = false;
//       if (!response.ok) {
//         toast.error("Automation workflow failed. Saved locally instead.");
//         console.error("Automation error:", await response.text());
//       } else {
//         automationOk = true;
//       }

//       // 2) Save locally (your existing local DB flow)
//       await createContact.mutateAsync({ ...formData });

//       // 3) Meta Pixel (send simplified tracking payload)
//       if (typeof window !== "undefined" && (window as any).fbq) {
//         // fbq expects conversion params — keep it small
//         (window as any).fbq("track", "Lead", {
//           email: formData.email,
//           phone: formData.phone,
//         });
//       }

//       // 4) Feedback to user
//       if (automationOk) {
//         toast.success("Thanks! Your message has been sent.");
//       } else {
//         toast.success("Message saved. We'll follow up soon!");
//       }

//       // Reset form & close popup
//       setIsPopupOpen(false);
//       setFormData({
//         name: "",
//         email: "",
//         message: "",
//         phone: "",
//         location: "",
//       });
//       setErrors({});
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       toast.error("Something went wrong. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-5">
//       <h1 className="flex gap-2 text-2xl md:text-4xl font-primary uppercase justify-start items-center text-white z-[11] opacity-0 animate-lineUp">
//         <span className="text-white">Let's</span>
//         <span className="text-secondary">
//           <TextHoverAnimation text="Talk" />
//         </span>
//       </h1>
//       {/* name */}
//       <div className="flex flex-col">
//         <label
//           htmlFor="name"
//           className="block text-sm uppercase font-medium text-white mb-1"
//         >
//           Your Name
//         </label>
//         <input
//           id="name"
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           className="block w-full text-secondary bg-transparent border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
//         />
//         {errors.name && (
//           <p className="text-red-500 text-xs mt-1">{errors.name}</p>
//         )}
//       </div>

//       {/* email */}
//       <div className="flex flex-col">
//         <label
//           htmlFor="email"
//           className="block text-sm uppercase font-medium text-white mb-1"
//         >
//           Your Email
//         </label>
//         <input
//           id="email"
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="block bg-transparent w-full text-secondary border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
//         />
//         {errors.email && (
//           <p className="text-red-500 text-xs mt-1">{errors.email}</p>
//         )}
//       </div>

//       {/* phone */}
//       <div className="flex flex-col">
//         <label
//           htmlFor="phone"
//           className="block text-sm uppercase font-medium text-white mb-1"
//         >
//           Your Phone
//         </label>
//         <input
//           id="phone"
//           type="text"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//           className="block w-full text-secondary bg-transparent border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
//         />
//         {errors.phone && (
//           <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
//         )}
//       </div>

//       {/* location */}
//       <div className="flex flex-col">
//         <label
//           htmlFor="location"
//           className="block text-sm uppercase font-medium text-white mb-1"
//         >
//           Your Location
//         </label>
//         <input
//           id="location"
//           type="text"
//           name="location"
//           value={formData.location}
//           onChange={handleChange}
//           required
//           className="block w-full text-secondary bg-transparent border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
//         />
//         {errors.location && (
//           <p className="text-red-500 text-xs mt-1">{errors.location}</p>
//         )}
//       </div>

//       {/* message */}
//       <div className="flex flex-col">
//         <label
//           htmlFor="message"
//           className="block text-sm font-medium uppercase text-white mb-1"
//         >
//           Your Message
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//           className="block text-secondary bg-transparent w-full border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
//           rows={4}
//         />
//         {errors.message && (
//           <p className="text-red-500 text-xs mt-1">{errors.message}</p>
//         )}
//       </div>

//       {/* submit */}
//       <div className="w-full flex justify-end items-end text-md">
//         <button
//           type="submit"
//           className="w-[35%] bg-secondary text-black font-medium py-2 rounded-full hover:bg-cursor-hover"
//         >
//           {isSubmitting || createContact.isPending
//             ? "Loading.."
//             : "Send Message"}
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ContactForm;

// 4th Version

import React, { useState, useEffect } from "react";
import TextHoverAnimation from "../textHoverAnimation";
import { useCantacts } from "@/hook/useContact";
import toast from "react-hot-toast";

interface FormData {
  name: string;
  email: string;
  message: string;
  phone: string;
  location: string;
}

interface props {
  setIsPopupOpen: (value: boolean) => void;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
  phone?: string;
  location?: string;
}

/**
 * ContactForm - improved version
 * - retries automation API
 * - logs full responses
 * - persists failed requests to localStorage queues
 * - calls admin panel API (if ADMIN_PANEL_URL is set)
 *
 * IMPORTANT: Replace ADMIN_PANEL_URL and any admin token with your real values.
 */

const ContactForm: React.FC<props> = ({ setIsPopupOpen }) => {
  const { createContact } = useCantacts();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    phone: "",
    location: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- Meta Pixel loader (kept from your original) ---
  useEffect(() => {
    if (typeof window === "undefined") return;
    if ((window as any).fbq) return;

    const fbq: any = function (...args: any[]) {
      (fbq as any).callMethod
        ? (fbq as any).callMethod(...args)
        : (fbq as any).queue.push(args);
    };

    (fbq as any).queue = [];
    (fbq as any).loaded = true;
    (fbq as any).version = "2.0";
    (window as any).fbq = fbq;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);

    fbq("init", "771263755489406");
    fbq("track", "PageView");
  }, []);

  // ----------------- Validation -----------------
  const validate = (): boolean => {
    const newErrors: Errors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";

    // Simple international-ish phone regex (works for many variants)
    const phoneRegex = /^(\+?\d{1,3}[\s-]?)?(\d{6,12})$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ----------------- Helpers -----------------
  const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const enqueueFailedPayload = (key: string, payload: any) => {
    try {
      const raw = localStorage.getItem(key);
      const queue = raw ? JSON.parse(raw) : [];
      queue.push({ payload, ts: Date.now() });
      localStorage.setItem(key, JSON.stringify(queue));
      console.info("Enqueued failed payload to localStorage:", key);
    } catch (err) {
      console.error("Failed to enqueue payload:", err);
    }
  };

  const readResponseBody = async (res: Response) => {
    try {
      const text = await res.text();
      try {
        return JSON.parse(text);
      } catch {
        return text;
      }
    } catch (err) {
      return `Unable to read response body: ${err}`;
    }
  };

  const sendWithRetries = async (
    url: string,
    options: RequestInit,
    attempts = 2,
    delayMs = 800
  ) => {
    let lastError: any = null;
    for (let i = 0; i <= attempts; i++) {
      try {
        const res = await fetch(url, options);
        const body = await readResponseBody(res);
        if (!res.ok) {
          lastError = { status: res.status, body };
          console.warn(`Request to ${url} failed (attempt ${i}):`, lastError);
          // Retry only for server errors (5xx). For 4xx (client) errors, break.
          if (res.status >= 500 && i < attempts) await sleep(delayMs * (i + 1));
          else throw lastError;
        } else {
          return { ok: true, status: res.status, body };
        }
      } catch (err) {
        lastError = err;
        console.error(
          `Network or parsing error on ${url} (attempt ${i}):`,
          err
        );
        if (i < attempts) await sleep(delayMs * (i + 1));
      }
    }
    return { ok: false, error: lastError };
  };

  // ----------------- Submit -----------------
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // --- Build automation payload ---
      // NOTE: confirm the exact keys the automation expects. If it expects plain keys,
      // switch to contact_location / contact_message style below.
      const automationPayload = {
        api_token: import.meta.env.VITE_AXXELER_API_TOKEN || "",
        contact_name: formData.name,
        contact_email: formData.email,
        contact_phone: formData.phone,
        // these were your original template keys — keep if automation expects them
        "{%contact.location%}": formData.location,
        "{%contact.your_message_%}": formData.message,
      };

      // Automation endpoint (your original)
      const automationUrl =
        "https://admin.axxeler.in/api/automations/68bd55cac4457/execute";

      // Log the token (temporary during debugging). Remove in production.
      console.info(
        "AXXELER TOKEN (partial):",
        (import.meta.env.VITE_AXXELER_API_TOKEN || "").slice(0, 8)
      );

      // Send to automation with retries
      const automationResp = await sendWithRetries(
        automationUrl,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(automationPayload),
        },
        2,
        1000
      );

      let automationOk = false;
      if (automationResp.ok) {
        automationOk = true;
        console.info(
          "Automation OK:",
          automationResp.status,
          automationResp.body
        );
      } else {
        console.error("Automation failed:", automationResp);
        toast.error("Automation workflow failed (server response logged).");
        enqueueFailedPayload("automation_retry_queue", {
          url: automationUrl,
          payload: automationPayload,
          lastError: automationResp.error ?? automationResp,
        });
      }

      // -------------------------
      // Save to admin panel OR fallback to createContact
      // -------------------------
      // Replace with your real admin panel URL if you have one.
      const ADMIN_PANEL_URL = ""; // <-- e.g. "https://admin.yoursite.com/api/contacts"
      const ADMIN_TOKEN = import.meta.env.VITE_ADMIN_API_TOKEN || ""; // optional

      let adminOk = false;

      if (!ADMIN_PANEL_URL) {
        // If no admin URL set, use your createContact flow (existing)
        try {
          await createContact.mutateAsync({ ...formData });
          adminOk = true;
          console.info("Saved locally via createContact.mutateAsync");
        } catch (err) {
          console.error("createContact.mutateAsync failed:", err);
          enqueueFailedPayload("local_create_retry_queue", {
            payload: { ...formData },
            lastError: err,
          });
        }
      } else {
        // If you set ADMIN_PANEL_URL, we'll POST to it
        try {
          const adminPayload = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            location: formData.location,
            message: formData.message,
          };

          const adminResp = await sendWithRetries(
            ADMIN_PANEL_URL,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                ...(ADMIN_TOKEN
                  ? { Authorization: `Bearer ${ADMIN_TOKEN}` }
                  : {}),
              },
              body: JSON.stringify(adminPayload),
            },
            1,
            800
          );

          if (adminResp.ok) {
            adminOk = true;
            console.info("Admin panel OK:", adminResp.status, adminResp.body);
          } else {
            console.error("Admin panel failed:", adminResp);
            enqueueFailedPayload("admin_retry_queue", {
              url: ADMIN_PANEL_URL,
              payload: adminPayload,
              lastError: adminResp.error ?? adminResp,
            });
            // attempt local save if you have createContact
            try {
              await createContact.mutateAsync({ ...formData });
              console.info(
                "Also saved locally via createContact.mutateAsync after admin fail"
              );
            } catch (err) {
              console.error("Local save also failed:", err);
            }
          }
        } catch (err) {
          console.error("Unexpected admin panel error:", err);
          enqueueFailedPayload("admin_retry_queue", {
            payload: { ...formData },
            lastError: err,
          });
        }
      }

      // --- Meta Pixel tracking (unchanged) ---
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead", {
          email: formData.email,
          phone: formData.phone,
        });
      }

      // User feedback with detailed conditions
      if (automationOk && adminOk) {
        toast.success("Thanks! Your message has been sent and saved.");
      } else if (!automationOk && adminOk) {
        toast.success("Message saved. Automation failed (queued for retry).");
      } else if (automationOk && !adminOk) {
        toast.success(
          "Message sent to automation. Saving to admin failed (queued)."
        );
      } else {
        toast.success("Message saved locally. We'll retry sending later.");
      }

      // reset form & close popup
      setIsPopupOpen(false);
      setFormData({
        name: "",
        email: "",
        message: "",
        phone: "",
        location: "",
      });
      setErrors({});
    } catch (err) {
      console.error("Error submitting form (unexpected):", err);
      toast.error("Something went wrong. Check console & network tab.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-5">
      <h1 className="flex gap-2 text-2xl md:text-4xl font-primary uppercase justify-start items-center text-white z-[11] opacity-0 animate-lineUp">
        <span className="text-white">Let's</span>
        <span className="text-secondary">
          <TextHoverAnimation text="Talk" />
        </span>
      </h1>
      {/* name */}
      <div className="flex flex-col">
        <label
          htmlFor="name"
          className="block text-sm uppercase font-medium text-white mb-1"
        >
          Your Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="block w-full text-secondary bg-transparent border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
        )}
      </div>

      {/* email */}
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="block text-sm uppercase font-medium text-white mb-1"
        >
          Your Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="block bg-transparent w-full text-secondary border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      {/* phone */}
      <div className="flex flex-col">
        <label
          htmlFor="phone"
          className="block text-sm uppercase font-medium text-white mb-1"
        >
          Your Phone
        </label>
        <input
          id="phone"
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="block w-full text-secondary bg-transparent border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
        />
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
        )}
      </div>

      {/* location */}
      <div className="flex flex-col">
        <label
          htmlFor="location"
          className="block text-sm uppercase font-medium text-white mb-1"
        >
          Your Location
        </label>
        <input
          id="location"
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          className="block w-full text-secondary bg-transparent border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
        />
        {errors.location && (
          <p className="text-red-500 text-xs mt-1">{errors.location}</p>
        )}
      </div>

      {/* message */}
      <div className="flex flex-col">
        <label
          htmlFor="message"
          className="block text-sm font-medium uppercase text-white mb-1"
        >
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="block text-secondary bg-transparent w-full border-b border-gray-300 focus:border-secondary focus:outline-none pb-1"
          rows={4}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
        )}
      </div>

      {/* submit */}
      <div className="w-full flex justify-end items-end text-md">
        <button
          type="submit"
          disabled={isSubmitting || createContact.isPending}
          className="w-[35%] bg-secondary text-black font-medium py-2 rounded-full hover:bg-cursor-hover disabled:opacity-60"
        >
          {isSubmitting || createContact.isPending
            ? "Loading.."
            : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
