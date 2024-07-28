import donor1 from "../../../assets/images/Get-Involved/Donor1.jpg";
import donor2 from "../../../assets/images/Get-Involved/Donor2.jpg";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <div className="w-screen pt-[5rem] md:pt-[10rem] lg:pt-[5rem] bg-white flex justify-center">
      <div className="w-full max-w-[3000px] h-full flex flex-col items-center justify-center text-8xl font-bold overflow-hidden relative">
        <div className="max-w-[1600px] grid gird-rows-2 md:grid-rows-1 md:grid-cols-2 mx-[1rem] md:mx-[4rem] lg:mx-[8rem] md:items-start">
          <div className="flex flex-col justify-center items-start md:items-center">
            <div className="relative flex flex-col justify-center items-center">
              <img
                src={donor1}
                alt="girl image"
                className="w-[100vw] md:w-[250px] lg:w-[347px] mt-[1.5rem] z-10"
              />
              <div className="absolute w-full h-full bg-primary500 top-[-1.5rem] left-[-1.5rem] z-0"></div>
            </div>
            <p className="w-[100%] md:w-[70%] text-[1.5rem] leading-10 font-normal mt-5 mb-[8rem] md:mb-10">
              “Donating and seeing the impact I made in real time is not rare
              with Keelworks”
            </p>
          </div>
          <div className="flex flex-col justify-center items-start md:items-center">
            <div className="relative flex flex-col justify-center items-center">
              <img
                src={donor2}
                alt="Man's image"
                className="w-[100vw] md:w-[250px] lg:w-[347px] md:mt-[1.5rem] z-10"
              />
              <div className="absolute w-full h-full bg-primary500 top-[-1.5rem] right-[-1.5rem] z-0"></div>
            </div>
            <p className="w-[100%] md:w-[70%] text-[1.5rem] leading-10 font-normal mt-5 mb-[4rem] md:mb-10">
              “Getting email updates makes me feel reassured that my donations
              are going to a good cause”
            </p>
          </div>
        </div>
        <div
          className="w-[297px] h-[76px] border-primary500 border-solid border-[4px] rounded-full flex justify-center items-center hover:bg-primary300 transition duration-[300ms] ease-linear text-primary500 hover:text-fontSecondary hover:cursor-pointer font-semibold text-[1.31rem] mb-[5rem] "
          onClick={() => {
            window.location.href =
              "https://www.every.org/keelworks-foundation?utm_campaign=donate-link&method=card%2Cbank%2Cpaypal%2Cpay%2Cvenmo%2Cgift%2Cstocks%2Cdaf#/donate";
          }}
        >
          Become a Donor
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
