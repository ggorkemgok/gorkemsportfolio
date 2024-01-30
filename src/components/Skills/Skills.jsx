import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div id="skills-section" className="skills-section">
      <div className="text-left">
        <h1>Frontend Technologies</h1>
        <h2>HTML</h2>
        <h2>CSS</h2>
        <h2>SASS</h2>
        <h2>Bootstrap</h2>
        <h2>Tailwind</h2>
        <h2>JavaScript</h2>
        <h2>TypeScript</h2>
        <h2>jQuery</h2>
        <h2>React</h2>
        <h2>Next.js</h2>
      </div>
      <div className="text-right">
        <h1>Backend Technologies</h1>
        <h2>Node.js</h2>
        <h2>Express.js</h2>
        <h2>MongoDB</h2>
        <h2>Mongoose</h2>
      </div>
    </div>
  );
};

export default Skills;
