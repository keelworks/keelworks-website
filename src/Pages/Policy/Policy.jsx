export const Policy = () => {
  return (
    <div className="w-screen h-screen bg-white flex justify-center items-start">
      <div className="w-screen max-w-[3000px] mt-[5rem] md:mt-[8rem] flex justify-start items-center">
        <div className="mx-[1rem] md:mx-[2rem] lg:mx-[8rem]">
          <div className="w-full flex justify-start items-start gap-[10rem] mt-[4rem]">
            <div className="text-left flex flex-col gap-2">
              <p className="text-[1.2rem] font-bold text-gray-600">
                Terms of Service
              </p>
              <p className="text-[1.2rem] font-bold text-black underline">
                Non-discrimination Policy
              </p>
              <p className="text-[1.2rem] text-black">Privacy Policy</p>
              <p className="text-[1.2rem] text-black">
                Accessibility Statements
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-[3.5rem] lg:text-5xl font-bold text-left">
                Non-discrimination Policy Page
              </h2>
              <p className="text-[1.2rem] text-black mt-8">
                Effective Date:{" "}
                <span className="text-gray-600 font-bold">July 10, 2024</span>
              </p>
              <p className="text-[1.2rem] text-black mt-8">
                Purpose: KeelWorks Foundation is committed to creating an
                inclusive environment that values diversity and promotes
                equality for all individuals. This policy reaffirms our
                dedication to fostering an organization and community that is
                free from discrimination and harassment. Scope: This policy
                applies to all KeelWorks Foundation employees, volunteers,
                interns, contractors, vendors, and third-party partners.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
