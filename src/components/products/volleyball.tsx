import { Footer } from "../footer";
import Certificates from "./pageAnimation/certificates";
import { Container } from "./pageAnimation/container";
import { FadeIn } from "./pageAnimation/fade-in";
import { Hero } from "./pageAnimation/hero";
import { VideoCarousel } from "./pageAnimation/video-carousel";
import AnimateCard from "../animateCard";
import { useEffect } from "react";
import TabSEO from "../seoOptimize/index";

const VolleyballTurf = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="">
      <TabSEO
        title="Best Volleyball Court Construction in South India | GameOnSolution"
        description="We build high-quality volleyball courts with precision-designed surfaces for optimal grip and playability."
      />
      <div className="bg-background relative z-10 select-none">
        <Hero
          title={"WHERE EVERY SHOT "}
          subtitle={"FINDS ITS MARK"}
          bgImgUrl={
            "https://static.wixstatic.com/media/4c43d3_108dfb94ec234a17a6d8cdc9026bfc8d~mv2.png/v1/fill/w_466,h_326,fp_0.15_0.48,q_85,usm_0.66_1.00_0.01,enc_auto/Volleyball%20court-05.png"
          }
        />
        <Container className="relative z-10 space-y-10  md:max-w-[1000px] max-w-[692px]   py-36 text-3xl font-bold text-white md:text-4xl ">
          <FadeIn>
            <p className="text-secondary font-primary">VOLLEYBALL COURT</p>
          </FadeIn>
          <FadeIn>
            <span className="text-secondary">
              ESSENTIAL CONSIDERATIONS FOR VOLLEYBALL COURT
            </span>
          </FadeIn>
          <FadeIn>
            <span className="md:text-2xl text-lg">
              To guarantee maximum playability and durability, a number of
              important factors must be taken into account while constructing a
              volleyball court.
            </span>
          </FadeIn>
          <FadeIn>
            <span className="md:text-2xl text-lg">
              The Federation Internationale de Volleyball (FIVB), which is the
              worldwide governing organization of volleyball, establishes the
              size of a volleyball court. The FIVB sets the official volleyball
              rules and regulations, including the court's exact measurements,
              the height of the net, and other important details.
            </span>
          </FadeIn>
        </Container>
      </div>
      <VideoCarousel title="Volleyball Turf" carouselImages={cricketItems} />
      <AnimateCard>
        <Certificates />
      </AnimateCard>

      <div className="flex gap-10 lg:flex-row flex-col px-10 md:px-20 lg:px-[7.5rem] py-20">
        <div className="flex  md:flex-row flex-col gap-12 ">
          <div className="relative w-full  flex items-center justify-center ">
            <div className="relative flex items-center">
              <div className="w-full h-full overflow-hidden group">
                <AnimateCard>
                  <img
                    src="https://storage.googleapis.com/a1aa/image/cOI0WQ1AEFLPD1FgjM1Fpj73nvF8e7egZf9KpfjhUGcbml6OB.jpg"
                    className="lg:w-[400px] w-[250px]  h-full object-cover transition-transform duration-500 ease-out scale-105 transform group-hover:scale-100"
                    alt="Director"
                  />
                </AnimateCard>

                {/* Inner Light Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none">
                  <div className="absolute inset-0 bg-black/25" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-purple-800/20 to-yellow-500/50" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-purple-800/20 to-yellow-500/50" />

                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/45 to-black/50" />
                  {/* Text Overlay */}
                  <div className="absolute inset-0 flex  items-end justify-center duration-500 ease-out p-4">
                    <p className="lg:text-xl flex-col flex text-white bg-transparent p-2 font-primary tracking-[3px] w-full text-center">
                      <span className="text-secondary">VOLLEYBALL COURT</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-start gap-8  ">
          <AnimateCard>
            <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white  uppercase leading-tight">
              VOLLEYBALL COURT DIMENSIONS ACCORDING TO
              <span className="text-secondary"> FIVB</span>
            </p>
          </AnimateCard>
          {/* Main Content */}
          <div className="flex flex-col gap-10   text-white font-secondary">
            <AnimateCard>
              <p className="md:text-2xl text-lg">
                The court should adhere to standard dimensions, which are 18
                meters (59 feet) in length and 9 meters (29.5 feet) in width.
                The playing area should include an additional free zone of at
                least 3 meters (9.8 feet) on all sides, allowing players ample
                space to move during play. The net, which should be 2.43 meters
                (7 feet 11 5/8 inches) high for men's play and 2.24 meters (7
                feet 4 1/8 inches) for women's play, must be securely anchored
                and positioned centrally.
              </p>
            </AnimateCard>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default VolleyballTurf;

const cricketItems = [
  {
    poster: "https://www.meckavosports.com//uploads/volleyball_court_1.webp",
    name: "Airplane",
    blurHash: "L~Lgtvt6Rjt6_NoLf6a~o#s:j[WC",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_108dfb94ec234a17a6d8cdc9026bfc8d~mv2.png/v1/fill/w_466,h_326,fp_0.15_0.48,q_85,usm_0.66_1.00_0.01,enc_auto/Volleyball%20court-05.png",
    name: "Family man",
    blurHash: "LUEM?@D$kqRj_MV[j]W=tpxZaet7",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_14b3e64472704a399f224c9b7999145f~mv2.png/v1/fill/w_488,h_326,fp_0.44_0.52,q_85,usm_0.66_1.00_0.01,enc_auto/Volleyball%20court-03.png",
    name: "Laboratory",
    blurHash: "LB8=EGsm8^IB?[xvM}IUs_xvNQf5",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_cbfa6596676b4692a4f70ba8069553ba~mv2.png/v1/fill/w_488,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Volleyball%20court-04.png",
    name: "Napoleon",
    blurHash: "LQK^sL00^*My9YO?D%x[~AnmR6tk",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_06ddf9fa58a143e4bcc20f2b25e1ad05~mv2.png/v1/fill/w_466,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Volleyball%20court-02.png",
    name: "Person in Darkness",
    blurHash: "LWEV{pt6xTocR5n+s:a{~RWBIpR+",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_bb5250c3415947e8b6a9d1cdad06f9e7~mv2.png/v1/fill/w_484,h_662,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Volleyball%20court-06.png",
    name: "Scary Building",
    blurHash: "L3Ac0{KK1Cov00nm%3V@0J-B+VbF",
  },
];
