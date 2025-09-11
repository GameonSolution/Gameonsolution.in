import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Footer } from "../footer";
import WhatsAppButton from "../WhatsappButton";

const DiagonalPitch: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const maintenanceServices = [
    {
      title: "Precision Turf Brushing",
      desc: "Keeps the diagonal pitch fibers upright and smooth, ensuring perfect bounce and play quality.",
    },
    {
      title: "Infill Adjustment",
      desc: "Professional rebalancing of silica sand or organic infill for a uniform diagonal play surface.",
    },
    {
      title: "Pitch Corner Repairs",
      desc: "Seam repair and corner-patch reinforcement for high-stress diagonal pitch areas.",
    },
    {
      title: "Deep Sanitization",
      desc: "Premium eco-cleaning solutions to maintain hygiene and extend the life of the turf.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#04140b] via-[#062116] to-[#04140b] text-white font-secondary">
      <WhatsAppButton />
      <Helmet>
        <title>Diagonal Pitch | GameOn Solution</title>
        <meta
          name="description"
          content="Diagonal Pitch Turf by GameOn Solution - a premium square turf with corner-to-corner cricket pitch design. Perfect for space optimization and multi-sport use."
        />
        <link
          rel="canonical"
          href="https://gameonsolution.in/products/diagonal-pitch"
        />
      </Helmet>

      {/* HERO */}
      <div className="relative h-[75vh] flex items-center justify-center">
        <img
          src="/diagonal/1.webp"
          alt="Diagonal Pitch Turf - Premium"
          className="absolute w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#06311f]/40 to-black/90" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10 px-6"
        >
          <h1 className="text-5xl md:text-7xl bg-gradient-to-r from-emerald-300 to-lime-400 bg-clip-text text-transparent font-primary mb-4 uppercase">
            Diagonal Pitch
          </h1>
          <p className="text-gray-200 max-w-3xl mx-auto text-xl md:text-2xl font-medium leading-relaxed">
            <span className="text-emerald-300 font-bold">Diagonal Pitch</span> —
            the smart turf solution where{" "}
            <span className="text-lime-300 font-bold">square space meets cricket</span>.
            Built corner-to-corner, this premium layout optimizes your ground
            and elevates play for multi-sport use.
          </p>
        </motion.div>
      </div>

      {/* INTRO */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.img
          src="/diagonal/1.webp"
          alt="Diagonal Pitch Grass"
          className="rounded-2xl shadow-2xl w-full h-full object-cover"
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
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-300">
            Why Choose Diagonal Pitch?
          </h2>
          <p className="text-gray-300 text-lg">
            <strong>Diagonal Pitch</strong> from GameOn Solution converts a
            square turf into a corner-to-corner cricket pitch — a clever,
            space-maximising layout that keeps professional-level play intact.
          </p>
          <p className="text-gray-300 text-lg">
            Ideal for schools, urban academies, community grounds and multi-sport
            arenas where maximizing usable area is critical without sacrificing
            playability.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg">
            <li>Maximizes square turf area with diagonal play</li>
            <li>Corner-to-corner cricket pitch — efficient & professional</li>
            <li>Engineered for multi-sport versatility and durability</li>
            <li>Premium, eco-friendly turf and advanced drainage</li>
          </ul>
          <button className="mt-6 px-8 py-3 bg-emerald-300 text-black rounded-lg font-medium hover:bg-emerald-200 transition">
            <a href="https://wa.me/919615737373">Get a Free Quote</a>
          </button>
        </motion.div>
      </div>

      {/* SPECIFICATIONS */}
      <div className="py-20 bg-[#071b12] text-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-primary text-emerald-300 uppercase text-center">
            Diagonal Pitch Specifications
          </h2>
          <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto">
            <strong>Diagonal Pitch Turf</strong> blends innovative layout with
            precise engineering — ideal for cricket and multi-sport play in
            compact square grounds.
          </p>

          <div className="bg-emerald-900/10 border border-emerald-600/30 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-emerald-300 mb-4">
                Turf Specifications
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                <li>
                  <strong>Pile Height:</strong> 38mm
                </li>
                <li>
                  <strong>Gauge:</strong> 3/8 inch
                </li>
                <li>
                  <strong>Stitch Rate:</strong> 18 st / 10 cm
                </li>
                <li>
                  <strong>Density:</strong> 17,500
                </li>
                <li>
                  <strong>Backing:</strong> 4 Layers (PP + Mesh + PU)
                </li>
                <li>
                  <strong>Warranty:</strong> 7 Years Manufacturer Warranty
                </li>
                <li>
                  <strong>Certification:</strong> International Play Certified
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-emerald-300 mb-4">
                Infill & Play Quality
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                <li>
                  <strong>Type:</strong> Premium Silica Sand + Organic Infill
                </li>
                <li>
                  <strong>Surface Bounce:</strong> Calibrated for cricket play
                </li>
                <li>
                  <strong>Drainage:</strong> High-flow diagonal pitch design
                </li>
                <li>✅ Optimized for both cricket & football</li>
                <li>✅ Cooler Surface Temperature</li>
                <li>✅ Non-Toxic & Eco-Friendly</li>
              </ul>
            </div>
          </div>

          <div className="bg-emerald-900/20 rounded-xl p-6 text-center text-gray-200 text-lg">
            <span className="text-emerald-300 font-bold">Diagonal Pitch</span> —
            an elegant, high-performance solution for urban cricket & multi-use fields.
          </div>
        </div>
      </div>

      {/* MAINTENANCE */}
      <div className="py-20 bg-[#04140b]">
        <h2 className="text-center text-3xl md:text-4xl font-primary uppercase mb-12 text-emerald-300">
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
              className="bg-[#0f2a1f] border border-emerald-600/30 rounded-xl p-6 text-center hover:border-emerald-300 transition"
            >
              <h3 className="text-xl font-bold text-emerald-300 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* GALLERY */}
      <div className="py-20 bg-[#071b12]">
        <h2 className="text-center text-3xl md:text-4xl font-primary uppercase mb-12 text-emerald-300">
          Diagonal Pitch Gallery
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          {[
            { src: "/diagonal/1.webp", alt: "Diagonal Pitch Project 1" },
            { src: "/diagonal/2.webp", alt: "Diagonal Pitch Project 2" },
            { src: "/diagonal/3.webp", alt: "Diagonal Pitch Project 3" },
            // { src: "/diagonal/6.webp", alt: "Diagonal Pitch Project 4" },
            // { src: "/diagonal/7.webp", alt: "Diagonal Pitch Project 5" },
            // { src: "/diagonal/8.webp", alt: "Diagonal Pitch Project 6" },
          ].map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl shadow-xl border border-emerald-600/30"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-[#06311f]/20 to-transparent opacity-70 group-hover:opacity-90 transition" />
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
          <span>Diagonal Pitch</span>
          <span className="text-emerald-300">FAQs</span>
        </h1>

        <div className="flex flex-col w-full border border-white/10 rounded-md overflow-hidden divide-y divide-white/10">
          {[
            {
              q: "What is a Diagonal Pitch?",
              a: "A Diagonal Pitch is a square turf with a corner-to-corner cricket pitch layout, maximizing ground usage while offering professional play quality.",
            },
            {
              q: "Why build a Diagonal Pitch?",
              a: "It allows cricket and other sports to be played in the same square ground, optimizing space without compromising on play standards.",
            },
            {
              q: "Is Diagonal Pitch suitable for schools?",
              a: "Yes, it is perfect for schools, academies, and community centers with limited square land parcels.",
            },
            {
              q: "How long will Diagonal Pitch turf last?",
              a: "With GameOn’s premium turf and maintenance, Diagonal Pitch lasts 7-10 years with consistent play quality.",
            },
            {
              q: "Can it handle South Indian weather?",
              a: "Yes, the turf is UV-stable, heat-resistant, and designed with high-flow drainage for monsoon seasons.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-[#0f2a1f] hover:bg-[#123427] transition-colors"
            >
              <button
                className="w-full flex justify-between items-center p-4 md:p-6 cursor-pointer text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h2
                  className={`text-lg md:text-xl lg:text-2xl font-primary ${
                    index % 2 === 0 ? "text-white" : "text-emerald-300"
                  }`}
                >
                  {faq.q}
                </h2>
                <span className="text-emerald-300 ml-4">
                  {openIndex === index ? <FaMinus size={16} /> : <FaPlus size={16} />}
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="p-4 md:p-6 pt-2 md:pt-3 text-base md:text-lg text-white bg-[#04140b]">
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

export default DiagonalPitch;
