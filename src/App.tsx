import React from "react";
import "./App.css";
import GoodMortenBadMorten from "./components/GoodMortenBadMorten/GoodMortenBadMorten";
import LivePhoto from "./components/LivePhoto/LivePhoto";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>- Suppeland -</h1>
      </header>
      <LivePhoto />
      <GoodMortenBadMorten />
    </div>
  );
};

export default App;
