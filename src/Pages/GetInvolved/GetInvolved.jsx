// **************** Components **************
import Hero from "./Hero/Hero";
import BecomeDonor from "./BecomeDonor/BecomeDonor";
import Testimonials from "./Testimonials/Testimonials";
import BecomeVolunteer from "./BecomeVolunteer/BecomeVolunteer";
import VolunteersSay from "./VolunteersSay/VolunteersSay";
import Faq from "./FAQ/Faq";
import Careers from "../Careers/Careers"; 


const GetInvolved = () => {
  return (
    <div className="w-screen bg-grey200">
      <Hero />
      <BecomeDonor />
      
      <BecomeVolunteer />

      
      <section className="bg-grey200 px-6 md:px-16 lg:px-24 py-10">
        <div className="max-w-6xl mx-auto">
          <Careers />
        </div>
      </section>

      <VolunteersSay />
      <Faq />
    </div>
  );
};

export default GetInvolved;
