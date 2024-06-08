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
    <div className="w-full bg-grey200 flex flex-col items-center justify-center pt-10 pb-10">
      <h2 className="text-fontPrimary font-bold text-[2rem] md:text-[3.56rem] lg:leading-[85px]">
        Our partners
      </h2>
      <div className="w-[calc(100%-8rem)] grid grid-cols-3 gap-6 md:grid md:grid-cols-4 [@media(min-width:1300px)]:flex items-center [@media(min-width:1200px)]:justify-between mt-[2.5rem] mb-[3rem] [@media(min-width:1200px)]:w-[calc(100%-16rem)]">
        <img
          src={adobe_logo}
          alt=""
          className="w-[4rem] md:w-[6rem] lg:w-[7rem]"
        />
        <img
          src={microsoft_logo}
          alt=""
          className="w-[4rem] sm:justify-self-center md:w-[6rem] md:justify-self-center lg:w-[8rem]"
        />
        <img
          src={teamgantt_logo}
          alt=""
          className="w-[5rem] sm:justify-self-end md:w-[8rem] md:justify-self-center lg:w-[9rem]"
        />
        <img
          src={atlassian_logo}
          alt=""
          className="w-[2rem] md:w-[4rem] md:justify-self-end lg:w-[4rem]"
        />
        <img
          src={cogniaha_logo}
          alt=""
          className="w-[4rem] sm:pb-1 sm:justify-self-center md:justify-self-start md:w-[6rem] md:pb-4 lg:w-[7rem]"
        />
        <img
          src={eduongo_logo}
          alt=""
          className="w-[4rem] sm:justify-self-end md:w-[6rem] md:justify-self-center lg:w-[7rem]"
        />
        <img
          src={google_logo}
          alt=""
          className="w-[4rem] md:w-[6rem] md:justify-self-center lg:w-[7rem]"
        />
        <img
          src={qase_logo}
          alt=""
          className="w-[4rem] sm:justify-self-center md:w-[5rem] md:justify-self-end lg:w-[5rem]"
        />
      </div>
    </div>
  );
};
export default Partners;
