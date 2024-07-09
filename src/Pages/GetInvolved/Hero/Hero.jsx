import greaterImg from "../../../assets/images/_.png";
const Hero = () => {
  return (
    <div className="w-screen h-[calc(100vh-5rem)] lg:min-h-[800px] mt-[5rem] bg-white flex justify-center items-center font-Inter">
      <div className="w-full max-w-[3000px] h-full overflow-hidden relative bg-white flex justify-center items-start">
        <div className="flex items-center justify-center flex-col xl:h-full w-full h-full mx-[4rem] lg:mx-[8rem]">
          <div>
            <p className="text-[3rem] leading-[3.5rem] md:text-[3.5rem] md:leading-[4rem] lg:text-[4rem] lg:leading-[4.5rem] font-bold text-[#2E2E2E] mb-[2rem]">
              Get Involved
            </p>
          </div>
          <div className="text-[#646464] font-bold  text-[1.5rem] md:text-[2.5rem] md:mt-10 text-center p-[10px]">
            <p className="">
              Together, WE can do{" "}
              <span className="text-primary500 ">ANYTHING</span>{" "}
            </p>
          </div>
          <div className=" text-[1rem] md:text-[28px] text-[#646464]  text-center leading-relaxed mb-8">
            <p>
              KeelWorks wants to help everyone to sustaining employment. We are
              KeelWorks! <br />
              The KeelMaster program can have a significant affect on poverty
              and boost economies.
              <br /> But we have to build it first. Systems are coming together,
              and you can be part of it!
            </p>
          </div>
          <div className="xl:mt-[40px] grid grid-cols-3 md:gap-24 gap-15">
            <div className="relative ml-6 text-center md:text-start ">
              <h1 className="text-[40px] font-bold text-[#646464]">01</h1>
              <p className="text-[16px] text-[#646464]">Making a donation</p>
              <div className="flex justify-center md:justify-start items-center">
                <span className="text-primary500 font-bold text-[14px]">
                  More Details
                </span>
                <img src={greaterImg} alt="" className="mx-2 w-2 xl:h-2" />
              </div>
              <div className="absolute top-0 right-0 h-full w-px bg-[#646464]"></div>
            </div>
            <div className="relative text-center md:text-start ">
              <h1 className="text-[40px] font-bold text-[#646464]">02</h1>
              <p className="text-[16px] text-[#646464]">Volunteer</p>
              <p className="text-[16px] text-[#646464]">(see below)</p>
              <div className="flex justify-center md:justify-start items-center">
                <span className="text-primary500 font-bold text-[14px]">
                  More Details
                </span>
                <img src={greaterImg} alt="" className="mx-2 w-2 h-2" />
              </div>
              <div className="absolute top-0 right-0 h-full w-px bg-[#646464]"></div>
            </div>
            <div className="relative text-center md:text-start ">
              <h1 className="text-[40px] font-bold text-[#646464]">03</h1>
              <p className="text-[16px] text-[#646464]">
                Encourage others to donate{" "}
              </p>
              <p className="text-[16px] text-[#646464]">or volunteer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
