import { useState } from "react";
import GamePopup from "../../Components/GamePopup/GamePopup";
import mapDataImport from "../../assets/mapData.json";

const Timeline = () => {
  const [currentDay, setCurrentDay] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [characterPosition, setCharacterPosition] = useState({ x: 15, y: 85 });
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [selectedGameDay, setSelectedGameDay] = useState(null);

  // Define the path coordinates as percentages for responsiveness
  const days = [
    { id: 1, label: "DAY 1", x: 15, y: 85, color: "red" },
    { id: 2, label: "DAY 2", x: 15, y: 28, color: "purple" },
    { id: 3, label: "DAY 3", x: 70, y: 15, color: "gray" },
    { id: 4, label: "DAY 4", x: 88, y: 52, color: "yellow" },
  ];

  // Complete path with all waypoints
  const fullPath = [
    { x: 15, y: 85 }, // Day 1
    { x: 15, y: 28 }, // Day 2
    { x: 50, y: 28 }, // Waypoint
    { x: 50, y: 15 }, // Waypoint
    { x: 70, y: 15 }, // Day 3
    { x: 70, y: 52 }, // Waypoint
    { x: 88, y: 52 }, // Day 4
  ];

  // Map day IDs to path indices
  const dayToPathIndex = {
    1: 0,
    2: 1,
    3: 4,
    4: 6,
  };

  // Path segments connecting the days (only vertical and horizontal)
  const pathSegments = [
    { id: 1, x1: 15, y1: 85, x2: 15, y2: 28 },
    { id: 2, x1: 15, y1: 28, x2: 50, y2: 28 },
    { id: 3, x1: 50, y1: 28, x2: 50, y2: 15 },
    { id: 4, x1: 50, y1: 15, x2: 70, y2: 15 },
    { id: 5, x1: 70, y1: 15, x2: 70, y2: 52 },
    { id: 6, x1: 70, y1: 52, x2: 88, y2: 52 },
  ];

  const animateCharacter = (targetDay) => {
    if (isAnimating) return;

    setIsAnimating(true);
    const startIndex = dayToPathIndex[currentDay];
    const endIndex = dayToPathIndex[targetDay];

    // Determine direction and get path points
    const pathPoints =
      startIndex < endIndex
        ? fullPath.slice(startIndex, endIndex + 1)
        : fullPath.slice(endIndex, startIndex + 1).reverse();

    let currentPointIndex = 0;

    const moveToNextPoint = () => {
      if (currentPointIndex < pathPoints.length) {
        setCharacterPosition(pathPoints[currentPointIndex]);
        currentPointIndex += 1;
        setTimeout(moveToNextPoint, 300); // 300ms per segment
      } else {
        setIsAnimating(false);
        setCurrentDay(targetDay);
      }
    };

    moveToNextPoint();
  };

  const handleDayClick = (dayId) => {
    if (!isAnimating) {
      if (dayId === currentDay) {
        // Open game popup for current day
        setSelectedGameDay(dayId);
        setIsGameOpen(true);
      } else {
        // Animate to the clicked day
        animateCharacter(dayId);
      }
    }
  };

  const handleCloseGame = () => {
    setIsGameOpen(false);
    setSelectedGameDay(null);
  };

  const getDayButtonStyle = (day) => {
    const baseStyle =
      "w-12 h-12 md:w-16 md:h-16 rounded-lg shadow-lg font-bold transition-all duration-300 border-2 border-black";

    if (day.id === currentDay) {
      return `${baseStyle} transform scale-110 cursor-pointer`;
    }
    if (day.id < currentDay) {
      return `${baseStyle} cursor-pointer hover:opacity-90`;
    }
    if (day.id === currentDay + 1) {
      return `${baseStyle} cursor-pointer hover:scale-105`;
    }
    return `${baseStyle} cursor-not-allowed`;
  };

  const getColorClass = (color) => {
    const colors = {
      red: "bg-[linear-gradient(to_bottom,#FE4E5F_42%,#A44659_59%,#97374B_100%)]",
      purple: "bg-[linear-gradient(to_bottom,#A855F7_42%,#6B21A8_59%,#4C1D95_100%)]",
      gray: "bg-[linear-gradient(to_bottom,#A1A1AA_42%,#6B7280_59%,#374151_100%)]",
      yellow: "bg-[linear-gradient(to_bottom,#FBBF24_42%,#D97706_59%,#B45309_100%)]",
    };
    return colors[color] || "bg-gray-500";
  };

  return (
    <>
      <div className="absolute z-200 w-screen h-screen  flex items-center justify-center">
        <div className="relative h-screen w-screen aspect-video bg-blue-800 shadow-2xl overflow-hidden">
          {/* Background map - replace with your actual map image */}
          <div className="absolute inset-0 bg-[url(/images/timeline/TimelineFinal.png)] bg-cover bg-center"></div>

          {/* SVG for path lines */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#E5E6E9" />
                <stop offset="42%" stopColor="#B3B3B3" />
                <stop offset="100%" stopColor="#B3AEAE" />
              </linearGradient>
            </defs>

            {pathSegments.map((segment) => (
              <line
                key={segment.id}
                x1={`${segment.x1}%`}
                y1={`${segment.y1}%`}
                x2={`${segment.x2}%`}
                y2={`${segment.y2}%`}
                stroke="url(#lineGradient)"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
              />
            ))}
          </svg>

          {/* Back button */}
          <a
            href="/"
            className="absolute top-4 -left-4 md:left-4 bg-[url(/images/timeline/button.svg)] bg-center bg-cover w-60 h-16 scale-50 md:scale-75"
          >
            {" "}
          </a>

          {/* Day markers */}
          {days.map((day) => (
            <div
              key={day.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ left: `${day.x}%`, top: `${day.y}%` }}
            >
              {/* Day label */}
              <div className="absolute -top-8 md:-top-10 left-1/2 transform -translate-x-1/2 bg-[linear-gradient(to_bottom,#E5E6E9_42%,#B3B3B3_59%,#B3AEAE_100%)] px-2 py-1 md:px-8 rounded text-xs md:text-sm font-bold text-gray-800 shadow whitespace-nowrap">
                {day.label}
              </div>

              {/* Day button */}
              <button
                onClick={() => handleDayClick(day.id)}
                className={`${getDayButtonStyle(day)} ${getColorClass(day.color)}`}
              >
                {" "}
              </button>
            </div>
          ))}

          {/* Player character (on current day) */}
          <button
            onClick={() => {
              setSelectedGameDay(currentDay);
              setIsGameOpen(true);
            }}
            className="absolute w-8 h-8 md:w-10 md:h-10 transform -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-300 ease-linear cursor-pointer hover:scale-110"
            style={{
              left: `${characterPosition.x}%`,
              top: `${characterPosition.y}%`,
            }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Simple character sprite */}
              <img src="/game/front.webp" alt="" />
            </div>
          </button>
        </div>
      </div>

      {/* Game Popup */}
      {isGameOpen && selectedGameDay && (
        <GamePopup
          isOpen={isGameOpen}
          onClose={handleCloseGame}
          mapData={mapDataImport[`day${selectedGameDay}`]}
          dayNumber={selectedGameDay}
        />
      )}
    </>
  );
};

export default Timeline;
