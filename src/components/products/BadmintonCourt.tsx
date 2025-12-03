// import { Footer } from "../footer";
// import Certificates from "./pageAnimation/certificates";
// import { Container } from "./pageAnimation/container";
// import { FadeIn } from "./pageAnimation/fade-in";
// import { Hero } from "./pageAnimation/hero";
// import { VideoCarousel } from "./pageAnimation/video-carousel";
// import AnimateCard from "../animateCard";
// import { useEffect } from "react";
// import TabSEO from "../seoOptimize/index";

// const BadmintonCourt = () => {
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);
//   return (
//     <div className="">
//       <TabSEO
//         title="Badminton Court Construction with Synthetic Turf | GameOnSolution - South India’s Best Sports Infrastructure"
//         description="We build high-performance badminton courts with anti-slip synthetic flooring for the best playing experience."
//       />
//       <div className="bg-background relative z-10 select-none">
//         <Hero
//           title={"BADMINTON COURT"}
//           subtitle={"FINDS ITS MARK"}
//           bgImgUrl={"/badminton/2.webp"}
//         />
//         <Container className="relative z-10 space-y-10  md:max-w-[1000px] max-w-[692px]   py-36 text-3xl font-bold text-white md:text-4xl ">
//           <FadeIn>
//             <p className="text-secondary font-primary">BADMINTON COURT</p>
//           </FadeIn>
//           <FadeIn>
//             <span className="text-secondary">
//               ESSENTIAL CONSIDERATIONS FOR BADMINTON COURT
//             </span>
//           </FadeIn>
//           <FadeIn>
//             <span className="md:text-2xl text-lg">
//               Creating a safe and professional environment for badminton players
//               offers a remarkable business opportunity. With communities
//               focusing on sports and fitness, the demand for high-quality
//               badminton courts is growing. Opting for synthetic flooring ensures
//               enhanced safety and durability, minimizing the risk of injuries
//               while improving the playing experience. These courts not only
//               provide a flat and standardized playing surface but also include
//               protective features like proper lighting and boundary markers to
//               elevate the overall game quality.
//             </span>
//           </FadeIn>
//         </Container>
//       </div>
//       <VideoCarousel title="Badminton Court" carouselImages={BadmintonItems} />
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
//                     src="https://storage.googleapis.com/a1aa/image/cvbd5aLfOxy7DChiQg9lfnjfSZjMQJ28O2Vf7zFD32eOiUXeE.jpg"
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
//                       <span className="text-secondary">BADMINTON COURT</span>
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
//               BADMINTON COURT DIMENSIONS ACCORDING TO GUIDELINES
//               <span className="text-secondary"> OFFICIAL GUIDELINES</span>
//             </p>
//           </AnimateCard>

//           <div className="flex flex-col gap-10 text-white font-secondary">
//             <AnimateCard>
//               <p className="md:text-2xl text-lg">
//                 A standard badminton court measures 44 feet (13.4 meters) in
//                 length and 20 feet (6.1 meters) in width for doubles matches,
//                 while for singles matches, the width is reduced to 17 feet (5.18
//                 meters). The court is divided by a net that is 5 feet (1.55
//                 meters) high in the center, and the playing area should adhere
//                 to these precise dimensions to ensure fair play.
//               </p>
//             </AnimateCard>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };
// export default BadmintonCourt;
// const BadmintonItems = [
//   {
//     poster: "/badminton/1.webp",
//     name: "Airplane",
//     blurHash: "LQEqA]D%B-x?9+Rlbot9~mouIVj@",
//   },
//   {
//     poster: "/badminton/2.webp",
//     name: "Family man",
//     blurHash: "LdIY5eVtnQs:00WEafR+~BofbbR*",
//   },
//   {
//     poster: "/badminton/3.webp",
//     name: "Laboratory",
//     blurHash: "LfE3;nWCRiWB^-t7WAR*xcoMogf6",
//   },
//   {
//     poster: "/badminton/5.webp",
//     name: "Napoleon",
//     blurHash: "L6Ax%~MkBB-l03o_Dqx?Q2%b?CNe",
//   },
//   {
//     poster: "/badminton/6.webp",
//     name: "Person in Darkness",
//     blurHash: "LfE3;nWCRiWB^-t7WAR*xcoMogf6",
//   },
//   {
//     poster: "/badminton/7.webp",
//     name: "Scary Building",
//     blurHash: "L6Ax%~MkBB-l03o_Dqx?Q2%b?CNe",
//   },
//   {
//     poster: "/badminton/4.webp",
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
import { useEffect } from "react";
import TabSEO from "../seoOptimize/index";
import { motion } from "framer-motion";
import Testimonials from "../testimonial";
import { FaCheckCircle } from "react-icons/fa";
import Awards from "../Awards";
import WhatsAppButton from "../WhatsappButton";

const BadmintonCourt = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="">
      <WhatsAppButton />
      <TabSEO
        title="Badminton Court Construction with Synthetic Turf | GameOnSolution - South India’s Best Sports Infrastructure"
        description="We build high-performance badminton courts with anti-slip synthetic flooring for the best playing experience."
      />

      <div className="bg-background relative z-10 select-none">
        <Hero
          title={"BADMINTON COURT"}
          subtitle={"FINDS ITS MARK"}
          bgImgUrl={"/badminton/Badminton-001.webp"}
        />

        <Container className="relative z-10 space-y-10 md:max-w-[1000px] max-w-[692px] py-36 text-3xl font-bold text-white md:text-4xl ">
          <FadeIn>
            <p className="text-secondary font-primary font-normal">
              BADMINTON COURT
            </p>
          </FadeIn>
          <FadeIn>
            <span className="text-secondary">
              ESSENTIAL CONSIDERATIONS FOR BADMINTON COURT
            </span>
          </FadeIn>
          <FadeIn>
            <span className="md:text-2xl text-lg">
              At GameOn Solution, we understand that building high-quality
              badminton courts is a growing business opportunity, especially as
              more communities prioritize sports and fitness. Our professional
              badminton court construction services focus on creating a safe and
              performance-driven environment for players. By using synthetic
              badminton court flooring, we enhance safety, reduce injury risks,
              and ensure long-lasting durability. These indoor and outdoor
              courts come with standardized surfaces, proper lighting, and
              clearly marked boundaries—delivering a premium playing experience
              for both recreational and competitive use.
            </span>
          </FadeIn>
        </Container>
      </div>

      <VideoCarousel title="Badminton Court" carouselImages={BadmintonItems} />

      <Certificates />

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

      {/* ============================== */}
      {/* NEW: Marketing Content Section */}
      {/* ============================== */}
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
            Badminton Court Construction – GameOn Solution
          </h2>
          <p className="mt-4 md:text-xl text-lg text-gray-200">
            <strong>
              Play Without Limits — Build Your Dream Badminton Court.
            </strong>
          </p>
          <p className="mt-3 md:text-lg text-gray-300">
            We design and build professional badminton courts that combine
            precision engineering, premium materials, and aesthetic design.
            Whether you’re planning an indoor badminton academy, a school sports
            hall, or a personal court at home, we make sure every game feels
            world-class. From surface selection to court lighting and line
            marking, every detail is built to BWF standards so you play like a
            pro, every single day.
          </p>
          <p className="mt-3 text-gray-300">
            👉 Serving excellence across Tamil Nadu, Karnataka & South India.
          </p>
        </motion.div>

        {/* Why Choose GameOn */}
        <div className="mt-14">
          <h3 className="text-2xl md:text-3xl font-primary text-secondary mb-4">
            Why Choose GameOn Solution for Badminton Court Construction?
          </h3>
          <p className="text-gray-300 mb-4">
            Your badminton court isn’t just a floor — it’s where athletes grow,
            train, and compete. That’s why choosing an expert construction
            partner matters. Here’s why South India trusts GameOn Solution:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "BWF-Standard Design & Precision — Exact specifications matching professional layouts.",
              "Indoor & Outdoor Expertise — Flooring and drainage tailored to your conditions.",
              "Premium Flooring Systems — Wooden, PVC vinyl, synthetic PU, or acrylic (shock-absorbent, anti-slip).",
              "End-to-End Project Handling — Soil prep, leveling, flooring, nets, poles, lighting — all in-house.",
              "Durable & Eco-Friendly Materials — Long-lasting, non-toxic, AQUA eco-friendly solutions.",
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

        {/* Types of Courts */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h4 className="text-xl font-bold text-secondary mb-2">
              Indoor Badminton Courts
            </h4>
            <p className="text-gray-300 mb-2">
              <strong>Flooring:</strong> Wooden, PVC Vinyl, or PU
            </p>
            <p className="text-gray-300 mb-2">
              <strong>Features:</strong> Shock-absorbent, anti-slip, low
              maintenance
            </p>
            <p className="text-gray-300 mb-2">
              <strong>Lighting:</strong> LED glare-free badminton setup
            </p>
            <p className="text-gray-300">
              <strong>Ideal For:</strong> Tournaments, training, professional
              play
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h4 className="text-xl font-bold text-secondary mb-2">
              Outdoor Badminton Courts
            </h4>
            <p className="text-gray-300 mb-2">
              <strong>Flooring:</strong> Acrylic or Synthetic PU
            </p>
            <p className="text-gray-300 mb-2">
              <strong>Features:</strong> Weather-proof, UV resistant, anti-fade
              paint lines
            </p>
            <p className="text-gray-300">
              <strong>Ideal For:</strong> Schools, community areas, residential
              complexes
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h4 className="text-xl font-bold text-secondary mb-2">
              Hybrid Multi-Sport Courts
            </h4>
            <p className="text-gray-300">
              Combine badminton with volleyball, futsal, or basketball lines —
              maximizing space and utility.
            </p>
          </div>
        </div>

        {/* Tech Specs & Flooring Options */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-primary text-secondary mb-6">
            Technical Specifications & Flooring Options
          </h3>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-left text-gray-200">
              <thead className="bg-white/10">
                <tr>
                  <th className="py-3 px-4">Court Type</th>
                  <th className="py-3 px-4">Surface Material</th>
                  <th className="py-3 px-4">Key Benefits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="py-3 px-4">Indoor</td>
                  <td className="py-3 px-4">Wooden Flooring</td>
                  <td className="py-3 px-4">
                    Best for bounce & shock absorption
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Indoor</td>
                  <td className="py-3 px-4">PVC Vinyl</td>
                  <td className="py-3 px-4">Affordable, smooth play feel</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Outdoor</td>
                  <td className="py-3 px-4">Acrylic / PU</td>
                  <td className="py-3 px-4">Weatherproof, anti-slip surface</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Hybrid</td>
                  <td className="py-3 px-4">PU + Vinyl</td>
                  <td className="py-3 px-4">Multi-sport flexibility</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-300 mt-3">
            All courts built by GameOn Solution meet international standards for
            line marking, bounce control, and surface friction.
          </p>
        </div>

        {/* Process */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-primary text-secondary mb-6">
            Our 4-Step Badminton Court Construction Process
          </h3>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-left text-gray-200">
              <thead className="bg-white/10">
                <tr>
                  <th className="py-3 px-4">Step</th>
                  <th className="py-3 px-4">Process</th>
                  <th className="py-3 px-4">Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="py-3 px-4">1. Consultation & Site Survey</td>
                  <td className="py-3 px-4">
                    We assess site space, flooring needs, and drainage setup.
                  </td>
                  <td className="py-3 px-4">
                    Accurate design & cost estimate.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">2. Base Construction</td>
                  <td className="py-3 px-4">
                    Ground leveling, compaction, slope adjustment.
                  </td>
                  <td className="py-3 px-4">
                    Solid foundation for smooth play.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">3. Flooring Installation</td>
                  <td className="py-3 px-4">
                    Lay chosen surface (wood, PVC, PU, or acrylic).
                  </td>
                  <td className="py-3 px-4">
                    Professional, non-slip court surface.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">4. Marking & Finishing Touches</td>
                  <td className="py-3 px-4">
                    Line painting, pole installation, net setup, lighting.
                  </td>
                  <td className="py-3 px-4">
                    Tournament-ready badminton court.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-300 mt-3">
            Available for projects across Tamil Nadu, Karnataka, Telangana &
            Andhra Pradesh.
          </p>
        </div>

        {/* Who We Build For */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-primary text-secondary mb-4">
            Who We Build For
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Schools & Colleges — safe and durable courts for students.",
              "Sports Academies — professional-level training surfaces.",
              "Gated Communities — lifestyle amenities for residents.",
              "Private Homes & Villas — personalized courts for recreation.",
              "Developers & Clubs — value-adding facilities for projects.",
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

        {/* Promise */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-primary text-secondary mb-3">
            Our Promise of Quality
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-200">
            {[
              "Designed for high performance & comfort",
              "Built with eco-conscious materials",
              "Supported by maintenance & warranty services",
            ].map((t, i) => (
              <li key={i} className="flex gap-3 items-start">
                <FaCheckCircle className="mt-1" />
                {t}
              </li>
            ))}
          </ul>
          <p className="text-gray-300 mt-4">
            Every square foot reflects our belief — that great games begin on
            great surfaces.
          </p>
        </div>
      </section>

      {/* DIMENSIONS */}
      <div className="flex gap-10 lg:flex-row flex-col px-10 md:px-20 lg:px-[7.5rem] py-20">
        <div className="flex md:flex-row flex-col gap-12">
          <div className="relative w-full flex items-center justify-center">
            <div className="relative flex items-center">
              <div className="w-full h-full overflow-hidden group">
                <motion.img
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  src="https://storage.googleapis.com/a1aa/image/cvbd5aLfOxy7DChiQg9lfnjfSZjMQJ28O2Vf7zFD32eOiUXeE.jpg"
                  className="lg:w-[400px] w-[250px] h-full object-cover transition-transform duration-500 ease-out scale-105 transform group-hover:scale-100"
                  alt="Badminton Court"
                />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none">
                  <div className="absolute inset-0 bg-black/25" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-purple-800/20 to-yellow-500/50" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/45 to-black/50" />
                  <div className="absolute inset-0 flex items-end justify-center duration-500 ease-out p-4">
                    <p className="lg:text-xl flex-col flex text-white bg-transparent p-2 font-primary tracking-[3px] w-full text-center">
                      <span className="text-secondary">BADMINTON COURT</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-start gap-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white uppercase leading-tight"
          >
            BADMINTON COURT DIMENSIONS ACCORDING TO{" "}
            <span className="text-secondary">OFFICIAL GUIDELINES</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:text-2xl text-lg text-white font-secondary"
          >
            A standard badminton court measures 44 feet (13.4 meters) in length
            and 20 feet (6.1 meters) in width for doubles matches, while for
            singles matches, the width is reduced to 17 feet (5.18 meters). The
            net is 5 feet (1.55 meters) high in the center. The playing area
            should adhere to these precise dimensions to ensure fair play.
          </motion.p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BadmintonCourt;

const BadmintonItems = [
  {
    poster: "/badminton/Badminton-002.webp",
    name: "Airplane",
    blurHash: "LQEqA]D%B-x?9+Rlbot9~mouIVj@",
  },
  {
    poster: "/badminton/Badminton-003.webp",
    name: "Family man",
    blurHash: "LdIY5eVtnQs:00WEafR+~BofbbR*",
  },
  {
    poster: "/badminton/Badminton-004.webp",
    name: "Laboratory",
    blurHash: "LfE3;nWCRiWB^-t7WAR*xcoMogf6",
  },
  {
    poster: "/badminton/Badminton-005.webp",
    name: "Napoleon",
    blurHash: "L6Ax%~MkBB-l03o_Dqx?Q2%b?CNe",
  },
  {
    poster: "/badminton/Badminton-006.webp",
    name: "Person in Darkness",
    blurHash: "LfE3;nWCRiWB^-t7WAR*xcoMogf6",
  },
  {
    poster: "/badminton/Badminton-007.webp",
    name: "Scary Building",
    blurHash: "L6Ax%~MkBB-l03o_Dqx?Q2%b?CNe",
  },
  {
    poster: "/badminton/4.webp",
    name: "Scary Building",
    blurHash: "L6Ax%~MkBB-l03o_Dqx?Q2%b?CNe",
  },
];
