import React from "react";
import AnimatedCard from "./animateCard";
import TextHoverAnimation from "./textHoverAnimation";
import TabSEO from "./seoOptimize";
import { seoData } from "@/common/seoTitleDescription";

const AboutUs: React.FC = () => {
  return (
    <>
      <TabSEO
        title={seoData.about.title}
        description={seoData.about.description}
        keywords={seoData.about.keywords}
        image={seoData.about.image}
        url={seoData.about.url}
      />
      <section className="flex flex-col gap-24 justify-center items-center select-none min-h-screen bg-primary px-10 md:px-20 lg:px-[7.5rem] pb-16 lg:pb-28">
        <div className="flex flex-col  w-full  text-center    gap-10">
          <AnimatedCard>
            <p className="text-[12px] font-secondary uppercase tracking-[1px]">
              About Us
            </p>
          </AnimatedCard>

          <div className="flex flex-col gap-5 md:gap-6 text-base md:text-lg lg:text-2xl xl:text-3xl text-white font-secondary">
            <AnimatedCard>
              <h1 className="text-3xl md:text-4xl flex gap-2 lg:text-5xl xl:text-6xl font-primary text-white  uppercase leading-tight">
                <TextHoverAnimation text="who" />
                <span className="text-secondary">
                  {" "}
                  <TextHoverAnimation text="we" />
                </span>{" "}
                <TextHoverAnimation text="are" />
              </h1>
            </AnimatedCard>
            <AnimatedCard>
              <p className="md:text-2xl text-lg">
                Sports play a crucial role in helping us make the most of our
                time by staying active, refreshed, and engaged. Recognizing this
                need, Game On Solution has developed high-quality sports turfs
                across South India, specially designed to enhance the playing
                experience. From football fields to outdoor cricket pitches,
                each turf is arranged with precision to support optimal game
                play and comfort for athletes. Notably, Game On Solution is a
                certified provider of FIFA-standard turf, ensuring that players
                enjoy top-tier facilities that meet international standards.
                With a commitment to developing world-class sports
                infrastructure, the company has established itself as South
                India’s leading sports infrastructure developer.
              </p>
            </AnimatedCard>
            <AnimatedCard>
              <p className="md:text-2xl text-lg">
                In just the last two years, Game On Solution’s founder, Mr.
                Dhineshwaran, has many sports turfs across South
                India, transforming local communities and inspiring young
                athletes. This expansion has provided countless opportunities
                for young people to pursue careers in sports, turning their
                passion into a profession. Game On Solution has been
                instrumental in fulfilling these dreams, empowering the youth to
                see sports as a viable and rewarding path. Through quality
                facilities and steadfast dedication, Game On Solution is paving
                the way for a new generation of athletes in South India, where
                sports can thrive both as a passion and as a professional
                journey.
              </p>
            </AnimatedCard>
          </div>
        </div>

        {/* Image Section with Enhanced Inner Light Effect */}
        <div className="flex  md:flex-row flex-col gap-12  ">
          <div className="relative w-full  flex items-center justify-center ">
            <div className="relative flex items-center">
              <div className="absolute border-4 border-yellow-600 w-full h-full -top-5 left-5 sm:-top-7 sm:left-6 bg-black/20 blur-sm"></div>
              <AnimatedCard>
                <div className="w-full h-full overflow-hidden group">
                  <img
                    src="/directorImg.webp"
                    className="lg:w-[400px] w-[250px]  h-full object-cover transition-transform duration-500 ease-out scale-105 transform group-hover:scale-100"
                    alt="Director"
                  />
                  {/* Inner Light Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none">
                    <div className="absolute inset-0 bg-black/25" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-purple-800/20 to-yellow-500/50" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/50" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/45 to-black" />
                    {/* Text Overlay */}
                    <div className="absolute inset-0 flex  items-end justify-center duration-500 ease-out p-4">
                      <h1 className="lg:text-xl flex-col flex text-white bg-transparent p-2 font-primary tracking-[3px] w-full text-start">
                        <span className="text-secondary">Dhineshwaran</span>

                        <span className="font-sans text-xs">
                          <TextHoverAnimation text="Managing" />
                          <span className="text-secondary">
                            {" "}
                            <TextHoverAnimation text="Director" />
                          </span>
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full flex flex-col justify-center items-center lg:text-left text-center lg:items-start gap-8  ">
            <AnimatedCard>
              <h1 className="text-3xl md:text-4xl flex gap-2 lg:text-5xl xl:text-6xl font-primary text-white uppercase leading-tight">
                <TextHoverAnimation text={"Managing"} />
                <span className="text-secondary">
                  {" "}
                  <TextHoverAnimation text={"Director"} />
                </span>
              </h1>
            </AnimatedCard>

            {/* Main Content */}
            <div className="flex flex-col gap-10   text-white font-secondary">
              <AnimatedCard>
                <p className="md:text-2xl text-lg">
                  GameOn Solution specializes in constructing sports grounds,
                  artificial football turf, cricket pitches, volleyball courts,
                  basketball courts, and badminton courts, primarily serving
                  customers in South India. GameOn Solution offers a
                  comprehensive range of services, including building turf
                  grounds, athletic tracks, and sports flooring solutions.
                </p>
              </AnimatedCard>

              <AnimatedCard>
                <p className="md:text-2xl text-lg">
                  Their services cover everything from consultancy and planning
                  stages to the construction and execution of sports complexes
                  and grounds. Additionally, GameOn Solution undertakes
                  maintenance, repair, and upgrade projects for existing
                  facilities. With an in-house engineering and project team
                  equipped with state-of-the-art design tools and high-quality
                  materials, they ensure efficient implementation of projects.
                </p>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
