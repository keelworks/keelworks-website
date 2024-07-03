const KeelMaster = () => {
  return (
    <div className="w-full h-auto mt-[5rem] bg-[#FFFFFF] flex justify-center items-center font-Inter">
  <div className="w-full max-w-[3000px] h-full flex flex-col items-center overflow-hidden relative mx-[4rem] lg:mx-[8rem]">
    <div className="flex items-center flex-col w-full h-full">
      <div className="mt-[40px] font-bold  text-[50px] lg:text-[64px] h-[97px] text-center">
        <p>KeelMaster</p>
      </div>
      <div className="w-full h-auto bg-primary500 px-[1rem] py-[1rem] md:px-[4rem] md:py-[4rem] xl:px-[180px] xl:py-[190px] text-white font-bold text-[25px] md:text-[30px] lg:text-[40px] xl:text-[48px] my-[40px] text-center">
        <div className="w-full max-w-[1060px] mx-auto">
          <p>
            KeelMaster is our most ambitious program. It is currently in development. It offers a systematic process supporting individuals with the greatest employment challenges to gainful employment.
          </p>
        </div>
      </div>
      <div className="w-full max-w-[900px] h-auto mb-10">
        <div className="text-[18px] h-auto">
          <p>Breaking the pattern of unemployment or underemployment is the program goal for KeelMaster. This program recognizes that continued failure is a certainty, unless informed intervention is applied. It also recognizes that change is easier when confronted in a community rather than in isolation.</p>
          <p className="mt-8">The program will recognize and address barriers as well as recognize and leverage strengths. Our unique program offers a four-phase approach that is designed to affect sustainable change. We believe that if we can mitigate barriers and align participants with their strengths, we can <span className="text-primary500">change their lives</span>.</p>
        </div>
        <div className="mt-[100px] h-auto">
          <div className="text-[#0B0A0A] font-bold text-[30px] md:text-[40px]">
            <h1>This program features three phases:</h1>
          </div>
          <div className="mt-[60px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              <div>1. Needs Analysis: We help participants by identifying barriers and discovering strengths.</div>
              <div>2. Core Competency: As part of a group of peers and a facilitator, participants engage in a series of courses that include self-identity, critical thinking, problem-solving, communication, assertiveness, and team-building. Core Competencies conclude with goal determination and management.</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-[40px] md:mt-[100px]">
              <div>3. Ongoing Team Support: Change is difficult, especially for those with a history of struggle. To ensure success, teams stay together for mutual support and peer accountability until all members are gainfully employed.</div>
              <div>4. Internships: An important aspect of the program, for participants, is practice in their field. This is critical to their success since, with experience, applicants become more attractive to employers. Some will be placed outside the foundation–especially where there are physical components, such as in auto mechanics. Where virtual practice is the norm and opportunity exists, participants will be placed within the foundation. We hope to have an endowment fund to pay all interns or place them in external paid internships.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};
export default KeelMaster;
