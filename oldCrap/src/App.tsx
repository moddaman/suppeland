import React from "react";
import "./App.css";
import FunnyText from "./Common/FunnyText/FunnyText";
import { AboutLivePhoto } from "./Entries/AboutLivePhoto";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <FunnyText text={"RANGO"} />
      </header>
      <AboutLivePhoto />
    </div>
  );
};

export default App;
