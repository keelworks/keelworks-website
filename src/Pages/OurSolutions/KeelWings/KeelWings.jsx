import keelwingsImg from "../../../assets/images/Our-Solutions/keelwings.jpg";

const KeelWings = () => {
  return (
    <div className="w-screen bg-white flex justify-center" id="keelWings">
      <div className="w-full max-w-[3000px] h-full flex justify-center items-center">
        <div className="max-w-[1300px] flex items-start md:items-center justify-center flex-col w-5/6 h-full mx-[1rem] md:mx-[4rem] lg:mx-[8rem]">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold lg:ml-0 md:ml-0">
            KeelWings
          </h2>
          <p className="md:text-[#646464] font-bold text-[1.562rem] md:text-[1.875rem] lg:text-[2.5rem] xl:text-[3rem] mt-7 text-left md:text-center">
            This dynamic program assists recent graduates who lack prior
            practical experience to practice the essential skills that qualify
            them for employment.
          </p>
          <img
            src={keelwingsImg}
            alt="team members"
            className="h-[400px] object-cover md:h-full mt-5 md:mt-14 border-b-[20px] border-primary500"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5 mb-[6rem]">
            <div className="grid gap-6">
              <p className="leading-loose">
                More than 150 recent graduates are hard at work on building
                software, leading projects, and developing products and
                programs. In the process, they’re also building professional
                relationships, strengthening their resumes, and growing their
                portfolios so they can advance to better paid positions with
                major organizations.
              </p>
              <p className="leading-loose">
                With the help of KeelWings, they are forming an experiential
                career foundation while practicing their skills and facing
                real-world challenges.
              </p>
              <p className="leading-loose">
                Job seekers in this program may have spent months applying to
                positions, only to never hear back from employers, leaving them
                frustrated and demoralized.
              </p>
            </div>
            <div className="grid gap-6 ">
              <p className="leading-loose">
                In KeelWings, they’ll be able to secure documentable work
                experience to list on a resume. With this experience under their
                belt, they’ll increase their likelihood of receiving responses
                from employers and, most importantly, of entering the workforce.
              </p>
              <p className="leading-loose">
                Some real-world roles they can take on include:
              </p>
              <ul className="list-disc list-inside leading-loose">
                <li>Project Manager</li>
                <li>Program Manager</li>
                <li>Product Manager</li>
                <li>Product Designer</li>
                <li>UX Research</li>
                <li>Data Analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default KeelWings;
