import { Footer } from "../Footer";
import Certificates from "./pageAnimation/certificates";
import { Container } from "./pageAnimation/container";
import { FadeIn } from "./pageAnimation/fade-in";
import { Hero } from "./pageAnimation/hero";
import { VideoCarousel } from "./pageAnimation/video-carousel";
import AnimateCard from "../animateCard";
import { useEffect } from "react";
import TabSEO from "../seoOptimize/index";

const IndoorTurf = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="">
      <TabSEO
        title="Indoor Turf Builders in South India | GameOnSolution"
        description="Get custom indoor sports turfs with advanced synthetic materials for year-round gameplay and training."
      />
      <div className="bg-background relative z-10 select-none">
        <Hero
          title={"INDOOR TURF "}
          subtitle={"FINDS ITS MARK"}
          bgImgUrl={
            "https://static.wixstatic.com/media/4c43d3_f327577b6eca48acb7752d3d746c1a58~mv2.jpeg/v1/fill/w_1216,h_257,al_c,q_80,enc_auto/bg.jpeg "
          }
        />
        <Container className="relative z-10 space-y-10  md:max-w-[1000px] max-w-[692px]   py-36 text-3xl font-bold text-white md:text-4xl ">
          <FadeIn>
            <p className="text-secondary font-primary">INDOOR TURF</p>
          </FadeIn>
          <FadeIn>
            <p className="text-secondary">
              ESSENTIAL CONSIDERATIONS FOR INDOOR TURF
            </p>
          </FadeIn>
          <FadeIn>
            <span className="md:text-2xl text-lg">
              When constructing an indoor turf, key considerations must be
              Addressed to ensure functionality, durability, and player safety.
              Organizations like FIFA, FIBA, FIH provide recommended dimensions
              And specifications to ensure that indoor facilities meet the
              Requirements for professional or competitive play. However, for
              multi-purpose or recreational indoor turfs, the dimensions are
              often customized based on the intended use, available space, and
              client requirements.
            </span>
          </FadeIn>
        </Container>
      </div>
      <VideoCarousel title="Indoor Turf" carouselImages={indoorTurfItems} />
      <AnimateCard>
        <Certificates />
      </AnimateCard>

      <div className="flex gap-10  flex-col px-10 md:px-20 lg:px-[7.5rem] py-20">
        <div className="flex  md:flex-row flex-col gap-12 ">
          <div className="relative w-full  flex items-center justify-center ">
            <div className="relative flex items-center">
              <div className="w-full h-full overflow-hidden group">
                <AnimateCard>
                  <img
                    src="https://static.wixstatic.com/media/4c43d3_f327577b6eca48acb7752d3d746c1a58~mv2.jpeg/v1/fill/w_1216,h_257,al_c,q_80,enc_auto/bg.jpeg "
                    className="   h-full object-cover transition-transform duration-500 ease-out scale-105 transform group-hover:scale-100"
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
                      <span className="text-secondary">INDOOR TURF</span>
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
              ESSENTIAL CONSIDERATIONS FOR INDOOR TURF
              <span className="text-secondary"> INDOOR TURF</span>
            </p>
          </AnimateCard>

          {/* Main Content */}
          <div className="flex flex-col gap-10   text-white font-secondary">
            <AnimateCard>
              <p className="md:text-2xl text-lg">
                Depending on the intended purpose, the grass should be
                constructed With precise measurements to meet the particular
                interior space. Typically, these measurements range from 60 feet
                (18.29 meters) to 120 feet (36.58 meters) in length and 30 feet
                (9.14 meters) to 60 Feet (18.29 meters) in width.
              </p>
            </AnimateCard>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default IndoorTurf;

const indoorTurfItems = [
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_8ab1c9e8f0124f4fb1c6ceba1e12190e~mv2.png/v1/fill/w_488,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Indoor-02.png",
    name: "Airplane",
    blurHash: "LEI#xy8^_4o|00R;%1Mx00_34oV@",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_7a36342e36ce4cd1b256127ac1ad3722~mv2.png/v1/fill/w_488,h_326,fp_0.50_0.47,q_85,usm_0.66_1.00_0.01,enc_auto/Indoor-05.png",
    name: "Family man",
    blurHash: "LLH_M2#j4WX.T@s.MixB~8SO9bs.",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_93db6e485dbf44e58148ef38aa5db9d1~mv2.png/v1/fill/w_420,h_662,fp_0.52_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/Indoor-06.png",
    name: "Laboratory",
    blurHash: "L77n:SDm4U%K8|%KyCMz01tO?@W=",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_8b0f7a8bdede406a807d77ea75a3210a~mv2.png/v1/fill/w_466,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Indoor-04.png",
    name: "Napoleon",
    blurHash: "L77n:SDm4U%K8|%KyCMz01tO?@W=",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_a42f5b921efb4985b64fa716c98ed47b~mv2.png/v1/fill/w_466,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Indoor-03.png",
    name: "Person in Darkness",
    blurHash: "L77n:SDm4U%K8|%KyCMz01tO?@W=",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_69ceaf7ade584f05b07cf0600f5aa741~mv2.png/v1/crop/x_61,y_95,w_1569,h_2105/fill/w_478,h_662,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/Indoor-01.pngg",
    name: "Scary Building",
    blurHash: "L77n:SDm4U%K8|%KyCMz01tO?@W=",
  },
];
