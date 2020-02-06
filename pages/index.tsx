import FunnyText from "./FunnyText/funnyText";
import AboutLivePhoto from "./AboutLivePhoto/AboutLivePhoto";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <FunnyText text={"RANGO"} />
      </header>
      <AboutLivePhoto />
    </div>
  );
};

export default Home;
