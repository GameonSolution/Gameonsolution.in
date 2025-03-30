import { motion } from "framer-motion";
import React from "react";

interface TextHoverAnimationProps {
  text: string;
}

const TextHoverAnimation: React.FC<TextHoverAnimationProps> = ({ text }) => {
  return (
    <div className="flex ">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block origin-bottom" // Set the transform origin to the bottom
          whileHover={{ scaleY: 1.3 }} // For desktop hover
          whileTap={{ scaleY: 1.3 }}   // For mobile touch
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default TextHoverAnimation;

