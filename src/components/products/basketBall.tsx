// import { Footer } from "../footer";
// import Certificates from "./pageAnimation/certificates";
// import { Container } from "./pageAnimation/container";
// import { FadeIn } from "./pageAnimation/fade-in";
// import { Hero } from "./pageAnimation/hero";
// import { VideoCarousel } from "./pageAnimation/video-carousel";
// import AnimateCard from "../animateCard";
// import { useEffect } from "react";
// import TabSEO from "../seoOptimize/index";

// const BasketBallCourt = () => {
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);
//   return (
//     <div className="">
//       <TabSEO
//         title="Basketball Courts | GameOnSolution - South India’s Best Sports Infrastructure"
//         description="Upgrade your game with top-quality basketball courts from GameOnSolution, South India’s leading provider of sports infrastructure. Durable, high-performance surfaces for schools, communities, and professionals. Get your court today!"
//       />
//       <div className="bg-background relative z-10 select-none">
//         <Hero
//           title={"BASKETBALL COURT"}
//           subtitle={"MAKING EVERY SHOT COUNT"}
//           bgImgUrl={
//             "/basketBall/2.webp" // Replace with the appropriate image URL
//           }
//         />
//         <Container className="relative z-10 space-y-10  md:max-w-[1000px] max-w-[692px]   py-36 text-3xl font-bold text-white md:text-4xl ">
//           <FadeIn>
//             <p className="text-secondary font-primary">BASKETBALL COURT</p>
//           </FadeIn>
//           <FadeIn>
//             <span className="text-secondary">
//               ESSENTIAL CONSIDERATIONS FOR BASKETBALL COURTS
//             </span>
//           </FadeIn>
//           <FadeIn>
//             <span className="md:text-2xl text-lg">
//               Establishing modern basketball courts in urban and suburban areas
//               is a significant opportunity as interest in basketball continues
//               to grow. With a rise in community sports initiatives, schools, and
//               local organizations seeking quality courts, there’s an increasing
//               demand for spaces designed to enhance performance and safety.
//               Investing in professional-grade courts not only meets the need for
//               durable playing surfaces but also ensures minimal maintenance and
//               maximized usability. Advanced synthetic surfaces offer improved
//               grip, resistance to wear, and safer gameplay while allowing
//               multi-sport adaptability.
//             </span>
//           </FadeIn>
//         </Container>
//       </div>
//       <VideoCarousel
//         title="Basketball Court"
//         carouselImages={basketballItems}
//       />
//       <AnimateCard>
//         <Certificates />
//       </AnimateCard>

//       <div className="flex gap-10 lg:flex-row flex-col px-10 md:px-20 lg:px-[7.5rem] py-20">
//         <div className="flex md:flex-row flex-col gap-12">
//           <div className="relative w-full flex items-center justify-center">
//             <div className="relative flex items-center">
//               <div className="w-full h-full overflow-hidden group">
//                 <AnimateCard>
//                   <img
//                     src="https://storage.googleapis.com/a1aa/image/8B5NNyMd6nKtNFAgIRhd8tPpOkqOe0ivBgTl6wXZI8fro6yTA.jpg" // Replace with the appropriate image URL
//                     className="lg:w-[400px] w-[250px] h-full object-cover transition-transform duration-500 ease-out scale-105 transform group-hover:scale-100"
//                     alt="Director"
//                   />
//                 </AnimateCard>

//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none">
//                   <div className="absolute inset-0 bg-black/25" />
//                   <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-purple-800/20 to-yellow-500/50" />
//                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/45 to-black/50" />
//                   <div className="absolute inset-0 flex items-end justify-center duration-500 ease-out p-4">
//                     <p className="lg:text-xl flex-col flex text-white bg-transparent p-2 font-primary tracking-[3px] w-full text-center">
//                       <span className="text-secondary">BASKETBALL COURT</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="w-full flex flex-col justify-center items-start gap-8">
//           <AnimateCard>
//             <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white uppercase leading-tight">
//               BASKETBALL COURT DIMENSIONS ACCORDING TO
//               <span className="text-secondary"> OFFICIAL GUIDELINES</span>
//             </p>
//           </AnimateCard>

//           <div className="flex flex-col gap-10 text-white font-secondary">
//             <AnimateCard>
//               <p className="md:text-2xl text-lg">
//                 A standard basketball court measures 94 feet (28.65 meters) long
//                 and 50 feet (15.24 meters) wide for professional leagues like
//                 the NBA. For high school courts, dimensions are slightly smaller
//                 at 84 feet (25.6 meters) long and 50 feet (15.24 meters) wide.
//                 Ensuring proper markings and adequate buffer zones for safety is
//                 crucial to meet regulations and enhance gameplay.
//               </p>
//             </AnimateCard>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };
// export default BasketBallCourt;
// const basketballItems = [
//   {
//     poster: "/basketBall/1.webp",
//     name: "Airplane",
//     blurHash: "LQEqA]D%B-x?9+Rlbot9~mouIVj@",
//   },
//   {
//     poster: "/basketBall/2.webp",
//     name: "Family man",
//     blurHash: "LdIY5eVtnQs:00WEafR+~BofbbR*",
//   },
//   {
//     poster: "/basketBall/3.webp",
//     name: "Laboratory",
//     blurHash: "LfE3;nWCRiWB^-t7WAR*xcoMogf6",
//   },
//   {
//     poster: "/basketBall/4.webp",
//     name: "Napoleon",
//     blurHash: "L6Ax%~MkBB-l03o_Dqx?Q2%b?CNe",
//   },
//   {
//     poster: "/basketBall/5.webp",
//     name: "Person in Darkness",
//     blurHash: "LfE3;nWCRiWB^-t7WAR*xcoMogf6",
//   },
//   {
//     poster: "/basketBall/6.webp",
//     name: "Scary Building",
//     blurHash: "L6Ax%~MkBB-l03o_Dqx?Q2%b?CNe",
//   },
//   {
//     poster: "/basketBall/7.webp",
//     name: "Scary Building",
//     blurHash: "L6Ax%~MkBB-l03o_Dqx?Q2%b?CNe",
//   },
// ];

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
import Testimonials from "../testimonial";

const BasketBallCourt = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <TabSEO
        title="Basketball Courts | GameOnSolution - South India’s Best Sports Infrastructure"
        description="Upgrade your game with top-quality basketball courts from GameOnSolution, South India’s leading provider of sports infrastructure. Durable, high-performance surfaces for schools, communities, and professionals. Get your court today!"
      />

      <div className="bg-background relative z-10 select-none">
        <Hero
          title="BASKETBALL COURT"
          subtitle="MAKING EVERY SHOT COUNT"
          bgImgUrl="/basketBall/Basketball-001.webp"
        />

        <Container className="relative z-10 space-y-10 md:max-w-[1000px] max-w-[692px] py-36 text-3xl font-bold text-white md:text-4xl">
          <FadeIn>
            <p className="text-secondary font-primary font-normal">
              BASKETBALL COURT
            </p>
          </FadeIn>
          <FadeIn>
            <span className="text-secondary">
              ESSENTIAL CONSIDERATIONS FOR BASKETBALL COURTS
            </span>
          </FadeIn>
          <FadeIn>
            <span className="md:text-2xl text-lg">
              At GameOn Solution, we specialize in building modern basketball
              courts in urban and suburban areas, where the demand is rapidly
              increasing due to the growing popularity of basketball. With the
              rise of community sports initiatives, schools, and local
              organizations are actively seeking premium basketball court
              construction services that focus on performance and safety. Our
              professional-grade courts are designed with advanced synthetic
              sports flooring that offers superior grip, durability, and minimal
              maintenance. These multi-sport surfaces ensure safer gameplay,
              long-term usability, and adaptability for various athletic
              activities.
            </span>
          </FadeIn>
        </Container>
      </div>

      <VideoCarousel
        title="Basketball Court"
        carouselImages={basketballItems}
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
                  src="/basketBall/Basketball-002.webp"
                  className="lg:w-[400px] w-[250px] h-full object-cover transition-transform duration-500 ease-out scale-105 transform group-hover:scale-100"
                  alt="Director"
                />

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
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white uppercase leading-tight"
          >
            BASKETBALL COURT DIMENSIONS ACCORDING TO
            <span className="text-secondary"> OFFICIAL GUIDELINES</span>
          </motion.p>

          <motion.div
            className="flex flex-col gap-10 text-white font-secondary"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="md:text-2xl text-lg">
              A standard basketball court measures 94 feet (28.65 meters) long
              and 50 feet (15.24 meters) wide for professional leagues like the
              NBA. For high school courts, dimensions are slightly smaller at 84
              feet (25.6 meters) long and 50 feet (15.24 meters) wide. Ensuring
              proper markings and adequate buffer zones for safety is crucial to
              meet regulations and enhance gameplay.
            </p>
          </motion.div>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default BasketBallCourt;

const basketballItems = [
  {
    poster: "/basketBall/1.webp",
    name: "Airplane",
    blurHash: "LQEqA]D%B-x?9+Rlbot9~mouIVj@",
  },
  {
    poster: "/basketBall/2.webp",
    name: "Family man",
    blurHash: "LdIY5eVtnQs:00WEafR+~BofbbR*",
  },
  {
    poster: "/basketBall/3.webp",
    name: "Laboratory",
    blurHash: "LfE3;nWCRiWB^-t7WAR*xcoMogf6",
  },
  {
    poster: "/basketBall/4.webp",
    name: "Napoleon",
    blurHash: "L6Ax%~MkBB-l03o_Dqx?Q2%b?CNe",
  },
  {
    poster: "/basketBall/5.webp",
    name: "Person in Darkness",
    blurHash: "LfE3;nWCRiWB^-t7WAR*xcoMogf6",
  },
  {
    poster: "/basketBall/6.webp",
    name: "Scary Building",
    blurHash: "L6Ax%~MkBB-l03o_Dqx?Q2%b?CNe",
  },
  {
    poster: "/basketBall/7.webp",
    name: "Scary Building",
    blurHash: "L6Ax%~MkBB-l03o_Dqx?Q2%b?CNe",
  },
];
