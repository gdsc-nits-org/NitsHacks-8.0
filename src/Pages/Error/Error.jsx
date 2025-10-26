import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Error.css'; 

const backgroundImage = '/images/background.png';
const errorText = '/images/ERROR.png';
const number4Left = '/images/4.png';
const psyduck = '/images/phyduck.png';
const number4Right = '/images/4.png';
const teamRocketText = '/images/Text.png';
const buttonFrame = '/images/Frame 1171279688.png';
const buttonText = '/images/Back TO HOME.png';

const Error = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div
      className="error-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      
      <div className="main-stack">

       
        <div className="error-text-div">
          <img
            src={errorText}
            alt="Error"
            className="error-text-img"
          />
        </div>

      
        <div className="psyduck-section">
          <img
            src={number4Left}
            alt="4"
            className="psyduck-section-img-4"
          />
          <img
            src={psyduck}
            alt="Psyduck"
            className="psyduck-section-img-psyduck"
          />
          <img
            src={number4Right}
            alt="4"
            className="psyduck-section-img-4"
          />
        </div>

        <div className="team-rocket-div">
          <img
            src={teamRocketText}
            alt="Team Rocket must've stolen this page again!"
            className="team-rocket-img"
          />
        </div>

       
        <div className="home-button-div">
          <button
            onClick={handleBackToHome}
            className="home-button"
          >
            <img
              src={buttonFrame}
              alt="Button Frame"
              className="home-button-frame"
            />
            <img
              src={buttonText}
              alt="Back to Home"
              className="home-button-text"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;