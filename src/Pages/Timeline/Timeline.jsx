import { useState, useEffect } from "react";

const Timeline = () => {
  const [isBlack, setIsBlack] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBlack(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute bg-[url(/images/timeline/TimelineFinal.svg)] bg-cover bg-position-10 z-2000 h-screen w-screen">
      {isBlack ? (
        <div
          className={`bg-black absolute min-w-screen min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center `}
        ></div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Timeline;
