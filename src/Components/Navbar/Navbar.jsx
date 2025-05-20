// src/Components/Navbar/Navbar.jsx

import { useState, useRef, useEffect } from "react";
import logo from "../../assets/images/KeelWorks-logo-color.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for user on component mount and when localStorage changes
    const checkUser = () => {
      const userJson = localStorage.getItem('user');
      if (userJson) {
        setUser(JSON.parse(userJson));
      } else {
        setUser(null);
      }
    };
    
    // Initial check
    checkUser();
    
    // Set up event listener for storage changes
    window.addEventListener('storage', checkUser);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('storage', checkUser);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  // Add event listener for clicks outside menu
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 h-[5rem] w-full bg-black text-fontPrimary z-[100] flex items-center justify-center">
      <div className="relative w-full max-w-[3000px] flex justify-between mx-4 md:mx-8">
        <a href="/">
          <div className="flex flex-col md:flex-row items-center text-white font-bold">
            <img src={logo} alt="logo" className="h-12 md:h-16" />
          </div>
        </a>
        <div className="flex items-center gap-6">
          {/* Donation button */}
          <button
            className="md:block w-[80px] h-[36px] bg-primary500 rounded-full hover:bg-primary300 transition duration-[300ms] ease-linear text-[1rem] text-[#101828] font-semibold"
            onClick={() => {
              window.open(
                "https://www.every.org/keelworks-foundation?utm_campaign=donate-link&method=card%2Cbank%2Cpaypal%2Cpay%2Cvenmo%2Cgift%2Cstocks%2Cdaf#/donate",
                "_blank"
              );
            }}
          >
            Donate
          </button>
          
          {/* User greeting and login/logout buttons */}
          {user ? (
            <div className="flex items-center">
              <span className="hidden md:block mr-4 text-white">
                Hello, {user.firstName}!
              </span>
              <button 
                className="md:block w-[80px] h-[36px] border-primary500 border-solid border-[4px] rounded-full hover:bg-primary300 transition duration-[300ms] ease-linear text-[1rem] text-primary500 hover:text-fontSecondary font-semibold"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link 
              to="/login"
              className="md:block w-[80px] h-[36px] border-primary500 border-solid border-[4px] rounded-full hover:bg-primary300 transition duration-[300ms] ease-linear text-[1rem] text-primary500 hover:text-fontSecondary font-semibold flex items-center justify-center"
            >
              Login
            </Link>
          )}

          <div className="text-[2rem] cursor-pointer text-white flex items-center justify-center">
            {isOpen ? (
              <FaTimes onClick={toggleMenu} />
            ) : (
              <FaBars onClick={toggleMenu} />
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen ? (
          <div
            ref={menuRef}
            className="absolute top-[4rem] right-[-2rem] lg:right-0 bg-black p-5 rounded-bl-[17px] md:rounded-b-[17px] shadow-[5px_2px_5px_5px_rgba(0,0,0,0.3)] z-50"
          >
            <ul className="flex flex-col mt-3 gap-5">
              {/* Regular navigation links */}
              <li>
                <Link
                  to="about"
                  className="text-white hover:text-gray-500 transition duration-[200ms] ease-linear"
                >
                  About Us
                </Link>
              </li>
              {/* Other navigation links... */}
              
              {/* Show user name and logout in mobile menu */}
              {user && (
                <>
                  <li className="md:hidden text-white">
                    Hello, {user.firstName}!
                  </li>
                  <li>
                    <Link
                      to={user.role === 'Admin' ? '/admin-dashboard' : '/user-dashboard'}
                      className="text-white hover:text-gray-500 transition duration-[200ms] ease-linear"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button
                      className="text-white hover:text-gray-500 transition duration-[200ms] ease-linear"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
              
              {/* Show login in mobile menu if not logged in */}
              {!user && (
                <li className="md:hidden">
                  <Link
                    to="/login"
                    className="text-white hover:text-gray-500 transition duration-[200ms] ease-linear"
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
};
export default Navbar;