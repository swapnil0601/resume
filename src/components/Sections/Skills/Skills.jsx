import React from "react";
import "../../../styles/Sections/Skills.css";
import SkillGroup from "./SkillGroup";
import { skills } from "../../../assets/data";
const Skills = () => {
  return (
    <section className="skill_section section section__text" id="skills">
      <h2 className="title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skill__type">
        {Object.keys(skills).map((skill, index) => {
          return <SkillGroup key={index} name={skill} list={skills[skill]} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
