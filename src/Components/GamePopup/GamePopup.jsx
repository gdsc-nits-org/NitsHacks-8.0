import { useEffect } from "react";
import PropTypes from "prop-types";
import PokemonGame from "../PokemonGame/PokemonGame";

const GamePopup = ({ isOpen, onClose, mapData, dayNumber }) => {
  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleComplete = () => {
    onClose();
  };

  // Border color based on day
  const getBorderColor = () => {
    switch (dayNumber) {
      case 1:
        return "border-yellow-500";
      case 2:
        return "border-blue-500";
      case 3:
        return "border-purple-500";
      case 4:
        return "border-red-500";
      default:
        return "border-yellow-500";
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-2 md:p-6"
      onClick={onClose}
    >
      {/* Popup Container with thick border */}
      <div
        className={`relative border-[16px] ${getBorderColor()} rounded-lg overflow-visible`}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "calc(100vw - 1rem)",
          height: "calc(100vh - 1rem)",
          maxWidth: "90vmin",
          maxHeight: "90vmin",
        }}
      >
        {/* Game Container - fills the space inside the border */}
        <div className="w-full h-full">
          <PokemonGame mapData={mapData} onComplete={handleComplete} />
        </div>
      </div>
    </div>
  );
};

GamePopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  mapData: PropTypes.shape({
    background: PropTypes.string.isRequired,
    gridSize: PropTypes.number.isRequired,
    walkable: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.bool)).isRequired,
    startPosition: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }).isRequired,
    destination: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }).isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  dayNumber: PropTypes.number.isRequired,
};

export default GamePopup;
