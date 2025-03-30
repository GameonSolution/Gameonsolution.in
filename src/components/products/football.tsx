import { Footer } from "../Footer";
import Certificates from "./pageAnimation/certificates";
import { Container } from "./pageAnimation/container";
import { FadeIn } from "./pageAnimation/fade-in";
import { Hero } from "./pageAnimation/hero";
import { VideoCarousel } from "./pageAnimation/video-carousel";
import AnimateCard from "../animateCard";
import { useEffect } from "react";
import TabSEO from "../seoOptimize/index";

const FootballTurf = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="">
      <TabSEO
        title="Expert Football Turf Builders in South India | GameOnSolution"
        description="We design & build premium football turfs with top-grade synthetic grass for durability, grip, and all-weather performance"
      />
      <div className="bg-background relative z-10 select-none">
        <Hero
          title={"UNLEASH YOUR GAME ON GREEN: "}
          subtitle={"FOOTBALL TURF REDEFINED"}
          bgImgUrl={"/Football/Football-07.webp"}
        />
        <Container className="relative z-10 space-y-10  md:max-w-[1000px] max-w-[692px] py-36 text-3xl font-bold text-white md:text-4xl ">
          <FadeIn>
            <p className="text-secondary font-primary">FOOTBALL TURF</p>
          </FadeIn>
          <FadeIn>
            <p className="text-secondary">
              ESSENTIAL CONSIDERATIONS FOR FOOTBALL TURF
            </p>
          </FadeIn>
          <FadeIn>
            <span className="md:text-2xl text-lg">
              Ensuring compliance with FIFA (Federation Internationale de
              Football Association) and UEFA (Union of European Football
              Associations) standards is essential for artificial turf used in
              football. These standards guarantee that the playing surface meets
              high levels of quality, safety, and performance for both
              professional and amateur matches. The turf must achieve FIFA
              Quality or FIFA Quality Pro certification and adhere to UEFA’s
              strict criteria for top-tier competitions. Key aspects include
              player safety, with requirements for shock absorption, traction,
              and reduced skin abrasion, ensuring safe play with minimal injury
              risk. The turf must also withstand heavy usage and varying weather
              conditions while maintaining consistent ball behavior, such as
              roll and rebound. Environmental considerations, including
              sustainable materials and microplastic control, are crucial.
              Regular maintenance and re-certification ensure the field’s
              longevity and reliability, making it a sustainable choice for all
              levels of football.
            </span>
          </FadeIn>
          <FadeIn>
            <span className="md:text-2xl text-lg">
              These bodies establish regulations concerning the quality and
              Performance of artificial football surfaces, including
              Certifications such as FIFA Quality Pro.
            </span>
          </FadeIn>
        </Container>
      </div>

      <VideoCarousel title="Football Turf" carouselImages={cricketItems} />
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
                    src="https://storage.googleapis.com/a1aa/image/99jLJ4BLRvoxBB39a3VKYTeR6fsfutMIJvWfzpX3Dey2SM1dC.jpg"
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
                      <span className="text-secondary"> FOOTBALL TURF</span>
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
              FOOTBALL TURF DIMENSIONS ACCORDING TO FIFA GUIDELINES
              <span className="text-secondary"> FIFA GUIDELINES</span>
            </p>
          </AnimateCard>

          {/* Main Content */}
          <div className="flex flex-col gap-10   text-white font-secondary">
            <AnimateCard>
              <p className="md:text-2xl text-lg">
                The dimensions of football turf must adhere to the Laws of the
                Game, ensuring a rectangular field of play. The length of the
                touchline must exceed the length of the goal line. For
                professional 11-a-side football, FIFA recommends dimensions
                ranging from 100-130 yards(90-120m) in length and 50-100
                yards(45-90m) in width. The penalty area should be positioned 18
                yards(16.45m) from the centre of the goal line, with the penalty
                spot set 12 yards(10.9m) from the goal, irrespective of the
                overall pitch size.
              </p>
            </AnimateCard>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default FootballTurf;

const cricketItems = [
  {
    poster: "/Football/Football-01.png",
    name: "Airplane",
    blurHash: "L29R8gWR01D;0ot3}9xt?qxu02xt",
  },

  {
    poster: "/Football/Football-02.webp",
    name: "Family man",
    blurHash: "LfE3;nWCRiWB^-t7WAR*xcoMogf6",
  },
  {
    poster: "/Football/Football-03.webp",
    name: "Laboratory",
    blurHash: "L67xEt-=00I9osM_j^xw00D$?@-=",
  },
  {
    poster: "/Football/Football-04.webp",
    name: "Napoleon",
    blurHash: "LfE3;nWCRiWB^-t7WAR*xcoMogf6",
  },
  {
    poster: "/Football/Football-05.webp",
    name: "Person in Darkness",
    blurHash: "L67xEt-=00I9osM_j^xw00D$?@-=",
  },
  {
    poster: "/Football/Football-06.webp",
    name: "Scary Building",
    blurHash: "L67xEt-=00I9osM_j^xw00D$?@-=",
  },
  {
    poster: "/contactSideImg.webp",
    name: "Stars",
    blurHash: "LfE3;nWCRiWB^-t7WAR*xcoMogf6",
  },
];
