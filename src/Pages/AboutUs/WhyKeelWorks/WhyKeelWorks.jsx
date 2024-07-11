const WhyKeelWorks = () => {
  return (
    <div className="w-screen h-[calc(100vh-5rem)] lg:min-h-[800px] mt-[5rem] bg-[#F5F5F9] flex   items-center font-Inter">
      <div className="w-full max-w-[3000px] h-full overflow-hidden relative bg-[#F5F5F9] flex  items-start">
        <div className="flex justify-start md:justify-center items-center flex-col xl:h-full w-full h-full mx-[4rem] lg:mx-[8rem]">
          <div className="md:my-[100px] max-w-[1200px] mx-auto ">
            <div className="sm:text-center">
              <p className="text-[30px] leading-[3.5rem] md:text-[3rem] md:leading-[4rem] lg:text-[4rem] lg:leading-[4.5rem] font-bold text-[#2E2E2E] ">
                The <span className="text-primary500">WHY</span>  of KeelWorks
              </p>
            </div>
            <div className="text-[15px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-[#646464] mt-2 lg:mt-[40px]">
              <p>KeelWorks aims to empower individuals worldwide to reach their full potential by offering a proven recipe for success through competency development, community support, and networked intelligence.</p>
              <p className="mt-5 lg:mt-10">Created in the state of Washington (USA) in December of 2008, KeelWorks has been supporting and empowering participants through our programs for over 15 years. At KeelWorks, we firmly believe:</p>
              <ul className="list-disc pl-5 text-[#646464] mt-5  lg:mt-10 text-[15px] md:text-[20px] lg:text-[24px] font-bold sm:text-[18px] ">
                <li>Unrealized human potential is everyone’s loss.</li>
                <li>Circumstances or other people don’t define us; we define ourselves</li>
                <li>The hunger for learning is universal</li>
                <li>Every learner possesses unique gifts</li>
                <li>Together, we wield limitless power</li>
              </ul>
              <p className="mt-5 lg:mt-10">These beliefs fuel our volunteers and donors to continually work towards our ultimate mission; a more peaceful and equitable world.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyKeelWorks;
