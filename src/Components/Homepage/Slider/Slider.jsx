import { useState } from "react";
import slide1 from "../../../assets/images/Slides/slide1.jpg";
import slide2 from "../../../assets/images/Slides/slide2.jpg";
import slide3 from "../../../assets/images/card1.jpeg";
import slide4 from "../../../assets/images/Slides/slide4.jpg";
import { RxDotFilled } from "react-icons/rx";
import { useEffect } from "react";
import Slider2 from "./SliderTexts/Slider2";
import Slider1 from "./SliderTexts/Slider1";
import Slider3 from "./SliderTexts/Slider3";
import Slider4 from "./SliderTexts/Slider4";

const Slider = () => {
  const slides = [slide1, slide2, slide3, slide4];

  const sliderTexts = [<Slider1 />, <Slider2 />, <Slider3 />, <Slider4 />];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentSlideIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex(
        (prevSlideIndex) => (prevSlideIndex + 1) % slides.length
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-screen h-[calc(100vh-5rem)] mt-[5rem] bg-black flex justify-center">
      <div className="w-full max-w-[3000px] h-full flex flex-col items-center justify-center text-8xl font-bold overflow-hidden relative">
        <div className="absolute top-0 left-0 h-full w-full backdrop-blur-[2px] md:w-1/2 flex items-center justify-center z-10 md:backdrop-blur-lg bg-black bg-opacity-50">
          {sliderTexts[currentSlideIndex]}
        </div>

        <img
          className={`w-full h-full object-cover relative float-right duration-200 ${
            currentSlideIndex === 0
              ? "object-center md:object-center [@media(min-width:1100px)]:object-left"
              : ""
          } ${currentSlideIndex === 1 ? "object-right md:object-right" : ""}${
            currentSlideIndex === 3 ? "object-right md:object-center" : ""
          }`}
          src={slides[currentSlideIndex]}
          alt="Keelworks Slides"
        />

        <div className="flex justify-center py-1 absolute bottom-2 text-grey500 z-10 ">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-5xl cursor-pointer hover:text-white ${
                currentSlideIndex === slideIndex ? "text-white" : ""
              } `}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Slider;
