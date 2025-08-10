// src/components/RecruiterLogin/RecruiterLogin.jsx

import React from "react";
// We can still reuse the same CSS!
import "../RecruiterRegistration/RecruiterRegistration.css";

const RecruiterLogin = () => {
  return (
    <div className="registration-container">
      <div className="registration-card">
        <div className="registration-logo-icon">NH</div>
        <h2>Login as Recruiter</h2>
        <p className="registration-subtitle">
          Enter your credentials to access the recruiter dashboard
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
            Don't have an account? <a href="#">Register as Recruiter</a>
          </p>
          <p>
            Not a recruiter? <a href="#">Login as a Candidate</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecruiterLogin;
