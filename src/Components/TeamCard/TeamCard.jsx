const HackCard = ({
  name = "Ash Ketchum",
  designation = "Member",
  image,
  facebook,
  github,
  codeforces,
  linkedin,
}) => {
  console.log(image);
  return (
    <div className="relative group  bg-[#FFE165] rounded-2xl border-8 border-[#FFE165] shadow-lg max-h-fit overflow-hidden max-w-72">
      <div className="bg-linear-to-t from-[#D3E1C3] to-[#CDC8C4]  rounded-xl px-2 py-4 w-full">
        <img
          className="absolute z-50 right-0 top-0"
          src="/images/teams/hacksLogo.svg"
          alt=""
        />
        <img
          className="absolute z-50 left-0 top-0"
          src="/images/teams/Stage.svg"
          alt=""
        />
        <div className="rounded-md h-80 max-h-80 flex flex-col overflow-hidden border border-gray-300 w-72">
          <img src={image} alt="avatar" className="w-full flex-1 object-cover" />
          <div className="flex absolute w-full bottom-0 flex-col translate-y-[20%] group-hover:translate-y-[-16%] items-center bg-[#d3e1c3] gap-2 transition-transform duration-300">
            <img className="w-full" src="/images/teams/border.svg" alt="border" />
            <h2 className="font-gill-sans font-bold">{name}</h2>
            <h6 className="font-gill-sans">{designation}</h6>
            <span className="gap-2 flex">
              {linkedin && (
                <a href={linkedin} className="hover:text-gray-900 text-gray-700 mr-2">
                  <img src="/images/teams/linkedin.svg" className="w-4 h-4" alt="" />{" "}
                </a>
              )}
              {github && (
                <a href={github} className="hover:text-gray-900 text-gray-700 mr-2">
                  <img src="/images/teams/github.svg" className="w-4 h-4" alt="" />{" "}
                </a>
              )}
              {codeforces && (
                <a href={codeforces} className="hover:text-gray-900 text-gray-700 pr-1">
                  <img
                    src="/images/teams/codeforces.svg"
                    className="w-4 h-4"
                    alt=""
                  />{" "}
                </a>
              )}
              {facebook && (
                <a href={facebook} className="hover:text-gray-900 text-gray-700">
                  <img src="/images/teams/facebook.svg" className="w-4 h-4" alt="" />{" "}
                </a>
              )}
            </span>
          </div>
        </div>

        {/* Info Section */}
        {/* <div className="bg-[#e8f1e6] mt-2 rounded-md p-3 border-t-2 border-gray-300">
              </a>
              <a href={linkedin} className="hover:text-gray-900 text-gray-700 mr-2">
                <img src="/images/teams/linkedin.svg" className="w-4 h-4" alt="" />
              </a>
            </span>
          </div>
        </div>

        {/* Info Section */}
        {/* <div className="bg-[#e8f1e6] mt-2 rounded-md p-3 border-t-2 border-gray-300">
          <h2 className="text-center text-gray-900 font-bold text-sm">{name}</h2>
          <p className="text-center text-gray-700 text-xs font-semibold">{domain}</p>

          <div className="flex justify-center gap-4 mt-2">
            <a href={linkedin} className="hover:text-gray-900 text-gray-700">
              <Linkedin size={14} />
            </a>
            <a href={github} className="hover:text-gray-900 text-gray-700">
              <Github size={14} />
            </a>
            <a href={facebook} className="hover:text-gray-900 text-gray-700">
              <Facebook size={14} />
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HackCard;
