import React from "react";
import ReactLivePhotos from "./ReactLivePhoto";

const LivePhoto: React.FC = () => {
  return (
    <div>
      <h1>Denne siden var bra!</h1>
      <ReactLivePhotos
        className="whatever-you-want"
        width="300"
        height="200"
        photoSrc="../../../images/kafe.jpg"
        videoSrc="../../../images/kafe.mov"
      />
    </div>
  );
};

export default LivePhoto;
