export const Values = () => {
  return (
    <div className="w-screen bg-white flex justify-center items-start">
      <div className="w-screen max-w-[3000px] my-[5rem] md:mt-[8rem] flex justify-start items-center">
        <div className="mx-[1rem] md:mx-[2rem] lg:mx-[8rem]">
          <div className="w-full flex flex-col md:flex-row justify-start items-start gap-[2rem] mt-[4rem]">
            {/* Sidebar - constrained width in percent for screen size of 1440 max width 300px*/}
            <div className="w-full md:max-w-[35%] text-left flex flex-col gap-2 flex-shrink-0">
              <p className="text-[1.2rem] font-bold text-gray-500">
                Our Foundation
              </p>
              <p className="text-[1.2rem] text-black font-bold px-2 py-1 border border-black underline">
                Mission, Beliefs & Values
              </p>
            </div>

            {/* Main content area - takes remaining space */}
            <div className="w-full md:flex-1">
              <h2 className="text-3xl md:text-5xl font-bold text-left">
                Mission, Beliefs & Values
              </h2>

              <div className="mt-8">
                <h3 className="text-[1.5rem] font-bold text-black">
                  Our mission statement
                </h3>
                <p className="text-[1.2rem] text-black mt-4 italic">
                  We get people to work - anyone unemployed. We champion full
                  inclusion and upward mobility for the economically
                  disadvantaged.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-[1.5rem] font-bold text-black">
                  What we believe
                </h3>
                <ul className="list-decimal pl-8 mt-4 space-y-2">
                  <li className="text-[1.2rem] text-black">
                    Unrealized human potential is everyone&apos;s loss.
                  </li>
                  <li className="text-[1.2rem] text-black">
                    We define who we are, not circumstances, or other people.
                  </li>
                  <li className="text-[1.2rem] text-black">
                    Everyone wants to learn.
                  </li>
                  <li className="text-[1.2rem] text-black">
                    Every learner is gifted.
                  </li>
                  <li className="text-[1.2rem] text-black">
                    Together, we can do ANYTHING!
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-[1.5rem] font-bold text-black">
                  Our values
                </h3>
                <ul className="list-decimal pl-8 mt-4 space-y-2">
                  <li className="text-[1.2rem] text-black">
                    <strong>Honesty:</strong> Transparency, integrity, and a
                    commitment to truth.
                  </li>
                  <li className="text-[1.2rem] text-black">
                    <strong>Competence:</strong> Building for individual
                    empowerment and mutual value.
                  </li>
                  <li className="text-[1.2rem] text-black">
                    <strong>Diversity:</strong> Full inclusion with equality and
                    dignity for all.
                  </li>
                  <li className="text-[1.2rem] text-black">
                    <strong>Community:</strong> Mutual support: together, we can
                    do anything!
                  </li>
                  <li className="text-[1.2rem] text-black">
                    <strong>Leadership:</strong> Leading with integrity for the
                    benefit of all. Our behavior will reflect our values.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
