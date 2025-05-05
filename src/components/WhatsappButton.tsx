// "use client";

// import { useEffect, useState } from "react";

// const WhatsAppButton = () => {
//   const [visible, setVisible] = useState(false);
//   const [showText, setShowText] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setVisible(true);
//     }, 1000); // Smooth appearance delay

//     // Scroll event to hide text
//     const handleScroll = () => {
//       setShowText(false);
//       setTimeout(() => setShowText(true), 1500);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const whatsappNumber = "9715131373";
//   const whatsappLink = `https://wa.me/${whatsappNumber}`;

//   return (
//     <div className="fixed bottom-5 right-5 md:bottom-10 md:right-10 z-50 flex items-center gap-2">
//       {/* Animated Text */}
//       <span
//         className={`hidden md:block text-white bg-green-600 px-3 py-1 rounded-lg text-sm font-semibold shadow-lg transition-all duration-500 ${
//           visible && showText
//             ? "opacity-100 translate-x-0"
//             : "opacity-0 translate-x-5"
//         }`}
//       >
//         Chat in WhatsApp
//       </span>

//       {/* WhatsApp Icon */}
//       <a
//         href={whatsappLink}
//         target="_blank"
//         rel="noopener noreferrer"
//         className={`transition-opacity duration-700 ${
//           visible ? "opacity-100" : "opacity-0"
//         }`}
//         style={{ pointerEvents: "auto" }}
//       >
//         <img
//           src="/WA.png"
//           alt="WhatsApp"
//           className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 drop-shadow-lg hover:scale-110 transition-transform"
//         />
//       </a>
//     </div>
//   );
// };

// export default WhatsAppButton;

"use client";

import { useEffect, useState } from "react";

const WhatsAppButton = () => {
  const [visible, setVisible] = useState(false);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 1000);

    const handleScroll = () => {
      setShowText(false);
      setTimeout(() => setShowText(true), 1500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = "919615737373";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const instagramLink = "https://www.instagram.com/gameonsolution_southindia/";
  const callLink = `tel:+${whatsappNumber}`; // using same number for call

  return (
    <div className="fixed bottom-5 right-5 md:bottom-10 md:right-10 z-50 flex flex-col md:flex-row items-center gap-2 md:gap-3">
      {/* Animated WhatsApp Text (only on md and above) */}
      <span
        className={`hidden md:block text-white bg-green-600 px-3 py-1 rounded-lg text-sm font-semibold shadow-lg transition-all duration-500 ${
          visible && showText
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-5"
        }`}
      >
        Chat in WhatsApp
      </span>

      {/* WhatsApp Icon */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`transition-opacity duration-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{ pointerEvents: "auto" }}
      >
        <img
          src="/WA.png"
          alt="WhatsApp"
          className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 drop-shadow-lg hover:scale-110 transition-transform"
        />
      </a>

      {/* Instagram Icon */}
      <a
        href={instagramLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`transition-opacity duration-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src="/Insta.png"
          alt="Instagram"
          className="w-9 h-9 md:w-12 md:h-12 lg:w-14 lg:h-14 drop-shadow-lg hover:scale-110 transition-transform"
        />
      </a>

      {/* Call Icon */}
      <a
        href={callLink}
        className={`transition-opacity duration-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src="/Call.png"
          alt="Call"
          className="w-9 h-9 md:w-12 md:h-12 lg:w-14 lg:h-14 drop-shadow-lg hover:scale-110 transition-transform"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
