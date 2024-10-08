import React from "react";
import KeelMateImage from "./../../../assets/images/Our-Solutions/KeelMate.jpg";
import "./KeelMate.css";

const roles = [
  "Project Manager",
  "Human Resource Generalist",
  "Google Workspace Administration",
  "Program Manager",
  "Executive Assistant",
  "Salesforce application",
  "Product Manager",
  "Grant Writing",
  "Cyber Security",
  "Product Designer",
  "Grant Research",
  "Instructional Design",
  "",
  "",
  "Salesforce administration",
];

const KeelMate = () => {
  return (
    <div
      className="w-screen h-auto bg-white md:bg-grey300 md:mt-[5rem] flex flex-col justify-center items-center"
      id="keelMate"
    >
      <div className="w-full max-w-[3000px] h-full flex flex-col items-center overflow-hidden relative justify-center gap-[3rem] ">
        <div className="flex flex-col items-start md:items-center overflow-hidden justify-center mx-[1rem] md:mx-[2rem] lg:mx-[8rem]">
          <h4 className="text-3xl mb-5 md:mb-0 md:text-5xl lg:text-6xl font-bold">
            KeelMate
          </h4>
          <p className=" md:text-[#646464] font-bold text-[1.562rem] md:text-[1.875rem] lg:text-[2.5rem] xl:text-[3rem] mt-3 md:mt-7 text-start md:text-center">
            Like the KeelWings program, the goal for this program is to assist
            workers with attaining new skills and experiences. The difference is
            KeelMate is focused entirely on assisting seasoned professionals who
            are transitioning from one field to another.
          </p>
          <div className="flex flex-col md:flex-row justify-between gap-[2rem] mt-[2rem] md:mt-[4rem]">
            <div className="flex-grow">
              <img
                className="w-full md:w-[400px] object-cover"
                src={KeelMateImage}
                alt="KeelMate"
              />
            </div>
            <div className="w-full md:w-[60%]">
              <p className="mb-10 leading-loose">
                The approach is similar in that KeelMate participants practice
                new skills, study new principles, and garner experience with
                real-world projects. KeelMate works to close knowledge gaps with
                learning and practical application of real-world skills.
                Coaches, where available, work alongside participants to guide
                them through the program, increasing their self confidence and
                expanding competencies. In some fields where we lack competence,
                but there is a significant number in need, we’ll offer the
                opportunity and challenge the community to learn together while
                practicing.
              </p>
              <p className="mb-10 leading-loose">
                And like their KeelWings teammates, they’ll also develop and
                strengthen their resumes and portfolios with the newfound
                knowledge and experience they’ve acquired. Our hope is that
                associates from both programs develop and expand their skill set
                so as to secure paid positions outside of our organization.
              </p>
              <p className="mb-10 leading-loose">
                Participants are encouraged to build a professional network of
                mutually supportive peers that can sustain them throughout their
                career. Effective performances garner a referral from KeelWorks,
                and all participants in all programs are encouraged to write
                referrals for each other.
              </p>
            </div>
          </div>
          <div className="w-full mb-[2rem] md:mx-[4rem] lg:mx-[8rem] md:my-[4rem]">
            <h6 className="text-2xl font-semibold mb-[1rem] md:mb-[2rem]">
              Some areas KeelMate offers training in:
            </h6>
            <ul className="grid grid-cols-1 md:grid-cols-3 list-disc list-inside leading-loose">
              {roles.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeelMate;
