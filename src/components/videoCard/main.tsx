// import { useRef, useState, useEffect } from "react";
// import { FaPause, FaPlay } from "react-icons/fa";
// import { MdMusicOff, MdMusicNote } from "react-icons/md";

// const VideoCard: React.FC<{ videoSrc: string }> = ({ videoSrc }) => {
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isMuted, setIsMuted] = useState(true);
//   const [duration, setDuration] = useState(0);
//   const [currentTime, setCurrentTime] = useState(0);

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !isMuted;
//       setIsMuted(!isMuted);
//     }
//   };

//   const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newTime = parseFloat(event.target.value);
//     if (videoRef.current) {
//       videoRef.current.currentTime = newTime;
//     }
//   };

//   useEffect(() => {
//     const videoElement = videoRef.current;
//     if (videoElement) {
//       // Update duration once metadata is loaded
//       const updateDuration = () => {
//         setDuration(videoElement.duration || 0);
//       };

//       // Update current time during playback
//       const updateCurrentTime = () => {
//         setCurrentTime(videoElement.currentTime || 0);
//       };

//       videoElement.addEventListener("loadedmetadata", updateDuration);
//       videoElement.addEventListener("timeupdate", updateCurrentTime);

//       // Cleanup listeners when component unmounts
//       return () => {
//         videoElement.removeEventListener("loadedmetadata", updateDuration);
//         videoElement.removeEventListener("timeupdate", updateCurrentTime);
//       };
//     }
//   }, []);

//   const handleMouseEnter = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = false;
//       setIsMuted(false);
//       videoRef.current.play();
//     }
//   };

//   const handleMouseLeave = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = true;
//       setIsMuted(true);
//     }
//   };

//   return (
//     <div
//       className="relative group h-full overflow-hidden transition-transform duration-300 ease-in-out"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <video
//         ref={videoRef}
//         src={videoSrc}
//         loop
//         autoPlay
//         muted={isMuted}
//         className="object-cover absolute w-full h-full z-1 overflow-hidden"
//       />
//       <button
//         className="play-button flex justify-center items-center"
//         onClick={togglePlay}
//       >
//         {isPlaying ? <FaPause /> : <FaPlay />}
//       </button>
//       <button className="mute-button" onClick={toggleMute}>
//         {isMuted ? <MdMusicOff /> : <MdMusicNote />}
//       </button>

//       <input
//         type="range"
//         min={0}
//         max={duration}
//         value={currentTime}
//         onChange={handleSliderChange}
//         className="z-10 group-hover:block hidden bg-black bottom-10 w-full px-10 border range-slider border-red-50 cursor-pointer absolute"
//       />
//       <div className="flex items-center"></div>
//     </div>
//   );
// };

// export default VideoCard;

import { useRef, useState, useEffect } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { MdMusicOff, MdMusicNote } from "react-icons/md";

interface Props {
  videoSrc: string;
  fileType: "video" | "youtube";
}

const VideoCard: React.FC<Props> = ({ videoSrc, fileType }) => {
  if (fileType === "youtube") {
    const videoId = getYouTubeID(videoSrc);
    if (!videoId) return <div className="text-white">Invalid YouTube URL</div>;

    return (
      <iframe
        className="w-full h-full rounded-xl"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  // Default to "video"
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(event.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const updateDuration = () => {
        setDuration(videoElement.duration || 0);
      };

      const updateCurrentTime = () => {
        setCurrentTime(videoElement.currentTime || 0);
      };

      videoElement.addEventListener("loadedmetadata", updateDuration);
      videoElement.addEventListener("timeupdate", updateCurrentTime);

      return () => {
        videoElement.removeEventListener("loadedmetadata", updateDuration);
        videoElement.removeEventListener("timeupdate", updateCurrentTime);
      };
    }
  }, []);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <div
      className="relative group h-full overflow-hidden transition-transform duration-300 ease-in-out"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        loop
        autoPlay
        muted={isMuted}
        className="object-cover absolute w-full h-full z-1 overflow-hidden rounded-xl"
      />
      <button
        className="absolute top-4 left-4 z-10 bg-black bg-opacity-50 p-2 rounded-full text-white"
        onClick={togglePlay}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button
        className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 p-2 rounded-full text-white"
        onClick={toggleMute}
      >
        {isMuted ? <MdMusicOff /> : <MdMusicNote />}
      </button>

      <input
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        onChange={handleSliderChange}
        className="z-10 group-hover:block hidden bg-black bottom-10 w-full px-10 border range-slider border-red-50 cursor-pointer absolute"
      />
    </div>
  );
};

function getYouTubeID(url: string): string | null {
  const regex =
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

export default VideoCard;
