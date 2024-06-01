import adobe_logo from "../../../assets/images/Adobe-Logo-BW.png";
import microsoft_logo from "../../../assets/images/Microsoft-Logo-BW.png";
import teamgantt_logo from "../../../assets/images/Teamgantt-Logo-BW.png";

const Partners = () => {
  return (
    <div className="w-full bg-grey200 flex flex-col items-center justify-center pt-10 pb-10">
      <h2 className="text-fontPrimary font-bold text-[2rem] md:text-[3.56rem] leading-[85px]">
        Our partners
      </h2>
      <div className="w-[calc(100%-8rem)] flex items-center justify-between mt-10 lg:w-[calc(100%-16rem)]">
        <img
          src={adobe_logo}
          alt=""
          className="w-[6rem] md:w-[10rem] lg:w-[16rem]"
        />
        <img
          src={microsoft_logo}
          alt=""
          className="w-[6rem] md:w-[10rem] lg:w-[16rem]"
        />
        <img
          src={teamgantt_logo}
          alt=""
          className="w-[6rem] md:w-[10rem] lg:w-[16rem]"
        />
      </div>
    </div>
  );
};
export default Partners;
