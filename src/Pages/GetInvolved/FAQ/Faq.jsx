import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "1. What is KeelWorks?",
    answer:
      "AnsLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
  },
  {
    id: 2,
    question: "2. How does KeelWorks assist individuals? ",
    answer:
      "AnsLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
  },
  {
    id: 3,
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    answer:
      "AnsLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
  },
  {
    id: 4,
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
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
    <div className="w-screen  mt-[5rem] bg-grey300 flex justify-center flex-col ">
      <div className="w-full max-w-[3000px] flex flex-col items-center justify-center text-6xl font-bold overflow-hidden relative m-[2rem] ">
        Frequently Asked Questions
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center mb-[7rem]">
        {faqs.map((faq, index) => {
          return (
            <div key={index} className="flex flex-col justify-center  w-[70%]">
              <div className="p-[1rem] flex justify-between font-bold">
                <p className="m-auto">
                  {index + 1} . {faq.question}
                </p>
                <div
                  className="rotate-180 bg-primary500 text-3xl  m-auto py-1 px-2 md:py-2 md:px-3"
                  onClick={() => toggleFAQ(index)}
                >
                  ^
                </div>
              </div>
              {activeFAQ === index && (
                <div className="m-auto">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Faq;
