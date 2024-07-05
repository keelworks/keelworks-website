import volunteer from "../../../assets/images/Get-Involved/Be-Volunteer.jpg";
const BecomeVolunteer = () => {
  return (
    <div className="w-screen h-full flex justify-center bg-grey200">
      <div className="w-full max-w-[3000px] min-h-full text-center flex flex-col items-center">
        <div className="max-w-[1600px] h-full my-10">
          <div className="flex items-center justify-center">
            <h1 className="font-bold text-[#2E2E2E] text-[2rem] md:text-[3.56rem] mb-[2rem]">
              Become a Volunteer
            </h1>
          </div>
          <div className="relative flex flex-col items-center mx-[2rem] lg:mx-[8rem] lg:mb-20 ">
            <div className="w-full">
              <img
                src={volunteer}
                alt="Volunteer"
                className="h-[35rem] md:w-[60rem] object-cover md:ml-[15rem]"
              />
            </div>
            <div className="absolute bottom-0 left-0 md:bottom-[-6rem] w-[90%] md:w-[30rem] bg-primary500">
              <div className="p-6 md:p-8 xl:p-12 text-start text-[#2E2E2E] flex flex-col justify-center items-center h-full">
                <p className="font-bold text-[25px] sm:text-[40px] leading-tight ">
                  Volunteers are invaluable to KeelWorks.
                </p>
                <p className="text-[20px] sm:text-[25px] mt-6 md:mt-12 leading-loose">
                  They keep our programs going. See the list of needs and sign
                  up below to help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BecomeVolunteer;
