import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="pokemon-bg">
      <div className="content">
        <div className="main-device">
          <img src="/images/tracks.png" alt="Switch" className="switch-img" />
          <button
            className="label-button tracks-button"
            onClick={() => navigate("/tracks")}
          >
            TRACKS
          </button>
        </div>

        <div className="right-section">
          <div className="card">
            <img src="/images/timeline.png" alt="Phone" className="phone-img" />
            <button
              className="label-button small-button"
              onClick={() => navigate("/timeline")}
            >
              TIMELINE
            </button>
          </div>

          <div className="card">
            <img src="/images/pokedex.png" alt="Pokedex" className="pokedex-img" />
            <button
              className="label-button small-button-2"
              onClick={() => navigate("/home")}
            >
              HOME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
