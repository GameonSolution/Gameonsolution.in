"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TextHoverAnimation from "@/components/textHoverAnimation";
import TabSEO from "@/components/seoOptimize";
import { seoData } from "@/common/seoTitleDescription";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { FaPlus, FaMinus } from "react-icons/fa";
import WhatsAppButton from "./WhatsappButton";
import AnimatedCard from "./animateCard";
import { useNavigate } from "react-router-dom";

const faqsData = [
  {
    question: "How is the turf installation cost calculated?",
    answer:
      "The total cost is based on ground size (in sq.ft), the selected grass type (Rubber Infilled, Eco Friendly, or Aqua Eco Friendly), and whether the project is indoor or outdoor. Our Turf Calculator uses real-time pricing to provide accurate estimates for turf installation in India.",
  },
  {
    question: "What is the cost per sq.ft for artificial turf in India?",
    answer:
      "Depending on the grass type and environment, turf cost per sq.ft typically ranges from ₹260 to ₹570. Indoor turf is generally cheaper than outdoor turf due to base preparation and drainage considerations.",
  },
  {
    question: "Which type of turf is best for sports grounds?",
    answer:
      "Rubber Infilled turf is great for budget projects, while Eco Friendly turf is ideal for schools and institutions. Aqua Eco Friendly turf is premium, offering heat resistance and water drainage—perfect for long-term, outdoor sports use.",
  },
  {
    question:
      "Is this Turf Calculator suitable for cricket and football turfs?",
    answer:
      "Absolutely. Whether you're building a cricket pitch, football turf, or multi-sport ground, this calculator helps you estimate installation costs instantly based on size and material type.",
  },
  {
    question: "Can I download a PDF report of my turf estimate?",
    answer:
      "Yes, after entering your details and calculating the estimate, you can download a professionally designed PDF breakdown of your turf cost for planning or sharing with stakeholders.",
  },
  {
    question:
      "Does the calculator include civil work or base preparation costs?",
    answer:
      "Currently, the calculator focuses on turf material costs. If you require base work or fencing, contact GameOn Solution for a full-site evaluation and custom quote.",
  },
  {
    question: "Do you offer turf installation services across South India?",
    answer:
      "Yes, GameOn Solution installs turf grounds in Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, and Telangana. We offer end-to-end service from design to completion.",
  },
  {
    question: "Who should use this turf cost calculator?",
    answer:
      "This tool is built for sports entrepreneurs, school or college management, builders, and real estate developers looking to estimate artificial turf installation costs quickly and accurately.",
  },
];

const grassTypes = [
  {
    name: "Rubber Infilled",
    type: "rubber",
    description:
      "A cost-effective option with good shock absorption, commonly used for multi-purpose sports grounds. Ideal for low-maintenance and durability.",
    indoorRange: [260, 280],
    outdoorRange: [460, 480],
  },
  {
    name: "Eco Friendly",
    type: "eco",
    description:
      "Made with recyclable materials, this turf is safe, sustainable, and suited for schools, communities, and eco-conscious institutions.",
    indoorRange: [280, 320],
    outdoorRange: [490, 520],
  },
  {
    name: "Aqua Eco Friendly",
    type: "aqua",
    description:
      "Designed with water-drainage and heat-resistance in mind. A premium pick for long-term projects requiring superior performance and minimal environmental impact.",
    indoorRange: [330, 360],
    outdoorRange: [530, 570],
  },
];
const blogs = [
  {
    id: 1,
    slug: "turf-construction-cost-tamilnadu",
    title: "Turf Construction Cost in Tamil Nadu (2025 Guide)",
    excerpt:
      "Planning to build a turf in Tamil Nadu? Here’s a detailed guide on construction costs, from land preparation to lighting and turf material.",
    image: "/blog/Blog21.webp",
  },
  {
    id: 2,
    slug: "gen-alpha-aqua-eco-friendly-turf-rajapalayam",
    title: "South TN’s First Aqua Eco-Friendly Turf Is Here - GEN ALPHA",
    excerpt:
      "GameOn Solution launches GEN ALPHA in Rajapalayam — South Tamil Nadu's first aqua blue, eco-friendly multi-sport turf. Built for high performance, low maintenance, and future-ready play.",
    image: "/blog/Blog34.webp",
  },
  {
    id: 3,
    slug: "sports-infrastructure-products-gameon-solution",
    title: "What We Build at GameOn Solution - Our Sports Infra Products",
    excerpt:
      "From multi-sport turfs to skating tracks and pickleball courts, GameOn Solution builds world-class sports infrastructure across South India. Explore all our offerings.",
    image: "/blog/Blog35.webp",
  },
];

export default function TurfCalculator() {
  const [formData, setFormData] = useState({
    environment: "indoor",
    grassType: "rubber",
    size: 3000,
    name: "",
    email: "",
    phone: "",
    timeline: "",
  });
  const [result, setResult] = useState<number | null>(null);

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleBlogClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };
  const navigate = useNavigate();

  const calculateEstimate = () => {
    const grass = grassTypes.find((g) => g.type === formData.grassType);
    if (!grass) return;
    const [min, max] =
      formData.environment === "indoor"
        ? grass.indoorRange
        : grass.outdoorRange;
    const avgRate = (min + max) / 2;
    const cost = avgRate * formData.size;
    setResult(cost);
  };

  const logoBase64 = "data:image/jpeg;base64,/9j/4AAQSk..."; // shortened for brevity

  const exportPDF = () => {
    const doc = new jsPDF();

    // 👇 Manually cast doc to include lastAutoTable
    const typedDoc = doc as jsPDF & {
      lastAutoTable: { finalY: number };
    };

    doc.addImage(logoBase64, "JPEG", 85, 10, 40, 20);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("GameOn Solution", 105, 35, { align: "center" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    doc.setTextColor(100);
    doc.text("Turf Cost Estimate Report", 105, 43, { align: "center" });

    autoTable(doc, {
      startY: 55,
      theme: "striped",
      head: [["Personal Information", ""]],
      body: [
        ["Name", formData.name || "-"],
        ["Email", formData.email || "-"],
        ["Phone", formData.phone || "-"],
        ["Timeline", formData.timeline || "-"],
      ],
      styles: { fontSize: 11 },
      headStyles: { fillColor: [0, 102, 204], textColor: 255 },
      margin: { left: 20, right: 20 },
    });

    const grass = grassTypes.find((g) => g.type === formData.grassType);

    autoTable(doc, {
      startY: typedDoc.lastAutoTable.finalY + 10,
      theme: "striped",
      head: [["Project Details", ""]],
      body: [
        ["Environment", formData.environment || "-"],
        ["Grass Type", grass?.name || "-"],
        ["Ground Size", `${formData.size} sq.ft`],
      ],
      styles: { fontSize: 11 },
      headStyles: { fillColor: [34, 139, 34], textColor: 255 },
      margin: { left: 20, right: 20 },
    });

    autoTable(doc, {
      startY: typedDoc.lastAutoTable.finalY + 10,
      theme: "grid",
      head: [["Cost Breakdown", ""]],
      body: [
        ["Turf Cost", `₹${result?.toLocaleString() || "0"}`],
        ["Total Estimate", `₹${result?.toLocaleString() || "0"}`],
      ],
      styles: { fontSize: 12, fontStyle: "bold" },
      headStyles: { fillColor: [0, 128, 0], textColor: 255 },
      margin: { left: 20, right: 20 },
    });

    if (grass) {
      autoTable(doc, {
        startY: typedDoc.lastAutoTable.finalY + 10,
        theme: "plain",
        head: [[grass.name]],
        body: [[grass.description]],
        styles: { fontSize: 10 },
        headStyles: { fillColor: [60, 60, 60], textColor: 255 },
        margin: { left: 20, right: 20 },
      });
    }

    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text("Generated by GameOn Solution | www.gameonsolution.in", 105, 270, {
      align: "center",
    });

    doc.save("GameOnSolution-Turf-Cost-Estimate.pdf");
  };

  return (
    <>
      <TabSEO
        title="Turf Cost Calculator | GameOn Solution"
        description="Calculate accurate turf installation costs based on size, grass type, and environment. Trusted by South India's top sports infra developers."
        keywords="Turf Cost Calculator, GameOn Solution, sports infrastructure, artificial turf cost, turf installation India"
        image={seoData.blog.image}
        url="https://gameonsolution.in/turf-calculator"
      />

      <main className="min-h-screen bg-gradient-to-br from-green-950 to-black text-white px-6 md:px-20 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <p className="uppercase text-secondary text-sm tracking-widest font-secondary">
            Instant Estimate
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-primary text-white uppercase leading-tight flex flex-wrap justify-center gap-2">
            <TextHoverAnimation text="Turf Calculator" />
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            GameOn Solution presents India&apos;s most advanced{" "}
            <strong>AI-assisted Turf Calculator</strong>. Instantly estimate
            costs for your sports turf based on area, environment, and
            eco-friendly material choices.
          </p>
        </motion.div>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 rounded-2xl shadow-2xl p-8 backdrop-blur-md"
          >
            <div className="grid gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-xl bg-black/60 text-white border border-gray-700"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-xl bg-black/60 text-white border border-gray-700"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full p-3 rounded-xl bg-black/60 text-white border border-gray-700"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              <select
                className="w-full p-3 rounded-xl bg-black/60 text-white border border-gray-700"
                value={formData.timeline}
                onChange={(e) =>
                  setFormData({ ...formData, timeline: e.target.value })
                }
              >
                <option value="">Select Construction Time</option>
                <option value="15 Days">15 Days</option>
                <option value="1 Month">1 Month</option>
                <option value="45 Days">45 Days</option>
                <option value="2 Months">2 Months</option>
              </select>

              <select
                className="w-full mt-1 p-3 rounded-xl bg-black/60 text-white border border-gray-700"
                value={formData.environment}
                onChange={(e) =>
                  setFormData({ ...formData, environment: e.target.value })
                }
              >
                <option value="indoor">Indoor</option>
                <option value="outdoor">Outdoor</option>
              </select>

              <select
                className="w-full mt-1 p-3 rounded-xl bg-black/60 text-white border border-gray-700"
                value={formData.grassType}
                onChange={(e) =>
                  setFormData({ ...formData, grassType: e.target.value })
                }
              >
                {grassTypes.map((g) => (
                  <option key={g.type} value={g.type}>
                    {g.name}
                  </option>
                ))}
              </select>

              <input
                type="number"
                className="w-full mt-1 p-3 rounded-xl bg-black/60 text-white border border-gray-700"
                value={formData.size}
                onChange={(e) =>
                  setFormData({ ...formData, size: +e.target.value })
                }
                placeholder="Ground Size (sq.ft)"
              />

              <button
                onClick={calculateEstimate}
                className="w-full mt-4 bg-secondary text-black font-semibold py-3 rounded-xl hover:bg-yellow-400 transition"
              >
                Calculate Estimate
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-2xl font-bold mb-6 text-secondary uppercase text-center">
              Estimated Cost Breakdown
            </h2>
            <p className="text-base text-gray-300 mb-4 text-center">
              Enter your project details to receive a personalized turf
              installation cost estimate, including a downloadable PDF report.
            </p>
            {result && (
              <div className="mt-6 text-center">
                <p className="text-xl text-white mb-2">
                  <span className="font-semibold text-secondary">Total:</span> ₹
                  {result.toLocaleString()}
                </p>
                <button
                  onClick={exportPDF}
                  className="mt-3 px-6 py-2 rounded-md bg-white/10 border border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black transition"
                >
                  Download PDF
                </button>
              </div>
            )}
          </motion.div>
        </section>
        <section className="max-w-5xl mx-auto px-4 md:px-0 mt-16 text-center text-gray-300">
          <div className="flex flex-col w-full text-center gap-10 max-w-6xl">
            {" "}
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Why Use Our Turf Cost Calculator?
            </h2>
            <p className="text-lg mb-3">
              <a href="https://gameonsolution.in/">
                <b>GameOn Solution's</b>
              </a>{" "}
              Turf Cost Calculator helps you quickly estimate the price of
              installing artificial turf across <strong>cricket grounds</strong>
              , <strong>football turfs</strong>, and{" "}
              <strong>multi-sport arenas</strong>. Whether you&apos;re planning
              for an <strong>indoor turf in Chennai</strong> or an{" "}
              <strong>outdoor turf in Bangalore</strong>, our AI-assisted
              estimator gives you reliable cost breakdowns in seconds.
            </p>
            <p className="text-lg mb-3">
              Built for turf entrepreneurs, sports infra developers, and school
              or college grounds, this free tool factors in your ground size,
              environment, and turf material - including{" "}
              <strong>eco-friendly</strong> and{" "}
              <strong>rubber-infilled options</strong>.
            </p>
            <p className="text-lg mb-3">
              If you&apos;re looking for{" "}
              <strong>sports turf construction in South India</strong> - Tamil
              Nadu, Kerala, Karnataka or Andhra Pradesh - use this calculator to
              plan better and reduce project delays.
            </p>
            <p className="text-sm text-yellow-300 mt-4 italic mb-10">
              💬 Want expert help? Chat with us on WhatsApp at +91 96157 37373.
            </p>
          </div>

          <div className="flex flex-col w-full text-center gap-10 max-w-6xl">
            <p className="text-[12px] font-secondary uppercase tracking-[1px] text-white">
              FAQs
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white uppercase leading-tight flex flex-wrap justify-center gap-2">
              <span>Turf Cost</span>
              <span className="text-secondary">Calculator</span>
              <span>FAQs</span>
            </h1>

            <div className="flex flex-col w-full border border-white/10 rounded-sm overflow-hidden divide-y divide-white/10">
              {faqsData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-black/20 hover:bg-black/30 transition-colors"
                >
                  <button
                    className="w-full flex justify-between items-center p-4 md:p-6 cursor-pointer text-left"
                    onClick={() =>
                      setOpenIndex((prev) => (prev === index ? null : index))
                    }
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h2
                      className={`text-lg md:text-xl lg:text-2xl font-primary ${
                        index % 2 === 0 ? "text-white" : "text-yellow-400"
                      }`}
                    >
                      {faq.question}
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
                    <p className="p-4 md:p-6 pt-2 md:pt-3 text-base md:text-lg text-white bg-black/10">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* 🌱 Turf Learning Hub Section */}
        <section className="max-w-6xl mx-auto mt-20 px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-primary text-white uppercase leading-tight flex flex-wrap justify-center gap-2">
            <TextHoverAnimation text="Learn Turf. Build Smart." />
          </h1>
          <p className="text-lg text-gray-300 mb-10">
            Get expert insights on <strong>turf installation</strong>,{" "}
            <strong>ground development</strong>, and{" "}
            <strong>sports infra business</strong> in India.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full py-10">
            {blogs.map((blog) => (
              <AnimatedCard key={blog.id}>
                <div
                  className="cursor-pointer group bg-black/20 hover:bg-black/30 transition rounded-lg overflow-hidden"
                  onClick={() => handleBlogClick(blog.slug)}
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-primary text-secondary group-hover:text-yellow-400">
                      {blog.title}
                    </h2>
                    <p className="text-white text-sm mt-2 opacity-80">
                      {blog.excerpt}
                    </p>
                    <p className="mt-3 text-xs text-yellow-400">Read More →</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </section>

        {/* 🛠️ Services CTA */}
        <section className="mt-28 text-center bg-white/5 backdrop-blur-md py-14 px-6 rounded-2xl max-w-4xl mx-auto border border-white/10 shadow-xl">
          <h2 className="text-4xl font-bold text-white mb-4">
            End-to-End Turf Construction Starts Here
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            GameOn Solution handles <strong>civil work</strong>,{" "}
            <strong>fencing</strong>, <strong>base prep</strong>, and{" "}
            <strong>premium turf layering</strong>.
          </p>
          <a
            href="https://gameonsolution.in/"
            className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold shadow hover:bg-yellow-300 transition"
          >
            View Turf Services →
          </a>
        </section>

        {/* 🏆 Why GameOn Section */}
        <section className="mt-28 max-w-6xl mx-auto text-white px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Why 200+ Turf Owners Choose GameOn
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "✅ FIFA-Grade Materials",
                desc: "We use certified turf fibers for long-term play quality.",
                link: "https://gameonsolution.in/blog/understanding-turf-and-artificial-grass",
              },
              {
                title: "🌱 Eco-Friendly Tech",
                desc: "Heat-resistance + drainage turf that’s future-ready.",
                link: "https://gameonsolution.in/blog/turf-construction-cost-tamilnadu",
              },
              {
                title: "📍 200+ Projects Done",
                desc: "Turf grounds installed across TN, KA, AP & more.",
                link: "https://gameonsolution.in/news",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="bg-black/20 hover:bg-black/30 p-6 rounded-xl transition border border-white/10 shadow-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-lg font-semibold text-yellow-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
                <p className="mt-3 text-yellow-400 underline text-sm">
                  Explore →
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* 📞 Contact CTA */}
        <section className="text-center mt-28 mb-16 max-w-4xl mx-auto bg-gradient-to-tr from-black/50 to-green-950 p-10 rounded-xl border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-4">
            💬 Got Questions? Let&apos;s Talk!
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            From turf estimates to full-site execution - we&apos;re just one
            click away.
          </p>
          <a
            href="https://gameonsolution.in/get-in-touch"
            className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold shadow hover:bg-yellow-300 transition"
          >
            Contact GameOn →
          </a>
        </section>

        {/* 🌍 Location SEO Section */}
        <section className="mt-20 max-w-6xl mx-auto text-center text-white px-6">
          <h3 className="text-2xl font-bold mb-4">
            📍 Our Turf Projects Are Active In:
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Explore our local turf construction work across South India.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-yellow-300 text-sm font-medium">
            {[
              {
                name: "🏙 Chennai",
                url: "https://gameonsolution.in/blog/gen-alpha-aqua-eco-friendly-turf-rajapalayam",
              },
              {
                name: "🏞 Coimbatore",
                url: "https://gameonsolution.in/blog/turf-construction-cost-tamilnadu",
              },
              {
                name: "🌆 Bangalore",
                url: "https://gameonsolution.in/blog/bangalore-largest-multipurpose-turf-gameon-solution",
              },
              {
                name: "🕌 Hyderabad",
                url: "https://gameonsolution.in/blog/turf-impact-local-sports",
              },
              {
                name: "🌴 Trivandrum",
                url: "https://gameonsolution.in/blog/why-gameon-is-best-turf-construction-company",
              },
            ].map((city, i) => (
              <a
                key={i}
                href={city.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {city.name}
              </a>
            ))}
          </div>
        </section>
      </main>
      <WhatsAppButton />
    </>
  );
}
