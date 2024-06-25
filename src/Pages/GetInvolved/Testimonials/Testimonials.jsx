import donor1 from "../../../assets/images/Get-Involved/Donor1.jpg";
import donor2 from "../../../assets/images/Get-Involved/Donor2.jpg";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <div className="w-screen h-[calc(100vh-5rem)] mt-[5rem] bg-white flex justify-center">
      <div className="w-full max-w-[3000px] h-full flex flex-col items-center justify-center text-8xl font-bold overflow-hidden relative">
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <img
                src={donor1}
                alt="girl image"
                className="w-2/3 border-yellow-600"
              />
              <div></div>
            </div>
            <p className="w-1/2 text-[1.75rem] leading-10 font-normal mt-10">
              “Donating and seeing the impact I made in real time is not rare
              with Keelworks”
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <img
                src={donor2}
                alt="girl image"
                className="w-2/3 border-yellow-600"
              />
              <div></div>
            </div>
            <p className="w-1/2 text-[1.75rem] leading-10 font-normal mt-10">
              “Getting email updates makes me feel reassured that my donations
              are going to a good cause”
            </p>
          </div>
        </div>
        <div>
          <Link
            to="/getinvolved"
            className="w-[300px] h-[47px] bg-primary500 rounded-full flex justify-center items-center hover:bg-primary300 transition duration-[100ms] ease-linear text-[#101828] font-semibold text-[1.31rem] mt-10"
          >
            Become a Donor Now
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
