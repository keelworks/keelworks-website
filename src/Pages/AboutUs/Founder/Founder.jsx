import founderImage from "../../../assets/images/About-Us/Thomas-G.jpg";
// import founderBanner from "../../../assets/images/About-Us/Founder-Banner.jpg";

const founderInfo = [
  {
    id: 1,
    name: "Thomas",
    lastName: "Garrod",
    image: founderImage,
    content1:
      "Thomas, fueled by his own journey from high school dropout to master's degree holder in education, launched the KeelWorks foundation in 2008. Driven by his vision to catalyze upward mobility, Thomas transformed his dream into tangible action. With a long and successful career in technical writing, instructional design, and organizational development, he leverages his expertise to empower individuals like himself who have faced adversity.",
    content2:
      "KeelWorks isn't just a foundation; it's a personal story of hope, dedicated to reshaping the destinies of those facing adversity and rewriting the narrative of what's possible. ",
  },
];

const Founder = () => {
  return (
    <div className="w-screen lg:min-h-[800px] mt-[5rem] bg-white flex justify-center items-center font-Inter">
      <div className="w-full max-w-[3000px] h-full overflow-hidden relative bg-white flex flex-col justify-center items-center mx-[1rem] ">
        <div className="flex items-start md:items-center justify-center flex-col xl:h-full w-full h-full mx-[1rem] md:mx-[2rem] lg:mx-[8rem]">
          <h4 className="text-[2.5rem] leading-[3.5rem] md:text-[3.5rem] md:leading-[4rem] lg:text-[4rem] lg:leading-[4.5rem] font-bold text-[#2E2E2E] my-[2rem] md:my-[4rem]">
            Founder
          </h4>
          <div className="w-full max-w-[1600px]  md:w-[75%] flex flex-col md:flex-row items-start justify-center gap-[1rem] md:gap-[5rem]">
            <img
              src={founderImage}
              alt={founderInfo[0].name}
              className="w-full md:w-[30%] lg:w-[65%] md:max-w-[400px] mb-5 md:mb-0"
            />
            <div className="mb-[5rem]">
              <div className="w-[8rem] h-[1.1rem] bg-primary500"></div>
              <h4 className="text-[2rem] leading-[3rem] md:text-[3.5rem] md:leading-[4rem] lg:text-[4rem] lg:leading-[4.5rem] font-bold md:mt-[2rem]">
                {founderInfo[0].name}
              </h4>
              <h4 className="text-[2rem] leading-[2rem] md:text-[3.5rem] md:leading-[4rem] lg:text-[4rem] lg:leading-[4.5rem] font-bold">
                {founderInfo[0].lastName}
              </h4>
              <p className="mt-[2rem]">{founderInfo[0].content1}</p>
              <p className="mt-[2rem]">{founderInfo[0].content2}</p>
            </div>
          </div>
        </div>
        {/* <img
          src={founderBanner}
          alt="Three men"
          className="w-full max-w-[1600px] object-cover my-[4rem] md:my-[6rem] xlg:mx-[8rem]"
        /> */}
      </div>
    </div>
  );
};
export default Founder;
