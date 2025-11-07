import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import trackData from "../../assets/tracks.json";
import { Button } from "../../Components";

const TracksMobile = () => {
  const [idx, setIdx] = useState(0);
  const [bg, setBG] = useState("/images/tracks/codingBG.png");
  const [prevBG, setPrevBG] = useState("/images/tracks/codingBG.png");
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const track = parseInt(params.get("track") || "1", 10); // default to 1
    setIdx(track - 1);
  }, [location.search]);

  const handleClick = (track) => {
    setIsOpen(false);
    setTimeout(() => {
      setPrevBG(bg); // store previous bg
      const newBG =
        track === 1
          ? "/images/tracks/codingBG.png"
          : track === 2
            ? "/images/tracks/softwareBG.png"
            : "/images/tracks/uiuxBG.png";

      setBG(newBG);
      setIdx(track - 1);
    }, 300);

    open();
  };

  const open = () => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  };

  return (
    <div className="absolute z-200 inset-0 h-screen w-screen overflow-hidden">
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
      <div className="relative flex flex-col items-center justify-between py-8 h-full w-full z-10">
        <div className="max-w-fit flex self-start pl-4 pt-4">
          <Button onClick={() => navigate("/")}>Back</Button>
        </div>

        {/* your main section */}
        <div className="flex items-center">
          <div className="flex flex-col">
            <img className="w-72 md:w-120" src="/images/tracks/dexUp.png" alt="" />
            <div className="w-72 md:w-120">
              <div
                className={`relative transition-all duration-500 ease-linear overflow-hidden ${
                  isOpen ? "h-52 md:h-80" : "h-0"
                }`}
              >
                <div className="backdrop-blur-lg bg-white/30 h-full relative overflow-hidden w-full px-4 md:px-8">
                  <div className="relative z-200 flex flex-col md:gap-4 h-full items-center py-4 justify-center gap-1 text-white text-center">
                    <h2 className="font-pocket-monk uppercase text-2xl md:text-xl mb-2">
                      {trackData[idx].name}
                    </h2>
                    <p className="text-justify text-xs md:text-base font-gill-sans">
                      {trackData[idx].desc}
                    </p>
                    <a
                      href={trackData[idx].registerLink}
                      className="font-pokemon-solid mt-2 md:mt-4 max-w-fit text-xs text-stroke-black pt-1 pb-2 px-4 border-2 rounded-full border-white hover:scale-105 transition-all duration-150 ease-linear"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <img className="w-72 md:w-120" src="/images/tracks/dexDown.png" alt="" />
          </div>
        </div>

        {/* bottom buttons */}
        <div className="flex justify-center items-center gap-2 px-8">
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
    </div>
  );
};

export default TracksMobile;
