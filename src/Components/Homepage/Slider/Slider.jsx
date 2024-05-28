import { useState } from "react"
import slide1 from "../../../assets/images/slide1.jpeg"
import slide2 from "../../../assets/images/s2.jpeg"
import slide3 from "../../../assets/images/card1.jpeg"
import slide4 from "../../../assets/images/card2.jpeg"
import { RxDotFilled } from 'react-icons/rx';
import { useEffect } from "react"
import Slider2 from "./SliderTexts/Slider2"
import Slider1 from "./SliderTexts/Slider1"
import Slider3 from "./SliderTexts/Slider3"
import Slider4 from "./SliderTexts/Slider4"


const Slider = () => {

  const slides = [slide1, slide2, slide3, slide4]

  const sliderTexts = [<Slider1/>,<Slider2/>,<Slider3/>,<Slider4/>]

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)


  const goToSlide = slideIndex => {
    setCurrentSlideIndex(slideIndex)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex(prevSlideIndex => (prevSlideIndex + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="w-screen h-[1000px] bg-slate-300 flex flex-col items-center justify-center text-8xl font-bold overflow-hidden relative">

      <div className="absolute top-0 left-0 h-full w-1/2 bg-customBlack65 flex items-center justify-center z-10">
     
         {sliderTexts[currentSlideIndex]}
      </div>

      <img className="w-full h-full object-cover duration-100 relative"
        src={slides[currentSlideIndex]} alt="Keelworks Slides"
      />


      <div className="flex justify-center py-1 absolute bottom-2 text-slate-300 z-10 ">
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)}
            className={`text-5xl cursor-pointer hover:text-white ${currentSlideIndex === slideIndex ? 'text-white' : ''} `}>
            <RxDotFilled />
          </div>
        ))}

      </div>
    </div>

  );
};
export default Slider;
