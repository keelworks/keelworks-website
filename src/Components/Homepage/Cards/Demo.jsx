import React from 'react'

import slider1 from '../../../assets/images/card1.jpeg'
import slider2 from '../../../assets/images/card2.jpeg'
import slider3 from '../../../assets/images/card-3.jpg'

const Demo = () => {
  return (
    <div>
        <div className='flex flex-col min-h-screen bg-white w-full items-center justify-center mb-4'>
          <div className='justify-center flex p-10'>
            <p className='text-lg sm:text-3xl md:text-4xl lg:text-5xl font-extrabold '>The <span className='text-[#FBBC05] '>Keelworks </span>Solutions</p>
          </div>

          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pl-4 pr-8 '>
            <div className='overflow-hidden  relative group items-center justify-center cursor-pointer '>
              <div className='h-full w-full'>
              <img src={slider1} alt="" className='w-full h-full object-cover' />
              </div>
              <div className='intro lg:h-1/4 h-1/6 w-full sm:p-4 md:p-2 lg:p-4 text-white absolute bottom-0 group-hover:h-4/5 group-hover:bottom-0 transition-all duration-500  group-hover:cursor-pointer' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <p className='flex justify-center items-center  mt-4 lg:mt-8 md:mt-2'>
                  <span className='text-[#FBBC05] font-bold text-6xl sm:text-7xl md:text-5xl lg:text-9xl'>01</span>
                  <h1 className='font-bold text-2xl sm:text-2xl md:text-4xl lg:text-5xl ml-4'>KeelMaster</h1>
                </p>
                <p className='text-lg sm:text-xl md:text-2xl lg:text-4xl m-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:mt-10 leading-relaxed font-semibold ' style={{ lineHeight: "45px" }} >
                  A three-phase approach to support the most challenged unemployed and under-employed individuals mitigating barriers to sustainable employment.
                </p>
              </div>
            </div>
            <div className='overflow-hidden  relative group items-center justify-center cursor-pointer '>
              <div className='h-full w-full'>
              <img src={slider2} alt="" className='w-full h-full object-cover' />
              </div>
              <div className='intro lg:h-1/4 h-1/6 w-full sm:p-4 md:p-2 lg:p-4 text-white absolute bottom-0 group-hover:h-4/5 group-hover:bottom-0 transition-all duration-500  group-hover:cursor-pointer' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                 <p className='flex justify-center items-center mt-4 lg:mt-8 md:mt-2'>
                  <span className='text-[#FBBC05] font-bold text-6xl sm:text-7xl md:text-5xl lg:text-9xl'>02</span>
                  <h1 className='font-bold text-2xl sm:text-2xl md:text-4xl lg:text-5xl ml-4'>KeelMate</h1>
                </p>
                <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl m-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:mt-10 leading-relaxed font-semibold' style={{ lineHeight: "45px" }}>
                  Designed to bridge the gap for participants with insufficient education and/or experience in our supported fields; better positioning them for employment and/or growth.
                </p>
              </div>
            </div>
            <div className='overflow-hidden  relative group items-center justify-center cursor-pointer '>
              <div className='h-full w-full'>
              <img src={slider3} alt="" className='w-full h-full object-cover' />
              </div>
              <div className='intro lg:h-1/4 h-1/6 w-full sm:p-4 md:p-2 lg:p-4 text-white absolute bottom-0 group-hover:h-4/5 group-hover:bottom-0 transition-all duration-500  group-hover:cursor-pointer' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
              <p className='flex justify-start items-center  mt-4 lg:mt-8 md:mt-2'>
                  <span className='text-[#FBBC05] font-bold text-6xl sm:text-7xl md:text-5xl lg:text-9xl '>03</span>
                  <h1 className='font-bold text-2xl sm:text-2xl md:text-4xl lg:text-5xl ml-4'>KeelWings</h1>
                </p>
                <p className='text-lg  sm:text-xl md:text-2xl lg:text-3xl m-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:mt-10  font-semibold leading-relaxed' style={{ lineHeight: "45px" }}>
                  Assists graduates breakthrough the “lack of experience” conundrum while providing them valuable employment coaching.
                </p>
              </div>
            </div>
           
          </div>

        </div>

    </div>
  )
}

export default Demo