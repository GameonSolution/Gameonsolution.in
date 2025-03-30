import { useRef, useState, useEffect } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { MdMusicOff, MdMusicNote } from "react-icons/md";

const VideoCard: React.FC<{ videoSrc: string }> = ({ videoSrc }) => {
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
      // Update duration once metadata is loaded
      const updateDuration = () => {
        setDuration(videoElement.duration || 0);
      };

      // Update current time during playback
      const updateCurrentTime = () => {
        setCurrentTime(videoElement.currentTime || 0);
      };

      videoElement.addEventListener("loadedmetadata", updateDuration);
      videoElement.addEventListener("timeupdate", updateCurrentTime);

      // Cleanup listeners when component unmounts
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
        className="object-cover absolute w-full h-full z-1 overflow-hidden"
      />
      <button
        className="play-button flex justify-center items-center"
        onClick={togglePlay}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button className="mute-button" onClick={toggleMute}>
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
      <div className="flex items-center"></div>
    </div>
  );
};

export default VideoCard;
