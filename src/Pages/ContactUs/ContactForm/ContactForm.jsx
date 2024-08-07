import { useState } from "react";
import peopleDistImage from "../../../assets/images/Contact-Us/People-Distribution.png";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInput = {
      firstName,
      lastName,
      email,
      subject,
      message,
    };

    console.log(userInput);

    const data = new FormData();
    data.append("firstName", userInput.firstName);
    data.append("lastName", userInput.lastName);
    data.append("email", userInput.email);
    data.append("subject", userInput.subject);
    data.append("message", userInput.message);

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyE3WnCqDFPWED7P3VUtKY6_unzSDPGS4X0kYGw4yBFKUnGGdP2uy-2wkWhZf2vk7wX/exec",
      {
        method: "POST",
        body: data,
        muteHttpExceptions: true,
      }
    );

    if (response.ok) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      alert("There was an error sending your message.");
    }
  };

  return (
    <div className="w-screen max-w-[3000px] mt-[5rem] md:mt-[8rem] bg-white flex justify-center items-center">
      <div className="mx-[2rem] md:mx-[4rem] lg:mx-[8rem] md:h-screen">
        <div className="font-bold">
          <div>
            <h2 className="text-3xl md:text-[3.5rem] lg:text-5xl text-left my-[2rem]">
              Contact Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="flex flex-col justify-start items-start mt-2 md:order-2">
              <p className="text-2xl md:mt-2 text-gray-500 text-left">
                Geospatial Distribution of Our People
              </p>
              <img
                src={peopleDistImage}
                alt="People Distribution across World"
                className="object-cover mt-3"
              />
            </div>
            <div className="md:order-1">
              <form className="space-y-4 mt-2" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                  <div>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="First Name"
                      className="block w-full px-3 py-3 font-normal bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm placeholder:italic placeholder:text-gray-500"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Last Name"
                      className="block w-full px-3 py-3 font-normal bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm placeholder:italic placeholder:text-gray-500"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="block w-full px-3 py-3 font-normal bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm placeholder:italic placeholder:text-gray-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    className="block w-full px-3 py-3 font-normal bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm placeholder:italic placeholder:text-gray-500"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    placeholder="Message"
                    className="block w-full px-3 py-3 font-normal bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm placeholder:italic placeholder:text-gray-500"
                    rows="8"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                <div className="flex justify-center lg:justify-start">
                  <button className="block mt-7 mb-[4rem] px-24 py-5 bg-primary500 rounded-full hover:bg-primary300 transition duration-[300ms] ease-linear text-[1rem] text-white font-semibold">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
