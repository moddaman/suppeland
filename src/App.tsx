import React from "react";
import "./App.css";
import FunnyText from "./Common/FunnyText/FunnyText";
import { AboutLivePhoto } from "./Entries/AboutLivePhoto";

// import * as LivePhotosKit from 'livephotoskit';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <FunnyText text={"RANGO"} />
      </header>
      <AboutLivePhoto />
      {/* <div className="photo-container">
        <LivePhoto imagePath={jonasBilde} videoPath={jonasVideo} />
        <LivePhoto imagePath={stillImage} videoPath={videos} />
        <LivePhoto imagePath={linnBilde} videoPath={linnVideo} />
        <LivePhoto imagePath={mortenBilde} videoPath={mortenVideo} />
        <LivePhoto imagePath={strandBilde} videoPath={strandVideo} />
      </div> */}

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
