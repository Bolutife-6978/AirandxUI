import "./Navbar.css";
//import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="container">
      <p>
        <span>AirandX</span>
      </p>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Services</li>
        <li>Blogs</li>
        <li>
          <button className="btn">Contact us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
