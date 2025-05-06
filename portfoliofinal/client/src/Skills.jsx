import React from "react";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiPostgresql } from "react-icons/si";

const skills = [
    { name: "HTML", icon: <FaHtml5 />, level: 90 },
    { name: "CSS", icon: <FaCss3Alt />, level: 85 },
    { name: "JavaScript", icon: <FaJsSquare />, level: 80 },
    { name: "React", icon: <FaReact />, level: 75 },
    { name: "Node.js", icon: <FaNodeJs />, level: 70 },
    { name: "Bootstrap", icon: <FaBootstrap />, level: 80 },
    { name: "MongoDB", icon: <SiMongodb />, level: 70},
    { name: "PostgreSQL", icon: <SiPostgresql />, level: 50 },
  
  ];
  
export const Skills=()=> {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-header">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
            </div>
            <p className="skill-percent">{skill.level}%</p>
          </div>
        ))}
      </div>
    </section>
  );
}
