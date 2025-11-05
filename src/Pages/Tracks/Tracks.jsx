import { useMediaQuery } from "react-responsive";
import TracksDesktop from "./TracksDesktop";
import TracksMobile from "./TracksMobile";

const Tracks = () => {
  // Tailwind's lg breakpoint = 1024px
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  return isDesktop ? <TracksDesktop /> : <TracksMobile />;
};

export default Tracks;
