import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import SliderSection from "../ProductCarousel/main";
import { OptimizedImage } from "@/components/lazyLoadingImage";

export type CarouselImage = {
  poster: string;
  name: string;
  blurHash?: string;
};

interface VideoCarouselProps {
  carouselImages: CarouselImage[];
  title: string;
}

export const VideoCarousel = ({
  carouselImages,
}: // title,
VideoCarouselProps) => {
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start start", "end start"],
  });

  const [carouselVariant, setCarouselVariant] = useState<"inactive" | "active">(
    "inactive"
  );

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setCarouselVariant(progress >= 0.67 ? "active" : "inactive");
  });

  const randomcarouselImagesSet1 = carouselImages
    .sort(() => Math.random() - 0.5)
    .concat(carouselImages.sort(() => Math.random() - 0.5))
    .concat(carouselImages.sort(() => Math.random() - 0.5));

  const randomcarouselImagesSet2 = carouselImages
    .sort(() => Math.random() - 0.5)
    .concat(carouselImages.sort(() => Math.random() - 0.5))
    .concat(carouselImages.sort(() => Math.random() - 0.5))
    .sort(() => Math.random() - 0.5);

  return (
    <motion.div animate={carouselVariant} className="bg-background pb-16">
      <div
        ref={carouselWrapperRef}
        className="mt-[-100vh] h-[300vh] overflow-clip"
      >
        <div className="sticky top-0 flex xl:h-[40%] md:h-[43%] lg:h-[50%]  h-[40%] w-full  items-center">
          <SliderSection images={carouselImages} />
        </div>
      </div>

      <motion.div
        variants={{
          active: { opacity: 1, y: 0 },
          inactive: { opacity: 0, y: 20 },
        }}
        transition={{ duration: 0.4 }}
        className="-mt-[calc((100vh-(300px*(16/9)))/2)] space-y-3 pt-4 md:-mt-[calc((100vh-(60vw*(9/16)))/2)]"
      >
        <SmallVideoCarousel carouselImages={randomcarouselImagesSet1} />
        <div className="[--carousel-offset:-32px] [--duration:74s]">
          <SmallVideoCarousel carouselImages={randomcarouselImagesSet2} />
        </div>
      </motion.div>
    </motion.div>
  );
};

const SmallVideoCarousel = ({
  carouselImages,
}: {
  carouselImages: CarouselImage[];
}) => {
  return (
    <div className="overflow-clip">
      <div className="animate-carousel-move relative left-[var(--carousel-offset,0px)] flex gap-3">
        {carouselImages.map((carouselImage, index) => (
          <div
            className="aspect-video w-[40vw] shrink-0 md:w-[23vw]"
            key={`${carouselImage.name}-${index}`}
          >
            <OptimizedImage
              classNames="h-52 rounded-xl  object-cover w-80"
              imageUrl={carouselImage.poster}
              blurhash={
                carouselImage.blurHash ?? "L85#@1ay02WCbaayjGoL8#ay??ay"
              }
              height={600}
              width={320}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
