// ImageContainer.js
import React from "react";
import { motion } from "framer-motion";

const ImageContainer = ({ src, scrollYProgress, mainControls }) => {
  return (
    <div className="imageContainer">
      <motion.img
        variants={{
          hidden: { y: 75 },
          visible: { y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.25 }}
        src={src}
        alt="Lingo Connect Project Image"
        style={{
          opacity: scrollYProgress,
          transition: "opacity 1.5s ease",
        }}
      />
    </div>
  );
};

export default ImageContainer;
