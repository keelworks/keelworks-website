const WhyKeelWorks = () => {
  return (
    <div className="w-screen h-full md:h-[calc(100vh-5rem)] lg:min-h-[800px] mt-[5rem] bg-[#F5F5F9] flex flex-col items-center justify-center">
      <div className="h-full w-full max-w-[3000px] overflow-hidden relative bg-[#F5F5F9] flex items-center justify-center">
        <div className="h-full w-full flex justify-center items-center mx-[1rem] md:mx-[2rem] lg:mx-[8rem]">
          <div className="h-full flex flex-col justify-center items-start md:items-center max-w-[1200px]">
            <div className="md:text-center flex flex-col items-center justify-center">
              <p className="text-[2rem] md:text-[3rem] md:leading-[4rem] lg:text-[4rem] lg:leading-[4.5rem] font-bold text-[#2E2E2E] ">
                The <span className="text-primary500">WHY</span> of KeelWorks
              </p>
            </div>
            <div className="text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] text-[#646464] mt-8 lg:mt-[2.5rem]">
              <p>
                KeelWorks aims to empower individuals worldwide to reach their
                full potential by offering a proven recipe for success through
                competency development, community support, and networked
                intelligence.
              </p>
              <p className="mt-5 lg:mt-10">
                Created in the state of Washington (USA) in December of 2008,
                KeelWorks has been supporting and empowering participants
                through our programs for over 15 years. At KeelWorks, we firmly
                believe:
              </p>
              <ul className="list-disc pl-5 text-[#646464] mt-5 lg:mt-10 text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-bold sm:text-[1.125rem]">
                <li>Unrealized human potential is everyone’s loss.</li>
                <li>
                  Circumstances or other people don’t define us; we define
                  ourselves
                </li>
                <li>The hunger for learning is universal</li>
                <li>Every learner possesses unique gifts</li>
                <li>Together, we wield limitless power</li>
              </ul>
              <p className="mt-5 lg:mt-10">
                These beliefs fuel our volunteers and donors to continually work
                towards our ultimate mission; a more peaceful and equitable
                world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyKeelWorks;
