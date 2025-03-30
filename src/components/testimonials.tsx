import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import TextHoverAnimation from "./textHoverAnimation";
import { useTestimonials } from "@/hook/useTestimonials";
import VideoCard from "./videoCard/main";

import { Footer } from "./footer";
import TabSEO from "./seoOptimize";
import { seoData } from "@/common/seoTitleDescription";
import WhatsAppButton from "./WhatsappButton";

type Testimonial = {
  id: number;
  authorName: string;
  content: string;
  rating: number;
  createdAt: Date;
  fileType: "image" | "video" | "youtube" | "instagram";
  mediaUrl: string;
};

const Testimonials = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const { queryClient } = useTestimonials();

  const data =
    (queryClient.getQueryData(["testimonials"]) as Testimonial[]) ?? [];

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <TabSEO
        title={seoData.testimonials.title}
        description={seoData.testimonials.description}
        keywords={seoData.testimonials.keywords}
        image={seoData.testimonials.image}
        url={seoData.testimonials.url}
      />
      <div className="flex flex-col lg:pt-[10] pt-32  pb-20 ">
        <div className="flex flex-col gap-5 text-center items-center justify-center px-10 lg:px-48">
          <p className="text-[12px] font-secondary  uppercase tracking-[1px]">
            what client says
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-secondary uppercase leading-tight">
            <TextHoverAnimation text="Testimonials" />
          </h1>
          <p className="text-lg md:text-2xl text-white font-secondary ">
            Discover the heartfelt words of those we've had the privilege to
            serve. Our client's stories reflect the passion and dedication we
            bring to every moment.
          </p>
        </div>

        <section ref={targetRef} className="md:h-[400vh] flex flex-col px-10">
          <div className="sticky top-0  h-screen justify-center items-center  xl:flex xl:visible lg:flex lg:visible  hidden overflow-hidden">
            <motion.div style={{ x, width: 1100 }} className="flex gap-10">
              {data.map((test, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <HorizontalCard key={i} videoSrc={test.mediaUrl} />

                  {/* <p className="text-3xl  font-primary text-white  uppercase leading-tight">
                    Author <span className="text-secondary">name</span>
                  </p>
                  <div>content</div> */}
                </div>
              ))}
            </motion.div>
          </div>

          <div className="sticky top-0 justify-center items-center py-12 gap-12 md:visible lg:hidden xl:hidden flex flex-col ">
            {data.map((test, i) => (
              <div key={i} className="flex flex-col gap-2">
                <VerticalCard key={i} videoSrc={test.mediaUrl} />
                <p className="text-3xl  font-primary  text-white  uppercase leading-tight">
                  Author <span className="text-secondary">name</span>
                </p>
                <div>content</div>
              </div>
            ))}
          </div>
        </section>
        <WhatsAppButton />

        <Footer />
      </div>
    </>
  );
};

const HorizontalCard: React.FC<{ videoSrc: string }> = ({ videoSrc }) => {
  return (
    <div className=" h-[30rem] w-[20rem] transition-transform overflow-hidden  hover:z-50 duration-500 hover:shadow-2xl hover:scale-125">
      <VideoCard videoSrc={videoSrc} />
    </div>
  );
};

const VerticalCard: React.FC<{ videoSrc: string }> = ({ videoSrc }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="show"
      whileInView="visible"
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="h-[500px] w-[300px] "
    >
      <VideoCard videoSrc={videoSrc} />
    </motion.div>
  );
};

export default Testimonials;
