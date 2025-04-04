// **************** Components **************
import Hero from "./Hero/Hero";
import BecomeDonor from "./BecomeDonor/BecomeDonor";
import Testimonials from "./Testimonials/Testimonials";
import BecomeVolunteer from "./BecomeVolunteer/BecomeVolunteer";
import SignUp from "./SignUp/SignUp";
import VolunteersSay from "./VolunteersSay/VolunteersSay";
import Faq from "./FAQ/Faq";
// ******************************************

const GetInvolved = () => {
  return (
    <div className="w-screen bg-grey200">
      <Hero />
      <BecomeDonor />
      {/* <Testimonials /> */}
      <BecomeVolunteer />
      <SignUp />
      <VolunteersSay />
      <Faq />
    </div>
  );
};
export default GetInvolved;
