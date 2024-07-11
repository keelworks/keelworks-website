const Hero = () => {
  return (
    <div className="w-screen h-[calc(100vh-5rem)] lg:min-h-[800px] mt-[5rem] bg-white flex justify-center items-center font-Inter">
      <div className="w-full max-w-[3000px] h-full overflow-hidden relative bg-white flex justify-center items-start">
        <div className="flex items-center justify-center flex-col xl:h-full w-full h-full mx-[4rem] lg:mx-[8rem]">
          <div className="text-center max-w-[1140px] ">
            <p className="text-[40px] leading-[3.5rem] sm:text-[3rem] md:text-[3.5rem] md:leading-[4rem] lg:text-[76px] lg:leading-[4.5rem] font-bold text-[#2E2E2E] mb-[2rem]">
              About Us
            </p>
            <p className="mt-[40px] font-bold  text-[25px] sm:text-[30px]  lg:text-[40px] text-[#4B4B4B]">
            <span className="text-primary500">At KeelWorks</span>, our mission is to promote, empower, and perpetuate global economic equality through <span className="text-primary500">full inclusion</span>  at the individual level. We firmly believe  by fostering this equality, we lay the foundation for a more <span className="text-primary500"> peaceful and equitable world.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
