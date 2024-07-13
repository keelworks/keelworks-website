import { useNavigate } from "react-router-dom";
import back from "../../assets/images/Our-Solutions/back-arrow.png";

const BackToHome = () => {
  const navigate = useNavigate();
  return (
    <button
      className="fixed z-50 bottom-2/4 md:bottom-1/4 right-[1rem] md:right-[4rem] rounded-full bg-primary500 hover:bg-primary300 transition duration-[300ms] ease-linear rotate-0 md:rotate-[0deg] [writing-mode:vertical-lr] md:[writing-mode:horizontal-tb] p-2 md:p-4 text-[#0B0A0A] font-semibold text-[14px] flex items-end justify-end mb-10 border-2 border-white"
      onClick={() => navigate("/home")}
      // style={{ writingMode: "vertical-rl" }}
    >
      <img
        src={back}
        alt=""
        className="md:mx-2 w-[16px] h-[16px] inline-block align-middle"
      />
      <span>Back to HomePage</span>
    </button>
  );
};
export default BackToHome;
