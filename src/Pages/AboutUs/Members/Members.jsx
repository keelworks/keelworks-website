import Volunteer1 from "../../../assets/images/About-Us/Thomas-G.jpg";
import Volunteer2 from "../../../assets/images/About-Us/Aruna-G.jpg";
import Volunteer3 from "../../../assets/images/About-Us/Jing-M.jpg";
import Volunteer4 from "../../../assets/images/About-Us/Ibrahima-D.jpg";

import { FaLinkedinIn } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import ImageFrame from "../../../Components/ImageFrame/ImageFrame";

const volunteers = [
  {
    id: 1,
    name: "Thomas Garrod",
    jobTitle: "Executive Director/CLO",
    location: "Oak Harbor, USA",
    image: Volunteer1,
    content1:
      "Thomas is the founding member of the board. With 25 years experience supporting organizations like Boeing, Intel, IBM, GE Digital, Humana and several others, formed the foundation vision and authored the KeelMaster and SailSpreader programs at KeelWorks. He established the core competencies curriculum for the KeelMaster program. Through this time, Thomas has shepherded hundreds of individuals across the globe from unemployment to sustaining careers.\n\nThomas founded KeelWorks in 2008 applying his dream to enable upward mobility – especially for the economically disadvantaged and for abject failures - like himself. His vision is born of his own experience as a high school dropout with seven children before he was 29. He holds a bachelor's degree in Legal Administration in addition to a master's degree in Education for Instructional design and has 14 grandchildren.\n\nThomas is also an organizational development consultant supporting learning programs for organizational enhancement and employee engagement.",
    socialMediaLinks: {
      linkedin: "https://www.linkedin.com/in/thomasgarrod/",
    },
  },
  {
    id: 2,
    name: "Aruna Ghildiyal",
    jobTitle: "Grant Acquisition Lead",
    location: "San Carlos, USA",
    image: Volunteer2,
    content1:
      "Aruna is the Grant Acquisition Lead at Keelworks Foundation, bringing over 20 years of leadership experience in process improvement, compliance, and quality management across Cleantech, Semiconductors, and Automotive industries. She is a certified Corporate Lead Auditor and Internal Audit Trainer for ISO 9001:2015 and ISO 14001:2015, with expertise in ISO 26262, and holds Lean Six Sigma Green Belt certification from Purdue University.\n\nAt Keelworks, Aruna drives the end-to-end grant process by identifying opportunities, conducting data-driven research, aligning proposals with funder priorities, and preparing compelling applications with compliance artifacts.\n\nWith advanced degrees from the Indian Institutes of Technology (IITs) in Solid State Materials and Physics, Aruna combines technical rigor with project management expertise. Known for her collaborative approach and ability to deliver results in multi-ethnic, cross-functional environments, she is dedicated to advancing Keelworks’ mission through strategic partnerships and grant success.",
    socialMediaLinks: {
      linkedin: "https://www.linkedin.com/in/aruna-gairola-ghildiyal-8660543/",
    },
  },
  {
    id: 3,
    name: "Jing Ma",
    jobTitle: "Instructional Designer",
    location: "San Francisco, USA",
    image: Volunteer3,
    content1:
      "Jing Ma is a native of mainland China with a decade working in the Chinese private educational technology industry. She played a leading role at a Chinese-American start-up raising capital from angel investors and venture capitalists.\n\nJing shares the KeelWorks mission to bring everyone to the table of plenty. She has shown a desire to help the foundation in many ways. She is personally interested in exploring how finance and technology can bring disruptive innovation to education. Her entrepreneurial spirit is especially welcome to KeelWorks.\n\nJing is an instructional designer and has supported KeelWorks instructional design for the past two years. She has been active in KeelWorks fundraising and has led a Chinese team of volunteers/interns at KeelWorks. Jing earned her Master of Science degree in Education, with a focus on Technology Leadership from California State University, East Bay, and her Bachelor of Science degree in Business Administration from Tianjin Cheng Jian University in China.",
    socialMediaLinks: {
      linkedin: "https://www.linkedin.com/in/jing-ma-001",
    },
  },
  {
    id: 4,
    name: "Ibrahima Dieng",
    jobTitle: "Instructional Designer",
    location: "Dakar, Senegal",
    image: Volunteer4,
    content1:
      "Ibrahima Dieng is from Senegal and currently lives in Dakar. He spent the past 15 years supporting women's rights and addressing the needs of orphan boys. He shares the KeelWorks vision of a world where everyone shares a place at the table of plenty. Having known Thomas for several years and admired his foundation, he’s honored to support this foundation's extremely important mission.\n\n“I believe in the foundation mission and I am hopeful that by helping KeelWorks, I can help my people.”",
    socialMediaLinks: {
      linkedin: "https://www.linkedin.com/in/ibrahima-d-9abb8921/",
    },
  },
];

const Members = () => {
  return (
    <div className="w-screen flex justify-center md:items-center flex-col">
      <div className="max-w-[3000px] text-[2rem] leading-[2.5rem] md:text-[3.5rem] md:leading-[4rem] lg:text-[4rem] lg:leading-[4.5rem] font-bold text-[#2E2E2E] mb-[4rem] mt-[4rem] mx-[1rem]">
        Current Board Members
      </div>
      <div className="max-w-[1050px] h-full flex flex-col items-center justify-center gap-[2rem] mx-[1rem] md:mx-[2rem] lg:mx-[8rem]">
        {volunteers.map((volunteer, index) => (
          <div
            key={index}
            className={`w-full flex flex-col justify-center lg:justify-between items-end mb-[4rem] ${
              index % 2 === 0
                ? "md:flex md:flex-row-reverse md:items-start"
                : "md:flex md:flex-row md:items-start"
            } gap-[4rem]`}
          >
            <ImageFrame
              image={volunteer.image}
              name={volunteer.name}
              index={index}
            />
            <div className="flex flex-col gap-[1rem] w-full md:w-[45%] max-w-[500px] mt-[1.5rem]">
              <h6 className="font-bold text-[2.5rem] leading-8">
                {volunteer.name}
              </h6>
              <h6 className="text-1 leading-8">{volunteer.jobTitle}</h6>
              <div className="flex gap-2">
                <IoLocationOutline color="#212121" size={25} />
                <h6 className="text-1 leading-8">{volunteer.location}</h6>
              </div>
              {/* *************** Social Media Links ****************** */}
              <div className="flex gap-4">
                <a
                  href={volunteer.socialMediaLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-full "
                >
                  <FaLinkedinIn />
                </a>
              </div>
              <p className="text-[1rem] whitespace-pre-line">
                {volunteer.content1}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
