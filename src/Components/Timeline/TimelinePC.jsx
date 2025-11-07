import React from "react";

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
      className="relative w-full bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${backgroundPattern})` }}
      id="timeline"
    >
      <div className="relative h-screen w-full flex justify-center items-center px-8">
        <div className="shrink-0 h-[490px] w-auto">
          <img src={img1} className="h-full w-auto object-contain" alt="Dex 1" />
        </div>

        <div className="relative shrink-0 h-[490px] w-[573px]">
          <img
            src={img4}
            alt="Timeline Frame"
            className="h-full w-full object-cover absolute top-0 left-0"
          />

          <div className="relative h-full w-full flex flex-col items-center p-4 z-10 overflow-hidden">
            <div className="h-8" />
            <img
              src={img6}
              className="h-auto max-h-[45px] md:max-h-[55px] w-auto"
              alt="Timeline Title"
            />
            <div className="h-6" />
            <img
              src={img3}
              className="max-w-full h-auto max-h-40 md:max-h-[200px]"
              alt="Timeline Map"
            />
            <div className="h-6" />
            <img
              src={img5}
              className="h-auto max-h-[45px] md:max-h-[55px] w-auto"
              alt="Tracks Title"
            />
          </div>
        </div>

        <div className="shrink-0 h-[490px] w-auto">
          <img src={img2} className="h-full w-auto object-contain" alt="Dex 2" />
        </div>
      </div>

      <div className="absolute bottom-[14%] left-1/2 -translate-x-1/2 flex justify-center gap-16 z-20">
        <button
          className="flex items-center justify-center px-10 py-3 rounded-lg bg-blue-300 border-3 border-gray-900 transition-all duration-100 hover:bg-blue-400 active:bg-blue-500 active:translate-x-px active:translate-y-px font-bold -ml-40"
          style={{ boxShadow: "inset 0 0 0 2px #e5e7eb" }}
        >
          <img src={img7} className="h-auto max-h-5 w-auto" alt="Software" />
        </button>

        <button
          className="flex items-center justify-center px-10 py-3 rounded-lg bg-blue-300 border-3 border-gray-900 transition-all duration-100 hover:bg-blue-400 active:bg-blue-500 active:translate-x-px active:translate-y-px font-bold"
          style={{ boxShadow: "inset 0 0 0 2px #e5e7eb" }}
        >
          <img src={img8} className="h-auto max-h-5 w-auto" alt="Coding" />
        </button>

        <button
          className="flex items-center justify-center px-10 py-3 rounded-lg bg-blue-300 border-3 border-gray-900 transition-all duration-100 hover:bg-blue-400 active:bg-blue-500 active:translate-x-px active:translate-y-px font-bold -mr-40"
          style={{ boxShadow: "inset 0 0 0 2px #e5e7eb" }}
        >
          <img src={img9} className="h-auto max-h-5 w-auto" alt="UI/UX" />
        </button>
      </div>
    </div>
  );
};

export default TimelinePC;
