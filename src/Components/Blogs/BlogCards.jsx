import "./BlogCard.css";
import dark_arrow from "../../assets/dark-arrow.png";

// eslint-disable-next-line react/prop-types
const BlogCard = ({ img }) => {
  return (
    <div className="card">
      <img
        src={img}
        alt="People interacting in a group"
        className="card-image"
      />
      <div className="card-content">
        <div className="card-date-comments">
          <span className="card-date">13 Feb, 2023</span>
          <span className="card-comments">3 Comments</span>
        </div>
        <h2 className="card-title">
          Latin derived from Cicero’s 1st-century BC
        </h2>
        <hr></hr>
        <div className="card-footer">
          <div className="card-author">
            <span>By AirandX</span>
          </div>
          <a href="#" className="btn">
            READ MORE <img src={dark_arrow} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
