// **************** Components **************
import Hero from "./Hero/Hero";
import KeelMaster from "./KeelMaster/KeelMaster";
import KeelWings from "./KeelWings/KeelWings";
import KeelMate from "./KeelMate/KeelMate";

// ******************************************

const OurSolutions = () => {
  return (
    <div className="w-screen bg-grey300">
      <Hero />
      <KeelMaster />
      <KeelWings />
      <KeelMate />
    </div>
  );
};
export default OurSolutions;
