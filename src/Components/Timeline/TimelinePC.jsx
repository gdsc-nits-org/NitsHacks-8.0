import React from "react";
// 1. Import Link from react-router-dom
import { Link } from "react-router-dom";

const backgroundPattern = "/images/timeline.png";
const img1 = "/images/dex 1.png";
const img2 = "/images/dex 2.png";
const img3 = "/images/TimelineFinal.png";
const img4 = "/images/frametimeline.png";
const img5 = "/images/TRACKs.png";
const img6 = "/images/TiMELiNEtxt.png";
const img7 = "/images/SOFTWAREtxt.png";
const img8 = "/images/CODINGtxt.png";
const img9 = "/images/UXtxt.png";

const TimelinePC = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat min-h-screen py-20 lg:py-0"
      style={{ backgroundImage: `url(${backgroundPattern})` }}
      id="timeline"
    >
      <div className="relative h-full lg:h-screen w-full flex flex-col lg:flex-row justify-center items-center px-4 sm:px-8">
        <div className="hidden lg:block shrink-0 h-[490px] w-auto">
          <img src={img1} className="h-full w-auto object-contain" alt="Dex 1" />
        </div>

        <div className="relative w-full max-w-[573px] lg:w-[573px] h-auto lg:h-[490px] lg:shrink-0">
          <img
            src={img4}
            alt="Timeline Frame"
            className="h-full w-full object-cover absolute top-0 left-0"
          />
          <div className="relative h-full w-full flex flex-col items-center p-4 z-10 overflow-hidden">
            <div className="h-4 lg:h-8" />
            <img
              src={img6}
              className="h-auto max-h-[45px] md:max-h-[55px] w-auto"
              alt="Timeline Title"
            />
            <div className="h-3 lg:h-6" />
            <img
              src={img3}
              className="max-w-full h-auto max-h-40 md:max-h-[200px]"
              alt="Timeline Map"
            />
            <div className="h-3 lg:h-6" />
            <img
              src={img5}
              className="h-auto max-h-[45px] md:max-h-[55px] w-auto"
              alt="Tracks Title"
            />
          </div>
        </div>

        <div className="hidden lg:block shrink-0 h-[490px] w-auto">
          <img src={img2} className="h-full w-auto object-contain" alt="Dex 2" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center items-center gap-6 md:gap-10 lg:gap-16 w-full lg:w-auto px-4 sm:px-8 lg:px-0 mt-10 lg:mt-0 lg:absolute lg:bottom-[14%] lg:left-1/2 lg:-translate-x-1/2 z-20">
        {/* 2. Link for Software Button (Track 2) */}
        <Link to="/tracks?track=2">
          <button
            className="w-full sm:w-auto flex items-center justify-center px-10 py-3 rounded-lg bg-blue-300 border-3 border-gray-900 transition-all duration-100 hover:bg-blue-400 active:bg-blue-500 active:translate-x-px active:translate-y-px font-bold lg:-ml-40"
            style={{ boxShadow: "inset 0 0 0 2px #e5e7eb" }}
          >
            <img src={img7} className="h-auto max-h-5 w-auto" alt="Software" />
          </button>
        </Link>

        {/* 3. Link for Coding Button (Track 1) */}
        <Link to="/tracks?track=1">
          <button
            className="w-full sm:w-auto flex items-center justify-center px-10 py-3 rounded-lg bg-blue-300 border-3 border-gray-900 transition-all duration-100 hover:bg-blue-400 active:bg-blue-500 active:translate-x-px active:translate-y-px font-bold"
            style={{ boxShadow: "inset 0 0 0 2px #e5e7eb" }}
          >
            <img src={img8} className="h-auto max-h-5 w-auto" alt="Coding" />
          </button>
        </Link>

        {/* 4. Link for UI/UX Button (Track 3) */}
        <Link to="/tracks?track=3">
          <button
            className="w-full sm:w-auto flex items-center justify-center px-10 py-3 rounded-lg bg-blue-300 border-3 border-gray-900 transition-all duration-100 hover:bg-blue-400 active:bg-blue-500 active:translate-x-px active:translate-y-px font-bold lg:-mr-40"
            style={{ boxShadow: "inset 0 0 0 2px #e5e7eb" }}
          >
            <img src={img9} className="h-auto max-h-5 w-auto" alt="UI/UX" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TimelinePC;
