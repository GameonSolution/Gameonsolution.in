import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import WhatsAppButton from "../WhatsappButton";
import {
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaReddit,
  FaMedium,
  FaLinkedin,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdCall, MdEmail, MdLocationPin } from "react-icons/md";

const SkatingRink: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    if (path.startsWith("#")) {
      if (location.pathname !== "/") {
        // If not on the home page, navigate to it first
        navigate("/", { replace: true });
        setTimeout(() => {
          const section = document.querySelector(path);
          if (section) section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        // Scroll directly if already on the home page
        const section = document.querySelector(path);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // External route navigation
      navigate(path);
    }
  };

  return (
    <div className="bg-[#0b0a0f] text-white font-secondary">
      <WhatsAppButton />
      <Helmet>
        <title>World-Class Skating Rink Construction | GameOn Solution</title>
        <meta
          name="description"
          content="GameOn Solution builds premium skating rinks across South India – indoor & outdoor rinks, safe surfaces, and world-class design for schools, clubs, and professional arenas."
        />
        <link
          rel="canonical"
          href="https://gameonsolution.in/products/skating-rink"
        />
      </Helmet>

      {/* ✅ HERO */}
      <div className="relative h-[75vh] flex items-center justify-center">
        <img
          src="/skating/S2.webp"
          alt="Skating Rink - Premium"
          className="absolute w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#3a0d4d]/40 to-black/80" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10 px-6"
        >
          <h1 className="text-5xl md:text-7xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-primary mb-4 uppercase">
            Skating Rink
          </h1>
          <p className="text-gray-200 max-w-3xl mx-auto text-xl md:text-2xl font-medium">
            <span className="text-purple-400 font-bold">
              GameOn Skating Rinks
            </span>{" "}
            – world-class indoor & outdoor rinks designed for{" "}
            <span className="text-pink-400 font-bold">
              schools, clubs, and professional competitions
            </span>
            , with advanced materials and international safety standards.
          </p>
        </motion.div>
      </div>

      {/* ✅ INTRO SECTION */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.img
          src="/skating/S.webp"
          alt="Skating Rink Construction"
          className="rounded-2xl shadow-xl w-full h-full object-cover"
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
          <h2 className="text-3xl md:text-4xl font-bold text-purple-400">
            Premium Skating Rink Builders
          </h2>
          <p className="text-gray-300 text-lg">
            At <strong>GameOn Solution</strong>, we construct{" "}
            <strong>synthetic and concrete skating rinks</strong> with smooth,
            durable, and friction-controlled surfaces. Designed for{" "}
            <strong>
              roller skating, inline skating, and competitive skating
            </strong>
            , our rinks combine world-class performance with{" "}
            <strong>international safety standards</strong>.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg">
            <li>Indoor & outdoor skating rinks</li>
            <li>Friction-controlled surface for speed & safety</li>
            <li>UV-stable coating for South Indian climate</li>
            <li>Ideal for kids, schools, clubs & competitions</li>
          </ul>
          <button className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-400 to-pink-500 text-black rounded-lg font-medium hover:from-purple-300 hover:to-pink-400 transition">
            <a href="https://wa.me/919615737373">Get a Free Quote</a>
          </button>
        </motion.div>
      </div>

      {/* ✅ SPECIFICATIONS */}
      <div className="py-20 bg-[#140c1f] text-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-primary text-purple-400 uppercase text-center">
            Skating Rink Features
          </h2>
          <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto">
            Our <strong>Skating Rinks</strong> are built with{" "}
            <strong>world-class construction techniques</strong> and{" "}
            <strong>safety-first design</strong>, perfect for both beginners and
            professional athletes.
          </p>

          <div className="bg-[#2a1237] border border-purple-600 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">
                Construction Standards
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                <li>
                  <strong>Surface Type:</strong> Synthetic PU / Concrete Finish
                </li>
                <li>
                  <strong>Rink Size:</strong> Customizable indoor & outdoor
                  layouts
                </li>
                <li>
                  <strong>Banking:</strong> Available (for speed rinks)
                </li>
                <li>
                  <strong>Drainage:</strong> Advanced all-weather system
                </li>
                <li>
                  <strong>Certification:</strong> RSFI / International Standards
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">
                Key Advantages
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                <li>✅ Indoor & outdoor rink options</li>
                <li>✅ Safe for both kids & professionals</li>
                <li>✅ Weather-resistant & UV stable</li>
                <li>✅ Long-lasting with minimal maintenance</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#1f1427] rounded-xl p-6 text-center text-gray-200 text-lg">
            <span className="text-pink-400 font-bold">
              GameOn Skating Rinks
            </span>{" "}
            – perfect for training academies, schools, recreational clubs, and
            international-level competitions.
          </div>
        </div>
      </div>

      {/* ✅ GALLERY */}
      <div className="py-20 bg-[#0b0a0f]">
        <h2 className="text-center text-3xl md:text-4xl font-primary uppercase mb-12 text-purple-400">
          Skating Rink Gallery
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          {[
            { src: "/skating/S3.webp", alt: "Skating Rink Project 1" },
            { src: "/skating/S4.webp", alt: "Skating Rink Project 2" },
            { src: "/skating/S5.webp", alt: "Skating Rink Project 3" },
            { src: "/skating/S7.webp", alt: "Skating Rink Project 4" },
            { src: "/skating/S.webp", alt: "Skating Rink Project 5" },
            { src: "/skating/S2.webp", alt: "Skating Rink Project 6" },
          ].map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl shadow-xl border border-purple-600/50"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-[#2a1237]/40 to-transparent opacity-70 group-hover:opacity-90 transition" />
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
          <span>Skating Rink</span>
          <span className="text-purple-400">FAQs</span>
        </h1>

        <div className="flex flex-col w-full border border-white/10 rounded-md overflow-hidden divide-y divide-white/10">
          {[
            {
              q: "What types of Skating Rinks do you build?",
              a: "We build both indoor and outdoor skating rinks with synthetic PU or concrete surfaces, suitable for roller and inline skating.",
            },
            {
              q: "Are your rinks safe for kids?",
              a: "Yes. All GameOn skating rinks are designed with international safety standards, shock-absorbing layers, and non-toxic materials.",
            },
            {
              q: "How long does a Skating Rink last?",
              a: "Our skating rinks are built for durability and can last over 10 years with proper care and minimal maintenance.",
            },
            {
              q: "Can you customize rink dimensions?",
              a: "Yes, we design rinks as per RSFI guidelines or specific client requirements for schools, clubs, or competitions.",
            },
            {
              q: "Do you provide skating rink construction across South India?",
              a: "Absolutely. We provide turnkey skating rink construction services in Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, and Telangana.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-[#1a0f1f] hover:bg-[#2a1237] transition-colors"
            >
              <button
                className="w-full flex justify-between items-center p-4 md:p-6 cursor-pointer text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h2
                  className={`text-lg md:text-xl lg:text-2xl font-primary ${
                    index % 2 === 0 ? "text-white" : "text-purple-400"
                  }`}
                >
                  {faq.q}
                </h2>
                <span className="text-pink-400 ml-4">
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
                <p className="p-4 md:p-6 pt-2 md:pt-3 text-base md:text-lg text-white bg-[#0b0a0f]">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      {/* ✅ FOOTER - SKATING RINK THEME */}
      <div className="flex flex-col gap-3 px-8 lg:px-28 py-16 lg:py-28 h-full w-full bg-[#1a0f1f] text-white">
        <div className="w-full flex flex-col border-t border-b border-purple-300/20 py-10 px-0 lg:px-1 h-full gap-10">
          <div className="w-full flex flex-col lg:flex-row gap-10">
            {/* Navigation */}
            <div className="flex flex-col lg:items-center lg:flex-row lg:w-[50%] w-full text-[12px] gap-5 lg:gap-10 font-secondary uppercase">
              <p
                onClick={() => handleNavClick("#home")}
                className="hover:cursor-pointer hover:text-purple-400"
              >
                Home
              </p>
              <p
                onClick={() => handleNavClick("#aboutUs")}
                className="hover:cursor-pointer hover:text-purple-400"
              >
                About
              </p>
              <p
                onClick={() => handleNavClick("#services")}
                className="hover:cursor-pointer hover:text-purple-400"
              >
                Services
              </p>
              <p
                onClick={() => handleNavClick("#contact")}
                className="hover:cursor-pointer hover:text-purple-400"
              >
                Contact
              </p>
            </div>

            {/* Socials */}
            <div className="flex lg:w-[50%] w-full text-[12px] gap-8 font-secondary lg:justify-end">
              {[
                {
                  href: "https://www.instagram.com/gameonsolution_southindia/",
                  icon: <FaInstagram />,
                  label: "Instagram",
                },
                {
                  href: "https://youtube.com/@gameonsolutionoffi?si=U3jRSjQ_TscHG2ry",
                  icon: <FaYoutube />,
                  label: "YouTube",
                },
                {
                  href: "https://wa.me/919615737373",
                  icon: <FaWhatsapp />,
                  label: "WhatsApp",
                },
                {
                  href: "https://medium.com/@gameon.solution.317",
                  icon: <FaMedium />,
                  label: "Medium",
                },
                {
                  href: "https://www.reddit.com/user/Dangerous_Aerie_8168/",
                  icon: <FaReddit />,
                  label: "Reddit",
                },
                {
                  href: "https://www.linkedin.com/company/gameon-solution/",
                  icon: <FaLinkedin />,
                  label: "LinkedIn",
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border p-2 border-purple-300/20 flex justify-center hover:bg-purple-500/10 hover:text-purple-400"
                  aria-label={`Visit our ${s.label}`}
                >
                  {s.icon}
                  <span className="sr-only">{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="w-full flex justify-center bg-purple-400/10 px-5 py-5 rounded-lg">
            <div className="flex flex-col lg:flex-row gap-10 lg:justify-around w-full">
              {/* Call */}
              <div className="flex flex-col justify-center w-full lg:w-[30%] items-center gap-2">
                <MdCall className="text-2xl text-purple-400 opacity-80" />
                <div className="flex flex-col gap-3 justify-center items-center">
                  <p className="font-primary uppercase text-xl md:text-2xl text-purple-400">
                    Call
                  </p>
                  <p className="flex tracking-[1.5px] justify-center items-center gap-1 font-secondary uppercase text-xs font-medium text-gray-200">
                    <span className="flex justify-center items-center gap-1.5">
                      <span className="tracking-[1.5px]">+91 9615737373</span>
                      <span>(or)</span>
                      <span className="tracking-[1.5px]">+91 9859873873</span>
                    </span>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col justify-center w-full lg:w-[30%] items-center gap-2">
                <MdEmail className="text-2xl text-purple-400 opacity-80" />
                <div className="flex flex-col gap-3 justify-center items-center">
                  <p className="font-primary uppercase text-xl md:text-2xl text-purple-400">
                    Write
                  </p>
                  <a
                    href="mailto:gameonsolutionoff@gmail.com"
                    className="text-xs font-medium text-gray-200 hover:text-purple-400"
                  >
                    gameonsolutionoff@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex flex-col justify-center w-full lg:w-[30%] items-center gap-2">
                <MdLocationPin className="text-2xl text-purple-400 opacity-80" />
                <div className="flex flex-col gap-3 justify-center items-center">
                  <p className="font-primary uppercase text-2xl text-purple-400">
                    Visit
                  </p>
                  <p className="font-secondary tracking-[1.5px] text-center text-xs font-medium text-gray-200">
                    Hanifa Nagar, NGO Colony, Dindigul, Tamil Nadu 624005
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex">
          <p>©2025. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default SkatingRink;
