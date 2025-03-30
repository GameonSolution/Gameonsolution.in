import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Container } from "./container";

interface HeroProps {
  title: string;
  subtitle: string;
  bgImgUrl: string;
}

export const Hero = ({ title, subtitle, bgImgUrl }: HeroProps) => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div className="text-white ">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute  left-0 h-[200vh] w-full"
      >
        <img
          className="sticky top-0 h-screen opacity-30  w-full object-cover"
          alt="Background"
          src={bgImgUrl}
        />
      </motion.div>
      <Container className="relative z-10  pt-[20rem]">
        <motion.div
          className="flex h-full flex-col items-start justify-end"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.98 }}
        >
          <h1 className="mb-28 text-4xl font-bold font-primary md:text-5xl">
            {title} <br />
            <div className="text-secondary">{subtitle}</div>
          </h1>
        </motion.div>
      </Container>
    </div>
  );
};
