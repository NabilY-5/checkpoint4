import { useState } from "react";
import { NavLink } from "react-router";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <button type="button" className="burger" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <NavLink to="/">
        <img src="/initiales.jpg" alt="logo NY" className="logo" />
      </NavLink>

      <nav className={open ? "menu open" : "menu"}>
        <NavLink to="/" className="nav-link" onClick={() => setOpen(false)}>
          ACCUEIL
        </NavLink>
        <NavLink
          to="/about"
          className="nav-link"
          onClick={() => setOpen(false)}
        >
          À PROPOS
        </NavLink>
        <NavLink
          to="/projects"
          className="nav-link"
          onClick={() => setOpen(false)}
        >
          PROJETS
        </NavLink>
        <NavLink
          to="/contact"
          className="nav-link"
          onClick={() => setOpen(false)}
        >
          CONTACT
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
