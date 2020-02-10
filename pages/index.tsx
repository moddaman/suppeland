import FunnyText from "./FunnyText/funnyText";
import AboutLive from "./AboutLivePhoto/aboutLivePhoto";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <FunnyText text={"RANGO"} />
      </header>
      <AboutLive />
    </div>
  );
};

export default Home;
