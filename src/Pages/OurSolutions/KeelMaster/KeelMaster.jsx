const KeelMaster = () => {
  return (
    <div
      className="w-full h-auto bg-[#FFFFFF] flex justify-center items-center font-Inter"
      id="keelMaster"
    >
      <div className="w-full max-w-[3000px] h-full flex flex-col items-center overflow-hidden relative">
        <div
          className="flex items-start md:items-center flex-col h-full"
          id="keelmaster"
        >
          <div className="mt-[80px] mx-[2rem] font-bold text-[2rem] md:text-[3.56rem] text-start md:text-center">
            <p>KeelMaster</p>
          </div>
          <div className="w-full h-auto bg-primary500 py-[2rem] my-[20px] md:my-[40px] md:px-[4rem] md:py-[4rem] xl:px-[180px] xl:py-[190px] text-white font-bold text-[1.562rem] md:text-[1.875rem] lg:text-[2.5rem] xl:text-[3rem] text-start md:text-center">
            <div className="max-w-[1600px] mx-[2rem] md:mx-[4rem]">
              <p>
                KeelMaster is our most ambitious program. It is currently in
                development. It offers a systematic process supporting
                individuals with the greatest employment challenges to gainful
                employment.
              </p>
            </div>
          </div>

          <div className="max-w-[1300px] h-auto mb-10 mx-[2rem] md:mx-[4rem]">
            <div className="text-[18px] h-auto">
              <p className="leading-loose">
                Breaking the pattern of unemployment or underemployment is the
                program goal for KeelMaster. This program recognizes that
                continued failure is a certainty, unless informed intervention
                is applied. It also recognizes that change is easier when
                confronted in a community rather than in isolation.
              </p>
              <p className="mt-8 leading-loose">
                The program will recognize and address barriers as well as
                recognize and leverage strengths. Our unique program offers a
                four-phase approach that is designed to affect sustainable
                change. We believe that if we can mitigate barriers and align
                participants with their strengths, we can{" "}
                <span className="text-primary500">change their lives</span>.
              </p>
            </div>
            <div className="mt-[5rem] h-auto mb-[2.5rem]">
              <div className="text-[#0B0A0A] font-bold text-[30px] md:text-[40px]">
                <h1>This program features three phases:</h1>
              </div>
              <div className="mt-[20px] md:mt-[60px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                  <p className="leading-loose">
                    1. Needs Analysis: We help participants by identifying
                    barriers and discovering strengths.
                  </p>
                  <p className="leading-loose">
                    2. Core Competency: As part of a group of peers and a
                    facilitator, participants engage in a series of courses that
                    include self-identity, critical thinking, problem-solving,
                    communication, assertiveness, and team-building. Core
                    Competencies conclude with goal determination and
                    management.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-[32px] md:mt-[100px]">
                  <p className="leading-loose">
                    3. Ongoing Team Support: Change is difficult, especially for
                    those with a history of struggle. To ensure success, teams
                    stay together for mutual support and peer accountability
                    until all members are gainfully employed.
                  </p>
                  <p className="leading-loose">
                    4. Internships: An important aspect of the program, for
                    participants, is practice in their field. This is critical
                    to their success since, with experience, applicants become
                    more attractive to employers. Some will be placed outside
                    the foundation–especially where there are physical
                    components, such as in auto mechanics. Where virtual
                    practice is the norm and opportunity exists, participants
                    will be placed within the foundation. We hope to have an
                    endowment fund to pay all interns or place them in external
                    paid internships.
                  </p>
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
