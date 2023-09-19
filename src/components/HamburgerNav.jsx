import React, { useState } from "react";
import "../styles/HamburgerNav.css";
function HamburgerNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav id="hamburger-nav">
      <div className="logo">Swapnil Sahoo</div>
      <div className={`hamburger-menu ${menuOpen ? "open" : ""}`}>
        <div
          className={`hamburger-icon ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`menu-links ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HamburgerNav;
