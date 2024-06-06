import { useState } from "react";
import logo from "../../assets/images/KeelWorks-Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative top-0 left-0 w-full bg-black text-fontPrimary p-3 z-[100]">
      <div className="flex justify-between me-3">
        <a href="/">
          <div className="flex items-center text-white font-bold">
            <img src={logo} alt="logo" className="h-16" />
            <h1 className="text-2xl ps-4">KeelWorks</h1>
          </div>
        </a>
        <div className="flex items-center gap-6">
          <button className="hidden md:block w-[116px] h-[47px] bg-primary500 rounded-full hover:bg-primary300 transition duration-[300ms] ease-linear text-[#101828] font-semibold">
            Donate
          </button>
          <button className="hidden md:block w-[116px] h-[47px] border-primary500 border-solid border-[4px] rounded-full hover:bg-primary300 transition duration-[300ms] ease-linear text-primary500 hover:text-fontSecondary font-semibold">
            Login
          </button>

          <div className="text-4xl cursor-pointer text-white flex items-center justify-center">
            {isOpen ? (
              <FaTimes onClick={toggleMenu} />
            ) : (
              <FaBars onClick={toggleMenu} />
            )}
          </div>
        </div>
      </div>

      {isOpen ? (
        <div className="absolute right-0 bg-black p-5 rounded-bl-[17px] shadow-[5px_2px_5px_5px_rgba(0,0,0,0.3)]">
          <ul className="flex flex-col mt-3 gap-5">
            <li className="md:hidden">
              <button className="w-[116px] h-[47px] bg-primary500 rounded-full hover:bg-primary300 transition duration-[300ms] ease-linear text-[#101828] font-semibold">
                Donate
              </button>
            </li>
            <li className="md:hidden">
              <button className="w-[116px] h-[47px] border-primary500 border-solid border-[4px] rounded-full hover:bg-primary300 transition duration-[300ms] ease-linear text-primary500 hover:text-fontSecondary font-semibold">
                Login
              </button>
            </li>
            <li>
              <a
                href="/"
                className="text-white hover:text-gray-500 transition duration-[200ms] ease-linear"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-white hover:text-gray-500 transition duration-[200ms] ease-linear"
              >
                Get Involved
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-white hover:text-gray-500 transition duration-[200ms] ease-linear"
              >
                Our Solutions
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-white hover:text-gray-500 transition duration-[200ms] ease-linear"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-white hover:text-gray-500 transition duration-[200ms] ease-linear"
              >
                Success Stories
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
};
export default Navbar;
