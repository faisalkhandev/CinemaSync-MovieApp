import DarkMode from "../DarkMode/DarkMode";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <a href="/" style={{ color: "#ffe400", textDecoration: "none" }}>
          CinemaSync
        </a>
      </h1>
      <div className="navbarLinks">
        <DarkMode />
        <a href=""> Popular 🔥</a>
        <a href=""> Top Rated 🌟</a>
        <a href=""> Latest 🎉</a>
      </div>
    </nav>
  );
};

export default Navbar;
