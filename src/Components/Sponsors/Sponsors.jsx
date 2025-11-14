import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Card from "./Card";
import sponsorData from "../../assets/sponsors.json";
// const sponsorData = [
//   {
//     id: "amul-1",
//     logo: "/images/amul.png",
//     name: "AMUL",
//   },
//   {
//     id: "amul-2",
//     logo: "/images/amul.png",
//     name: "AMUL",
//   },
//   {
//     id: "amul-3",
//     logo: "/images/amul.png",
//     name: "AMUL",
//   },
//   {
//     id: "amul-4",
//     logo: "/images/amul.png",
//     name: "AMUL",
//   },
//   {
//     id: "amul-5",
//     logo: "/images/amul.png",
//     name: "AMUL",
//   },
//   {
//     id: "amul-6",
//     logo: "/images/amul.png",
//     name: "AMUL",
//   },
//   {
//     id: "amul-7",
//     logo: "/images/amul.png",
//     name: "AMUL",
//   },
//   {
//     id: "amul-8",
//     logo: "/images/amul.png",
//     name: "AMUL",
//   },
// ];

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
    <div
      id="sponsors"
      className="min-h-screen bg-[url(/images/background.svg)] p-8 font-sans"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-center mt-10">
          {/* <img src="/images/SPONSORS.svg" className="w-full max-w-md" alt="Sponsors" /> */}
          <h1 className="text-5xl text-center text-stroke tracking-wider md:text-9xl font-pocket-monk text-[#FFCB02]">
            Previous Sponsors
          </h1>
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
              key={sponsor.id}
              className={`
                card-item
                shrink-0 basis-[calc(50%-0.5rem)] 
                md:basis-auto md:w-auto 
                ${index % 2 === 1 ? "mt-38 md:mt-8" : ""}
              `}
            >
              <Card
                type={sponsor.type}
                logoImage={sponsor.img}
                sponsorName={sponsor.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
