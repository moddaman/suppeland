import React, { useRef, useEffect } from "react";
import style from "./livePhoto.module.css";

type Interaction = "CLICK" | "HOVER";

interface IProps {
  imagePath: string;
  videoPath: string;
  interaction: Interaction;
}

const LivePhoto = ({ videoPath, interaction }: IProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.preload = "1";
    }
  }, [videoRef.current]);

  const toggle = () => {
    if (videoRef.current) {
      videoRef.current.paused
        ? videoRef.current.play()
        : videoRef.current.pause();
    }
  };

  return (
    <video
      className={style.video}
      loop
      preload="none"
      ref={videoRef}
      onMouseEnter={interaction === "HOVER" ? toggle : () => console.log("hei")}
      onMouseLeave={interaction === "HOVER" ? toggle : () => console.log("hei")}
      onClick={interaction === "CLICK" ? toggle : () => console.log("hei")}
    >
      <source src={videoPath} type="video/mp4"></source>
      {/* <source src={videoPath} type="video/mp4" /> */}
      <source
        src="https://giant.gfycat.com/VerifiableTerrificHind.webm"
        type="video/webm"
      />
    </video>
  );
};

export default LivePhoto;
