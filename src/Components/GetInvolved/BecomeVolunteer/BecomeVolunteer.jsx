import volunteer from '../../../assets/images/become-volunteer.png'
const BecomeVolunteer = () => {
  return (
    <div className="w-screen min-h-screen mt-[5rem] flex justify-center">
      <div className="w-full max-w-[3000px] min-h-full text-center flex flex-col items-center bg-[#F6F7F9]">
        <div className="h-1/5 flex items-center justify-center ">
          <h1 className="font-bold text-[#2E2E2E] text-[57px]">Become a Volunteer</h1>
        </div>
        <div className="w-full max-w-[1300px] flex flex-col md:flex-row h-4/5 mb-10">
          <div className='flex justify-center items-center w-full md:w-45p'>
            <div className='p-8 text-start bg-primary500 w-full text-[#2E2E2E] flex flex-col justify-center '>
              <p className='font-medium text-[25px] md:text-[48px] leading-tight'>
                Volunteers are invaluable to KeelWorks.
              </p>
              <p className='italic text-[20px] md:text-[28px] mt-10'>
                They keep our programs going. See the list of needs and sign up below to help.
              </p>
            </div>
          </div>
          <div className='flex justify-center items-center w-full md:w-1/2 h-full'>
            <img src={volunteer} alt="Donor" className='w-full h-full object-cover' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BecomeVolunteer;
