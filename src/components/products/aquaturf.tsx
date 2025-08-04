"use client";

import { Footer } from "../footer";
import Certificates from "./pageAnimation/certificates";
import { Container } from "./pageAnimation/container";
import { FadeIn } from "./pageAnimation/fade-in";
import { Hero } from "./pageAnimation/hero";
import { VideoCarousel } from "./pageAnimation/video-carousel";
import { motion } from "framer-motion";
import { useEffect } from "react";
import TabSEO from "../seoOptimize/index";

const AquaEcoTurf = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <TabSEO
        title="Aqua-Themed Eco-Friendly Turf | GameOnSolution - Vibrant Sports Flooring"
        description="Transform your sports space with Aqua-Themed Eco-Friendly Turf by GameOnSolution. Sustainable, weather-resistant, and visually striking – perfect for communities, schools, and sports arenas."
      />

      <div className="bg-background relative z-10 select-none">
        <Hero
          title="AQUA-THEMED ECO-FRIENDLY TURF"
          subtitle="COOLER LOOKS, GREENER FUTURE"
          bgImgUrl="/aquaturf/3.webp"
        />

        <Container className="relative z-10 space-y-10 md:max-w-[1000px] max-w-[692px] py-36 text-3xl font-bold text-white md:text-4xl">
          <FadeIn>
            <p className="text-secondary font-primary font-normal">
              AQUA-THEMED ECO-FRIENDLY TURF
            </p>
          </FadeIn>
          <FadeIn>
            <span className="text-secondary">
              PLAY WITH PURPOSE, BUILD WITH STYLE
            </span>
          </FadeIn>
          <FadeIn>
            <span className="md:text-2xl text-lg">
              GameOn Solution introduces a new standard in sports flooring with
              our **Aqua-Themed Eco-Friendly Turf**. Designed to catch the eye
              and support the planet, this turf blends aesthetic excellence with
              sustainable construction. It's the ideal surface for modern
              schools, turf centers, and recreational spaces seeking
              high-performance play with minimal environmental impact.
            </span>
          </FadeIn>
        </Container>
      </div>

      <VideoCarousel
        title="Aqua-Themed Eco-Friendly Turf"
        carouselImages={aquaBlueItems}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Certificates />
      </motion.div>

      <div className="flex gap-10 lg:flex-row flex-col px-10 md:px-20 lg:px-[7.5rem] py-20">
        <div className="flex md:flex-row flex-col gap-12">
          <div className="relative w-full flex items-center justify-center">
            <div className="relative flex items-center">
              <div className="w-full h-full overflow-hidden group">
                <motion.img
                  initial={{ opacity: 0, scale: 1.1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  src="/aquaturf/3.webp"
                  className="lg:w-[400px] w-[250px] h-full object-cover transition-transform duration-500 ease-out scale-105 transform group-hover:scale-100"
                  alt="Aqua-Themed Eco-Friendly Turf"
                />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none">
                  <div className="absolute inset-0 bg-black/25" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-blue-800/20 to-cyan-500/50" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/45 to-black/50" />
                  <div className="absolute inset-0 flex items-end justify-center duration-500 ease-out p-4">
                    <p className="lg:text-xl flex-col flex text-white bg-transparent p-2 font-primary tracking-[3px] w-full text-center">
                      <span className="text-secondary">AQUA-THEMED TURF</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-start gap-8">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white uppercase leading-tight"
          >
            DIMENSIONS AND FEATURES OF
            <span className="text-secondary">
              {" "}
              AQUA-THEMED ECO-FRIENDLY TURF
            </span>
          </motion.p>

          <motion.div
            className="flex flex-col gap-10 text-white font-secondary"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="md:text-2xl text-lg">
              Available in customized dimensions, this turf supports high-impact
              sports with optimal shock absorption, drainage layers, and weather
              resistance. Built with recyclable, lead-free materials, it's an
              eco-conscious choice that doesn't compromise on performance or
              aesthetics.
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AquaEcoTurf;

const aquaBlueItems = [
  {
    poster: "/aquaturf/1.webp",
    name: "Eco Turf Shot 1",
    blurHash: "LQEqA]D%B-x?9+Rlbot9~mouIVj@",
  },
  {
    poster: "/aquaturf/2.webp",
    name: "Eco Turf Shot 2",
    blurHash: "LdIY5eVtnQs:00WEafR+~BofbbR*",
  },
  {
    poster: "/aquaturf/3.webp",
    name: "Eco Turf Shot 3",
    blurHash: "LfE3;nWCRiWB^-t7WAR*xcoMogf6",
  },
  {
    poster: "/aquaturf/4.webp",
    name: "Eco Turf Shot 4",
    blurHash: "L6Ax%~MkBB-l03o_Dqx?Q2%b?CNe",
  },
  {
    poster: "/aquaturf/5.webp",
    name: "Eco Turf Shot 5",
    blurHash: "LfE3;nWCRiWB^-t7WAR*xcoMogf6",
  },
  {
    poster: "/aquaturf/6.webp",
    name: "Eco Turf Shot 6",
    blurHash: "L6Ax%~MkBB-l03o_Dqx?Q2%b?CNe",
  },
  {
    poster: "/aquaturf/7.webp",
    name: "Eco Turf Shot 7",
    blurHash: "L6Ax%~MkBB-l03o_Dqx?Q2%b?CNe",
  },
];
