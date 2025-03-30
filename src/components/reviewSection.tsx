import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { reviewsObj } from "@/common/reviewsObj";
import AnimatedCard from "./animateCard";

const ReviewsSection = () => {
  return (
    <section
      id="reviews"
      className="flex w-full flex-col items-center select-none min-h-[65vh] gap-20 bg-primary md:px-10 lg:px-16 pb-16 lg:pb-28"
    >
      <div className="text-center w-full flex flex-col gap-10">
        {/* Header */}
        <div className="w-full flex justify-center">
          <AnimatedCard>
            <p className="text-[12px] font-secondary  uppercase tracking-[1px]">
              Reviews
            </p>
          </AnimatedCard>
        </div>
        <AnimatedCard>
          <h2 className="text-4xl font-bold text-white font-primary">
            Customer Voices: <br /> Hear What{" "}
            <span className="text-secondary">They Say</span>!
          </h2>
        </AnimatedCard>
      </div>

      {/* Swiper Slider */}
      <AnimatedCard>
        <div className="relative w-full md:w-[70%] lg:w-[50%]">
          {/* Navigation Buttons for Mobile and Tablet */}
          <div className="absolute inset-y-0 lg:left-0 lg:flex items-center text-secondary z-10 hidden">
            <div
              id="prevBtn"
              className="border border-yellow-600 p-3 rounded-full hover:bg-yellow-600/20 hover:cursor-pointer flex justify-center items-center"
            >
              <FaChevronLeft className="text-3xl cursor-pointer" />
            </div>
          </div>
          <div className="absolute inset-y-0 lg:right-0 lg:flex items-center text-secondary z-10 hidden">
            <div
              id="nextBtn"
              className="border border-yellow-600 p-3 rounded-full hover:bg-yellow-600/20 hover:cursor-pointer flex justify-center items-center"
            >
              <FaChevronRight className="text-3xl cursor-pointer" />
            </div>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.3}
            centeredSlides
            loop
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation={{
              prevEl: "#prevBtn",
              nextEl: "#nextBtn",
            }}
            pagination={{ clickable: true }}
            speed={800}
            className="mil-reviews-slider"
          >
            {reviewsObj.map((review, index) => (
              <SwiperSlide
                key={index}
                className="transition-transform duration-500 ease-in-out transform scale-95 hover:scale-100 h-96 flex items-center"
              >
                <div className="flex flex-col gap-5 text-center px-5 rounded-lg transition-all duration-500 ease-in-out h-full justify-center">
                  <div className="rounded-full overflow-hidden w-32 h-32 mx-auto bg-secondary">
                    <img
                      src={review.img}
                      alt="Client"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-lg font-secondary">{review.review}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </AnimatedCard>

      <style>
        {`
          /* Style for blurred neighboring slides */
          .mil-reviews-slider .swiper-slide {
            opacity: 0.5;
            filter: blur(5px);
            transform: scale(0.9);
            transition: all 0.5s ease;
          }
          .mil-reviews-slider .swiper-slide-active {
            opacity: 1;
            filter: blur(0);
            transform: scale(1);
          }
          /* Enhanced styling for pagination dashes */
          .swiper-pagination-bullet {
            background-color: #febc12;
            width: 16px; /* Dash width */
            height: 4px; /* Dash height */
            opacity: 0.3;
            transition: opacity 0.3s;
            border-radius: 2px;
          }
          .swiper-pagination-bullet-active {
            opacity: 1;
            background-color: #febc12;
          }
        `}
      </style>
    </section>
  );
};

export default ReviewsSection;
