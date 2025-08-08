// src/components/Hero/Hero.jsx

import React from "react";
import "./Hero.css";
// import { FiSearch, FiHelpCircle } from "react-icons/fi";
import TextType from "../TextType/TextType";
import { FiSearch, FiHelpCircle, FiUser, FiFileText } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="hero-section">
      <h1>
        Revolutionize Your Hiring with <br />
        <TextType
          className="gradient-text"
          text={[
            "AI-Powered Hiring",
            "Smart Recuitment",
            "Automated Interviews",
            "Future of Hiring",
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
      </h1>
      <p className="hero-subtitle">
        Our AI-driven platform transforms the recruitment process from job
        posting to candidate selection. Automate interviews, analyze resumes,
        and make data-driven hiring decisions.
      </p>
      <div className="cta-buttons">
        <button className="btn btn-primary">⚡Get Started</button>
        <button className="btn btn-secondary">
          <FiSearch /> Find Jobs
        </button>
        <button className="btn btn-secondary">
          <FiHelpCircle /> How It Works?
        </button>
      </div>

      <div className="login-links">
        <a href="#" className="login-btn">
          <FiUser />
          <span>Candidate Login &gt;</span>
        </a>
        <a href="#" className="login-btn">
          <FiFileText />
          <span>Recruiter Login &gt;</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
