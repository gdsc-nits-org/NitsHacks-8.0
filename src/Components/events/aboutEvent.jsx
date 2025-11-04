import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import back from "../../../public/images/back.svg";
import softwareGame from "../../../public/images/softwareGame.png";
import codingGame from "../../../public/images/codingGame.png";
import uiuxGame from "../../../public/images/uiuxGame.png";
import dex1 from "../../../public/images/dex1.png";
import dex2 from "../../../public/images/dex2.png";
import updex from "../../../public/images/updex.png";
import downdex from "../../../public/images/downdex.png";

const trackData = {
  software: {
    title: "Software Track",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dignissimos atque sequi vero, nam nemo cumque quas, ex ipsum consequatur animi a? Numquam consequatur tenetur blanditiis eos perspiciatis inventore vel fdhjd kfedfh jdfjdfh jdfjd Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dignissimos atque sequi vero, nam nemo cumque quas, ex ipsum consequatur animi a? Numquam consequatur tenetur blanditiis eos perspiciatis inventore vel fdhjd kfedfh jdfjdfh jdfjd",
  },
  coding: {
    title: "Coding Track",
    text: "This is the coding track. Learn all about algorithms, data structures, and more. Become a coding ninja and solve complex problems with ease. Join us for weekly challenges and hackathons. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, ex. Laboriosam, id. Quibusdam, quas. Animi, quae! Amet, officiis! Eius, nam.",
  },
  uiux: {
    title: "UI/UX Track",
    text: "Welcome to the UI/UX track. Focus on user-centric design, create beautiful interfaces, and understand user psychology. You will work with tools like Figma and Adobe XD to bring your ideas to life. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, rem. Repellat, sequi. Temporibus, minima! Eos, sed.",
  },
};

function aboutEvents() {
  const container = useRef();
  const dexLeft = useRef();
  const dexRight = useRef();
  const upDexRef = useRef();
  const downDexRef = useRef();
  const contentBox = useRef();
  const contentInner = useRef();
  const revealLine = useRef();
  const blurEffect = useRef();
  const backButtonRef = useRef();

  const [activeTrack, setActiveTrack] = useState("software");
  const [isAnimating, setIsAnimating] = useState(false);
  const isInitialMount = useRef(true);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "power2.inOut" },
        });

        tl.from(
          contentBox.current,
          {
            width: 0,
            padding: 0,
            duration: 1.2,
          },
          0
        );

        tl.from(
          blurEffect.current,
          {
            opacity: 0,
            duration: 1.2,
          },
          0
        );

        tl.from(
          dexLeft.current,
          {
            xPercent: 50,
            opacity: 0,
            duration: 1.2,
          },
          0
        );

        tl.from(
          dexRight.current,
          {
            xPercent: -50,
            opacity: 0,
            duration: 1.2,
          },
          0
        );

        tl.from(
          revealLine.current,
          {
            width: 0,
            duration: 0.8,
          },
          "-=0.2"
        );

        tl.from(
          contentInner.current,
          {
            opacity: 0,
            clipPath: "inset(50% 0 50% 0)",
            duration: 0.8,
          },
          ">"
        );

        tl.to(
          backButtonRef.current,
          {
            opacity: 1,
            duration: 0.8,
          },
          "<"
        );

        tl.to(
          revealLine.current,
          {
            opacity: 0,
            duration: 0.8,
          },
          "<"
        );
      });

      mm.add("(max-width: 767px)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "power2.inOut" },
        });

        tl.from(
          contentBox.current,
          {
            height: 0,
            padding: 0,
            duration: 1.2,
          },
          0
        );

        tl.from(
          blurEffect.current,
          {
            opacity: 0,
            duration: 1.2,
          },
          0
        );

        tl.from(
          upDexRef.current,
          {
            yPercent: 50,
            opacity: 0,
            duration: 1.2,
          },
          0
        );
        tl.from(
          downDexRef.current,
          {
            yPercent: -75,
            opacity: 0,
            duration: 1.2,
          },
          0
        );

        tl.set(
          revealLine.current,
          {
            width: "1px",
            height: "0%",
            top: "0",
            left: "50%",
            yPercent: 0,
            xPercent: -50,
            opacity: 1,
          },
          "-=0.2"
        );

        tl.to(
          revealLine.current,
          {
            height: "100%",
            duration: 0.8,
          },
          "-=0.2"
        );

        tl.from(
          contentInner.current,
          {
            opacity: 0,
            clipPath: "inset(50% 0 50% 0)",
            duration: 0.8,
          },
          ">"
        );

        tl.to(
          revealLine.current,
          {
            opacity: 0,
            duration: 0.8,
          },
          "<"
        );
      });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      onComplete: () => {
        setIsAnimating(false);
      },
    });

    tl.fromTo(
      contentInner.current,
      {
        opacity: 0,
        clipPath: "inset(50% 0 50% 0)",
      },
      {
        opacity: 1,
        clipPath: "inset(0% 0 0% 0)",
        duration: 0.8,
      },
      0
    );

    tl.to(
      revealLine.current,
      {
        opacity: 0,
        duration: 0.8,
      },
      "<"
    );
  }, [activeTrack]);

  const handleTrackClick = (trackName) => {
    if (trackName === activeTrack || isAnimating) {
      return;
    }

    setIsAnimating(true);

    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      onComplete: () => {
        setActiveTrack(trackName);
      },
    });

    tl.to(
      contentInner.current,
      {
        opacity: 0,
        clipPath: "inset(50% 0 50% 0)",
        duration: 0.8,
      },
      0
    );

    tl.set(
      revealLine.current,
      {
        width: "1px",
        height: "0%",
        top: "0",
        left: "50%",
        yPercent: 0,
        xPercent: -50,
        opacity: 1,
      },
      "<"
    );

    tl.to(
      revealLine.current,
      {
        height: "100%",
        duration: 0.8,
      },
      "<"
    );
  };

  return (
    <div
      ref={container}
      className="min-h-screen w-full bg-[url(../../../public/images/Software.jpg)] md:bg-[url(../../../public/images/newsoft.jpg)] bg-cover bg-center pt-27 md:p-8 lg:p-16 overflow-x-hidden"
    >
      <button
        ref={backButtonRef}
        className="hidden md:block cursor-pointer absolute top-0 left-0 p-4 md:p-8 lg:p-16 opacity-0 z-20"
      >
        <img src={back} alt="Back" className="w-8 h-8 lg:w-40 lg:h-30" />
      </button>

      <div className="h-full flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row justify-center w-[90vw] md:w-[80vw] lg:w-[60vw] xl:w-[50vw] mx-auto h-[60vh] md:h-[70vh]">
          <img
            ref={dexLeft}
            src={dex1}
            className="hidden md:block h-full w-24 md:w-36 lg:w-48 object-contain flex-shrink-0"
            alt="Pokedex Left"
          />

          <img
            ref={upDexRef}
            src={updex}
            className="block md:hidden w-full object-contain flex-shrink-0"
            alt="Pokedex Top"
          />

          <div
            ref={contentBox}
            className="flex-1 w-full h-full text-center relative flex flex-col overflow-hidden md:rounded-3xl"
          >
            <div
              ref={blurEffect}
              className="absolute inset-0 w-full h-full backdrop-blur-lg md:backdrop-blur-md md:rounded-3xl"
              style={{ transform: "translateZ(0)" }}
            ></div>

            <div
              ref={contentInner}
              className="text-white relative z-10 p-4 md:p-8 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex-1"
            >
              <h1 className="text-2xl font-bold font-space">
                {trackData[activeTrack].title}
              </h1>
              <p className="mt-4 font-space">{trackData[activeTrack].text}</p>
              <button className="rounded-full border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors cursor-pointer mt-4 font-pocket-monk">
                Register Now
              </button>
            </div>

            <div
              ref={revealLine}
              className="w-full h-px bg-white mx-auto absolute left-0 top-1/2 -translate-y-1/2 z-10"
            ></div>
          </div>

          <img
            ref={downDexRef}
            src={downdex}
            className="block md:hidden w-full object-contain flex-shrink-0 mt-1"
            alt="Pokedex Bottom"
          />

          <img
            ref={dexRight}
            src={dex2}
            className="hidden md:block h-full w-24 md:w-36 lg:w-48 object-contain flex-shrink-0"
            alt="Pokedex Right"
          />
        </div>
        <div className="hidden">
          <img src={updex} alt="" />
          <img src={downdex} alt="" />
        </div>
        <div className="flex justify-around mt-8 w-full max-w-lg">
          <img
            src={softwareGame}
            alt="Software Track"
            className="cursor-pointer transition-transform hover:scale-110 w-24 h-24 md:w-32 md:h-32"
            onClick={() => handleTrackClick("software")}
            s
          />
          <img
            src={codingGame}
            alt="Coding Track"
            className="cursor-pointer transition-transform hover:scale-110 w-24 h-24 md:w-32 md:h-32"
            onClick={() => handleTrackClick("coding")}
          />
          <img
            src={uiuxGame}
            alt="UI/UX Track"
            className="cursor-pointer transition-transform hover:scale-110 w-24 h-24 md:w-32 md:h-32"
            onClick={() => handleTrackClick("uiux")}
          />
        </div>
      </div>
    </div>
  );
}
export default aboutEvents;

