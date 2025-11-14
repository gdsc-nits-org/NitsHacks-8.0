import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const Navigation = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isTimelineAnimating, setIsTimelineAnimating] = useState(false);
  const [isTeamAnimating, setIsTeamAnimating] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  const navigate = useNavigate();

  useEffect(() => {
    const images = [
      "/images/NAVIGATIONBG.png",
      "/images/loaderController.png",
      "/images/Navigation/TimelineDex.svg",
      "/images/Navigation/TeamDex.svg",
      "/images/nits-hacks-logo.png",
      "/images/pikachu-running.webp",
    ];
    let loaded = 0;
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loaded += 1;
        setProgress(Math.floor((loaded / images.length) * 100));
        if (loaded === images.length) {
          setTimeout(() => setLoading(false), 600);
        }
      };
    });
  }, []);

  const handleControllerClick = () => {
    if (!isDesktop) {
      navigate("/tracks");
      return;
    }
    setIsAnimating(true);
    setTimeout(() => {
      navigate("/tracks");
    }, 2000);
  };

  const handleTimelineClick = () => {
    setIsTimelineAnimating(true);
    setTimeout(() => {
      navigate("/timeline");
    }, 1500);
  };

  const handleTeamClick = () => {
    setIsTeamAnimating(true);
    setTimeout(() => {
      navigate("/team");
    }, 1500);
  };

  if (loading) {
    return <LoadingScreen progress={progress} />;
  }

  return (
    <section className="h-screen w-screen flex bg-[url(/images/NAVIGATIONBG.png)] bg-cover bg-center relative overflow-hidden">
      <div className="w-1/2 relative">
        <button
          onClick={handleControllerClick}
          className={`absolute w-full top-[40%] left-[20%] lg:top-[23%] lg:left-[15%] -rotate-20 transition-all duration-500 ${
            isAnimating
              ? "rotate-0 scale-[3] md:scale-[3] lg:scale-[2.278] z-50 translate-x-[35%]"
              : ""
          }`}
        >
          <img
            className="cursor-pointer"
            src="/images/loaderController.png"
            alt="nintendo"
          />
          <div className="absolute w-[65%] h-[89%] -top-[-7%] left-[17.5%] bg-black rounded-xl overflow-hidden z-10 flex justify-center items-center pointer-events-none">
            <h1
              className="font-pocket-monk text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#e1e0d9] opacity-0 animate-fadeIn tracking-wider"
              style={{
                textShadow:
                  "3px 3px 0px #002067, -1px -1px 0px #002067, 1px -1px 0px #002067, -1px 1px 0px #002067, 1px 1px 0px #002067",
                WebkitTextStroke: "1px #002067",
              }}
            >
              {" "}
              Tracks
            </h1>
          </div>
        </button>
      </div>

      <div className="w-1/2 relative">
        <div className="absolute top-[5%] lg:right-[21%] lg:top-[-8%] scale-80 md:scale-100 lg:scale-80">
          <button onClick={handleTimelineClick} className="relative group">
            <img
              className={`cursor-pointer transition-all duration-1500 ${
                isTimelineAnimating ? "rotate-0 scale-[10] z-50 -translate-x-[35%]" : ""
              }`}
              src="/images/Navigation/TimelineDex.svg"
              alt="timelineDex"
            />
            <div className="absolute w-[80%] h-[110%] top-[5%] left-[10%] flex justify-center items-center pointer-events-none">
              <h2
                className={`font-pocket-monk text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FFCB02] whitespace-nowrap transition-opacity duration-300 ${
                  isTimelineAnimating ? "opacity-0" : "opacity-100"
                }`}
                style={{
                  textShadow:
                    "3px 3px 0px #002067, -1px -1px 0px #002067, 1px -1px 0px #002067, -1px 1px 0px #002067, 1px 1px 0px #002067",
                  WebkitTextStroke: "1px #002067",
                }}
              >
                Timeline
              </h2>
            </div>
          </button>
        </div>

        <div className="absolute bottom-[10%] lg:right-[26%] scale-60 md:scale-75 lg:bottom-[8%] lg:scale-80">
          <button onClick={handleTeamClick} className="relative group">
            <img
              className={`cursor-pointer transition-all duration-1500 ${
                isTeamAnimating ? "rotate-0 scale-[15] z-50 -translate-x-full" : ""
              }`}
              src="/images/Navigation/TeamDex.svg"
              alt="teamDex"
            />
            <div className="absolute w-[80%] h-[110%] top-[1%] left-[10%] flex justify-center items-center pointer-events-none">
              <h2
                className={`font-pocket-monk text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FFCB02] whitespace-nowrap transition-opacity duration-300 ${
                  isTeamAnimating ? "opacity-0" : "opacity-100"
                }`}
                style={{
                  textShadow:
                    "3px 3px 0px #002067, -1px -1px 0px #002067, 1px -1px 0px #002067, -1px 1px 0px #002067, 1px 1px 0px #002067",
                  WebkitTextStroke: "1px #002067",
                }}
              >
                Teams
              </h2>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
