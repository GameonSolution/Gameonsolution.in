import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Footer } from "../footer";
import WhatsAppButton from "../WhatsappButton";

const SemiCircleTurf: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const maintenanceServices = [
    {
      title: "Routine Turf Brushing",
      desc: "Keep fibers upright and uniform with scheduled brushing for Semi Circle Turf.",
    },
    {
      title: "Infill Rebalancing",
      desc: "Maintain even surface levels with professional infill distribution and balancing.",
    },
    {
      title: "Repair & Fiber Fix",
      desc: "Address wear-and-tear quickly with professional seam repair and patch fixes.",
    },
    {
      title: "Surface Sanitization",
      desc: "Eco-friendly cleaning to remove bacteria, ensuring a safe and hygienic play area.",
    },
  ];

  return (
    <div className="bg-[#0a1a0a] text-white font-secondary">
      <WhatsAppButton />
      <Helmet>
        <title>Semi Circle Turf | GameOn Solution</title>
        <meta
          name="description"
          content="Semi Circle Turf by GameOn Solution – perfect for training zones, compact play areas, and multipurpose grounds with high durability and eco-friendly performance."
        />
        <link
          rel="canonical"
          href="https://gameonsolution.in/products/semi-circle-turf"
        />
      </Helmet>

      {/* ✅ HERO */}
      <div className="relative h-[75vh] flex items-center justify-center">
        <img
          src="/semicircle/1.webp"
          alt="Semi Circle Turf - Premium"
          className="absolute w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-green-900/30 to-black/80" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10 px-6"
        >
          <h1 className="text-5xl md:text-7xl bg-gradient-to-r from-green-400 to-lime-500 bg-clip-text text-transparent font-primary mb-4 uppercase">
            Semi Circle Turf
          </h1>
          <p className="text-gray-200 max-w-3xl mx-auto text-xl md:text-2xl font-medium">
            <span className="text-green-400 font-bold">Semi Circle Turf</span>{" "}
            – designed for{" "}
            <span className="text-green-300 font-bold">training grounds</span>,{" "}
            compact sports arenas, and{" "}
            <span className="text-green-300 font-bold">
              community-based play areas
            </span>{" "}
            where space, safety, and performance matter.
          </p>
        </motion.div>
      </div>

      {/* ✅ INTRO SECTION */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.img
          src="/semicircle/2.webp"
          alt="Semi Circle Turf Grass"
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
          <h2 className="text-3xl md:text-4xl font-bold text-green-400">
            Why Semi Circle Turf?
          </h2>
          <p className="text-gray-200 text-lg">
            <strong>Semi Circle Turf</strong> by GameOn Solution is crafted for
            smaller, specialized zones that require top-notch playability in
            compact dimensions. It’s a versatile choice for{" "}
            <strong>practice areas, coaching centers, and compact multipurpose
            grounds</strong>.
          </p>
          <p className="text-gray-200 text-lg">
            With enhanced fiber density and specialized layout, it provides
            excellent ball control and safety for players, even in limited
            spaces.
          </p>
          <ul className="list-disc list-inside text-gray-200 space-y-3 text-lg">
            <li>Compact design optimized for space-limited areas</li>
            <li>High-performance fibers for training & drills</li>
            <li>Safe, eco-friendly surface ideal for schools & clubs</li>
            <li>Durable construction for high footfall areas</li>
          </ul>
          <button className="mt-6 px-8 py-3 bg-green-400 text-black rounded-lg font-medium hover:bg-green-300 transition">
            <a href="https://wa.me/919615737373">Get a Free Quote</a>
          </button>
        </motion.div>
      </div>

      {/* ✅ SEMI CIRCLE TURF SECTION */}
      <div className="py-20 bg-[#102010] text-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-primary text-green-400 uppercase text-center">
            Semi Circle Turf Specifications
          </h2>
          <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto">
            <strong>Semi Circle Turf</strong> is specially designed for compact
            sports fields, training zones, and recreation areas. Built with
            durable, eco-friendly materials, it ensures safety, performance, and
            style without compromise.
          </p>

          <div className="bg-green-900/20 border border-green-600 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-4">
                Turf Specifications
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                <li>
                  <strong>Pile Height:</strong> 35mm
                </li>
                <li>
                  <strong>Gauge:</strong> 3/8 inch
                </li>
                <li>
                  <strong>Stitch Rate:</strong> 20 st / 10 cm
                </li>
                <li>
                  <strong>Density:</strong> 18,500
                </li>
                <li>
                  <strong>Backing:</strong> 3 Layers (PP + Mesh + Latex)
                </li>
                <li>
                  <strong>Warranty:</strong> 6 Years Manufacturer Warranty
                </li>
                <li>
                  <strong>Certification:</strong> International Play Certified
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-400 mb-4">
                Turf Infill
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                <li>
                  <strong>Type:</strong> Silica Sand + Organic Infill
                </li>
                <li>
                  <strong>Grain Size:</strong> 0.4 - 0.8mm
                </li>
                <li>
                  <strong>Quantity:</strong> 450g per sqft ±20%
                </li>
                <li>✅ Cooler Surface Temperature</li>
                <li>✅ Non-Toxic & Eco-Friendly</li>
                <li>✅ Suitable for Compact Grounds</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-950/30 rounded-xl p-6 text-center text-gray-200 text-lg">
            <span className="text-green-400 font-bold">Semi Circle Turf</span>{" "}
            – ideal for compact training grounds, schools, and urban recreation
            spaces, offering professional play quality in smaller dimensions.
          </div>
        </div>
      </div>

      {/* ✅ MAINTENANCE SERVICES */}
      <div className="py-20 bg-[#0a1a0a]">
        <h2 className="text-center text-3xl md:text-4xl font-primary uppercase mb-12 text-green-400">
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
              className="bg-[#153015] border border-green-600 rounded-xl p-6 text-center hover:border-green-400 transition"
            >
              <h3 className="text-xl font-bold text-green-400 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ GALLERY */}
      <div className="py-20 bg-[#102010]">
        <h2 className="text-center text-3xl md:text-4xl font-primary uppercase mb-12 text-green-400">
          Semi Circle Turf Gallery
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          {[
            { src: "/semicircle/3.webp", alt: "Semi Circle Turf Project 1" },
            { src: "/semicircle/4.webp", alt: "Semi Circle Turf Project 2" },
            { src: "/semicircle/5.webp", alt: "Semi Circle Turf Project 3" },
            { src: "/semicircle/6.webp", alt: "Semi Circle Turf Project 4" },
            { src: "/semicircle/7.webp", alt: "Semi Circle Turf Project 5" },
            { src: "/semicircle/8.webp", alt: "Semi Circle Turf Project 6" },
          ].map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl shadow-xl border border-green-600/50"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-green-900/30 to-transparent opacity-70 group-hover:opacity-90 transition" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ FAQ */}
      <div className="py-20 max-w-6xl mx-auto px-6 text-center flex flex-col gap-10">
        <p className="text-[12px] font-secondary uppercase tracking-[1px] text-white">
          FAQs
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white uppercase leading-tight flex flex-wrap justify-center gap-2">
          <span>Semi Circle Turf</span>
          <span className="text-green-400">FAQs</span>
        </h1>

        <div className="flex flex-col w-full border border-white/10 rounded-md overflow-hidden divide-y divide-white/10">
          {[
            {
              q: "What is Semi Circle Turf best suited for?",
              a: "Semi Circle Turf is perfect for compact training areas, schools, coaching centers, and multipurpose community play zones.",
            },
            {
              q: "How long will Semi Circle Turf last?",
              a: "Semi Circle Turf lasts 6-8 years with regular maintenance, retaining its premium quality and playability.",
            },
            {
              q: "Is Semi Circle Turf eco-friendly?",
              a: "Yes, it uses non-toxic, recyclable materials with organic infill options, ensuring safety and sustainability.",
            },
            {
              q: "Does Semi Circle Turf require special care?",
              a: "It requires only minimal care like brushing, infill leveling, and occasional deep cleaning, making it very low-maintenance.",
            },
            {
              q: "Can Semi Circle Turf handle South Indian weather?",
              a: "Absolutely! It is UV-resistant, heat-reducing, and drains efficiently during heavy rainfall.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-[#153015] hover:bg-[#1a3a1a] transition-colors"
            >
              <button
                className="w-full flex justify-between items-center p-4 md:p-6 cursor-pointer text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h2
                  className={`text-lg md:text-xl lg:text-2xl font-primary ${
                    index % 2 === 0 ? "text-white" : "text-green-400"
                  }`}
                >
                  {faq.q}
                </h2>
                <span className="text-green-400 ml-4">
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
                <p className="p-4 md:p-6 pt-2 md:pt-3 text-base md:text-lg text-white bg-[#0a1a0a]">
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

export default SemiCircleTurf;
