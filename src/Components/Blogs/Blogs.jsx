import "./Blogs.css";
import latest_1 from "../../assets/meeting.jpg";
import latest_2 from "../../assets/tech-girl.jpg";
import latest_3 from "../../assets/tech-bg.jpg";
import latest_4 from "../../assets/gallery-2.png";
import white_arrow from "../../assets/white-arrow.png";
const Blogs = () => {
  return (
    <div className="blogs">
      <div className="latest">
        <img src={latest_1} alt="" />
        <img src={latest_2} alt="" />
        <img src={latest_3} alt="" />
        <img src={latest_4} alt="" />
      </div>
      <button className="btn dark-btn">
        See more here <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Blogs;
