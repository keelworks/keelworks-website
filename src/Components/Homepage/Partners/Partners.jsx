import adobe_logo from "../../../assets/images/Logos/Adobe-Logo.png";
import microsoft_logo from "../../../assets/images/Logos/Microsoft-Logo.png";
import teamgantt_logo from "../../../assets/images/Logos/Teamgantt-Logo.png";
import atlassian_logo from "../../../assets/images/Logos/Atlassian-Logo.svg";
import cogniaha_logo from "../../../assets/images/Logos/Cogniaha-Logo.png";
import eduongo_logo from "../../../assets/images/Logos/Eduongo-Logo.png";
import google_logo from "../../../assets/images/Logos/Google-Logo.svg";
import qase_logo from "../../../assets/images/Logos/Qase-Logo.png";

const Partners = () => {
  return (
    <div className="w-full bg-grey200 flex flex-col items-center justify-center pt-10">
      <h2 className="text-fontPrimary font-bold text-[2rem] md:text-[3.56rem] lg:leading-[85px]">
        Our partners
      </h2>
      <div className="w-[calc(100%-8rem)] grid grid-cols-3 gap-6 md:grid md:grid-cols-4 lg:flex items-center lg:justify-between mt-10 mb-10 lg:w-[calc(100%-16rem)]">
        <img
          src={adobe_logo}
          alt=""
          className="w-[4rem] md:w-[6rem] lg:w-[6rem]"
        />
        <img
          src={microsoft_logo}
          alt=""
          className="w-[4rem] md:w-[6rem] lg:w-[7rem]"
        />
        <img
          src={teamgantt_logo}
          alt=""
          className="w-[5rem] md:w-[8rem] lg:w-[8rem]"
        />
        <img
          src={atlassian_logo}
          alt=""
          className="w-[2rem] md:w-[4rem] lg:w-[4rem] "
        />
        <img
          src={cogniaha_logo}
          alt=""
          className="w-[4rem] md:w-[6rem] lg:w-[6rem] pb-4"
        />
        <img
          src={eduongo_logo}
          alt=""
          className="w-[4rem] md:w-[6rem] md:pt-1 lg:w-[6rem] pt-3"
        />
        <img
          src={google_logo}
          alt=""
          className="w-[4rem] md:w-[6rem] lg:w-[6rem]"
        />
        <img
          src={qase_logo}
          alt=""
          className="w-[4rem] md:w-[5rem] lg:w-[5rem]"
        />
      </div>
    </div>
  );
};
export default Partners;
