import { Linkedin, Github, Facebook } from "lucide-react";

export default function HackCard({
  name = "Ash Ketchum",
  domain = "UI/UX",
  image = "https://tecnoesis.co.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdgnlmdkyq%2Fimage%2Fupload%2Fv1761037096%2FScreenshot_2025-10-19_230423_gspyiq.webp&w=640&q=75",
  facebook = "",
  github = "",
  codeforces = "",
  linkedin = "",
}) {
  return (
    <div className="relative group  bg-[#FFE165] rounded-2xl border-8 border-[#FFE165] shadow-lg max-h-fit overflow-hidden">
      <div className="bg-linear-to-t from-[#D3E1C3] to-[#CDC8C4]  rounded-xl px-2 py-4">
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
        <div className="rounded-md h-80 max-h-80 flex flex-col overflow-hidden border max-w-52 border-gray-300">
          <img
            // src="/images/teams/member.png"
            src={image}
            alt="photo"
            className="w-auto flex-1 object-cover"
          />
          <div className="flex absolute bottom-0 flex-col translate-y-[20%] group-hover:translate-y-[-16%] items-center bg-[#d3e1c3] gap-2 transition-transform duration-300">
            <img src="/images/teams/border.svg" alt="" />
            <h2>{name}</h2>
            <h6>{domain}</h6>
            <span className=" gap-2 flex">
              <a href={linkedin} className="hover:text-gray-900 text-gray-700 mr-2">
                <img src="/images/teams/linkedin.svg" className="w-4 h-4" alt="" />
              </a>
              <a href={github} className="hover:text-gray-900 text-gray-700 mr-2">
                <img src="/images/teams/github.svg" className="w-4 h-4" alt="" />
              </a>
              <a href={facebook} className="hover:text-gray-900 text-gray-700">
                <img src="/images/teams/facebook.svg" className="w-4 h-4" alt="" />
              </a>
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
}
