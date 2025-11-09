import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./Loader.css";
import { useNavigate } from "react-router-dom";

const Loader = () => {
  const navigate = useNavigate();
  const controllerRef = useRef(null);
  const blueBgRef = useRef(null);
  const [clicked, setClicked] = useState(false);

  const handleEnter = () => {
    // Step 1: Hide blueBg with fade-out
    setClicked(true);
    gsap.to(blueBgRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        // Step 2: Animate controller div back to normal
        gsap.to(controllerRef.current, {
          scale: 1,
          x: 30,
          y: 160,
          rotate: -20,
          duration: 1.5,
          ease: "power3.inOut",
          onComplete: () => {
            // Step 3: Navigate to /home after animation
            navigate("/home");
          },
        });
      },
    });
  };

  useEffect(() => {
    // background parallax loops
    gsap.to(".background-layer.ground", {
      backgroundPositionX: "-2048px",
      ease: "none",
      duration: 20,
      repeat: -1,
    });

    gsap.to(".background-layer.clouds-bg", {
      backgroundPositionX: "-2048px",
      ease: "none",
      duration: 40,
      repeat: -1,
    });
  }, []);

  return (
    <section id="coming-soon" className="relative w-screen overflow-hidden">
      <div
        className="absolute w-screen h-screen bg-cover bg-center loaderController"
        style={{ backgroundImage: "url('/images/NAVIGATION.png')" }}
      >
        <div
          ref={controllerRef}
          className="w-[60%] loaderController h-auto bg-cover bg-center flex items-center justify-center translate-x-77 translate-y-45 scale-250"
          // style={{ backgroundImage: "url('/images/loaderController.png')" }}
        >
          <img
            className="absolute"
            src="/images/loaderController.png"
            alt="Loader Controller"
          />
          <div
            className={`relative w-[68%] h-[92%] overflow-hidden z-1 flex flex-col justify-between items-center transition-colors delay-1500 duration-[1500ms] ease-in-out ${
              clicked ? "bg-black" : "bg-[#7ad4fb]"
            }`}
          >
            <div
              className={`relative w-full transition-all duration-[1500ms] ease-in-out delay-1000 transform ${
                clicked ? "opacity-0" : "opacity-100"
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="background-layer clouds-bg"
                style={{ backgroundImage: "url('/images/cloudMov.png')" }}
              ></div>
              <div
                className="background-layer ground"
                style={{ backgroundImage: "url('/images/grass.png')" }}
              ></div>

              <div className="center-content">
                <div className="comingContainer">
                  <img
                    src="/images/clouds1.png"
                    className="clouds1"
                    id="cloud1"
                    alt="clouds"
                  />
                  <img src="/images/logo.png" className="logo" alt="logo" />
                  <img
                    src="/images/clouds1.png"
                    className="clouds2"
                    id="cloud2"
                    alt="clouds"
                  />
                </div>

                <div className="character-container">
                  <img
                    className="character-pikachu"
                    src="/images/run-pikachu.gif"
                    alt="Pikachu"
                  />
                  <img
                    className="character-bike"
                    src="/images/bikingGirl.gif"
                    alt="Character on bike"
                  />
                </div>
              </div>

              <button
                className="enter-button"
                onClick={handleEnter}
                aria-label="Enter"
                ref={blueBgRef}
              >
                <img src="/images/enter.svg" alt="Enter" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="blueBg blueBg2 md:hidden">
        <div
          className="background-layer clouds-bg"
          style={{ backgroundImage: "url('/images/cloudMov.png')" }}
        ></div>
        <div
          className="background-layer ground"
          style={{ backgroundImage: "url('/images/grass.png')" }}
        ></div>

        <div className="center-content">
          <div className="comingContainer">
            <img src="/images/clouds1.png" className="clouds1" id="cloud1" alt="clouds" />
            <img src="/images/logo.png" className="logo" alt="logo" />
            <img src="/images/clouds1.png" className="clouds2" id="cloud2" alt="clouds" />
          </div>

          <div className="character-container">
            <img
              className="character-pikachu"
              src="/images/run-pikachu.gif"
              alt="Pikachu"
            />
            <img
              className="character-bike"
              src="/images/bikingGirl.gif"
              alt="Character on bike"
            />
          </div>
        </div>

        <button
          className="enter-button"
          onClick={() => navigate("/home")}
          aria-label="Enter"
          // ref={blueBgRef}
        >
          <img src="/images/enter.svg" alt="Enter" />
        </button>
      </div>
    </section>
  );
};

export default Loader;
