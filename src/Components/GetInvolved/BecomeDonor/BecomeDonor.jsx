import doner from '../../../assets/images/become-donor.png'

const BecomeDonor = () => {
  return (
    // <div className="w-screen min-h-screen mt-[5rem] flex justify-center">
    //   <div className="w-full max-w-[3000px] min-h-full text-center flex flex-col items-center bg-[#F6F7F9]">
    //     <div className="w-full md:w-4/5 h-full my-10 p-8 box-border">
    //       <div className="flex items-center justify-center md:mt-10">
    //         <h1 className="font-bold text-[#2E2E2E] text-[57px]">Become a Donor</h1>
    //       </div>
    //       <div className="w-full max-w-[1300px] flex flex-col mt-10 relative">
    //         <div className="flex justify-center items-center w-full h-full md:w-4/5">
    //           <img src={doner} alt="Donor" className="w-full h-full object-cover" />
    //         </div>
    //         <div className="w-full md:left-[50%] md:top-[42%] md:absolute md:bottom-[-30%] right-8 md:right-0 md:w-2/3 lg:w-2/4 xl:w-2/5 xl:bottom-[-50%] lg:left-[57%] md:p-4 xl:p-12 bg-primary500 h-4/6">
    //           <div className="text-start text-[#2E2E2E]">
    //             <p className="font-bold text-[25px] xl:text-[40px] leading-tight">
    //               The quickest and fastest way to help is by becoming a donor.
    //             </p>
    //             <p className="text-[20px] lg:text-[25px] mt-6 xl:mt-12 leading-tight">
    //               Whether it is one time, or on a regular basis, every bit helps!
    //             </p>
    //           </div>
    //         </div>
    //       </div>



    //     </div>
    //   </div>
    // </div>
    <div className="w-screen min-h-screen mt-[5rem] flex justify-center">
      <div className="w-full max-w-[3000px] min-h-full text-center flex flex-col items-center bg-grey200">
        <div className='w-[90%] md:w-[1218px] h-full md:h-[768px] xl:h-[768px] my-10'>
          <div className="flex items-center justify-center">
            <h1 className="font-bold text-[#2E2E2E] text-[40px] md:text-[57px]">Become a Donor</h1>
          </div>
          <div className='w-full md:w-[1218px] h-full sm:h-[700px] md:h-[651px] relative flex flex-col mt-10 '>
            <div className='w-full md:w-[958px] h-full md:h-[600px] flex justify-center items-center'>
              <img src={doner} alt="Donor" className="w-full h-full object-cover" />
            </div>
            <div className='absolute bottom-20 sm:bottom-0 right-0 w-[90%] md:w-[520px] lg:w-[520px] h-[auto] md:h-[400px] lg:h-[394px] bg-primary500'>
              <div className="p-6 md:p-8 xl:p-12 text-start text-[#2E2E2E] flex flex-col justify-center items-center h-full">
                <p className="font-bold text-[25px] sm:text-[40px]  leading-tight ">
                  The quickest and fastest way to help is by becoming a donor.
                </p>
                <p className="text-[20px] sm:text-[25px] mt-6 md:mt-12 leading-loose">
                  Whether it is one time, or on a regular basis, every bit helps!
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
