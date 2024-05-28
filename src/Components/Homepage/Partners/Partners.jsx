import KeelWorks from "../../../assets/images/KeelWorks-Logo.png";

const Partners = () => {
  return (
    <div className="bg-grey200 flex flex-col items-center justify-center pt-10 pb-10">
      <h2 className="text-fontPrimary font-bold text-[3.56rem] leading-[85px]">
        Our partners
      </h2>
      <div className="flex items-center justify-center gap-[15rem] mt-10">
        <img src={KeelWorks} alt="" className="w-[8rem]" />
        <img src={KeelWorks} alt="" className="w-[8rem]" />
        <img src={KeelWorks} alt="" className="w-[8rem]" />
      </div>
    </div>
  );
};
export default Partners;
