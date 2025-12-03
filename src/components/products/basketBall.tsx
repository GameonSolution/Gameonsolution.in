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

import Certificates from "./pageAnimation/certificates";
import { Container } from "./pageAnimation/container";
import { FadeIn } from "./pageAnimation/fade-in";
import { Hero } from "./pageAnimation/hero";
import { VideoCarousel } from "./pageAnimation/video-carousel";
import { motion } from "framer-motion";
import { useEffect } from "react";
import TabSEO from "../seoOptimize/index";
import Testimonials from "../testimonial";
import { FaCheckCircle } from "react-icons/fa";
import Awards from "../Awards";
import { Footer } from "../footer";
import WhatsAppButton from "../WhatsappButton";

const BasketBallCourt = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <WhatsAppButton />
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

      <Testimonials />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Certificates />
        <Awards />
      </motion.div>

      {/* ===================================== */}
      {/* NEW: Marketing + Specs + Process Blocks */}
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
            Basketball Court Construction by GameOn Solution
          </h2>
          <p className="mt-4 md:text-xl text-lg text-gray-200">
            <strong>
              Where Passion Meets Precision - Build Courts That Inspire
              Champions.
            </strong>{" "}
            A basketball court isn’t just concrete and paint - it’s a stage
            where ambition meets skill.
          </p>
          <p className="mt-3 md:text-lg text-gray-300">
            At GameOn Solution, we design and build professional-grade
            basketball courts engineered for precision, performance, and
            long-term durability - whether indoor or outdoor. From schools and
            training academies to corporate arenas and private clubs, our team
            delivers complete turnkey solutions across Tamil Nadu and South
            India. Every project reflects our mission to create world-class
            spaces that ignite every athlete’s love for the game.
          </p>
        </motion.div>

        {/* Our Story */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl md:text-3xl font-primary text-secondary">
              Our Story - Building the Foundation for South India’s Future
              Athletes
            </h3>
            <p className="text-gray-300">
              Basketball in India is growing fast - and GameOn Solution is
              helping that momentum take shape. We started with a vision: to
              make high-quality, affordable basketball courts accessible to
              schools, universities, and communities across South India.
            </p>
            <p className="text-gray-300">
              From the smooth bounce of the ball to the perfect grip underfoot,
              every detail of our court design is crafted to deliver the
              pro-level experience athletes deserve. We’ve worked with
              institutions, academies, and sports investors who share one common
              dream - to raise the standard of Indian basketball infrastructure.
            </p>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src="/basketBall/Basketball-002.webp"
            alt="GameOn Basketball Court"
            className="rounded-2xl border border-white/10 shadow-xl w-full h-full object-cover"
          />
        </div>

        {/* Why Choose */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-primary text-secondary mb-4">
            Why Choose a GameOn Basketball Court?
          </h3>
          <p className="text-gray-300 mb-4">
            Building a court is one thing. Building a court that lasts,
            performs, and inspires - that’s GameOn engineering.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "All-weather courts built for Indian climates",
              "Certified materials meeting International standards",
              "UV-resistant surface coatings for long life",
              "Slip-resistant & shock-absorbing surface layers",
              "Custom line markings & color branding",
              "LED lighting & fencing integration for 24x7 play",
              "Maintenance support & warranty coverage",
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
          <p className="text-gray-300 mt-4 italic">
            Every bounce feels better when it’s on a GameOn-built court.
          </p>
        </div>

        {/* Specs Table */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-primary text-secondary mb-6">
            Court Specifications
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
                  <td className="py-3 px-4">Court Type</td>
                  <td className="py-3 px-4">
                    Outdoor Acrylic / PU System / Turf Hybrid
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Standard Size</td>
                  <td className="py-3 px-4">28m × 15m (FIBA regulation)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Base Layer</td>
                  <td className="py-3 px-4">
                    Compacted sub-base + RCC concrete or asphalt
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Surface Options</td>
                  <td className="py-3 px-4">
                    Acrylic Cushion System / PU Flooring / Synthetic Turf
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Coating Thickness</td>
                  <td className="py-3 px-4">3–8 mm (multi-layer)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Color Options</td>
                  <td className="py-3 px-4">
                    Red, Green, Blue, or Dual Tone Custom
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Lighting</td>
                  <td className="py-3 px-4">300–400 lux LED floodlights</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Fencing</td>
                  <td className="py-3 px-4">
                    12–15 ft high mesh for ball control
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Lifespan</td>
                  <td className="py-3 px-4">8–12 years (with maintenance)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Add-ons</td>
                  <td className="py-3 px-4">
                    Branding, logo painting, pole padding, seating zone
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Who We Build For */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-primary text-secondary mb-4">
            Who We Build For
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Schools & Colleges - Encourage student participation and tournaments",
              "Sports Academies - Train athletes on pro-standard surfaces",
              "Corporate Campuses - Employee recreation courts for engagement and health",
              "Private Clubs & Gated Communities - Premium sports infrastructure for members",
              "Individual Clients - Compact practice courts for villas or rooftops",
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
            Our Proven Construction Process
          </h3>
          <ol className="list-decimal pl-5 space-y-3 text-gray-200">
            <li>
              <strong>Consultation & Site Assessment:</strong> We visit your
              location, analyze ground conditions, and discuss your design,
              color, and layout preferences.
            </li>
            <li>
              <strong>Base Work:</strong> Our engineers prepare the sub-base
              using compacted aggregate or RCC to ensure perfect leveling and
              durability.
            </li>
            <li>
              <strong>Surface Installation:</strong> Multiple layers of cushion
              acrylic or PU coating for bounce, traction, and weather
              protection.
            </li>
            <li>
              <strong>Court Marking & Accessories:</strong> Professional
              FIBA-standard markings, backboard setup, pole padding, and
              branding options.
            </li>
            <li>
              <strong>Lighting & Fencing Setup:</strong> LED floodlights and
              durable fencing systems for safety and round-the-clock play.
            </li>
            <li>
              <strong>Final Handover & Warranty:</strong> Ready-to-play court
              tested for grip, bounce, and finish - backed by a maintenance
              guide and performance warranty.
            </li>
          </ol>
        </div>
      </section>

      {/* Dimensions block retained from original */}
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
                  alt="Basketball Court"
                />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none">
                  <div className="absolute inset-0 bg-black/25" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-purple-800/20 to-yellow-500/50" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/45 to-black/50" />
                  <div className="absolute inset-0 flex items	end justify-center duration-500 ease-out p-4">
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
