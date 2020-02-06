import React, { useState } from "react";
import LivePhoto from "../LivePhoto/livePhoto";
// import stillImage from "./images/IMG_0682.jpg";
// import videos from "./images/IMG_0682.mp4";
// import linnBilde from "./images/linn.jpg";
// import linnVideo from "./images/linn.mp4";
// import jonasBilde from "./images/jonas.jpg";
// import jonasVideo from "./images/jonas.mp4";
import style from "./aboutLivePhoto.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";

const AboutLivePhoto = () => {
  const [showImplementation, setShowImplementation] = useState(false);
  const copyText = () => {};
  return (
    <section>
      <h3>Live Photo</h3>
      <p>
        A React component to show live photos <br />
        Hover over the image to "play" photo
      </p>
      <section className={style.gridrow}>
        <div>
          <LivePhoto
            imagePath={"images/jonas.jpg"}
            videoPath={"images/jonas.mp4"}
          />
        </div>
        {/* <div>
          <LivePhoto imagePath={stillImage} videoPath={videos} />
        </div>
        <div>
          <LivePhoto imagePath={linnBilde} videoPath={linnVideo} />
        </div> */}
      </section>
      <p>
        Apple has a LivePhotosKit JS, but i found it a little bit chunky to use.
        So i made a react wrapper over it. Here is how you would use it:
      </p>
      <SyntaxHighlighter language="javascript" style={tomorrow}>
        {usageString}
      </SyntaxHighlighter>
      <button onClick={() => setShowImplementation(!showImplementation)}>
        {showImplementation ? "hide implementation" : "Show implementation"}
      </button>
      {showImplementation && (
        <SyntaxHighlighter language="javascript" style={tomorrow}>
          {codeString}
        </SyntaxHighlighter>
      )}
      <code></code>
    </section>
  );
};

export default AboutLivePhoto;

const usageString = `<LivePhoto imagePath={"./images/horse.jpg"} videoPath={"./images/horse.mp4"} />
`;

const codeString = `import React, { useRef, useEffect, useState } from "react";
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
`;