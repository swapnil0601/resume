import React from "react";
import "../../styles/Sections/About.css";
import { FaGraduationCap, FaArrowRight } from "react-icons/fa";
const About = () => {
  return (
    <section id="about">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
      <div class="section-container">
        <div class="about-details-container">
          <div class="about-containers">
            <div class="details-container">
              <FaGraduationCap className="icon" />
              <h3>Secondary</h3>
              <p>
                O.P. Jindal School, Angul
                <br />
                Percentage: 94%
              </p>
            </div>
          </div>
        </div>
        <div class="about-details-container">
          <div class="about-containers">
            <div class="details-container">
              <FaGraduationCap className="icon" />
              <h3>Higher Secondary</h3>
              <p>
                O.P. Jindal School, Angul
                <br />
                Percentage: 94%
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="college-container">
        <div class="about-containers">
          <div class="college-details-container">
            <FaGraduationCap className="icon" />
            <h3>B.Tech</h3>
            <p>in Computer Engineering</p>
            <div className="text-container">
              <p>
                Courses: Database Management System, Object Oriented
                Programming, Analysis of Algorithm, Networking, Operating
                System, Data Structures
                <br />
                <b>GPA - 8.64</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <FaArrowRight
        src="./assets/arrow.png"
        alt="Arrow icon"
        class="icon arrow"
        onClick={() => (window.location.href = "./#experience")}
      />
    </section>
  );
};

export default About;
