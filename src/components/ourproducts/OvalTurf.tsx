import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Footer } from "../footer";
import WhatsAppButton from "../WhatsappButton";
import Certificates from "../products/pageAnimation/certificates";
import Awards from "../Awards";

const OvalTurf: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const maintenanceServices = [
    {
      title: "Regular Turf Grooming",
      desc: "Keep your Oval Turf fresh with professional grooming, brushing, and debris removal.",
    },
    {
      title: "Infill Top-Up & Balancing",
      desc: "Ensure perfect ball bounce and consistent play with periodic infill rebalancing.",
    },
    {
      title: "Pitch & Seam Repairs",
      desc: "Repair any seams, patches, or worn-out areas to extend the turf’s lifespan.",
    },
    {
      title: "Seasonal Deep Cleaning",
      desc: "Eco-friendly sanitization and cleaning services for safe and hygienic play.",
    },
  ];

  return (
    <div className="bg-[#0a1a0a] text-white font-secondary">
      <WhatsAppButton />
      <Helmet>
        <title>Oval Turf | GameOn Solution</title>
        <meta
          name="description"
          content="Premium Oval Turf by GameOn Solution - designed for cricket, athletics, and multi-sport arenas across South India. Durable, eco-friendly, and FIFA/ICC compliant."
        />
        <link
          rel="canonical"
          href="https://gameonsolution.in/products/oval-turf"
        />
      </Helmet>

      {/* ✅ HERO */}
      <div className="relative h-[75vh] flex items-center justify-center">
        <img
          src="/oval/O4.webp"
          alt="Oval Turf - Premium Cricket and Athletics Turf"
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
            Oval Turf
          </h1>
          <p className="text-gray-200 max-w-3xl mx-auto text-xl md:text-2xl font-medium">
            <span className="text-green-400 font-bold">Oval Turf</span> – the{" "}
            <span className="text-green-300 font-bold">
              perfect choice for cricket stadiums, athletics ovals, and
              multi-sport complexes
            </span>
            . Designed for professional performance, eco-friendliness, and
            long-lasting durability.
          </p>
        </motion.div>
      </div>

      {/* ✅ INTRO SECTION */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.img
          src="/oval/O2.webp"
          alt="Oval Turf Grass"
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
            Why Choose Oval Turf?
          </h2>
          <p className="text-gray-200 text-lg">
            GameOn’s <strong>Oval Turf</strong> is purpose-built for{" "}
            <strong>
              cricket grounds, athletic ovals, and multipurpose stadiums
            </strong>
            . With an oval-shaped design, it ensures consistent play across
            large open fields, making it ideal for{" "}
            <strong>
              cricket academies, schools, and professional complexes
            </strong>
            .
          </p>
          <p className="text-gray-200 text-lg">
            Its high-density fibers, cooling technology, and superior drainage
            system guarantee <strong>year-round play</strong>, even in South
            India’s extreme climate conditions.
          </p>
          <ul className="list-disc list-inside text-gray-200 space-y-3 text-lg">
            <li>Oval-shaped design for cricket and athletics</li>
            <li>FIFA & ICC compliant standards</li>
            <li>Perfect for stadiums, schools, and academies</li>
            <li>Long-lasting, low-maintenance, eco-friendly</li>
          </ul>
          <button className="mt-6 px-8 py-3 bg-green-400 text-black rounded-lg font-medium hover:bg-green-300 transition">
            <a href="https://wa.me/919615737373">Get a Free Quote</a>
          </button>
        </motion.div>
      </div>

      <Certificates />

      <Awards />

      {/* ✅ OVAL TURF SPECIFICATIONS */}
      <div className="py-20 bg-[#102010] text-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-primary text-green-400 uppercase text-center">
            Oval Turf Specifications
          </h2>
          <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto">
            The <strong>Oval Turf</strong> is engineered for{" "}
            <strong>professional-level cricket and multi-sport arenas</strong>.
            With elite-grade fibers and shock-absorbing infills, it provides
            world-class performance and comfort for athletes.
          </p>

          <div className="bg-green-900/20 border border-green-600 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-4">
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
                  <strong>Stitch Rate:</strong> 16 st / 10 cm
                </li>
                <li>
                  <strong>Density:</strong> 15,000
                </li>
                <li>
                  <strong>Backing:</strong> 4 Layers (PP + Mesh + SBR Latex +
                  PU)
                </li>
                <li>
                  <strong>Warranty:</strong> 10 Years Manufacturer Warranty
                </li>
                <li>
                  <strong>Certification:</strong> FIFA & ICC Standard Certified
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-400 mb-4">
                Turf Infill
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                <li>
                  <strong>Type:</strong> Silica Sand + Organic Cork Infill
                </li>
                <li>
                  <strong>Grain Size:</strong> 0.6 - 2.0mm
                </li>
                <li>
                  <strong>Quantity:</strong> 650g per sqft ±20%
                </li>
                <li>✅ Shock-Absorbing and UV Resistant</li>
                <li>✅ Eco-Friendly and Non-Toxic</li>
                <li>✅ Perfect for Cricket Ball Bounce</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-950/30 rounded-xl p-6 text-center text-gray-200 text-lg">
            <span className="text-green-400 font-bold">Oval Turf</span> – the
            premier choice for{" "}
            <strong>
              cricket ovals, athletics grounds, and multipurpose stadiums
            </strong>
            , offering unmatched durability and performance.
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
          Oval Turf Gallery
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          {[
            { src: "/oval/O1.webp", alt: "Oval Turf Project 1" },
            { src: "/oval/O4.webp", alt: "Oval Turf Project 2" },
            { src: "/oval/O5.webp", alt: "Oval Turf Project 3" },
            { src: "/oval/O6.webp", alt: "Oval Turf Project 4" },
            { src: "/oval/O7.webp", alt: "Oval Turf Project 5" },
            { src: "/oval/O3.webp", alt: "Oval Turf Project 6" },
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
          <span>Oval Turf</span>
          <span className="text-green-400">FAQs</span>
        </h1>

        <div className="flex flex-col w-full border border-white/10 rounded-md overflow-hidden divide-y divide-white/10">
          {[
            {
              q: "What is Oval Turf best used for?",
              a: "Oval Turf is perfect for cricket grounds, athletics tracks, and multipurpose stadiums where large oval-shaped play areas are required.",
            },
            {
              q: "How long does Oval Turf last?",
              a: "Oval Turf typically lasts 8-10 years with proper maintenance and heavy usage in professional play.",
            },
            {
              q: "Is Oval Turf eco-friendly?",
              a: "Yes, Oval Turf uses recyclable, non-toxic materials and organic infills that are safe for players and the environment.",
            },
            {
              q: "Can Oval Turf handle South Indian climate?",
              a: "Absolutely. It is UV-resistant, heat-tolerant, and has advanced drainage systems to perform well in hot summers and heavy rains.",
            },
            {
              q: "Is Oval Turf certified?",
              a: "Yes, Oval Turf is FIFA & ICC compliant, ensuring international standards for cricket and football play.",
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

export default OvalTurf;
