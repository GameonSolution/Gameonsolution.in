import { useEffect } from "react";
import TextHoverAnimation from "./textHoverAnimation";
import { useTestimonials } from "@/hook/useTestimonials";
import VideoCard from "./videoCard/main";
import TabSEO from "./seoOptimize";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { seoData } from "@/common/seoTitleDescription";

type Testimonial = {
  id: number;
  authorName: string;
  content: string;
  rating: number;
  createdAt: Date;
  fileType: "image" | "video" | "youtube" | "instagram";
  mediaUrl: string;
  role?: string; // optional
};

const Testimonials = () => {
  const { queryClient } = useTestimonials();
  const data =
    (queryClient.getQueryData(["testimonials"]) as Testimonial[]) ?? [];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const randomTestimonials = [...data]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <>
      <TabSEO
        title={seoData.testimonials.title}
        description={seoData.testimonials.description}
        keywords={seoData.testimonials.keywords}
        image={seoData.testimonials.image}
        url={seoData.testimonials.url}
      />

      <div className="flex flex-col pt-32 pb-20 items-center px-6 md:px-16">
        {/* Header */}
        {/* <div className="text-center max-w-4xl mb-16"> */}
        <div className="max-w-4xl flex flex-col gap-5 text-center items-center justify-center px-10 lg:px-48 mb-16">
          <p className="text-[12px] font-secondary uppercase tracking-[1px] text-white">
            what client says
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-secondary uppercase leading-tight">
            <TextHoverAnimation text="Testimonials" />
          </h1>
          <p className="text-lg md:text-2xl text-white font-secondary mt-4">
            Discover the heartfelt words of those we've had the privilege to
            serve. Our client's stories reflect the passion and dedication we
            bring to every moment.
          </p>
        </div>

        {/* Grid of Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
          {randomTestimonials.map((test, i) => (
            <div
              key={i}
              className="bg-emerald-900/20 border border-emerald-600/20 rounded-xl p-4 flex flex-col gap-4 items-center shadow-lg backdrop-blur-sm"
            >
              <div className="h-[300px] w-full">
                <VideoCard
                  videoSrc={test.mediaUrl}
                  fileType={test.fileType as "video" | "youtube"}
                />
              </div>
              <p className="text-lg text-yellow-400 font-primary text-center text-secondary">
                {test.authorName}
              </p>
              <p className="text-sm text-white font-primary text-center font-medium text-secondary">
                {test.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Text Testimonials Slider */}
      {/* <div className="max-w-4xl flex flex-col gap-5 text-center items-center justify-center px-10 lg:px-48 mb-16">
        <p className="text-lg md:text-2xl text-white font-secondary mt-4">
          Discover the heartfelt words of those we've had the privilege to
          serve. Our client's stories reflect the passion and dedication we
          bring to every moment.
        </p>
      </div> */}

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
                  <h4 className="text-yellow-400 font-primary text-xl">
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

export default Testimonials;
