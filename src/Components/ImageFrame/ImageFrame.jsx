import React from "react";

const ImageFrame = ({ image, name, index, videoLink }) => {
  const positionClass = index % 2 === 0 ? "left-0" : videoLink ? "right-[-180px]" : "right-0";
  const widthClass = videoLink ? "w-[calc(100%+150px)]" : "w-4/5";
  const heightClass = videoLink ? "h-[300px]" : "h-4/5";

  return (
    <div className="w-[calc(100vw-2rem)] md:w-[30%] lg:w-[35%] max-w-[500px] h-auto relative mx-[1rem] md:mx-[0] md:mr-[2rem]">
      <div className={`bg-primary500 ${widthClass} ${heightClass} absolute top-0 ${positionClass} z-0`}></div>
      {videoLink ? (
        <iframe
          src={videoLink}
          className={`w-full h-[350px] md:w-[350px] md:h-[350px] lg:w-[350px] bg-grey400 m-auto relative z-10 top-5 ${index % 2 === 0 ? "left-5" : "right-5"} md:top-[1.5rem] ${index % 2 === 0 ? "left-[1.5rem]" : "right-[1.5rem]"}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ) : (
        <img
          src={image}
          alt={name}
          className={`w-full md:w-[300px] lg:w-full h-auto bg-grey400 m-auto relative z-10 top-5 ${index % 2 === 0 ? "left-5" : "right-5"} md:top-[1.5rem] ${index % 2 === 0 ? "left-[1.5rem]" : "right-[1.5rem]"}`}
        />
      )}
    </div>
  );
};

export default ImageFrame;
