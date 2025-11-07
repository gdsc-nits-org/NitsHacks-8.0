import TeamCard from "../../Components/TeamCard/TeamCard";
import "./Team.css";
import teamData from "../../assets/team.json";

const Team = () => {
  const coreTeam = teamData.filter((member) => member.role === "Coreteam");
  const convener = teamData.filter((member) => member.role === "Convener");
  const coordinator = teamData.filter((member) => member.role === "Coordinator");
  const techLead = teamData.filter((member) => member.role === "Techlead");
  const tech = teamData.filter((member) => member.role === "Tech");
  const organisers = teamData.filter((member) => member.role === "Organisers");
  // const volunteers = teamData.filter((member) => member.role === "volunteer");
  // const faculty = teamData.filter((member) => member.role === "Faculty");
  const setter = teamData.filter((member) => member.role === "Prob");

  // return (
  //   <section className="relative flex flex-col max-w-screen pt-17">
  //     <img
  //       src="/images/teams/upperBg.svg"
  //       alt="Pokédex frame"
  //       className="inset-0 min-w-screen h-full object-contain pointer-events-none"
  //     />
  //     <div
  //       style={{
  //         backgroundImage: `url("/images/teams/middleBg.svg")`,
  //       }}
  //       className="flex-1 inset-0 max-w-screen w-screen bg-contain bg-repeat"
  //     >
  //       <div className="team-container z-5 overflow-hidden pointer-events-auto">
  //         <div className="team-header">
  //           <h1 className="text-5xl text-stroke tracking-wider md:text-9xl font-pocket-monk text-[#FFCB02]">
  //             Teams
  //           </h1>
  //         </div>

  //         <div className="flex flex-col gap-4 items-center">
  //           <h2 className="font-pocket-monk text-3xl">Core Members</h2>
  //           <div className="team-grid">
  //             {convener.map((member, index) => (
  //               <TeamCard
  //                 key={index}
  //                 name={member.name}
  //                 designation={member.designation}
  //                 github={member.git}
  //                 facebook={member.fb}
  //                 codeforces={member.cf}
  //                 linkedin={member.linkedin}
  //                 image={member.img}
  //               />
  //             ))}
  //           </div>
  //           <div className="team-grid">
  //             {coordinator.map((member, index) => (
  //               <TeamCard
  //                 key={index}
  //                 name={member.name}
  //                 designation={member.designation}
  //                 github={member.git}
  //                 facebook={member.fb}
  //                 codeforces={member.cf}
  //                 linkedin={member.linkedin}
  //                 image={member.img}
  //               />
  //             ))}
  //           </div>
  //           <div className="team-grid">
  //             {coreTeam.map((member, index) => (
  //               <TeamCard
  //                 key={index}
  //                 name={member.name}
  //                 designation={member.designation}
  //                 github={member.git}
  //                 facebook={member.fb}
  //                 codeforces={member.cf}
  //                 linkedin={member.linkedin}
  //                 image={member.img}
  //               />
  //             ))}
  //           </div>
  //         </div>
  //         <div className="flex flex-col gap-4 items-center">
  //           <h2 className="font-pocket-monk text-3xl">Tech Team</h2>
  //           <div className="team-grid">
  //             {techLead.map((member, index) => (
  //               <TeamCard
  //                 key={index}
  //                 name={member.name}
  //                 designation={member.designation}
  //                 github={member.git}
  //                 facebook={member.fb}
  //                 codeforces={member.cf}
  //                 linkedin={member.linkedin}
  //                 image={member.img}
  //               />
  //             ))}
  //           </div>
  //           <div className="team-grid">
  //             {setter.map((member, index) => (
  //               <TeamCard
  //                 key={index}
  //                 name={member.name}
  //                 designation={member.designation}
  //                 github={member.git}
  //                 facebook={member.fb}
  //                 codeforces={member.cf}
  //                 linkedin={member.linkedin}
  //                 image={member.img}
  //               />
  //             ))}
  //           </div>
  //           <div className="team-grid">
  //             {tech.map((member, index) => (
  //               <TeamCard
  //                 key={index}
  //                 name={member.name}
  //                 designation={member.designation}
  //                 github={member.git}
  //                 facebook={member.fb}
  //                 codeforces={member.cf}
  //                 linkedin={member.linkedin}
  //                 image={member.img}
  //               />
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <img
  //       src="/images/teams/lowerBg.svg"
  //       alt="Pokédex frame"
  //       className="inset-0 min-w-screen h-full object-cover z-10 outer"
  //     />
  //   </section>
  // );

  return (
    <div className="relative flex flex-col justify-start items-center max-w-screen min-h-screen z-1 mt-17 md:mt-20 bg-[#A7D2F6] ">
      <img
        src="/images/teams/upperBg.svg"
        alt="Pokédex frame"
        className="absolute inset-0 max-w-screen h-full object-contain pointer-events-none outer"
      />

      <div
        style={{
          backgroundImage: `url("/images/teams/middleBg.svg")`,
        }}
        className="z-10 border-top bg-contain min-w-screen"
      >
        <div className="team-container gap-20 z-5 overflow-hidden pointer-events-auto">
          <div className="team-header">
            <h1 className="text-5xl text-stroke tracking-wider md:text-9xl font-pocket-monk text-[#FFCB02]">
              Teams
            </h1>
          </div>

          <div className="flex flex-col gap-4 items-center">
            <h2 className="font-pocket-monk text-3xl">Core Members</h2>
            <div className="team-grid">
              {convener.map((member) => (
                <TeamCard
                  key={member.id}
                  name={member.name}
                  designation={member.designation}
                  github={member.git}
                  facebook={member.fb}
                  codeforces={member.codeforces}
                  linkedin={member.linkedin}
                  image={member.img}
                />
              ))}
            </div>
            <div className="team-grid">
              {coordinator.map((member) => (
                <TeamCard
                  key={member.id}
                  name={member.name}
                  designation={member.designation}
                  github={member.git}
                  facebook={member.fb}
                  codeforces={member.codeforces}
                  linkedin={member.linkedin}
                  image={member.img}
                />
              ))}
            </div>
            <div className="team-grid">
              {coreTeam.map((member) => (
                <TeamCard
                  key={member.id}
                  name={member.name}
                  designation={member.designation}
                  github={member.git}
                  facebook={member.fb}
                  codeforces={member.codeforces}
                  linkedin={member.linkedin}
                  image={member.img}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h2 className="font-pocket-monk text-3xl">Tech Team</h2>
            <div className="team-grid">
              {techLead.map((member) => (
                <TeamCard
                  key={member.id}
                  name={member.name}
                  designation={member.designation}
                  github={member.git}
                  facebook={member.fb}
                  codeforces={member.codeforces}
                  linkedin={member.linkedin}
                  image={member.img}
                />
              ))}
            </div>
            <div className="team-grid">
              {setter.map((member) => (
                <TeamCard
                  key={member.id}
                  name={member.name}
                  designation={member.designation}
                  github={member.git}
                  facebook={member.fb}
                  codeforces={member.codeforces}
                  linkedin={member.linkedin}
                  image={member.img}
                />
              ))}
            </div>
            <div className="team-grid">
              {tech.map((member) => (
                <TeamCard
                  key={member.id}
                  name={member.name}
                  designation={member.designation}
                  github={member.git}
                  facebook={member.fb}
                  codeforces={member.codeforces}
                  linkedin={member.linkedin}
                  image={member.img}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h2 className="font-pocket-monk text-3xl">Organisers</h2>

            <div className="team-grid">
              {organisers.map((member) => (
                <TeamCard
                  key={member.id}
                  name={member.name}
                  designation={member.designation}
                  github={member.git}
                  facebook={member.fb}
                  codeforces={member.codeforces}
                  linkedin={member.linkedin}
                  image={member.img}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <img
        src="/images/teams/lowerBg.svg"
        alt="Pokédex frame"
        className="inset-0 min-w-screen h-full object-cover z-10 outer"
      />
    </div>
  );
};

export default Team;
