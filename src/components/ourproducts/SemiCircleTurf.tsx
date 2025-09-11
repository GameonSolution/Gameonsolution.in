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
    <div className="min-h-screen bg-gradient-to-b from-[#07160e] via-[#0a2414] to-[#071614] text-white font-secondary">
      <WhatsAppButton />
      <Helmet>
        <title>Semi Circle Turf | GameOn Solution</title>
        <meta
          name="description"
          content="Semi Circle Turf by GameOn Solution - perfect for training zones, compact play areas, and multipurpose grounds with high durability and eco-friendly performance."
        />
        <link
          rel="canonical"
          href="https://gameonsolution.in/products/semi-circle-turf"
        />
      </Helmet>

      {/* HERO */}
      <div className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <img
          src="/semicircle/1.webp"
          alt="Semi Circle Turf - Premium"
          className="absolute inset-0 w-full h-full object-cover opacity-30 filter saturate-90"
        />
        {/* subtle glass vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-primary tracking-tight uppercase">
            <span className="bg-gradient-to-r from-[#94f0b6] to-[#d4af37] bg-clip-text text-transparent">
              Semi Circle Turf
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-[#d8eede]/90 max-w-3xl mx-auto leading-relaxed">
            <span className="text-[#94f0b6] font-semibold">Semi Circle Turf</span>{" "}
            — engineered for compact training zones, urban playgrounds and premium
            coaching arenas. Performance, safety and luxury — in limited space.
          </p>
        </motion.div>
      </div>

      {/* INTRO */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl shadow-2xl"
        >
          <img
            src="/semicircle/2.webp"
            alt="Semi Circle Turf Grass"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#bfeac6]">
            Why Semi Circle Turf?
          </h2>

          <p className="text-[#d8eede]/90 text-lg">
            <strong>Semi Circle Turf</strong> by GameOn Solution is tailored for
            high-performance play in compact spaces. It combines dense, premium
            fibers and engineered infill to deliver excellent ball control,
            reduced surface temperature and long-term resilience.
          </p>

          <ul className="list-disc list-inside space-y-2 text-[#d8eede]/85 text-lg">
            <li>Optimized for small / semi-circular training zones</li>
            <li>High-performance yarns for consistent ball behaviour</li>
            <li>Non-toxic, recyclable materials for safer play</li>
            <li>Durable construction built for heavy footfall</li>
          </ul>

          <a
            href="https://wa.me/919615737373"
            className="inline-block mt-4 px-8 py-3 rounded-full font-medium shadow-md transition-all bg-gradient-to-r from-[#9ef3b8] to-[#d4af37] text-black"
          >
            Get a Free Quote
          </a>
        </motion.div>
      </div>

      {/* SPECIFICATIONS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-primary text-[#bfeac6] uppercase">
              Semi Circle Turf Specifications
            </h3>
            <p className="mt-3 text-[#d8eede]/90 max-w-3xl mx-auto">
              Built for compact fields and high-usage training facilities with a
              focus on safety, cooling and consistent play.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-black/30 border border-[#143019] shadow-lg">
              <h4 className="text-lg font-semibold text-[#d4af37] mb-4">Turf Specs</h4>
              <ul className="text-[#d8eede]/85 space-y-2">
                <li><strong>Pile Height:</strong> 35mm</li>
                <li><strong>Gauge:</strong> 3/8"</li>
                <li><strong>Stitch Rate:</strong> 20 st / 10 cm</li>
                <li><strong>Density:</strong> 18,500</li>
                <li><strong>Backing:</strong> 3 Layers (PP + Mesh + Latex)</li>
                <li><strong>Warranty:</strong> 6 Years</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-black/30 border border-[#143019] shadow-lg">
              <h4 className="text-lg font-semibold text-[#d4af37] mb-4">Infill & Performance</h4>
              <ul className="text-[#d8eede]/85 space-y-2">
                <li><strong>Infill:</strong> Silica Sand + Organic Infill</li>
                <li><strong>Grain Size:</strong> 0.4 - 0.8mm</li>
                <li><strong>Quantity:</strong> 450g / sqft ±20%</li>
                <li>Cool surface technology — lower heat build-up</li>
                <li>Non-toxic, recyclable, athlete-safe</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-black/40 to-[#042113] text-center border border-[#153b24]">
            <p className="text-[#d8eede]/90 text-lg">
              <span className="text-[#9ef3b8] font-semibold">Semi Circle Turf</span>{" "}
              delivers pro-level quality in small footprints — perfect for urban
              academies, rooftop practice areas and compact community grounds.
            </p>
          </div>
        </div>
      </section>

      {/* MAINTENANCE */}
      <section className="py-16 bg-black/10">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-center text-2xl md:text-3xl font-primary text-[#bfeac6] mb-8">
            Turf Maintenance Services
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {maintenanceServices.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-gradient-to-b from-black/20 to-[#072414] border border-[#153b24] shadow-lg hover:translate-y-[-4px] transition-transform"
              >
                <h4 className="text-lg font-semibold text-[#d4af37] mb-2">{s.title}</h4>
                <p className="text-[#d8eede]/85 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-center text-2xl md:text-3xl font-primary text-[#bfeac6] mb-8">
            Semi Circle Turf Gallery
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { src: "/semicircle/1.webp", alt: "Semi Circle Turf Project 1" },
              { src: "/semicircle/2.webp", alt: "Semi Circle Turf Project 2" },
              // { src: "/semicircle/5.webp", alt: "Semi Circle Turf Project 3" },
              // { src: "/semicircle/6.webp", alt: "Semi Circle Turf Project 4" },
              // { src: "/semicircle/7.webp", alt: "Semi Circle Turf Project 5" },
              // { src: "/semicircle/8.webp", alt: "Semi Circle Turf Project 6" },
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl border border-[#124225]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-52 md:h-60 object-cover transform transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-wider text-[#cfefd0]">FAQs</p>
            <h2 className="text-2xl md:text-3xl font-primary text-white mt-2">Semi Circle Turf <span className="text-[#bfeac6]">FAQs</span></h2>
          </div>

          <div className="space-y-3 border border-[#0f2b17] rounded-lg overflow-hidden">
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
                className="bg-black/20 hover:bg-black/30 transition-colors"
              >
                <button
                  className="w-full flex justify-between items-center p-5 cursor-pointer text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className={`text-lg md:text-xl ${index % 2 === 0 ? "text-white" : "text-[#bfeac6]"}`}>
                    {faq.q}
                  </h3>
                  <span className="text-[#d4af37] ml-4">
                    {openIndex === index ? <FaMinus size={16} /> : <FaPlus size={16} />}
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="p-5 bg-[#071814] text-[#d8eede]/90">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default SemiCircleTurf;
