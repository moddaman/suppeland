import React from "react";
import "./App.css";
import stillImage from "./images/IMG_0682.jpg";
import videos from "./images/IMG_0682.mp4";
import linnBilde from "./images/linn.jpg";
import linnVideo from "./images/linn.mp4";
import jonasBilde from "./images/jonas.jpg";
import jonasVideo from "./images/jonas.mp4";
import mortenBilde from "./images/mortenMarked.jpg";
import mortenVideo from "./images/mortenMarked.mp4";
import strandBilde from "./images/strand.jpg";
import strandVideo from "./images/strand.mp4";
// import victorBilde from './images/victorPaaBerget.jpg';
// import victorVideo from './images/victorPaaBerget.mp4';
import LivePhoto from "./LivePhoto/LivePhoto";
import FunnyText from "./FunnyText/FunnyText";

// import * as LivePhotosKit from 'livephotoskit';

const App: React.FC = () => {
  console.log(stillImage);
  return (
    <div className="App">
      <header className="App-header">
        <FunnyText text={"Altsa Ogsa"} />
      </header>
      <div className="photo-container">
        <LivePhoto imagePath={jonasBilde} videoPath={jonasVideo} />
        <LivePhoto imagePath={stillImage} videoPath={videos} />
        <LivePhoto imagePath={linnBilde} videoPath={linnVideo} />
        <LivePhoto imagePath={mortenBilde} videoPath={mortenVideo} />
        <LivePhoto imagePath={strandBilde} videoPath={strandVideo} />
      </div>

      {/* <div className='container'>
        <div className='cool'>
          <h1>Denne siden var bra!</h1>
        </div>
        <div className='lame'>
          <h1>Denne siden var Dårlig!</h1>
        </div>
      </div> */}
    </div>
  );
};

export default App;
