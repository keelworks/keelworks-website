const KeelMaster = () => {
  return (
    <div
      className="w-full h-auto bg-[#FFFFFF] flex justify-center items-center"
      id="keelMaster"
    >
      <div className="w-full max-w-[3000px] h-full flex flex-col items-center justify-center overflow-hidden">
        <div
          className="flex items-start md:items-center justify-center flex-col h-full"
          id="keelmaster"
        >
          <div className="mt-[4rem] mx-[1rem] font-bold text-[2rem] md:text-[3.56rem] text-start md:text-center">
            <p>KeelMaster</p>
          </div>
          <div className="w-full flex justify-center items-center md:h-screen bg-primary500 py-[4rem] md:my-[40px] text-white font-bold text-[1.562rem] md:text-[1.875rem] lg:text-[2.5rem] xl:text-[3rem]">
            <div className="max-w-[1300px] flex mx-[1rem] lg:mx-[8rem] text-left md:text-center">
              <p>
                KeelMaster is our most ambitious program. It is currently in
                development. It offers a systematic process supporting
                individuals with the greatest employment challenges to gainful
                employment.
              </p>
            </div>
          </div>

          <div className="h-auto mb-10 mx-[1rem] md:mx-[2rem] lg:mx-[8rem]">
            <div className="text-[1.125rem] h-auto">
              <p className="leading-loose mt-8 md:mt-0">
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
              <div className="text-[#0B0A0A] font-bold text-[1.875rem] md:text-[2.5rem]">
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
