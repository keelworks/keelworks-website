import { useState } from "react";
import { useNavigate } from "react-router-dom";

import slider1 from "../../../assets/images/card1.jpg";
import slider2 from "../../../assets/images/card2.jpg";
import slider3 from "../../../assets/images/card3.jpg";
import greaterImg from "../../../assets/images/greater.png";

import testimonialImg21 from "../../../assets/images/Get-Involved/Volunteer2.png";
import testimonialImg22 from "../../../assets/images/Get-Involved/Eric.png";

/* ----------------------------------------------------------
   SHARED DATA
---------------------------------------------------------- */
const solutions = [
  {
    id: "keelMaster",
    title: "KeelMaster",
    img: slider1,
    desc:
      "A three‑phase approach to support the most challenged unemployed and under‑employed individuals mitigating barriers to sustainable employment."
  },
  {
    id: "keelMate",
    title: "KeelMate",
    img: slider2,
    desc:
      "Designed to bridge the gap for participants with insufficient education and/or experience in our supported fields; better positioning them for employment and growth."
  },
  {
    id: "keelWings",
    title: "KeelWings",
    img: slider3,
    desc:
      "Assists graduates breakthrough the “lack of experience” conundrum while providing them valuable employment coaching."
  }
];

const testimonial = [
  {
    id: 1,
    name: "Jonathan",
    lastName: "Stanciu",
    image: testimonialImg21,
    content1:
      "“KeelWorks gave my resume legitimate experience. I learned to storyboard and build projects in Captivate using assets created in Photoshop and Audition. Now, I am a Senior Program Manager at Amazon. My success is the product of several career steps, all of which began with my practice in instructional design - and that started with KeelWorks.”",
    designation: "Senior Program Manager at Amazon"
  },
  {
    id: 2,
    name: "Eric",
    lastName: "Halterman",
    image: testimonialImg22,
    content1:
      "“I have been trying to transition out of the classroom and into instructional design for a while now, and I was fortunate enough to find this internship opportunity. From the moment I joined, I was given valuable resources to help guide not only my processes, but my thinking.”",
    designation: "Instructional Designer"
  }
];

/* ==========================================================
   MAIN COMPONENT
========================================================== */
const Cards = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen">
      {/* ──────────────── Top Intro Copy ──────────────── */}
      <div className="w-screen flex justify-center bg-grey200">
        <div className="w-full max-w-[3000px]">
          <div className="lg:mx-[8rem] md:mx-[2rem] mx-[1rem]">
            <p className="lg:text-[2.68rem] md:text-[2.25rem] sm:text-[1.875rem] text-[1.5rem] font-bold leading-relaxed lg:pt-[8rem] sm:pt-[6rem] pt-[4rem]">
              Too many, eager to work,{" "}
              <span className="text-primary500"> lack the required skills </span>
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

      {/* ─────────────── KeelWorks Solutions ─────────────── */}
      <div className="w-screen flex flex-col justify-center items-center bg-white lg:h-screen">
        <div className="w-full flex justify-center pt-[3.5rem] pb-10">
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold ml-4 md:ml-0">
            The <span className="text-primary500">KeelWorks </span>Solutions
          </p>
        </div>

        {/* ===== MOBILE IMAGE CARDS (< md) ===== */}
        <div className="md:hidden w-full max-w-[3000px] flex flex-col gap-8 px-4">
          {solutions.map(sol => (
            <div
              key={sol.id}
              onClick={() => navigate(`/oursolutions#${sol.id}`)}
              className="relative overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={sol.img}
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />

              {/* blurred gradient overlay */}
              <div className="absolute bottom-0 w-full 
                              bg-gradient-to-t from-black/70 to-transparent 
                              backdrop-blur-sm
                              text-white px-5 py-5">
                <h3 className="text-primary500 font-extrabold text-2xl mb-2">
                  {sol.title}
                </h3>
                <p className="text-base leading-relaxed">{sol.desc}</p>
              </div>
            </div>
          ))}
        </div>


        {/* ===== DESKTOP / TABLET GRID (≥ md) ===== */}
        <div className="hidden md:grid w-full max-w-[3000px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map(sol => (
            <div
              key={sol.id}
              onClick={() => navigate(`/oursolutions#${sol.id}`)}
              className="relative overflow-hidden group cursor-pointer"
            >
              <img src={sol.img} alt="" className="w-full h-full object-cover" />

              {/* OUTER overlay (full height, transparent) */}
              <div className="absolute inset-0 flex flex-col justify-end">

                {/* INNER wrapper — collapsed bar grows on hover */}
                <div className="
                      w-full bg-gradient-to-t from-black/90 to-transparent
                      text-white px-5 py-4
                      h-[70px] lg:group-hover:h-full
                      overflow-hidden                      /* hide text until expanded */
                      transition-all duration-500
                    ">
                  <h3 className="text-primary500 font-extrabold text-3xl md:text-4xl">
                    {sol.title}
                  </h3>

                  <p className="
                        mt-3 leading-relaxed text-base md:text-lg
                        opacity-0 translate-y-4
                        lg:group-hover:opacity-100 lg:group-hover:translate-y-0
                        transition-all duration-500
                      ">
                    {sol.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* ─────────────── Testimonial Section ─────────────── */}
      <div className="w-full flex flex-col justify-center items-center bg-white py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary500 mb-12">
          Testimonials
        </h2>

        <div className="max-w-5xl w-full px-4 mx-auto flex flex-col md:flex-row justify-center items-center gap-12">
          {testimonial.map(
            ({ id, name, lastName, image, content1, designation }) => (
              <div key={id} className="flex flex-col items-center text-center">
                {/* image with yellow frame */}
                <div className="relative w-[250px] h-[250px] mb-4">
                  <div className="absolute -top-3 -left-3 w-full h-full border-4 border-yellow-500"></div>
                  <img
                    src={image}
                    alt={`${name} ${lastName}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <p className="font-bold text-lg">
                  {name} {lastName}
                </p>
                <p className="text-gray-600">{designation}</p>
                <TestimonialText content={content1} charLimit={188} />
              </div>
            )
          )}
        </div>

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

      {/* ─────────────── Bottom CTA Copy ─────────────── */}
      <div className="w-full bg-grey200 flex justify-center">
        <div className="max-w-[3000px] mx-[1rem] md:mx-[2rem] lg:mx-[8rem]">
          <p className="text-[2rem] font-bold leading-relaxed py-[8rem] md:text-[2.68rem]">
            If you believe in our mission to get people to work, we need your
            partnership.
          </p>
        </div>
      </div>
    </div>
  );
};

/* ===== Helper for expandable testimonial copy ===== */
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
          className="ml-2 text-primary500 font-semibold hover:underline focus:outline-none"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </p>
  );
};

export default Cards;
