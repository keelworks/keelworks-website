import slide1 from "../../../assets/images/Slides/slide1.jpg";
import Slider1 from "./SliderTexts/Slider1";

const Slider = () => {
  return (
    <div className="w-screen h-[calc(100vh-5rem)] mt-[5rem] bg-black flex justify-center">
      <div className="w-full max-w-[3000px] h-full flex flex-col items-center justify-center text-8xl font-bold overflow-hidden relative">
        <div className="absolute top-0 left-0 h-full w-full md:w-1/2 flex items-center justify-start [@media(min-width:1100px)]:justify-start z-10 md:backdrop-blur-lg bg-black bg-opacity-70 md:bg-opacity-50">
          <div className="absolute bottom-[8rem] left-[0] md:relative md:bottom-auto md:left-auto">
            <Slider1 />
          </div>
        </div>

        <img
          className="w-full h-full object-cover relative float-right duration-200 object-center md:object-center [@media(min-width:1100px)]:object-left"
          src={slide1}
          alt="Keelworks Slide 1"
        />
      </div>
    </div>
  );
};

export default Slider;
