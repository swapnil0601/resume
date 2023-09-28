import React from "react";

const Project = ({ project }) => {
  const { name, github, live, liveAvailable, image, description } = project;
  return (
    <div className="project-container">
      <div
        className="project-image-container"
        style={{ background: image }}
      ></div>
      <h2 className="project-sub-title project-title">{name}</h2>
      <p className="project-description">{description}</p>
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
