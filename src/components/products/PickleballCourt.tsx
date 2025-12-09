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
//     <div className="">
//       <TabSEO
//         title="Professional Pickleball Court Construction | GameOnSolution - South India’s Best Sports Infrastructure"
//         description="We specialize in high-quality pickleball courts with world-class synthetic surfaces for smooth, professional gameplay."
//       />
//       <div className="bg-background relative z-10 select-none">
//         <Hero
//           title={"PICKLE BALL"}
//           subtitle={"FINDS ITS MARK"}
//           bgImgUrl={" /pickleTurf/pickle-turf-005.webp"}
//         />
//         <Container className="relative z-10 space-y-10  md:max-w-[1000px] max-w-[692px]   py-36 text-3xl font-bold text-white md:text-4xl ">
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
//               varied weather conditions, providing durability and longevity.
//               It’s crafted for minimal maintenance, so you can enjoy more
//               uninterrupted game time. Pickleball Court's shock-absorbing layer
//               reduces impact on joints, making it ideal for players of all ages
//               and skill levels. With our exclusive turf, you get a premier
//               playing environment that fosters enjoyment, safety, and
//               performance.
//             </span>
//           </FadeIn>
//           <FadeIn>
//             <p className="uppercase text-secondary">Features of Pickle</p>
//           </FadeIn>
//           <FadeIn>
//             <span className="md:text-2xl text-lg leading-10">
//               Professional-grade for pickle ball game
//               play Optimized surface for consistent ball bounce and precise
//               movement Weather-resistant materials, suitable for outdoor and
//               indoor play Shock-absorbing layer for reduced impact on players'
//               joints Low-maintenance design for hassle-free play
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
//     poster: "/pickleTurf/pickle-turf-001.webp",
//     name: "Airplane",
//     blurHash: "LDD9*K~BMeS0_NIUWUR*x_IVx@%3",
//   },
//   {
//     poster: "/pickleTurf/pickle-turf-002.webp",
//     name: "Family man",
//     blurHash: "L26R[Gb]00nh0Nj@--oeu%V@O_a$",
//   },
//   {
//     poster: "/pickleTurf/pickle-turf-003.webp",
//     name: "Family man",
//     blurHash: "LPB|Nc%1ROV?~WxaRjoe~Bn$R:s:",
//   },
//   {
//     poster: "/pickleTurf/pickle-turf-004.webp",
//     name: "Laboratory",
//     blurHash: "LE8hnHRk00$_HXoboxR;.TWZIWs*",
//   },
//   {
//     poster: "/pickleTurf/pickle-turf-005.webp",
//     name: "Napoleon",
//     blurHash: "LWEV{pt6xTocR5n+s:a{~RWBIpR+",
//   },
//   {
//     poster: "/pickleTurf/pickle-turf-006.webp",
//     name: "Person in Darkness",
//     blurHash: "LPB|Nc%1ROV?~WxaRjoe~Bn$R:s:",
//   },
// ];

/// Edited SEO Optimzed code
import { Footer } from "../footer";
import Certificates from "./pageAnimation/certificates";
import { Container } from "./pageAnimation/container";
import { FadeIn } from "./pageAnimation/fade-in";
import { Hero } from "./pageAnimation/hero";
import { VideoCarousel } from "./pageAnimation/video-carousel";
import AnimateCard from "../animateCard";
import { useEffect } from "react";
import TabSEO from "../seoOptimize/index";
import Testimonials from "../testimonial";
import WhatsAppButton from "../WhatsappButton";
import TextTestimonials from "../texttestimonials";
// import { Helmet } from "react-helmet-async";

const META_PIXEL_ID = "1258580152418894"; // replace if you want a different pixel

const PickleballCourt = () => {
  useEffect(() => {
    // scroll to top when page mounts
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Quick, TS-friendly Meta Pixel injector
    const w: any = window;
    if (!w.fbq) {
      let n: any;
      let t: HTMLScriptElement;
      let s: Element | null;

      (function (f: any, b: Document, e: string, v: string) {
        if (f.fbq) return;
        n = f.fbq = function () {
          (n.callMethod
            ? n.callMethod
            : function () {
                (n.queue = n.queue || []).push(arguments);
              }
          ).apply(n, arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = true;
        n.version = "2.0";
        n.queue = n.queue || [];
        t = b.createElement(e) as HTMLScriptElement;
        t.async = true;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        if (s && s.parentNode) s.parentNode.insertBefore(t, s);
      })(
        w,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );

      try {
        w.fbq("init", META_PIXEL_ID);
        w.fbq("track", "PageView");
      } catch (err) {
        // fail silently
      }

      // noscript fallback
      const noscript = document.createElement("noscript");
      noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1" />`;
      document.body.appendChild(noscript);
    }

    // no cleanup to intentionally leave pixel for SPA navigations
  }, []);

  return (
    <div>
      {/* <Helmet>
        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1258580152418894');
            fbq('track', 'PageView');
          `}
        </script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1258580152418894&ev=PageView&noscript=1"
          />
        </noscript>
      </Helmet> */}
      <WhatsAppButton />
      <TabSEO
        title="Professional Pickleball Court Construction | GameOnSolution - South India’s Best Sports Infrastructure"
        description="We specialize in high-quality pickleball courts with world-class synthetic surfaces for smooth, professional gameplay."
      />

      <div className="bg-background relative z-10 select-none">
        <Hero
          title="PICKLE BALL"
          subtitle="FINDS ITS MARK"
          bgImgUrl="/pickleTurf/Pickle2.webp"
        />

        <Container className="relative z-10 space-y-10 md:max-w-[1000px] max-w-[692px] py-36 text-3xl font-bold text-white md:text-4xl">
          <FadeIn>
            <p className="uppercase font-primary text-secondary font-normal">
              Premium Playing Surface for Pickleball Enthusiasts
            </p>
          </FadeIn>

          <FadeIn>
            <span className="md:text-2xl text-lg">
              Our Pickleball Court Turf is a premium synthetic sports surface
              designed specifically for high-performance pickleball play. Built
              with advanced turf technology, it ensures consistent ball bounce,
              excellent traction, and superior player comfort—making it ideal
              for beginners and professional pickleball players alike.
              <br />
              <br />
              Engineered for durability, low maintenance, and all-weather
              conditions, this outdoor and indoor pickleball turf includes a
              shock-absorbing base layer to reduce joint strain and enhance
              player safety during long matches. Whether you're setting up a
              backyard pickleball court or a commercial facility, GameOn
              Solution&apos;s professional-grade pickleball turf delivers
              optimal performance, safety, and long-term value.
            </span>
          </FadeIn>

          <FadeIn>
            <p className="uppercase text-secondary">Features of Pickle Turf</p>
          </FadeIn>

          <FadeIn>
            <ul className="md:text-2xl text-lg leading-10 list-disc list-inside">
              <li>Professional-grade playing surface for pickleball</li>
              <li>Optimized texture for consistent ball bounce and movement</li>
              <li>Weather-resistant and ideal for indoor or outdoor use</li>
              <li>Shock-absorbing layer reduces joint impact</li>
              <li>Low-maintenance and built for long-lasting performance</li>
            </ul>
          </FadeIn>
        </Container>
      </div>

      <VideoCarousel title="Pickle Turf" carouselImages={PickleTurfItems} />

      <TextTestimonials />

      <section className="px-10 md:px-20 lg:px-[7.5rem] py-20 text-white font-secondary bg-background/50">
        {/* Top grid: text + design facts */}
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Left: Intro copy */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-primary text-secondary">
              Designing a World-Class Pickleball Court
            </h2>
            <p className="text-lg md:text-xl text-white/85">
              We design courts that look, feel and play like professional venues
              — from precise orientation and drainage to the right surface
              texture and lighting.
            </p>

            {/* Quick facts cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 md:p-6 rounded-2xl shadow-lg border border-white/10 bg-surface/60">
                <h4 className="text-lg md:text-xl font-semibold">
                  Standard Court
                </h4>
                <p className="mt-2 text-md md:text-base text-white/90">
                  20 ft × 44 ft (play area) — allow 30 × 60 ft total
                </p>
              </div>
              <div className="p-5 md:p-6 rounded-2xl shadow-lg border border-white/10 bg-surface/60">
                <h4 className="text-lg md:text-xl font-semibold">Net Specs</h4>
                <p className="mt-2 text-md md:text-base text-white/90">
                  Center: 34 in | Posts: 36 in | Length: 22 ft
                </p>
              </div>
              <div className="p-5 md:p-6 rounded-2xl shadow-lg border border-white/10 bg-surface/60">
                <h4 className="text-lg md:text-xl font-semibold">Surface</h4>
                <p className="mt-2 text-md md:text-base text-white/90">
                  Concrete, asphalt or specialized sports systems with
                  medium-to-rough texture
                </p>
              </div>
              <div className="p-5 md:p-6 rounded-2xl shadow-lg border border-white/10 bg-surface/60">
                <h4 className="text-lg md:text-xl font-semibold">Lighting</h4>
                <p className="mt-2 text-md md:text-base text-white/90">
                  Target ≥ 50 foot-candles, uniform distribution and anti-glare
                  mounting
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://gameonsolution.in/"
                className="inline-block rounded-full px-6 py-3 border-2 border-white bg-white text-black font-semibold text-md md:text-base"
              >
                Get a free site survey
              </a>
            </div>
          </div>

          {/* Right: factors card */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-surface/60 shadow-sm">
              <h3 className="text-2xl font-primary text-secondary mb-3">
                Factors to consider before installing a Pickleball Court
              </h3>
              <div className="space-y-3 text-lg md:text-base text-white/90">
                <dl className="grid gap-3">
                  <div>
                    <dt className="font-semibold">Location</dt>
                    <dd>
                      Choose a flat, level area with sufficient clearance and
                      room for players and spectators.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Surface Material</dt>
                    <dd>
                      Select a surface that balances traction, bounce and
                      durability (asphalt, concrete or sports surface).
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Orientation</dt>
                    <dd>
                      Orient court north-south to reduce sun glare during play.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold">
                      Accessibility &amp; Budget
                    </dt>
                    <dd>
                      Plan parking, pathways and set a realistic budget
                      including installation and maintenance.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Local Regulations</dt>
                    <dd>
                      Check zoning, permits and any community rules that could
                      affect installation.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width image below, same page style */}
        <div className="rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-gradient-to-br from-primary/10 to-surface/10 mt-10 md:mt-12">
          <img
            src="/pickleTurf/Pickle7.webp"
            alt="Pickle court"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Deep dive text section under it */}
        <div className="mt-16">
          <article className="prose max-w-none prose-invert  text-lg md:text-xl">
            <h3>Court Dimensions &amp; Markings</h3>
            <p>
              A standard court measures 20&apos; x 44&apos; for both singles and
              doubles. Allow a 30&apos; x 60&apos; footprint to provide player
              run-off and spectator space. Key markings include the baseline,
              sidelines, non-volley zone (7&apos; from the net) and centerline
              for service.
            </p>

            <h3>Net Setup &amp; Height</h3>
            <p>
              The official net length is 22 feet. Height should be 34 inches at
              center and 36 inches at the posts. Use durable, weather-resistant
              net material and ensure the net is properly tensioned for
              consistent play.
            </p>

            <h3>Surface Material &amp; Texture</h3>
            <p>
              Concrete and asphalt are common bases; specialized sports
              surfacing systems deliver the best combination of shock
              absorption, traction and consistent bounce. We recommend a medium
              to rough texture for optimal grip without overly affecting ball
              speed.
            </p>

            <h3>Lighting &amp; Surroundings</h3>
            <p>
              Evening play needs even, glare-controlled light. Aim for a minimum
              of 50 foot-candles on the playing surface and position fixtures to
              avoid pointing into players&apos; eyes. Provide at least 10&apos;
              of clearance on each side and a 10&apos; minimum fence to keep the
              ball in play.
            </p>

            <h3>Maintenance &amp; Longevity</h3>
            <p>
              Weekly cleaning, monthly inspections of lines and net, and
              resurfacing every 3–5 years (depending on usage and material) will
              keep the court safe and playable. Good drainage and UV-resistant
              materials extend lifespan.
            </p>

            <p>
              For a professional installation or maintenance plan,&nbsp;
              <a href="https://gameonsolution.in/" className="underline">
                Contact GameOn Solution
              </a>{" "}
              for a site survey and quote.
            </p>
          </article>
        </div>
      </section>

      <AnimateCard>
        <Certificates />
      </AnimateCard>

      <Testimonials />

      <Footer />
    </div>
  );
};

export default PickleballCourt;

const PickleTurfItems = [
  {
    poster: "/pickleTurf/Pickle1.webp",
    name: "Airplane",
    blurHash: "LDD9*K~BMeS0_NIUWUR*x_IVx@%3",
  },
  {
    poster: "/pickleTurf/Pickle7.webp",
    name: "Family man",
    blurHash: "L26R[Gb]00nh0Nj@--oeu%V@O_a$",
  },
  {
    poster: "/pickleTurf/Pickle3.webp",
    name: "Family man",
    blurHash: "LPB|Nc%1ROV?~WxaRjoe~Bn$R:s:",
  },
  {
    poster: "/pickleTurf/Pickle8.webp",
    name: "Laboratory",
    blurHash: "LE8hnHRk00$_HXoboxR;.TWZIWs*",
  },
  {
    poster: "/pickleTurf/Pickle6.webp",
    name: "Napoleon",
    blurHash: "LWEV{pt6xTocR5n+s:a{~RWBIpR+",
  },
  {
    poster: "/pickleTurf/Pickle5.webp",
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
//               bgImgUrl="/pickleTurf/pickle-turf-005.webp"
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
//     poster: "/pickleTurf/pickle-turf-001.webp",
//     name: "Airplane",
//     blurHash: "LDD9*K~BMeS0_NIUWUR*x_IVx@%3",
//   },
//   {
//     poster: "/pickleTurf/pickle-turf-002.webp",
//     name: "Family man",
//     blurHash: "L26R[Gb]00nh0Nj@--oeu%V@O_a$",
//   },
//   {
//     poster: "/pickleTurf/pickle-turf-003.webp",
//     name: "Family man",
//     blurHash: "LPB|Nc%1ROV?~WxaRjoe~Bn$R:s:",
//   },
//   {
//     poster: "/pickleTurf/pickle-turf-004.webp",
//     name: "Laboratory",
//     blurHash: "LE8hnHRk00$_HXoboxR;.TWZIWs*",
//   },
//   {
//     poster: "/pickleTurf/pickle-turf-005.webp",
//     name: "Napoleon",
//     blurHash: "LWEV{pt6xTocR5n+s:a{~RWBIpR+",
//   },
//   {
//     poster: "/pickleTurf/pickle-turf-006.webp",
//     name: "Person in Darkness",
//     blurHash: "LPB|Nc%1ROV?~WxaRjoe~Bn$R:s:",
//   },
// ];
