// src/components/CandidateLogin/CandidateLogin.jsx

import React from "react";
// Reusing the same CSS again for consistency.
import "../RecruiterRegistration/RecruiterRegistration.css";

const CandidateLogin = () => {
  return (
    <div className="registration-container">
      <div className="registration-card">
        <div className="registration-logo-icon">NH</div>
        <h2>Login as Candidate</h2>
        <p className="registration-subtitle">
          Enter your credentials to access your profile and applications
        </p>

        <form className="registration-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="email@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="********" />
          </div>
          <button type="submit" className="btn-register">
            Login
          </button>
        </form>

        <div className="footer-links">
          <p>
            Don't have an account? <a href="#">Register as Candidate</a>
          </p>
          <p>
            Are you a recruiter? <a href="#">Login as Recruiter</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CandidateLogin;
