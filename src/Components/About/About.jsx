import "./About.css";
import about_img from "../../assets/business.jpg";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>We Are Increasing Business Success with IT Solution</h2>
        <p>
          AirandX is your trusted partner for innovative IT solutions.We
          specialize in software development,cybersecurity,cloud
          solutions,network infrastructure
        </p>
        <p>
          With a team of highly skilled professionals and a passion for
          technology,we are dedicated to helping businesses of all sizes achieve
          their goals through cutting-edge IT solutions.Our services include IT
          consulting,system integration,data management,custom software
          development
        </p>
      </div>
    </div>
  );
};

export default About;
