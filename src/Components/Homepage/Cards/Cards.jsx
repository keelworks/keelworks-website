import slider1 from "../../../assets/images/card1.jpeg";
import slider2 from "../../../assets/images/card2.jpg";
import slider3 from "../../../assets/images/card3.jpg";
import greaterImg from "../../../assets/images/_.png";
const Cards = () => {
  return (
    <div className="">
      <div className="w-full bg-grey200">
        <div className="lg:mx-[8rem] sm:mx-[4rem] mx-[4rem]">
          <p className="lg:text-[2.68rem] md:text-[2.25rem] sm:text-[1.875rem] text-[1.5rem] font-bold leading-relaxed lg:pt-[8rem] sm:pt-[6rem] pt-[4rem] ">
            Poverty begets poverty. Affluence begets affluence.
            When we help <span className="text-primary500 "> ONE </span>person
            to stable employment, we help families, communities, and nations
          </p>
        </div>
        <div className="w-full">
          <p className="lg:text-[2.68rem] md:text-[2.25rem] sm:text-[1.875rem] text-[1.5rem] font-bold leading-relaxed lg:mx-[8rem] sm:mx-[4rem] mx-[4rem] pt-10 lg:pb-[8rem] sm:pb-[6rem] pb-[4rem]">
            Globally,{" "}
            <span className="text-primary500">191 million people </span> are
            unemployed.
            <br />
            This is{" "}
            <span className="text-primary500">untapped potential.</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col bg-white w-full lg:h-screen ">
        <div className="justify-center flex pt-[3.5rem] pb-10  ">
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold ml-6 lg:ml-0 md:ml-0">
            The <span className="text-primary500 ">KeelWorks </span>Solutions
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  sm:gap-2 gap-6 lg:h-4/5">
          <div className="overflow-hidden sm:m-2 md:m-4 lg:m-4 relative group  m-2 ">
            <img src={slider1} alt="" className="w-full h-full object-fit" />
            <div className="intro h-1/6 w-full sm:p-2 md:p-2 lg:p-2 text-white absolute bottom-0 lg:group-hover:h-4/5  md:group-hover:h-3/4 group-hover:h-3/5 group-hover:bottom-0 transition-all duration-500 group-hover:cursor-pointer backdrop-blur-lg bg-black bg-opacity-60">
              <div className="flex items-center justify-center" style={{ margin: '20px 0' }}>
                <div className="flex items-center justify-start w-full">
                  <h1 className="text-primary500 font-bold text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl ml-4">
                    KeelMaster
                  </h1>
                  <img src={greaterImg} alt="" className="mx-8 lg:w-6 lg:h-6 md:w-6 md:h-6 h-5 w-5 sm:w-6 sm:h-6 xl:w-8 xl:h-8" />
                </div>
              </div>
              <div className="text-2xl  xl:text-3xl font-medium  m-4  opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:mt-2 xl:leading-loose sm:leading-relaxed lg:leading-loose md:leading-loose">
                A three-phase approach to support the most challenged unemployed and under-employed individuals mitigating barriers to sustainable employment.
              </div>
            </div>


          </div>
          <div className="overflow-hidden  sm:m-2 md:m-4 lg:m-4   relative group m-2">
            <img src={slider2} alt="" className="w-full h-full object-cover" />
            <div className="intro h-1/6 w-full sm:p-2 md:p-2 lg:p-2 text-white absolute bottom-0 lg:group-hover:h-4/5  md:group-hover:h-3/4 group-hover:h-3/5 group-hover:bottom-0 transition-all duration-500 group-hover:cursor-pointer backdrop-blur-lg bg-black bg-opacity-60">
              <div className="flex items-center justify-center" style={{ margin: '20px 0' }}>
                <div className="flex items-center justify-start w-full">
                  <h1 className="text-primary500 font-bold text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl ml-4">
                    KeelMate
                  </h1>
                  <img src={greaterImg} alt="" className="mx-8  lg:w-6 lg:h-6 md:w-6 md:h-6 h-5 w-5 sm:w-6 sm:h-6 xl:w-8 xl:h-8" />
                </div>
              </div>
              <div className="text-2xl  xl:text-3xl font-medium  m-4  opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:mt-2 xl:leading-loose sm:leading-relaxed lg:leading-loose md:leading-loose">
                Designed to bridge the gap for participants with insufficient
                education and/or experience in our supported fields; better
                positioning them for employment and/or growth.
              </div>
            </div>
          </div>
          <div className="overflow-hidden  sm:m-2 md:m-4 lg:m-4   relative group m-4">
            <img src={slider3} alt="" className="w-full h-full object-fit" />
            <div className="w-full h-1/6 sm:p-4 md:p-2 lg:p-2 text-white absolute bottom-0 lg:group-hover:h-4/5  group-hover:h-3/5 md:group-hover:h-3/5 group-hover:bottom-0 transition-all duration-500 group-hover:cursor-pointer backdrop-blur-lg bg-black bg-opacity-60 ">
              <div className="flex items-center justify-center" style={{ margin: '20px 0' }}>
                <div className="flex items-center justify-start w-full">
                  <h1 className="text-primary500 font-bold text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl ml-4">
                    KeelWings
                  </h1>
                  <img src={greaterImg} alt="" className="mx-8 lg:w-6 lg:h-6 md:w-6 md:h-6 h-5 w-5 sm:w-6 sm:h-6 xl:w-8 xl:h-8" />
                </div>
              </div>
              <div className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-medium m-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:mt-4 xl:leading-loose sm:leading-relaxed lg:leading-loose md:leading-loose">
                Assists graduates breakthrough the “lack of experience” conundrum while providing them valuable employment coaching.
              </div>
            </div>


          </div>
        </div>
      </div>
      {/* ********************* Text at the Bottom of Cards ********************* */}
      <div className="w-full bg-grey200">
        <div className="mx-[4rem] md:mx-[8rem]">
          <p className="text-[2rem] font-bold leading-relaxed py-[8rem] md:text-[2.68rem]">
            If you believe in our mission to get people to work, we need your
            support.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Cards;
