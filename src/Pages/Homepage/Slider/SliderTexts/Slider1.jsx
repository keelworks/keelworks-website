import React from "react";

const Slider1 = () => {
  return (
    <div className="mx-[4rem] md:mx-[4rem] lg:mx-[8rem] text-[3rem] leading-[3.5rem] md:text-[3.5rem] md:leading-[4rem] lg:text-[4rem] font-bold text-white lg:leading-[4.5rem]">
      <h6>WE</h6>
      <h6>GET</h6>
      <h6>PEOPLE</h6>
      <h6>TO</h6>
      <h6 className="text-primary500 mb-9">WORK.</h6>

      <div className="text-[1.5rem] font-bold leading-10 text-white">
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
