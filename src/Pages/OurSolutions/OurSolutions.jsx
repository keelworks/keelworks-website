import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// **************** Components **************
import Hero from "./Hero/Hero";
import KeelMaster from "./KeelMaster/KeelMaster";
import KeelWings from "./KeelWings/KeelWings";
import KeelMate from "./KeelMate/KeelMate";
import BackToHome from "../../Components/BackToHome/BackToHome";

// ******************************************

const OurSolutions = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const my_element = document.getElementById(hash.substring(1));
      if (my_element) {
        my_element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [hash]);
  return (
    <div className="w-screen bg-grey300">
      {/* <BackToHome /> */}
      <Hero />
      <KeelMaster />
      <KeelWings />
      <KeelMate />
    </div>
  );
};
export default OurSolutions;
