import Volunteer1 from "../../../assets/images/Get-Involved/Volunteer1.jpg";
import Volunteer2 from "../../../assets/images/Get-Involved/Volunteer2.png";
import Volunteer3 from "../../../assets/images/Get-Involved/Eric.png";
import Volunteer4 from "../../../assets/images/Get-Involved/Madelyn.png";
import Volunteer5 from "../../../assets/images/Get-Involved/Likith.png";
import Volunteer6 from "../../../assets/images/Get-Involved/Thota-S.png";
import ImageFrame from "../../../Components/ImageFrame/ImageFrame";

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
      "“I have been trying to transition out of the classroom and into instructional design for a while now, and I was fortunate enough to find this internship opportunity. From the moment I joined, I was given valuable resources to help guide not only my processes, but my thinking. On top of that, Thomas has been extremely helpful in guiding me in the right direction. At first, I was just trying to teach myself tools like Articulate and Camtasia. Really, I was just wasting my time. This volunteer opportunity is giving me valuable, practical, experience in creating courses and applying ID theory. The plus side is that the mission of this organization is admirable and something that will really help people who participate in our courses. I am extremely grateful to be part of this organization, and I would encourage others to join.”",
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
];

const VolunteersSay = () => {
  return (
    <div className="w-screen flex justify-start md:justify-center md:items-center flex-col">
      <div className="max-w-[3000px] flex flex-col md:items-center overflow-hidden my-[2rem] md:mt-[4rem] md:mb-[4rem] text-[2rem] md:text-6xl font-bold mx-[1rem] md:mx-[2rem] lg:mx-[8rem]">
        What Our Volunteers Say
      </div>
      <div className="max-w-[1050px] h-full flex flex-col items-center justify-center gap-[2rem] mx-[1rem] md:mx-[2rem] lg:mx-[8rem]">
        {volunteers.map((volunteer, index) => {
          return (
            <div
              key={index}
              className={`w-full flex flex-col justify-center lg:justify-between items-end mb-[4rem] ${
                index % 2 === 0
                  ? "md:flex md:flex-row md:items-start"
                  : "md:flex md:flex-row-reverse md:items-start"
              } gap-[4rem]`}
            >
              <ImageFrame
                image={volunteer.image}
                name={volunteer.name}
                lastName={volunteer.lastName}
                index={index}
              />
              <div className="flex flex-col gap-[1rem] w-full md:w-[45%] max-w-[500px] lg:mt-[1.5rem]">
                <h6 className="font-bold text-[2.5rem] leading-8">{"Meet"}</h6>
                <h6 className="font-bold text-[2.5rem] leading-8 ">
                  {volunteer.name}
                </h6>
                <p className="text-[1.25rem] mt-4">{volunteer.content1}</p>
                {volunteer.content2 && (
                  <p className="text-[1.25rem] mt-4">{volunteer.content2}</p>
                )}
                {volunteer.content3 && (
                  <p className="text-[1.25rem] mt-4">{volunteer.content3}</p>
                )}
                <p className="text-[1.25rem] mt-4">
                  {volunteer.signatureLine1}
                </p>
                <p className="text-[1.25rem] leading-[0px]">
                  {volunteer.signatureLine2}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VolunteersSay;
