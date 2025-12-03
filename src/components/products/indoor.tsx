// import { Footer } from "../footer";
// import Certificates from "./pageAnimation/certificates";
// import { Container } from "./pageAnimation/container";
// import { FadeIn } from "./pageAnimation/fade-in";
// import { Hero } from "./pageAnimation/hero";
// import { VideoCarousel } from "./pageAnimation/video-carousel";
// import AnimateCard from "../animateCard";
// import { useEffect } from "react";
// import TabSEO from "../seoOptimize/index";

// const IndoorTurf = () => {
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);
//   return (
//     <div className="">
//       <TabSEO
//         title="Indoor Turf Builders in South India | GameOnSolution - South India’s Best Sports Infrastructure"
//         description="Get custom indoor sports turfs with advanced synthetic materials for year-round gameplay and training."
//       />
//       <div className="bg-background relative z-10 select-none">
//         <Hero
//           title={"INDOOR TURF "}
//           subtitle={"FINDS ITS MARK"}
//           bgImgUrl={
//             "https://static.wixstatic.com/media/4c43d3_f327577b6eca48acb7752d3d746c1a58~mv2.jpeg/v1/fill/w_1216,h_257,al_c,q_80,enc_auto/bg.jpeg "
//           }
//         />
//         <Container className="relative z-10 space-y-10  md:max-w-[1000px] max-w-[692px]   py-36 text-3xl font-bold text-white md:text-4xl ">
//           <FadeIn>
//             <p className="text-secondary font-primary">INDOOR TURF</p>
//           </FadeIn>
//           <FadeIn>
//             <p className="text-secondary">
//               ESSENTIAL CONSIDERATIONS FOR INDOOR TURF
//             </p>
//           </FadeIn>
//           <FadeIn>
//             <span className="md:text-2xl text-lg">
//               When constructing an indoor turf, key considerations must be
//               Addressed to ensure functionality, durability, and player safety.
//               Organizations like FIFA, FIBA, FIH provide recommended dimensions
//               And specifications to ensure that indoor facilities meet the
//               Requirements for professional or competitive play. However, for
//               multi-purpose or recreational indoor turfs, the dimensions are
//               often customized based on the intended use, available space, and
//               client requirements.
//             </span>
//           </FadeIn>
//         </Container>
//       </div>
//       <VideoCarousel title="Indoor Turf" carouselImages={indoorTurfItems} />
//       <AnimateCard>
//         <Certificates />
//       </AnimateCard>

//       <div className="flex gap-10  flex-col px-10 md:px-20 lg:px-[7.5rem] py-20">
//         <div className="flex  md:flex-row flex-col gap-12 ">
//           <div className="relative w-full  flex items-center justify-center ">
//             <div className="relative flex items-center">
//               <div className="w-full h-full overflow-hidden group">
//                 <AnimateCard>
//                   <img
//                     src="https://static.wixstatic.com/media/4c43d3_f327577b6eca48acb7752d3d746c1a58~mv2.jpeg/v1/fill/w_1216,h_257,al_c,q_80,enc_auto/bg.jpeg "
//                     className="   h-full object-cover transition-transform duration-500 ease-out scale-105 transform group-hover:scale-100"
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
//                       <span className="text-secondary">INDOOR TURF</span>
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
//               ESSENTIAL CONSIDERATIONS FOR INDOOR TURF
//               <span className="text-secondary"> INDOOR TURF</span>
//             </p>
//           </AnimateCard>

//           {/* Main Content */}
//           <div className="flex flex-col gap-10   text-white font-secondary">
//             <AnimateCard>
//               <p className="md:text-2xl text-lg">
//                 Depending on the intended purpose, the grass should be
//                 constructed With precise measurements to meet the particular
//                 interior space. Typically, these measurements range from 60 feet
//                 (18.29 meters) to 120 feet (36.58 meters) in length and 30 feet
//                 (9.14 meters) to 60 Feet (18.29 meters) in width.
//               </p>
//             </AnimateCard>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };
// export default IndoorTurf;

// const indoorTurfItems = [
//   {
//     poster:
//       "https://static.wixstatic.com/media/4c43d3_8ab1c9e8f0124f4fb1c6ceba1e12190e~mv2.png/v1/fill/w_488,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Indoor-02.png",
//     name: "Airplane",
//     blurHash: "LEI#xy8^_4o|00R;%1Mx00_34oV@",
//   },
//   {
//     poster:
//       "https://static.wixstatic.com/media/4c43d3_7a36342e36ce4cd1b256127ac1ad3722~mv2.png/v1/fill/w_488,h_326,fp_0.50_0.47,q_85,usm_0.66_1.00_0.01,enc_auto/Indoor-05.png",
//     name: "Family man",
//     blurHash: "LLH_M2#j4WX.T@s.MixB~8SO9bs.",
//   },
//   {
//     poster:
//       "https://static.wixstatic.com/media/4c43d3_93db6e485dbf44e58148ef38aa5db9d1~mv2.png/v1/fill/w_420,h_662,fp_0.52_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/Indoor-06.png",
//     name: "Laboratory",
//     blurHash: "L77n:SDm4U%K8|%KyCMz01tO?@W=",
//   },
//   {
//     poster:
//       "https://static.wixstatic.com/media/4c43d3_8b0f7a8bdede406a807d77ea75a3210a~mv2.png/v1/fill/w_466,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Indoor-04.png",
//     name: "Napoleon",
//     blurHash: "L77n:SDm4U%K8|%KyCMz01tO?@W=",
//   },
//   {
//     poster:
//       "https://static.wixstatic.com/media/4c43d3_a42f5b921efb4985b64fa716c98ed47b~mv2.png/v1/fill/w_466,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Indoor-03.png",
//     name: "Person in Darkness",
//     blurHash: "L77n:SDm4U%K8|%KyCMz01tO?@W=",
//   },
//   {
//     poster:
//       "https://static.wixstatic.com/media/4c43d3_69ceaf7ade584f05b07cf0600f5aa741~mv2.png/v1/crop/x_61,y_95,w_1569,h_2105/fill/w_478,h_662,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/Indoor-01.pngg",
//     name: "Scary Building",
//     blurHash: "L77n:SDm4U%K8|%KyCMz01tO?@W=",
//   },
// ];

import { Footer } from "../footer";
import Certificates from "./pageAnimation/certificates";
import { Container } from "./pageAnimation/container";
import { FadeIn } from "./pageAnimation/fade-in";
import { Hero } from "./pageAnimation/hero";
import { VideoCarousel } from "./pageAnimation/video-carousel";
import { useEffect } from "react";
import TabSEO from "../seoOptimize/index";
import { motion } from "framer-motion";
import Awards from "../Awards";
import Testimonials from "../testimonial";
import { FaCheckCircle } from "react-icons/fa";
import WhatsAppButton from "../WhatsappButton";

const IndoorTurf = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <WhatsAppButton />
      <TabSEO
        title="Indoor Turf Builders in South India | GameOnSolution - South India’s Best Sports Infrastructure"
        description="Get custom indoor sports turfs with advanced synthetic materials for year-round gameplay and training."
      />
      <div className="bg-background relative z-10 select-none">
        <Hero
          title="INDOOR TURF"
          subtitle="FINDS ITS MARK"
          bgImgUrl="/Football/Football-08.webp"
        />
        <Container className="relative z-10 space-y-10 md:max-w-[1000px] max-w-[692px] py-36 text-3xl font-bold text-white md:text-4xl">
          <FadeIn>
            <h1 className="text-secondary font-primary font-normal">
              INDOOR TURF
            </h1>
          </FadeIn>
          <FadeIn>
            <h2 className="text-secondary">
              ESSENTIAL CONSIDERATIONS FOR INDOOR TURF
            </h2>
          </FadeIn>
          <FadeIn>
            <p className="md:text-2xl text-lg">
              Constructing an indoor turf requires careful attention to design,
              safety, and long-term performance. Governing bodies like FIFA,
              FIBA, and FIH provide standardized dimensions and technical
              guidelines to ensure that indoor sports facilities meet
              professional and competitive play standards. At GameOn Solution,
              we customize indoor turf construction based on client needs,
              available space, and the intended purpose—whether it's for
              football, basketball, or multi-sport recreational use. Our indoor
              turf surfaces are engineered for maximum durability, player
              safety, and adaptability, making them ideal for both professional
              training and community sports environments.
            </p>
          </FadeIn>
        </Container>
      </div>

      <VideoCarousel title="Indoor Turf" carouselImages={indoorTurfItems} />
      <Testimonials />
      <Certificates />
      <Awards />

      <section
        id="indoor-marketing"
        className="px-10 md:px-20 lg:px-[7.5rem] py-20 text-white font-secondary bg-background/50"
      >
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl md:text-5xl font-primary text-secondary uppercase">
            Indoor Turf Construction by GameOn Solution
          </h2>
          <p className="mt-4 md:text-xl text-lg text-gray-200">
            <strong>Bring the Power of Professional Play - Indoors.</strong>{" "}
            Rain or shine, the game should never stop. That’s the spirit behind
            GameOn Solution’s Indoor Turf systems designed for athletes,
            schools, and sports facilities that demand performance, safety, and
            beauty under one roof.
          </p>
          <p className="mt-3 md:text-lg text-gray-300">
            Whether it’s a compact corporate arena, a training academy, or a
            community recreation zone, our eco-friendly{" "}
            <strong>AQUA Turf</strong> technology brings outdoor energy and
            all-weather performance into your indoor space.
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
              Our Story - Built for the Love of the Game
            </h3>
            <p className="text-gray-300">
              GameOn Solution was founded on one belief - sports should never be
              limited by weather, ground, or geography. From Chennai to
              Coimbatore, Bengaluru to Tirupati, we’ve helped hundreds of sports
              enthusiasts and facility owners turn their indoor spaces into
              vibrant, high-performance playgrounds.
            </p>
            <p className="text-gray-300">
              Each project we build reflects our promise: eco-conscious
              materials, precision engineering, and athlete-approved quality.
              Our <strong>AQUA Eco Turf System</strong> uses recycled, non-toxic
              fibers that provide world-class cushioning, perfect ball roll, and
              real-grass aesthetics - giving athletes a safer, greener, and
              longer-lasting play surface.
            </p>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src="https://static.wixstatic.com/media/4c43d3_8ab1c9e8f0124f4fb1c6ceba1e12190e~mv2.png/v1/fill/w_488,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Indoor-02.png"
            alt="GameOn Indoor Turf"
            className="rounded-2xl border border-white/10 shadow-xl w-full h-full object-cover"
          />
        </div>

        {/* Process (indoor-aware copy, reusing standard steps) */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-primary text-secondary mb-4">
            Our Turf Installation Process
          </h3>
          <p className="text-gray-300 mb-6">
            We follow a proven, data-backed installation process that ensures
            durability, precision, and global-standard quality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Site Evaluation",
                desc: "Our experts conduct soil/base condition and drainage analysis to ensure a solid, level foundation that meets FIFA guidelines.",
              },
              {
                title: "Base Foundation",
                desc: "Multi-layer engineered base with crushed stone, drainage piping, and laser-level compaction for perfect slope and water flow.",
              },
              {
                title: "Turf Installation",
                desc: "FIFA Pro-certified synthetic grass with high-density fibers and UV stabilization - ideal for South India’s climate.",
              },
              {
                title: "Line Marking & Customization",
                desc: "Permanent sports markings, branding, safety netting, boundary walls, and HighBay LED floodlights as per spec.",
              },
              {
                title: "Testing & Final Handover",
                desc: "GameOn Quality Checks: ball roll, shock absorption, and player traction tests. Precision-tested before first play.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <h4 className="text-xl font-semibold text-white mb-2">
                  {card.title}
                </h4>
                <p className="text-gray-300 text-sm md:text-base">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Indoor Turf */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-primary text-secondary mb-4">
            Why Choose an Indoor Turf?
          </h3>
          <p className="text-gray-300 mb-4">
            Indoor turfs are more than a convenience - they’re a revolution in
            how we experience sports. When you build with GameOn Solution,
            you’re investing in:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "All-weather playability - No rain delays, no muddy fields.",
              "Consistent surface grip - Perfect traction for every sport.",
              "Injury-safe turf cushioning - Designed for high-impact movements.",
              "Low maintenance - Minimal grooming, no watering, no mowing.",
              "Longevity - 8–10 years of performance and resilience.",
              "Custom design flexibility - Line markings, branding, and LED lighting options.",
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
          <p className="text-gray-300 mt-4">
            It’s not just a turf. It’s a smart surface engineered for comfort,
            control, and creativity.
          </p>
        </div>

        {/* Specs Table */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-primary text-secondary mb-6">
            Indoor Turf Specifications
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
                  <td className="py-3 px-4">Surface Material</td>
                  <td className="py-3 px-4">
                    AQUA Eco-Friendly Synthetic Turf
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Pile Height</td>
                  <td className="py-3 px-4">40 mm – 55 mm (customizable)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Base Layer</td>
                  <td className="py-3 px-4">
                    Multi-layer compacted aggregate + shock pad
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Infill</td>
                  <td className="py-3 px-4">
                    Silica sand + recycled rubber granules
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Lighting</td>
                  <td className="py-3 px-4">200–300 lux LED floodlights</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Court Sizes</td>
                  <td className="py-3 px-4">
                    20×10 m • 25×15 m • 30×20 m (custom layouts)
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Fencing/Netting</td>
                  <td className="py-3 px-4">
                    Nylon or mesh with anti-tear coating
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Lifespan</td>
                  <td className="py-3 px-4">
                    8–10 years with minimal maintenance
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Drainage</td>
                  <td className="py-3 px-4">
                    Integrated base drainage for easy cleaning
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Why GameOn Leads */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-primary text-secondary mb-4">
            Why GameOn Solution Leads South India’s Turf Industry
          </h3>
          <p className="text-gray-300 mb-4">
            When you partner with GameOn Solution, you don’t just get turf - you
            get a team of visionaries who’ve built some of South India’s finest
            sports facilities. We have completed turf and court installations
            across Tamil Nadu and Karnataka, creating spaces where passion meets
            performance.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-200">
            {[
              "FIFA-standard turf systems",
              "Precision laser-level base construction",
              "Advanced drainage & foundation engineering",
              "HIGHBAY lighting & netting integration",
              "Maintenance training post-installation",
              "Long-term service and warranty support",
            ].map((t, i) => (
              <li key={i} className="flex gap-3 items-start">
                <FaCheckCircle className="mt-1" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-300 mt-3">
            Each project begins with your vision and ends with a
            GameOn-certified turf that delivers on it, season after season.
          </p>
        </div>

        {/* Who Is It For */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-primary text-secondary mb-4">
            Who Is Indoor Turf For?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Sports academies & schools - Year-round practice, weather-proof facilities",
              "Corporate arenas - Employee recreation zones that boost wellness",
              "Gyms & fitness centers - Warm-up turf zones, sprint lanes, and agility training",
              "Indoor cricket & football arenas - Compact high-energy gameplay",
              "Event venues & communities - Multipurpose, low-maintenance flooring",
              "If your space has a ceiling, we can make it a playground.",
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

        {/* Process Recap */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-primary text-secondary mb-4">
            Our Process - Precision from Start to Finish
          </h3>
          <ol className="list-decimal pl-5 space-y-3 text-gray-200">
            <li>
              <strong>Site Study & Design:</strong> We visit your location,
              measure space, and design a layout tailored to your needs - sport,
              audience, and budget.
            </li>
            <li>
              <strong>Base Construction:</strong> Compacted sub-base layers,
              shock pads, and laser leveling for a smooth and durable
              foundation.
            </li>
            <li>
              <strong>Turf Installation:</strong> AQUA eco turf rolls installed
              with perfect seams and professional sports markings.
            </li>
            <li>
              <strong>Lighting & Netting Setup:</strong> Integrated LED systems,
              safety netting, and fencing for indoor safety and visibility.
            </li>
            <li>
              <strong>Final Inspection & Training:</strong> Maintenance guide
              and warranty-backed completion certificate delivered at handover.
            </li>
          </ol>
        </div>
      </section>

      {/* Existing long-form SEO and service content block (kept below) */}
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
          <strong>high-quality FIFA-certified football turf</strong> designed to
          perform in all weather conditions. If you&apos;re looking for
          professional{" "}
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
          <strong>football turf construction and installation</strong> in Tamil
          Nadu{" "}
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
