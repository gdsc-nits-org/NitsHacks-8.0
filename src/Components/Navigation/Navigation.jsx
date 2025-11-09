import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isTimelineAnimating, setIsTimelineAnimating] = useState(false);
  const [isTeamAnimating, setIsTeamAnimating] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  const navigate = useNavigate();

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

  return (
    <section className="h-screen flex w-screen bg-[url(/images/NAVIGATIONBG.png)] bg-cover bg-center">
      <div className="w-1/2 relative">
        <img
          className={`absolute scale-120 top-[40%] left-[20%] lg:top-[23%] lg:left-[15%] -rotate-20 cursor-pointer transition-all duration-500 ${
            isAnimating
              ? "rotate-0 md:rotate-0 lg:rotate-0 scale-[3] md:scale-[3] lg:scale-[3] z-50 translate-[35%] md:translate-x-[35%] lg:translate-x-[35%"
              : ""
          }`}
          src="/images/loaderController.png"
          alt="nintendo"
          onClick={handleControllerClick}
        />
      </div>
      <div className="w-1/2 relative">
        <img
          className={`absolute top-[5%] lg:right-[21%] lg:top-[-8%] scale-80 md:scale-100 lg:scale-80 cursor-pointer transition-all duration-1500 ${
            isTimelineAnimating
              ? "rotate-0 md:rotate-0 lg:rotate-0 scale-[10] md:scale-[10] lg:scale-[10] z-50 -translate-x-[35%]"
              : ""
          }`}
          src="/images/Navigation/TimelineDex.svg"
          alt="timelineDex"
          onClick={handleTimelineClick}
        />
        <img
          className={`absolute bottom-[10%] lg:right-[26%] scale-60 md:scale-75 lg:bottom-[8%] lg:scale-80 cursor-pointer transition-all duration-1500 ${
            isTeamAnimating
              ? "rotate-0 lg:rotate-0 md:rotate-0 scale-[15] md:scale-[15] lg:scale-[15] z-50 md:z-50 lg:z-50 -translate-x-full md:-translate-x-full lg:-translate-x-full"
              : ""
          }`}
          src="/images/Navigation/TeamDex.svg"
          alt="teamDex"
          onClick={handleTeamClick}
        />
      </div>
    </section>
  );
};

export default Navigation;
