import { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";

const PokemonGame = ({ mapData, onComplete }) => {
  const [playerPosition, setPlayerPosition] = useState(mapData.startPosition);
  const [isMoving, setIsMoving] = useState(false);
  const [direction, setDirection] = useState("down");
  const [shake, setShake] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const gameRef = useRef(null);

  const { gridSize } = mapData;
  const tileSize = 100 / gridSize; // Percentage-based tile size

  // Calculate distance to destination
  const getDistanceToDestination = () => {
    const dx = Math.abs(playerPosition.x - mapData.destination.x);
    const dy = Math.abs(playerPosition.y - mapData.destination.y);
    return Math.sqrt(dx * dx + dy * dy);
  };

  // Auto-focus on mount for keyboard input
  useEffect(() => {
    if (gameRef.current) {
      gameRef.current.focus();
    }
    // Hide controls hint after 3 seconds
    const timer = setTimeout(() => {
      setShowControls(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Check if a position is walkable
  const isWalkable = (x, y) => {
    if (x < 0 || x >= gridSize || y < 0 || y >= gridSize) {
      return false;
    }
    return mapData.walkable[y][x];
  };

  // Handle movement (used by both keyboard and touch controls)
  // Wrapped in useCallback to stabilize the function reference
  const handleMove = useCallback(
    (moveDirection) => {
      if (isMoving) return;

      let newX = playerPosition.x;
      let newY = playerPosition.y;

      switch (moveDirection) {
        case "up":
          newY -= 1;
          break;
        case "down":
          newY += 1;
          break;
        case "left":
          newX -= 1;
          break;
        case "right":
          newX += 1;
          break;
        default:
          return;
      }

      setDirection(moveDirection);

      // Check if the new position is walkable
      if (isWalkable(newX, newY)) {
        setIsMoving(true);
        setPlayerPosition({ x: newX, y: newY });
        setTimeout(() => setIsMoving(false), 150);
      } else {
        // Shake animation when hitting a wall
        setShake(true);
        setTimeout(() => setShake(false), 200);
      }
    },
    [isMoving, playerPosition.x, playerPosition.y, gridSize, mapData.walkable]
  );

  // Check if player reached destination
  useEffect(() => {
    if (
      playerPosition.x === mapData.destination.x &&
      playerPosition.y === mapData.destination.y &&
      !showCompletion
    ) {
      setTimeout(() => {
        setShowCompletion(true);
      }, 300);
    }
  }, [playerPosition, mapData.destination, showCompletion]);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isMoving) return;

      let moveDirection = null;

      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          moveDirection = "up";
          break;
        case "ArrowDown":
        case "s":
        case "S":
          moveDirection = "down";
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          moveDirection = "left";
          break;
        case "ArrowRight":
        case "d":
        case "D":
          moveDirection = "right";
          break;
        default:
          return;
      }

      e.preventDefault();
      handleMove(moveDirection);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleMove, isMoving]);

  return (
    <div className="relative w-full h-full">
      {/* Background Image - forced to square */}
      <img
        src={mapData.background}
        alt="Game Map"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ imageRendering: "pixelated" }}
      />

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/10 pointer-events-none" />

      {/* Game Layer */}
      <button
        ref={gameRef}
        className="absolute inset-0 outline-none bg-transparent border-none cursor-default p-0"
        tabIndex={0}
        onClick={(e) => e.currentTarget.focus()}
      >
        {/* Player character */}
        <div
          className={`absolute transition-all ease-out z-10 ${shake ? "animate-shake" : ""}`}
          style={{
            left: `${playerPosition.x * tileSize + tileSize / 2}%`,
            top: `${playerPosition.y * tileSize + tileSize / 2}%`,
            width: `${tileSize * 1.2}%`,
            height: `${tileSize * 1.2}%`,
            transform: `translate(-50%, -50%) ${direction === "right" ? "scaleX(-1)" : "scaleX(1)"}`,
            transitionDuration: "200ms",
          }}
        >
          <img
            src={
              direction === "up"
                ? "/game/back.webp"
                : direction === "down"
                  ? "/game/front.webp"
                  : "/game/side.webp"
            }
            alt="Player"
            className="w-full h-full object-contain"
            style={{
              imageRendering: "pixelated",
            }}
          />
        </div>

        {/* Destination marker - GBA style pixelated */}
        {!showCompletion && (
          <div
            className={`absolute z-5 ${getDistanceToDestination() < 3 ? "animate-pulse" : ""}`}
            style={{
              left: `${mapData.destination.x * tileSize + tileSize / 2}%`,
              top: `${mapData.destination.y * tileSize + tileSize / 2}%`,
              width: `${tileSize * 0.6}%`,
              height: `${tileSize * 0.6}%`,
              transform: `translate(-50%, -50%) ${getDistanceToDestination() < 3 ? "scale(1.2)" : "scale(1)"}`,
              imageRendering: "pixelated",
              transition: "transform 0.3s ease",
            }}
          >
            {/* Pixelated cross/star marker */}
            <div className="relative w-full h-full">
              {/* Vertical bar */}
              <div
                className="absolute left-1/2 top-0 w-1/3 h-full bg-red-500 transform -translate-x-1/2"
                style={{ imageRendering: "pixelated" }}
              />
              {/* Horizontal bar */}
              <div
                className="absolute top-1/2 left-0 w-full h-1/3 bg-red-500 transform -translate-y-1/2"
                style={{ imageRendering: "pixelated" }}
              />
              {/* Center square for emphasis */}
              <div
                className="absolute top-1/2 left-1/2 w-1/2 h-1/2 bg-yellow-400 transform -translate-x-1/2 -translate-y-1/2"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
          </div>
        )}

        {/* Completion Dialog */}
        {showCompletion && (
          <div className="absolute inset-0 flex flex-col items-center justify-between z-30 pointer-events-none animate-fadeIn px-2 bg-black/50">
            {/* Title Box at top */}
            <div className="relative w-full max-w-md md:max-w-2xl mt-2 sm:mt-4 md:mt-8 pointer-events-auto">
              <img
                src="/game/title_box.png"
                alt="Title"
                className="w-full h-auto"
                style={{ imageRendering: "pixelated" }}
              />
              <div className="absolute inset-0 flex items-center justify-center pt-0 -mt-5">
                <h2
                  className="text-sm sm:text-l md:text-xl lg:text-3xl font-bold text-red-400 uppercase tracking-wider px-5 sm:px-5 text-center"
                  style={{
                    fontFamily: "'Pokemon Solid', sans-serif",
                    textShadow: "2px 2px 0px #000",
                    letterSpacing: "0.2em",
                  }}
                >
                  {mapData.title || "Opening Day"}
                </h2>
              </div>
            </div>

            {/* Text Box at bottom */}
            <div
              className="relative w-full max-w-md md:max-w-2xl mb-2 sm:mb-4 md:mb-6 pointer-events-auto bg-white rounded-xl md:rounded-2xl border-4 md:border-[6px] border-gray-800 p-3 sm:p-4 md:p-5 cursor-pointer hover:border-gray-700 transition-colors"
              style={{
                background: "linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%)",
              }}
              onClick={() => {
                setShowCompletion(false);
                if (onComplete) {
                  onComplete();
                }
              }}
            >
              <div
                className="text-gray-500 text-lg sm:text-base leading-relaxed relative z-12"
                style={{
                  fontFamily: "'Pokemon Fire Red', monospace",
                  letterSpacing: "0.02em",
                }}
              >
                {mapData.description || "You have reached your destination!"}
                <span className="inline-block ml-1 animate-bounce">▼</span>
              </div>
            </div>
          </div>
        )}

        {/* Controls Hint - Desktop only */}
        {showControls && !showCompletion && (
          <div className="hidden md:block absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-fadeIn">
            <div className="bg-black/90 text-white px-5 py-3 rounded-lg border-2 border-yellow-400/50">
              <p
                className="text-xs md:text-sm font-bold text-center text-yellow-400"
                style={{ fontFamily: "'Pokemon Fire Red', monospace" }}
              >
                ← ↑ ↓ → or WASD to move
              </p>
            </div>
          </div>
        )}

        {/* On-Screen D-Pad Controls - Mobile only */}
        {!showCompletion && (
          <div className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-20 pointer-events-auto">
            <div className="relative w-40 h-40">
              {[
                { dir: "up", icon: "▲", pos: "top-0 left-1/2 -translate-x-1/2" },
                { dir: "right", icon: "▶", pos: "right-0 top-1/2 -translate-y-1/2" },
                { dir: "down", icon: "▼", pos: "bottom-0 left-1/2 -translate-x-1/2" },
                { dir: "left", icon: "◀", pos: "left-0 top-1/2 -translate-y-1/2" },
              ].map(({ dir, icon, pos }) => (
                <button
                  key={dir}
                  onTouchStart={(e) => {
                    e.preventDefault();
                    handleMove(dir);
                  }}
                  className={`absolute ${pos} w-12 h-12 bg-gray-800/95 text-white rounded-md border-2 border-gray-600 active:bg-yellow-600 active:border-yellow-500 active:scale-95 transition-all flex items-center justify-center text-xl font-bold shadow-lg`}
                  style={{ fontFamily: "'Pokemon Fire Red', monospace" }}
                >
                  {icon}
                </button>
              ))}

              {/* Center indicator */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gray-700/50 rounded-full pointer-events-none border-2 border-gray-600/50" />
            </div>
          </div>
        )}
      </button>
    </div>
  );
};

PokemonGame.propTypes = {
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
  onComplete: PropTypes.func,
};

export default PokemonGame;
