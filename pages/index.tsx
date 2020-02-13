import FunnyText from "./FunnyText/funnyText";
import AboutLive from "./AboutLivePhoto/aboutLivePhoto";
import style from "./index.module.css";

const Home = () => {
  return (
    <div className={style.app}>
      <div className={style.container}>
        <FunnyText text={"RANGO"} />
        <AboutLive />
      </div>
      <style jsx global>{`
        body {
          background-color: #ecf0f1;
          paddding: 0px;
          margin: 0px;
          min-height: 1000px;
        }
      `}</style>
    </div>
  );
};

export default Home;
