import React, { useState } from "react";
import Sky from "../../assets/images/Success-Stories/SkyVideo.jpg";
import Sharon from "../../assets/images/Success-Stories/Sharon.jpg";
import upComing from "../../assets/images/Success-Stories/UpComing.jpg";
import { IoIosCloseCircle } from "react-icons/io";
import { IoPlayCircleOutline } from "react-icons/io5";

import { IoIosPlayCircle } from "react-icons/io";

const videos = [
  {
    id: 1,
    videoLink: "https://youtu.be/sOkDxZtSs_U?si=gf7Hj8TJCYtY_ymc",
    image: Sharon,
    content: "Sharon",
    duration: "1:32",
  },
  {
    id: 2,
    videoLink: "https://www.youtube.com/embed/FEDR3c7Rwno?si=imSpcChsOqi1-dza",
    image: Sky,
    content: 'Kathryn "Sky" Tomlinson',
    duration: "1:52",
  },
  {
    id: 3,
    videoLink: "",
    image: upComing,
    content: "",
  },
  {
    id: 4,
    videoLink: "",
    image: upComing,
    content: "",
  },
];

const SuccessStories = () => {
  const [windowopen, setWindowOpen] = useState(false);
  const [videoIndex, setVideoIndex] = useState();
  return (
    <div className="w-screen pt-[5rem] bg-white flex justify-center">
      <div className="w-full max-w-[3000px] h-full flex flex-col items-center justify-center text-8xl overflow-hidden relative">
        <div className="w-full max-w-[1600px]">
          <div children className="mx-[1rem] md:mx-[2rem] lg:mx-[8rem]">
            <div className=" flex flex-col justify-center items-start md:items-center">
              <h4 className="text-[2rem] leading-[2rem] md:text-[3.5rem] md:leading-[3.5rem] lg:text-[4rem] lg:leading-[4.5rem] font-bold text-[#2E2E2E] mt-[4rem] lg:mt-[2rem]">
                Gallery of Video
              </h4>
              <h4 className="text-[2rem] leading-[3.5rem] md:text-[3.5rem] md:leading-[4rem] lg:text-[4rem] lg:leading-[4.5rem] font-bold text-[#2E2E2E] mb-[2rem] lg:mt-[0]">
                Case Studies
              </h4>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start gap-10 md:overflow-x-auto mb-10">
              {videos.map((volunteer, index) => (
                <div
                  key={index}
                  className="w-full md:w-[350px] lg:w-1/3 flex flex-col justify-center items-center md:justify-center md:items-start lg:items-center md:flex-shrink-0"
                >
                  <div className="w-[calc(100vw-1rem)] mr-4 md:mr-0 md:w-[60%] lg:w-[60%] max-w-[500px] relative md:mx-[0] mb-[1rem]">
                    <div className="bg-primary500 w-4/5 md:w-[85%] h-4/5 absolute z-0"></div>
                    <div
                      className="relative md:w-[300px] lg:w-full z-10 top-5 left-5 md:top-[1.5rem] md:left-[1.5rem] cursor-pointer"
                      onClick={() => {
                        setVideoIndex(index);
                        setWindowOpen(!windowopen);
                      }}
                    >
                      <img
                        src={volunteer.image}
                        alt={volunteer.content}
                        className="w-full"
                      />
                      {volunteer.content && (
                        <IoIosPlayCircle className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-primary500 text-[3rem] hover:text-grey200 transition duration-[150ms] ease-linear z-10" />
                      )}
                      {volunteer.duration && (
                        <span className="absolute bottom-4 right-4 w-[50px] h-[30px] bg-black rounded-full text-[1rem] text-gray-50 flex justify-center items-center">
                          {volunteer.duration}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-[1.5rem] md:text-[1.2rem] font-bold my-8 lg:ml-[2.5rem] self-start md:self-center">
                    {volunteer.content}
                  </p>
                </div>
              ))}
              {windowopen && videos[videoIndex].content && (
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-80 backdrop-blur-sm z-10">
                  <div className="absolute top-[50%] left-[25%] md:left-[50%] translate-x-[-50%] translate-y-[-50%] w-[50%] h-[50%]">
                    <iframe
                      className="w-screen md:w-full md:h-full"
                      width="560"
                      height="315"
                      src={videos[videoIndex].videoLink}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>

                    <button
                      className="absolute top-[-5%] right-[-100%] md:top-[-40px] md:right-[-40px] z-50"
                      onClick={() => {
                        setWindowOpen(!windowopen);
                      }}
                    >
                      <IoIosCloseCircle className="text-primary500 text-[2.5rem] hover:text-primary300 transition duration-[150ms] ease-linear" />
                    </button>
                  </div>
                </div>
              )}
            </div>
            <p className="text-[1.2rem] md:text-[1rem] text-center text-[#646464] italic mb-[2.5rem] md:mb-10">
              Stay tuned for more videos!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
