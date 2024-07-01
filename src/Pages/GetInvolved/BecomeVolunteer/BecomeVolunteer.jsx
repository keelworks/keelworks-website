import volunteer from '../../../assets/images/become-volunteer.png'
const BecomeVolunteer = () => {
  return (
    // <div className="w-screen min-h-screen mt-[5rem] flex justify-center">
    //   <div className="w-full max-w-[3000px] min-h-full text-center flex flex-col items-center bg-[#F6F7F9]">
    //     <div className="h-1/5 flex items-center justify-center ">
    //       <h1 className="font-bold text-[#2E2E2E] text-[57px]">Become a Volunteer</h1>
    //     </div>
    //     <div className="w-full max-w-[1300px] flex flex-col md:flex-row h-4/5 mb-10">
    //       <div className='flex justify-center items-center w-full md:w-45p'>
    //         <div className='p-8 text-start bg-primary500 w-full text-[#2E2E2E] flex flex-col justify-center '>
    //           <p className='font-medium text-[25px] md:text-[48px] leading-tight'>
    //             Volunteers are invaluable to KeelWorks.
    //           </p>
    //           <p className='italic text-[20px] md:text-[28px] mt-10'>
    //             They keep our programs going. See the list of needs and sign up below to help.
    //           </p>
    //         </div>
    //       </div>
    //       <div className='flex justify-center items-center w-full md:w-1/2 h-full'>
    //         <img src={volunteer} alt="Donor" className='w-full h-full object-cover' />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="w-screen min-h-screen mt-[5rem] flex justify-center bg-grey200">
    <div className="w-full max-w-[3000px] min-h-full text-center flex flex-col items-center">
      <div className="w-[90%] md:w-[1302px] h-full md:h-[717px] xl:h-[768px] my-10 ">
        <div className="flex items-center justify-center">
          <h1 className="font-bold text-[#2E2E2E] text-[40px] md:text-[57px]">Become a Volunteer</h1>
        </div>
        <div className="w-full  h-auto sm:h-[700px] md:h-[600px]  flex flex-row md:flex-row mt-10  justify-end  items-end relative">          
          <div className='h-[600px] '>
            <img src={volunteer} alt="Volunteer" className="w-full h-full object-cover" />
            </div>
            <div className='absolute bottom-0 md:top-[30%] left-0 w-[90%] md:w-[550px] lg:w-[500px] h-[auto] md:h-[400px] lg:h-[450px] bg-primary500 '>
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
