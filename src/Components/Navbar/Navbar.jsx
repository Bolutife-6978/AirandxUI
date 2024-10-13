import { useState } from "react";
import "./Navbar.css";
import { useEffect } from "react";
//import logo from "../../assets/logo.png";

const Navbar = () => {
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setStickyNav(true) : setStickyNav(false);
    });
  }, []);

  return (
    <nav className={`"container" ${stickyNav ? "dark-nav" : ""}`}>
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
