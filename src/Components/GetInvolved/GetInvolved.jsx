// **************** Components **************
import Hero from "./Hero/Hero";
import BecomeDonor from "./BecomeDonor/BecomeDonor";
import Testimonials from "./Testimonials/Testimonials";
import BecomeVolunteer from "./BecomeVolunteer/BecomeVolunteer";

// ******************************************

const GetInvolved = () => {
  return (
    <div className="w-screen bg-slate-500">
      <Hero />
      <BecomeDonor />
      <Testimonials />
      <BecomeVolunteer />
    </div>
  );
};
export default GetInvolved;
