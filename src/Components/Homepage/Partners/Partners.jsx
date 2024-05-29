import adobe_logo from "../../../assets/images/Adobe-Logo-BW.png";
import microsoft_logo from "../../../assets/images/Microsoft-Logo-BW.png";
import teamgantt_logo from "../../../assets/images/Teamgantt-Logo-BW.png";

const Partners = () => {
  return (
    <div className="bg-grey200 flex flex-col items-center justify-center pt-10 pb-10">
      <h2 className="text-fontPrimary font-bold text-[3.56rem] leading-[85px]">
        Our partners
      </h2>
      <div className="flex items-center justify-center gap-[15rem] mt-10">
        <img src={adobe_logo} alt="" className="w-[16rem]" />
        <img src={microsoft_logo} alt="" className="w-[16rem]" />
        <img src={teamgantt_logo} alt="" className="w-[16rem]" />
      </div>
    </div>
  );
};
export default Partners;
