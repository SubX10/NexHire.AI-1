// src/App.jsx

import React, { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Login from "./components/Login/Login";
import RecruiterRegistration from "./components/RecruiterRegistration/RecruiterRegistration";
import CandidateRegistration from "./components/CandidateRegistration/CandidateRegistration";
import RecruiterLogin from "./components/RecruiterLogin/RecruiterLogin";
import CandidateLogin from "./components/CandidateLogin/CandidateLogin";
import "./App.css";

function App() {
  const [currentView, setCurrentView] = useState("landing");

  // These functions change the state, which causes the view to re-render
  const showLogin = () => setCurrentView("login");
  const showRecruiterRegistration = () =>
    setCurrentView("recruiterRegistration");
  const showCandidateRegistration = () =>
    setCurrentView("candidateRegistration");
  const showRecruiterLogin = () => setCurrentView("recruiterLogin");
  const showCandidateLogin = () => setCurrentView("candidateLogin");

  const renderView = () => {
    switch (currentView) {
      case "login":
        return (
          <Login
            onShowRecruiterRegistration={showRecruiterRegistration}
            onShowCandidateRegistration={showCandidateRegistration}
            onShowRecruiterLogin={showRecruiterLogin}
            onShowCandidateLogin={showCandidateLogin}
          />
        );
      case "recruiterRegistration":
        return <RecruiterRegistration />;
      case "candidateRegistration":
        return <CandidateRegistration />;
      case "recruiterLogin":
        return <RecruiterLogin />;
      case "candidateLogin":
        return <CandidateLogin />;
      case "landing":
      default:
        return (
          <>
            <Header />
            <main className="main-content">
              {/* This is the key change: Pass the functions directly to Hero */}
              <Hero
                onGetStartedClick={showLogin}
                onShowRecruiterLogin={showRecruiterLogin}
                onShowCandidateLogin={showCandidateLogin}
              />
            </main>
          </>
        );
    }
  };

  return <div className="App">{renderView()}</div>;
}

export default App;
