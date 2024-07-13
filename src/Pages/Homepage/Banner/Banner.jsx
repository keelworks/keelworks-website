import banner_pic from "../../../assets/images/banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="w-screen h-[calc(100vh-5rem)] bg-black flex justify-center">
      <div
        className="relative w-screen max-w-[3000px] h-[calc(100vh-5rem)] overflow-hidden bg-center bg-no-repeat bg-cover md:bg-left xl:bg-[size:150%]"
        style={{
          backgroundImage: `url(${banner_pic})`,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-[2px] md:w-1/2 lg:justify-start md:backdrop-blur-lg">
          <div className="mx-[4rem] md:mx-[4rem] lg:mx-[8rem]">
            <h1 className="text-[3rem] leading-[3.5rem] md:text-[3.5rem] md:leading-[4rem] lg:text-[4rem] lg:leading-[4.5rem] font-bold text-white">
              We Can Do This!
              <br />
              But Only
              <br /> With
              <span className="text-primary500"> Your Help.</span>
            </h1>
            <h5 className="text-[1.5rem] font-bold text-white mt-6">
              When we come together,
              <br /> we can transform lives.
            </h5>
            <div className="flex mt-6 gap-6">
              <button
                className="w-[116px] h-[47px] bg-primary500 rounded-full hover:bg-primary300 transition duration-[150ms] ease-linear text-[#101828] font-semibold"
                onClick={() => {
                  window.location.href =
                    "https://www.every.org/keelworks-foundation?utm_campaign=donate-link&method=card%2Cbank%2Cpaypal%2Cpay%2Cvenmo%2Cgift%2Cstocks%2Cdaf#/donate";
                }}
              >
                Donate
              </button>
              <Link
                to="/getinvolved"
                className="w-[156px] h-[47px] border-primary500 border-solid border-[4px] rounded-full flex justify-center items-center hover:bg-primary300 transition duration-[150ms] ease-linear text-primary500 hover:text-fontSecondary font-semibold"
              >
                Get involved
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
