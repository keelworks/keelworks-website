import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is KeelWorks?",
    answer:
      "AnsLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
  },
  {
    id: 2,
    question: "How does KeelWorks assist individuals? ",
    answer:
      "AnsLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
  },
  {
    id: 3,
    question: "What inspired the creation of the KeelWorks Foundation? ",
    answer:
      "AnsLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
  },
  {
    id: 4,
    question: "What is the core mission of KeelWorks? ",
    answer:
      "AnsLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
  },
  {
    id: 5,
    question: "How is KeelWorks different from other organizations? ",
    answer:
      "AnsLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
  },
  {
    id: 6,
    question: "What core competencies does KeelWorks focus on? ",
    answer:
      "AnsLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
  },
  {
    id: 7,
    question: "Why should I care about KeelWorks and its mission? ",
    answer:
      "AnsLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
  },
  {
    id: 8,
    question: "How does helping KeelWorks benefit society? ",
    answer:
      "AnsLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
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
    <div className="w-screen  mt-[5rem] bg-grey200 flex justify-center items-center flex-col ">
      <div className="w-full max-w-[3000px] flex flex-col items-center justify-center overflow-hidden">
        <div className="max-w-[1050px] mx-[2rem] md:mx-[4rem] lg:mx-[8rem]">
          <h4 className="text-[1.5rem] md:text-6xl font-bold my-10">
            Frequently Asked Questions
          </h4>
          <div className="w-full h-full flex flex-col items-center justify-center mb-[7rem]">
            {faqs.map((faq, index) => {
              return (
                <div key={index} className="flex-col justify-center w-full">
                  <div className="py-[1rem] items-center flex justify-between font-bold">
                    <p className="flex-1">
                      {index + 1} . {faq.question}
                    </p>
                    <div
                      className="bg-primary500 text-[1rem] md:text-[1.5rem] m-auto p-1 hover:cursor-pointer"
                      onClick={() => toggleFAQ(index)}
                    >
                      {activeFAQ === index ? <SlArrowUp /> : <SlArrowDown />}
                    </div>
                  </div>
                  {activeFAQ === index && (
                    <div className="ml-4 mb-5">
                      <p>{faq.answer}</p>
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
