import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./Loader.css";

const Loader = () => {
  useEffect(() => {
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
    <section id="coming-soon">
      <div className="blueBg">
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

        <div className="loader-container">
          <div className="loader-bar"></div>
        </div>
      </div>
    </section>
  );
};

export default Loader;
