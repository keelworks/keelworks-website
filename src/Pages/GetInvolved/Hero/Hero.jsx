import greaterImg from "../../../assets/images/_.png";
const Hero = () => {
  return (
    <div className="w-screen h-[calc(100vh-5rem)] mt-[5rem] bg-[#FFFFFF] flex  font-Inter">
      <div className="w-full max-w-[3000px] h-full  overflow-hidden relative bg-[rgb(255,255,255)] flex  justify-center items-center">
        <div className="flex items-center justify-center flex-col xl:w-8/12 xl:h-full w-full h-full">
          <div>
            <p className="text-[50px] sm:text-[76px] font-bold text-[#2E2E2E]">
              Get Involved
            </p>
          </div>
          <div className="text-[#646464] font-bold  text-[35px] md:text-[40px] md:mt-10 text-center p-[10px]">
            <p className="">
              Together, WE can do{" "}
              <span className="text-primary500 ">ANYTHING</span>{" "}
            </p>
          </div>
          <div className=" text-[20px] md:text-[28px] text-[#646464]  text-center p-[10px] leading-relaxed">
            <p>
              KeelWorks wants to help everyone to sustaining employment. We are
              KeelWorks! <br />
              The KeelMaster program can have a significant affect on poverty
              and boost economies.
              <br /> But we have to build it first. Systems are coming together,
              and you can be part of it!
            </p>
          </div>
          <div class="xl:mt-[40px] grid grid-cols-3 md:gap-24 gap-15">
            <div class="relative ml-6 text-center md:text-start ">
              <h1 class="text-[40px] font-bold text-[#646464]">01</h1>
              <p class="text-[16px] text-[#646464]">Making</p>
              <p class="text-[16px] text-[#646464]">a donation</p>
              <div class="flex justify-center md:justify-start items-center">
                <span class="text-primary500 font-bold text-[14px]">
                  More Details
                </span>
                <img src={greaterImg} alt="" class="mx-2 w-2 xl:h-2" />
              </div>
              <div class="absolute top-0 right-0 h-full w-px bg-[#646464]"></div>
            </div>
            <div class="relative text-center md:text-start ">
              <h1 class="text-[40px] font-bold text-[#646464]">02</h1>
              <p class="text-[16px] text-[#646464]">Volunteer</p>
              <p class="text-[16px] text-[#646464]">(see below)</p>
              <div class="flex justify-center md:justify-start items-center">
                <span class="text-primary500 font-bold text-[14px]">
                  More Details
                </span>
                <img src={greaterImg} alt="" class="mx-2 w-2 h-2" />
              </div>
              <div class="absolute top-0 right-0 h-full w-px bg-[#646464]"></div>
            </div>
            <div class="relative text-center md:text-start ">
              <h1 class="text-[40px] font-bold text-[#646464]">03</h1>
              <p class="text-[16px] text-[#646464]">
                Encourage others to donate{" "}
              </p>
              <p class="text-[16px] text-[#646464]">or volunteer</p>
              {/* <div class="flex justify-center items-center">
                <span class="text-primary500 font-bold text-[14px]">More Details</span>
                <img src={greaterImg} alt="" class="mx-2 w-2 xl:h-2" />
              </div> */}
            </div>
          </div>

          {/* <div className="mt-[10px] md:mt-[55px] text-[40px] md:text-[50px] font-bold text-[#646464] text-center p-[10px]">
          <p className="">When we come together, we can transform lives.</p> <span className="text-primary500">Transforming lives is what Keelworks is all about.</span> <p> Come together, get involved, see how!</p>
        </div> */}
        </div>
      </div>
    </div>
  );
};
export default Hero;
