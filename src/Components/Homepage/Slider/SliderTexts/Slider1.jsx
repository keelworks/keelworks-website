import React from "react";

const Slider1 = () => {
  return (
    <div className="w-50 flex flex-col justify-start font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-4">
      <h6>WE</h6>
      <h6>GET</h6>
      <h6>PEOPLE</h6>
      <h6>TO</h6>
      <h6 className="text-primary500 mb-9">WORK.</h6>

      <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
        <p>Globally, </p>
        <p className="text-primary500">191 million people are</p>
        <p>unemployed</p>
        <p>
          This is
          <span className="text-primary500"> untapped potential.</span>
        </p>
      </div>
    </div>
  );
};

export default Slider1;
