import Volunteer1 from "../../../assets/images/Get-Involved/Volunteer1.jpg";
import Volunteer2 from "../../../assets/images/Get-Involved/Volunteer2.png";
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
];

const VolunteersSay = () => {
  return (
    <div className="w-screen flex justify-start md:justify-center md:items-center flex-col">
      <div className="max-w-[3000px] flex flex-col md:items-center overflow-hidden my-[2rem] md:mt-[4rem] md:mb-[4rem] text-[2rem] md:text-6xl font-bold mx-[1rem] md:mx-[4rem] lg:mx-[8rem]">
        What Our Volunteers Say
      </div>
      <div className="max-w-[1050px] h-full flex flex-col items-center justify-center gap-[2rem] mx-[1rem] md:mx-[4rem] ">
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
              <div className="flex flex-col gap-[1rem] w-full lg:w-[45%] max-w-[500px] lg:mt-[1.5rem]">
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
