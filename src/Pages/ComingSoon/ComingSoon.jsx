import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="w-screen h-screen bg-grey200 flex justify-center items-center">
      <div className="w-screen h-1/2 flex flex-col justify-center items-center ">
        <h3 className="text-primary500 text-[3rem] md:text-[4.5rem] font-semibold">
          Coming Soon!
        </h3>
        <p className="text-fontPrimary text-[1rem] md:text-[1.6rem] pb-5">
          We're working on something special. <br />
          Stay tuned!
        </p>
        <Link
          to="/"
          className="w-[200px] h-[70px] text-[1rem] border-primary500 border-solid border-[4px] rounded-full flex justify-center items-center hover:bg-primary300 transition duration-[300ms] ease-linear text-primary500 hover:text-fontSecondary font-semibold"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};
export default ComingSoon;
