import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav id="desktop-nav">
      <div class="logo">Swapnil Sahoo</div>
      <div>
        <ul class="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
