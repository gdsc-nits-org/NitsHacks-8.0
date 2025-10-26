import Card from "./components/Card.jsx";
import AmulLogo from "./assets/amul.png";
import sponsorsImg from "./assets/SPONSORS.svg";
import button from "./assets/button.svg"
const sponsorData = [
  {
    logo: AmulLogo,
    name: "AMUL",
  },
  {
    logo: AmulLogo,
    name: "AMUL",
  },
  {
    logo: AmulLogo,
    name: "AMUL",
  },
  {
    logo: AmulLogo,
    name: "AMUL",
  },
  {
    logo: AmulLogo,
    name: "AMUL",
  },
  {
    logo: AmulLogo,
    name: "AMUL",
  },
  {
    logo: AmulLogo,
    name: "AMUL",
  },
  {
    logo: AmulLogo,
    name: "AMUL",
  },
];
function App() {
  return (
    <div className="min-h-screen bg-[url(./assets/background.svg)] p-8 font-sans">
      <div className="container mx-auto">
        <button>
          <img src={button} className="w-30 md:w-48 md:ml-9 cursor-pointer" />
        </button>
        <div className="flex items-center justify-center mt-10">
          <img src={sponsorsImg} className="w-full max-w-md" alt="Sponsors" />
        </div>
        <div className="grid grid-cols-2 gap-y-0 md:grid-cols-3 lg:grid-cols-4 gap-x-4 lg:gap-y-14 md:gap-y-23 mt-16">
          {sponsorData.map((sponsor, index) => (
            <div key={index} className={index % 2 === 1 ? "mt-30 md:mt-8" : ""}>
              <Card logoImage={sponsor.logo} sponsorName={sponsor.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
