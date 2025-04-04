import doner from "../../../assets/images/Our-Solutions/keelwings.jpg";

const BecomeDonor = () => {
  return (
    <div className="w-screen h-full flex justify-center bg-grey200">
      <div className="w-full max-w-[3000px] min-h-full text-center flex flex-col items-center">
        <div className="max-w-[1600px] h-full mt-10 mb-[18rem] md:my-10">
          <div className="flex items-center justify-start md:justify-center">
            <h1 className="font-bold text-[#2E2E2E] text-[2rem] md:text-[3.56rem] mb-[2rem] mx-[1rem]">
              Become a Donor
            </h1>
          </div>
          <div className="relative flex flex-col items-center mx-[1rem] lg:mx-[8rem] lg:mb-20">
            <div className="w-full ">
              <img
                src={doner}
                alt="Donor"
                className="h-[35rem] md:w-[60rem] object-cover md:mr-[15rem]"
              />
            </div>
            <div className="absolute bottom-[-40%] right-0 md:bottom-[-6rem] w-[90%] md:w-[30rem] bg-primary500">
              <div className="p-6 md:p-8 xl:p-12 text-start text-[#2E2E2E] flex flex-col justify-center items-center h-full">
                <p className="font-bold text-[1.562rem] sm:text-[2.5rem]  leading-tight ">
                The most impactful way to support our cause is through a donation.
                </p>
                <p className="text-[1.25rem] sm:text-[1.562rem] mt-6 md:mt-12 leading-loose">
                Whether it’s a one-time gift or a recurring contribution, every gift helps us expand resources for our training
                programs to effectively train and connect more people to work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BecomeDonor;
