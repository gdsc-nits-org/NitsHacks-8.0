import { useState, useEffect } from "react";

const Timeline = () => {
  const [currentDay, setCurrentDay] = useState(1);

  // Define the path coordinates as percentages for responsiveness
  const days = [
    { id: 1, label: "DAY 1", x: 15, y: 85, color: "red" },
    { id: 2, label: "DAY 2", x: 15, y: 28, color: "purple" },
    { id: 3, label: "DAY 3", x: 70, y: 15, color: "gray" },
    { id: 4, label: "DAY 4", x: 88, y: 52, color: "yellow" },
  ];

  // Path segments connecting the days (only vertical and horizontal)
  const pathSegments = [
    // Day 1 to Day 2 (vertical)
    { x1: 15, y1: 85, x2: 15, y2: 28 },
    // Day 2 turn right (horizontal)
    { x1: 15, y1: 28, x2: 50, y2: 28 },
    // Turn up to Day 3 level (vertical)
    { x1: 50, y1: 28, x2: 50, y2: 15 },
    // Continue right to Day 3 (horizontal)
    { x1: 50, y1: 15, x2: 70, y2: 15 },
    // Day 3 to intermediate point (vertical down)
    { x1: 70, y1: 15, x2: 70, y2: 52 },
    // Final segment to Day 4 (horizontal)
    { x1: 70, y1: 52, x2: 88, y2: 52 },
  ];

  const handleDayClick = (dayId) => {
    if (dayId <= currentDay + 1) {
      setCurrentDay(dayId);
    }
  };

  const getDayButtonStyle = (day) => {
    const baseStyle =
      "w-12 h-12 md:w-16 md:h-16 rounded-lg shadow-lg font-bold transition-all duration-300 border-2 border-black";

    if (day.id === currentDay) {
      return `${baseStyle} transform scale-110 cursor-pointer`;
    } else if (day.id < currentDay) {
      return `${baseStyle} cursor-pointer hover:opacity-90`;
    } else if (day.id === currentDay + 1) {
      return `${baseStyle} cursor-pointer hover:scale-105`;
    } else {
      return `${baseStyle} cursor-not-allowed`;
    }
  };

  const getColorClass = (color) => {
    const colors = {
      red: "bg-[linear-gradient(to_bottom,_#FE4E5F_42%,_#A44659_59%,_#97374B_100%)]",
      purple: "bg-[linear-gradient(to_bottom,_#A855F7_42%,_#6B21A8_59%,_#4C1D95_100%)]",
      gray: "bg-[linear-gradient(to_bottom,_#A1A1AA_42%,_#6B7280_59%,_#374151_100%)]",
      yellow: "bg-[linear-gradient(to_bottom,_#FBBF24_42%,_#D97706_59%,_#B45309_100%)]",
    };
    return colors[color] || "bg-gray-500";
  };

  return (
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

          {pathSegments.map((segment, index) => (
            <line
              key={index}
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
        ></a>

        {/* Day markers */}
        {days.map((day) => (
          <div
            key={day.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ left: `${day.x}%`, top: `${day.y}%` }}
          >
            {/* Day label */}
            <div className="absolute -top-8 md:-top-10 left-1/2 transform -translate-x-1/2 bg-[linear-gradient(to_bottom,_#E5E6E9_42%,_#B3B3B3_59%,_#B3AEAE_100%)] px-2 py-1 md:px-8 rounded text-xs md:text-sm font-bold text-gray-800 shadow whitespace-nowrap">
              {day.label}
            </div>

            {/* Day button */}
            <button
              onClick={() => handleDayClick(day.id)}
              className={`${getDayButtonStyle(day)} ${getColorClass(day.color)}`}
            ></button>
          </div>
        ))}

        {/* Player character (on current day) */}
        <div
          className="absolute w-8 h-8 md:w-10 md:h-10 transform -translate-x-1/2 translate-y-8 md:translate-y-12 z-30 transition-all duration-500"
          style={{
            left: `${days[currentDay - 1].x}%`,
            top: `${days[currentDay - 1].y}%`,
          }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Simple character sprite */}
            <img src="/images/timeline/character.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Timeline;
