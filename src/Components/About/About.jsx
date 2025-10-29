import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* NITS HACKS SECTION */}
      <section className="about-section">
        <h2 className="about-heading">ABOUT NITS HACKS</h2>
        <div className="about-box">
          <p className="about-text">
            <span className="highlight">NITS HACKS</span> is a distinguished
            hackathon hosted by NIT Silchar, recognized as one of the top events in
            northeastern India. This dynamic platform brings together tech enthusiasts,
            encouraging collaboration and highlighting their problem-solving expertise.
            Beyond just a competition, NITS HACKS focuses on cultivating essential soft
            skills for newcomers while offering valuable technical learning experiences
            for aspiring students. Participants tackle real-world challenges, guiding them
            in designing and developing innovative technology projects from scratch. The
            event not only celebrates innovation but also helps shape the future
            generation of tech leaders.
          </p>

          {/* 🎨 Brochure Banner (Pokémon style) */}
          <div className="brochure-banner">
            <img src="/images/aboutPoke.png" alt="Pokeball" className="poke-icon" />

            <button className="brochure-btn">
              ⬇ BROCHURE
            </button>

            <img
              src="/images/aboutPikachu.png"
              alt="Pikachu"
              className="pikachu"
            />
          </div>
        </div>
      </section>

      {/* TECNOESIS SECTION */}
      <section className="about-section">
        <h2 className="about-heading">ABOUT TECNOESIS</h2>
        <div className="about-box">
          <p className="about-text">
            <span className="highlight">TECNOESIS</span> is the annual techno-managerial
            event of NIT Silchar, promising all tech geeks the ideal niche of fascinating
            events, workshops, competitions and interactions worth a lifetime. This mega
            event has left its mark as one of the most prominent techfests across the
            country. The cauldron of enthusiasm and knowledge attracts various students,
            presenting the chance to let their minds run wild with ideas, fostering the
            inventors of the future.
          </p>
          <div className="brochure-banner-2">
            <img src="/images/squirtle.png" alt="Squirtle" className="Squirtle" />
             
            <button className="brochure-btn-2">
              🌐 VISIT TECNOESIS
            </button>
            <img src="/images/aboutPoke.png" alt="Pokeball" className="poke-icon" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
