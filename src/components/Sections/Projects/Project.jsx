import React from "react";

const Project = ({ project }) => {
  const { name, github, live, liveAvailable, image } = project;
  return (
    <div className="project-container color-container">
      <div className="project-container">
        <img src={image} alt={name} className="project-img" />
      </div>
      <h2 className="project-sub-title project-title">{name}</h2>
      <div className="btn-container">
        <a href={github}>
          <button className="btn btn-color-2 project-btn">Github</button>
        </a>
        <a href={live}>
          <button
            disabled={!liveAvailable}
            className="btn btn-color-2 project-btn"
          >
            Live Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project;
