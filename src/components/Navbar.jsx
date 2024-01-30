import React, { useState } from "react";
import "./navbar.css";
import gorkem from "../assets/gorki.jpeg";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [active, setActive] = useState("navMenu");
  const [toggleIcon, setToggleIcon] = useState("navToggler");

  const navToggle = () => {
    active === "navMenu"
      ? setActive("navMenu navActive")
      : setActive("navMenu");

    toggleIcon === "navToggler"
      ? setToggleIcon("navToggler toggle")
      : setToggleIcon("navToggler");
  };
  return (
    <div className="nav-wrapper">
      <nav className="nav">
        <img src={gorkem} alt="Gorkem's photo" />
        <ul className={active}>
          <li className="navItem">
            <a href="#" className="navLink">
              Home
            </a>
          </li>
          <li className="navItem">
            <Link
              className="navLink"
              activeClass="active"
              to="about-section"
              spy={true}
              smooth={true}
            >
              About
            </Link>
          </li>
          <li className="navItem">
            <Link
              className="navLink"
              activeClass="active"
              to="skills-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="navItem">
            <Link
              className="navLink"
              activeClass="active"
              to="portfolio-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Portfolio
            </Link>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">
              Contact
            </a>
          </li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
};
