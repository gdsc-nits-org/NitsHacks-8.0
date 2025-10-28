import React, { useState, useEffect } from "react";
import "./Loading.css";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 2));
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-container">
      <div className="logo-section">
        <img src="/images/nits-hacks-logo.png" alt="Logo" className="logo" />
      </div>

      <div className="progress-section">
        <img
          src="/images/pikachu-running.webp"
          alt="Pikachu"
          className="pikachu"
        />
        <div className="progress-bar">
          <div
            className="progress-fill shiny"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
