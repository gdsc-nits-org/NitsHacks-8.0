import { useState } from "react";

import trackData from "../../assets/tracks.json";

const TracksDesktop = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showCovers, setShowCovers] = useState(true);
  const [data, setData] = useState(trackData[0]);

  const handleClick = (track) => {
    setIsOpen(false);
    setShowCovers(false);
    const timer = setTimeout(() => {}, 200);
    setData(trackData[track - 1]);
    open();
  };
  const open = () => {
    setIsOpen(false);
    const timer = setTimeout(() => {
      setIsOpen(true);
      const timer = setTimeout(() => setShowCovers(true), 500);
      return () => clearTimeout(timer);
    }, 1000);
    return () => clearTimeout(timer);
  };
  return (
    <div className="flex flex-col py-10 h-screen absolute z-100 w-screen max-w-screen overflow-hidden bg-[url('/images/tracks/TrackFrame.png')] bg-center bg-cover">
      <div className="flex-1 flex justify-center items-center">
        <div className="flex justify-center h-120 items-center w-[50vw]">
          <img className="h-120" src="/images/tracks/dexLeft.png" alt="" />
          <div
            className={`relative transition-all duration-500 ease-linear overflow-hidden ${
              isOpen ? "w-96" : "w-0"
            }`}
          >
            <div className="backdrop-blur-lg flex flex-col h-120 px-6 relative overflow-hidden">
              <div className="relative z-200 flex-1 flex flex-col items-center py-4 justify-center gap-4 text-white text-center">
                <h2 className="font-pokemon-fire-red uppercase text-xl mb-2">
                  {data.name}
                </h2>
                <p className="text-justify text-xs">{data.bigdesc}</p>
                <a
                  href={data.registerLink}
                  className="font-pokemon-solid cursor-pointer max-w-fit text-stroke-black pt-0.8 pb-2 px-4 border-2 rounded-full border-white hover:scale-105 transition-all duration-150 ease-linear"
                >
                  Register Now
                </a>
              </div>

              {/* Top Cover */}
              <div
                className={`absolute z-200 top-0 left-0 w-full h-1/2 bg-[url('/images/tracks/topBlur.png')] bg-center bg-cover transition-transform duration-700 ease-in-out ${
                  showCovers ? "-translate-y-full" : "translate-y-0"
                }`}
              ></div>

              {/* Bottom Cover */}
              <div
                className={`absolute z-200 bottom-0 left-0 w-full h-1/2 bg-[url('/images/tracks/bottomBlur.png')] bg-center bg-cover transition-transform duration-700 ease-in-out ${
                  showCovers ? "translate-y-full" : "translate-y-0"
                }`}
              ></div>
            </div>
          </div>

          <img className="h-120" src="/images/tracks/dexRight.png" alt="" />
        </div>
      </div>
      <div className="flex justify-center items-center gap-20">
        <button onClick={() => handleClick(1)}>
          <img
            className="h-24 hover:scale-105 transition-all duration-150 ease-linear"
            src="/images/tracks/codingGame.svg"
            alt="codingTrack"
          />
        </button>
        <button onClick={() => handleClick(2)}>
          <img
            className="h-24 hover:scale-105 transition-all duration-150 ease-linear"
            src="/images/tracks/softwareGame.svg"
            alt="softwareTrack"
          />
        </button>
        <button onClick={() => handleClick(3)}>
          <img
            className="h-24 hover:scale-105 transition-all duration-150 ease-linear"
            src="/images/tracks/uiuxGame.svg"
            alt="uiuxTrack"
          />
        </button>
      </div>
    </div>
  );
};

export default TracksDesktop;
