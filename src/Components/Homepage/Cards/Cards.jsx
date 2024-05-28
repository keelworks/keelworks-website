
import slider1 from '../../../assets/images/card1.jpeg'
import slider2 from '../../../assets/images/card2.jpeg'
import slider3 from '../../../assets/images/card3.png'
const Cards = () => {
  return (
    <div>
      {/* <div className="bg-orange-300 flex items-center justify-center pt-10 pb-10 text-8xl font-bold"> */}
          <div className='w-full bg-[#F4F5F9] text-start flex flex-col items-center'>
      <div className='w-4/5  justify-center '>
        <p className='text-3xl font-bold p-6 leading-relaxed  mt-20 '>Poverty begets poverty. Affluence begets affluence. <br />When we <span className='text-[#FBBC05] '> help one person</span> help one person to stable employment, we help <br />families, communities, and nations</p></div>
      <div className='w-4/5  justify-center'>
        <p className='text-3xl font-bold p-6 leading-relaxed mb-20'>Globally, <span className='text-[#FBBC05]'>191 million people </span  > 191 million people are unemployed.<br />
          This is <span className='text-[#FBBC05]'> untapped potential.</span></p>

      </div>


    {/* </div> */}
      </div>
      <div className='w-full bg-white'>
        <div className='flex flex-col h-screen '>
          <div className='justify-center flex p-10  h-7 sm:h-1/6 lg:h-1/6'>
            <p className='text-lg sm:text-3xl md:text-4xl lg:text-5xl font-extrabold '>The <span className='text-[#FBBC05] '>Keelworks </span>Solutions</p>
          </div>

          <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6  h-full md:h-4/5 lg:h-4/5 '>
            <div className='overflow-hidden  relative group m-2  sm:m-4 md:m-4 lg:m-4  h-full'>
              <img src={slider1} alt="" className='w-full h-full object-cover' />
              <div className='intro h-1/4 w-full sm:p-4 md:p-4 lg:p-4 text-white absolute bottom-0 group-hover:h-4/5 group-hover:bottom-0 transition-all duration-500  group-hover:cursor-pointer' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <p className='flex justify-start items-center lg:mt-8 md:mt-2'>
                  <span className='text-[#FBBC05] font-bold text-6xl sm:text-7xl md:text-5xl lg:text-9xl'>01</span>
                  <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl ml-4'>KeelMaster</h1>
                </p>
                <p className='text-lg sm:text-xl md:text-2xl lg:text-4xl m-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:mt-10 leading-relaxed font-semibold' style={{lineHeight:"45px"}}>
                  A three-phase approach to support the most challenged unemployed and under-employed individuals mitigating barriers to sustainable employment.
                </p>
              </div>
            </div>
            <div className='overflow-hidden  h-full lg:h-full  relative group m-4'>
              <img src={slider2} alt="" className='w-full h-full object-cover' />
              <div className=' h-1/4 w-full sm:p-4 md:p-4 lg:p-4  text-white absolute bottom-0 group-hover:h-4/5 group-hover:bottom-0 transition-all duration-500 group-hover:cursor-pointer' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <p className='flex justify-start items-center lg:mt-8 md:mt-2'>
                  <span className='text-[#FBBC05] font-bold text-6xl sm:text-7xl md:text-5xl lg:text-9xl'>02</span>
                  <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl ml-4'>KeelMate</h1>
                </p>
                <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl m-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:mt-10 leading-relaxed font-semibold' style={{lineHeight:"45px"}}>
                  Designed to bridge the gap for participants with insufficient education and/or experience in our supported fields; better positioning them for employment and/or growth.
                </p>
              </div>
            </div>
            <div className='overflow-hidden lg:h-full  relative group m-4'>
              <img src={slider3} alt="" className='w-full h-full object-cover' />
              <div className=' h-1/4 w-full sm:p-4 md:p-4 lg:p-4 text-white absolute bottom-0 group-hover:h-4/5 group-hover:bottom-0 transition-all duration-500 group-hover:cursor-pointer ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <p className='flex justify-start items-center lg:mt-8 md:mt-2'>
                  <span className='text-[#FBBC05] font-bold text-6xl sm:text-7xl md:text-5xl lg:text-9xl '>03</span>
                  <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl ml-4'>KeelWings</h1>
                </p>
                <p className='text-lg  sm:text-xl md:text-2xl lg:text-3xl m-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:mt-10  font-semibold leading-relaxed' style={{lineHeight:"45px"}}>
                  Assists graduates breakthrough the “lack of experience” conundrum while providing them valuable employment coaching.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
      {/* <div className="w-screen p-4 bg-slate-100">
        <div className="flex justify-between">
          <div className="bg-white h-[20rem] rounded-lg shadow-lg flex-1 mx-2">
            <h3 className="text-xl font-bold mb-2">Card 1</h3>
          </div>
          <div className="bg-white h-[20rem] rounded-lg shadow-lg flex-1 mx-2">
            <h3 className="text-xl font-bold mb-2">Card 2</h3>
          </div>
          <div className="bg-white h-[20rem] rounded-lg shadow-lg flex-1 mx-2">
            <h3 className="text-xl font-bold mb-2">Card 3</h3>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default Cards;
