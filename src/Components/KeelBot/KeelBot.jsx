import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import logoBW from "../../assets/images/KeelWorks-Logo.png";
import { useState } from "react";

const KeelBot = () => {
  const [chatOpen, setChatOpen] = useState(false);
  return (
    <div className="fixed z-50 bottom-[6rem] right-[2rem]">
      <div
        className={`bg-primary500 hover:bg-primary300 transition-all duration-100 ease-linear text-white font-[800] cursor-pointer ${
          chatOpen
            ? "w-[350px] h-[60px] fixed z-10 bottom-[23rem] right-[2rem] px-5 rounded-t-[2rem] bg-primary500 hover:bg-primary300 transition duration-[300ms] ease-linear  text-white font-[800] flex justify-start items-center gap-2 cursor-pointer"
            : "w-[200px] h-[60px] fixed z-10 bottom-[6rem] right-[2rem] rounded-full bg-primary500 hover:bg-primary300 transition duration-[300ms] ease-linear  text-white font-[800] flex justify-center items-center gap-2 cursor-pointer"
        }`}
        onClick={() => {
          setChatOpen(!chatOpen);
        }}
      >
        <img src={logoBW} alt="KeelWorks logo" className="h-10" />
        <p className="text-[0.9rem]">KeelBot</p>
        {chatOpen ? (
          <IoIosArrowUp className="text-[1.5rem]" />
        ) : (
          <IoIosArrowDown className="text-[1.5rem]" />
        )}
      </div>
      <div
        className={`transition-all duration-200 ease-in-out ${
          chatOpen ? "h-[300px] w-[350px] bg-[#FEFEFE]" : "h-0 w-[350px]"
        }`}
      ></div>
    </div>
  );
};
export default KeelBot;
