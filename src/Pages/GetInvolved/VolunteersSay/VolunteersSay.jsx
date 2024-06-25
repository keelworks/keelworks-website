import Volunteer1 from "../../../assets/images/Get-Involved/Volunteer1.jpg"
import Volunteer2 from "../../../assets/images/Get-Involved/Volunteer2.png"

const volunteers = [
  { id: 1, name: "Kathryn Tomlinson", title: 'Instructional Designer ', image: Volunteer1, content: 'Working toward an MS in Instructional Design Technology,  I needed experience to qualify for work in the field. The KeelWorks program gave me that experience. Working with other professionals, I created valuable portfolio components that I still use today.  KeelWorks is an important part of my career growth. I use what I learned every day.  KeelWorks helped me at a time when I needed direction, guidance, and experience.  I gained all of these and so much more through the program. The KeelWorks motto is Learning to Live, Living” to Learn: I take that to heart as I continue to learn and apply my craft.' },
  { id: 2, name: "Kathryn Tomlinson", title: 'Instructional Designer ', image: Volunteer2, content: 'Working toward an MS in Instructional Design Technology,  I needed experience to qualify for work in the field. The KeelWorks program gave me that experience. Working with other professionals, I created valuable portfolio components that I still use today.  KeelWorks is an important part of my career growth. I use what I learned every day.  KeelWorks helped me at a time when I needed direction, guidance, and experience.  I gained all of these and so much more through the program. The KeelWorks motto is Learning to Live, Living” to Learn: I take that to heart as I continue to learn and apply my craft.' },
]

const VolunteersSay = () => {
  return (
    <div className="w-screen  mt-[5rem] flex justify-center">
      <div className="w-full max-w-[3000px] h-full flex flex-col items-center justify-center overflow-hidden relative">
        <h6 className="text-4xl font-bold m-[4rem]">  What our Volunteers Say</h6>
        <div className="flex flex-col items-center justify-center gap-[2rem] m-[8rem]">
          
            {volunteers.map((volunteer, index) =>{
              return (
              <div key={index} className={`flex ${index % 2 ===0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <img src={volunteer.image} alt={volunteer.name} className="w-full border-2 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4"/>
                <div className="flex flex-col gap-[1rem] m-[1rem]">
                  <h6 className="font-bold text-4xl w-[10%]">{volunteer.name}</h6>
                  <p className="font-bold mb-[1rem]">{volunteer.title}</p>
                  <p className="w-[50%]">{volunteer.content}</p>
                </div>
              </div>
            ) } )}
        </div>
      </div>
    </div>
  );
};
export default VolunteersSay;
