import React, { useRef, useEffect, useState } from "react";
import LivePhotosKit from "livephotoskit";
import style from "./livePhoto.module.css";
import { PlaybackStyleLiteral } from "livephotoskit";

interface IProps {
  imagePath: string;
  videoPath: string;
  playbackStyle?: PlaybackStyleLiteral;
}

const LivePhoto = ({
  imagePath,
  videoPath,
  playbackStyle = LivePhotosKit.PlaybackStyle.LOOP
}: IProps) => {
  const textInput = useRef<HTMLInputElement>(null);
  // const [player, setPlayer] = useState<LivePhotosKit.Player>();

  // useEffect(() => {
  //   if (textInput && textInput.current && typeof window !== "undefined") {
  //     const htmlPlayer = LivePhotosKit.Player(textInput.current);
  //     setPlayer(htmlPlayer);
  //     if (player) {
  //       player.showsNativeControls = false;
  //       player.playbackStyle = playbackStyle;
  //     }
  //   }
  // }, []);

  // const playLoop = () => {
  //   if (player) {
  //     player.play();
  //   }
  // };

  // const playStop = () => {
  //   if (player) {
  //     player.pause();
  //   }
  // };
  if (window) {
    return (
      <div>weird</div>
      // <div
      //   className={style.photo}
      //   onMouseEnter={playLoop}
      //   onTouchStart={playLoop}
      //   onTouchEnd={playStop}
      //   onMouseLeave={playStop}
      //   ref={textInput}
      //   data-live-photo
      //   data-photo-src={imagePath}
      //   data-video-src={videoPath}
      // />
    );
  }
  return <div>Loading</div>;
};

export default LivePhoto;
