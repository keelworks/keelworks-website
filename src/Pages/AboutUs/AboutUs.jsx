// **************** Components **************
import Hero from "./Hero/Hero";
import WhyKeelWorks from "./WhyKeelWorks/WhyKeelWorks";
import Founder from "./Founder/Founder";
import Members from "./Members/Members";

// ******************************************

const AboutUs = () => {
  return (
    <div className="w-screen bg-grey200">
      <Hero />
      <WhyKeelWorks />
      <Founder />
      <Members />
    </div>
  );
};
export default AboutUs;
