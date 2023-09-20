import React from "react";
import Skill from "./Skill";
import "../../../styles/Sections/Skills.css";

const SkillGroup = ({ name, list }) => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">{name}</h3>
      <div className="skills__box">
        <div className="skills__group">
          {list.map((skill, index) => {
            return <Skill key={index} name={skill.name} level={skill.level} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillGroup;
