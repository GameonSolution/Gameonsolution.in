import { useCarousel } from "@/hook/useCarousel";
import { useNewsFeed } from "@/hook/useNewsFeed";
import { usePortfolio } from "@/hook/usePortfolio";
import { useTestimonials } from "@/hook/useTestimonials";
import React, { useState, useEffect } from "react";

interface PreloaderProps {
  isLoading: boolean;
  onComplete: () => void;
}
const Preloader: React.FC<PreloaderProps> = ({ isLoading, onComplete }) => {
  const { getAllTestimonials } = useTestimonials();
  const { getCarousels } = useCarousel();
  const { getNewsFeeds } = useNewsFeed();
  const { getPortfolio } = usePortfolio();
  const [firstSectionComplete, setFirstSectionComplete] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    if (
      isLoading ||
      getAllTestimonials.isLoading ||
      getCarousels.isLoading ||
      getNewsFeeds.isLoading ||
      getPortfolio.isLoading
    ) {
      // Animate each word
      let wordTimeouts: NodeJS.Timeout[] = [];
      for (let i = 0; i < 3; i++) {
        wordTimeouts.push(
          setTimeout(() => {
            setCurrentWord(i + 1);
          }, i * 1000)
        );
      }

      // Complete first section and start second animation
      setTimeout(() => {
        setFirstSectionComplete(true);
      }, 3000);

      return () => wordTimeouts.forEach(clearTimeout);
    } else {
      setTimeout(() => {
        setIsHidden(true);
        onComplete();
      }, 1000);
    }
  }, [isLoading]);

  if (isHidden) return null;

  return (
    <div
      className={`top-0 left-0 w-full h-full z-[99999999] bg-primary duration-500 ease-out ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative h-full text-center">
        {/* First section: each word appears with blur effect */}
        {!firstSectionComplete && (
          <div className="absolute flex flex-col items-center justify-center h-full w-full pb-8 md:pb-16 z-10">
            <p
              className={`text-[2rem] md:text-[2.5rem] leading-none text-white uppercase font-primary mr-4 transition-all duration-700 ${
                currentWord >= 1
                  ? "opacity-100 blur-none translate-y-0"
                  : "opacity-0 blur-[10px] translate-y-10"
              }`}
            >
              {"South India's No.1"}
            </p>
            <div className="flex flex-col text-center leading-none">
              {["Sports", "Infrastructure", "developer"].map((word, index) => (
                <p
                  key={index}
                  className={`${
                    word === "Sports"
                      ? "text-[5.1rem] md:text-[6.5rem] text-secondary"
                      : "text-[2.25rem] md:text-[2.8rem] t"
                  } ${
                    word === "developer"
                      ? "text-[3.5rem] md:text-[4.3rem] text-[#febc12]"
                      : ""
                  }
                  uppercase font-primary mr-4 transition-all duration-700 delay-500 ${
                    currentWord >= index + 1
                      ? "opacity-100 blur-none translate-y-0"
                      : "opacity-0 blur-[10px] translate-y-10"
                  }
                   ${word === "developer" ? "text-[#febc12]" : ""}
                  ${word === "Infrastructure" ? "text-white" : ""}`}
                >
                  {word}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Second section: Game On Solutions reveal animation */}
        {firstSectionComplete && (
          <div className="absolute flex items-center justify-center h-full w-full z-10 pb-8 md:pb-16">
            <div className="relative px-8 md:px-[30px] overflow-hidden">
              {/* Sliding box that reveals the text */}
              <div className="absolute h-full w-full bg-secondary z-10 p-5 animate-slideReveal"></div>

              {/* Text with reveal effect */}
              <p className="text-white text-4xl md:text-6xl uppercase font-primary animate-revealText">
                <span className="text-secondary">GameOn</span> Solution
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Preloader;
