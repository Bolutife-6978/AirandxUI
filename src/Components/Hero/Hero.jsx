import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>
          Dealing in all professional IT services, and providing infrastructure
          management{" "}
        </h1>
        <p>
          {" "}
          Delivering Innovative Digital Technology Solutions is our priority, we
          utilize honest improvement techniques to build compelling programs in
          an organized and efficient way, as we always strive to provide our
          clients with the highest quality.
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
