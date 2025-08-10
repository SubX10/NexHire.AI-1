// src/components/Header/Header.jsx

import React from "react";
import "./Header.css";
import { IoChevronForward } from "react-icons/io5";

const Header = () => {
  return (
    <header className="header-container">
      <div className="top-pill">✨ AI-Powered Hiring Platform</div>

      <div className="logo">
        <span className="logo-icon">NH</span>
        NexHire
      </div>

      <nav className="nav-buttons">
        <a href="#" className="nav-link">
          Book a Demo &gt;
        </a>
        <a href="#" className="nav-link">
          View Demo &gt;
        </a>
      </nav>
    </header>
  );
};

export default Header;
