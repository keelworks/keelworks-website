import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import logoBW from "../../assets/images/KeelWorks-Logo.png";
import { useState, useRef } from "react";
let userChats = [
  // {
  //   question: "How can I donate?",
  //   answer:
  //     "On the homepage you can find the donate button in multiple different sections.",
  // },
];

const KeelBot = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      message:
        "Hello and welcome to KeelWorks Foundations! I'm Thomas, here to guide you. How can I assist you today? You can:",
      sender: "KeelBot",
    },
  ]);
  const chatInputRef = useRef(null);

  const handleSendUserChat = (userMessage) => {
    const newUserMessage = {
      message: userMessage,
      sender: "user",
    };
    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);

    // sending user's chat to the KeelBot API
    // messages won't be updated here rightaway
    console.log(messages);
  };

  return (
    <div className={`fixed z-50 bottom-[6rem] right-[2rem]`}>
      {/* ***** Header ****** */}
      <div
        className={`bg-primary500 hover:bg-primary300 transition-all duration-100 ease-in-out text-white font-[800] cursor-pointer ${
          chatOpen
            ? "w-[350px] h-[60px] px-5 rounded-t-[2rem] bg-primary500 hover:bg-primary300 transition-all duration-100 ease-in-out  text-white font-[800] flex justify-between items-center gap-2"
            : "w-[200px] h-[60px] fixed z-10 bottom-[6rem] right-[2rem] rounded-full bg-primary500 hover:bg-primary300 transition-all duration-300 ease-in-out  text-white font-[800] flex justify-center items-center gap-2"
        }`}
        onClick={() => {
          setChatOpen(!chatOpen);
        }}
      >
        <div className="flex justify-center items-center gap-2">
          <img src={logoBW} alt="KeelWorks logo" className="h-10" />
          <p className="text-[1rem]">KeelBot</p>
        </div>
        {chatOpen ? (
          <IoIosArrowUp className="text-[1.5rem]" />
        ) : (
          <IoIosArrowDown className="text-[1.5rem]" />
        )}
      </div>
      <div className={` ${chatOpen ? "relative" : "hidden"}`}>
        {/* ****** Body ****** */}
        <div
          className={`flex flex-col transition-all duration-100 ease-in-out overflow-y-scroll overflow-x-hidden ${
            chatOpen ? "h-[300px] w-[350px] bg-[#FEFEFE]" : "h-0 w-[350px]"
          }`}
        >
          {userChats.length > 0 ? (
            userChats.map(({ question, answer }) => {
              return (
                <div>
                  <p className="self-start break-words mt-[1rem] mx-6 py-2 px-2 rounded-lg text-[0.85rem] text-gray-600 bg-white drop-shadow-md">
                    {question}
                  </p>
                  <p className="self-start break-words bg-grey200 mt-[1rem] mx-6 py-2 px-2 rounded-br-lg rounded-t-lg text-[0.85rem] text-gray-600">
                    {answer}
                  </p>
                </div>
              );
            })
          ) : (
            <div>
              <p className="self-start break-words bg-grey200 mt-[1rem] mx-6 py-2 px-2 rounded-br-lg rounded-t-lg text-[0.85rem] text-gray-600">
                {messages[0].message}
              </p>
              <p
                className="self-start break-words mt-[1rem] mx-6 py-2 px-2 rounded-lg text-[0.85rem] text-gray-600 bg-white drop-shadow-md cursor-pointer hover:bg-grey200"
                onClick={() => {
                  console.log("do something");
                }}
              >
                Learn about KeelMaster, KeelWings, or KeelMate.
              </p>
              <p
                className="self-start break-words mt-[1rem] mx-6 py-2 px-2 rounded-lg text-[0.85rem] text-gray-600 bg-white drop-shadow-md cursor-pointer hover:bg-grey200"
                onClick={() => {
                  console.log("do something");
                }}
              >
                How to become a donor?
              </p>
              <p
                className="self-start break-words mt-[1rem] mx-6 py-2 px-2 rounded-lg text-[0.85rem] text-gray-600 bg-white drop-shadow-md cursor-pointer hover:bg-grey200"
                onClick={() => {
                  console.log("do something");
                }}
              >
                How to join us as a volunteer?
              </p>
            </div>
          )}
        </div>
        {/* ****** Bottom ****** */}
        <div className="w-full flex justify-between bg-white rounded-b-[30px] gap-2 p-4">
          <input
            ref={chatInputRef}
            className={`px-4 py-[0.4rem] w-full bg-gray-200 focus:outline-grey400  text-[0.9rem] rounded-lg transition-all duration-100 ease-in-out${
              chatOpen ? "w-full" : "w-0 hidden"
            }`}
            type="text"
            placeholder="Type message"
          />
          <button
            className={`bg-primary500 hover:bg-primary300 transition-all duration-100 ease-in-out px-4 py-[0.4rem] rounded-full text-[0.9rem] font-bold ${
              chatOpen ? "" : "hidden"
            }`}
            onClick={() => {
              const chatBotInput = chatInputRef.current.value;
              handleSendUserChat(chatBotInput);
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
export default KeelBot;
