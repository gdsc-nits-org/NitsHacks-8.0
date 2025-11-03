import TeamCard from "../../Components/TeamCard/TeamCard";
import "./Team.css";

const Team = () => {
    const imgSrc =
        "https://tecnoesis.co.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdgnlmdkyq%2Fimage%2Fupload%2Fv1761037096%2FScreenshot_2025-10-19_230423_gspyiq.webp&w=640&q=75";

    const members = Array(8).fill({
        github: "https://github.com",
        facebook: "https://facebook.com",
        codeforces: "https://codeforces.com",
        linkedin: "https://linkedin.com",
        img: imgSrc,
    });

    return (
        <>
            <div className="relative flex flex-col justify-start items-center max-w-screen min-h-screen z-1 bg-[#A7D2F6] ">
                <img
                    src="/images/teams/upperBg.svg"
                    alt="Pokédex frame"
                    className="absolute inset-0 max-w-screen h-full object-contain pointer-events-none outer"
                />

                <div style={{
                    backgroundImage: `url("/images/teams/middleBg.svg")`
                }} className="z-10 border-top bg-contain min-w-screen">
                    <div className="team-container z-5 overflow-hidden pointer-events-auto">
                        <div className="team-header">
                            <h1 className="text-3xl font-pokemon ">Teams</h1>
                            <h2 className="team-subtitle">Core Members</h2>
                        </div>

                        <div className="team-grid">
                            {members.slice(0, 8).map((member, index) => (
                                <TeamCard
                                    key={index}
                                    github={member.github}
                                    facebook={member.facebook}
                                    codeforces={member.codeforces}
                                    linkedin={member.linkedin}
                                    img={member.img}
                                />
                            ))}
                        </div>

                        <div className="team-header">
                            <h2 className="team-subtitle">Junior Members</h2>
                        </div>

                        <div className="team-grid">
                            {members.slice(0, 8).map((member, index) => (
                                <TeamCard
                                    key={index + 4}
                                    github={member.github}
                                    facebook={member.facebook}
                                    codeforces={member.codeforces}
                                    linkedin={member.linkedin}
                                    img={member.img}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <img
                    src="/images/teams/lowerBg.svg"
                    alt="Pokédex frame"
                    className="inset-0 min-w-screen h-full object-cover z-10 outer"
                />
            </div>
        </>
    );
};

export default Team;
