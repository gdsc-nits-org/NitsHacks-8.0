import React from "react";
import "./App.css"; // Import the CSS file with raw margin/padding
import Card from "./Card.jsx";
import AmulLogo from "../../../public/images/amul.png";
import sponsorsImg from "../../../public/images/SPONSORS.svg";
import button from "../../../public/images/button.svg";

const sponsorData = [
  { logo: AmulLogo, name: "AMUL" },
  { logo: AmulLogo, name: "AMUL" },
  { logo: AmulLogo, name: "AMUL" },
  { logo: AmulLogo, name: "AMUL" },
  { logo: AmulLogo, name: "AMUL" },
  { logo: AmulLogo, name: "AMUL" },
  { logo: AmulLogo, name: "AMUL" },
  { logo: AmulLogo, name: "AMUL" },
];

const Sponsor=()=> {
  return (
    <div className="appRoot font-sans">
      <div className="appContainer">
        <button className="buttonWrapper">
          <img src={button} className="buttonImg cursor-pointer" alt="Button" />
        </button>

        <div className="sponsorHeader flex items-center justify-center mt-10">
          <img
            src={sponsorsImg}
            className="sponsorHeaderImg w-full max-w-md"
            alt="Sponsors"
          />
        </div>

        <div className="sponsorGrid grid grid-cols-2 gap-y-27 md:grid-cols-3 lg:grid-cols-4 gap-x-4 lg:gap-y-14 md:gap-y-23 mt-16">
          {sponsorData.map((sponsor, index) => (
            <div key={index} className="sponsorCard">
              <Card logoImage={sponsor.logo} sponsorName={sponsor.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
