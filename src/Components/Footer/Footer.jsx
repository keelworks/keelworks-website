import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white grid grid-cols-1 place-items-center">
      <div className="w-full max-w-[3000px]">
        <div className="grid grid-cols-1 md:grid-cols-2 md:order-1 place-items-start md:place-items-end gap-8 py-6 md:py-10 mx-[2rem] md:mx-[2rem] lg:mx-[8rem]">
          <div className="h-full w-full flex flex-col justify-start md:place-self-start gap-5">
            <div>
              <h1 className="mb-2 text-xl font-semibold">Let's Connect!</h1>
              <a
                href="mailto:info@keelworks.com"
                className="hover:text-gray-500 text-xl italic"
              >
                info@keelworks.com
              </a>
              <p className="text-[0.8rem] mt-3">KeelWorks Foundation © 2024.</p>
              <p className="text-[0.8rem]">All rights reserved.</p>
            </div>
            <div className="">
              <button
                className="w-[116px] h-[47px] bg-primary500 rounded-full hover:bg-primary300 transition duration-[300ms] ease-linear text-[#101828] font-semibold"
                onClick={() => {
                  window.open(
                    "https://www.every.org/keelworks-foundation?utm_campaign=donate-link&method=card%2Cbank%2Cpaypal%2Cpay%2Cvenmo%2Cgift%2Cstocks%2Cdaf#/donate",
                    "_blank"
                  );
                }}
              >
                Donate
              </button>
            </div>
            <div className="hidden h-full md:flex items-end md:order-2 md:mt-8">
              <div className="flex space-x-8">
                <a
                  href="https://www.linkedin.com/company/keelworks-foundation/"
                  className="text-white hover:text-gray-500"
                  target="_blank"
                >
                  <div className="p-2 border-2 rounded-full hover:border-gray-500 ">
                    <FaLinkedinIn size={24} />
                  </div>
                </a>
                <a
                  href="https://www.youtube.com/@thekeelworksfundation8668"
                  className="text-white hover:text-gray-500"
                  target="_blank"
                >
                  <div className="p-2 border-2 rounded-full hover:border-gray-500">
                    <FaYoutube size={24} />
                  </div>
                </a>
                <a
                  href="https://x.com/keelworksthe"
                  className="text-white hover:text-gray-500"
                  target="_blank"
                >
                  <div className="p-2 border-2 rounded-full hover:border-gray-500">
                    <FaXTwitter size={24} />
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/TheKeelWorks"
                  className="text-white hover:text-gray-500"
                  target="_blank"
                >
                  <div className="p-2 border-2 rounded-full hover:border-gray-500">
                    <FaFacebookF size={24} />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/thekeelworks/"
                  className="text-white hover:text-gray-500"
                  target="_blank"
                >
                  <div className="p-2 border-2 rounded-full hover:border-gray-500">
                    <FaInstagram size={24} />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-5 items-start md:place-self-end md:order-3">
            <Link to="/about" className="hover:text-gray-500">
              About Us
            </Link>
            <Link to="/getinvolved" className="hover:text-gray-500">
              Get Involved
            </Link>
            <Link to="/oursolutions" className="hover:text-gray-500">
              Our Solutions
            </Link>
            <Link to="/comingsoon" className="hover:text-gray-500">
              Blog
            </Link>
            <Link to="/success_stories" className="hover:text-gray-500">
              Success Stories
            </Link>
            <Link
              to="getinvolved#faq"
              className="text-white hover:text-gray-500"
            >
              FAQ
            </Link>
            <Link to="/contactus" className="hover:text-gray-500">
              Contact Us
            </Link>
          </div>

          <div className="md:hidden h-full flex flex-col justify-end md:place-self-center md:order-2">
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
                href="https://www.youtube.com/@thekeelworksfundation8668"
                className="text-white hover:text-gray-500"
              >
                <div className="p-2 border-2 rounded-full hover:border-gray-500">
                  <FaYoutube size={24} />
                </div>
              </a>
              <a
                href="https://x.com/keelworksthe"
                className="text-white hover:text-gray-500"
              >
                <div className="p-2 border-2 rounded-full hover:border-gray-500">
                  <FaXTwitter size={24} />
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
