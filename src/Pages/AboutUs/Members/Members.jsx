import Volunteer1 from "../../../assets/images/About-Us/Thomas-G.jpg";
import Volunteer2 from "../../../assets/images/About-Us/Aruna-G.jpg";
import Volunteer3 from "../../../assets/images/About-Us/Jing-M.jpg";
import Volunteer4 from "../../../assets/images/About-Us/Ibrahima-D.jpg";
import Volunteer5 from "../../../assets/images/About-Us/Priya-S.jpg";
import Volunteer6 from "../../../assets/images/About-Us/Sonali.jpg"; // ✅ Sonali
import Volunteer7 from "../../../assets/images/About-Us/Fredi-S.png";
import Volunteer8 from "../../../assets/images/About-Us/Romir-P1.jpg";

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
      "Thomas founded Keelworks in 2008 (with help and encouragement from Robert Buchinski) where he applied his dream to enable upward mobility into action. Thomas has a master's degree in education and a long career in technical writing, instructional design, and organizational development. Once a high school dropout, Thomas established the foundation to change outcomes for underachievers like himself. Thomas's passion has been overseeing the development of foundation learning programs including learning for instructional design. He developed a comprehensive instructional design training program and has mentored hundreds of graduate instructional designers. The foundation ISD program is a laboratory for process improvement and team development. With his minimal free time, Thomas consults for organizations seeking better instructional design process for measured return on investment and more sustainable organizations.",
    socialMediaLinks: {
      linkedin: "https://www.linkedin.com/in/thomasgarrod/",
    },
  },
  {
    id: 2,
    name: "Aruna Ghildiyal",
    jobTitle: "Project Management Lead",
    location: "San Carlos, USA",
    image: Volunteer2,
    content1:
      "Aruna is the Grant Acquisition Lead at Keelworks Foundation, bringing over 20 years of leadership experience in process improvement, compliance, and quality management across Cleantech, Semiconductors, and Automotive industries. She is a certified Corporate Lead Auditor and Internal Audit Trainer for ISO 9001:2015 and ISO 14001:2015, with expertise in ISO 26262, and holds Lean Six Sigma Green Belt certification from Purdue University.At Keelworks, Aruna drives the end-to-end grant process by identifying opportunities, conducting data-driven research, aligning proposals with funder priorities, and preparing compelling applications with compliance artifacts. With advanced degrees from the Indian Institutes of Technology (IITs) in Solid State Materials and Physics, Aruna combines technical rigor with project management expertise. Known for her collaborative approach and ability to deliver results in multi-ethnic, cross-functional environments, she is dedicated to advancing Keelworks’ mission through strategic partnerships and grant success",
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
      "Jing Ma is a native of mainland China with a decade of experience in the Chinese private educational technology industry. She played a leading role at a Chinese-American start-up raising capital from angel investors and venture capitalists. Jing shares the KeelWorks mission to bring everyone to the table of plenty. She is personally interested in how finance and technology can bring disruptive innovation to education. Her entrepreneurial spirit is especially welcome at KeelWorks. Jing earned her M.S. in Education (Technology Leadership) from California State University, East Bay, and a B.S. in Business Administration from Tianjin Cheng Jian University.",
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
      "Ibrahima Dieng is from Senegal and currently lives in Dakar. He spent the past 15 years supporting women's rights and addressing the needs of orphan boys. He shares the KeelWorks vision of a world where everyone shares a place at the table of plenty. Having known Thomas for several years and admired his foundation, he’s honored to support this foundation's extremely important mission. “I believe in the foundation mission and I am hopeful that by helping KeelWorks, I can help my people.”",
    socialMediaLinks: {
      linkedin: "https://www.linkedin.com/in/ibrahima-dieng-9abb8921/",
    },
  },
  {
    id: 5,
    name: "Priya Sharma",
    jobTitle: "Project Management Lead",
    location: "USA",
    image: Volunteer5,
    content1:
      "Priya Sharma is an experienced strategic program/product delivery leader with a passion for continuous improvement, learning and growing people. Keelwork’s mission aligns with her personal purpose in life, which is at the intersection of education/service and community. With 25 years experience in energy, financial services and healthcare program delivery, the goal is to work on strategy and operations at KeelWorks targeting volunteer growth and organization expansion. Priya has been instrumental in reforming and streamlining the organizational structure, helping us identify and place leaders, and holding them accountable. She has made our programs more productive.",
    socialMediaLinks: {
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    id: 6,
    name: "Sonali Ramaiah",
    jobTitle: "Director - Human Resources & Board Member",
    location: "Illinois, USA",
    image: Volunteer6,
    content1:
      "Senior Level Human Resources Thought Leader, Business Transformation and Change Strategist with significant experience in enabling businesses for decision-making, driving outcome-focused people strategies and an inclusive organizational culture, resulting in strong Employer Brand, a Performance Oriented Workforce and Accountable Leadership as well as sustained business growth. A highly experienced leader with deep expertise in matrix organizations, spanning Engineering, Technology, Services and non-profit sectors, having led HR strategy and transformation. Skilled in navigating complex global environments, working with C-suite executives, regional leadership, and cross-functional teams across the US, Europe, the Middle East, China, and India to drive workforce strategies that scale. Recognized for successfully delivering the People Agenda as a strategic business partner, leveraging HR analytics, digital tools, and predictive insights to optimize workforce performance. Expertise in organizational transformation, change leadership, and leadership coaching, ensuring seamless integration of business and people strategies during high-growth, restructuring, and change-driven environments. Adept at navigating ambiguity and complexity, translating challenges into actionable insights and strategic solutions. Proactively builds high-impact engagements, coaching senior leaders and managers to apply data-driven, solution-oriented approaches, ensuring agility, business continuity, and long-term talent sustainability.",
    socialMediaLinks: {
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    id: 7,
    name: "Fredimanuel Seshie",
    jobTitle: "Executive Assistant",
    location: "Maryland, USA",
    image: Volunteer7,
    content1:
      "Fredi has consistently demonstrated exceptional dedication and tireless effort as an Executive Assistant for the KeelWorks Foundation. His significant contributions to operations management, hiring and recruitment processes, volunteer coordination, and human resources alongside of being a secretary for KeelWorks, greatly expanding the role of an Executive Assistant.Fredi's commitment to KeelWorks is evident through his unwavering support and willingness to assume additional responsibilities. He has frequently taken on tasks typically handled by the Executive Director and has adeptly represented the Executive Director in meetings when necessary.As a constant source of innovative ideas, Fredi continuously offers valuable suggestions for the improvement of KeelWorks. He actively seeks and shares feedback from members, ensuring that the foundation remains responsive to the needs and concerns of its community.As a board member, Fredi aims to provide the board with valuable insights into the inner workings of KeelWorks, share volunteer feedback and concerns, and serve as a consistent source of constructive feedback. His passion and dedication will be a tremendous asset to our board, helping to propel the KeelWorks Foundation forward.",
    socialMediaLinks: {
      linkedin: "https://www.linkedin.com/in/fredimanuel-s-612390301/",
    },
  },
  {
    id: 8,
    name: "Romir Patel",
    jobTitle: "Human Relations",
    location: "Gilbert, USA",
    image: Volunteer8,
    content1:
      "Romir is the founder, CEO, and board chairman of Helping Hands Corporation, a 501(c)(3) nonprofit. Helping Hands Corporation gives back in multiple ways including free online English classes in third world nations, connecting volunteers with local opportunities where help is vital but scarce, coding and cybersecurity classes, and computer science internships helping thousands across 30+ nations. Romir is currently a high school sophomore from Arizona.",
    socialMediaLinks: {
      linkedin: "https://www.linkedin.com/",
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
                <IoLocationOutline color="#FBBC05" size={25} />
                <h6 className="text-1 leading-8">{volunteer.location}</h6>
              </div>
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
              <p className="text-[1rem]">{volunteer.content1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
