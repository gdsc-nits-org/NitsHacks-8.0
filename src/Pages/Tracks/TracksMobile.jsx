import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import trackData from "../../assets/tracks.json";

import { Button } from "../../Components";

// Helper function to get track data by ID
const getTrackData = (trackId) => {
  return trackData.find((t) => t.id === parseInt(trackId, 10)) || trackData[0];
};

// Helper function to get the correct background image by ID
const getTrackBG = (trackId) => {
  const id = parseInt(trackId, 10);
  if (id === 1) return "/images/tracks/codingBG.png";
  if (id === 2) return "/images/tracks/softwareBG.png";
  if (id === 3) return "/images/tracks/uiuxBG.png";
  return "/images/tracks/codingBG.png"; // Default
};

const TracksMobile = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialTrackId = searchParams.get("track") || trackData[0].id;
  const [data, setData] = useState(() => getTrackData(initialTrackId));
  const [bg, setBG] = useState(() => getTrackBG(initialTrackId));
  const [prevBG, setPrevBG] = useState(() => getTrackBG(initialTrackId));
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    const trackIdFromUrl = searchParams.get("track") || trackData[0].id;
    const numericTrackId = parseInt(trackIdFromUrl, 10);

    if (numericTrackId !== data.id) {
      setIsOpen(false);
      const timer = setTimeout(() => {
        setPrevBG(bg);
        setBG(getTrackBG(numericTrackId));
        setData(getTrackData(numericTrackId));
      }, 300);

      open();
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [searchParams, data.id, bg]);

  useEffect(() => {
    if (!searchParams.get("track")) {
      setSearchParams({ track: trackData[0].id }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    // --- FIX APPLIED HERE ---
    // Resets scroll position to the top when the component mounts
    window.scrollTo(0, 0);

    open();
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleClick = (trackId) => {
    if (data.id === trackId) return;
    setSearchParams({ track: trackId });
  };

  return (
    <div className="relative z-200 inset-0 w-screen h-screen overflow-visible flex flex-col">
      {/* --- Background Transition Layer --- */}
      <div className="absolute inset-0 transition-opacity duration-700">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 transition-opacity duration-700"
          style={{ backgroundImage: `url(${prevBG})` }}
        ></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 transition-opacity duration-700 animate-fade-in"
          key={bg}
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
      </div>

      {/* --- Main Content --- */}
      <div className="relative flex flex-col items-center h-full w-full z-10">
        {/* 1. Back button */}
        <div className="w-full flex justify-start pl-4 pt-4 shrink-0 relative z-20">
          <Button onClick={() => navigate("/home")} className="max-w-fit left-4 top-8">
            Back
          </Button>
        </div>

        {/* 2. Middle content */}
        <div className="flex items-center justify-center flex-1  py-4 relative z-10">
          <div className="flex flex-col pt-6">
            <img className="w-80 md:w-[32rem]" src="/images/tracks/dexUp.png" alt="" />
            <div className="w-80 md:w-[32rem]">
              <div
                className={`relative transition-all duration-500 ease-linear overflow-hidden ${
                  isOpen ? "h-64 md:h-96" : "h-0"
                }`}
              >
                <div className="backdrop-blur-xl bg-black/40 h-full relative overflow-y-auto w-full px-6 md:px-10">
                  <div className="relative z-200 flex flex-col md:gap-4 h-full items-center py-4 justify-center gap-2 text-white text-center">
                    <h2 className="font-pocket-monk uppercase text-xl md:text-2xl mb-2">
                      {data.name}
                    </h2>
                    <p className="text-justify font-pokemon-fire-red text-xs md:text-sm leading-relaxed">
                      {data.desc}
                    </p>
                    <a
                      href={data.registrationLink}
                      className="font-pocket-monk mt-2 md:mt-4 max-w-fit text-xs text-stroke-black pt-1 pb-2 px-4 border-2 rounded-full border-white hover:scale-105 transition-all duration-150 ease-linear"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <img className="w-80 md:w-[32rem]" src="/images/tracks/dexDown.png" alt="" />
          </div>
        </div>

        {/* 3. Bottom buttons */}
        <div className="flex justify-center items-center gap-2 px-8 pb-4 shrink-0 relative z-20">
          <button onClick={() => handleClick(1)}>
            <img
              className="h-32 hover:scale-105 transition-all duration-150 ease-linear"
              src="/images/tracks/codingGame.svg"
              alt="codingTrack"
            />
          </button>
          <button onClick={() => handleClick(2)}>
            <img
              className="h-32 hover:scale-105 transition-all duration-150 ease-linear"
              src="/images/tracks/softwareGame.svg"
              alt="softwareTrack"
            />
          </button>
          <button onClick={() => handleClick(3)}>
            <img
              className="h-32 hover:scale-105 transition-all duration-150 ease-linear"
              src="/images/tracks/uiuxGame.svg"
              alt="uiuxTrack"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TracksMobile;
