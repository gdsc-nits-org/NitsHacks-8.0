import React from "react";

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
  const buttons = [
    { id: "software", src: img7, alt: "Software" },
    { id: "coding", src: img8, alt: "Coding" },
    { id: "uiux", src: img9, alt: "UI/UX" },
  ];

  return (
    <div
      id="timeline"
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="relative w-full h-full flex flex-col items-center justify-center py-2 sm:py-3 md:py-4 lg:py-5 px-3 sm:px-4 md:px-5 lg:px-6">
        {/* Top Pokéball - img1 */}
        <div className="shrink-0 -mb-4 sm:-mb-5 md:-mb-6 lg:-mb-8 z-20  mt-20">
          <img
            src={img1}
            className="w-110 sm:w-72 md:w-80 lg:w-96 h-auto object-contain"
            alt="Dex 1"
          />
        </div>

        {/* Frame Container - img4 */}
        <div className="relative shrink-0 my-0 z-10">
          <img
            src={img4}
            alt="Frame"
            className="relative w-110 sm:w-72 md:w-80 lg:w-96 h-auto object-contain"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 lg:p-5 z-20 gap-2 sm:gap-2.5 md:gap-3 lg:gap-4">
            <img
              src={img6}
              alt="Timeline"
              className="w-64 sm:w-36 md:w-40 lg:w-48 h-auto object-contain mb-2 sm:mb-2.5 md:mb-3 lg:mb-4"
            />
            <img
              src={img3}
              alt="Timeline Map"
              className="w-80 sm:w-44 md:w-52 lg:w-64 h-auto object-contain"
            />
            <img
              src={img5}
              alt="Tracks"
              className="w-50 sm:w-28 md:w-32 lg:w-40 h-auto object-contain mt-2 sm:mt-2.5 md:mt-3 lg:mt-4"
            />

            {/* Buttons inside frame - stacked vertically */}
            <div className="flex flex-col justify-center items-center gap-5 sm:gap-2.5 md:gap-3 lg:gap-4 mt-3 sm:mt-3.5 md:mt-4 lg:mt-5 w-full px-2 sm:px-2.5 md:px-3 lg:px-4">
              {buttons.map((btn) => (
                <button
                  key={btn.id}
                  className="flex items-center justify-center shrink-0 bg-blue-300 border-2 md:border-3 lg:border-4 border-gray-900 rounded-sm font-bold transition-all duration-150 hover:scale-105 hover:bg-blue-400 active:scale-95 active:bg-blue-500"
                  style={{
                    width: "clamp(200px, 18vw, 160px)",
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

        {/* Bottom Pokéball - img2 */}
        <div className="shrink-0 -mt-4 sm:-mt-5 md:-mt-6 lg:-mt-8 z-20 mb-20">
          <img
            src={img2}
            className="w-110 sm:w-72 md:w-80 lg:w-96 h-auto object-contain"
            alt="Dex 2"
          />
        </div>
      </div>
    </div>
  );
};

export default TimelinePhones;
