import React from "react";
import donor1 from "../../assets/images/Get-Involved/Volunteer1.jpg";
import donor2 from "../../assets/images/Get-Involved/Donor2.jpg";
import ImageFrame from "../../Components/ImageFrame/ImageFrame";

const videos = [
  {
    id: 1,
    videoLink: "https://www.youtube.com/embed/S-PA1gjYexU?si=zNDI5zl-s208HwfJ",
    image: donor1,
    content1: 'Kathryn "Sky" Tomlinson',
  },
  {
    id: 2,
    videoLink: "https://www.youtube.com/embed/S-PA1gjYexU?si=zNDI5zl-s208HwfJ",
    image: donor2,
    content1: "Upcoming Soon",
  },
  {
    id: 3,
    videoLink: "https://www.youtube.com/embed/S-PA1gjYexU?si=zNDI5zl-s208HwfJ",
    image: donor2,
    content1: "Upcoming Soon",
  },
  {
    id: 4,
    videoLink: "https://www.youtube.com/embed/S-PA1gjYexU?si=zNDI5zl-s208HwfJ",
    image: donor2,
    content1: "Upcoming Soon",
  },
];

const SuccessStories = () => {
  return (
    <div className="w-screen pt-[5rem] bg-white flex justify-center">
      <div className="w-full max-w-[3000px] h-full flex flex-col items-center justify-center text-8xl overflow-hidden relative">
        <div className="w-full max-w-[1600px]">
          <div children className="mx-[4rem] md:mx-[4rem] lg:mx-[8rem]">
            <div className=" flex flex-col justify-center items-center">
              <h4 className="text-[2.5rem] leading-[3.5rem] sm:text-[3rem] md:text-[3.5rem] md:leading-[4rem] lg:text-[4.75rem] lg:leading-[5rem] font-bold text-[#2E2E2E] mt-[4rem]">
                Gallery of Video
              </h4>
              <h4 className="text-[2.5rem] leading-[3.5rem] sm:text-[3rem] md:text-[3.5rem] md:leading-[4rem] lg:text-[4.75rem] lg:leading-[5rem] font-bold text-[#2E2E2E] mb-[4rem]">
                Case Studies
              </h4>
            </div>
            <div className="flex gap-10 overflow-x-auto">
              {videos.map((volunteer, index) => (
                <div
                  key={index}
                  className="w-1/3 flex flex-col justify-center items-center mb-[1rem] flex-shrink-0 border-2"
                >
                  <div className="w-[calc(100vw-2rem)] md:w-[30%] lg:w-[60%] max-w-[500px] h-auto relative mx-[1rem] md:mx-[0] mb-[1rem]">
                    <div className="bg-primary500 w-4/5 h-4/5 absolute z-0"></div>
                    <img
                      src={volunteer.image}
                      alt={volunteer.content1}
                      className={`w-full md:w-[300px] lg:w-full h-auto bg-grey400 m-auto relative z-10 top-5 left-5 md:top-[1.5rem] md:left-[1.5rem]`}
                    />
                  </div>
                  <p className="text-[17%] text-center mt-10 border-2">
                    {volunteer.content1}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
