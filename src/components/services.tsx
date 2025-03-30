import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { servicesObj } from "@/common/servicesObj";
import Marquee from "react-fast-marquee"; // Optional: for easy marquee handling
import { useNavigate } from "react-router-dom";
import AnimatedCard from "./animateCard";
import { OptimizedImage } from "./lazyLoadingImage/index.tsx";
import TabSEO from "./seoOptimize/index.tsx";
import { seoData } from "@/common/seoTitleDescription/index.ts";

const Services: React.FC = () => {
  const navigate = useNavigate();

  const marqueeImages = [
    "/Football/Football-01.png",
    "/Football/Football-02.webp",
    "/Football/Football-03.webp",
    "/CircleMiniCricketStadiumTurff/PLT_000018.jpeg",
    "/CircleMiniCricketStadiumTurff/PLT_00002.jpg",
    "/CircleMiniCricketStadiumTurff/PLT_00006.jpg",
    "/CircleMiniCricketStadiumTurff/PLT_00010.jpg",
    "/pickleTurf/pickle-turf-001.jpg",
    "/pickleTurf/pickle-turf-002.jpg",
    "/pickleTurf/pickle-turf-003.jpg",
    "/pickleTurf/pickle-turf-004.jpg",
  ];
  return (
    <>
      <TabSEO
        title={seoData.services.title}
        description={seoData.services.description}
        keywords={seoData.services.keywords}
        image={seoData.services.image}
        url={seoData.services.url}
      />
      <section className="flex flex-col gap-10 justify-center items-center select-none min-h-screen bg-primary px-10 md:px-20 lg:px-[7.5rem] pb-16 lg:pb-28">
        {/* Header */}
        <div className="text-left w-full">
          <AnimatedCard>
            <p className="text-[12px] font-secondary  uppercase tracking-[1px]">
              Our Products
            </p>
          </AnimatedCard>
        </div>

        {/* Main Title */}
        <AnimatedCard>
          <div className="w-full flex flex-col gap-8 lg:gap-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-primary font-bold text-white uppercase leading-tight text-left">
              Installation<span className="text-secondary">,</span> Maintenance
              <span className="text-secondary">,</span> Renovation
            </h2>
          </div>
        </AnimatedCard>

        {/* Marquee Section */}
        <AnimatedCard>
          <div className="relative w-full py-4">
            {/* Left Inner Shadow */}
            <div className="absolute left-0 top-0 h-full w-[80px] lg:w-[150px] z-10 bg-gradient-to-r from-primary to-transparent pointer-events-none"></div>
            {/* Right Inner Shadow */}
            <div className="absolute right-0 top-0 h-full w-[80px] lg:w-[150px] z-10 bg-gradient-to-l from-primary to-transparent pointer-events-none"></div>

            <Marquee speed={40} gradient={false}>
              {marqueeImages.map((image, index) => (
                <div
                  key={index}
                  className="w-80 h-72 m-4 shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                >
                  <OptimizedImage
                    classNames="w-80 h-72"
                    imageUrl={image}
                    blurhash={"N44MUytQ4UMyq8kUHce:y,oymtV[8wV[.kt7R7oM"}
                    height={1000}
                    width={500}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </AnimatedCard>

        {/* Services List */}
        <div className="w-full select-none">
          {servicesObj.map((service, index) => (
            <AnimatedCard key={index}>
              <div
                key={index}
                className={`group w-full flex flex-col gap-5 items-end md:flex-row ${
                  index === 0 ? "lg:border-t lg:border-b" : "lg:border-b"
                } lg:border-yellow-600 lg:border-opacity-20 py-5 lg:py-10 transition-all duration-300 ease-in-out relative`}
              >
                {/* Service Info */}
                <div className="w-full md:w-[70%] flex flex-col gap-4 lg:gap-6">
                  <h3 className="text-lg font-bold font-primary tracking-[1.5px] uppercase text-secondary">
                    {service.title}
                  </h3>
                  <div className="border-l-4 border-secondary pl-4 pr-2">
                    <p className="text-sm md:text-base font-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="w-full h-full md:w-[30%] flex justify-start md:justify-end items-center">
                  <div
                    className="flex flex-row-reverse md:flex-col w-[40%] md:w-[60%] lg:w-[30%] md:h-[70%] lg:h-full gap-3 md:gap-5 md:items-end justify-center items-center border opacity-80 border-yellow-600 border-opacity-10 bg-slate-200/10 p-2 md:p-3 lg:p-4 group-hover:bg-secondary hover:cursor-pointer"
                    onClick={() =>
                      navigate(`${service.redirect}`, { replace: true })
                    }
                  >
                    <FaArrowRight className="text-lg md:text-xl lg:3xl text-white/80 transform transition-transform duration-300 -rotate-45 ease-out group-hover:-rotate-0" />
                    <p className="text-[12px] md:text-sm lg:text-base text-white/80 font-primary tracking-[1.5px] uppercase transition-colors duration-300 group-hover:text-primary">
                      Read more
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
