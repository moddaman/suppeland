import React, { useState } from "react";
import LivePhoto from "../LivePhoto/livePhoto";
import style from "./aboutLivePhoto.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";

const AboutLive = () => {
  const [showImplementation, setShowImplementation] = useState(false);
  const copyText = () => {};
  return (
    <section>
      <h3>Live Photo</h3>
      <p>
        En React komponent for å vise "live photos" <br />
      </p>
      <div className={style.super}>
        <div>
          <div>click to play and pause</div>
          <LivePhoto interaction={"CLICK"} videoPath={"images/jonas.mp4"} />
        </div>
        <div>
          <div>hover to play</div>
          <LivePhoto interaction={"HOVER"} videoPath={"images/linn.mp4"} />
        </div>
      </div>
      <p>
        Prøvde først Apple sitt LivePhotosKit JS for å vise "live photos", men
        fant ut at det var mye lettere å bare bruke HTML Video.
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

export default AboutLive;

const usageString = `<LivePhoto interaction={"CLICK"} videoPath={"<Video url>"} />
`;

const codeString = `import React, { useRef, useEffect } from "react";
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
      onMouseEnter={interaction === "HOVER" ? toggle : () => console.log("X")}
      onMouseLeave={interaction === "HOVER" ? toggle : () => console.log("X")}
      onClick={interaction === "CLICK" ? toggle : () => console.log("X")}
    >
      <source src={videoPath} type="video/mp4"></source>
    </video>
  );
};

export default LivePhoto;
`;
