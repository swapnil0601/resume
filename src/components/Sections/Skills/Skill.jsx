import React from "react";
import { TbPoint } from "react-icons/tb";
import "../../../styles/Sections/Skills.css";
const Skill = ({ name, level, icon }) => {
  return (
    <div className="skill__data">
      <h3 className="skill__name">
        <TbPoint /> {name}
      </h3>
      <span>{level}</span>
    </div>
  );
};

export default Skill;
