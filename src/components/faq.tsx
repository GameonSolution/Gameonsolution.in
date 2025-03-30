"use client";

import type React from "react";
import { useState } from "react";
import AnimatedCard from "./animateCard";
import TextHoverAnimation from "./textHoverAnimation";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col gap-24 justify-center items-center select-none min-h-screen bg-primary px-10 md:px-20 lg:px-[7.5rem] pb-16 lg:pb-28">
      <div className="flex flex-col w-full text-center gap-10">
        <AnimatedCard>
          <p className="text-[12px] font-secondary uppercase tracking-[1px]">
            FAQs
          </p>
        </AnimatedCard>
        <div className="flex flex-col gap-5 md:gap-6 text-base md:text-lg lg:text-2xl xl:text-3xl text-white font-secondary">
          <AnimatedCard>
            <h1 className="text-3xl md:text-4xl flex gap-2 lg:text-5xl xl:text-6xl font-primary text-white uppercase leading-tight">
              <TextHoverAnimation text="Frequently" />
              <span className="text-secondary">
                <TextHoverAnimation text="Asked" />
              </span>
              <TextHoverAnimation text="Questions" />
            </h1>
          </AnimatedCard>

          <div className="flex flex-col w-full max-w-4xl mx-auto mt-8 border border-white/10 rounded-sm overflow-hidden">
            {faqData.map((faq, index) => (
              <AnimatedCard key={index}>
                <div className="border-b border-white/10 last:border-b-0">
                  <div
                    className="flex justify-between items-center p-4 md:p-6 cursor-pointer bg-black/20 hover:bg-black/30 transition-colors"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h2
                      className={`text-left text-lg md:text-xl lg:text-2xl font-primary ${
                        index % 2 === 0 ? "text-white" : "text-yellow-400"
                      }`}
                    >
                      {faq.question}
                    </h2>
                    <span className="text-secondary flex-shrink-0 ml-4">
                      {openIndex === index ? (
                        <FaMinus size={16} />
                      ) : (
                        <FaPlus size={16} />
                      )}
                    </span>
                  </div>
                  <div
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
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const faqData = [
  {
    question: "What makes GameOn Solution's sports turf unique?",
    answer:
      "GameOn Solution provides FIFA-standard sports turf with superior durability, drainage, and comfort. Our high-quality materials ensure a professional playing experience for football, cricket, and multi-sport fields.",
  },
  {
    question: "How long does it take to install a sports turf?",
    answer:
      "The installation timeline depends on the size and complexity of the project. On average, a standard football or cricket turf takes 2-4 weeks to complete, including groundwork preparation and finishing touches.",
  },
  {
    question: "Is artificial turf better than natural grass for sports?",
    answer:
      "Yes, artificial turf offers low maintenance, better durability, and all-weather usability compared to natural grass. It provides a consistent playing surface, reducing injuries and enhancing game performance.",
  },
  {
    question: "What maintenance does an artificial turf require?",
    answer:
      "Regular brushing, debris removal, and occasional infill top-ups help maintain the turf's quality. We also offer professional maintenance services to extend its lifespan and keep it in top condition.",
  },
  {
    question: "Do you provide custom sports ground designs?",
    answer:
      "We customize sports ground layouts based on client requirements, ensuring optimal space utilization and high-performance playing surfaces.",
  },
  {
    question: "Where does GameOn Solution provide services?",
    answer:
      "We serve clients across South India, providing expert turf installation for schools, sports clubs, and private sports facilities.",
  },
];

export default FAQ;
