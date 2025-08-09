// src/components/Hero/Hero.jsx

import React from "react";
import "./Hero.css";
import TextType from "../TextType/TextType";
import {
  FiSearch,
  FiHelpCircle,
  FiUser,
  FiFileText,
  FiZap,
} from "react-icons/fi";

// 1. Accept the new handler props here
const Hero = ({
  onGetStartedClick,
  onShowRecruiterLogin,
  onShowCandidateLogin,
}) => {
  return (
    <section className="hero-section">
      <h1>
        Revolutionize Your Hiring with <br />
        <TextType
          className="gradient-text"
          text={[
            "Automated Interviews",
            "AI-Powered Hiring",
            "Smart Recruitment",
            "The Future of Hiring",
          ]}
        />
      </h1>
      <p className="hero-subtitle">
        Our AI-driven platform transforms the recruitment process from job
        posting to candidate selection. Automate interviews, analyze resumes,
        and make data-driven hiring decisions.
      </p>
      <div className="cta-buttons">
        <button className="btn btn-primary" onClick={onGetStartedClick}>
          <FiZap /> Get Started
        </button>
        <button className="btn btn-secondary">
          <FiSearch /> Find Jobs
        </button>
        <button className="btn btn-secondary">
          <FiHelpCircle /> How It Works?
        </button>
      </div>
      <div className="login-links">
        {/* 2. Changed <a> to <button> and added the onClick handler */}
        <button className="login-btn" onClick={onShowCandidateLogin}>
          <FiUser />
          <span>Candidate Login &gt;</span>
        </button>
        {/* 3. Changed <a> to <button> and added the onClick handler */}
        <button className="login-btn" onClick={onShowRecruiterLogin}>
          <FiFileText />
          <span>Recruiter Login &gt;</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
