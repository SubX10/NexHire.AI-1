// src/components/Login/Login.jsx

import React from "react";
import "./Login.css";

// Accept all the necessary handler functions
const Login = ({
  onShowRecruiterRegistration,
  onShowCandidateRegistration,
  onShowRecruiterLogin,
  onShowCandidateLogin,
}) => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo-icon">NH</div>
        <h2>Login</h2>
        <p className="login-subtitle">
          Choose your role to login to the system
        </p>

        <div className="login-actions">
          {/* Add onClick for Recruiter Login */}
          <button className="btn-login primary" onClick={onShowRecruiterLogin}>
            Login as Recruiter
          </button>
          {/* Add onClick for Candidate Login */}
          <button
            className="btn-login secondary"
            onClick={onShowCandidateLogin}
          >
            Login as Candidate
          </button>
        </div>

        <div className="login-separator">DON'T HAVE AN ACCOUNT?</div>

        <div className="login-actions">
          <button
            className="btn-login secondary"
            onClick={onShowRecruiterRegistration}
          >
            Register as Recruiter
          </button>
          <button
            className="btn-login secondary"
            onClick={onShowCandidateRegistration}
          >
            Register as Candidate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
