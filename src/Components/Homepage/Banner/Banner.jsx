import slide1 from "../../../assets/images/slide1.jpeg";

const Banner = () => {
  return (
    <div
      className="w-screen h-[calc(100vh-4rem)] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${slide1})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    ></div>
  );
};
export default Banner;
