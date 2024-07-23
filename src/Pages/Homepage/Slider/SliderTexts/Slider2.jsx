import React from "react";

const Slider2 = () => {
  return (
    <div className="text-[2.5rem] mx-[2rem] md:mx-[4rem] lg:mx-[2rem] [@media(min-width:1100px)]:mx-[8rem] md:text-[3.5rem] md:leading-[4rem] lg:text-[4rem] font-bold text-white lg:leading-[4.5rem]">
      <h6>
        {" "}
        KEEL<span className="text-primary500">WINGS</span>{" "}
      </h6>

      <h6 className="mb-9">PROGRAM</h6>

      <div className="text-[1rem] leading-6 md:text-[1.5rem] font-bold md:leading-10 text-white">
        <p>
          With job experience and resume/ portfolio support students get to
          work. More than
          <span className="text-primary500"> 150 participants </span>
          are active in the program at any given time.
        </p>
      </div>
    </div>
  );
};

export default Slider2;
