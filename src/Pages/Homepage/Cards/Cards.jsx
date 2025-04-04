import slider1 from "../../../assets/images/card1.jpg";
import slider2 from "../../../assets/images/card2.jpg";
import slider3 from "../../../assets/images/card3.jpg";
import greaterImg from "../../../assets/images/greater.png";
import { Link, useNavigate } from "react-router-dom";
import testimonialImg21 from "../../../assets/images/Testimonials/Rectangle21.png";
import testimonialImg22 from "../../../assets/images/Testimonials/Rectangle22.png";

const Cards = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen">
      {/* ********************* Text at the Top of Cards ********************* */}
      <div className="w-screen flex justify-center bg-grey200">
        <div className="w-full max-w-[3000px]">
          <div className="lg:mx-[8rem] md:mx-[2rem] mx-[1rem]">
            <p className="lg:text-[2.68rem] md:text-[2.25rem] sm:text-[1.875rem] text-[1.5rem] font-bold leading-relaxed lg:pt-[8rem] sm:pt-[6rem] pt-[4rem] ">
              Too many, eager to work,{" "}
              <span className="text-primary500 "> lack the required skills </span>to qualify for sustaining employment.
            </p>
          </div>
          <div className="w-full">
            <p className="lg:text-[2.68rem] md:text-[2.25rem] text-[2.5rem] font-bold leading-relaxed lg:mx-[8rem] md:mx-[2rem] mx-[1rem] pt-10 lg:pb-[8rem] sm:pb-[6rem] pb-[4rem]">
              If we can guide them, we can prepare them for that {" "}
              {" "}
              <span className="text-primary500">sustaining employment.</span>
            </p>
          </div>
        </div>
      </div>
      {/* ********************* 3 x Cards ********************* */}
      <div className="w-screen flex flex-col justify-center items-center bg-white lg:h-screen ">
        <div className="w-full flex justify-center pt-[3.5rem] pb-10 ">
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold ml-4 lg:ml-0 md:ml-0">
            The <span className="text-primary500 ">KeelWorks </span>Solutions
          </p>
        </div>
        <div className="w-full max-w-[3000px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  sm:gap-2 gap-6 lg:h-4/5">
          {/* ******** KeelMaster Card ********* */}
          <div
            className="overflow-hidden sm:m-2 md:m-4 lg:m-4 relative group  m-2 "
            onClick={() => {
              navigate("/oursolutions#keelMaster");
            }}
          >
            <img src={slider1} alt="" className="w-full h-full object-cover" />
            <div className="intro h-1/6 w-full sm:p-2 md:p-2 lg:p-2 text-white absolute bottom-0 lg:group-hover:h-4/5  md:group-hover:h-3/4 group-hover:h-3/5 group-hover:bottom-0 transition-all duration-500 group-hover:cursor-pointer backdrop-blur-lg bg-black bg-opacity-60">
              <div
                className="flex items-center justify-center"
                style={{ margin: "20px 0" }}
              >
                <div className="flex items-center justify-start w-full">
                  <h1 className="text-primary500 font-bold text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl ml-4">
                    KeelMaster
                  </h1>
                </div>
              </div>
              <div className="text-[1.5rem] custombp:text-[1.2rem]/[2rem] custombp2:text-[1.5rem]/[2.5rem] xl:text-[1.875rem] font-medium  m-4  opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:mt-2 sm:leading-relaxed md:leading-[2rem] [@media(min-height:800px)]:leading-[3rem]">
                A three-phase approach to support the most challenged unemployed
                and under-employed individuals mitigating barriers to
                sustainable employment.
                {/* <a href="" className="ml-2 underline text-primary500 hover:text-primary400">more</a> */}
                <span className="inline-flex items-center ">
                  <img src={greaterImg} alt="" className="w-5 h-5 ml-1" />
                </span>
              </div>
            </div>
          </div>
          {/* ******** KeelMate Card ********* */}
          <div
            className="overflow-hidden  sm:m-2 md:m-4 lg:m-4   relative group m-2"
            onClick={() => {
              navigate("/oursolutions#keelMate");
            }}
          >
            <img src={slider2} alt="" className="w-full h-full object-cover" />
            <div className="intro h-1/6 w-full sm:p-2 md:p-2 lg:p-2 text-white absolute bottom-0 lg:group-hover:h-4/5  md:group-hover:h-3/4 group-hover:h-3/5 group-hover:bottom-0 transition-all duration-500 group-hover:cursor-pointer backdrop-blur-lg bg-black bg-opacity-60">
              <div
                className="flex items-center justify-center"
                style={{ margin: "20px 0" }}
              >
                <div className="flex items-center justify-start w-full">
                  <h1 className="text-primary500 font-bold text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl ml-4">
                    KeelMate
                  </h1>
                </div>
              </div>
              <div className="text-[1.5rem] custombp:text-[1.2rem]/[2rem] custombp2:text-[1.5rem]/[2.5rem] xl:text-[1.875rem] font-medium  m-4  opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:mt-2 sm:leading-relaxed md:leading-[2rem] [@media(min-height:800px)]:leading-[3rem]">
                Designed to bridge the gap for participants with insufficient
                education and/or experience in our supported fields; better
                positioning them for employment and/or growth.
                {/* <a href="" className="ml-2 underline text-primary500 hover:text-primary400">more</a> */}
                <span className="inline-flex items-center">
                  <img src={greaterImg} alt="" className="w-5 h-5 ml-1" />
                </span>
              </div>
            </div>
          </div>
          {/* ******** KeelWings Card ********* */}
          <div
            className="overflow-hidden sm:m-2 md:m-4 lg:m-4 relative group m-4"
            onClick={() => {
              navigate("/oursolutions#keelWings");
            }}
          >
            <img src={slider3} alt="" className="w-full h-full object-cover" />
            <div className="w-full h-1/6 sm:p-4 md:p-2 lg:p-2 text-white absolute bottom-0 lg:group-hover:h-4/5  group-hover:h-3/5 md:group-hover:h-3/5 group-hover:bottom-0 transition-all duration-500 group-hover:cursor-pointer backdrop-blur-lg bg-black bg-opacity-60 ">
              <div
                className="flex items-center justify-center"
                style={{ margin: "20px 0" }}
              >
                <div className="flex items-center justify-start w-full">
                  <h1 className="text-primary500 font-bold text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl ml-4">
                    KeelWings
                  </h1>
                  {/* <img
                    src={greaterImg}
                    alt=""
                    className="mx-8 lg:w-6 lg:h-6 md:w-6 md:h-6 h-5 w-5 sm:w-6 sm:h-6 xl:w-8 xl:h-8"
                  /> */}
                </div>
              </div>
              <div className="text-[1.5rem] custombp:text-[1.2rem]/[2rem] custombp2:text-[1.5rem]/[2.5rem] xl:text-[1.875rem] font-medium  m-4  opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:mt-2 sm:leading-relaxed md:leading-[1.75rem] [@media(min-height:800px)]:leading-[3rem]">
                Assists graduates breakthrough the “lack of experience”
                conundrum while providing them valuable employment coaching.
                <span className="inline-flex items-center">
                  <img src={greaterImg} alt="" className="w- 5 h-5 ml-1" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ********************* Testimonial Section ********************* */}
      <div className="w-screen flex flex-col justify-center items-center bg-white py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary500 mb-12">
          Testimonials
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-5xl">
          {/* Testimonial 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-64 h-64">
              <img src={testimonialImg21} alt="Jonathan Stanciu" className="w-full h-full object-cover rounded-lg shadow-lg" />
              <div className="absolute -top-3 -left-3 w-full h-full border-4 border-yellow-500"></div>
            </div>
            <p className="font-bold text-lg mt-4">Jonathan Stanciu</p>
            <p className="text-gray-600">Senior Program Manager at Amazon</p>
            <p className="text-gray-700 mt-2 px-4 max-w-xs">
            “KeelWorks gave my resume legitimate experience. I learned to storyboard and build projects in Captivate using assets created in Photoshop and Audition.
              Now, I am a Senior Program Manager at Amazon. My success is the product of several career steps, all of which began with my practice in instructional design - and that started with KeelWorks.”
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-64 h-64">
              <img src={testimonialImg22} alt="Eric Halterman" className="w-full h-full object-cover rounded-lg shadow-lg" />
              <div className="absolute -top-3 -left-3 w-full h-full border-4 border-yellow-500"></div>
            </div>
            <p className="font-bold text-lg mt-4">Eric Halterman</p>
            <p className="text-gray-600">Instructional Designer</p>
            <p className="text-gray-700 mt-2 px-4 max-w-xs">
              “I have been trying to transition out of the classroom and into instructional design for a while now, and I was fortunate enough to find this internship opportunity. From the moment I joined, I was given valuable resources to help guide not only my processes, but my thinking.”
            </p>
          </div>
        </div>

        {/* Learn More Button */}
        <a href="https://keelworks.org/getinvolved" target="_blank" rel="noopener noreferrer">
    <button class="mt-8 border-2 border-yellow-500 text-yellow-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500 hover:text-white transition">
        Learn More
    </button>
</a>

      </div>


      {/* ********************* Text at the Bottom of Cards ********************* */}
      <div className="w-full bg-grey200 flex justify-center">
        <div className="max-w-[3000px] mx-[1rem] md:mx-[2rem] lg:mx-[8rem]">
          <p className="text-[2rem] font-bold leading-relaxed py-[8rem] md:text-[2.68rem]">
            If you believe in our mission to get people to work, we need your
            support.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Cards;
