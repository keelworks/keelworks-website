import { useState, useRef, useEffect } from "react";
import logo from "../../assets/images/KeelWorks-logo-color.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

  return (
    <nav className="fixed top-0 left-0 h-[5rem] w-full bg-black text-fontPrimary z-[100] flex items-center justify-center">
      <div className="relative w-full max-w-[3000px] flex justify-between mx-4 md:mx-8">
        <Link to="/">
          <div className="flex flex-col md:flex-row items-center text-white font-bold">
            <img src={logo} alt="logo" className="h-12 md:h-16" />
          </div>
        </Link>
        <div className="flex items-center gap-6">
          <button
            className="md:block w-[80px] h-[36px] bg-primary500 rounded-full hover:bg-primary300 transition duration-300 text-[1rem] text-[#101828] font-semibold"
            onClick={() =>
              window.open(
                "https://www.every.org/keelworks-foundation?utm_campaign=donate-link&method=card%2Cbank%2Cpaypal%2Cpay%2Cvenmo%2Cgift%2Cstocks%2Cdaf#/donate",
                "_blank"
              )
            }
          >
            Donate
          </button>

          <Link to="/login">
            <button className="hidden md:block w-[80px] h-[36px] border border-primary500 text-primary500 rounded-full hover:bg-primary300 hover:text-white transition duration-300 text-[1rem] font-semibold">
              Login
            </button>
          </Link>

          <div className="text-[2rem] cursor-pointer text-white flex items-center justify-center">
            {isOpen ? <FaTimes onClick={toggleMenu} /> : <FaBars onClick={toggleMenu} />}
          </div>
        </div>

        {isOpen && (
          <div
            ref={menuRef}
            className="absolute top-[4rem] right-[-2rem] lg:right-0 bg-black p-5 rounded-bl-[17px] md:rounded-b-[17px] shadow-lg"
          >
            <ul className="flex flex-col mt-3 gap-5">
              <li><Link to="about" className="text-white hover:text-gray-500">About Us</Link></li>
              <li><Link to="getinvolved" className="text-white hover:text-gray-500">Get Involved</Link></li>
              <li><Link to="oursolutions" className="text-white hover:text-gray-500">Our Solutions</Link></li>
              <li><Link to="blog" className="text-white hover:text-gray-500">Blog</Link></li>
              <li><Link to="success_stories" className="text-white hover:text-gray-500">Success Stories</Link></li>
              <li><Link to="getinvolved#faq" className="text-white hover:text-gray-500">FAQ</Link></li>
              <li><Link to="contactus" className="text-white hover:text-gray-500">Contact Us</Link></li>
              <li><Link to="/login" className="text-white hover:text-gray-500">Login</Link></li>
              <li><Link to="/signup" className="text-white hover:text-gray-500">Signup</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
