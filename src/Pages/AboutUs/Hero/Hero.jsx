const Hero = () => {
  return (
    <div className="w-screen h-[calc(100vh-5rem)] mt-[5rem] bg-white flex justify-center items-center font-Inter">
      <div className="w-full max-w-[3000px] h-full overflow-hidden relative bg-white flex justify-center items-start">
        <div className="flex items-start md:items-center justify-center flex-col xl:h-full w-full h-full mx-[1rem] md:mx-[2rem] lg:mx-[8rem]">
          <div className="md:text-center max-w-[1140px] ">
            <p className="text-[2rem] leading-[3.5rem] md:text-[3.5rem] md:leading-[4rem] lg:text-[4rem] lg:leading-[4.5rem] font-bold text-[#2E2E2E] mb-[2rem] mt-[4rem] lg:mt-[0]"> 
              About Us
            </p>
            <p className="text-[#646464] font-bold text-[1rem] leading-[2.62rem] md:text-[2.5rem] md:mt-10 md:text-center">
              <span className="text-primary500">At KeelWorks</span>, our mission
              is to promote, empower, and perpetuate global economic equality
              through <span className="text-primary500">full inclusion</span> at
              the individual level. We firmly believe by fostering this
              equality, we lay the foundation for a more{" "}
              <span className="text-primary500">
                {" "}
                peaceful and equitable world.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
