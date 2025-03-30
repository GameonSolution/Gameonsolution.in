// AnimatedCard.tsx
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCardProps {
  children: React.ReactNode;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0 3", "0.9 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      style={{
        scale: scaleProgress,
        opacity: scrollYProgress,
      }}
      ref={cardRef}
      className="card  fade-in-10 fade-out-10 flex justify-center duration-800 w-full transform translate-y-5"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
