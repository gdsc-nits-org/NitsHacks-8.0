import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import trackData from "../../assets/tracks.json";
import { Button } from "../../Components";

// Helper function now finds data by *numeric* ID
const getTrackData = (trackId) => {
  // Find the matching track, or default to the first track
  return trackData.find((t) => t.id === parseInt(trackId, 10)) || trackData[0];
};

<<<<<<< HEAD
const TracksDesktop = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // FIX 1: Start the component in its 'closed' state
  const [isOpen, setIsOpen] = useState(false);
  const [showCovers, setShowCovers] = useState(false);

  // Initialize 'data' state by reading the URL on first load
  const [data, setData] = useState(() => getTrackData(searchParams.get("track")));

  // User's existing 'open' function (unchanged)
  const open = () => {
    setIsOpen(false);
    const timer = setTimeout(() => {
      setIsOpen(true);
      const timer2 = setTimeout(() => setShowCovers(true), 500);
      return () => clearTimeout(timer2);
    }, 1000);
    return () => clearTimeout(timer);
  };

  // This effect handles all data changes
  useEffect(() => {
    const trackIdFromUrl = searchParams.get("track") || trackData[0].id;
    const numericTrackId = parseInt(trackIdFromUrl, 10);

    // This 'if' block will now be skipped on the first load,
    // which is correct because we're handling the initial
    // animation in the new useEffect below.
    if (numericTrackId !== data.id) {
      setIsOpen(false);
      setShowCovers(false);
      const timer = setTimeout(() => {
        setData(getTrackData(numericTrackId));
      }, 500);
      open();
      return () => clearTimeout(timer);
    }

    return undefined;
  }, [searchParams, data.id]);

  // This effect sets the default URL param on first load
  useEffect(() => {
    if (!searchParams.get("track")) {
      setSearchParams({ track: trackData[0].id }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  // FIX 2: Add this new useEffect to run the 'open' animation
  // once the component mounts
  useEffect(() => {
    open();
    // We only want this to run once, so we pass an empty dependency array
  }, []);

  const handleClick = (trackId) => {
    // Prevent re-running the animation if the same track is clicked
    if (data.id === trackId) return;
    setSearchParams({ track: trackId });
  };

  return (
    <div className="flex flex-col h-screen absolute z-100 w-screen max-w-screen overflow-hidden bg-[url('/images/tracks/TrackFrame.png')] bg-center bg-cover">
      <a
        href="/"
        className="absolute top-4 -left-4 md:left-4 bg-[url(/images/timeline/button.svg)] bg-center bg-cover w-60 h-16 scale-50 md:scale-75 z-20"
      >
        {" "}
      </a>

      {/* This 'pt-10' is correct */}
      <div className="flex-1 flex justify-center items-center pt-10">
        <div className="flex justify-center h-120 items-center w-[50vw]">
          <img className="h-120" src="/images/tracks/dexLeft.png" alt="" />
          <div
            // This 'w-0' (from isOpen: false) is what makes it start closed
            className={`relative transition-all duration-500 ease-linear overflow-hidden ${
              isOpen ? "w-96" : "w-0"
            }`}
          >
            <div className="backdrop-blur-lg flex flex-col h-120 px-6 relative overflow-hidden">
              <div className="relative z-200 flex-1 flex flex-col items-center py-4 justify-center gap-4 text-white text-center">
                <h2 className="font-pocket-monk  text-3xl mb-2">{data.name}</h2>
                <p className="text-justify font-gill-sans text-xs">{data.bigdesc}</p>
                <a
                  href={data.registrationLink}
                  className="font-pokemon-solid cursor-pointer max-w-fit text-stroke-black pt-0.8 pb-2 px-4 border-2 rounded-full border-white hover:scale-105 transition-all duration-150 ease-linear"
                >
                  Register Now
                </a>
              </div>

              {/* Top Cover */}
              <div
                // This 'translate-y-0' (from showCovers: false) makes it start closed
                className={`absolute z-200 top-0 left-0 w-full h-1/2 bg-[url('/images/tracks/topBlur.png')] bg-center bg-cover transition-transform duration-700 ease-in-out ${
                  showCovers ? "-translate-y-full" : "translate-y-0"
                }`}
              ></div>

              {/* Bottom Cover */}
              <div
                // This 'translate-y-0' (from showCovers: false) makes it start closed
                className={`absolute z-200 bottom-0 left-0 w-full h-1/2 bg-[url('/images/tracks/bottomBlur.png')] bg-center bg-cover transition-transform duration-700 ease-in-out ${
                  showCovers ? "translate-y-full" : "translate-y-0"
                }`}
              ></div>
            </div>
          </div>

          <img className="h-120" src="/images/tracks/dexRight.png" alt="" />
        </div>
      </div>

      {/* This 'pb-10' is correct */}
      <div className="flex justify-center items-center gap-20 pb-10">
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
