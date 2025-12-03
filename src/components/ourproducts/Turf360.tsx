import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FaPlus, FaMinus, FaCheckCircle } from "react-icons/fa";
import { Footer } from "../footer";
import WhatsAppButton from "../WhatsappButton";
import Awards from "../Awards";
import Certificates from "../products/pageAnimation/certificates";
import Testimonials from "../testimonial";

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
          src="/360/5.webp"
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

      {/* INTRO SECTION */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.img
          src="/360/6.webp"
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
        </motion.div>
      </div>

      <Testimonials />

      <Certificates />

      <Awards />

      {/* 360 TURF SPECIFICATIONS */}
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

      {/* MAINTENANCE SERVICES */}
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

      {/* GALLERY */}
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

      {/* ===================================== */}
      {/* NEW: Marketing Content Block (Below the FAQs) */}
      {/* ===================================== */}
      <section className="bg-[#0a1a0a] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Intro */}
          <div className="text-center max-w-4xl mx-auto mb-14">
            <h2 className="text-3xl md:text-5xl font-primary text-green-400 uppercase">
              One Turf. Unlimited Possibilities.
            </h2>
            <p className="text-gray-200 mt-4 text-lg md:text-xl">
              At GameOn Solution, we offer the cutting-edge{" "}
              <strong>360° Turf Construction System</strong>, a multi-sports
              turf solution that excels in performance, flexibility, and
              durability.
            </p>
            <p className="text-gray-300 mt-3">
              Engineered with FIFA-approved synthetic grass and advanced base
              layers, this turf ensures perfect grip, comfort, and resilience -
              ideal for all-weather play. We manage everything end-to-end: base
              construction, lighting, and fencing.
            </p>
          </div>

          {/* Service Regions */}
          <div className="bg-[#112511] border border-green-800 rounded-2xl p-6 md:p-8 mb-16">
            <h3 className="text-2xl font-bold text-green-400 mb-3">
              Serving All Over South India
            </h3>
            <p className="text-gray-300">
              We design and install turfs across Tamil Nadu and South India,
              including
              <span className="text-white">
                {" "}
                Chennai, Coimbatore, Madurai, Trichy, Bangalore, Hyderabad,
              </span>{" "}
              and
              <span className="text-white"> Tirupati</span>.
            </p>
            <p className="text-gray-300 mt-2">
              Whether you're a sports academy, school, corporate complex, or
              private developer, we deliver turnkey turf solutions tailored to
              your requirements, location, and budget.
            </p>
          </div>

          {/* Why Choose - Football Turf Project */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-primary text-green-400">
                Why Choose GameOn Solution for Your Football Turf Project?
              </h3>
              <p className="text-gray-300">
                Because we don’t just install turf – we build professionalism.
              </p>
              <ul className="space-y-2 text-gray-200">
                {[
                  "FIFA Quality and FIFA Pro-Approved Artificial Turf Systems",
                  "Eco-Friendly Grass",
                  "Aqua Eco-Friendly Grass",
                  "Laser-Leveled Base & Drainage System",
                  "8+ Years of Expertise in Sports Infrastructure Design",
                  "Long-Term Warranty & Maintenance Support",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <FaCheckCircle className="mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src="/360/8.webp"
              alt="GameOn 360° Turf"
              className="rounded-2xl border border-green-700 shadow-lg w-full h-[400px] object-cover"
            />
          </div>

          {/* Process */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-primary text-green-400 mb-6">
              Our Turf Installation Process
            </h3>
            <p className="text-gray-300 mb-6">
              We follow a proven, data-backed installation process that ensures
              durability, precision, and global-standard quality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Site Evaluation",
                  desc: "Soil and drainage analysis to ensure a solid, level foundation that aligns with FIFA guidelines.",
                },
                {
                  title: "Base Foundation",
                  desc: "Multi-layer engineered base with crushed stone, drainage piping, and laser-level compaction for perfect slope and water flow.",
                },
                {
                  title: "Turf Installation",
                  desc: "FIFA Pro-certified synthetic grass with high-density fibers and UV stabilization - ideal for South India’s climate.",
                },
                {
                  title: "Line Marking & Customization",
                  desc: "Permanent line markings for 5s/7s/11s, boundary walls, fencing, and HighBay LED floodlights as per spec.",
                },
                {
                  title: "Testing & Final Handover",
                  desc: "GameOn Quality Checks: ball roll, shock absorption, and player traction tests before the first match.",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-[#132813] border border-green-800 rounded-2xl p-6"
                >
                  <h4 className="text-xl font-semibold text-green-300 mb-2">
                    {card.title}
                  </h4>
                  <p className="text-gray-300 text-sm md:text-base">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Specs Table */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-primary text-green-400 mb-6">
              Technical Specifications & Design Details
            </h3>
            <div className="overflow-hidden rounded-2xl border border-green-800">
              <table className="w-full text-left text-gray-200">
                <thead className="bg-[#123112]">
                  <tr>
                    <th className="py-3 px-4">Specification</th>
                    <th className="py-3 px-4">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-green-900/60">
                  <tr>
                    <td className="py-3 px-4">Turf Type</td>
                    <td className="py-3 px-4">
                      Multi-sport synthetic grass system with customizable fiber
                      height (35–50mm)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Applications</td>
                    <td className="py-3 px-4">
                      Football • Cricket nets • Volleyball • Badminton • Fitness
                      & recreation areas
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Pile Height</td>
                    <td className="py-3 px-4">40–50 mm (multi-sport)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Infill Material</td>
                    <td className="py-3 px-4">
                      Silica sand + rubber granules for shock absorption & true
                      bounce
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Base Construction</td>
                    <td className="py-3 px-4">
                      Multi-layer aggregate foundation with geotextile membrane
                      & sub-drainage network
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Lighting System</td>
                    <td className="py-3 px-4">
                      200–400 lux LED floodlights • Anti-glare setup for uniform
                      illumination
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Fencing</td>
                    <td className="py-3 px-4">
                      10–15 ft chain-link fencing or nylon mesh with powder
                      coating
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Shock Pad (Optional)</td>
                    <td className="py-3 px-4">
                      10mm underlay for player comfort & injury prevention
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Orientation</td>
                    <td className="py-3 px-4">
                      North–South layout for reduced sunlight glare
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Expected Lifespan</td>
                    <td className="py-3 px-4">8–10 years with routine care</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Warranty</td>
                    <td className="py-3 px-4">
                      Up to 5 years (materials & installation) by GameOn
                      Solution
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Why 360° Turf */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-primary text-green-400 mb-4">
              Why Choose a 360° Turf?
            </h3>
            <p className="text-gray-300 mb-4">
              Unlike single-sport installations, the 360° Turf by GameOn
              Solution offers unmatched multi-utility flexibility, perfect for
              clients who want one surface for various sports.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Play multiple sports on a single surface",
                "Low maintenance and weather-resistant",
                "Ideal for schools, community spaces, and gyms",
                "Increases commercial value for sports centers",
              ].map((b, i) => (
                <div
                  key={i}
                  className="bg-[#132813] border border-green-800 rounded-xl p-4 flex gap-3 items-start"
                >
                  <FaCheckCircle className="mt-1" />
                  <p className="text-gray-200">{b}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-300 mt-4">
              The 360° Turf System provides optimal bounce for football, soft
              cushioning for volleyball, and durability for cricket and fitness
              training - the all-in-one solution for your facility.
            </p>
          </div>

          {/* Step by Step */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-primary text-green-400 mb-6">
              Step-by-Step Construction Process
            </h3>
            <ol className="space-y-4 list-decimal list-inside text-gray-200">
              <li>
                <strong>Site Analysis & Soil Testing –</strong> Thorough
                inspection to assess land slope, drainage, and soil stability.
              </li>
              <li>
                <strong>Base Construction –</strong> Stable multi-layer
                aggregate foundation for durability and performance.
              </li>
              <li>
                <strong>Drainage System Installation –</strong> Sub-drains and
                perforated pipes for effective water management.
              </li>
              <li>
                <strong>Turf Installation & Infill –</strong> Synthetic turf
                with silica sand and rubber granules for shock absorption and
                bounce.
              </li>
              <li>
                <strong>Fencing & Lighting Setup –</strong> Secure fencing and
                LED floodlights for all-conditions usability.
              </li>
              <li>
                <strong>Final Finishing & Quality Testing –</strong>{" "}
                Performance, bounce, and safety testing before handover.
              </li>
            </ol>
          </div>

          {/* Eco-Friendly */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-primary text-green-400 mb-4">
                Eco-Friendly Turf Technology
              </h3>
              <p className="text-gray-300 mb-4">
                We use Eco-Friendly Turf Systems that reduce heat, conserve
                water, and offer a natural grass-like feel without pesticides.
              </p>
              <ul className="space-y-2 text-gray-200">
                {[
                  "Non-toxic, lead-free fibers",
                  "Low water retention for faster drying",
                  "Cooler surface temperature in the sun",
                  "100% recyclable & environmentally friendly",
                  "Designed for all-weather play with minimal maintenance",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <FaCheckCircle className="mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src="/360/3.webp"
              alt="Eco-Friendly Turf"
              className="rounded-2xl border border-green-700 shadow-lg w-full h-full object-cover"
            />
          </div>

          {/* Maintenance & Aftercare */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-primary text-green-400 mb-4">
              Maintenance & Aftercare
            </h3>
            <ul className="space-y-2 text-gray-200">
              {[
                "Regular brushing keeps turf fibers standing tall.",
                "Periodic infill leveling maintains safety and playability.",
                "Professional cleaning every 6–12 months keeps the turf in top condition.",
                "Annual Maintenance Contracts (AMC) available for routine servicing and performance checks.",
              ].map((t, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <FaCheckCircle className="mt-1" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why GameOn */}
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-primary text-green-400 mb-4">
              Why Choose GameOn Solution for 360° Turf Construction?
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-200">
              {[
                "8+ years of experience in sports infrastructure",
                "Certified FIFA-approved materials",
                "Complete project management - from design to installation",
                "Skilled engineers and turf specialists for superior results",
                "Trusted across South India for reliable turf solutions",
              ].map((t, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <FaCheckCircle className="mt-1" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-400 mt-3 text-sm">
              When you choose GameOn Solution, you’re investing in reliability,
              precision engineering, and top-tier finishing.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Turf360;
