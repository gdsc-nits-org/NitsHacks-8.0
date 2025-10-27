import React from "react";
import "./Card.css"; // import the raw CSS file

import firstPokemon from "../../../public/images/pokeballs.svg";
import pokeball1 from "../../../public/images/pokeball1.svg";
import pokeball2 from "../../../public/images/pokeball2.svg";
import pokeball3 from "../../../public/images/pokeball3.svg";

const Card = ({ logoImage, sponsorName }) => {
  return (
    <div className="cardMain bg-blue-900 rounded-xl shadow-lg w-full max-w-56">
      <div className="relative bg-red-600 rounded-lg flex flex-col gap-0.5 aspect-7/10 innerCard">
        {/* Top white header */}
        <div className="bg-white rounded-t-md flex items-center space-x-1 topBar">
          <div className="bg-white rounded-full pokeballWrap">
            <img src={firstPokemon} className="w-4 h-4 object-contain" />
          </div>
          <div className="bg-white rounded-full pokeballWrap">
            <img src={pokeball1} className="w-4 h-4 object-contain" />
          </div>
          <div className="bg-white rounded-full pokeballWrap">
            <img src={pokeball2} className="w-4 h-4 object-contain" />
          </div>
          <div className="bg-white rounded-full pokeballWrap">
            <img src={pokeball3} className="w-4 h-4 object-contain" />
          </div>
        </div>

        {/* Middle logo box */}
        <div className="bg-white rounded-md grow flex items-center justify-center mx-2.5 border-2 border-black logoBox">
          <img src={logoImage} className="object-contain h-16 sm:h-30" />
        </div>

        {/* Yellow sponsor box */}
        <div className="bg-yellow-400 rounded-md text-center h-22 sm:h-20 mx-2.5 border-2 border-black sponsorBox">
          <p className="font-pocket-monk text-black text-2xl sm:text-3xl sponsorName">
            {sponsorName}
          </p>
          <p className="text-[0.6rem] sm:text-xs text-black font-courier font-space">
            Title Sponsor
          </p>
        </div>

        {/* Bottom Pokémon icon */}
        <img
          src={firstPokemon}
          className="absolute bottom-18 sm:bottom-[59px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10"
        />
      </div>
    </div>
  );
};

export default Card;
