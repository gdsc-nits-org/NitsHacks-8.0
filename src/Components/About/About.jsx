import "./About.css";

const About = () => {
  return (
    <div className="about-container pt-24 pb-16 px-8 md:px-16 lg:px-24 lg:pt-32 lg:pb-24">
      {/* NITS HACKS SECTION */}
      <section className="about-section">
        <h2 className="about-heading">ABOUT NITS HACKS</h2>
        <div className="about-box">
          <p className="about-text">
            <span className="highlight">NITS HACKS</span> is a distinguished hackathon
            hosted by NIT Silchar, recognized as one of the top events in northeastern
            India. This dynamic platform brings together tech enthusiasts, encouraging
            collaboration and highlighting their problem-solving expertise. Beyond just a
            competition, NITS HACKS focuses on cultivating essential soft skills for
            newcomers while offering valuable technical learning experiences for aspiring
            students. Participants tackle real-world challenges, guiding them in designing
            and developing innovative technology projects from scratch. The event not only
            celebrates innovation but also helps shape the future generation of tech
            leaders.
          </p>

          {/* 🎨 Brochure Banner (Pokémon style) */}
          <div className="brochure-banner">
            <img src="/images/aboutPoke.png" alt="Pokeball" className="poke-icon" />

            <button className="brochure-btn text-nowrap">⬇ BROCHURE</button>

            <img src="/images/aboutPikachu.png" alt="Pikachu" className="pikachu" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
