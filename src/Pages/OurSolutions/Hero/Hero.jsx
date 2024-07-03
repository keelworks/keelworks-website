import { useNavigate } from 'react-router-dom';
import back from '../../../assets/images/Our-Solutions/back-arrow.png'
const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className="w-screen min-h-screen mt-[5rem] bg-[#FFFFFF] flex justify-center items-center font-Inter">
      <div className="w-full max-w-[3000px] h-full overflow-hidden relative flex justify-center items-center mx-[4rem]">
        <div className="flex items-center justify-center flex-col xl:w-8/12 w-full h-full">
          <div>
            <p className="text-[50px]  md:text-[60px] xl:text-[76px] font-bold text-[#2E2E2E] text-center">
              Our Solutions
            </p>
          </div>
          <div className="text-[#646464] font-bold text-[25px] md:text-[30px] xl:text-[40px] md:mt-2 text-center p-[10px]">
            <p>
              The KeelWorks Foundation offers three programs to get <br />people to work. Participants from <span className="text-primary500">KeelWings</span> and <span className="text-primary500">KeelMate</span> <br /> help us build the third and most demanding program, <span className="text-primary500">KeelMaster.</span>
            </p>
          </div>
          <div className="text-[20px]  md:text-[24px] text-[#646464] mt-4 sm:mt-8 p-[10px] text-center">
            <p>
              Each program leverages the combined intelligence of the group, teaching participants the importance <br />of mutual support. They foster tangible practice in career challenges, allowing each participant to <br /> present themselves as a tested candidate.
            </p>
          </div>
          <div className="flex justify-end w-full mt-4 sm:mt-8">
            <button className="rounded-full bg-primary500 p-4 text-[#0B0A0A] font-semibold text-[14px] flex items-end justify-end" onClick={() => navigate("/home")}>
              <img src={back} alt="" className="mx-2 w-[16px] h-[16px] inline-block align-middle" />
              <span>Back to HomePage</span>
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};
export default Hero;
