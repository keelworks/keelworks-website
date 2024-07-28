import React from "react";

const ImageFrame = ({ image, name, index }) => {
  return (
    <div className="w-[calc(100vw-2rem)] md:w-[30%] lg:w-[35%] max-w-[500px] h-auto relative mx-[1rem] md:mx-[0] md:mb-[6rem] md:mr-[2rem]">
      <div className="bg-primary500 w-4/5 h-4/5 absolute top-0 left-0 z-0"></div>
      <img
        src={image}
        alt={name}
        className={`w-full md:w-full h-auto bg-grey400 m-auto relative z-10 top-5 left-5 md:top-[1.5rem] md:left-[1.5rem] border-5`}
      />
    </div>
  );
};

export default ImageFrame;
