import DarkMode from "../DarkMode/DarkMode";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <a href="/" style={{ textDecoration: "none" }}>
          CinemaSync
        </a>
      </h1>
      <div className="navbarLinks">
        <DarkMode />
        <a href="#popular"> Popular 🔥</a>
        <a href="#top_rated"> Top Rated 🌟</a>
        <a href="#upcoming"> Upcoming 🎉</a>
      </div>
    </nav>
  );
};

export default Navbar;
