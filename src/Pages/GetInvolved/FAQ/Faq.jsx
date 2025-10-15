import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is KeelWorks?",
    answer:
      "KeelWorks is a non-profit, charitable foundation established 13 years ago, focusing on empowering individuals globally, including in places like China, India, Egypt, Nigeria, Ghana, UK, Brazil, Kenya, Canada,  and the USA. We help economically disadvantaged individuals gain new competencies, supporting their families and contributing to their communities.",
  },
  {
    id: 2,
    question: "How does KeelWorks assist individuals? ",
    answer:
      "The KeelWings program for recent graduates, offers practical experience to add to resumes as a job. Similar to KeelWings, the KeelMate program enables those with experience to level up to a role that is more sustaining. All who desire it receive resume and portfolio support. The overwhelming majority leave KeelWorks for better pay. The KeelMaster program is in development to support the most challenged unemployed and underemployed with barrier identification and mitigation, core competency training, and extended community support leaning to stable and sustaining employment. All KeelWorks programs are virtual, meaning that we bring our support to where those in need are.",
  },
  {
    id: 3,
    question: "What inspired the creation of the KeelWorks Foundation? ",
    answer:
      "The foundation was inspired by our founder's personal struggles as a high school dropout facing employment and education challenges. His journey to earning a degree and building a successful career supported the belief that with the right intervention, others could also experience success.",
  },
  {
    id: 4,
    question: "What is the core mission of KeelWorks? ",
    answer:
      "We get people to work. We believe that everyone can work and that we all need to contribute in some way. For every one person we help to employment we help families, communities, and nations. When everyone  wins, we all win.",
  },
  {
    id: 5,
    question: "How is KeelWorks different from other organizations? ",
    answer:
      "KeelWorks teaches interdependence rather than dependence, focusing on community strength and mutual support. We emphasize sustainable solutions and long-term empowerment, helping participants become contributors rather than just recipients. Our “secret sauce” is the combination of barrier identification and mitigation, core competency training, and mutual support through the journey.",
  },
  {
    id: 6,
    question: "What are the core competencies I hear about at KeelWorks?",
    answer:
      "We emphasize critical thinking, self-identity, problem-solving, communication, assertiveness, teambuilding, goal determination, and goal management. We believe that those with these competencies will have all other competencies within reach.",
  },
  {
    id: 7,
    question: "Why should I care about KeelWorks and its mission? ",
    answer:
      "We believe everyone can be successfully employed and that helping them helps all of us. Even without compassion for those who struggle, it is clear that helping the disengaged to engage brings solutions we did not have and reduces the burden on social systems.",
  },
  {
    id: 8,
    question: "How does helping KeelWorks benefit society? ",
    answer:
      "Getting the idle to work is the gift that keeps on giving. They help their family, their community, and their nation. When a person goes to work, they transition from dependent to contributor - those who can’t see the human side, can look to the tax burden.",
  },
];

const Faq = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    if (activeFAQ === index) {
      setActiveFAQ(null);
    } else {
      setActiveFAQ(index);
    }
  };

  return (
    <div
      className="w-screen  mt-[5rem] bg-grey200 flex justify-center items-center flex-col"
      id="faq"
    >
      <div className="w-full max-w-[3000px] flex flex-col items-center justify-center overflow-hidden">
        <div className="max-w-[1050px] mx-[1rem] md:mx-[2rem] lg:mx-[8rem]">
          <h4 className="text-[2.5rem] md:text-6xl font-bold my-10">
            Frequently Asked Questions
          </h4>
          <div className="w-full h-full flex flex-col gap-[2rem] md:gap-[1rem] items-center justify-center mb-[7rem]">
            {faqs.map((faq, index) => {
              return (
                <div
                  key={index}
                  className="max-w-[1050px] flex-col justify-center w-full"
                >
                  <div className="pb-[1rem] md:py-[1rem] items-start md:items-center flex justify-between gap-[1rem] font-bold">
                    <p className="flex-1">
                      {index + 1} . {faq.question}
                    </p>
                    <div
                      className="bg-action500 text-[1rem] md:text-[1.5rem] md:m-auto p-1 hover:cursor-pointer"
                      onClick={() => toggleFAQ(index)}
                    >
                      {activeFAQ === index ? <SlArrowUp /> : <SlArrowDown />}
                    </div>
                  </div>
                  {activeFAQ === index && (
                    <div className="ml-4 mb-5">
                      <p className="max-w-[800px]">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faq;
