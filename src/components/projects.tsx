import { useEffect } from "react";
import TextHoverAnimation from "./textHoverAnimation";
import { usePortfolio } from "@/hook/usePortfolio"; // ✅ switched to portfolio
import VideoCard from "./videoCard/main";
import TabSEO from "./seoOptimize";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { seoData } from "@/common/seoTitleDescription";
import { useNavigate } from "react-router-dom";
import { MdCall, MdEmail, MdLocationPin } from "react-icons/md";
import {
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaReddit,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

// keep the old type but map correctly (for compatibility with rest of app)
// type Project = {
//   id: number;
//   authorName?: string;
//   content?: string;
//   rating?: number;
//   createdAt?: Date;
//   fileType: "image" | "video" | "youtube" | "instagram";
//   mediaUrl: string;
//   role?: string;
//   // portfolio fields:
//   date?: string;
//   details?: string;
// };

const Projects: React.FC = () => {
  const { getPortfolio } = usePortfolio();
  const data = getPortfolio.data ?? [];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // shuffle & limit to 6
  const randomProjects = [...data].sort(() => 0.5 - Math.random()).slice(0, 6);

  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    if (path.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/", { replace: true });
        setTimeout(() => {
          const section = document.querySelector(path);
          if (section) section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const section = document.querySelector(path);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <TabSEO
        title="Our Projects | GameOn Solution"
        description="Explore GameOn Solution's world-class projects — turf installations, cricket grounds, football pitches, and multi-sport arenas across South India."
        keywords="turf projects, football turf construction, cricket ground projects, GameOn projects, South India sports construction"
        image={seoData.testimonials.image}
        url="https://gameonsolution.in/projects"
      />

      {/* HERO SECTION */}
      <div className="flex flex-col pt-32 pb-20 items-center px-6 md:px-16 bg-gradient-to-b from-[#06120a] via-[#0c1d12] to-[#06120a]">
        <div className="max-w-4xl flex flex-col gap-6 text-center items-center justify-center px-10 lg:px-48 mb-16">
          <p className="text-[13px] tracking-[2px] uppercase font-secondary text-emerald-300">
            our work speaks
          </p>
          <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-secondary uppercase leading-tight">
          <TextHoverAnimation text="Our Projects" />
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 font-secondary leading-relaxed">
            Each project reflects world-class quality, precision, and passion.
          </p>
        </div>

        {/* GRID OF PROJECT VIDEOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
          {randomProjects.map((proj: any) => {
            // data from portfolio is expected to have: id, date, details, fileType, mediaUrl
            const id = proj.id;
            const details = proj.details ?? proj.content ?? "Project";
            const date = proj.date ?? proj.createdAt ?? "";
            const fileType = proj.fileType ?? "video";
            const mediaUrl = proj.mediaUrl ?? "";

            return (
              <div
                key={id}
                className="relative group bg-[#0e1b12]/40 border border-emerald-600/30 rounded-2xl 
                         overflow-hidden shadow-lg hover:shadow-2xl hover:border-emerald-300 transition duration-300"
              >
                <div className="h-[300px] w-full">
                  <VideoCard
                    videoSrc={mediaUrl}
                    fileType={fileType as "video" | "youtube" | "instagram"}
                  />
                </div>

                {/* Overlay caption */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 py-3">
                  <h4 className="text-lg text-emerald-300 font-primary line-clamp-2">
                    {details}
                  </h4>
                  <p className="text-sm text-gray-200 font-secondary">
                    {date ? new Date(date).toLocaleDateString() : ""}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ✅ DO NOT TOUCH - Testimonial style slider remains the same */}
      <div className="w-full max-w-7xl mx-auto mt-24 px-6 relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="pb-12"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {[
            {
              content:
                "GameOn built our football turf with precision. The results exceeded expectations.",
              authorName: "Green Park School",
              role: "Namakkal",
            },
            {
              content:
                "Our cricket pitch is world-class now. Safe, durable, and professional.",
              authorName: "AKT School",
              role: "Kallakurichi",
            },
            {
              content:
                "GameOn completed our turf project ahead of time with premium quality.",
              authorName: "Joy University",
              role: "Alaganeri",
            },
            {
              content:
                "Parents and students love the new playground. It's truly modern and safe.",
              authorName: "Thamarai International School",
              role: "Thanjavur",
            },
            {
              content:
                "The ground looks stunning. Maintenance is easy, and performance is great.",
              authorName: "Hayagrivas International School",
              role: "Tamil Nadu",
            },
          ].map((proj, i) => (
            <SwiperSlide key={i}>
              <div
                className="bg-[#0c1d12]/60 border border-emerald-600/30 rounded-2xl 
                           p-8 md:p-10 shadow-xl backdrop-blur-md 
                           flex flex-col items-center text-center 
                           max-w-md mx-auto 
                           h-[250px] md:h-[270px] transition 
                           hover:border-emerald-300 hover:shadow-2xl"
              >
                <p className="text-gray-200 text-lg md:text-xl font-secondary italic leading-relaxed">
                  “{proj.content}”
                </p>
                <div className="flex flex-col items-center mt-6">
                  <h4 className="text-emerald-300 font-primary text-xl">
                    {proj.authorName}
                  </h4>
                  <p className="text-sm text-gray-400 font-secondary">{proj.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-col gap-3 px-8 lg:px-28 py-16 lg:py-28 w-full">
      <div className="w-full flex flex-col border-t border-b border-slate-100/20 py-10 px-0 lg:px-1 h-full gap-10">
        <div className="w-full flex flex-col lg:flex-row gap-10">
          <div className="flex flex-col lg:items-center lg:flex-row lg:w-[50%] w-full text-[12px] gap-5 lg:gap-10 font-secondary uppercase">
            <p
              onClick={() => handleNavClick("#home")}
              className="hover:cursor-pointer hover:text-white"
            >
              Home
            </p>
            <p
              onClick={() => handleNavClick("#aboutUs")}
              className="hover:cursor-pointer hover:text-white"
            >
              About
            </p>
            <p
              onClick={() => handleNavClick("#services")}
              className="hover:cursor-pointer hover:text-white"
            >
              Services
            </p>
            <p
              onClick={() => handleNavClick("#contact")}
              className="hover:cursor-pointer hover:text-white"
            >
              Contact
            </p>
          </div>
          <div className="flex lg:w-[50%] w-full text-[12px] gap-8 font-secondary lg:justify-end">
            <a
              href="https://www.instagram.com/gameonsolution_southindia/"
              target="_blank"
              rel="noopener noreferrer"
              className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:text-yellow-400"
              aria-label="Visit our Instagram"
            >
              <FaInstagram />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://youtube.com/@gameonsolutionoffi?si=U3jRSjQ_TscHG2ry"
              target="_blank"
              rel="noopener noreferrer"
              className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:text-yellow-400"
              aria-label="Visit our YouTube"
            >
              <FaYoutube />
              <span className="sr-only">YouTube</span>
            </a>
            <a
              href="https://wa.me/919615737373"
              target="_blank"
              rel="noopener noreferrer"
              className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:text-yellow-400"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp />
              <span className="sr-only">WhatsApp</span>
            </a>
            <a
              href="https://medium.com/@gameon.solution.317"
              target="_blank"
              rel="noopener noreferrer"
              className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:text-yellow-400"
              aria-label="Read on Medium"
            >
              <FaMedium />
              <span className="sr-only">Medium</span>
            </a>
            {/* <a
              href="https://www.quora.com/profile/GameOn-Solution"
              target="_blank"
              rel="noopener noreferrer"
              className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:text-yellow-400"
              aria-label="Visit our Quora profile"
            >
              <FaQuora />
              <span className="sr-only">Quora</span>
            </a> */}
            <a
              href="https://www.reddit.com/user/Dangerous_Aerie_8168/"
              target="_blank"
              rel="noopener noreferrer"
              className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:text-yellow-400"
              aria-label="Follow us on Reddit"
            >
              <FaReddit />
              <span className="sr-only">Reddit</span>
            </a>
            <a
              href="https://www.linkedin.com/company/gameon-solution/"
              target="_blank"
              rel="noopener noreferrer"
              className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:text-yellow-400"
              aria-label="Follow us on Reddit"
            >
              <FaLinkedin />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="w-full flex justify-center bg-yellow-100/20 px-5 py-5">
          <div className="flex flex-col lg:flex-row gap-10 lg:justify-around">
            <div className="flex flex-col justify-center w-full lg:w-[30%] items-center gap-2">
              <MdCall className="text-2xl opacity-80" />
              <div className="flex flex-col gap-3 justify-center items-center">
                <p className="font-primary uppercase text-xl md:text-2xl text-secondary">
                  Call
                </p>
                <p className="flex tracking-[1.5px] justify-center items-center gap-1 font-secondary uppercase text-xs font-medium text-white">
                  <span className="flex justify-center items-center gap-1.5">
                    <span className="tracking-[1.5px]">+91 9615737373</span>
                    <span>(or)</span>
                    <span className="tracking-[1.5px]">+91 9715131313</span>
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full lg:w-[30%] items-center gap-2">
              <MdEmail className="text-2xl opacity-80" />
              <div className="flex flex-col gap-3 justify-center items-center">
                <p className="font-primary uppercase text-xl md:text-2xl text-secondary">
                  Write
                </p>
                <a
                  href="mailto:sales@gameonsolution.in"
                  className="text-xs font-medium text-white"
                >
                  sales@gameonsolution.in
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full lg:w-[30%] items-center gap-2">
              <MdLocationPin className="text-2xl opacity-80" />
              <div className="flex flex-col gap-3 justify-center items-center">
                <p className="font-primary uppercase text-2xl text-secondary">
                  Visit
                </p>
                <p className="font-secondary tracking-[1.5px] text-center text-xs font-medium text-white">
                  Hanifa Nagar, NGO Colony, Dindigul, Tamil Nadu 624005
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <p>©2025. All rights reserved.</p>
      </div>
    </div>
    </>
  );
};

export default Projects;
