import React from "react";

const Slider1 = () => {
  return (
    <div className="text-[2.5rem] mx-[2rem] md:mx-[4rem] lg:mx-[2rem] [@media(min-width:1100px)]:mx-[8rem] md:text-[3.5rem] md:leading-[4rem] custombp:text-[2.5rem]/[2.5rem] custombp2:text-[4rem]/[4.5rem] lg:text-[4rem] font-bold text-white lg:leading-[4.5rem]">
      <h6>WE</h6>
      <h6>GET</h6>
      <h6>PEOPLE</h6>
      <h6>TO</h6>
      <h6 className="text-primary500 mb-9">WORK.</h6>

      <div className="text-[1rem] leading-6 md:text-[1.5rem] font-bold md:leading-10 text-white">
        <p>Globally, </p>
        <p className="text-primary500">
          191 million people
          <span className="text-white"> are</span>
        </p>
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
