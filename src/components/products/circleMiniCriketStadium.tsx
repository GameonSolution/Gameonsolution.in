import { Footer } from "../Footer";
import Certificates from "./pageAnimation/certificates";
import { Container } from "./pageAnimation/container";
import { FadeIn } from "./pageAnimation/fade-in";
import { Hero } from "./pageAnimation/hero";
import { VideoCarousel } from "./pageAnimation/video-carousel";
import AnimateCard from "../animateCard";
import { useEffect } from "react";
import TabSEO from "../seoOptimize/index";

const CircleTurf = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="">
      <TabSEO
        title="Mini Cricket Stadium Turf Builders | GameOnSolution"
        description="Build your mini cricket stadium with our expert-designed synthetic turfs, offering durability, safety, and superior bounce."
      />
      <div className="bg-background relative z-10 select-none">
        <Hero
          title={"UNLEASH YOUR GAME ON GREEN: "}
          subtitle={"Circle Mini Cricket Stadium Turf"}
          bgImgUrl={"/CircleMiniCricketStadiumTurff/PLT_00017.jpg"}
        />
        <Container className="relative z-10 space-y-10  md:max-w-[1000px] max-w-[692px]   py-36 text-3xl font-bold text-white md:text-4xl ">
          <FadeIn>
            <p className="uppercase text-secondary font-primary">
              Mini Cricket Stadium
            </p>
          </FadeIn>
          <FadeIn>
            <p className="uppercase text-secondary">
              ESSENTIAL CONSIDERATIONS FOR Circle Mini Cricket Stadium
            </p>
          </FadeIn>
          <FadeIn>
            <span className="md:text-2xl text-lg">
              Welcome to the Circle Mini Cricket Stadium , where passion for
              Cricket meets high-quality, exclusive playing surfaces. Designed
              With the perfect blend of aesthetics and functionality, our turf
              offers an unmatched experience for players of all skill levels.
              The turf’s professional-grade quality ensures optimal ball bounce,
              pace, and spin, bringing a true stadium feel to every game.
              Whether you’re looking to play a friendly match or host
              competitive tournament, Circle Mini Stadium is crafted to offer a
              first-rate cricketing experience in a compact setting. Our
              Exclusive turf has been meticulously engineered to provide
              durability and safety, allowing players to focus solely on their
              game. With shock-absorbing materials, the surface minimizes
              impact. on joints, making it ideal for extended play sessions. At
              Circle Mini Stadium, every aspect has been designed to create an
              environment that brings out the best in every cricketer, from
              beginners to seasoned professionals.  
            </span>
          </FadeIn>
          <FadeIn>
            <p className="uppercase text-secondary">
              Features of the Circle Mini Cricket Stadium Turf:{" "}
            </p>
          </FadeIn>
          <FadeIn>
            <span className="md:text-2xl text-lg">
              Professional-grade artificial turf for realistic ball behavior and
              play Durable, weather-resistant surface ideal for all seasons
              Shock-absorbing layers for player safety and comfort Compact
              design perfect for mini-cricket formats and casual games Low
              maintenance requirements, allowing more time for play
            </span>
          </FadeIn>
        </Container>
      </div>
      <VideoCarousel
        title="Circle Mini Cricket Turf"
        carouselImages={CircleMiniCricketItems}
      />
      <AnimateCard>
        <Certificates />
      </AnimateCard>
      <Footer />
    </div>
  );
};
export default CircleTurf;

const CircleMiniCricketItems = [
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
