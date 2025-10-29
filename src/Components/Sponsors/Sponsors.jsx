import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Card from "./Card";
import AmulLogo from "/public/images/amul.png";
import sponsorsImg from "/public/images/SPONSORS.svg";
import button from "/public/images/button.svg";
const sponsorData = [
  {
    logo: AmulLogo,
    name: "AMUL",
  },
  {
    logo: AmulLogo,
    name: "AMUL",
  },
  {
    logo: AmulLogo,
    name: "AMUL",
  },
  {
    logo: AmulLogo,
    name: "AMUL",
  },
  {
    logo: AmulLogo,
    name: "AMUL",
  },
  {
    logo: AmulLogo,
    name: "AMUL",
  },
  {
    logo: AmulLogo,
    name: "AMUL",
  },
  {
    logo: AmulLogo,
    name: "AMUL",
  },
];
const Sponsors = () => {
  const containerRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.matchMedia().add("(min-width: 768px)", () => {
        gsap.fromTo(
          ".card-item",
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.25,
            delay: 0.4,
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);
  return (
    <div className="min-h-screen bg-[url(../../../public/images/background.svg)] p-8 font-sans">
      <div className="container mx-auto">
        {/* <button>
          <img
            src={button}
            alt="Go back"
            className="w-30 md:w-48 md:ml-9 cursor-pointer"
          />
        </button> */}
        <div className="flex items-center justify-center mt-10">
          <img src={sponsorsImg} className="w-full max-w-md" alt="Sponsors" />
        </div>
        <div
          ref={containerRef}
          className="mt-21 md:mt-16 
            flex flex-row gap-x-4 overflow-x-auto py-4 no-scrollbar 
            md:grid md:grid-cols-3 lg:grid-cols-4 
            md:gap-x-4 md:gap-y-23 lg:gap-y-14 
            md:overflow-visible md:py-0"
        >
          {sponsorData.map((sponsor, index) => (
            <div
              className={`
                card-item
                shrink-0 basis-[calc(50%-0.5rem)] 
                md:basis-auto md:w-auto 
                ${index % 2 === 1 ? "mt-38 md:mt-8" : ""}
              `}
            >
              <Card logoImage={sponsor.logo} sponsorName={sponsor.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
