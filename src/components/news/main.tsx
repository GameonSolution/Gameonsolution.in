import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hook/use-outside-click";
import { NewsFeed, useNewsFeed } from "@/hook/useNewsFeed";

export function ExpandableCardDemo() {
  const { queryClient } = useNewsFeed();

  const data = queryClient.getQueryData(["newsfeeds"]) as NewsFeed[];

  // console.log(data);
  const [active, setActive] = useState<(typeof data)[number] | NewsFeed | any>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));
  const getYoutubeId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.details}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.details}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-primary overflow-hidden"
            >
              <motion.div layoutId={`image-${active.details}-${id}`}>
                {active.fileType === "youtube" ? (
                  <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${getYoutubeId(
                      active.mediaUrl
                    )}`}
                    title={active.details}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img
                    width={200}
                    height={200}
                    src={active.mediaUrl}
                    alt={active.details}
                    className="w-full h-80 lg:h-80 object-cover object-top"
                  />
                )}
              </motion.div>

              <div>
                <div className="flex  items-start p-4">
                  <div>
                    <motion.h3 layoutId={`title-${active.details}-${id}`}>
                      <p className=" font-primary text-white text-base uppercase leading-tight">
                        {active.details}
                      </p>
                    </motion.h3>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="w-full grid grid-cols-1 md:grid-cols-3 items-start gap-4">
        {data.map((item) => (
          <motion.div
            layoutId={`card-${item.details}-${id}`}
            key={item.details}
            onClick={() => setActive(item)}
            className="p-4 flex flex-col cursor-pointer"
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${item.details}-${id}`}>
                {item.fileType === "youtube" ? (
                  <img
                    width={100}
                    height={100}
                    src={`https://img.youtube.com/vi/${getYoutubeId(
                      item.mediaUrl
                    )}/0.jpg`}
                    alt={item.details}
                    className="h-60 w-full object-cover object-top"
                  />
                ) : (
                  <img
                    width={100}
                    height={100}
                    src={item.mediaUrl}
                    alt={item.details}
                    className="h-60 w-full object-cover object-top"
                  />
                )}
              </motion.div>
              <div className="flex justify-start items-start flex-col">
                <motion.h3
                  layoutId={`title-${item.details}-${id}`}
                  className="font-primary text-left text-base text-white"
                >
                  {item.details}
                </motion.h3>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
