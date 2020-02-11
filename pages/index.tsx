import FunnyText from "./FunnyText/funnyText";
import AboutLive from "./AboutLivePhoto/aboutLivePhoto";
import style from "./index.module.css";

const Home = () => {
  return (
    <div className={style.app}>
      <div className={style.container}>
        <header className="App-header">
          <FunnyText text={"RANGO"} />
        </header>
        <AboutLive />
      </div>
    </div>
  );
};

export default Home;
