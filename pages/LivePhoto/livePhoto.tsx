import React, { useRef, useEffect } from "react";
import style from "./livePhoto.module.css";

type Interaction = "CLICK" | "HOVER";

interface IProps {
  videoPath: string;
  interaction: Interaction;
}

const LivePhoto = ({ videoPath, interaction }: IProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.preload = "1";
      videoRef.current.volume = 0;
    }
  }, [videoRef.current]);

  const toggle = (currentInteraction: Interaction) => {
    if (videoRef.current && currentInteraction === interaction) {
      videoRef.current.paused
        ? videoRef.current.play()
        : videoRef.current.pause();
    }
  };

  const play = () => {};

  return (
    <video
      className={style.video}
      loop
      preload="none"
      ref={videoRef}
      onMouseEnter={() => toggle("HOVER")}
      onMouseLeave={() => toggle("HOVER")}
      onClick={() => toggle("CLICK")}
    >
      <source src={videoPath} type="video/mp4"></source>
    </video>
  );
};

export default LivePhoto;
