import React from "react";

const ImageFrame = ({ image, name, index }) => {
  return (
    <div className="w-[50%] m-auto md:w-[40%] h-auto relative mb-8 md:mb-16 md:mr-[6rem]">
      <div className="bg-primary500 w-full h-full absolute top-0 left-0 z-0"></div>
      <img
        src={image}
        alt={name}
        className={`w-full h-auto bg-grey400 m-auto relative z-10 top-10 border-5 left-10`}
      />
    </div>
  );
};

export default ImageFrame;
