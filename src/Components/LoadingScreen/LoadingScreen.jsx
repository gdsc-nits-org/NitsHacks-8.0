import PropTypes from "prop-types";
import "./Loading.css";

const LoadingScreen = ({ progress }) => {
  return (
    <div className="loading-container">
      <div className="logo-section">
        <img src="/images/nits-hacks-logo.png" alt="Logo" className="logo" />
      </div>

      <div className="progress-section">
        <img src="/images/pikachu-running.webp" alt="Pikachu" className="pikachu" />
        <div className="progress-bar">
          <div className="progress-fill shiny" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

LoadingScreen.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default LoadingScreen;
