import { Footer } from "../footer";
import Certificates from "./pageAnimation/certificates";
import { Container } from "./pageAnimation/container";
import { FadeIn } from "./pageAnimation/fade-in";
import { Hero } from "./pageAnimation/hero";
import { VideoCarousel } from "./pageAnimation/video-carousel";
import AnimateCard from "../animateCard";
import { useEffect } from "react";
import TabSEO from "../seoOptimize/index";

const PickleTurf = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="">
      <TabSEO
        title="Professional Pickleball Court Construction | GameOnSolution"
        description="We specialize in high-quality pickleball courts with world-class synthetic surfaces for smooth, professional gameplay."
      />
      <div className="bg-background relative z-10 select-none">
        <Hero
          title={"PICKLE BALL"}
          subtitle={"FINDS ITS MARK"}
          bgImgUrl={" /pickleTurf/pickle-turf-005.jpg"}
        />
        <Container className="relative z-10 space-y-10  md:max-w-[1000px] max-w-[692px]   py-36 text-3xl font-bold text-white md:text-4xl ">
          <FadeIn>
            <p className="uppercase font-primary text-secondary">
              Premium Playing Surface for Pickle ball Enthusiasts
            </p>
          </FadeIn>
          <FadeIn>
            <span className="md:text-2xl text-lg">
              Introducing Pickleball Court, an exclusive, top-quality surface
              designed specifically for pickle ball enthusiasts looking for a
              superior playing experience. With precise attention to texture,
              resilience, and court dynamics, Pickleball Court provides a surface
              that complements every aspect of the game. This high-performance
              turf is engineered to ensure consistent ball bounce, excellent
              traction, and comfort, enhancing your play while preserving
              agility and control. Whether for training, friendly matches, or
              competitive play, Pickleball Court transforms any space into a
              professional-grade pickle ball court. Our turf combines advanced
              materials and a specialized design to withstand heavy play and
              varied weather conditions, providing durability and longevity.
              It’s crafted for minimal maintenance, so you can enjoy more
              uninterrupted game time. Pickleball Court's shock-absorbing layer
              reduces impact on joints, making it ideal for players of all ages
              and skill levels. With our exclusive turf, you get a premier
              playing environment that fosters enjoyment, safety, and
              performance.
            </span>
          </FadeIn>
          <FadeIn>
            <p className="uppercase text-secondary">Features of Pickle</p>
          </FadeIn>
          <FadeIn>
            <span className="md:text-2xl text-lg leading-10">
              Professional-grade for pickle ball game
              play Optimized surface for consistent ball bounce and precise
              movement Weather-resistant materials, suitable for outdoor and
              indoor play Shock-absorbing layer for reduced impact on players'
              joints Low-maintenance design for hassle-free play
            </span>
          </FadeIn>
        </Container>
      </div>
      <VideoCarousel title="Pickle Turf" carouselImages={PickleTurfItems} />
      <AnimateCard>
        <Certificates />
      </AnimateCard>
      <Footer />
    </div>
  );
};
export default PickleTurf;

const PickleTurfItems = [
  {
    poster: "/pickleTurf/pickle-turf-001.jpg",
    name: "Airplane",
    blurHash: "LDD9*K~BMeS0_NIUWUR*x_IVx@%3",
  },
  {
    poster: "/pickleTurf/pickle-turf-002.jpg",
    name: "Family man",
    blurHash: "L26R[Gb]00nh0Nj@--oeu%V@O_a$",
  },
  {
    poster: "/pickleTurf/pickle-turf-003.jpg",
    name: "Family man",
    blurHash: "LPB|Nc%1ROV?~WxaRjoe~Bn$R:s:",
  },
  {
    poster: "/pickleTurf/pickle-turf-004.jpg",
    name: "Laboratory",
    blurHash: "LE8hnHRk00$_HXoboxR;.TWZIWs*",
  },
  {
    poster: "/pickleTurf/pickle-turf-005.jpg",
    name: "Napoleon",
    blurHash: "LWEV{pt6xTocR5n+s:a{~RWBIpR+",
  },
  {
    poster: "/pickleTurf/pickle-turf-006.jpg",
    name: "Person in Darkness",
    blurHash: "LPB|Nc%1ROV?~WxaRjoe~Bn$R:s:",
  },
];

// import { Footer } from "../footer";
// import Certificates from "./pageAnimation/certificates";
// import { Container } from "./pageAnimation/container";
// import { FadeIn } from "./pageAnimation/fade-in";
// import { Hero } from "./pageAnimation/hero";
// import { VideoCarousel } from "./pageAnimation/video-carousel";
// import AnimateCard from "../animateCard";
// import { useEffect } from "react";
// import TabSEO from "../seoOptimize/index";

// const PickleTurf = () => {
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   return (
//     <div>
//       <TabSEO
//         title="Professional Pickleball Court Construction | GameOnSolution"
//         description="We specialize in high-quality pickleball courts with world-class synthetic surfaces for smooth, professional gameplay."
//       />
//       <div className="bg-background relative z-10 select-none">
//         <div className="md:flex md:justify-center md:items-center md:space-x-8">
//           <div className="md:w-1/2 w-full">
//             <Hero
//               title="PICKLE BALL"
//               subtitle="FINDS ITS MARK"
//               bgImgUrl="/pickleTurf/pickle-turf-005.jpg"
//             />
//           </div>
//           <div className="md:w-1/2 w-full relative z-20">
//             <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto md:mx-0 md:w-[80%]">
//               <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
//                 Get in Touch
//               </h2>
//               <form className="space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                 />
//                 <input
//                   type="tel"
//                   placeholder="Phone Number"
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Location"
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                 />
//                 <textarea
//                   placeholder="Message"
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   rows="4"
//                 ></textarea>
//                 <button
//                   type="submit"
//                   className="w-full bg-secondary text-white py-2 rounded-md hover:bg-opacity-80 transition"
//                 >
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>

//         <Container className="relative z-10 space-y-10 md:max-w-[1000px] max-w-[692px] py-36 text-3xl font-bold text-white md:text-4xl">
//           <FadeIn>
//             <p className="uppercase font-primary text-secondary">
//               Premium Playing Surface for Pickle ball Enthusiasts
//             </p>
//           </FadeIn>
//           <FadeIn>
//             <span className="md:text-2xl text-lg">
//               Introducing Pickleball Court, an exclusive, top-quality surface
//               designed specifically for pickle ball enthusiasts looking for a
//               superior playing experience. With precise attention to texture,
//               resilience, and court dynamics, Pickleball Court provides a surface
//               that complements every aspect of the game. This high-performance
//               turf is engineered to ensure consistent ball bounce, excellent
//               traction, and comfort, enhancing your play while preserving
//               agility and control. Whether for training, friendly matches, or
//               competitive play, Pickleball Court transforms any space into a
//               professional-grade pickle ball court. Our turf combines advanced
//               materials and a specialized design to withstand heavy play and
//               varied weather conditions, providing durability and longevity. It’s
//               crafted for minimal maintenance, so you can enjoy more uninterrupted
//               game time. Pickleball Court's shock-absorbing layer reduces impact
//               on joints, making it ideal for players of all ages and skill levels.
//               With our exclusive turf, you get a premier playing environment that
//               fosters enjoyment, safety, and performance.
//             </span>
//           </FadeIn>
//           <FadeIn>
//             <p className="uppercase text-secondary">Features of Pickle</p>
//           </FadeIn>
//           <FadeIn>
//             <span className="md:text-2xl text-lg leading-10">
//               Professional-grade for pickle ball gameplay. Optimized surface for
//               consistent ball bounce and precise movement. Weather-resistant
//               materials, suitable for outdoor and indoor play. Shock-absorbing
//               layer for reduced impact on players' joints. Low-maintenance design
//               for hassle-free play.
//             </span>
//           </FadeIn>
//         </Container>
//       </div>
//       <VideoCarousel title="Pickle Turf" carouselImages={PickleTurfItems} />
//       <AnimateCard>
//         <Certificates />
//       </AnimateCard>
//       <Footer />
//     </div>
//   );
// };

// export default PickleTurf;

// const PickleTurfItems = [
//   {
//     poster: "/pickleTurf/pickle-turf-001.jpg",
//     name: "Airplane",
//     blurHash: "LDD9*K~BMeS0_NIUWUR*x_IVx@%3",
//   },
//   {
//     poster: "/pickleTurf/pickle-turf-002.jpg",
//     name: "Family man",
//     blurHash: "L26R[Gb]00nh0Nj@--oeu%V@O_a$",
//   },
//   {
//     poster: "/pickleTurf/pickle-turf-003.jpg",
//     name: "Family man",
//     blurHash: "LPB|Nc%1ROV?~WxaRjoe~Bn$R:s:",
//   },
//   {
//     poster: "/pickleTurf/pickle-turf-004.jpg",
//     name: "Laboratory",
//     blurHash: "LE8hnHRk00$_HXoboxR;.TWZIWs*",
//   },
//   {
//     poster: "/pickleTurf/pickle-turf-005.jpg",
//     name: "Napoleon",
//     blurHash: "LWEV{pt6xTocR5n+s:a{~RWBIpR+",
//   },
//   {
//     poster: "/pickleTurf/pickle-turf-006.jpg",
//     name: "Person in Darkness",
//     blurHash: "LPB|Nc%1ROV?~WxaRjoe~Bn$R:s:",
//   },
// ];
