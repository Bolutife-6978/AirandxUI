import "./Services.css";
import service_1 from "../../assets/service-1.jpg";
import service_2 from "../../assets/product-design.jpeg";
import service_3 from "../../assets/web-marketing.jpeg";
import service_icon_1 from "../../assets/program-icon-1.png";
import service_icon_2 from "../../assets/program-icon-2.png";
import service_icon_3 from "../../assets/program-icon-3.png";
const Services = () => {
  return (
    <div className="services">
      <div className="service">
        <img src={service_1} alt="" />
        <div className="caption">
          <img src={service_icon_1} alt="" />
          <p>Software Development</p>
        </div>
      </div>
      <div className="service">
        <img src={service_2} alt="" />
        <div className="caption">
          <img src={service_icon_2} alt="" />
          <p>Product Design</p>
        </div>
      </div>
      <div className="service">
        <img src={service_3} alt="" />
        <div className="caption">
          <img src={service_icon_3} alt="" />
          <p>Web Marketing</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
