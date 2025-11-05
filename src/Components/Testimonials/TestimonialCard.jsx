const TestimonialCard = ({ image, name, trackParticipated, desc }) => {
  return (
    <div className="bg-[rgba(207,0,0,0.3)] w-80 h-72 py-4 mx-8 border-white border">
      <div className="flex items-center h-20 gap-8 px-4 md:px-8">
        <img className="rounded-full h-16 w-16" src={image} alt="avatar" />
        <span className="text-nowrap flex-1 font-pocket-monk flex flex-col justify-center items-start">
          <h2 className="text-[#FFD900] text-xl font-bold">{name}</h2>
          <h6 className="text-white text-base ">{trackParticipated}</h6>
        </span>
      </div>
      <div className="flex w-full h-auto text-justify">
        <img className="w-10 h-10" src="/images/testimonials/quote.svg" alt="" />

        <p className="text-xs text-white py-4">{desc}</p>
        <img
          className="w-10 h-10 rotate-180 self-end "
          src="/images/testimonials/quote.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default TestimonialCard;
