import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import { Popup } from "../popup/main";
import ContactForm from "../popup/contactsPopup";
import { useCarousel } from "@/hook/useCarousel";
import { SlBadge } from "react-icons/sl";
import TextHoverAnimation from "../textHoverAnimation";
import FootballAnimation from "../football3dAnimation";
import { iconsWithImagesObj } from "@/common/iconsWithImagesObj";
import Section from "./section";
const HomeBanners: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);

  const [hideHeading, setHideHeading] = useState(false);
  const [visibleIconIndexes, setVisibleIconIndexes] = useState<number[]>([]);

  const { getCarousels } = useCarousel();
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const popupRef = useRef<HTMLDivElement>(null);

  // const PopupState = JSON
  //   .parse
  //   localStorage.getItem("contacts-gms") as any
  //   () as { value: boolean };

  const data = getCarousels?.data as {
    id: number;
    url: string;
    phoneUrl: string;
  }[];
  // const data = queryClient.getQueryData(["carousels"]) as {
  //   id: number;
  //   url: string;
  //   phoneUrl: string;
  // }[];
  const handleClosePopup = () => {
    // localStorage.setItem("contacts-gms", JSON.stringify({ value: true }));
    setIsPopupOpen(false);
    // localStorage.setItem("contacts-gms", JSON.stringify({ value: true }));
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; // or 'scroll' depending on your needs
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isPopupOpen]);
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      smoothWheel: true,
      touchMultiplier: 1,
      wheelMultiplier: 1.5,
      autoResize: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!container.current) return;

      const { top, bottom, height } = container.current.getBoundingClientRect();
      const sectionHeight = height / data.length;

      // Calculate which section is in view
      const activeIndex = Math.floor(
        (-top + window.innerHeight / 2) / sectionHeight - 1
      );

      // Calculate visible sections
      const newVisibleIndexes: number[] = [];
      data.forEach((_, index) => {
        const sectionTop = top + index * sectionHeight;
        const sectionBottom = sectionTop + sectionHeight;

        if (
          sectionTop <= activeIndex &&
          sectionBottom >= activeIndex - sectionHeight / 2
        ) {
          newVisibleIndexes.push(index);
        }
      });

      setVisibleIconIndexes((prevIndexes) => {
        const newIndexes = prevIndexes.slice(); // Copy the previous indexes

        // Add current active index if it's new and valid
        if (!newIndexes.includes(activeIndex) && activeIndex >= 0) {
          newIndexes.push(activeIndex);
        }

        // Remove indexes greater than the active index when scrolling back
        return newIndexes
          .filter((index) => index <= activeIndex)
          .sort((a, b) => a - b);
      });

      // Check if heading should be hidden
      if (bottom * 1.25 <= window.innerHeight) {
        setHideHeading(true);
      } else {
        setHideHeading(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data]);

  if (
    !data ||
    data.length === 0 ||
    !getCarousels.isSuccess ||
    !getCarousels.isFetched ||
    getCarousels.isError
  ) {
    return (
      <main ref={container} className="relative h-[100vh]">
        <div className="flex items-center justify-center text-white text-2xl">
          No data available for carousel.
        </div>
      </main>
    );
  }

  return (
    <main
      ref={container}
      className={`relative h-[${data?.length * 100}vh] select-none lg:mb-[10%]`}
    >
      <div className="absolute bottom-0 left-0 w-full z-[9] h-36 bg-gradient-to-t from-primary to-transparent pointer-events-none"></div>
      <div className="">
        {data?.map((image, index) => (
          <Section key={index} imageSrc={image.url} phoneSrc={image.phoneUrl} />
        ))}
        <div
          ref={headingRef}
          className={`z-10 fixed text-center top-[15%] w-full transition-all duration-500 ${
            hideHeading ? "opacity-0 lg:hidden" : "opacity-100 lg:flex flex-col"
          }`}
        >
          <h1 className="text-2xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] flex items-center justify-center gap-2 font-primary [text-shadow:_7px_7px_7px_rgba(10,10,10,0.25)] text-white uppercase leading-tight">
            <span className="text-secondary">
              <SlBadge />
            </span>
            <TextHoverAnimation text={"South"} />
            <TextHoverAnimation text={"India's"} />
            <span className="text-secondary">
              <TextHoverAnimation text={"No.1"} />
            </span>
          </h1>
          <h1 className="text-2xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] flex items-center justify-center gap-2 font-primary [text-shadow:_7px_7px_7px_rgba(10,10,10,0.25)] text-white uppercase leading-tight">
            <TextHoverAnimation text={"Sports"} />
            <div className="text-secondary">
              <TextHoverAnimation text={"infrastructure"} />
            </div>
            <TextHoverAnimation text={"Developer"} />
          </h1>
        </div>
        <div
          className={`z-20 fixed text-center bottom-10 md:bottom-10 justify-center w-full transition-all duration-500 ${
            hideHeading ? "opacity-0 hidden" : "opacity-100 flex"
          }`}
        >
          <FootballAnimation />
        </div>
        <div
          className={`fixed bottom-8 md:bottom-6 w-full justify-center items-center ${
            hideHeading ? "opacity-0 lg:hidden" : "opacity-100 lg:flex"
          }`}
        >
          <h1 className="text-lg md:text-lg  flex  gap-2 font-primary [text-shadow:_7px_7px_7px_rgba(10,10,10,0.25)] text-white uppercase leading-tight  flex-col justify-center items-center">
            <span className="flex gap-2">
              <TextHoverAnimation text=" drag " />
              <TextHoverAnimation text="to" />

              <span className="text-secondary">
                <TextHoverAnimation text=" Rotate  " />
              </span>
              <TextHoverAnimation text="  a  " />
              <TextHoverAnimation text="  BALL " />
            </span>
          </h1>
        </div>
      </div>

      <div
        className={`w-full min-h-[40vh] z-10 fixed bottom-[5%] px-20 hidden justify-center items-end transition-all duration-500 ${
          hideHeading ? "opacity-0 lg:hidden" : "opacity-100 lg:flex"
        }`}
      >
        <div className="grid lg:grid-cols-5 md:grid-cols-5">
          {/** For 3D Football Space */}
          <div
            className={`z-10 grid col-start-3  row-start-1 transition-all duration-500 ${
              hideHeading ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex justify-center items-end">
              {/* <FootballAnimation /> */}
            </div>
          </div>
          {iconsWithImagesObj.map((icon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                visibleIconIndexes.includes(index)
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.5 }}
              className={`grid col-start-${icon.col} row-start-1`}
            >
              <div className="flex flex-col md:w-full w-[75%] items-start md:items-center text-left md:text-center">
                <div className="flex flex-col md:items-center items-start space-y-1">
                  <div className="items-start w-[50%] md:items-center md:justify-center md:w-full flex justify-start ">
                    <img
                      src={icon.imageSrc}
                      className="h-full w-full md:h-44 md:w-44 lg:h-44 lg:w-44 select-none"
                      draggable="false"
                    />
                  </div>
                  <span className="flex w-full flex-col items-start sm:items-center text-left sm:text-center gap-1 md:gap-3 [text-shadow:_7px_7px_7px_rgba(10,10,10,0.25)]">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-primary uppercase text-secondary z-[11] opacity-0 animate-lineUp [text-shadow:_7px_7px_7px_rgba(10,10,10,0.25)]">
                      {icon.title}
                    </h1>
                    <p className="text-md md:text-[14px] lg:text-base text-white w-[80%] leading-tight font-medium break-words [text-shadow:_7px_7px_7px_rgba(10,10,10,0.25)]">
                      {icon.description}
                    </p>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {isPopupOpen ? (
        <Popup
          className="w-full md:w-96"
          ref={popupRef}
          onClose={handleClosePopup}
          closeButton={true}
        >
          <ContactForm setIsPopupOpen={setIsPopupOpen} />
        </Popup>
      ) : null}
    </main>
  );
};

export default HomeBanners;
