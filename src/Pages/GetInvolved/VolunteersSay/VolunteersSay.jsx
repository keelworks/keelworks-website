import React, { useState } from "react";
import ImageFrame from "../../../Components/ImageFrame/ImageFrame";

import Volunteer1 from "../../../assets/images/Get-Involved/Volunteer1.jpg";
import Volunteer2 from "../../../assets/images/Get-Involved/Volunteer2.png";
import Volunteer3 from "../../../assets/images/Get-Involved/Eric.png";
import Volunteer4 from "../../../assets/images/Get-Involved/Madelyn.png";
import Volunteer5 from "../../../assets/images/Get-Involved/Likith.png";
import Volunteer6 from "../../../assets/images/Get-Involved/Thota-S.png";
import Volunteer7 from "../../../assets/images/Get-Involved/Fredi-S.png";

const charLimit = 300;

const volunteers = [
  {
    id: 1,
    name: "Sky",
    lastName: "Tomlinson",
    image: Volunteer1,
    content1:
      '“The KeelWorks program provided me with the necessary experience and guidance for my MS in Instructional Design Technology, enabling significant career growth through the creation of valuable portfolio components and practical skills I apply daily. Embracing their motto, "Learning to Live, Living to Learn," I continue to evolve in my craft, cherishing the direction and comprehensive growth attained from the program.”',
    signatureLine1: "With Undying Gratitude,",
    signatureLine2: "Kathryn “Sky” Tomlinson",
  },
  {
    id: 2,
    name: "Jonathan",
    lastName: "Jonathan Stanciu",
    image: Volunteer2,
    content1:
      "“I was in the last semester of my Master’s Program (M.A. Educational Technology) at Northern Arizona University. I knew I had to have a job after graduation, and that work in instructional design required experience. I needed help with design tools such as Captivate, Storyline, and Photoshop. I needed to be able to show samples of my work.”",
    content2:
      "KeelWorks gave my resume legitimate experience. I learned to storyboard and build projects in Captivate using assets created in Photoshop and Audition. This experience was a boost to my confidence. More than creating work samples, I could now talk through instructional design tools and their features to prove my mastery. The Executive Director spoke to prospective employers, helped me with my resume, and advised me on the interview.",
    content3:
      "I am a Senior Program Manager at Amazon. My success is the product of several career steps, all of which began with my practice in instructional design - and that started with KeelWorks. I am grateful for KeelWorks and continue to lend my full support to the foundation”.",
    signatureLine1: "With Gratitude,",
    signatureLine2: "Jonathan Stanciu",
  },
  {
    id: 3,
    name: "Eric",
    lastName: "Halterman",
    image: Volunteer3,
    content1:
      "“I have been trying to transition out of the classroom and into instructional design for a while now, and I was fortunate enough to find this internship opportunity. From the moment I joined, I was given valuable resources to help guide not only my processes, but also my thinking. On top of that, Thomas has been extremely helpful in guiding me in the right direction. At first, I was just trying to teach myself tools like Articulate and Camtasia. Really, I was just wasting my time. This volunteer opportunity is giving me valuable, practical, experience in creating courses and applying ID theory. The plus side is that the mission of this organization is admirable and something that will really help people who participate in our courses. I am extremely grateful to be part of this organization, and I would encourage others to join.”",
    signatureLine1: "With Gratitude,",
    signatureLine2: "Eric Halterman",
  },
  {
    id: 4,
    name: "Madelyn",
    lastName: "Banahane",
    image: Volunteer4,
    content1:
      "“As someone new to the organization, I feel that KeelWorks is a great organization to start a professional journey while also contributing to a great cause and learning the ropes. The director is accessible, easy to work with and encouraging as you learn how to contribute to the organization. Getting experience, networking with a team and gaining life long colleagues are all benefits of working with KeelWorks.”",
    signatureLine1: "With Gratitude,",
    signatureLine2: "Madelyn Banahane",
  },
  {
    id: 5,
    name: "Likith",
    lastName: "Prathima",
    image: Volunteer5,
    content1:
      "“I've been eager to transition from teaching to instructional design for quite some time, and I was fortunate to find this internship opportunity. From the moment I joined, I received valuable resources that have guided both my processes and my thinking. Additionally, Thomas has been incredibly helpful in steering me in the right direction. Initially, I was trying to teach myself tools like Articulate and Camtasia, but I realized I was just wasting my time. This volunteer opportunity provides me with practical experience in creating courses and applying instructional design theory. On top of that, the mission of this organization is admirable and genuinely helps those who participate in our courses. I'm extremely grateful to be a part of this organization and would highly encourage others to get involved.”",
    signatureLine1: "With Gratitude,",
    signatureLine2: "Likith Prathima",
  },
  {
    id: 6,
    name: "Thota",
    lastName: "Sahaja",
    image: Volunteer6,
    content1:
      "“I would highly recommend Keelworks to a friend or colleague. It’s a great organization to start your professional journey, offering a supportive environment where you can learn and contribute to meaningful causes. The Keelworks team encourages growth within the role, making it a great place for gaining experience and developing long-term relationships”",
    signatureLine1: "With Gratitude,",
    signatureLine2: "Thota Sahaja",
  },
  {
    id: 7,
    name: "Fredimanuel",
    lastName: "Seshie",
    image: Volunteer7,
    content1:
      "“As a high school student, my experience with KeelWorks has been invaluable in introducing me to the professional world and helping me acquire skills that I wouldn't have gained otherwise. KeelWorks provides an environment where you can develop your professional abilities, take on leadership roles, and grow as a person. If you are considering volunteering at KeelWorks, it is crucial that you leverage this opportunity and take leadership at KeelWorks. By doing so, you can demonstrate the impact you've made not only on the development of KeelWorks, but also on advancing its mission.”",
    signatureLine1: "With Gratitude,",
    signatureLine2: "Fredimanuel Seshie",
  },
];

const VolunteersSay = () => {
  const [expandedIds, setExpandedIds] = useState(new Set());

  const toggleExpand = (id) =>
    setExpandedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <div className="w-screen flex justify-start md:justify-center md:items-center flex-col">
      <h2 className="max-w-[3000px] my-[2rem] md:my-[4rem] mx-[1rem] md:mx-[2rem] lg:mx-[8rem] text-[2rem] md:text-6xl font-bold">
        What Our Volunteers Say
      </h2>

      <div className="max-w-[1050px] flex flex-col items-center gap-[2rem] mx-[1rem] md:mx-[2rem] lg:mx-[8rem]">
        {volunteers.map((v, idx) => {
          const isExpanded = expandedIds.has(v.id);
          const fullText = [v.content1, v.content2, v.content3].filter(Boolean).join(" ");
          const shortText =
            fullText.length > charLimit ? fullText.slice(0, charLimit) + "…" : fullText;

          return (
            <div
              key={v.id}
              className={`w-full flex flex-col lg:justify-between items-start mb-[4rem] gap-[4rem] ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* portrait */}
              <ImageFrame image={v.image} name={v.name} lastName={v.lastName} index={idx} />

              {/* text column */}
              <div className="flex flex-col gap-[1rem] w-full md:w-[45%] max-w-[500px] lg:mt-[1.5rem]">
                <h6 className="font-bold text-[2.5rem] leading-8">Meet</h6>
                <h6 className="font-bold text-[2.5rem] leading-8">{v.name}</h6>

                <p className="text-[1.25rem] mt-4">
                  {isExpanded ? fullText : shortText}
                  {fullText.length > charLimit && (
                    <button
                      onClick={() => toggleExpand(v.id)}
                      aria-expanded={isExpanded}
                      className="ml-2 font-semibold hover:underline focus:underline text-[#0000EE]"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  )}
                </p>

                <p className="text-[1.25rem] mt-4">{v.signatureLine1}</p>
                <p className="text-[1.25rem] leading-none">{v.signatureLine2}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VolunteersSay;
