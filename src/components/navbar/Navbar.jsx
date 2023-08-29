import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>CinemaSync</h1>
      <div className="navbarLinks">
        <a href=""> Popular 🔥</a>
        <a href=""> Top Rated 🌟</a>
        <a href=""> Latest 🎉</a>
      </div>
    </nav>
  );
};

export default Navbar;
