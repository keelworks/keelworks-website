import founderImage from "../../../assets/images/About-Us/Thomas-G.png";
import founderBanner from "../../../assets/images/About-Us/Founder-Banner.png";

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
      <div className="w-full max-w-[3000px] h-full overflow-hidden relative bg-white flex flex-col justify-center items-center border-2 border-purple-500">
        <div className="flex items-center justify-start flex-col xl:h-full w-full h-full mx-[4rem] lg:mx-[8rem] border-2 border-purple-500">
          <h4 className="text-[3rem] leading-[3.5rem] md:text-[3.5rem] md:leading-[4rem] lg:text-[4rem] lg:leading-[4.5rem] font-bold text-[#2E2E2E] my-[4rem]">
            Founder
          </h4>
          <div className="w-[75%] flex items-start justify-center gap-[5rem]">
            <img
              src={founderImage}
              alt={founderInfo[0].name}
              className="w-[75%] md:w-[30%] lg:w-[65%] max-w-[400px]"
            />
            <div>
              <div className="w-[8rem] h-[1.1rem] bg-primary500"></div>
              <h4 className="text-[4rem] leading-[4rem] font-bold mt-[2rem]">
                {founderInfo[0].name}
              </h4>
              <h4 className="text-[4rem] leading-[4rem] font-bold">
                {founderInfo[0].lastName}
              </h4>
              <p className="mt-[2rem]">{founderInfo[0].content1}</p>
              <p className="mt-[2rem]">{founderInfo[0].content2}</p>
            </div>
          </div>
        </div>
        <img
          src={founderBanner}
          alt="Three men"
          className="w-full object-cover my-[6rem]"
        />
      </div>
    </div>
  );
};
export default Founder;
