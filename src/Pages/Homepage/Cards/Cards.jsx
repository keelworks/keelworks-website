import { useState } from "react";
import { useNavigate } from "react-router-dom";

import testimonialImg21 from "../../../assets/images/Get-Involved/Volunteer2.png";
import testimonialImg22 from "../../../assets/images/Get-Involved/Eric.png";

/* ----------------------------------------------------------
   SHARED DATA
---------------------------------------------------------- */
const solutions = [
  {
    id: "keelMaster",
    title: "KeelMaster",
    desc:
      "A three-phase approach to support the most challenged unemployed and under-employed individuals mitigating barriers to sustainable employment.",
  },
  {
    id: "keelMate",
    title: "KeelMate",
    desc:
      "Designed to bridge the gap for participants with insufficient education and/or experience in our supported fields; better positioning them for employment and growth.",
  },
  {
    id: "keelWings",
    title: "KeelWings",
    desc:
      "Assists graduates breakthrough the “lack of experience” conundrum while providing them valuable employment coaching.",
  },
];

const testimonial = [
  {
    id: 1,
    name: "Jonathan",
    lastName: "Stanciu",
    image: testimonialImg21,
    content1:
      "“KeelWorks gave my resume legitimate experience. I learned to storyboard and build projects in Captivate using assets created in Photoshop and Audition. Now, I am a Senior Program Manager at Amazon. My success is the product of several career steps, all of which began with my practice in instructional design – and that started with KeelWorks.”",
    designation: "Senior Program Manager at Amazon",
  },
  {
    id: 2,
    name: "Eric",
    lastName: "Halterman",
    image: testimonialImg22,
    content1:
      "“I have been trying to transition out of the classroom and into instructional design for a while now, and I was fortunate enough to find this internship opportunity. From the moment I joined, I was given valuable resources to help guide not only my processes, but my thinking.”",
    designation: "Instructional Designer",
  },
];

/* ==========================================================
   MAIN COMPONENT
========================================================== */
const Cards = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen">
      {/* ─────────── Top Intro Copy ─────────── */}
      <div className="w-screen flex justify-center bg-grey200">
        <div className="w-full max-w-[3000px]">
          <div className="lg:mx-[8rem] md:mx-[2rem] mx-[1rem]">
            <p className="lg:text-[2.68rem] md:text-[2.25rem] sm:text-[1.875rem] text-[1.5rem] font-bold leading-relaxed lg:pt-[8rem] sm:pt-[6rem] pt-[4rem]">
              Too many, eager to work,{" "}
              <span className="text-primary500">lack the required skills</span>{" "}
              to qualify for sustaining employment.
            </p>
          </div>
          <div className="w-full">
            <p className="lg:text-[2.68rem] md:text-[2.25rem] text-[2.5rem] font-bold leading-relaxed lg:mx-[8rem] md:mx-[2rem] mx-[1rem] pt-10 lg:pb-[8rem] sm:pb-[6rem] pb-[4rem]">
              If we can guide them, we can prepare them for that{" "}
              <span className="text-primary500">sustaining employment.</span>
            </p>
          </div>
        </div>
      </div>

      {/* ─────────── KeelWorks Solutions (Text-only Cards) ─────────── */}
      <div className="w-screen flex flex-col items-center bg-white">
        <h2 className="w-full text-center text-4xl md:text-5xl lg:text-6xl font-bold pt-[3.5rem] pb-10">
          The <span className="text-primary500">KeelWorks </span>Solutions
        </h2>

        <div className="w-full max-w-[3000px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-[8rem]">
          {solutions.map((sol) => (
            <button
              key={sol.id}
              onClick={() => navigate(`/oursolutions#${sol.id}`)}
              className="text-left rounded-xl border border-teal-400 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <h3 className="text-3xl md:text-[2.1rem] font-semibold text-fontPrimary">
                {sol.title}
              </h3>

              <div className="my-4 h-px w-24 bg-fontPrimary/70" />

              <p className="text-greyCustom leading-relaxed">{sol.desc}</p>

              {/* Changed to classic link blue */}
              <span className="mt-6 inline-block font-semibold text-[#0000EE] hover:underline focus:underline">
                Learn More
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ─────────── Testimonials ─────────── */}
      <div className="w-full flex flex-col items-center bg-white py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-primary500 mb-12">
          Testimonials
        </h2>

        <div className="max-w-5xl w-full px-4 mx-auto flex flex-col md:flex-row justify-center items-center gap-12 md:mx-auto md:w-fit">
          {testimonial.map((t) => (
            <div key={t.id} className="flex flex-col items-center text-center">
              <div className="relative w-[250px] h-[250px] mb-4">
                <div className="absolute -top-3 -left-3 w-full h-full border-4 border-yellow-500" />
                <img
                  src={t.image}
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <p className="font-bold text-lg">
                {t.name} {t.lastName}
              </p>
              <p className="text-gray-600">{t.designation}</p>
              <TestimonialText content={t.content1} charLimit={188} />
            </div>
          ))}
        </div>

        {/* Leaving the big CTA button as-is (yellow brand style) */}
        <a
          href="https://keelworks.org/getinvolved"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-8 border-2 border-yellow-500 text-yellow-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500 hover:text-white transition">
            Learn More
          </button>
        </a>
      </div>

      {/* ─────────── Bottom CTA ─────────── */}
      <div className="w-full bg-grey200 flex justify-center">
        <div className="max-w-[3000px] mx-4 md:mx-8 lg:mx-[8rem]">
          <p className="text-[2rem] md:text-[2.68rem] font-bold leading-relaxed py-[8rem]">
            If you believe in our mission to get people to work, we need your
            partnership.
          </p>
        </div>
      </div>
    </div>
  );
};

/* helper for expandable testimonial copy */
const TestimonialText = ({ content, charLimit }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const showToggle = content.length > charLimit;

  const displayText = isExpanded
    ? content
    : content.slice(0, charLimit) + (showToggle ? "…" : "");

  return (
    <p className="text-gray-700 mt-2 px-4 max-w-xs">
      {displayText}
      {showToggle && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          className="ml-2 font-semibold hover:underline focus:underline text-[#0000EE]"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </p>
  );
};

export default Cards;
