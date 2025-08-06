// import { Footer } from "../footer";
// import Certificates from "./pageAnimation/certificates";
// import { Container } from "./pageAnimation/container";
// import { FadeIn } from "./pageAnimation/fade-in";
// import { Hero } from "./pageAnimation/hero";
// import { VideoCarousel } from "./pageAnimation/video-carousel";
// import AnimateCard from "../animateCard";
// import { useEffect } from "react";
// import TabSEO from "../seoOptimize/index";

// const FootballTurf = () => {
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);
//   return (
//     <div className="">
//       <TabSEO
//         title="Expert Football Turf Builders in South India | GameOnSolution - South India’s Best Sports Infrastructure"
//         description="We design & build premium football turfs with top-grade synthetic grass for durability, grip, and all-weather performance"
//       />
//       <div className="bg-background relative z-10 select-none">
//         <Hero
//           title={"UNLEASH YOUR GAME ON GREEN: "}
//           subtitle={"FOOTBALL TURF REDEFINED"}
//           bgImgUrl={"/Football/Football-07.webp"}
//         />
//         <Container className="relative z-10 space-y-10  md:max-w-[1000px] max-w-[692px] py-36 text-3xl font-bold text-white md:text-4xl ">
//           <FadeIn>
//             <p className="text-secondary font-primary">FOOTBALL TURF</p>
//           </FadeIn>
//           <FadeIn>
//             <p className="text-secondary">
//               ESSENTIAL CONSIDERATIONS FOR FOOTBALL TURF
//             </p>
//           </FadeIn>
//           <FadeIn>
//             <span className="md:text-2xl text-lg">
//               Ensuring compliance with FIFA (Federation Internationale de
//               Football Association) and UEFA (Union of European Football
//               Associations) standards is essential for artificial turf used in
//               football. These standards guarantee that the playing surface meets
//               high levels of quality, safety, and performance for both
//               professional and amateur matches. The turf must achieve FIFA
//               Quality or FIFA Quality Pro certification and adhere to UEFA’s
//               strict criteria for top-tier competitions. Key aspects include
//               player safety, with requirements for shock absorption, traction,
//               and reduced skin abrasion, ensuring safe play with minimal injury
//               risk. The turf must also withstand heavy usage and varying weather
//               conditions while maintaining consistent ball behavior, such as
//               roll and rebound. Environmental considerations, including
//               sustainable materials and microplastic control, are crucial.
//               Regular maintenance and re-certification ensure the field’s
//               longevity and reliability, making it a sustainable choice for all
//               levels of football.
//             </span>
//           </FadeIn>
//           <FadeIn>
//             <span className="md:text-2xl text-lg">
//               These bodies establish regulations concerning the quality and
//               Performance of artificial football surfaces, including
//               Certifications such as FIFA Quality Pro.
//             </span>
//           </FadeIn>
//         </Container>
//       </div>

//       <VideoCarousel title="Football Turf" carouselImages={cricketItems} />
//       <AnimateCard>
//         <Certificates />
//       </AnimateCard>

//       <div className="flex gap-10 lg:flex-row flex-col px-10 md:px-20 lg:px-[7.5rem] py-20">
//         <div className="flex  md:flex-row flex-col gap-12 ">
//           <div className="relative w-full  flex items-center justify-center ">
//             <div className="relative flex items-center">
//               {/* <div className="absolute border-4 border-yellow-600 w-full h-full -top-5 left-5 sm:-top-7 sm:left-6 bg-black/20 blur-sm"></div> */}
//               <div className="w-full h-full overflow-hidden group">
//                 <AnimateCard>
//                   <img
//                     src="https://storage.googleapis.com/a1aa/image/99jLJ4BLRvoxBB39a3VKYTeR6fsfutMIJvWfzpX3Dey2SM1dC.jpg"
//                     className="lg:w-[400px] w-[250px]  h-full object-cover transition-transform duration-500 ease-out scale-105 transform group-hover:scale-100"
//                     alt="Director"
//                   />
//                 </AnimateCard>

//                 {/* Inner Light Effect */}
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none">
//                   <div className="absolute inset-0 bg-black/25" />
//                   <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-purple-800/20 to-yellow-500/50" />
//                   <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-purple-800/20 to-yellow-500/50" />

//                   {/* <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/50" /> */}
//                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/45 to-black/50" />
//                   {/* Text Overlay */}
//                   <div className="absolute inset-0 flex  items-end justify-center duration-500 ease-out p-4">
//                     <p className="lg:text-xl flex-col flex text-white bg-transparent p-2 font-primary tracking-[3px] w-full text-center">
//                       <span className="text-secondary"> FOOTBALL TURF</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="w-full flex flex-col justify-center items-start gap-8  ">
//           <AnimateCard>
//             <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white  uppercase leading-tight">
//               FOOTBALL TURF DIMENSIONS ACCORDING TO FIFA GUIDELINES
//               <span className="text-secondary"> FIFA GUIDELINES</span>
//             </p>
//           </AnimateCard>

//           {/* Main Content */}
//           <div className="flex flex-col gap-10   text-white font-secondary">
//             <AnimateCard>
//               <p className="md:text-2xl text-lg">
//                 The dimensions of football turf must adhere to the Laws of the
//                 Game, ensuring a rectangular field of play. The length of the
//                 touchline must exceed the length of the goal line. For
//                 professional 11-a-side football, FIFA recommends dimensions
//                 ranging from 100-130 yards(90-120m) in length and 50-100
//                 yards(45-90m) in width. The penalty area should be positioned 18
//                 yards(16.45m) from the centre of the goal line, with the penalty
//                 spot set 12 yards(10.9m) from the goal, irrespective of the
//                 overall pitch size.
//               </p>
//             </AnimateCard>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };
// export default FootballTurf;

// const cricketItems = [
//   {
//     poster: "/Football/Football-01.webp",
//     name: "Airplane",
//     blurHash: "L29R8gWR01D;0ot3}9xt?qxu02xt",
//   },

//   {
//     poster: "/Football/Football-02.webp",
//     name: "Family man",
//     blurHash: "LfE3;nWCRiWB^-t7WAR*xcoMogf6",
//   },
//   {
//     poster: "/Football/Football-03.webp",
//     name: "Laboratory",
//     blurHash: "L67xEt-=00I9osM_j^xw00D$?@-=",
//   },
//   {
//     poster: "/Football/Football-04.webp",
//     name: "Napoleon",
//     blurHash: "LfE3;nWCRiWB^-t7WAR*xcoMogf6",
//   },
//   {
//     poster: "/Football/Football-05.webp",
//     name: "Person in Darkness",
//     blurHash: "L67xEt-=00I9osM_j^xw00D$?@-=",
//   },
//   {
//     poster: "/Football/Football-06.webp",
//     name: "Scary Building",
//     blurHash: "L67xEt-=00I9osM_j^xw00D$?@-=",
//   },
//   {
//     poster: "/contactSideImg.webp",
//     name: "Stars",
//     blurHash: "LfE3;nWCRiWB^-t7WAR*xcoMogf6",
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

const FootballTurf = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <TabSEO
        title="Expert Football Turf Builders in South India | GameOnSolution - South India’s Best Sports Infrastructure"
        description="We design & build premium football turfs with top-grade synthetic grass for durability, grip, and all-weather performance"
      />

      <div className="bg-background relative z-10 select-none">
        <Hero
          title={"UNLEASH YOUR GAME ON GREEN: "}
          subtitle={"FOOTBALL TURF REDEFINED"}
          bgImgUrl={"/Football/1.webp"}
        />

        <Container className="relative z-10 space-y-10 md:max-w-[1000px] max-w-[692px] py-36 text-3xl font-bold text-white md:text-4xl">
          <FadeIn>
            <p className="text-secondary font-primary font-normal">
              FOOTBALL TURF
            </p>
          </FadeIn>
          <FadeIn>
            <p className="text-secondary">
              ESSENTIAL CONSIDERATIONS FOR FOOTBALL TURF
            </p>
          </FadeIn>
          <FadeIn>
            <span className="md:text-2xl text-lg">
              Environmentally Safe Grass Solutions: <br /> GameOn Solution
              champions sustainability with our state-of-the-art,
              environmentally friendly artificial grass technology. Our turfs
              are manufactured using recycled materials and toxic-free
              substances, delivering maximum performance and a minimum
              environmental footprint.
            </span>
          </FadeIn>
          <FadeIn>
            <span className="md:text-2xl text-lg">
              Aqua Eco-Friendly Grass Systems: <br /> Our Aqua eco-friendly
              grass solutions use piezo technology, which offers superior
              drainage and water systems. Our Aqua eco-friendly grass system
              minimizes water, up to 70% less than natural grass, and maintains
              quality playing conditions across the many climates in South
              India.
            </span>
          </FadeIn>
          <FadeIn>
            <span className="md:text-2xl text-lg">
              FIFA Pro Certified Quality: <br /> All football turfs installed by
              GameOn Solution are at FIFA Pro standards and are internationally
              recognized certified turf. The certified grass marked "Pro" is
              rigorously tested for ball bounce, player-surface interaction, and
              hardness standards. Built to International Standards, All football
              turfs installed by GameOn Solution are constructed to FIFA
              standards and international specifications, assuring regulation
              playing field dimensions, shock absorption, and consistent surface
              quality, comparable and playable for professional-level football.
            </span>
          </FadeIn>
        </Container>
      </div>

      <VideoCarousel title="Football Turf" carouselImages={cricketItems} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Certificates />
      </motion.div>

      <div className="flex gap-10 lg:flex-row flex-col px-10 md:px-20 lg:px-[7.5rem] py-20">
        <div className="flex md:flex-row flex-col gap-12">
          <div className="relative w-full flex items-center justify-center">
            <div className="relative flex items-center group overflow-hidden">
              <motion.img
                initial={{ scale: 1.05 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                src="https://storage.googleapis.com/a1aa/image/99jLJ4BLRvoxBB39a3VKYTeR6fsfutMIJvWfzpX3Dey2SM1dC.jpg"
                className="lg:w-[400px] w-[250px] h-full object-cover"
                alt="Director"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none">
                <div className="absolute inset-0 bg-black/25" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-purple-800/20 to-yellow-500/50" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/45 to-black/50" />
                <div className="absolute inset-0 flex items-end justify-center p-4">
                  <p className="lg:text-xl flex-col flex text-white bg-transparent p-2 font-primary tracking-[3px] w-full text-center">
                    <span className="text-secondary"> FOOTBALL TURF</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-start gap-8">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white uppercase leading-tight"
          >
            FOOTBALL TURF DIMENSIONS ACCORDING TO
            <span className="text-secondary"> FIFA GUIDELINES</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col gap-10 text-white font-secondary"
          >
            <p className="md:text-2xl text-lg">
              The dimensions of football turf must adhere to the Laws of the
              Game, ensuring a rectangular field of play. The length of the
              touchline must exceed the length of the goal line. For
              professional 11-a-side football, FIFA recommends dimensions
              ranging from 100-130 yards(90-120m) in length and 50-100
              yards(45-90m) in width...
            </p>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col gap-12 px-10 md:px-20 lg:px-[7.5rem] py-20 text-white font-secondary"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-secondary uppercase">
          Expert Football Turf Installation Services South India - GameOn
          Solution
        </h2>

        <p className="md:text-2xl text-lg leading-relaxed">
          Upgrade your pitch with{" "}
          <strong>high-quality FIFA-certified football turf</strong>
          designed to perform in all weather conditions. If you&apos;re looking
          for professional{" "}
          <strong className="text-secondary">
            football turf installation in Chennai, Bangalore, Hyderabad, or
            anywhere in South India
          </strong>
          , GameOn Solution is your trusted partner. Our eco-friendly, durable
          football turfs provide world-class playing conditions for academies,
          community fields, and professional stadiums.
        </p>

        <h3 className="text-2xl md:text-3xl text-secondary font-primary">
          Why Choose GameOn Solution for Football Turf Installation?
        </h3>
        <ul className="list-disc pl-5 md:text-xl text-lg space-y-3">
          <li>
            <strong>Environmentally Safe Grass Solutions:</strong> We use
            recyclable, non-toxic materials, ensuring safe play and a minimal
            environmental footprint.
          </li>
          <li>
            <strong>Aqua Eco-Friendly Grass Systems:</strong> Advanced
            piezo-drainage technology saves up to 70% water compared to natural
            grass.
          </li>
          <li>
            <strong>FIFA Pro Certified Quality:</strong> Tested for ball roll,
            bounce, player interaction, and shock absorption for professional
            play.
          </li>
          <li>
            <strong>All-Weather Durability:</strong> Play year-round without
            worrying about monsoons or extreme heat in South India.
          </li>
        </ul>

        <h3 className="text-2xl md:text-3xl text-secondary font-primary">
          Football Turf Installation Process
        </h3>
        <ol className="list-decimal pl-5 md:text-xl text-lg space-y-3">
          <li>
            <strong>Site Evaluations & Planning</strong> - Assessing drainage,
            soil, and climate.
          </li>
          <li>
            <strong>Ground Preparation</strong> - Creating a stable base with
            perfect drainage.
          </li>
          <li>
            <strong>Professional Installation</strong> - Using FIFA-approved
            artificial turf with precise joints.
          </li>
          <li>
            <strong>Quality Assurance</strong> - Comprehensive checks to meet
            international football standards.
          </li>
        </ol>

        <h3 className="text-2xl md:text-3xl text-secondary font-primary">
          Benefits of Our Football Turf Systems
        </h3>
        <ul className="list-disc pl-5 md:text-xl text-lg space-y-3">
          <li>All-climate performance with zero downtime.</li>
          <li>Low maintenance and cost savings over natural grass.</li>
          <li>Durable and safe for players with consistent ball roll.</li>
          <li>Quick project delivery and long-term warranty coverage.</li>
        </ul>

        <h3 className="text-2xl md:text-3xl text-secondary font-primary">
          Service Locations Across South India
        </h3>
        <p className="md:text-xl text-lg">
          GameOn Solution offers{" "}
          <strong>football turf construction and installation</strong>
          in Tamil Nadu{" "}
          <span className="text-secondary">(Chennai, Coimbatore, Madurai)</span>
          , Karnataka{" "}
          <span className="text-secondary">(Bangalore, Mysore)</span>, Andhra
          Pradesh{" "}
          <span className="text-secondary">(Vijayawada, Visakhapatnam)</span>,
          Kerala <span className="text-secondary">(Kochi, Trivandrum)</span>,
          and Telangana{" "}
          <span className="text-secondary">(Hyderabad, Warangal)</span>.
        </p>

        <h3 className="text-2xl md:text-3xl text-secondary font-primary">
          Why Eco-Friendly Football Turf?
        </h3>
        <p className="md:text-xl text-lg">
          Our <strong>eco-friendly football grass</strong> eliminates toxic
          rubber infill and uses silica sand or organic alternatives. It stays
          cooler in the South Indian climate, provides excellent drainage during
          monsoons, and is 100% recyclable.
        </p>

        <ul className="list-disc pl-5 md:text-xl text-lg space-y-3">
          <li>No toxic rubber exposure or respiratory risks.</li>
          <li>Colder surface temperature with superior drainage.</li>
          <li>FIFA Pro-level playability with 10+ years of durability.</li>
          <li>Environmentally safe and fully recyclable materials.</li>
        </ul>

        <p className="md:text-xl text-lg mt-6">
          <strong>Transform your football field with GameOn Solution</strong>.
          Contact us today for a free site assessment and professional quote.
          Experience world-class{" "}
          <a
            href="/blog/turf-cricket-installation"
            className="text-secondary underline"
          >
            turf installation
          </a>{" "}
          that delivers durability, eco-friendliness, and top performance for
          South India&apos;s climate.
        </p>
      </motion.div>

      <Testimonials />
      <Footer />
    </div>
  );
};

export default FootballTurf;

const cricketItems = [
  {
    poster: "/Football/Football-01.webp",
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
    poster: "/Football/Football-08.webp",
    name: "Stars",
    blurHash: "LfE3;nWCRiWB^-t7WAR*xcoMogf6",
  },
];
