import { useState, useRef, useEffect } from "react";
import logo from "../../assets/images/KeelWorks-Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // ******** handeling click outside menu (closing menu) ***********
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  // *****************************************************************

  return (
    <nav className="fixed top-0 left-0 h-[5rem] w-full bg-black text-fontPrimary z-[100] flex items-center justify-center">
      <div className="relative w-full max-w-[3000px] flex justify-between mx-8">
        <a href="/">
          <div className="flex items-center text-white font-bold">
            <img src={logo} alt="logo" className="h-16" />
            <h1 className="text-2xl ps-4">KeelWorks</h1>
          </div>
        </a>
        <div className="flex items-center gap-6">
          <button
            className="hidden md:block w-[80px] h-[36px] bg-primary500 rounded-full hover:bg-primary300 transition duration-[300ms] ease-linear text-[1rem] text-[#101828] font-semibold"
            onClick={() => {
              window.location.href =
                "https://www.every.org/keelworks-foundation?utm_campaign=donate-link&method=card%2Cbank%2Cpaypal%2Cpay%2Cvenmo%2Cgift%2Cstocks%2Cdaf#/donate";
            }}
          >
            Donate
          </button>
          <button className="hidden md:block w-[80px] h-[36px] border-primary500 border-solid border-[4px] rounded-full hover:bg-primary300 transition duration-[300ms] ease-linear text-[1rem] text-primary500 hover:text-fontSecondary font-semibold">
            Login
          </button>

          <div className="text-[2rem] cursor-pointer text-white flex items-center justify-center">
            {isOpen ? (
              <FaTimes onClick={toggleMenu} />
            ) : (
              <FaBars onClick={toggleMenu} />
            )}
          </div>
        </div>

        {isOpen ? (
          <div
            ref={menuRef}
            className="absolute top-[4.5rem] right-[-2rem] lg:right-0 bg-black p-5 rounded-bl-[17px] md:rounded-b-[17px] shadow-[5px_2px_5px_5px_rgba(0,0,0,0.3)]"
          >
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
                <Link
                  to="about"
                  className="text-white hover:text-gray-500 transition duration-[200ms] ease-linear"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="getinvolved"
                  className="text-white hover:text-gray-500 transition duration-[200ms] ease-linear"
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <Link
                  to="oursolutions"
                  className="text-white hover:text-gray-500 transition duration-[200ms] ease-linear"
                >
                  Our Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="home"
                  className="text-white hover:text-gray-500 transition duration-[200ms] ease-linear"
                >
                  Blog
                </Link>
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
      </div>
    </nav>
  );
};
export default Navbar;
