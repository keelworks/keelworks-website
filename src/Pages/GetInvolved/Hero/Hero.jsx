import greaterImg from "../../../assets/images/_.png";
const Hero = () => {
  return (
    <div className="w-screen h-[calc(100vh-5rem)] mt-[5rem] bg-[#FFFFFF] flex  font-Inter">
      <div className="w-full max-w-[3000px] h-full  overflow-hidden relative bg-[rgb(255,255,255)] flex justify-center items-center ">
        <div className="flex items-center justify-center flex-col xl:w-8/12 xl:h-full w-full h-full mx-[4rem] lg:mx-[8rem] ">
          <div>
            <p className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[76px] font-bold text-[#2E2E2E]">
              Get Involved
            </p>
          </div>
          <div className="text-[#646464] font-bold  text-[30px]  sm:text-[30px] md:text-[40px] md:mt-2 text-center p-[10px]">
            <p className="">
              Together, WE can do{" "}
              <span className="text-primary500 ">ANYTHING</span>{" "}
            </p>
          </div>
          <div className=" text-[15px] sm:text-[20px] md:text-[28px] text-[#646464]  text-center p-[10px] leading-relaxed">
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
              <p className="text-[16px] text-[#646464]">Making</p>
              <p className="text-[16px] text-[#646464]">a donation</p>
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
