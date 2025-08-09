import React from "react";
import "../RecruiterRegistration/RecruiterRegistration.css";

const CandidateRegistration = () => {
  return (
    <div className="registration-container">
      <div className="registration-card">
        <div className="registration-logo-icon">NH</div>
        {/* Changed Text */}
        <h2>Candidate Registration</h2>
        <p className="registration-subtitle">
          Create an account to apply for jobs and manage your profile
        </p>

        <form className="registration-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Jane Doe" />
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
            Already have an account? <a href="#">Login as Candidate</a>
          </p>
          <p>
            Are you a recruiter? <a href="#">Register as Recruiter</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CandidateRegistration;
