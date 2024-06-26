import donor1 from "../../../assets/images/Get-Involved/Donor1.jpg";
import donor2 from "../../../assets/images/Get-Involved/Donor2.jpg";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <div className="w-screen pt-[5rem] bg-white flex justify-center">
      <div className="w-full max-w-[3000px] h-full flex flex-col items-center justify-center text-8xl font-bold overflow-hidden relative">
        <div className="grid gird-rows-2 md:grid-rows-1 md:grid-cols-2 mx-[4rem] md:mx-[4rem] lg:mx-[8rem]">
          <div className="flex flex-col justify-start items-center border-[2px]">
            <div className="flex flex-col justify-center items-center">
              <img src={donor1} alt="girl image" className="w-[347px]" />
              <div></div>
            </div>
            <p className="w-[70%] text-[1.5rem] leading-10 font-normal mt-5 mb-10 border-[2px]">
              “Donating and seeing the impact I made in real time is not rare
              with Keelworks”
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <img src={donor2} alt="girl image" className="w-[347px]" />
              <div></div>
            </div>
            <p className="w-[70%] text-[1.5rem] leading-10 font-normal mt-5 mb-10 border-[2px]">
              “Getting email updates makes me feel reassured that my donations
              are going to a good cause”
            </p>
          </div>
        </div>
        <div>
          <Link
            to="/getinvolved"
            className="w-[225px] h-[47px] border-primary500 border-solid border-[4px] rounded-full flex justify-center items-center hover:bg-primary300 transition duration-[100ms] ease-linear text-primary500 hover:text-fontSecondary font-semibold text-[1.31rem] mb-10"
          >
            Become a Donor
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
