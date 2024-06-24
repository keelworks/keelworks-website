const Hero = () => {
  return (
    <div className="w-screen h-[calc(100vh-5rem)] mt-[5rem] bg-[#FFFFFF] flex  font-Inter">
      <div className="w-full max-w-[3000px] h-full flex flex-col items-center justify-center  overflow-hidden relative bg-[#FFFFFF]">
        <div>
        <p  className="text-[50px] sm:text-[76px] font-bold text-[#2E2E2E]">Get Involved</p >
        </div>
        <div className="mt-[10px] md:mt-[55px] text-[40px] md:text-[50px] font-bold text-[#646464] text-center p-[10px]">
          <p className="">When we come together, we can transform lives.</p> <span className="text-primary500">Transforming lives is what Keelworks is all about.</span> <p> Come together, get involved, see how!</p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
