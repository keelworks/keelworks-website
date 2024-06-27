import Volunteer1 from "../../../assets/images/Get-Involved/Volunteer1.jpg";
import Volunteer2 from "../../../assets/images/Get-Involved/Volunteer2.png";
import ImageFrame from "../ImageFrame/ImageFrame";

const volunteers = [
  { id: 1, name: "Kathryn Tomlinson", title: 'Instructional Designer', image: Volunteer1, content: 'Working toward an MS in Instructional Design Technology, I needed experience to qualify for work in the field. The KeelWorks program gave me that experience. Working with other professionals, I created valuable portfolio components that I still use today. KeelWorks is an important part of my career growth. I use what I learned every day. KeelWorks helped me at a time when I needed direction, guidance, and experience. I gained all of these and so much more through the program. The KeelWorks motto is Learning to Live, Living to Learn: I take that to heart as I continue to learn and apply my craft.' },
  { id: 2, name: "Kathryn Tomlinson", title: 'Instructional Designer', image: Volunteer2, content: 'Working toward an MS in Instructional Design Technology, I needed experience to qualify for work in the field. The KeelWorks program gave me that experience. Working with other professionals, I created valuable portfolio components that I still use today. KeelWorks is an important part of my career growth. I use what I learned every day. KeelWorks helped me at a time when I needed direction, guidance, and experience. I gained all of these and so much more through the program. The KeelWorks motto is Learning to Live, Living to Learn: I take that to heart as I continue to learn and apply my craft.' },
];

const VolunteersSay = () => {
  return (
    <div className="w-screen mt-[5rem] flex justify-center flex-col">
      <div className="w-full max-w-[3000px] flex flex-col items-center justify-center text-6xl font-bold overflow-hidden  mx-[2rem] mb-[6rem]">
        What our Volunteers Say
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center gap-[2rem]">
        {volunteers.map((volunteer, index) => {
          return (
            <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} w-full md:w-[80%] mx-[2rem] md:mx-[10rem] gap-[2rem] md:gap-[7rem]`}>
              <ImageFrame image={volunteer.image} name={volunteer.name} index={index} />
              <div className="flex flex-col m-auto gap-[1rem] my-[2rem] w-full lg:w-[40%] p-[2rem]">
                <h6 className="font-bold text-4xl">{volunteer.name}</h6>
                <p className="font-bold mb-[1rem]">{volunteer.title}</p>
                <p>{volunteer.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VolunteersSay;


