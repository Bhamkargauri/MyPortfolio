import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <Link to="/about" className="brand">
        MyPortfolio
      </Link>
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        ☰
      </button>
      <div
        className={open ? "menu open" : "menu"}
        onClick={() => setOpen(false)}
      >
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </header>
  );
};

export default Navbar;
