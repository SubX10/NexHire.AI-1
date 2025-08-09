import React from "react";
import "./RecruiterRegistration.css";

const RecruiterRegistration = () => {
  return (
    <div className="registration-container">
      <div className="registration-card">
        <div className="registration-logo-icon">NH</div>
        <h2>Recruiter Registration</h2>
        <p className="registration-subtitle">
          Create a recruiter account to post jobs and find candidates
        </p>

        <form className="registration-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="email@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="********" />
          </div>
          <button type="submit" className="btn-register">
            Register
          </button>
        </form>

        <div className="footer-links">
          <p>
            Already have an account? <a href="#">Login as Recruiter</a>
          </p>
          <p>
            Not a recruiter? <a href="#">Register as Candidate</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecruiterRegistration;
