// import React, { useEffect } from "react";
// import { Helmet } from "react-helmet";
// import { motion } from "framer-motion";
// import { FaPlus, FaMinus } from "react-icons/fa";
// import { Footer } from "../footer";
// import WhatsAppButton from "../WhatsappButton";

// const EcoFriendly: React.FC = () => {
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   const [openIndex, setOpenIndex] = React.useState<number | null>(null);

//   const faqs = [
//     {
//       q: "Is Eco Friendly Turf safe for kids and pets?",
//       a: "Yes! Our turf is made from non-toxic, lead-free materials, making it completely safe for children and pets.",
//     },
//     {
//       q: "How long does the turf last?",
//       a: "With proper care, Eco Friendly Turf lasts 8-10 years while maintaining its color and quality.",
//     },
//     {
//       q: "Does the turf need watering?",
//       a: "No regular watering is required. Only occasional cleaning is needed to remove dust and debris.",
//     },
//     {
//       q: "Can I install it in heavy rainfall areas?",
//       a: "Yes, it has an excellent drainage system and performs well in all weather conditions.",
//     },
//   ];

//   const products = [
//     {
//       name: "GameOn Premium 40",
//       application: "Garden Lawns, Roof, Garden",
//       rollWidth: "1M/2M",
//       color: "Field Green + Lime Green",
//       rollLength: "25M",
//       yarn: {
//         structure: "Monofilament",
//         material: "PE + PP",
//         tapeThickness: "70-110 μm",
//         strands: "8 Monofilament + 8 Curl Yarn",
//         shape: "Crowl VIII",
//         dtex: "8500 ± 5%",
//         tapeWidth: "0.76 - 0.96mm",
//         color: "3 Tone",
//       },
//       turf: {
//         pileHeight: "40mm ± 1mm",
//         stitchRate: "18 ± 1 / 10cm",
//         totalWeight: "2745g ± 10%",
//         yarnWeight: "1450g ± 10%",
//         gauge: "3/8”",
//         stitchPerM2: "18,900 ± 10%",
//         secondaryBacking: "Black SBR Latex",
//         primaryBacking: "UV resistance PP Cloth + Mesh",
//       },
//     },
//     {
//       name: "GameOn Premium 35",
//       application: "Garden Lawns, Roof, Garden",
//       rollWidth: "1M/2M",
//       color: "Field Green + Lime Green",
//       rollLength: "25M",
//       yarn: {
//         structure: "Monofilament",
//         material: "PE + PP",
//         tapeThickness: "70-110 μm",
//         strands: "8 Monofilament + 8 Curl Yarn",
//         shape: "Crowl VIII",
//         dtex: "8500 ± 5%",
//         tapeWidth: "0.76 - 0.96mm",
//         color: "3 Tone",
//       },
//       turf: {
//         pileHeight: "35mm ± 1mm",
//         stitchRate: "18 ± 1 / 10cm",
//         totalWeight: "2580g ± 10%",
//         yarnWeight: "1285g ± 10%",
//         gauge: "3/8”",
//         stitchPerM2: "18,900 ± 10%",
//         secondaryBacking: "Black SBR Latex",
//         primaryBacking: "UV resistance PP Cloth + Mesh",
//       },
//     },
//   ];

//   const maintenanceServices = [
//     {
//       title: "Regular Turf Cleaning",
//       desc: "Keep your turf fresh and hygienic with our professional cleaning and debris removal service.",
//     },
//     {
//       title: "Infill & Leveling",
//       desc: "Maintain even play and optimal performance with periodic infill adjustments and leveling.",
//     },
//     {
//       title: "Damage Repair & Replacement",
//       desc: "Quick repair of torn seams, worn-out patches, or fiber damage to extend turf life.",
//     },
//     {
//       title: "Anti-Weed & Anti-Moss Treatment",
//       desc: "Prevent unwanted weed and moss growth with eco-friendly treatments.",
//     },
//   ];

//   return (
//     <div className="bg-[#0b2e13] text-white font-secondary">
//       <WhatsAppButton />
//       {/* ✅ SEO META TAGS */}
//       <Helmet>
//         <title>Eco Friendly Turf | GameOn Solution</title>
//         <meta
//           name="description"
//           content="Eco Friendly Turf by GameOn Solution – sustainable, durable, and ideal for playgrounds, arenas, and gardens. 100% recyclable and low-maintenance."
//         />
//         <link
//           rel="canonical"
//           href="https://gameonsolution.in/products/eco-friendly"
//         />
//       </Helmet>

//       {/* ✅ HERO SECTION */}
//       <div className="relative h-[80vh] w-full flex items-center justify-center">
//         <img
//           src="/Football/Football-02.webp"
//           alt="Eco Friendly Turf Background"
//           className="absolute inset-0 w-full h-full object-cover opacity-40"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 text-center px-6"
//         >
//           <h1 className="text-5xl md:text-7xl text-secondary font-primary mb-4 uppercase">
//             Eco Friendly Turf
//           </h1>
//           <p className="text-gray-200 max-w-2xl mx-auto text-xl md:text-2xl font-medium">
//             Sustainable, durable, and visually stunning. Designed for the next
//             generation of sports and green spaces.
//           </p>
//         </motion.div>
//       </div>

// {/* ✅ INTRO SECTION */}
// <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
//   <motion.img
//     src="/Football/1.webp"
//     alt="Eco Friendly Grass"
//     className="rounded-2xl shadow-lg w-full h-full object-cover"
//     initial={{ opacity: 0, x: -50 }}
//     whileInView={{ opacity: 1, x: 0 }}
//     transition={{ duration: 0.6 }}
//     viewport={{ once: true }}
//   />

//   <motion.div
//     initial={{ opacity: 0, x: 50 }}
//     whileInView={{ opacity: 1, x: 0 }}
//     transition={{ duration: 0.6 }}
//     viewport={{ once: true }}
//     className="space-y-6"
//   >
//     <h2 className="text-3xl md:text-4xl font-bold text-secondary">
//       What Makes Our Turf Special?
//     </h2>
//     <p className="text-gray-200 text-lg">
//       GameOn's Eco Friendly Turf is engineered to look and feel like
//       natural grass while being completely sustainable. Built with
//       advanced drainage, UV resistance, and shock absorption, it ensures
//       top performance for both sports and leisure spaces.
//     </p>
//     <ul className="list-disc list-inside text-gray-200 space-y-3 text-lg">
//       <li>100% recyclable, non-toxic materials</li>
//       <li>Weatherproof and UV-resistant for long life</li>
//       <li>Perfect for arenas, playgrounds, and rooftops</li>
//       <li>Low maintenance with no water wastage</li>
//     </ul>
//     <button className="mt-6 px-8 py-3 bg-secondary text-black rounded-lg font-medium hover:bg-white transition">
//       <a href="https://wa.me/919615737373">Get a Free Quote</a>
//     </button>
//   </motion.div>
// </div>

//       {/* ✅ PRODUCT SPECIFICATIONS */}
//       <div className="py-20 bg-green-950/60">
//         <h2 className="text-center text-3xl md:text-4xl font-normal font-primary uppercase text-secondary mb-12">
//           Recommended Grass Products
//         </h2>
//         <div className="max-w-7xl mx-auto space-y-12 px-6">
//           {products.map((prod, idx) => (
//             <motion.div
//               key={idx}
//               className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#0f2d12]/80 p-6 rounded-xl border border-green-700"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               {/* Product */}
//               <div>
//                 <h3 className="text-xl font-bold text-secondary mb-4">
//                   {prod.name}
//                 </h3>
//                 <p className="text-gray-300 mb-2">
//                   <strong>Application:</strong> {prod.application}
//                 </p>
//                 <p className="text-gray-300 mb-2">
//                   <strong>Roll Width:</strong> {prod.rollWidth}
//                 </p>
//                 <p className="text-gray-300 mb-2">
//                   <strong>Color:</strong> {prod.color}
//                 </p>
//                 <p className="text-gray-300">
//                   <strong>Roll Length:</strong> {prod.rollLength}
//                 </p>
//               </div>

//               {/* Yarn */}
//               <div className="bg-green-900/40 p-4 rounded-lg border border-green-700">
//                 <h4 className="text-lg font-semibold text-secondary mb-3">
//                   Yarn
//                 </h4>
//                 <p className="text-gray-300 text-sm">
//                   <strong>Structure:</strong> {prod.yarn.structure} <br />
//                   <strong>Material:</strong> {prod.yarn.material} <br />
//                   <strong>Strands:</strong> {prod.yarn.strands} <br />
//                   <strong>Shape:</strong> {prod.yarn.shape} <br />
//                   <strong>Dtex:</strong> {prod.yarn.dtex} <br />
//                   <strong>Tape Width:</strong> {prod.yarn.tapeWidth} <br />
//                   <strong>Color:</strong> {prod.yarn.color}
//                 </p>
//               </div>

//               {/* Turf */}
//               <div className="bg-green-900/40 p-4 rounded-lg border border-green-700">
//                 <h4 className="text-lg font-semibold text-secondary mb-3">
//                   Turf
//                 </h4>
//                 <p className="text-gray-300 text-sm">
//                   <strong>Pile Height:</strong> {prod.turf.pileHeight} <br />
//                   <strong>Stitch Rate:</strong> {prod.turf.stitchRate} <br />
//                   <strong>Total Weight:</strong> {prod.turf.totalWeight} <br />
//                   <strong>Gauge:</strong> {prod.turf.gauge} <br />
//                   <strong>Backing:</strong> {prod.turf.primaryBacking}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* ✅ MAINTENANCE SERVICES */}
//       <div className="py-20 bg-green-900/60">
//         <h2 className="text-center text-3xl md:text-4xl font-normal font-primary uppercase mb-12">
//           Turf Maintenance Services
//         </h2>
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
//           {maintenanceServices.map((service, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="bg-[#0f2d12]/80 border border-green-700 rounded-xl p-6 text-center hover:border-secondary transition"
//             >
//               <h3 className="text-xl font-bold text-secondary mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-gray-300 text-sm">{service.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* ✅ FAQ SECTION */}
//       <div className="py-20 max-w-6xl mx-auto px-6 text-center flex flex-col gap-10">
//         <p className="text-[12px] font-secondary uppercase tracking-[1px] text-white">
//           FAQs
//         </p>

//         <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white uppercase leading-tight flex flex-wrap justify-center gap-2">
//           <span>Eco Friendly Turf</span>
//           <span className="text-secondary">FAQs</span>
//         </h1>

//         <div className="flex flex-col w-full border border-white/10 rounded-md overflow-hidden divide-y divide-white/10">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="bg-green-900/40 hover:bg-green-900/60 transition-colors"
//             >
//               <button
//                 className="w-full flex justify-between items-center p-4 md:p-6 cursor-pointer text-left"
//                 onClick={() =>
//                   setOpenIndex((prev) => (prev === index ? null : index))
//                 }
//                 aria-expanded={openIndex === index}
//                 aria-controls={`faq-answer-${index}`}
//               >
//                 <h2
//                   className={`text-lg md:text-xl lg:text-2xl font-primary ${
//                     index % 2 === 0 ? "text-white" : "text-secondary"
//                   }`}
//                 >
//                   {faq.q}
//                 </h2>
//                 <span className="text-secondary ml-4">
//                   {openIndex === index ? (
//                     <FaMinus size={16} />
//                   ) : (
//                     <FaPlus size={16} />
//                   )}
//                 </span>
//               </button>

//               <div
//                 id={`faq-answer-${index}`}
//                 className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                   openIndex === index
//                     ? "max-h-96 opacity-100"
//                     : "max-h-0 opacity-0"
//                 }`}
//               >
//                 <p className="p-4 md:p-6 pt-2 md:pt-3 text-base md:text-lg text-white bg-green-950/30">
//                   {faq.a}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ✅ NEXT PRODUCT LINKS */}
//       <div className="py-20 bg-green-950/80">
//         <h2 className="text-center text-3xl md:text-4xl font-normal font-primary text-white uppercase mb-12">
//           Explore More Products
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
//           {[
//             {
//               title: "Aqua-Themed Turf",
//               img: "/aquaturf/3.webp",
//               link: "/products/aqua-themed",
//             },
//             {
//               title: "360 Circle Turf",
//               img: "/blog/Blog2(1).webp",
//               link: "/products/360-circle",
//             },
//           ].map((prod, idx) => (
//             <a
//               href={prod.link}
//               key={idx}
//               className="relative group overflow-hidden rounded-2xl shadow-lg"
//             >
//               <img
//                 src={prod.img}
//                 alt={prod.title}
//                 className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
//               />
//               <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
//                 <p className="text-secondary text-xl font-bold">{prod.title}</p>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default EcoFriendly;

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Footer } from "../footer";
import WhatsAppButton from "../WhatsappButton";
import Testimonials from "../testimonial";
import Certificates from "../products/pageAnimation/certificates";
import Awards from "../Awards";
import TextTestimonials from "../texttestimonials";

const EcoFriendly: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      q: "Is Eco Friendly Turf safe for kids and pets?",
      a: "Yes! Our turf is made from non-toxic, lead-free materials, making it completely safe for children and pets.",
    },
    {
      q: "How long does the turf last?",
      a: "With proper care, Eco Friendly Turf lasts 8-10 years while maintaining its color and quality.",
    },
    {
      q: "Does the turf need watering?",
      a: "No regular watering is required. Only occasional cleaning is needed to remove dust and debris.",
    },
    {
      q: "Can I install it in heavy rainfall areas?",
      a: "Yes, it has an excellent drainage system and performs well in all weather conditions.",
    },
    {
      q: "What is the difference between Eco Friendly Turf and Rubber Infilled Turf?",
      a: `Eco Friendly Turf uses white silica sand which is 100% non-toxic, does not cause cancer, and produces less heat.
           Rubber Infilled Turf can cause skin diseases, has cancer-causing agents, and generates higher heat, making it unsafe for long-term use.`,
    },
    {
      q: "Which one is more cost-effective?",
      a: "Eco Friendly Turf is slightly costlier than cheap rubber-infilled turfs, but it is safer, long-lasting, and requires less maintenance over time.",
    },
  ];

  // const topProducts = [
  //   {
  //     name: "Dream",
  //     pileHeight: "50mm",
  //     yarnThickness: "420μm",
  //     unitDtex: "2833",
  //     dtex: "17000",
  //     lisport: "250,000 cycles",
  //     reference: "FIFA Quality, FIFA Quality PRO, EN15330, NFP90 112",
  //     img: "/grass/Pride.webp",
  //   },
  //   {
  //     name: "Pride",
  //     pileHeight: "50mm",
  //     yarnThickness: "370μm",
  //     unitDtex: "2000",
  //     dtex: "14000",
  //     lisport: "200,000 cycles",
  //     reference: "FIFA Quality, FIFA Quality PRO, Ashbourne RFC",
  //     img: "/grass/Pride.webp",
  //   },
  //   {
  //     name: "Max",
  //     pileHeight: "50mm",
  //     yarnThickness: "130μm",
  //     unitDtex: "2000",
  //     dtex: "12000",
  //     lisport: "150,000 cycles",
  //     reference: "FIFA Quality, FIFA Quality PRO",
  //     img: "/grass/1.webp",
  //   },
  // ];

  // const products = [
  //   {
  //     name: "GameOn Premium 40",
  //     application: "Garden Lawns, Roof, Garden",
  //     rollWidth: "1M/2M",
  //     color: "Field Green + Lime Green",
  //     rollLength: "25M",
  //     yarn: {
  //       structure: "Monofilament",
  //       material: "PE + PP",
  //       strands: "8 Monofilament + 8 Curl Yarn",
  //       shape: "Crowl VIII",
  //       dtex: "8500 ± 5%",
  //       tapeWidth: "0.76 - 0.96mm",
  //       color: "3 Tone",
  //     },
  //     turf: {
  //       pileHeight: "40mm ± 1mm",
  //       stitchRate: "18 ± 1 / 10cm",
  //       totalWeight: "2745g ± 10%",
  //       gauge: "3/8”",
  //       primaryBacking: "UV resistance PP Cloth + Mesh",
  //     },
  //   },
  //   {
  //     name: "GameOn Premium 35",
  //     application: "Garden Lawns, Roof, Garden",
  //     rollWidth: "1M/2M",
  //     color: "Field Green + Lime Green",
  //     rollLength: "25M",
  //     yarn: {
  //       structure: "Monofilament",
  //       material: "PE + PP",
  //       strands: "8 Monofilament + 8 Curl Yarn",
  //       shape: "Crowl VIII",
  //       dtex: "8500 ± 5%",
  //       tapeWidth: "0.76 - 0.96mm",
  //       color: "3 Tone",
  //     },
  //     turf: {
  //       pileHeight: "35mm ± 1mm",
  //       stitchRate: "18 ± 1 / 10cm",
  //       totalWeight: "2580g ± 10%",
  //       gauge: "3/8”",
  //       primaryBacking: "UV resistance PP Cloth + Mesh",
  //     },
  //   },
  // ];

  const maintenanceServices = [
    {
      title: "Regular Turf Cleaning",
      desc: "Keep your turf fresh and hygienic with our professional cleaning and debris removal service.",
    },
    {
      title: "Infill & Leveling",
      desc: "Maintain even play and optimal performance with periodic infill adjustments and leveling.",
    },
    {
      title: "Damage Repair & Replacement",
      desc: "Quick repair of torn seams, worn-out patches, or fiber damage to extend turf life.",
    },
    {
      title: "Anti-Weed & Anti-Moss Treatment",
      desc: "Prevent unwanted weed and moss growth with eco-friendly treatments.",
    },
  ];

  return (
    <div className="bg-[#081f0e] text-white font-secondary">
      <WhatsAppButton />
      <Helmet>
        <title>Eco Friendly Turf | GameOn Solution</title>
        <meta
          name="description"
          content="Eco Friendly Turf by GameOn Solution - sustainable, durable, and ideal for playgrounds, arenas, and gardens. 100% recyclable and low-maintenance."
        />
        <link
          rel="canonical"
          href="https://gameonsolution.in/products/eco-friendly"
        />
      </Helmet>

      {/* ✅ HERO */}
      <div className="relative h-[75vh] flex items-center justify-center">
        <img
          src="/Football/Football-02.webp"
          alt="Eco Friendly Turf"
          className="absolute w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10 px-6"
        >
          <h1 className="text-5xl md:text-7xl text-secondary font-primary mb-4 uppercase">
            Eco Friendly Turf
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-xl md:text-2xl font-medium">
            Sustainable, durable, and visually stunning. Designed for the next
            generation of sports and green spaces.
          </p>
        </motion.div>
      </div>

      {/* ✅ INTRO SECTION */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.img
          src="/Football/1.webp"
          alt="Eco Friendly Grass"
          className="rounded-2xl shadow-lg w-full h-full object-cover"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            What Makes Our Turf Special?
          </h2>
          <p className="text-gray-200 text-lg">
            GameOn's Eco Friendly Turf is engineered to look and feel like
            natural grass while being completely sustainable. Built with
            advanced drainage, UV resistance, and shock absorption, it ensures
            top performance for both sports and leisure spaces.
          </p>
          <ul className="list-disc list-inside text-gray-200 space-y-3 text-lg">
            <li>100% recyclable, non-toxic materials</li>
            <li>Weatherproof and UV-resistant for long life</li>
            <li>Perfect for arenas, playgrounds, and rooftops</li>
            <li>Low maintenance with no water wastage</li>
          </ul>
          <button className="mt-6 px-8 py-3 bg-secondary text-black rounded-lg font-medium hover:bg-white transition">
            <a href="https://wa.me/919615737373">Get a Free Quote</a>
          </button>
        </motion.div>
      </div>

      <TextTestimonials />

      {/* NEW: Football Turf Installation Content */}
      <div className="py-12 bg-[#081f0e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-secondary uppercase">
            Expert Football Turf Installation Services South India - GameOn
            Solution
          </h2>

          <p className="md:text-2xl text-lg leading-relaxed text-gray-200">
            Upgrade your pitch with{" "}
            <strong>high-quality FIFA-certified football turf</strong> designed
            to perform in all weather conditions. If you&apos;re looking for
            professional{" "}
            <strong className="text-secondary">
              football turf installation in Chennai, Bangalore, Hyderabad, or
              anywhere in South India
            </strong>
            , GameOn Solution is your trusted partner. Our eco-friendly, durable
            football turfs provide world-class playing conditions for academies,
            community fields, and professional stadiums.
          </p>

          <h3 className="text-2xl md:text-3xl text-secondary font-primary">
            Why Choose GameOn Solution for Football Turf Installation?
          </h3>
          <ul className="list-disc pl-5 md:text-xl text-lg space-y-3 text-gray-200">
            <li>
              <strong>Environmentally Safe Grass Solutions:</strong> We use
              recyclable, non-toxic materials, ensuring safe play and a minimal
              environmental footprint.
            </li>
            <li>
              <strong>Aqua Eco-Friendly Grass Systems:</strong> Advanced
              piezo-drainage technology saves up to 70% water compared to
              natural grass.
            </li>
            <li>
              <strong>FIFA Pro Certified Quality:</strong> Tested for ball roll,
              bounce, player interaction, and shock absorption for professional
              play.
            </li>
            <li>
              <strong>All-Weather Durability:</strong> Play year-round without
              worrying about monsoons or extreme heat in South India.
            </li>
          </ul>

          <h3 className="text-2xl md:text-3xl text-secondary font-primary">
            Football Turf Installation Process
          </h3>
          <ol className="list-decimal pl-5 md:text-xl text-lg space-y-3 text-gray-200">
            <li>
              <strong>Site Evaluations & Planning</strong> - Assessing drainage,
              soil, and climate.
            </li>
            <li>
              <strong>Ground Preparation</strong> - Creating a stable base with
              perfect drainage.
            </li>
            <li>
              <strong>Professional Installation</strong> - Using FIFA-approved
              artificial turf with precise joints.
            </li>
            <li>
              <strong>Quality Assurance</strong> - Comprehensive checks to meet
              international football standards.
            </li>
          </ol>

          <h3 className="text-2xl md:text-3xl text-secondary font-primary">
            Benefits of Our Football Turf Systems
          </h3>
          <ul className="list-disc pl-5 md:text-xl text-lg space-y-3 text-gray-200">
            <li>All-climate performance with zero downtime.</li>
            <li>Low maintenance and cost savings over natural grass.</li>
            <li>Durable and safe for players with consistent ball roll.</li>
            <li>Quick project delivery and long-term warranty coverage.</li>
          </ul>

          <h3 className="text-2xl md:text-3xl text-secondary font-primary">
            Service Locations Across South India
          </h3>
          <p className="md:text-xl text-lg text-gray-200">
            GameOn Solution offers{" "}
            <strong>football turf construction and installation</strong> in
            Tamil Nadu{" "}
            <span className="text-secondary">
              (Chennai, Coimbatore, Madurai)
            </span>
            , Karnataka{" "}
            <span className="text-secondary">(Bangalore, Mysore)</span>, Andhra
            Pradesh{" "}
            <span className="text-secondary">(Vijayawada, Visakhapatnam)</span>,
            Kerala <span className="text-secondary">(Kochi, Trivandrum)</span>,
            and Telangana{" "}
            <span className="text-secondary">(Hyderabad, Warangal)</span>.
          </p>

          <h3 className="text-2xl md:text-3xl text-secondary font-primary">
            Why Eco-Friendly Football Turf?
          </h3>
          <p className="md:text-xl text-lg text-gray-200">
            Our <strong>eco-friendly football grass</strong> eliminates toxic
            rubber infill and uses silica sand or organic alternatives. It stays
            cooler in the South Indian climate, provides excellent drainage
            during monsoons, and is 100% recyclable.
          </p>

          <ul className="list-disc pl-5 md:text-xl text-lg space-y-3 text-gray-200">
            <li>No toxic rubber exposure or respiratory risks.</li>
            <li>Colder surface temperature with superior drainage.</li>
            <li>FIFA Pro-level playability with 10+ years of durability.</li>
            <li>Environmentally safe and fully recyclable materials.</li>
          </ul>

          <p className="md:text-xl text-lg mt-6 text-gray-200">
            <strong>Transform your football field with GameOn Solution</strong>.
            Contact us today for a free site assessment and professional quote.
            Experience world-class turf installation that delivers durability,
            eco-friendliness, and top performance for South India&apos;s
            climate.
          </p>
        </div>
      </div>

      {/* Testimonials, Certificates, Awards */}
      <Testimonials />
      <Certificates />
      <Awards />

      {/* ECO-FRIENDLY TURF SECTION */}
      <div className="py-20 bg-[#0a2412] text-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-primary text-secondary uppercase text-center">
            Eco-Friendly Turf
          </h2>
          <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto">
            GameOn Solution’s Eco-Friendly Turf is engineered for long-term
            performance, safety, and sustainability. Made from non-toxic,
            lead-free materials, it is completely safe for kids and pets, and
            produces less heat than conventional rubber-infilled turfs.
          </p>

          {/* SPECIFICATIONS */}
          <div className="bg-green-900/40 border border-green-700 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-secondary mb-4">
                Turf Specifications
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                <li>
                  <strong>Pile Height:</strong> 30mm
                </li>
                <li>
                  <strong>Gauge:</strong> 3/8 inch
                </li>
                <li>
                  <strong>Stitch Rate:</strong> 20 st / 10 cm
                </li>
                <li>
                  <strong>Density:</strong> 18,000
                </li>
                <li>
                  <strong>Backing:</strong> 4 Layers (Double PP + Mesh + SBR
                  Latex + PU)
                </li>
                <li>
                  <strong>Warranty:</strong> 7 Years Manufacturer Warranty
                </li>
                <li>
                  <strong>Certification:</strong> FIFA Quality Pro Certified
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-secondary mb-4">
                Turf Infill
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                <li>
                  <strong>Type:</strong> Quartz Micro White Sand
                </li>
                <li>
                  <strong>Grain Size:</strong> 0.5 - 1.0mm
                </li>
                <li>
                  <strong>Quantity:</strong> 500g per sqft ±20%
                </li>
                <li>✅ Non-Toxic and 100% Safe</li>
                <li>✅ Produces Less Heat</li>
                <li>✅ No Cancer-Causing Agents</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-950/50 rounded-xl p-6 text-center text-gray-200 text-lg">
            Eco-Friendly Turf provides{" "}
            <span className="text-secondary font-bold">
              long-lasting life, improved play performance, and complete safety
            </span>{" "}
            for both professional arenas and residential spaces.
          </div>
        </div>
      </div>

      {/* RUBBER INFILLED TURF */}
      <div className="py-20 bg-[#081d0f] text-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-primary text-red-400 uppercase text-center">
            Rubber Infilled Turf
          </h2>
          <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto">
            Rubber Infilled Turf uses SBR black rubber granules as infill. While
            it is cheaper than Eco-Friendly Turf, it produces more heat, may
            cause skin problems, and has a shorter lifespan for long-term play.
          </p>

          {/* SPECIFICATIONS */}
          <div className="bg-green-900/30 border border-green-800 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-4">
                Turf Specifications
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                <li>
                  <strong>Pile Height:</strong> 50mm
                </li>
                <li>
                  <strong>Gauge:</strong> 5/8 inch
                </li>
                <li>
                  <strong>Stitch Rate:</strong> 14-15 st / 10 cm
                </li>
                <li>
                  <strong>Dtex:</strong> 14,000 - 17,000
                </li>
                <li>
                  <strong>Density:</strong> ~8,820/sqm
                </li>
                <li>
                  <strong>Backing:</strong> Double PP + Mesh + SBR Latex
                </li>
                <li>
                  <strong>Warranty:</strong> 5 Years Manufacturer Warranty
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-red-400 mb-4">
                Turf Infill
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                <li>
                  <strong>Type:</strong> Black SBR Rubber
                </li>
                <li>
                  <strong>Grain Size:</strong> 0.8 - 2.0mm
                </li>
                <li>
                  <strong>Quantity:</strong> 6kg per sqm ±20%
                </li>
                <li>⚠️ Produces Heat</li>
                <li>⚠️ May Cause Skin Diseases</li>
                <li>⚠️ Shorter Lifespan</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-950/30 rounded-xl p-6 text-center text-gray-200 text-lg">
            Rubber Infilled Turf is{" "}
            <span className="text-red-400 font-bold">
              less safe for long-term play
            </span>{" "}
            and is mainly chosen for short-term or low-budget installations.
          </div>
        </div>
      </div>

      {/* MAINTENANCE */}
      <div className="py-20 bg-[#0a2412]">
        <h2 className="text-center text-3xl md:text-4xl font-primary uppercase mb-12 text-secondary">
          Turf Maintenance Services
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {maintenanceServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#102e19] border border-green-800 rounded-xl p-6 text-center hover:border-secondary transition"
            >
              <h3 className="text-xl font-bold text-secondary mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* GALLERY */}
      <div className="py-20 bg-[#0a2412]">
        <h2 className="text-center text-3xl md:text-4xl font-primary uppercase mb-12 text-secondary">
          Project Gallery
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          {[
            "/ecofriendly/1.webp",
            "/ecofriendly/3.webp",
            "/Football/Football-08.webp",
            "/ecofriendly/4.webp",
            "/Football/Football-03.webp",
            "/ecofriendly/2.webp",
            "/ecofriendly/5.webp",
            "/ecofriendly/6.webp",
            "/Football/Football-06.webp",
          ].map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl shadow-xl border border-green-800/50"
            >
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="py-20 max-w-6xl mx-auto px-6 text-center flex flex-col gap-10">
        <p className="text-[12px] font-secondary uppercase tracking-[1px] text-white">
          FAQs
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white uppercase leading-tight flex flex-wrap justify-center gap-2">
          <span>Eco Friendly Turf</span>
          <span className="text-secondary">FAQs</span>
        </h1>
        <div className="flex flex-col w-full border border-white/10 rounded-md overflow-hidden divide-y divide-white/10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#102e19] hover:bg-[#13351f] transition-colors"
            >
              <button
                className="w-full flex justify-between items-center p-4 md:p-6 cursor-pointer text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h2
                  className={`text-lg md:text-xl lg:text-2xl font-primary ${
                    index % 2 === 0 ? "text-white" : "text-secondary"
                  }`}
                >
                  {faq.q}
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
                <p className="p-4 md:p-6 pt-2 md:pt-3 text-base md:text-lg text-white bg-[#0a2412]">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EcoFriendly;
