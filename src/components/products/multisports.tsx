import { Footer } from "../footer";
import Certificates from "./pageAnimation/certificates";
import { Container } from "./pageAnimation/container";
import { FadeIn } from "./pageAnimation/fade-in";
import { Hero } from "./pageAnimation/hero";
import { VideoCarousel } from "./pageAnimation/video-carousel";
import AnimateCard from "../animateCard";
import { useEffect } from "react";
import TabSEO from "../seoOptimize/index";

const MultiSportsTurf = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="">
      <TabSEO
        title="Multi-Sports Turf Builders for All Games | GameOnSolution"
        description="We design & install multi-sports turfs for football, cricket, and more, ensuring durability and versatility."
      />
      <div className="bg-background relative z-10 select-none">
        <Hero
          title={"MULTI SPORT TURF "}
          subtitle={"FINDS ITS MARK"}
          bgImgUrl={"/Football/Football-03.webp"}
        />
        <Container className="relative z-10 space-y-10  md:max-w-[1000px] max-w-[692px]   py-36 text-3xl font-bold text-white md:text-4xl ">
          <FadeIn>
            <p className="text-secondary font-primary">MULTI-SPORT TURF</p>
          </FadeIn>
          <FadeIn>
            <p className="text-secondary">
              ESSENTIAL CONSIDERATIONS FOR MULTI-SPORT TURF
            </p>
          </FadeIn>
          <FadeIn>
            <span className="md:text-2xl text-lg">
              A multi-sport turf's construction must take into account elements
              that guarantee player safety, longevity, and adaptability to
              different sports. High-grade synthetic materials are used to
              create the surface, which provides a good mix of cushioning and
              grip for a variety of sports, including basketball, tennis, and
              soccer. For a variety of uses, our multi-sport turf may offer a
              dependable, entertaining, and safe playing surface.
            </span>
          </FadeIn>
        </Container>
      </div>
      <VideoCarousel title="Multi-sports Turf" carouselImages={cricketItems} />
      <AnimateCard>
        <Certificates />
      </AnimateCard>

      <div className="flex gap-10 lg:flex-row flex-col px-10 md:px-20 lg:px-[7.5rem] py-20">
        <div className="flex  md:flex-row flex-col gap-12 ">
          <div className="relative w-full  flex items-center justify-center ">
            <div className="relative flex items-center">
              {/* <div className="absolute border-4 border-yellow-600 w-full h-full -top-5 left-5 sm:-top-7 sm:left-6 bg-black/20 blur-sm"></div> */}
              <div className="w-full h-full overflow-hidden group">
                <AnimateCard>
                  <img
                    src="https://storage.googleapis.com/a1aa/image/9FeWw1HWmeg2WkAUfZBmvn8eZTSzLKm82E1PA3z0jo4AYm6OB.jpg"
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
                      <span className="text-secondary"> MULTI-SPORT TURF</span>
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
              ESSENTIAL CONSIDERATIONS FOR
              <span className="text-secondary"> MULTI-SPORT TURF</span>
            </p>
          </AnimateCard>

          {/* Main Content */}
          <div className="flex flex-col gap-10   text-white font-secondary">
            <AnimateCard>
              <p className="md:text-2xl text-lg">
                The turf should be designed with customizable dimensions to
                accommodate multiple activities, typically ranging from 20
                meters (65.6 feet) to 40 meters (131 feet) in length and 10
                meters (32.8 feet) to 20 meters (65.6 feet) in width, depending
                on the specific sports it will host.
              </p>
            </AnimateCard>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default MultiSportsTurf;

const cricketItems = [
  {
    poster: "/Football/Football-01.png",
    name: "Airplane",
    blurHash: "LE8hnHRk00$_HXoboxR;.TWZIWs*",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_ae21e210035347fa8c17e92f7d623b6d~mv2.png/v1/crop/x_167,y_0,w_1751,h_1167/fill/w_416,h_278,fp_0.60_0.31,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-04.png",
    name: "Family man",
    blurHash: "LQEgpQIAB-xs9+Rlbot9~mouIVoL",
  },
  {
    poster: "/Football/Football-02.webp",
    name: "Laboratory",
    blurHash: "LfE3;nWCRiWB^-t7WAR*xcoMogf6",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_93db6e485dbf44e58148ef38aa5db9d1~mv2.png/v1/fill/w_420,h_662,fp_0.52_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/Indoor-06.png",
    name: "Napoleon",
    blurHash: "L17n]o4T~p0100yoTJxZ00~p4T_M",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_26585cf912084d5ab27ee8ae33a06fbd~mv2.png/v1/crop/x_208,y_0,w_1669,h_1167/fill/w_466,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-03.png",
    name: "Person in Darkness",
    blurHash: "LE8hnHRk00$_HXoboxR;.TWZIWs*",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_cbfa6596676b4692a4f70ba8069553ba~mv2.png/v1/fill/w_488,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Volleyball%20court-04.png",
    name: "Scary Building",
    blurHash: "L17n]o4T~p0100yoTJxZ00~p4T_M",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_a42f5b921efb4985b64fa716c98ed47b~mv2.png/v1/fill/w_466,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Indoor-03.png",
    name: "Stars",
    blurHash: "L77n:SDm4U%K8|%KyCMz01tO?@W=",
  },
];
