import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Footer } from "../footer";
import WhatsAppButton from "../WhatsappButton";

const UShapeTurf: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const maintenanceServices = [
    {
      title: "Routine Turf Brushing",
      desc: "Maintain the U Shape Turf’s structure and consistency with regular brushing services.",
    },
    {
      title: "Infill Balancing",
      desc: "Keep performance consistent with professional infill rebalancing and topping up.",
    },
    {
      title: "Tear & Seam Repair",
      desc: "Fix any seams, edges, or worn-out patches to ensure long-lasting durability.",
    },
    {
      title: "Deep Cleaning & Sanitization",
      desc: "Eco-friendly turf sanitization for hygienic and safe sporting environments.",
    },
  ];

  return (
    <div className="bg-[#0a1a0a] text-white font-secondary">
      <WhatsAppButton />
      <Helmet>
        <title>U Shape Turf | GameOn Solution</title>
        <meta
          name="description"
          content="Premium U Shape Turf by GameOn Solution - specialized design for indoor and outdoor training arenas, batting cages, and multi-sport facilities in South India."
        />
        <link
          rel="canonical"
          href="https://gameonsolution.in/products/u-shape-turf"
        />
      </Helmet>

      {/* ✅ HERO */}
      <div className="relative h-[75vh] flex items-center justify-center">
        <img
          src="/Ushape/UST.webp"
          alt="U Shape Turf - Premium"
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
            U Shape Turf
          </h1>
          <p className="text-gray-200 max-w-3xl mx-auto text-xl md:text-2xl font-medium">
            <span className="text-green-400 font-bold">U Shape Turf</span> – a{" "}
            <span className="text-green-300 font-bold">
              specialized turf layout
            </span>{" "}
            perfect for{" "}
            <span className="text-green-300 font-bold">
              batting cages, training grounds, and indoor/outdoor arenas
            </span>
            . Built for durability, playability, and eco-friendly performance.
          </p>
        </motion.div>
      </div>

      {/* ✅ INTRO SECTION */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.img
          src="/Ushape/UST1.webp"
          alt="U Shape Turf Grass"
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
            Why Choose U Shape Turf?
          </h2>
          <p className="text-gray-200 text-lg">
            <strong>U Shape Turf</strong> by GameOn Solution is designed for
            unique venues that need enclosed or semi-enclosed turf setups. Ideal
            for <strong>batting cages, training academies, futsal courts</strong>
            , and compact multipurpose play areas.
          </p>
          <p className="text-gray-200 text-lg">
            Its specialized layout ensures{" "}
            <strong>better ball rebound, safe side boundaries, and enhanced
            training focus</strong>. With eco-friendly infills and durable
            fibers, it is a modern turf built to last.
          </p>
          <ul className="list-disc list-inside text-gray-200 space-y-3 text-lg">
            <li>Specialized U-shaped design for targeted play areas</li>
            <li>Enhanced boundary safety with cushioned turf edges</li>
            <li>Perfect for batting cages, futsal, and indoor arenas</li>
            <li>Durable, low-maintenance, and eco-friendly</li>
          </ul>
          <button className="mt-6 px-8 py-3 bg-green-400 text-black rounded-lg font-medium hover:bg-green-300 transition">
            <a href="https://wa.me/919615737373">Get a Free Quote</a>
          </button>
        </motion.div>
      </div>

      {/* ✅ U SHAPE TURF SECTION */}
      <div className="py-20 bg-[#102010] text-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-primary text-green-400 uppercase text-center">
            U Shape Turf Specifications
          </h2>
          <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto">
            The <strong>U Shape Turf</strong> is engineered for compact, enclosed
            installations where safety and precision matter. With high-density
            fibers and advanced drainage, it delivers consistent play throughout
            the year.
          </p>

          <div className="bg-green-900/20 border border-green-600 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-4">
                Turf Specifications
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                <li>
                  <strong>Pile Height:</strong> 32mm
                </li>
                <li>
                  <strong>Gauge:</strong> 3/8 inch
                </li>
                <li>
                  <strong>Stitch Rate:</strong> 19 st / 10 cm
                </li>
                <li>
                  <strong>Density:</strong> 17,500
                </li>
                <li>
                  <strong>Backing:</strong> 3 Layers (PP + Mesh + PU)
                </li>
                <li>
                  <strong>Warranty:</strong> 6 Years Manufacturer Warranty
                </li>
                <li>
                  <strong>Certification:</strong> Training Arena Certified
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-400 mb-4">
                Turf Infill
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                <li>
                  <strong>Type:</strong> Silica Sand + Optional Organic Infill
                </li>
                <li>
                  <strong>Grain Size:</strong> 0.4 - 0.9mm
                </li>
                <li>
                  <strong>Quantity:</strong> 500g per sqft ±20%
                </li>
                <li>✅ Safe for Indoor & Outdoor Use</li>
                <li>✅ Eco-Friendly and Non-Toxic</li>
                <li>✅ Reduced Heat Build-Up</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-950/30 rounded-xl p-6 text-center text-gray-200 text-lg">
            <span className="text-green-400 font-bold">U Shape Turf</span> – the
            perfect choice for training centers, futsal arenas, and compact play
            fields in South India, ensuring durability, safety, and professional
            quality.
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
          U Shape Turf Gallery
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          {[
            { src: "/Ushape/UST.webp", alt: "U Shape Turf Project 1" },
            { src: "/Ushape/UST4.webp", alt: "U Shape Turf Project 2" },
            { src: "/Ushape/UST7.webp", alt: "U Shape Turf Project 3" },
            { src: "/Ushape/UST6.webp", alt: "U Shape Turf Project 4" },
            { src: "/Ushape/UST8.webp", alt: "U Shape Turf Project 5" },
            { src: "/Ushape/UST1.webp", alt: "U Shape Turf Project 6" },
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
          <span>U Shape Turf</span>
          <span className="text-green-400">FAQs</span>
        </h1>

        <div className="flex flex-col w-full border border-white/10 rounded-md overflow-hidden divide-y divide-white/10">
          {[
            {
              q: "What is U Shape Turf best for?",
              a: "U Shape Turf is best suited for batting cages, futsal courts, compact sports arenas, and training zones needing enclosed turf boundaries.",
            },
            {
              q: "How long does U Shape Turf last?",
              a: "On average, U Shape Turf lasts 6-8 years with proper upkeep and maintenance.",
            },
            {
              q: "Is U Shape Turf eco-friendly?",
              a: "Yes, it uses eco-friendly and recyclable materials with organic infill options, ensuring sustainability.",
            },
            {
              q: "Does U Shape Turf require a lot of maintenance?",
              a: "No. It only requires periodic brushing, infill checks, and surface cleaning to keep it in great shape.",
            },
            {
              q: "Can U Shape Turf withstand South Indian weather?",
              a: "Yes, it is UV-stable, heat-resistant, and has efficient drainage for both summer heat and heavy rainfall.",
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

export default UShapeTurf;
