import React from "react";
import { useNavigate } from "react-router-dom";

const bg = "/images/timeline.png";
const img1 = "/images/dex 1Phn.png";
const img2 = "/images/dex 2Phn.png";
const img3 = "/images/TimelineFinalPhx.png";
const img4 = "/images/frametimelinephn.png";
const img5 = "/images/TRACKs.png";
const img6 = "/images/TiMELiNEtxt.png";
const img7 = "/images/SOFTWAREphn.png";
const img8 = "/images/CODINGtxt.png";
const img9 = "/images/UXtxtphn.png";

const TimelinePhones = () => {
  const navigate = useNavigate();

  const buttons = [
    { id: "software", src: img7, alt: "Software", trackId: 2 },
    { id: "coding", src: img8, alt: "Coding", trackId: 1 },
    { id: "uiux", src: img9, alt: "UI/UX", trackId: 3 },
  ];

  const handleTrackClick = (trackId) => {
    navigate(`/tracks?track=${trackId}`);
  };

  return (
    <div
      id="timeline"
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="relative w-full h-full flex flex-col items-center justify-center py-2 sm:py-3 md:py-4 lg:py-5 px-3 sm:px-4 md:px-5 lg:px-6">
        <div className="shrink-0 -mb-4 sm:-mb-5 md:-mb-6 lg:-mb-8 z-20 mt-20">
          <img
            src={img1}
            alt="Dex 1"
            className="w-72 sm:w-80 md:w-96 h-auto object-contain"
          />
        </div>

        <div className="relative shrink-0 my-0 z-10">
          <img
            src={img4}
            alt="Frame"
            className="relative w-72 sm:w-80 md:w-96 h-auto object-contain"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 lg:p-5 z-20 gap-2 sm:gap-2.5 md:gap-3 lg:gap-4">
            <img
              src={img6}
              alt="Timeline"
              className="w-36 sm:w-40 md:w-48 lg:w-64 h-auto object-contain mb-2 sm:mb-2.5 md:mb-3 lg:mb-4"
            />
            <img
              src={img3}
              alt="Timeline Map"
              className="w-44 sm:w-52 md:w-64 lg:w-80 h-auto object-contain"
            />
            <img
              src={img5}
              alt="Tracks"
              className="w-28 sm:w-32 md:w-40 h-auto object-contain mt-2 sm:mt-2.5 md:mt-3 lg:mt-4"
            />

            <div className="flex flex-col justify-center items-center gap-5 sm:gap-2.5 md:gap-3 lg:gap-4 mt-3 sm:mt-3.5 md:mt-4 lg:mt-5 w-full px-2 sm:px-2.5 md:px-3 lg:px-4">
              {buttons.map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => handleTrackClick(btn.trackId)}
                  className="
                    flex items-center justify-center shrink-0 
                    bg-blue-300 border-2 md:border-3 lg:border-4 border-gray-900 
                    rounded-sm font-bold transition-all duration-150 
                    hover:scale-105 hover:bg-blue-300 
                    active:scale-95 active:bg-blue-400
                  "
                  style={{
                    width: "clamp(160px, 18vw, 200px)",
                    height: "clamp(35px, 5vw, 40px)",
                    boxShadow: "inset 0 0 0 1px #e5e7eb",
                  }}
                >
                  <img
                    src={btn.src}
                    alt={btn.alt}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="shrink-0 -mt-4 sm:-mt-5 md:-mt-6 lg:-mt-8 z-20 mb-20">
          <img
            src={img2}
            alt="Dex 2"
            className="w-72 sm:w-80 md:w-96 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default TimelinePhones;
