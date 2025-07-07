import { useEffect } from "react";
import TextHoverAnimation from "./textHoverAnimation";
import { useTestimonials } from "@/hook/useTestimonials";
import VideoCard from "./videoCard/main";
import TabSEO from "./seoOptimize";
import { seoData } from "@/common/seoTitleDescription";

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
              className="bg-yellow-300/90 border border-yellow-400 rounded-xl p-4 flex flex-col gap-4 items-center shadow-xl backdrop-blur-md hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="h-[300px] w-full">
                <VideoCard
                  videoSrc={test.mediaUrl}
                  fileType={test.fileType as "video" | "youtube"}
                />
              </div>
              <p className="text-lg text-black text-center font-bold">
                {test.authorName}
              </p>
              <p className="text-sm text-gray-800 text-center font-medium">
                {test.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
