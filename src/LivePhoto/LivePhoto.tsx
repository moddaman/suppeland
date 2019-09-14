import React, { useRef, useEffect, useState } from "react";
import * as LivePhotosKit from "livephotoskit";
import style from "./LivePhoto.module.scss";

interface IProps {
  imagePath: string;
  videoPath: string;
  width?: number;
  height?: number;
}

const LivePhoto = ({
  imagePath,
  videoPath,
  width = 320,
  height = 320
}: IProps) => {
  const textInput = useRef<HTMLInputElement>(null);

  const [player, setPlayer] = useState<LivePhotosKit.Player>();

  useEffect(() => {
    if (textInput && textInput.current) {
      const p = LivePhotosKit.Player(textInput.current);
      setPlayer(p);
      if (player) {
        player.showsNativeControls = false;
        player.playbackStyle = LivePhotosKit.PlaybackStyle.LOOP;
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
      onMouseLeave={playStop}
      ref={textInput}
      data-live-photo
      data-photo-src={imagePath}
      data-video-src={videoPath}
    />
  );
};

export default LivePhoto;
