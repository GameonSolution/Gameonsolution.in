import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import CharacterScene from "./characterScene";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import TabSEO from "../seoOptimize";
import { seoData } from "@/common/seoTitleDescription";

const Portfolio: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [videoUrl, setVideoUrl] = useState<string | null>(null); // For video URL
  const [isModalOpen, setIsModalOpen] = useState(false); // For modal visibility
  const [showModal, setShowModal] = useState(false); // For animation visibility

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Simulate loading with a 10-second delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  const isMobile = screenWidth <= 768;
  const isTablet = screenWidth > 768 && screenWidth <= 1024;

  const handleVideoSelect = (url: string) => {
    setVideoUrl(url);
    setIsModalOpen(true);
    setTimeout(() => setShowModal(true), 10); // Allow animation to trigger
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => {
      setIsModalOpen(false);
      setVideoUrl(null);
    }, 300); // Match animation duration
  };
  if (isLoading) {
    // Split the text into individual letters for animation
    const text = "Portfolio is Loading...";

    // Split the text into letters and spaces, but preserve the spaces
    const splitText = text.split("").map((letter, index) =>
      letter === " " ? (
        " "
      ) : (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.05, // Delay for smooth staggered effect
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          style={{ display: "inline-block" }}
        >
          {letter}
        </motion.span>
      )
    );

    return (
      <div className="flex justify-center items-center h-screen w-full bg-primary text-white">
        <motion.p className="text-xl md:text-2xl lg:text-4xl tracking-widest uppercase font-primary font-semibold">
          {splitText}
        </motion.p>
      </div>
    );
  }
  return (
    <>
      <TabSEO
        title={seoData.portfolio.title}
        description={seoData.portfolio.description}
        keywords={seoData.portfolio.keywords}
        image={seoData.portfolio.image}
        url={seoData.portfolio.url}
      />
      <div className="w-screen h-screen overflow-y-scroll bg-primary">
        <Canvas
          onContextMenu={(e) => e.stopPropagation()} // Allow default right-click
          camera={{
            position: isMobile ? [0, 2, 4] : isTablet ? [0, 2.5, 5] : [0, 3, 6],
            fov: isMobile ? 60 : isTablet ? 55 : 50,
          }}
          gl={{ antialias: true }}
          style={{ width: "100%", height: "100%" }}
        >
          <color attach="background" args={["#0f150e"]} />
          <fog attach="fog" args={["#0f150e", 5, 0]} />
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 5]} intensity={3} />
          <pointLight
            position={[-10, -10, -5]}
            intensity={0.5}
            color="#0f150e"
          />

          <Stars
            radius={100}
            depth={50}
            count={isMobile ? 2000 : isTablet ? 3000 : 5000}
            factor={4}
            saturation={0}
            fade
            speed={0.5}
          />

          <OrbitControls
            enableZoom={false}
            enableRotate={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
          <CharacterScene onVideoSelect={handleVideoSelect} />
        </Canvas>
      </div>
      {/* Modal for video */}
      {isModalOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-70 flex flex-col gap-5 justify-center items-center z-[10000] transition-opacity duration-300 ${
            showModal ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            className="text-white hover:text-red-500 transition"
            onClick={closeModal}
            aria-label="Close"
          >
            <AiOutlineCloseCircle className="text-4xl" />
          </button>
          <video
            src={videoUrl as string}
            controls
            autoPlay
            className={`${
              isMobile
                ? "w-[90vw] h-auto"
                : isTablet
                ? "w-[80vw] h-auto"
                : "w-[60vw] h-auto"
            } shadow-lg border-4 border-gray-800 transition-transform duration-300 ${
              showModal ? "scale-100" : "scale-95"
            }`}
          />
        </div>
      )}
    </>
  );
};

export default Portfolio;
