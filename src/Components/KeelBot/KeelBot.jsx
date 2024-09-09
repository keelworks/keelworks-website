import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import logoBW from "../../assets/images/KeelWorks-Logo.png";
import { useState } from "react";

const KeelBot = () => {
  const [chatOpen, setChatOpen] = useState(false);
  return (
    <div className={`fixed z-50 bottom-[6rem] right-[2rem]`}>
      <div
        className={`bg-primary500 hover:bg-primary300 transition-all duration-100 ease-linear text-white font-[800] cursor-pointer ${
          chatOpen
            ? "w-[350px] h-[60px] fixed z-10 bottom-[23rem] right-[2rem] px-5 rounded-t-[2rem] bg-primary500 hover:bg-primary300 transition duration-100 ease-linear  text-white font-[800] flex justify-between items-center gap-2"
            : "w-[200px] h-[60px] fixed z-10 bottom-[6rem] right-[2rem] rounded-full bg-primary500 hover:bg-primary300 transition duration-100 ease-linear  text-white font-[800] flex justify-center items-center gap-2"
        }`}
        onClick={() => {
          setChatOpen(!chatOpen);
        }}
      >
        <div className="flex justify-center items-center gap-2">
          <img src={logoBW} alt="KeelWorks logo" className="h-10" />
          <p className="text-[1rem]">KeelBot</p>
        </div>
        {chatOpen ? (
          <IoIosArrowUp className="text-[1.5rem]" />
        ) : (
          <IoIosArrowDown className="text-[1.5rem]" />
        )}
      </div>
      <div className="relative">
        <div
          className={`transition-all duration-200 ease-in-out rounded-b-[30px] ${
            chatOpen ? "h-[300px] w-[350px] bg-[#FEFEFE]" : "h-0 w-[350px]"
          }`}
        ></div>
        <div className="absolute w-full bottom-0 flex justify-between gap-2 p-4">
          <input
            className={`px-4 py-[0.4rem] w-full bg-gray-200 focus:outline-grey400 onBlur:outline-grey400 text-[0.9rem] rounded-lg transition-all duration-300 ease-in-out${
              chatOpen ? "w-full" : "w-0 hidden"
            }`}
            type="text"
            placeholder="Type message"
          />
          <button
            className={`bg-primary500 hover:bg-primary300 transition-all duration-300 ease-in-out px-4 py-[0.4rem] rounded-full text-[0.9rem] font-bold ${
              chatOpen ? "" : "hidden"
            }`}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
export default KeelBot;
