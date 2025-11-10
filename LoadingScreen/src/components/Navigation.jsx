import React from "react";
import "./Navigation.css";
import switchImg from "/images/tracks.png";
import phoneImg from "/images/timeline.png";
import pokedexImg from "/images/pokedex.png";

const PokemonDashboard = () => {
  return (
    <div className="pokemon-bg">
      <div className="content">
        <div className="main-device">
          <img src={switchImg} alt="Switch" className="switch-img" />
          <button className="label-button tracks-button">TRACKS</button>
        </div>

        <div className="right-section">
          <div className="card">
            <img src={phoneImg} alt="Phone" className="phone-img" />
            <button className="label-button small-button">TIMELINE</button>
          </div>

          <div className="card">
            <img src={pokedexImg} alt="Pokedex" className="pokedex-img" />
            <button className="label-button small-button-2">TEAMS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDashboard;
