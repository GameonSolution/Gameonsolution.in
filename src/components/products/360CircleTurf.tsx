import { Footer } from "../Footer";
import Certificates from "./pageAnimation/certificates";
import { Container } from "./pageAnimation/container";
import { FadeIn } from "./pageAnimation/fade-in";
import { Hero } from "./pageAnimation/hero";
import { VideoCarousel } from "./pageAnimation/video-carousel";
import AnimateCard from "../animateCard";
import { useEffect } from "react";
import TabSEO from "../seoOptimize/index";

const CircleTurf360 = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="">
      <TabSEO
        title="Basketball Courts & 360° Circle Turf | GameOnSolution - South India’s Best Sports Infrastructure"
        description="Upgrade your game with top-quality basketball courts and 360° circle turf from GameOnSolution, South India’s leading provider of sports infrastructure. Durable, high-performance surfaces for schools, communities, and professionals. Get your court today!"
      />
      <div className="bg-background relative z-10 select-none">
        <Hero
          title={"BASKETBALL COURT & 360° CIRCLE TURF"}
          subtitle={"MAKING EVERY SHOT AND STEP COUNT"}
          bgImgUrl={
            "/CircleMiniCricketStadiumTurff/PLT_00017.jpg" // Replace with an appropriate image URL
          }
        />
        <Container className="relative z-10 space-y-10  md:max-w-[1000px] max-w-[692px]   py-36 text-3xl font-bold text-white md:text-4xl ">
          <FadeIn>
            <p className="text-secondary font-primary">BASKETBALL COURT</p>
          </FadeIn>
          <FadeIn>
            <span className="text-secondary">
              ESSENTIAL CONSIDERATIONS FOR BASKETBALL COURTS
            </span>
          </FadeIn>
          <FadeIn>
            <span className="md:text-2xl text-lg">
              Establishing modern basketball courts in urban and suburban areas
              is a significant opportunity as interest in basketball continues
              to grow. With a rise in community sports initiatives, schools, and
              local organizations seeking quality courts, there’s an increasing
              demand for spaces designed to enhance performance and safety.
              Investing in professional-grade courts not only meets the need for
              durable playing surfaces but also ensures minimal maintenance and
              maximized usability. Advanced synthetic surfaces offer improved
              grip, resistance to wear, and safer gameplay while allowing
              multi-sport adaptability.
            </span>
          </FadeIn>
        </Container>
      </div>
      <VideoCarousel
        title="Basketball Court & Turf"
        carouselImages={basketballAndTurfItems}
      />
      <AnimateCard>
        <Certificates />
      </AnimateCard>

      {/* Basketball Court Section */}
      <div className="flex gap-10 lg:flex-row flex-col px-10 md:px-20 lg:px-[7.5rem] py-20">
        <div className="flex md:flex-row flex-col gap-12">
          <div className="relative w-full flex items-center justify-center">
            <div className="relative flex items-center">
              <div className="w-full h-full overflow-hidden group">
                <AnimateCard>
                  <img
                    src="/CircleMiniCricketStadiumTurff/PLT_00017.jpg" // Replace with an appropriate image URL
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
                      <span className="text-secondary">BASKETBALL COURT</span>
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
              BASKETBALL COURT DIMENSIONS ACCORDING TO
              <span className="text-secondary"> OFFICIAL GUIDELINES</span>
            </p>
          </AnimateCard>

          <div className="flex flex-col gap-10 text-white font-secondary">
            <AnimateCard>
              <p className="md:text-2xl text-lg">
                A standard basketball court measures 94 feet (28.65 meters) long
                and 50 feet (15.24 meters) wide for professional leagues like
                the NBA. For high school courts, dimensions are slightly smaller
                at 84 feet (25.6 meters) long and 50 feet (15.24 meters) wide.
                Ensuring proper markings and adequate buffer zones for safety is
                crucial to meet regulations and enhance gameplay.
              </p>
            </AnimateCard>
          </div>
        </div>
      </div>

      {/* 360° Circle Turf Section */}
      <div className="flex gap-10 lg:flex-row flex-col px-10 md:px-20 lg:px-[7.5rem] py-20">
        <div className="w-full flex flex-col justify-center items-start gap-8">
          <AnimateCard>
            <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white uppercase leading-tight">
              360° CIRCLE TURF{" "}
              <span className="text-secondary">FOR MULTI-USE</span>
            </p>
          </AnimateCard>

          <div className="flex flex-col gap-10 text-white font-secondary">
            <AnimateCard>
              <p className="md:text-2xl text-lg">
                A 360° Circle Turf provides a versatile space for multiple
                sports activities, practice sessions, and recreational games.
                Typically designed with a radius of 30 to 50 feet, these turfs
                offer ample room for various drills, team coordination
                exercises, and skill improvement. Constructed with durable
                synthetic materials, these surfaces ensure long-lasting
                performance, even under heavy use.
              </p>
            </AnimateCard>
            <AnimateCard>
              <p className="md:text-2xl text-lg">
                Circle turfs are ideal for multi-sport adaptability, from
                football practice to fitness sessions, offering a cost-effective
                solution for communities and sports centers alike.
              </p>
            </AnimateCard>
          </div>
        </div>

        <div className="relative w-full flex items-center justify-center">
          <div className="relative flex items-center">
            <div className="w-full h-full overflow-hidden group">
              <AnimateCard>
                <img
                  src="/CircleMiniCricketStadiumTurff/PLT_00011.jpg" // Replace with an appropriate image URL
                  className="lg:w-[400px] w-[250px] h-full object-cover transition-transform duration-500 ease-out scale-105 transform group-hover:scale-100"
                  alt="360° Circle Turf"
                />
              </AnimateCard>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none">
                <div className="absolute inset-0 bg-black/25" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-purple-800/20 to-yellow-500/50" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/45 to-black/50" />
                <div className="absolute inset-0 flex items-end justify-center duration-500 ease-out p-4">
                  <p className="lg:text-xl flex-col flex text-white bg-transparent p-2 font-primary tracking-[3px] w-full text-center">
                    <span className="text-secondary">360° CIRCLE TURF</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CircleTurf360;
const basketballAndTurfItems = [
  {
    poster: "/CircleMiniCricketStadiumTurff/PLT_00002.jpg",
    name: "Airplane",
    blurHash: "L9DJhL~qKkk=?J$+$zIoE0D%4nZ#",
  },
  {
    poster: "/CircleMiniCricketStadiumTurff/PLT_00006.jpg",
    name: "Family man",
    blurHash: "LnHoH_RPX9bE_NozxFf6_3n%W;ju",
  },
  {
    poster: "/CircleMiniCricketStadiumTurff/PLT_00010.jpg",
    name: "Laboratory",
    blurHash: "L2CPz#0iPVPw7TI;[.0d}]R;0L0e",
  },
  {
    poster: "/CircleMiniCricketStadiumTurff/PLT_00011.jpg",
    name: "Napoleon",
    blurHash: "L*Jb4|t7R-bI_4oft6bH?bNGRjn$",
  },
  {
    poster: "/CircleMiniCricketStadiumTurff/PLT_00013.jpg",
    name: "Person in Darkness",
    blurHash: "LsIX~espxHoM?wS2oybF_3s.t6fk",
  },
  {
    poster: "/CircleMiniCricketStadiumTurff/PLT_00013.jpg",
    name: "Scary Building",
    blurHash: "L85#@1ay02WCbaayjGoL8#ay??ay",
  },
  {
    poster: "/CircleMiniCricketStadiumTurff/PLT_00017.jpg",
    name: "Stars",
    blurHash: "LsIX~espxHoM?wS2oybF_3s.t6fk",
  },
  {
    poster: "/CircleMiniCricketStadiumTurff/PLT_00022.jpg",
    name: "Stars",
    blurHash: "L85#@1ay02WCbaayjGoL8#ay??ay",
  },
];
