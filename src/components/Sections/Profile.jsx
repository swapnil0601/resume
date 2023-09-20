import React from "react";
import "../../styles/Sections/Profile.css";
import "../../styles/Buttons.css";
import ProfileImg from "../../assets/Profile.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Resume from "../../assets/resume.pdf";
const Profile = () => {
  const handleDownloadCV = () => {
    // Replace with your download logic
    window.open(Resume);
  };

  const handleContactInfo = () => {
    // Replace with your contact info logic
    window.location.href = "./#contact";
  };
  return (
    <section id="profile" className="section">
      <div class="section__pic-container">
        <img src={ProfileImg} alt="Profile" />
      </div>
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Swapnil Sahoo</h1>
        <p class="section__text__p2">MERN Stack Developer</p>
        <div>
          <div className="btn-container">
            <button className="btn btn-color-2" onClick={handleDownloadCV}>
              Download CV
            </button>
            <button className="btn btn-color-1" onClick={handleContactInfo}>
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <a
              href="https://www.linkedin.com/in/swapnil-sahoo-50667820a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              href="https://github.com/swapnil0601"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
