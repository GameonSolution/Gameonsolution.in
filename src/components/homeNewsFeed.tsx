import AnimatedCard from "./animateCard";

const HomeNewsFeed: React.FC = () => {
  const newsFeedImages = [
    "/sunNewsLogo.png",
    "/sitaLogo.png",
    "/vikadanLogo.png",
  ];
  return (
    <section className="flex flex-col gap-10 items-center select-none bg-primary px-10 md:px-20 lg:px-[7.5rem] pb-16 lg:pb-28">
      <div className="border-opacity-15 w-full lg:w-[80%] lg:px-10 flex flex-col gap-10">
        <div className="w-full flex justify-center">
          <AnimatedCard>
            <p className="text-[12px] font-secondary  uppercase tracking-[1px]">
              News feed
            </p>
          </AnimatedCard>
        </div>
        <div className="flex flex-col gap-5">
          <AnimatedCard>
            <p className="text-base lg:text-3xl text-center text-white font-secondary">
              We specialize in bringing sports systems to the market that
              prioritize top quality, high sports performance, and
              sustainability, tailored to meet your specific needs.
            </p>
          </AnimatedCard>
          <AnimatedCard>
            <p className="text-base lg:text-3xl text-center text-white font-secondary">
              Picture meticulously designed installations, grounded in
              scientific principles, aimed at preventing cartilage injuries a
              groundbreaking solution engineered to prioritize the well-being of
              athletes and sports enthusiasts alike.
            </p>
          </AnimatedCard>
        </div>
      </div>
      <AnimatedCard>
        <div className="border-opacity-15 w-full lg:w-[80%] lg:px-10 flex justify-center gap-2 md:gap-5">
          {newsFeedImages.map((image, index) => (
            <div
              key={index}
              className="w-28 h-24 md:w-32 md:h-28 shadow-lg overflow-hidden bg-yellow-100/20 p-5"
            >
              <img
                src={image} // Replace with actual paths
                alt={`image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </AnimatedCard>
    </section>
  );
};

export default HomeNewsFeed;
