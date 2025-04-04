import greaterImg from "../../../assets/images/greater.png";

const Hero = () => {
  return (
    <div className="w-screen lg:min-h-[800px] mt-[5rem] bg-white flex justify-center items-center font-Inter">
      <div className="w-full max-w-[3000px] h-full overflow-hidden relative bg-white flex justify-center items-start">
        <div className="flex items-start md:items-center justify-center flex-col xl:h-full w-full h-full mx-[1rem] md:mx-[2rem] lg:mx-[8rem]">
          <div>
            <p className="text-[2rem] leading-[3.5rem] md:text-[3rem] md:leading-[3.5rem] lg:text-[3.5rem] lg:leading-[4rem] font-bold text-[#2E2E2E] mb-[2rem] mt-[4rem] lg:mt-[0]">
              Get Involved
            </p>
          </div>
          <div className="text-[#646464] font-bold text-[2rem] leading-[3.5rem] md:text-[2.5rem] md:mt-10 md:text-center">
            <p>
              Together, WE can do{" "}
              <span className="text-primary500 ">ANYTHING</span>{" "}
            </p>
          </div>
          <div className="text-[1rem] md:text-[1.75rem] text-[#646464] md:text-center leading-[1.6] my-8 md:my-[3.5rem] lg:my-8">
            <p className="whitespace-normal">
              KeelWorks is committed to helping individuals achieve sustainable employment. The KeelMaster program is our most ambitious program yet, designed to engage participants without any skills or technical knowledge.
            </p>
            <br/>
            <p>
              Our program is taking shape—join us in making a difference!
            </p>
          </div>
          <div className="xl:mt-[40px] grid grid-cols-1 md:grid-cols-3 gap-4 justify-start md:gap-24 mb-[4rem] lg:mb-[0]">
            <div className="relative md:ml-6">
              <h1 className="text-[2rem] md:text-[2.5rem] font-bold text-[#646464]">
                01
              </h1>
              <p className="text-[1rem] text-[#646464]">Making a donation</p>
              <div className="flex justify-start items-center">
                <span className="text-primary500 font-bold text-[0.875rem]">
                  More Details
                </span>
                <img src={greaterImg} alt="" className="mx-2 w-2 xl:h-2" />
              </div>
              <div className="absolute top-0 right-0 h-full w-px bg-[#646464]"></div>
            </div>
            <div className="relative">
              <h1 className="text-[2rem] md:text-[2.5rem] font-bold text-[#646464]">
                02
              </h1>
              <p className="text-[1rem] text-[#646464]">Volunteer</p>
              <p className="text-[1rem] text-[#646464]">(see below)</p>
              <div className="flex justify-start items-center">
                <span className="text-primary500 font-bold text-[0.875rem]">
                  More Details
                </span>
                <img src={greaterImg} alt="" className="mx-2 w-2 h-2" />
              </div>
              <div className="absolute top-0 right-0 h-full w-px bg-[#646464]"></div>
            </div>
            <div className="relative">
              <h1 className="text-[2rem] md:text-[2.5rem] font-bold text-[#646464]">
                03
              </h1>
              <p className="text-[1rem] text-[#646464]">
                Encourage others to donate{" "}
              </p>
              <p className="text-[1rem] text-[#646464]">or volunteer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
