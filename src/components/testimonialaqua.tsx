import React, { useEffect, useState } from "react";
import { useTestimonials } from "@/hook/useTestimonials";
import VideoCard from "./videoCard/main";
import TabSEO from "./seoOptimize";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { seoData } from "@/common/seoTitleDescription";
import { motion } from "framer-motion";

type Testimonial = {
  id: number;
  authorName: string;
  content: string;
  rating: number;
  createdAt: Date;
  fileType: "image" | "video" | "youtube" | "instagram";
  mediaUrl: string;
  role?: string;
};

type TestimonialsProps = {
  videoIds?: string[]; // optional: supply 3 youtube ids per page
};

const Testimonialsaqua: React.FC<TestimonialsProps> = ({ videoIds = [] }) => {
  const { queryClient } = useTestimonials();
  const data =
    (queryClient.getQueryData(["testimonials"]) as Testimonial[]) ?? [];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Random 3 testimonials used across both grid and (optionally) video captions
  const randomTestimonials = [...data]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  // state for which video card is currently playing (index in videoIds)
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  // Helper to safely get caption info for a video index
  const captionFor = (idx: number) => {
    return (
      randomTestimonials[idx] ?? {
        authorName: `Client ${idx + 1}`,
        content: "Watch this client's experience with GameOn Solution.",
        role: "",
      }
    );
  };

  return (
    <>
      <TabSEO
        title={seoData.testimonials.title}
        description={seoData.testimonials.description}
        keywords={seoData.testimonials.keywords}
        image={seoData.testimonials.image}
        url={seoData.testimonials.url}
      />

      {/* Header */}
      <div className="flex flex-col pt-32 pb-8 items-center px-6 md:px-16">
        <div className="max-w-4xl flex flex-col gap-5 text-center items-center justify-center px-10 lg:px-48 mb-8">
          <p className="text-[12px] font-secondary uppercase tracking-[1px] text-white">
            what client says
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-cyan-400 uppercase text-center">
            Testimonials
          </h1>
          <p className="text-lg md:text-2xl text-white font-secondary mt-4">
            Discover the heartfelt words of those we've had the privilege to
            serve. Our client's stories reflect the passion and dedication we
            bring to every moment.
          </p>
        </div>
      </div>

      {/* Optional: YouTube Videos Section (render only if videoIds provided) */}
      {videoIds.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 lg:px-20 py-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="mb-6 text-center"
          ></motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoIds.slice(0, 3).map((id, idx) => {
              const isPlaying = playingIndex === idx;
              const thumb = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
              const caption = captionFor(idx);
              return (
                <motion.div
                  key={id || `video-${idx}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  viewport={{ once: true }}
                  className="relative rounded-2xl overflow-hidden shadow-xl bg-black border border-white/5"
                >
                  <div className="w-full aspect-video bg-black relative">
                    {!isPlaying ? (
                      <>
                        <button
                          onClick={() => setPlayingIndex(idx)}
                          aria-label={`Play testimonial video ${idx + 1}`}
                          className="w-full h-full relative group"
                        >
                          <img
                            src={thumb}
                            alt={`Testimonial ${idx + 1} thumbnail`}
                            className="w-full h-full object-cover transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 shadow-lg">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="black"
                                className="w-6 h-6 ml-1"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        </button>

                        <div className="p-4 bg-[#07120d]">
                          <h3 className="text-cyan-400 font-primary text-center text-lg">
                            {caption.authorName}
                          </h3>
                          <p className="text-sm text-white font-primary text-center font-medium text-secondary mt-1 line-clamp-3">
                            {caption.content}
                          </p>
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-full">
                        <iframe
                          title={`testimonial-video-${idx + 1}`}
                          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      {/* Grid of Testimonials (original) */}
      <div className="flex flex-col pt-6 pb-20 items-center px-6 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
          {randomTestimonials.map((test, i) => (
            <div
              key={test.id ?? i}
              className="bg-emerald-900/20 border border-emerald-600/20 rounded-xl p-4 flex flex-col gap-4 items-center shadow-lg backdrop-blur-sm"
            >
              <div className="h-[300px] w-full">
                {/* If videoIds were provided and this testimonial is youtube,
                    we've already shown the videos above. Otherwise render VideoCard */}
                {test.fileType === "youtube" && videoIds.length === 0 ? (
                  // if testimonial contains youtube url in mediaUrl, try to extract id
                  <VideoCard videoSrc={test.mediaUrl} fileType={"youtube"} />
                ) : test.fileType === "video" || test.fileType === "image" ? (
                  <VideoCard
                    videoSrc={test.mediaUrl}
                    fileType={test.fileType as "video" | "youtube"}
                  />
                ) : (
                  // fallback: if it's some other media type, try VideoCard
                  <VideoCard
                    videoSrc={test.mediaUrl}
                    fileType={test.fileType as "video" | "youtube"}
                  />
                )}
              </div>

              <p className="text-lg text-cyan-400 font-primary text-center">
                {test.authorName}
              </p>
              <p className="text-sm text-white font-primary text-center font-medium text-secondary">
                {test.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Text Testimonials Slider (unchanged) */}
      <div className="w-full max-w-7xl mx-auto mt-4 px-6 relative">
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
                "GameOn built our football ground perfectly. Students are very happy to play here every day.",
              authorName: "Green Park School",
              role: "Namakkal",
            },
            {
              content:
                "Our school playground looks great now. The turf is strong and safe for children.",
              authorName: "AKT School",
              role: "Kallakurichi",
            },
            {
              content:
                "GameOn team worked fast and neat. Our kids enjoy the new ground very much.",
              authorName: "Shiva Niketan School",
              role: "Tamil Nadu",
            },
            {
              content:
                "The turf quality is very good. We can use it in all seasons without any problem.",
              authorName: "Hayagrivas International School",
              role: "Tamil Nadu",
            },
            {
              content:
                "Our students are excited to play on the new turf. It feels safe and professional.",
              authorName: "Sowdambikaa Mount Litera Zee School",
              role: "Trichy",
            },
            {
              content:
                "GameOn gave us a beautiful playground. Parents and students are very happy with it.",
              authorName: "K.S.R Akshara Academy",
              role: "Tiruchengode",
            },
            {
              content:
                "The ground is smooth and safe. GameOn team did a clean job and finished on time.",
              authorName: "Vriksha Global School",
              role: "Tiruchengode",
            },
            {
              content:
                "Very happy with the turf installation. Children are enjoying sports much more now.",
              authorName: "Brindavan Anglo Vedic International School",
              role: "Kilkardirpur",
            },
            {
              content:
                "Our school has a nice modern ground now. GameOn team did everything very well.",
              authorName: "Thamarai International School",
              role: "Thanjavur",
            },
            {
              content:
                "The football turf looks amazing. Students and staff are very satisfied with the work.",
              authorName: "Joy University",
              role: "Alaganeri",
            },
          ].map((test, i) => (
            <SwiperSlide key={i}>
              <div
                className="bg-emerald-900/20 border border-emerald-600/20 rounded-2xl 
                            p-8 md:p-10 shadow-xl backdrop-blur-sm 
                            flex flex-col items-center text-center 
                            max-w-md mx-auto 
                            h-[250px] md:h-[270px]"
              >
                <p className="text-white text-lg md:text-xl font-secondary italic">
                  “{test.content}”
                </p>
                <div className="flex flex-col items-center mt-6">
                  <h4 className="text-cyan-400 font-primary text-xl">
                    {test.authorName}
                  </h4>
                  <p className="text-sm text-white/70 font-secondary">
                    {test.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonialsaqua;
