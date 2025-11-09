import firstPokemon from "../../../public/images/pokeball.svg";
import pokeball1 from "../../../public/images/pokeball1.svg";
import pokeball2 from "../../../public/images/pokeball2.svg";
import pokeball3 from "../../../public/images/pokeball3.svg";
const Card = ({ logoImage, sponsorName }) => {
  return (
    <div className="bg-blue-900 p-2 rounded-xl shadow-lg w-full max-w-56 mx-auto">
      <div className="relative bg-red-600 rounded-lg pb-2.5 flex flex-col gap-0.5 aspect-7/10">
        <div className="bg-white rounded-t-md p-0.5 flex items-center space-x-1">
          <div className="bg-white rounded-full p-0.5">
            <img src={firstPokemon} alt="pokeball" className="w-4 h-4 object-contain" />
          </div>
          <div className="bg-white rounded-full p-0.5">
            <img src={pokeball1} alt="pokeball1" className="w-4 h-4 object-contain" />
          </div>
          <div className="bg-white rounded-full p-0.5">
            <img src={pokeball2} alt="pokeball2" className="w-4 h-4 object-contain" />
          </div>
          <div className="bg-white rounded-full p-0.5">
            <img src={pokeball3} alt="pokeball3" className="w-4 h-4 object-contain" />
          </div>
        </div>

        <div className="bg-white rounded-md grow flex items-center justify-center p-2 mt-1 md:mt-2 sm:p-4 mx-2.5 border-2 border-black">
          <img
            src={logoImage}
            alt={`${sponsorName} logo`}
            className="object-contain h-16 sm:h-30"
          />
        </div>

        <div className="bg-yellow-400 rounded-md p-0.5 text-center h-22 sm:h-20 mx-2.5 border-2 border-black ">
          <p className="font-pocket-monk text-black text-2xl sm:text-3xl pt-2">
            {sponsorName}
          </p>
          <p className="text-[0.6rem] sm:text-xs text-black font-courier font-space">
            Title Sponsor
          </p>
        </div>

        <img
          src={firstPokemon}
          alt="pokeball"
          className="absolute bottom-18 sm:bottom-[59px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10"
        />
      </div>
    </div>
  );
};
export default Card;
