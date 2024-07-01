import volunteer from '../../../assets/images/become-volunteer.png'
const BecomeVolunteer = () => {
  return (
    

    <div className="w-screen h-[calc(100vh-5rem)] mt-[5rem] flex font-Inter">
    <div className="w-full max-w-[3000px] h-full overflow-hidden  bg-grey200 flex justify-center items-center">
      <div className="flex items-center justify-start lg:justify-center flex-col xl:w-3/4 xl:h-full w-full h-full mx-[4rem] lg:mx-[8rem]">
        <div className='mt-4'>
          <h1 className="font-bold text-[#2E2E2E] text-[40px] md:text-[57px]">Become a Volunteer</h1>
        </div>
        <div className='w-full h-full flex flex-col lg:flex-row lg:justify-end mt-10 items-center lg:items-end relative  '>        
        <div className='w-full h-full xl:h-auto max-w-[958px]  flex items-center mx-[4rem]'>
            <img src={volunteer} alt="Volunteer" className="w-full h-full object-cover" />
            </div>
            <div className='absolute bottom-20 sm:bottom-0 lg:top-64 left-0 w-[90%] md:w-[520px] lg:w-[520px]  md:h-[400px] lg:h-[394px] bg-primary500'>
              <div className="p-6 md:p-8 xl:p-8 text-start text-[#2E2E2E] flex flex-col justify-center items-center h-full">
                <p className="font-bold text-[25px] sm:text-[40px] leading-tight ">
                Volunteers are invaluable to KeelWorks.
                </p>
                <p className="text-[20px] sm:text-[28px] mt-6 md:mt-14 leading-loose">
                They keep our programs going. See the list of needs and sign up below to help.
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
