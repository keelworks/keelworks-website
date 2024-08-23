const Hero = () => {
  return (
    <div className="w-screen md:h-[calc(100vh-5rem)] mt-[5rem] bg-white flex justify-center items-center font-Inter">
      <div className="w-full max-w-[3000px] h-full overflow-hidden relative bg-white flex justify-center items-start">
        <div className="max-w-[1600px] flex items-start md:items-center justify-start md:justify-center flex-col xl:h-full h-full mx-[1rem] md:mx-[2rem] lg:mx-[8rem]">
          <div className="md:text-center max-w-[1140px]">
            <p className="text-[2rem] leading-[3.5rem] md:text-[3.5rem] md:leading-[4rem] lg:text-[4rem] lg:leading-[4.5rem] font-bold text-[#2E2E2E] mb-[2rem] mt-[4rem] lg:mt-[0]">
              About Us
            </p>
            <p className="max-w-[1100px] md:text-[#646464] font-bold text-[1.562rem] md:text-[1.875rem] xl:text-[2.5rem] mb-[4rem] md:mb-[0] text-left md:text-center">
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
