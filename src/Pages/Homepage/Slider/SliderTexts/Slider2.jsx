import React from "react";

const Slider2 = () => {
  return (
    <div className="text-[2.5rem] mx-[2rem] md:mx-[1rem] lg:mx-[2rem] [@media(min-width:1100px)]:mx-[8rem] md:text-[2.5rem]/[3rem] custombp:text-[2.5rem]/[2.5rem] custombp2:text-[3.5rem]/[4rem] custombp3:text-[4rem]/[4.5rem] lg:text-[4rem]/[4.5rem] font-bold text-white">
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
