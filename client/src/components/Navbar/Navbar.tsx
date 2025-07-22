import { useState } from "react";
import { NavLink } from "react-router";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <img src="/initiales.jpg" alt="logo NY" className="logo" />

      <button type="button" className="burger" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <nav className={open ? "menu open" : "menu"}>
        <NavLink to="/" className="nav-link" onClick={() => setOpen(false)}>
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className="nav-link"
          onClick={() => setOpen(false)}
        >
          À propos
        </NavLink>
        <NavLink
          to="/projects"
          className="nav-link"
          onClick={() => setOpen(false)}
        >
          Projets
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
