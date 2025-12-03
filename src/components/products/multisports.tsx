// import { Footer } from "../footer";
// import Certificates from "./pageAnimation/certificates";
// import { Container } from "./pageAnimation/container";
// import { FadeIn } from "./pageAnimation/fade-in";
// import { Hero } from "./pageAnimation/hero";
// import { VideoCarousel } from "./pageAnimation/video-carousel";
// import AnimateCard from "../animateCard";
// import { useEffect } from "react";
// import TabSEO from "../seoOptimize/index";

// const MultiSportsTurf = () => {
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);
//   return (
//     <div className="">
//       <TabSEO
//         title="Multi-Sports Turf Builders for All Games | GameOnSolution - South India’s Best Sports Infrastructure"
//         description="We design & install multi-sports turfs for football, cricket, and more, ensuring durability and versatility."
//       />
//       <div className="bg-background relative z-10 select-none">
//         <Hero
//           title={"MULTI SPORT TURF "}
//           subtitle={"FINDS ITS MARK"}
//           bgImgUrl={"/Football/Football-03.webp"}
//         />
//         <Container className="relative z-10 space-y-10  md:max-w-[1000px] max-w-[692px]   py-36 text-3xl font-bold text-white md:text-4xl ">
//           <FadeIn>
//             <p className="text-secondary font-primary">MULTI-SPORT TURF</p>
//           </FadeIn>
//           <FadeIn>
//             <p className="text-secondary">
//               ESSENTIAL CONSIDERATIONS FOR MULTI-SPORT TURF
//             </p>
//           </FadeIn>
//           <FadeIn>
//             <span className="md:text-2xl text-lg">
//               A multi-sport turf's construction must take into account elements
//               that guarantee player safety, longevity, and adaptability to
//               different sports. High-grade synthetic materials are used to
//               create the surface, which provides a good mix of cushioning and
//               grip for a variety of sports, including basketball, tennis, and
//               soccer. For a variety of uses, our multi-sport turf may offer a
//               dependable, entertaining, and safe playing surface.
//             </span>
//           </FadeIn>
//         </Container>
//       </div>
//       <VideoCarousel title="Multi-sports Turf" carouselImages={cricketItems} />
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
//                     src="https://storage.googleapis.com/a1aa/image/9FeWw1HWmeg2WkAUfZBmvn8eZTSzLKm82E1PA3z0jo4AYm6OB.jpg"
//                     className="lg:w-[400px] w-[250px]  h-full object-cover transition-transform duration-500 ease-out scale-105 transform group-hover:scale-100"
//                     alt="Director"
//                   />
//                 </AnimateCard>

//                 {/* Inner Light Effect */}
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none">
//                   <div className="absolute inset-0 bg-black/25" />
//                   <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-purple-800/20 to-yellow-500/50" />
//                   <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-purple-800/20 to-yellow-500/50" />

//                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/45 to-black/50" />
//                   {/* Text Overlay */}
//                   <div className="absolute inset-0 flex  items-end justify-center duration-500 ease-out p-4">
//                     <p className="lg:text-xl flex-col flex text-white bg-transparent p-2 font-primary tracking-[3px] w-full text-center">
//                       <span className="text-secondary"> MULTI-SPORT TURF</span>
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
//               ESSENTIAL CONSIDERATIONS FOR
//               <span className="text-secondary"> MULTI-SPORT TURF</span>
//             </p>
//           </AnimateCard>

//           {/* Main Content */}
//           <div className="flex flex-col gap-10   text-white font-secondary">
//             <AnimateCard>
//               <p className="md:text-2xl text-lg">
//                 The turf should be designed with customizable dimensions to
//                 accommodate multiple activities, typically ranging from 20
//                 meters (65.6 feet) to 40 meters (131 feet) in length and 10
//                 meters (32.8 feet) to 20 meters (65.6 feet) in width, depending
//                 on the specific sports it will host.
//               </p>
//             </AnimateCard>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };
// export default MultiSportsTurf;

// const cricketItems = [
//   {
//     poster: "/Football/Football-01.webp",
//     name: "Airplane",
//     blurHash: "LE8hnHRk00$_HXoboxR;.TWZIWs*",
//   },
//   {
//     poster:
//       "https://static.wixstatic.com/media/4c43d3_ae21e210035347fa8c17e92f7d623b6d~mv2.png/v1/crop/x_167,y_0,w_1751,h_1167/fill/w_416,h_278,fp_0.60_0.31,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-04.png",
//     name: "Family man",
//     blurHash: "LQEgpQIAB-xs9+Rlbot9~mouIVoL",
//   },
//   {
//     poster: "/Football/Football-02.webp",
//     name: "Laboratory",
//     blurHash: "LfE3;nWCRiWB^-t7WAR*xcoMogf6",
//   },
//   {
//     poster:
//       "https://static.wixstatic.com/media/4c43d3_93db6e485dbf44e58148ef38aa5db9d1~mv2.png/v1/fill/w_420,h_662,fp_0.52_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/Indoor-06.png",
//     name: "Napoleon",
//     blurHash: "L17n]o4T~p0100yoTJxZ00~p4T_M",
//   },
//   {
//     poster:
//       "https://static.wixstatic.com/media/4c43d3_26585cf912084d5ab27ee8ae33a06fbd~mv2.png/v1/crop/x_208,y_0,w_1669,h_1167/fill/w_466,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-03.png",
//     name: "Person in Darkness",
//     blurHash: "LE8hnHRk00$_HXoboxR;.TWZIWs*",
//   },
//   {
//     poster:
//       "https://static.wixstatic.com/media/4c43d3_cbfa6596676b4692a4f70ba8069553ba~mv2.png/v1/fill/w_488,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Volleyball%20court-04.png",
//     name: "Scary Building",
//     blurHash: "L17n]o4T~p0100yoTJxZ00~p4T_M",
//   },
//   {
//     poster:
//       "https://static.wixstatic.com/media/4c43d3_a42f5b921efb4985b64fa716c98ed47b~mv2.png/v1/fill/w_466,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Indoor-03.png",
//     name: "Stars",
//     blurHash: "L77n:SDm4U%K8|%KyCMz01tO?@W=",
//   },
// ];

import { Footer } from "../footer";
import Certificates from "./pageAnimation/certificates";
import { Container } from "./pageAnimation/container";
import { FadeIn } from "./pageAnimation/fade-in";
import { Hero } from "./pageAnimation/hero";
import { VideoCarousel } from "./pageAnimation/video-carousel";
import { motion } from "framer-motion";
import { useEffect } from "react";
import TabSEO from "../seoOptimize/index";
import { FaCheckCircle } from "react-icons/fa";
import Testimonials from "../testimonial";
import WhatsAppButton from "../WhatsappButton";

const MultiSportsTurf = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="">
      <WhatsAppButton />
      <TabSEO
        title="Multi-Sports Turf Builders for All Games | GameOnSolution - South India’s Best Sports Infrastructure"
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
            <p className="text-secondary font-primary font-normal">
              MULTI-SPORT TURF
            </p>
          </FadeIn>
          <FadeIn>
            <p className="text-secondary">
              ESSENTIAL CONSIDERATIONS FOR MULTI-SPORT TURF
            </p>
          </FadeIn>
          <FadeIn>
            <span className="md:text-2xl text-lg">
              Constructing a high-performance multi-sport turf requires careful
              consideration of player safety, durability, and versatility across
              various games. Using premium synthetic materials, the surface is
              engineered to offer the right balance of cushioning and grip,
              making it suitable for sports like basketball, tennis, and
              football. GameOn Solution specializes in multi-sport turf
              installation that meets international standards and adapts
              seamlessly to both indoor and outdoor environments. Whether for
              recreational use or organized play, our turfs deliver a reliable,
              engaging, and safe playing experience across multiple sports
              disciplines.
            </span>
          </FadeIn>
        </Container>
      </div>
      <VideoCarousel title="Multi-sports Turf" carouselImages={cricketItems} />
      <Testimonials />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Certificates />
      </motion.div>

      {/* ===================================== */}
      {/* NEW: Multi Sports Marketing Content */}
      {/* ===================================== */}
      <section className="px-10 md:px-20 lg:px-[7.5rem] py-20 text-white font-secondary bg-background/50">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl md:text-5xl font-primary text-secondary uppercase">
            Multi Sports Turf Construction by GameOn Solution
          </h2>
          <p className="mt-4 md:text-xl text-lg text-gray-200">
            <strong>One Turf. Endless Possibilities.</strong> At GameOn
            Solution, we believe that great play shouldn’t be limited to one
            game.
          </p>
          <p className="mt-3 md:text-lg text-gray-300">
            Our Multi Sports Turf systems are designed to host multiple sports -
            football, cricket, volleyball, tennis, and more - all on a single,
            versatile surface engineered for performance, durability, and
            all-weather play. Whether you manage a school, academy, resort, or
            community ground, our multi-sport surfaces help you maximize space
            and engagement while ensuring professional-level quality for every
            match.
          </p>
          <p className="mt-3 md:text-lg text-gray-300">
            Across Tamil Nadu and South India, GameOn has become the go-to brand
            for custom multi-sport turf installations that bring energy,
            versatility, and style to every venue.
          </p>
        </motion.div>

        {/* Why It Matters */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl md:text-3xl font-primary text-secondary">
              Why Multi Sports Turf Matters
            </h3>
            <p className="text-gray-300">
              In today’s world, space is valuable - and so is versatility. A
              multi-sport turf gives you the power to host multiple games on a
              single surface, making it perfect for institutions, academies, and
              private developments that want to promote fitness, community, and
              play without needing multiple grounds.
            </p>
            <p className="text-gray-300">
              Whether it’s kids switching between cricket and football, or
              professionals training for multiple sports, GameOn’s turf systems
              are built to perform across disciplines.{" "}
              <strong>
                Our goal? To make every square foot of your turf count.
              </strong>
            </p>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src="/Football/Football-02.webp"
            alt="Multi Sports Turf"
            className="rounded-2xl border border-white/10 shadow-xl w-full h-full object-cover"
          />
        </div>

        {/* Why Choose GameOn */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-primary text-secondary mb-4">
            Why Choose GameOn Solution for Multi Sports Turf Construction?
          </h3>
          <p className="text-gray-300 mb-4">
            We don’t just install turf - we engineer sports ecosystems. Here’s
            why South India trusts GameOn Solution:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Custom Layout Design - Tailor-made turf plans for your available area and sports lineup.",
              "All-Weather Performance - Advanced drainage systems for consistent play - rain or shine.",
              "Multi-Activity Ready - Ideal for football, cricket, volleyball, tennis, and more.",
              "Eco-Friendly AQUA Turf - Our signature sustainable grass option reduces heat and maintenance.",
              "International Standards - Surfaces comply with FIFA, ITF, and ASTM benchmarks.",
              "End-to-End Construction - From base work to netting, lighting, and branding.",
              "Low Maintenance, High Durability - Built to last 8–12 years under active usage.",
            ].map((t, i) => (
              <div
                key={i}
                className="flex gap-3 items-start bg-white/5 border border-white/10 rounded-xl p-4"
              >
                <FaCheckCircle className="mt-1" />
                <span className="text-gray-200">{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Specs Table */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-primary text-secondary mb-6">
            Specifications & Design Options
          </h3>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-left text-gray-200">
              <thead className="bg-white/10">
                <tr>
                  <th className="py-3 px-4">Feature</th>
                  <th className="py-3 px-4">Specification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="py-3 px-4">Base Construction</td>
                  <td className="py-3 px-4">
                    Compacted aggregate + RCC concrete / Asphalt
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Surface Material</td>
                  <td className="py-3 px-4">
                    Synthetic turf (AQUA Eco Turf or Hybrid Grass)
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Turf Pile Height</td>
                  <td className="py-3 px-4">
                    30mm–60mm (customizable per sport)
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Infill Type</td>
                  <td className="py-3 px-4">
                    Silica sand / Rubber granules (optional)
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Line Marking</td>
                  <td className="py-3 px-4">
                    Multi-color permanent lines for 2–4 sports
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Lighting</td>
                  <td className="py-3 px-4">200–400 lux LED floodlights</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Drainage System</td>
                  <td className="py-3 px-4">
                    Multi-channel system with slope calibration
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Fencing</td>
                  <td className="py-3 px-4">
                    12–15 ft mesh fencing for ball control
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Lifespan</td>
                  <td className="py-3 px-4">
                    8–12 years with regular brushing & cleaning
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Maintenance Support</td>
                  <td className="py-3 px-4">
                    Available via GameOn Service Team
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Who Benefits */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-primary text-secondary mb-4">
            Who Can Benefit From Multi Sports Turf
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Schools & Colleges - Multiple sports, one playground, endless fun.",
              "Sports Academies - Training zones for football, tennis, and cricket all in one facility.",
              "Corporate Campuses - Employee recreation zones for diverse sports events.",
              "Gated Communities - Boost engagement with a vibrant, multi-sport amenity.",
              "Resorts & Clubs - Add versatile recreational experiences for guests.",
              "Private Owners - Create an adaptable backyard sports zone for family and friends.",
            ].map((t, i) => (
              <div
                key={i}
                className="flex gap-3 items-start bg-white/5 border border-white/10 rounded-xl p-4"
              >
                <FaCheckCircle className="mt-1" />
                <span className="text-gray-200">{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-primary text-secondary mb-4">
            How GameOn Builds a World-Class Multi Sports Turf
          </h3>
          <ol className="list-decimal pl-5 space-y-3 text-gray-200">
            <li>
              <strong>Consultation & Layout Planning:</strong> Free site survey
              to understand space, soil conditions, and sports preferences.
              Designers create a 2D/3D plan to show how sports share the turf
              seamlessly.
            </li>
            <li>
              <strong>Civil Base Construction:</strong> Robust foundation with
              slope calibration for durability and perfect water flow.
            </li>
            <li>
              <strong>Turf Installation:</strong> High-performance synthetic
              turf (AQUA Eco Turf or hybrid) laid precisely and infilled for
              optimal bounce and traction.
            </li>
            <li>
              <strong>Line Marking & Branding:</strong> Permanent multi-color
              lines for each sport, with optional logo branding and aesthetic
              customization.
            </li>
            <li>
              <strong>Lighting, Fencing & Accessories:</strong> LED floodlights,
              high-grade fencing, and optional seating or shade structures.
            </li>
            <li>
              <strong>Final Handover:</strong> Complete playability test and
              ready-to-play arena - backed by GameOn’s quality assurance and
              service support.
            </li>
          </ol>
        </div>
      </section>

      {/* Existing dimensions block */}
      <div className="flex gap-10 lg:flex-row flex-col px-10 md:px-20 lg:px-[7.5rem] py-20">
        <div className="flex  md:flex-row flex-col gap-12 ">
          <div className="relative w-full  flex items-center justify-center ">
            <div className="relative flex items-center">
              <div className="w-full h-full overflow-hidden group">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <img
                    src="https://storage.googleapis.com/a1aa/image/9FeWw1HWmeg2WkAUfZBmvn8eZTSzLKm82E1PA3z0jo4AYm6OB.jpg"
                    className="lg:w-[400px] w-[250px]  h-full object-cover transition-transform duration-500 ease-out scale-105 transform group-hover:scale-100"
                    alt="Multi Sports"
                  />
                </motion.div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none">
                  <div className="absolute inset-0 bg-black/25" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-purple-800/20 to-yellow-500/50" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/45 to-black/50" />
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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white  uppercase leading-tight">
              ESSENTIAL CONSIDERATIONS FOR
              <span className="text-secondary"> MULTI-SPORT TURF</span>
            </p>
          </motion.div>

          <div className="flex flex-col gap-10   text-white font-secondary">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="md:text-2xl text-lg">
                The turf should be designed with customizable dimensions to
                accommodate multiple activities, typically ranging from 20
                meters (65.6 feet) to 40 meters (131 feet) in length and 10
                meters (32.8 feet) to 20 meters (65.6 feet) in width, depending
                on the specific sports it will host.
              </p>
            </motion.div>
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
    poster: "/Football/Football-01.webp",
    name: "Multi-Sports Turf",
    blurHash: "LE8hnHRk00$_HXoboxR;.TWZIWs*",
  },
  {
    poster: "/blog/Blog41.webp",
    name: "Multi-Sports Turf",
    blurHash: "LQEgpQIAB-xs9+Rlbot9~mouIVoL",
  },
  {
    poster: "/Football/Football-05.webp",
    name: "Multi-Sports Turf",
    blurHash: "LfE3;nWCRiWB^-t7WAR*xcoMogf6",
  },
  {
    poster: "/Football/1.webp",
    name: "Multi-Sports Turf",
    blurHash: "L17n]o4T~p0100yoTJxZ00~p4T_M",
  },
  {
    poster: "/blog/Blog43.webp",
    name: "Multi-Sports Turf",
    blurHash: "LE8hnHRk00$_HXoboxR;.TWZIWs*",
  },
  {
    poster: "/Football/Football-08.webp",
    name: "Multi-Sports Turf",
    blurHash: "L17n]o4T~p0100yoTJxZ00~p4T_M",
  },
  {
    poster: "/homepageSlideImages/3.jpg",
    name: "Multi-Sports Turf",
    blurHash: "L77n:SDm4U%K8|%KyCMz01tO?@W=",
  },
];
