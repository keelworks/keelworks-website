import React from "react";

const ImageFrame = ({ image, name, index }) => {
  return (
    <div className="w-[75%] md:w-[30%] lg:w-[35%] max-w-[500px] h-auto relative md:mb-[6rem] md:mr-[6rem] mx-[4rem]">
      <div className="bg-primary500 w-4/5 h-4/5 absolute top-0 left-0 z-0"></div>
      <img
        src={image}
        alt={name}
        className={`w-full h-auto bg-grey400 m-auto relative z-10 top-5 left-5 md:top-10 md:left-10 border-5`}
      />
    </div>
  );
};

export default ImageFrame;
