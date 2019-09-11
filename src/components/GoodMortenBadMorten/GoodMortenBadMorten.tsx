import React from "react";
import style from "./GoodMortenBadMorten.module.scss";

const GoodMortenBadMorten: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.good}>
        <h1>Denne siden var bra!</h1>
      </div>
      <div className={style.bad}>
        <h1>Denne siden var Dårlig!</h1>
      </div>
    </div>
  );
};

export default GoodMortenBadMorten;
