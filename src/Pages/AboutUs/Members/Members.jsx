import Volunteer1 from "../../../assets/images/About-Us/Thomas-G.png";
import Volunteer2 from "../../../assets/images/About-Us/Dana-S.png";
import Volunteer3 from "../../../assets/images/About-Us/Romir-P.png";
import Volunteer4 from "../../../assets/images/About-Us/Jing-M.png";
import Volunteer5 from "../../../assets/images/About-Us/Ibrahima-D.png";
import Volunteer6 from "../../../assets/images/About-Us/Aruna-G.png";

import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
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
      "Thomas founded Keelworks in 2008 (with help and encouragement from Robert Buchinski) where he applied his dream to enable upward mobility into action. Thomas has a master’s degree in education and a long career in technical writing, instructional design, and organizational development. Once a high school dropout, Thomas established the foundation to change outcomes for underachievers like himself. Thomas’s passion has been overseeing the development of foundation learning programs including learning for instructional design. He developed a comprehensive instructional design training program and has mentored hundreds of graduate instructional designers. The foundation ISD program is a laboratory for process improvement and team development. With his minimal free time, Thomas consults for organizations seeking better instructional design process for measured return on investment and more sustainable organizations. ",
    socialMediaLinks: {
      linkedin: "https://www.linkedin.com/in/thomasgarrod/",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
    },
  },

  {
    id: 2,
    name: "Dana E Smalley",
    jobTitle: "Program Manager/LX Designer and Team Lead",
    location: "Chicago, USA",

    image: Volunteer2,
    content1:
      "Dana is a seasoned instructional designer based in Chicago, holding a Master’s degree and specializing in creating accessible educational content within collaborative learning environments. Her professional journey commenced with the development of math software aimed at supporting underprivileged communities in Chicago, an initiative spearheaded by her and her godmother. Additionally, Dana has played a pivotal role in a foundation that provides scholarships and grants. With a ten-year tenure at KeelWorks Foundation, she has demonstrated expertise in needs analysis, formulating learning objectives, and developing multimedia content and project management. Dana consistently seeks out challenges that enhance her competencies in project management, simulations, and a diverse array of digital media tools, underscoring her commitment to advancing educational opportunities. ",
    socialMediaLinks: {
      linkedin: "https://www.linkedin.com/",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
    },
  },

  {
    id: 3,
    name: "Romir Patel",
    jobTitle: "Human Relations",
    location: "New York, USA",

    image: Volunteer3,
    content1:
      "Romir is the founder, CEO, and board chairman of  Helping Hands Corporation, a 501(c)(3) nonprofit. Helping Hands Corporation is a nonprofit that gives back in multiple ways including free online English classes in third world nations, connecting volunteers with local volunteer opportunities at institutions where volunteering is vital, yet volunteers are scarce, coding and cybersecurity classes, computer science based internships, and more, helping thousands of individuals in over 30 nations. Romir is currently a high school sophomore from Arizona.",
    socialMediaLinks: {
      linkedin: "https://www.linkedin.com/",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
    },
  },

  {
    id: 4,
    name: "Jing Ma",
    jobTitle: "Instructional Designer",
    location: "Beijing, China",

    image: Volunteer4,
    content1:
      "Jing Ma is a native of mainland China with a decade working in the Chinese private educational technology industry. She played a leading role at a Chinese-American start-up raising capital from angel investors and venture capitalists.Jing shares the KeelWorks mission to bring everyone to the table of plenty. She has shown a desire to help the foundation in many ways. She is personally interested in exploring how finance and technology can bring disruptive innovation to education. Her entrepreneurial spirit is especially welcome to KeelWorks. Jing is an instructional designer and has supported KeelWorks instructional design for the past two years. She has been active in KeelWorks fundraising and has led a Chinese team of volunteers/interns at KeelWorks. Jing earned her Master of Science degree in Education, with a focus on Technology Leadership from California State University, East Bay, and her Bachelor of Science degree in Business Administration from Tianjin Cheng Jian University in China.",
    socialMediaLinks: {
      linkedin: "https://www.linkedin.com/",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
    },
  },

  {
    id: 5,
    name: "Ibrahima Dieng",
    jobTitle: "Instructional Designer",
    location: "New York, USA",

    image: Volunteer5,
    content1:
      "Ibrahima Dieng is from Senegal and currently lives in Dakar. He spent the past 15 years supporting women's rights and addressing the needs of orphan boys. He shares the KeelWorks vision of a world where everyone shares a place at the table of plenty. Having known Thomas for several years and admired his foundation, he’s honored to support this foundation's extremely important mission. 'I believe in the foundation mission and I am hopeful that by helping KeelWorks, I can help my people.'",
    socialMediaLinks: {
      linkedin: "https://www.linkedin.com/",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
    },
  },

  {
    id: 6,
    name: "Aruna Ghildiyal",
    jobTitle: "Project Management Lead",
    location: "New York, USA",

    image: Volunteer6,
    content1:
      "Aruna, born and brought up in India, is an Indian American with over 17 years of experience as a leader and influencer, where she puts a focus on process improvement and compliance programs from concept to execution to ensure quality programs. She is a Corporate Lead auditor and Internal Audit Trainer for ISO 9001:2015 (Quality Management System) and ISO 14001:2015 (Environmental Management System). Aruna has a passion for communication, and an aptitude for working in cross-functional teams and multi-ethnic environments. Aruna holds a Masters Degree (M Tech) in Solid State materials, and a Master’s degree (MS) in Physics with specialization in Solid State Physics from highly reputed IITs (Indian Institute of Technology) and a Lean Six Sigma Green Belt certification from Purdue University. During her career, she has effectively managed risks, schedules, nurtured strategic customer relationships, applied mitigation strategies, and led post-mortem meetings with key stakeholders.At the Keelworks Foundation, Aruna utilizes her team player and multi-tasking capability skills to serve as the Project Management Lead. ",
    socialMediaLinks: {
      linkedin: "https://www.linkedin.com/",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
    },
  },
];

const Members = () => {
  return (
    <div className="w-screen flex justify-center items-center flex-col">
      <div className="max-w-[3000px] flex flex-col items-center overflow-hidden my-[2rem] md:mt-[4rem] md:mb-[4rem] text-[1.5rem] md:text-6xl font-bold mx-[2rem] md:mx-[4rem] lg:mx-[8rem]">
        Current Board Members
      </div>
      <div className="max-w-[1050px] h-full flex flex-col items-center justify-center gap-[2rem] mx-[4rem] ">
        {volunteers.map((volunteer, index) => {
          return (
            <div
              key={index}
              className={`w-full flex flex-col justify-center lg:justify-between items-center mb-[4rem] ${
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
              <div className="flex flex-col gap-[1rem] w-full lg:w-[45%] max-w-[500px] mt-[1.5rem]">
                <h6 className="font-bold text-[2.5rem] leading-8">
                  {volunteer.name}
                </h6>
                <h6 className="text-1 leading-8">{volunteer.jobTitle}</h6>
                <div className="flex gap-2">
                  <IoLocationOutline color="#FBBC05" size={25} />
                  <h6 className="text-1 leading-8">{volunteer.location}</h6>
                </div>
                {/* *************** Social Media Links ****************** */}
                {/* <div className="flex gap-4">
                  <a
                    href={volunteer.socialMediaLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-full "
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href={volunteer.socialMediaLinks.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-full "
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href={volunteer.socialMediaLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-full"
                  >
                    <FaInstagram />
                  </a>
                </div> */}

                <p className="text-[1rem] mt-8">{volunteer.content1}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Members;
