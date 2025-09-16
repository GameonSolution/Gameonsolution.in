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

  // 🔹 Load Meta Pixel script
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // build the payload in the exact shape the automation expects
      const payload = {
        api_token: import.meta.env.VITE_AXXELER_API_TOKEN || "", // see note below
        contact_name: formData.name,
        contact_email: formData.email,
        contact_phone: formData.phone,
        "{%contact.location%}": formData.location,
        "{%contact.your_message_%}": formData.message,
      };

      // 1) Call automation API
      const apiUrl =
        "https://admin.axxeler.in/api/automations/68bd55cac4457/execute";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let automationOk = false;
      if (!response.ok) {
        toast.error("Automation workflow failed. Saved locally instead.");
        console.error("Automation error:", await response.text());
      } else {
        automationOk = true;
      }

      // 2) Save locally (your existing local DB flow)
      await createContact.mutateAsync({ ...formData });

      // 3) Meta Pixel (send simplified tracking payload)
      if (typeof window !== "undefined" && (window as any).fbq) {
        // fbq expects conversion params — keep it small
        (window as any).fbq("track", "Lead", {
          email: formData.email,
          phone: formData.phone,
        });
      }

      // 4) Feedback to user
      if (automationOk) {
        toast.success("Thanks! Your message has been sent.");
      } else {
        toast.success("Message saved. We'll follow up soon!");
      }

      // Reset form & close popup
      setIsPopupOpen(false);
      setFormData({
        name: "",
        email: "",
        message: "",
        phone: "",
        location: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
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
          className="w-[35%] bg-secondary text-black font-medium py-2 rounded-full hover:bg-cursor-hover"
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
