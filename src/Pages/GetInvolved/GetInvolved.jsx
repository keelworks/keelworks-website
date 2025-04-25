// **************** Components **************
import Hero from "./Hero/Hero";
import BecomeDonor from "./BecomeDonor/BecomeDonor";
import Testimonials from "./Testimonials/Testimonials";
import BecomeVolunteer from "./BecomeVolunteer/BecomeVolunteer";
import SignUp from "./SignUp/SignUp";
import VolunteersSay from "./VolunteersSay/VolunteersSay";
import Faq from "./FAQ/Faq";
import Careers from "../Careers/Careers"; // ✅ Import Careers
// ******************************************

const GetInvolved = () => {
  return (
    <div className="w-screen bg-grey200">
      <Hero />
      <BecomeDonor />
      {/* <Testimonials /> */}
      <BecomeVolunteer />

      {/* ✅ Careers section styled to match volunteer section */}
      <section className="bg-grey200 px-6 md:px-16 lg:px-24 py-10">
        <div className="max-w-6xl mx-auto">
          <Careers />
        </div>
      </section>

      <SignUp />
      <VolunteersSay />
      <Faq />
    </div>
  );
};

export default GetInvolved;
