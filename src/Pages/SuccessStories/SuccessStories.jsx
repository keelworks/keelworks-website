import React from "react";
import donor1 from "../../assets/images/Get-Involved/Volunteer1.jpg";
import donor2 from "../../assets/images/Get-Involved/Donor2.jpg";
import ImageFrame from "../../Components/ImageFrame/ImageFrame";

const videos = [
  {
    id: 1,
    videoLink: "https://www.youtube.com/embed/S-PA1gjYexU?si=zNDI5zl-s208HwfJ",
    image: donor1,
    content1:
      '“Donating and see the impact I made in real time is not rare with Keelworks”',
  },
  {
    id: 2,
    videoLink: "https://www.youtube.com/embed/S-PA1gjYexU?si=zNDI5zl-s208HwfJ",
    image: donor2,
    content1:
      '“Getting email updates makes me feel reassured that my donations are going to a good cause”',
  },
 
];

const SuccessStories = () => {
  return (
    <div className="w-screen pt-[5rem] bg-white flex justify-center">
      <div className="w-full h-full flex flex-col items-center justify-center text-8xl overflow-hidden relative">
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-[2.5rem] leading-[3.5rem] sm:text-[3rem] md:text-[3.5rem] md:leading-[4rem] lg:text-[4.75rem] lg:leading-[5rem] font-bold text-[#2E2E2E] mt-[4rem]">
            Gallery of Video
          </h4>
          <h4 className="text-[2.5rem] leading-[3.5rem] sm:text-[3rem] md:text-[3.5rem] md:leading-[4rem] lg:text-[4.75rem] lg:leading-[5rem] font-bold text-[#2E2E2E] mb-[4rem]">
            Case Studies
          </h4>
        </div>
        <div className="w-full flex overflow-x-auto gap-[3rem] px-[4rem] md:px-[4rem] lg:px-[8rem]">
          {videos.map((volunteer, index) => (
            <div key={index} className="flex-shrink-0 w-full md:w-1/2">
              <ImageFrame
                videoLink={volunteer.videoLink}
                image={volunteer.image}
                index={index}
              />
              <div className="flex flex-col justify-center items-center gap-[1rem] w-full md:w-[75%] max-w-[500px] mt-[1.5rem] mb-[1.5rem]">
                <p className="text-[17%] mt-4 text-center">{volunteer.content1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;



