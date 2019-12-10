import React, { useRef, useEffect, useState } from "react";
import * as LivePhotosKit from "livephotoskit";
import style from "./LivePhoto.module.scss";
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
  const [player, setPlayer] = useState<LivePhotosKit.Player>();

  useEffect(() => {
    if (textInput && textInput.current) {
      const htmlPlayer = LivePhotosKit.Player(textInput.current);
      setPlayer(htmlPlayer);
      if (player) {
        player.showsNativeControls = false;
        player.playbackStyle = playbackStyle;
      }
    }
  });

  const playLoop = () => {
    if (player) {
      player.play();
    }
  };

  const playStop = () => {
    if (player) {
      player.pause();
    }
  };

  return (
    <div
      className={style.photo}
      onMouseEnter={playLoop}
      onTouchStart={playLoop}
      onTouchEnd={playStop}
      onMouseLeave={playStop}
      ref={textInput}
      data-live-photo
      data-photo-src={imagePath}
      data-video-src={videoPath}
    />
  );
};

export default LivePhoto;
