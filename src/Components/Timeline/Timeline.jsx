import React, { useState, useEffect } from "react";
import TimelinePC from "./TimelinePC";
import TimelinePhones from "./TimelinePhones";

const Timeline = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check initial screen size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? <TimelinePhones /> : <TimelinePC />;
};

export default Timeline;
