import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Footer } from "../footer";
import WhatsAppButton from "../WhatsappButton";

const Turf360: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const maintenanceServices = [
    {
      title: "Regular Turf Cleaning",
      desc: "Keep your 360 Turf fresh and hygienic with our professional cleaning and debris removal service.",
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
    <div className="bg-[#0a1a0a] text-white font-secondary">
      <WhatsAppButton />
      <Helmet>
        <title>360 Turf | GameOn Solution</title>
        <meta
          name="description"
          content="Premium 360 Turf by GameOn Solution - a high-performance, eco-friendly, and durable turf solution for professional and recreational sports spaces."
        />
        <link
          rel="canonical"
          href="https://gameonsolution.in/products/360-turf"
        />
      </Helmet>

      {/* ✅ HERO - GREEN THEMED */}
      <div className="relative h-[75vh] flex items-center justify-center">
        <img
          src="/360/7.webp"
          alt="360 Turf - Premium"
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
            360° Turf
          </h1>
          <p className="text-gray-200 max-w-3xl mx-auto text-xl md:text-2xl font-medium">
            <span className="text-green-400 font-bold">360° Turf</span> – the{" "}
            <span className="text-green-300 font-bold">
              ultimate all-rounder
            </span>{" "}
            for sports and leisure. Premium, eco-friendly, and engineered for
            superior performance, safety, and durability.
          </p>
        </motion.div>
      </div>

      {/* ✅ INTRO SECTION */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.img
          src="/360/2.webp"
          alt="360 Turf Grass"
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
            Introducing 360 Turf
          </h2>
          <p className="text-gray-200 text-lg">
            <strong>360 Turf</strong> by GameOn Solution is an advanced
            all-purpose turf engineered for maximum playability, durability, and
            environmental sustainability. It offers the perfect balance of
            performance and aesthetics, making it ideal for professional arenas,
            schools, clubs, and community spaces.
          </p>
          <p className="text-gray-200 text-lg">
            360 Turf is the ultimate solution for multipurpose fields and
            high-traffic areas. It maintains consistent performance, whether
            used for football, cricket, or recreational sports.
          </p>
          <ul className="list-disc list-inside text-gray-200 space-y-3 text-lg">
            <li>High-density turf for professional-grade play</li>
            <li>Cool fiber technology for hot climates</li>
            <li>Perfect for multi-sport arenas and playgrounds</li>
            <li>Durable and low-maintenance solution</li>
          </ul>
          <button className="mt-6 px-8 py-3 bg-green-400 text-black rounded-lg font-medium hover:bg-green-300 transition">
            <a href="https://wa.me/919615737373">Get a Free Quote</a>
          </button>
        </motion.div>
      </div>

      {/* ✅ 360 TURF SECTION */}
      <div className="py-20 bg-[#102010] text-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-primary text-green-400 uppercase text-center">
            360 Turf Specifications
          </h2>
          <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto">
            The <strong>360 Turf</strong> is built for elite performance with
            enhanced safety and eco-friendly materials. Its premium fibers
            ensure durability, while its drainage and cooling features make it
            perfect for year-round play.
          </p>

          {/* ✅ SPECIFICATIONS */}
          <div className="bg-green-900/20 border border-green-600 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-4">
                Turf Specifications
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                <li>
                  <strong>Pile Height:</strong> 40mm
                </li>
                <li>
                  <strong>Gauge:</strong> 5/8 inch
                </li>
                <li>
                  <strong>Stitch Rate:</strong> 18 st / 10 cm
                </li>
                <li>
                  <strong>Density:</strong> 16,800
                </li>
                <li>
                  <strong>Backing:</strong> 4 Layers (Double PP + Mesh + SBR
                  Latex + PU)
                </li>
                <li>
                  <strong>Warranty:</strong> 8 Years Manufacturer Warranty
                </li>
                <li>
                  <strong>Certification:</strong> FIFA Quality Certified
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-400 mb-4">
                Turf Infill
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                <li>
                  <strong>Type:</strong> Premium Silica Sand + Rubber Granules
                </li>
                <li>
                  <strong>Grain Size:</strong> 0.5 - 2.0mm
                </li>
                <li>
                  <strong>Quantity:</strong> 600g per sqft ±20%
                </li>
                <li>✅ Heat-Resistant & Shock Absorbing</li>
                <li>✅ Eco-Friendly & Non-Toxic</li>
                <li>✅ Long-Lasting Play Surface</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-950/30 rounded-xl p-6 text-center text-gray-200 text-lg">
            <span className="text-green-400 font-bold">360 Turf</span> is the
            complete solution for multi-sport installations, delivering
            unmatched durability, comfort, and all-weather performance.
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

      {/* ✅ GALLERY SECTION */}
      <div className="py-20 bg-[#102010]">
        <h2 className="text-center text-3xl md:text-4xl font-primary uppercase mb-12 text-green-400">
          360 Turf Gallery
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          {[
            { src: "/360/6.webp", alt: "360 Turf Project 1" },
            { src: "/360/8.webp", alt: "360 Turf Project 2" },
            { src: "/360/7.webp", alt: "360 Turf Project 3" },
            { src: "/360/4.webp", alt: "360 Turf Project 4" },
            { src: "/360/3.webp", alt: "360 Turf Project 5" },
            { src: "/360/5.webp", alt: "360 Turf Project 6" },
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
              {/* <div className="absolute bottom-4 left-4 text-green-400 text-lg font-bold drop-shadow-lg">
                {img.alt}
              </div> */}
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
          <span>360 Turf</span>
          <span className="text-green-400">FAQs</span>
        </h1>

        <div className="flex flex-col w-full border border-white/10 rounded-md overflow-hidden divide-y divide-white/10">
          {[
            {
              q: "What makes 360 Turf unique?",
              a: "360 Turf is a high-density, multi-purpose sports turf designed for professional play and long-lasting durability. It is eco-friendly, safe, and optimized for all weather conditions.",
            },
            {
              q: "Is 360 Turf safe for kids and pets?",
              a: "Yes, 360 Turf is 100% non-toxic and lead-free, making it safe for children, pets, and heavy community use.",
            },
            {
              q: "How long does 360 Turf last?",
              a: "With proper maintenance, 360 Turf can last 8-10 years while maintaining its performance and color vibrancy.",
            },
            {
              q: "Does 360 Turf require maintenance?",
              a: "It requires minimal maintenance like occasional cleaning, infill leveling, and debris removal to keep it in top condition.",
            },
            {
              q: "Is 360 Turf weather-resistant?",
              a: "Yes, it features UV-resistant fibers, excellent drainage, and heat-reducing infill, making it suitable for all climates.",
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

      {/* ✅ FOOTER */}
      <Footer />
    </div>
  );
};

export default Turf360;
