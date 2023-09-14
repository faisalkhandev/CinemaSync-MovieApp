import { NavLink } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <a href="/" style={{ textDecoration: "none" }}>
          CinemaSync Movie App
        </a>
      </h1>
      <div className="navbarLinks">
        <DarkMode />
        <NavLink to="/"> Popular 🔥</NavLink>
        <NavLink to="/topRated"> Top Rated 🌟</NavLink>
        <NavLink to="/upComing"> Upcoming 🎉</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
