import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 md:order-1 place-items-center gap-8 px-4 py-6 md:py-10">
          <div className="h-full flex flex-row md:flex-col justify-between items-center md:items-start gap-8">
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
              <button className="w-[116px] h-[47px] bg-primary500 rounded-full hover:bg-primary300 transition duration-[300ms] ease-linear text-[#101828] font-semibold">
                Donate
              </button>
            </div>
          </div>

          <div className="flex flex-col space-y-3 items-center md:items-start md:order-3">
            <a href="#" className="hover:text-gray-500">
              About Us
            </a>
            <a href="#" className="hover:text-gray-500">
              Get Involved
            </a>
            <a href="#" className="hover:text-gray-500">
              Our Solutions
            </a>
            <a href="#" className="hover:text-gray-500">
              Blog
            </a>
            <a href="#" className="hover:text-gray-500">
              Success Stories
            </a>
          </div>

          <div className="h-full flex flex-col justify-end md:order-2">
            <div className="flex space-x-8">
              <a href="#" className="text-white hover:text-gray-500">
                <div className="p-2 border-2 rounded-full hover:border-gray-500">
                  <FaLinkedinIn size={24} />
                </div>
              </a>
              <a href="#" className="text-white hover:text-gray-500">
                <div className="p-2 border-2 rounded-full hover:border-gray-500">
                  <FaFacebookF size={24} />
                </div>
              </a>
              <a href="#" className="text-white hover:text-gray-500">
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
