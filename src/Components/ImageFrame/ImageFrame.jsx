import React, { useState } from "react";

const ImageFrame = ({ image, name, index, videoLink }) => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleImageClick = () => {
    if (videoLink) {
      setIsVideoVisible(true);
    }
  };

  const handleCloseVideo = () => {
    setIsVideoVisible(false);
  };

  const positionClass = index % 2 === 0 ? "left-[1.5rem]" : "right-[1.5rem]";

  return (
    <div className="relative w-[70%] h-[70%] justify-center items-center">
      <div className={`bg-primary500 absolute top-0 w-full h-full z-0`}></div>
      <img
        src={image}
        alt={name}
        onClick={handleImageClick}
        className={`cursor-pointer w-full h-full relative z-10 top-[1.5rem] ${positionClass} bg-grey400`}  // The bg-grey400 is for the background color for GetInvolved Page-Volunteers Say
      />
      {isVideoVisible && videoLink && (
        <div 
          className={`absolute top-[1.5rem]  ${positionClass} w-full h-full flex items-center justify-center z-20 bg-black bg-opacity-75`}
        >
          <button
            onClick={handleCloseVideo}
            className="absolute top-4 right-4 text-white bg-gray-700 rounded-full px-2 py-1 text-lg"
          >
            X
          </button>
          <iframe
            src={videoLink}
            className="w-full h-full"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default ImageFrame;


