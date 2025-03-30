import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Define types for props
interface SectionProps {
  imageSrc: string;
  phoneSrc: string;
}

const Section: React.FC<SectionProps> = ({ imageSrc, phoneSrc }) => {
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false); // Check for screen size

  // Dynamically select the background image based on screen size
  const backgroundImage = isMobileOrTablet ? phoneSrc : imageSrc;

  useEffect(() => {
    // Check if the device is mobile or tablet
    const handleResize = () => {
      setIsMobileOrTablet(window.matchMedia("(max-width: 1024px)").matches);
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize); // Update on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Disable initial animation after it completes
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsInitialRender(false);
    }, 1000); // Match the animation duration

    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      className="sticky top-0 h-screen flex flex-col items-center justify-center text-white"
      initial={isInitialRender ? { scale: 1, opacity: 0 } : {}}
      animate={isInitialRender ? { scale: 1, opacity: 1 } : {}}
      transition={isInitialRender ? { duration: 1, ease: "easeOut" } : {}}
    >
      <img
        src={backgroundImage}
        alt={`Section ${backgroundImage}`}
        className="absolute w-full h-full object-cover z-10"
      />
    </motion.div>
  );
};

export default Section;
