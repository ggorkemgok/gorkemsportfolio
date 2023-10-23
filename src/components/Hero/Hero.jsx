import React from "react";
import "./Hero.css";
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
  return (
    <div className="hero-container">
      <div className="type-animation-container">
        <TypeAnimation
        sequence={[
          "Hi, I'm Görkem Gök.",
          2000,
          "Frontend Developer | UI/UX Enthusiast",
          2000,
          "I create interactive websites and web applications.",
          2000
        ]}
        wrapper="h1"
        speed={25}
        style={{ display: "inline-block" }}
        
      />
      </div>
      
    </div>
  );
};

export default Hero;