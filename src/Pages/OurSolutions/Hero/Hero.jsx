const Hero = () => {
  // const navigate = useNavigate();
  return (
    <div className="w-screen min-h-screen mt-[5rem] bg-white flex justify-center items-start md:items-center font-Inter">
      <div className="w-full max-w-[3000px] h-full overflow-hidden relative bg-white flex justify-center items-start">
        <div className=" max-w-[1000px] flex items-start md:items-center justify-center flex-col xl:h-full h-full mx-[1rem] md:mx-[2rem] lg:mx-[8rem] border-2">
          <div>
            <p className="text-[2rem] leading-[3.5rem] md:text-[3.5rem] md:leading-[4rem] lg:text-[4rem] lg:leading-[4.5rem] font-bold text-[#2E2E2E] mb-[2rem] mt-[4rem] lg:mt-[0]">
              Our Solutions
            </p>
          </div>
          <div className="md:text-[#646464] font-bold text-[25px] md:text-[30px] xl:text-[40px] md:mt-2 text-left md:text-center">
            <p>
              The KeelWorks Foundation offers three programs to get people to
              work. Participants from{" "}
              <span className="text-primary500">KeelWings</span> and{" "}
              <span className="text-primary500">KeelMate</span> help us build
              the third and most demanding program,{" "}
              <span className="text-primary500">KeelMaster.</span>
            </p>
          </div>
          <div className="text-[18px] leading-loose md:text-[24px] md:text-[#646464] mt-2 md:mt-4 text-left md:text-center">
            <p>
              Each program leverages the combined intelligence of the group,
              teaching participants the importance of mutual support. They
              foster tangible practice in career challenges, allowing each
              participant to present themselves as a tested candidate.
            </p>
          </div>
          {/* <div className="flex justify-center md:justify-end w-full mt-4 sm:mt-8">
            <button
              className="rounded-full bg-primary500 hover:bg-primary300 transition duration-[300ms] ease-linear p-4 text-[#0B0A0A] font-semibold text-[14px] flex items-end justify-end mb-10"
              onClick={() => navigate("/home")}
            >
              <img
                src={back}
                alt=""
                className="mx-2 w-[16px] h-[16px] inline-block align-middle"
              />
              <span>Back to HomePage</span>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Hero;
