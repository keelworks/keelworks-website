// **************** Components **************
import Navbar from "../Navbar/Navbar";
import Slider from "./Slider/Slider";
import Cards from "./Cards/Cards";
import Banner from "./Banner/Banner";
import Partners from "./Partners/Partners";
import Footer from "../Footer/Footer";
import Demo from "./Cards/Demo";
// ******************************************

const Home = () => {
  return (
    <div className="w-screen h-screen bg-slate-500">
      <Navbar />
      <Slider />
      <Cards />
      {/* <Demo/> */}
      <Banner />
      <Partners />
      <Footer />
    </div>
  );
};
export default Home;
