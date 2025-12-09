import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import TextHoverAnimation from "./textHoverAnimation";

const textTestimonials = [
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
];

const TextTestimonials = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-24 px-6 relative">
      {/* <div className="max-w-4xl flex flex-col gap-5 text-center items-center justify-center px-10 lg:px-48 mb-16">
        <p className="text-[12px] font-secondary uppercase tracking-[1px] text-white">
          what our clients say
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-secondary uppercase leading-tight">
          <TextHoverAnimation text="Testimonials" />
        </h1>
      </div> */}

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
        {textTestimonials.map((test, i) => (
          <SwiperSlide key={i}>
            <div
              className="bg-emerald-900/20 border border-emerald-600/20 rounded-2xl
                         p-8 md:p-10 shadow-xl backdrop-blur-sm
                         flex flex-col items-center justify-center text-center
                         max-w-md mx-auto
                         min-h-[240px] md:min-h-[270px]"
            >
              <p className="text-white text-base md:text-lg lg:text-xl font-secondary italic">
                “{test.content}”
              </p>
              <div className="flex flex-col items-center mt-4 md:mt-6">
                <h4 className="text-yellow-400 font-primary text-lg md:text-xl">
                  {test.authorName}
                </h4>
                <p className="text-xs md:text-sm text-white/70 font-secondary">
                  {test.role}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TextTestimonials;
