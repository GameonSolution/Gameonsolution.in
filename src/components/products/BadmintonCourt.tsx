import { Footer } from "../Footer";
import Certificates from "./pageAnimation/certificates";
import { Container } from "./pageAnimation/container";
import { FadeIn } from "./pageAnimation/fade-in";
import { Hero } from "./pageAnimation/hero";
import { VideoCarousel } from "./pageAnimation/video-carousel";
import AnimateCard from "../animateCard";
import { useEffect } from "react";
import TabSEO from "../seoOptimize/index";

const BadmintonCourt = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="">
      <TabSEO
        title="Badminton Court Construction with Synthetic Turf | GameOnSolution"
        description="We build high-performance badminton courts with anti-slip synthetic flooring for the best playing experience."
      />
      <div className="bg-background relative z-10 select-none">
        <Hero
          title={"BADMINTON COURT"}
          subtitle={"FINDS ITS MARK"}
          bgImgUrl={"/badminton/2.jpg"}
        />
        <Container className="relative z-10 space-y-10  md:max-w-[1000px] max-w-[692px]   py-36 text-3xl font-bold text-white md:text-4xl ">
          <FadeIn>
            <p className="text-secondary font-primary">BADMINTON COURT</p>
          </FadeIn>
          <FadeIn>
            <span className="text-secondary">
              ESSENTIAL CONSIDERATIONS FOR BADMINTON COURT
            </span>
          </FadeIn>
          <FadeIn>
            <span className="md:text-2xl text-lg">
              Creating a safe and professional environment for badminton players
              offers a remarkable business opportunity. With communities
              focusing on sports and fitness, the demand for high-quality
              badminton courts is growing. Opting for synthetic flooring ensures
              enhanced safety and durability, minimizing the risk of injuries
              while improving the playing experience. These courts not only
              provide a flat and standardized playing surface but also include
              protective features like proper lighting and boundary markers to
              elevate the overall game quality.
            </span>
          </FadeIn>
        </Container>
      </div>
      <VideoCarousel title="Badminton Court" carouselImages={BadmintonItems} />
      <AnimateCard>
        <Certificates />
      </AnimateCard>

      <div className="flex gap-10 lg:flex-row flex-col px-10 md:px-20 lg:px-[7.5rem] py-20">
        <div className="flex md:flex-row flex-col gap-12">
          <div className="relative w-full flex items-center justify-center">
            <div className="relative flex items-center">
              <div className="w-full h-full overflow-hidden group">
                <AnimateCard>
                  <img
                    src="https://storage.googleapis.com/a1aa/image/cvbd5aLfOxy7DChiQg9lfnjfSZjMQJ28O2Vf7zFD32eOiUXeE.jpg"
                    className="lg:w-[400px] w-[250px] h-full object-cover transition-transform duration-500 ease-out scale-105 transform group-hover:scale-100"
                    alt="Director"
                  />
                </AnimateCard>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none">
                  <div className="absolute inset-0 bg-black/25" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-purple-800/20 to-yellow-500/50" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/45 to-black/50" />
                  <div className="absolute inset-0 flex items-end justify-center duration-500 ease-out p-4">
                    <p className="lg:text-xl flex-col flex text-white bg-transparent p-2 font-primary tracking-[3px] w-full text-center">
                      <span className="text-secondary">BADMINTON COURT</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-start gap-8">
          <AnimateCard>
            <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white uppercase leading-tight">
              BADMINTON COURT DIMENSIONS ACCORDING TO GUIDELINES
              <span className="text-secondary"> OFFICIAL GUIDELINES</span>
            </p>
          </AnimateCard>

          <div className="flex flex-col gap-10 text-white font-secondary">
            <AnimateCard>
              <p className="md:text-2xl text-lg">
                A standard badminton court measures 44 feet (13.4 meters) in
                length and 20 feet (6.1 meters) in width for doubles matches,
                while for singles matches, the width is reduced to 17 feet (5.18
                meters). The court is divided by a net that is 5 feet (1.55
                meters) high in the center, and the playing area should adhere
                to these precise dimensions to ensure fair play.
              </p>
            </AnimateCard>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default BadmintonCourt;
const BadmintonItems = [
  {
    poster: "/badminton/1.gif",
    name: "Airplane",
    blurHash: "LQEqA]D%B-x?9+Rlbot9~mouIVj@",
  },
  {
    poster: "/badminton/2.jpg",
    name: "Family man",
    blurHash: "LdIY5eVtnQs:00WEafR+~BofbbR*",
  },
  {
    poster: "/badminton/3.webp",
    name: "Laboratory",
    blurHash: "LfE3;nWCRiWB^-t7WAR*xcoMogf6",
  },
  {
    poster: "/badminton/5.webp",
    name: "Napoleon",
    blurHash: "L6Ax%~MkBB-l03o_Dqx?Q2%b?CNe",
  },
  {
    poster: "/badminton/6.jpg",
    name: "Person in Darkness",
    blurHash: "LfE3;nWCRiWB^-t7WAR*xcoMogf6",
  },
  {
    poster: "/badminton/7.jpg",
    name: "Scary Building",
    blurHash: "L6Ax%~MkBB-l03o_Dqx?Q2%b?CNe",
  },
  {
    poster: "/badminton/4.jpg",
    name: "Scary Building",
    blurHash: "L6Ax%~MkBB-l03o_Dqx?Q2%b?CNe",
  },
];
