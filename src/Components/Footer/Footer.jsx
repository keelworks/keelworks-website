import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white grid grid-cols-1 place-items-center">
      <div className="w-full max-w-[3000px]">
        <div className="grid grid-cols-1 md:grid-cols-3 md:order-1 place-items-center gap-8 py-6 md:py-10 mx-[4rem] md:mx-[4rem] lg:mx-[8rem]">
          <div className="h-full w-full flex flex-row md:flex-col justify-between md:place-self-start items-center md:items-start gap-8">
            <div>
              <h1 className="mb-2 text-xl font-semibold">Let's Connect!</h1>
              <a
                href="mailto:info@keelworks.com"
                className="hover:text-gray-500"
              >
                info@keelworks.com
              </a>
            </div>
            <div className="">
              <button
                className="w-[116px] h-[47px] bg-primary500 rounded-full hover:bg-primary300 transition duration-[300ms] ease-linear text-[#101828] font-semibold"
                onClick={() => {
                  window.location.href =
                    "https://www.every.org/keelworks-foundation?utm_campaign=donate-link&method=card%2Cbank%2Cpaypal%2Cpay%2Cvenmo%2Cgift%2Cstocks%2Cdaf#/donate";
                }}
              >
                Donate
              </button>
            </div>
          </div>

          <div className="flex flex-col space-y-3 items-center md:place-self-end md:items-start md:order-3">
            <Link to="/about" className="hover:text-gray-500">
              About Us
            </Link>
            <Link to="/getinvolved" className="hover:text-gray-500">
              Get Involved
            </Link>
            <Link to="/oursolutions" className="hover:text-gray-500">
              Our Solutions
            </Link>
            <a href="#" className="hover:text-gray-500">
              Blog
            </a>
            <a href="#" className="hover:text-gray-500">
              Success Stories
            </a>
            <Link to="/contactus" className="hover:text-gray-500">
              Contact Us
            </Link>
          </div>

          <div className="h-full flex flex-col justify-end md:place-self-center md:order-2">
            <div className="flex space-x-8">
              <a
                href="https://www.linkedin.com/company/keelworks-foundation/"
                className="text-white hover:text-gray-500"
              >
                <div className="p-2 border-2 rounded-full hover:border-gray-500">
                  <FaLinkedinIn size={24} />
                </div>
              </a>
              <a
                href="https://www.facebook.com/TheKeelWorks"
                className="text-white hover:text-gray-500"
              >
                <div className="p-2 border-2 rounded-full hover:border-gray-500">
                  <FaFacebookF size={24} />
                </div>
              </a>
              <a
                href="https://www.instagram.com/thekeelworks/"
                className="text-white hover:text-gray-500"
              >
                <div className="p-2 border-2 rounded-full hover:border-gray-500">
                  <FaInstagram size={24} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
