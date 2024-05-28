import slide1 from "../../../assets/images/slide1.jpeg";

const Banner = () => {
  return (
    <div
      className="relative w-screen h-[calc(100vh-4rem)] bg-cover bg-center bg-no-repeat z-0"
      style={{
        backgroundImage: `url(${slide1})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 w-1/2 h-full flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-lg">
        <div className=" mx-[3rem]">
          <h1 className="text-[4rem] leading-[4.5rem] font-bold text-white">
            We Can Do <br /> This! <br />
            But Only
            <br /> With
            <span className="text-primary500">
              {" "}
              Your <br />
              Help.
            </span>
          </h1>
          <h5 className="text-[1.5rem] font-bold text-white mt-6">
            When we come together,
            <br /> we can transform lives.
          </h5>
          <div className="flex gap-6 mt-6">
            <button className="w-[116px] h-[47px] bg-primary500 rounded-full hover:bg-primary300 transition duration-[100ms] ease-linear text-[#101828] font-semibold">
              Donate
            </button>
            <button className="w-[156px] h-[47px] border-primary500 border-solid border-[2px] rounded-full hover:bg-primary300 transition duration-[100ms] ease-linear text-primary500 hover:text-fontSecondary font-semibold">
              Get involved
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
