import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const Timeline = () => {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  const handleClick = (track) => {
    navigate(`/tracks?track=${track}`);
  };
  if (isDesktop) {
    return (
      <section className="w-screen bg-[url(/images/testimonials/testimonialsBG.png)] py-32 px-20">
        <div className="flex w-full justify-center">
          <img className="h-[90%]" src="/images/tracks/dexLeft.png" alt="" />
          <div className="relative backdrop-blur-2xl bg-[radial-gradient(ellipse_at_center,_#B0C2C624,_#B5DAE224)] flex flex-col items-center gap-6 px-16 py-8">
            <h1 className="font-pocket-monk text-stroke-blue text-wider text-6xl md:text-7xl text-[#FFCB02] stroke-[#002067]">
              Timeline
            </h1>
            <button
              className="cursor-pointer"
              onClick={() => {
                navigate("/timeline");
              }}
            >
              <img className="w-80" src="/images/timeline/mapDesk.svg" alt="map" />
            </button>
            <h1 className="font-pocket-monk text-stroke-blue text-wider text-6xl md:text-7xl text-[#FFCB02] text-stroke-[#002067]">
              Tracks
            </h1>
            <ul className="flex gap-12 absolute bottom-8">
              <li>
                <Button onClick={() => handleClick(1)}>Coding</Button>
              </li>
              <li>
                <Button onClick={() => handleClick(2)}>Software</Button>
              </li>
              <li>
                <Button onClick={() => handleClick(3)}>UIUX</Button>
              </li>
            </ul>
          </div>
          <img className="h-[90%]" src="/images/tracks/dexRight.png" alt="" />
        </div>
      </section>
    );
  }
  return (
    <section className="w-screen bg-[url(/images/testimonials/testimonialsBG.png)] py-20 px-20">
      <div className="flex flex-col w-full items-center">
        <img className="w-full" src="/images/tracks/dexUp.png" alt="" />
        <div className="backdrop-blur-2xl bg-[radial-gradient(ellipse_at_center,_#B0C2C624,_#B5DAE224)] flex flex-col items-center gap-4 py-4 w-full md:py-8">
          <h1 className="font-pocket-monk text-stroke-blue text-wider text-5xl md:text-7xl text-[#FFCB02] stroke-[#002067]">
            Timeline
          </h1>
          <button
            onClick={() => {
              navigate("/timeline");
            }}
          >
            <img className="md:w-80" src="/images/timeline/map.svg" alt="map" />
          </button>
          <h1 className="font-pocket-monk text-stroke-blue text-wider text-5xl md:text-7xl text-[#be2c18] text-stroke-[#002067]">
            Tracks
          </h1>
          <ul className="flex flex-col gap-6">
            <li>
              <Button onClick={() => handleClick(1)}>Coding</Button>
            </li>
            <li>
              <Button onClick={() => handleClick(2)}>Software</Button>
            </li>
            <li>
              <Button onClick={() => handleClick(3)}>UIUX</Button>
            </li>
          </ul>
        </div>
        <img className="w-full mt-4" src="/images/tracks/dexDown.png" alt="" />
      </div>
    </section>
  );
};

export default Timeline;
