import { Footer } from "../footer";
import Certificates from "./pageAnimation/certificates";
import { Container } from "./pageAnimation/container";
import { FadeIn } from "./pageAnimation/fade-in";
import { Hero } from "./pageAnimation/hero";
import { VideoCarousel } from "./pageAnimation/video-carousel";
import AnimateCard from "../animateCard";
import { useEffect } from "react";
import TabSEO from "../seoOptimize/index";

const CricketTurf = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="">
      <TabSEO
        title="Custom Cricket Nets & Turf Installation | GameOnSolution"
        description="We provide cricket net construction with advanced synthetic turf, ensuring high performance and long-lasting quality."
      />
      <div className="bg-background relative z-10 select-none">
        <Hero
          title={"CRICKET NETS"}
          subtitle={"FINDS ITS MARK"}
          bgImgUrl={
            "https://static.wixstatic.com/media/4c43d3_7fc4a48fadee496cb7ac4d59d32dcbc1~mv2.png/v1/fill/w_968,h_540,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4c43d3_7fc4a48fadee496cb7ac4d59d32dcbc1~mv2.png "
          }
        />
        <Container className="relative z-10 space-y-10  md:max-w-[1000px] max-w-[692px]   py-36 text-3xl font-bold text-white md:text-4xl ">
          <FadeIn>
            <p className=" text-secondary font-primary">CRICKET NETS</p>
          </FadeIn>
          <FadeIn>
            <span className="text-secondary">
              ESSENTIAL CONSIDERATIONS FOR CRICKET NETS
            </span>
          </FadeIn>
          <FadeIn>
            <span className="md:text-2xl text-lg">
              Reviving box cricket in a safer environment presents a remarkable
              Business opportunity, especially as communities increasingly
              Prioritize sports and recreational activities in secure settings.
              With a soaring demand for dedicated playing areas and the
              Potential for revenue generation through turf rentals, the market
              is ripe for expansion. Opting for artificial turfs for box cricket
              offers players enhanced safety, minimizing the risk of accidents
              while elevating the overall playing experience. These artificial
              turfs not only furnish a secure, flat grassed playground but also
              come equipped with protective net fencing, reducing the likelihood
              of balls straying outside the playing area.
            </span>
          </FadeIn>
        </Container>
      </div>
      <VideoCarousel title="Cricket Turf" carouselImages={cricketItems} />
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
                    src="https://storage.googleapis.com/a1aa/image/QlCBU7weLtWDcapaMWsrh9to1bi0ceL8E0ybMf0Gqmag0TdnA.jpg"
                    className="lg:w-[400px] w-[250px]  h-full object-cover transition-transform duration-500 ease-out scale-105 transform group-hover:scale-100"
                    alt="Director"
                  />
                </AnimateCard>

                {/* Inner Light Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none">
                  <div className="absolute inset-0 bg-black/25" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-purple-800/20 to-yellow-500/50" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-purple-800/20 to-yellow-500/50" />

                  {/* <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/50" /> */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/45 to-black/50" />
                  {/* Text Overlay */}
                  <div className="absolute inset-0 flex  items-end justify-center duration-500 ease-out p-4">
                    <p className="lg:text-xl flex-col flex text-white bg-transparent p-2 font-primary tracking-[3px] w-full text-center">
                      <span className="text-secondary">CRICKET NETS</span>
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
              CRICKET TURF DIMENSIONS ACCORDING TO ICC GUIDELINES
              <span className="text-secondary"> ICC GUIDELINES</span>
            </p>
          </AnimateCard>

          {/* Main Content */}
          <div className="flex flex-col gap-10   text-white font-secondary">
            <AnimateCard>
              <p className="md:text-2xl text-lg">
                A typical cricket pitch is 66 feet (20.12 meters) long and 10
                feet (3.05 meters) wide, with a total turf area of at least 30
                yards (27.43 meters) by 15 yards (13.72 meters) to accommodate
                bowlers and fielders. The turf should be created with exact
                proportions.
              </p>
            </AnimateCard>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CricketTurf;
const cricketItems = [
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_ae21e210035347fa8c17e92f7d623b6d~mv2.png/v1/crop/x_167,y_0,w_1751,h_1167/fill/w_488,h_326,fp_0.60_0.31,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-04.png",
    name: "Airplane",
    blurHash: "LQEqA]D%B-x?9+Rlbot9~mouIVj@",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_8177731fb1f44699946bd36ce43c7997~mv2.png/v1/fill/w_488,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-02.png",
    name: "Family man",
    blurHash: "LdIY5eVtnQs:00WEafR+~BofbbR*",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_177ae28dd7534c0b9961d0a1957f8f3c~mv2.png/v1/fill/w_420,h_662,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-06.png",
    name: "Laboratory",
    blurHash: "LfE3;nWCRiWB^-t7WAR*xcoMogf6",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_1144c12f5a5a4357b6f0617becae9e4b~mv2.png/v1/fill/w_466,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-05.png",
    name: "Napoleon",
    blurHash: "L6Ax%~MkBB-l03o_Dqx?Q2%b?CNe",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_26585cf912084d5ab27ee8ae33a06fbd~mv2.png/v1/crop/x_208,y_0,w_1669,h_1167/fill/w_466,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-03.png",
    name: "Person in Darkness",
    blurHash: "LfE3;nWCRiWB^-t7WAR*xcoMogf6",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_62c3430cd87440309a736d2a6aae8a9d~mv2.png/v1/crop/x_29,y_0,w_1714,h_2371/fill/w_484,h_662,fp_0.50_0.54,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-01.png",
    name: "Scary Building",
    blurHash: "L6Ax%~MkBB-l03o_Dqx?Q2%b?CNe",
  },
];
