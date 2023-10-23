// Works.js
import React, { useEffect, useRef } from "react";
import { motion, useViewportScroll, useInView, useAnimation } from "framer-motion";
import lingoConnectImg from "../../assets/LingoConnect.jpg";
import capitalCityGameImg from "../../assets/CapitalCityGame.jpg";
import "./Works.css";
import ImageContainer from "../ImageContainer/ImageContainer";

export const Works = () => {
  // Scroll-Down effect for the portfolio images
  const { scrollYProgress } = useViewportScroll();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <section id="portfolio-section">
    <div className="worksSection">
      <div className="imageContainer" ref={ref}>
        <ImageContainer src={lingoConnectImg} scrollYProgress={scrollYProgress} mainControls={mainControls} />
        <div className="content">
        <h1 className="imageTitle">NGO Organisation Landing Page</h1>
        </div>
      </div>
      <div className="imageContainer">
        <ImageContainer src={capitalCityGameImg} scrollYProgress={scrollYProgress} mainControls={mainControls} />
        <div className="content">
        <h1 className="imageTitle">Quiz Game on Capital Cities</h1>
        </div>
      </div>
    </div>
    </section>
  );
};
