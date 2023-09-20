import React from "react";
import { FaCertificate } from "react-icons/fa";
import "../../../styles/Sections/Skills.css";
const Skill = ({ name, level }) => {
  return (
    <div className="skill__data">
      <h3 className="skill__name">
        <FaCertificate /> {name}
      </h3>
      <span>{level}</span>
    </div>
  );
};

export default Skill;
