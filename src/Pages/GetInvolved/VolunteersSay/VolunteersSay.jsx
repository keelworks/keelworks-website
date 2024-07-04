import Volunteer1 from "../../../assets/images/Get-Involved/Volunteer1.jpg";
import Volunteer2 from "../../../assets/images/Get-Involved/Volunteer2.png";
import ImageFrame from "../ImageFrame/ImageFrame";

const volunteers = [
  {
    id: 1,
    name: "Kathryn",
    lastName: "Tomlinson",
    title: "Instructional Designer",
    image: Volunteer1,
    content:
      "Working toward an MS in Instructional Design Technology, I needed experience to qualify for work in the field. The KeelWorks program gave me that experience. Working with other professionals, I created valuable portfolio components that I still use today. KeelWorks is an important part of my career growth. I use what I learned every day. KeelWorks helped me at a time when I needed direction, guidance, and experience. I gained all of these and so much more through the program. The KeelWorks motto is Learning to Live, Living to Learn: I take that to heart as I continue to learn and apply my craft.",
  },
  {
    id: 2,
    name: "Kathryn",
    lastName: "Tomlinson",
    title: "Instructional Designer",
    image: Volunteer2,
    content:
      "Working toward an MS in Instructional Design Technology, I needed experience to qualify for work in the field. The KeelWorks program gave me that experience. Working with other professionals, I created valuable portfolio components that I still use today. KeelWorks is an important part of my career growth. I use what I learned every day. KeelWorks helped me at a time when I needed direction, guidance, and experience. I gained all of these and so much more through the program. The KeelWorks motto is Learning to Live, Living to Learn: I take that to heart as I continue to learn and apply my craft.",
  },
];

const VolunteersSay = () => {
  return (
    <div className="w-screen mt-[5rem] flex justify-center items-center flex-col">
      <div className="max-w-[3000px] flex flex-col items-center overflow-hidden mb-[2rem] md:mb-[6rem] text-[2.5rem] md:text-6xl font-bold mx-[4rem]">
        What Our Volunteers Say
      </div>
      <div className="h-full flex flex-col items-center justify-center gap-[2rem] mx-[4rem]">
        {volunteers.map((volunteer, index) => {
          return (
            <div
              key={index}
              className={`w-full flex flex-col justify-center items-center ${
                index % 2 === 0
                  ? "md:flex md:flex-row md:items-start"
                  : "md:flex md:flex-row-reverse md:items-start"
              } md:mx-[4rem] gap-[2rem] border-[2px] border-purple-600`}
            >
              <ImageFrame
                image={volunteer.image}
                name={volunteer.name}
                lastName={volunteer.lastName}
                index={index}
              />
              <div className="flex flex-col gap-[1rem] my-[2rem] w-full lg:w-[40%] mx-[4rem]">
                <h6 className="font-bold text-[2.5rem] leading-8">
                  {volunteer.name}
                </h6>
                <h6 className="font-bold text-[2.5rem] leading-8">
                  {volunteer.lastName}
                </h6>
                <p className="font-bold text-[1.25rem] mb-[1rem]">
                  {volunteer.title}
                </p>
                <p className="text-[1.25rem]">{volunteer.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VolunteersSay;
