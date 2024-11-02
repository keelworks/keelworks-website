import React from 'react'
import { RiDoubleQuotesR } from "react-icons/ri";

const DonateNow = () => {
  return (
    <div className="relative flex flex-col items-center justify-center p-[3rem] bg-white  rounded-lg shadow-md overflow-hidden mb-8">

      <div style={{
          background: 'linear-gradient(to left, #69A5FF, #ffffff)',
        }} 
      className="absolute -left-40  w-[22rem] h-80  rounded-full opacity-30"></div>

   
      <div style={{
          background: 'linear-gradient(to right, #69A5FF, #ffffff)',
        }} 
      className="absolute -right-20 -top-1/4 w-[15rem] h-[15rem] rounded-full opacity-30"></div>

      <div className="text-blue-400 text-6xl font-bold ">
        <RiDoubleQuotesR/>
      </div>

    
      <div className="text-2xl text-blue-900 font-semibold mb-8 text-center">
        YOUR SUPPORT<br/> MAKES A DIFFERENCE
      </div>
      <button className="bg-red-600 text-white font-bold py-2 px-6 rounded shadow hover:bg-red-700 transition duration-300">
        Donate Now
      </button>
    </div>
  )
}

export default DonateNow
