import Marquee from "react-fast-marquee";
import testinomialsData from "../../assets/testimonials.json";
import TestimonialCard from "./TestimonialCard";
const Testimonials = () => {
  return (
    <section className="w-screen bg-[url('/images/testimonials/testimonialsBG.png')] bg-cover bg-center py-20">
      <h1 className="text-center text-[#FFCB02] font-pocket-monk text-4xl lg:text-6xl mb-4 md:mb-12">
        Testimonails
      </h1>
      <Marquee speed={100} direction="left" gradientColor="transparent">
        {testinomialsData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            image={testimonial.image}
            name={testimonial.name}
            trackParticipated={testimonial.TrackParticipated}
            desc={testimonial.desc}
          />
        ))}
      </Marquee>
    </section>
  );
};
export default Testimonials;
