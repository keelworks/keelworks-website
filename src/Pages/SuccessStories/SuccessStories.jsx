import donor1 from "../../assets/images/Get-Involved/Volunteer1.jpg";
import donor2 from "../../assets/images/Get-Involved/Donor2.jpg";
import { Link } from "react-router-dom";

const SuccessStories = () => {
  return (
    <div className="w-screen pt-[5rem] bg-white flex justify-center">
      <div className="w-full max-w-[3000px] h-full flex flex-col items-center justify-center text-8xl font-bold overflow-hidden relative">
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-[2.5rem] leading-[3.5rem] sm:text-[3rem] md:text-[3.5rem] md:leading-[4rem] lg:text-[4.75rem] lg:leading-[5rem] font-bold text-[#2E2E2E] mt-[4rem]">
            Gallery of Video
          </h4>
          <h4 className="text-[2.5rem] leading-[3.5rem] sm:text-[3rem] md:text-[3.5rem] md:leading-[4rem] lg:text-[4.75rem] lg:leading-[5rem] font-bold text-[#2E2E2E] mb-[4rem]">
            Case Studies
          </h4>
        </div>
        <div className="h-screen max-w-[1600px] grid gird-rows-2 md:grid-rows-1 md:grid-cols-2 mx-[4rem] md:mx-[4rem] lg:mx-[8rem]"></div>
      </div>
    </div>
  );
};
export default SuccessStories;
