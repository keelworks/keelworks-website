// **************** Components **************
import Slider from "./Slider/Slider";
import Cards from "./Cards/Cards";
import Banner from "./Banner/Banner";
import Partners from "./Partners/Partners";
// ******************************************

const Home = () => {
  return (
    <div className="w-screen bg-slate-500">
      <Slider />
      <Cards />
      <Banner />
      <Partners />
    </div>
  );
};
export default Home;
