import { useState } from "react";
import "./NavBar.scss";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">RK</div>

      <button
        className="navbar-toggle"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#hero" onClick={() => setIsOpen(false)}>
            Sākums
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setIsOpen(false)}>
            Par mani
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projekti
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Kontakti
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
