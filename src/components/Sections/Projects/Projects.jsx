import React from "react";
import Project from "./Project";
import "../../../styles/Sections/Projects.css";
import { projects } from "../../../assets/data";
const Projects = () => {
  return (
    <section id="projects">
      <p class="section__text__p1">Browse My Recent</p>
      <h1 class="title">Projects</h1>
      <div class="projects-container">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
