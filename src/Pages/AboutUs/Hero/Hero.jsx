const Hero = () => {
  return (
    <div className="w-screen h-[calc(100vh-5rem)] lg:min-h-[800px] mt-[5rem] bg-white flex justify-center items-center font-Inter">
      <div className="w-full max-w-[3000px] h-full overflow-hidden relative bg-white flex justify-center items-start">
        <div className="flex items-center justify-center flex-col xl:h-full w-full h-full mx-[4rem] lg:mx-[8rem]">
          <div>
            <p className="text-[3rem] leading-[3.5rem] md:text-[3.5rem] md:leading-[4rem] lg:text-[4rem] lg:leading-[4.5rem] font-bold text-[#2E2E2E] mb-[2rem]">
              About Us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
