import React from "react";

const Awards: React.FC = () => {
  const awardImages = [
    { src: "/awards/sunNewsLogo.webp", alt: "Sun News Logo" },
    { src: "/awards/sitaLogo.webp", alt: "Sita News Logo" },
    { src: "/awards/vikadanLogo.webp", alt: "Vikatan Logo" },
    { src: "/awards/radiocity.webp", alt: "Radio City Logo" },
    { src: "/awards/midtown.webp", alt: "MidTown Logo" },
  ];

  return (
    <section className="flex flex-col gap-10 items-center select-none px-6 md:px-20 lg:px-[7.5rem] py-24">
      <div className="w-full lg:w-[80%] flex flex-col gap-10">
        {/* Page Title */}
        <div className="w-full flex justify-center">
          <p className="text-3xl md:text-5xl font-primary uppercase text-white text-center">
            Our <span className="text-secondary">Awards & Features</span>
          </p>
        </div>

        {/* Sub Title */}
        <div className="w-full flex justify-center">
          <p className="text-sm md:text-base font-secondary uppercase tracking-[2px] text-yellow-400">
            Recognized by Leading Media Platforms
          </p>
        </div>

        {/* Description Section */}
        <div className="flex flex-col gap-5 text-center">
          <p className="text-base lg:text-2xl text-white font-secondary leading-relaxed">
            Our excellence in sports infrastructure has been acknowledged by top
            media platforms and reputed institutions across India.
          </p>
          <p className="text-base lg:text-2xl text-white font-secondary leading-relaxed">
            We’re proud to be featured and awarded by trusted channels for our
            innovation, quality, and contribution to sports development.
          </p>
        </div>

        {/* Award Logos */}
        <div className="flex justify-center flex-wrap gap-4 md:gap-8 pt-4">
          {awardImages.map((image, index) => (
            <div
              key={index}
              className="w-28 h-24 md:w-32 md:h-28 bg-yellow-100/20 p-4 shadow-lg rounded-md flex items-center justify-center"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
