import { newsLetters } from "./data";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Blog = () => {
  const [activePage, setActivePage] = useState(1);
  const handelReadMore = (pdfURL) => {
    window.open(pdfURL, "_blank");
  };

  return (
    <div className="w-screen bg-white flex justify-center">
      <div className="w-screen max-w-[3000px] my-[5rem] md:mt-[8rem] flex justify-center h-auto ">
        <div className="m-[1rem] md:mx-[2rem] [@media(min-width:1100px)]:mx-[8rem] w-screen h-auto flex flex-col items-center gap-12 ">
          {/* Blog Header Section */}
          <div className="w-full md:w-[755px] h-auto flex justify-center items-center flex-col gap-5 px-4 md:px-0">
            <div className="h-auto md:h-[114px]">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-Inter font-bold fontPrimarys">
                Blogs
              </h1>
            </div>
            <div className="text-sm sm:text-base md:text-lg lg:text-xl fontPrimarys text-center">
              <p>
                Stay informed with the latest updates and insights from
                KeelWorks Foundation.
              </p>
            </div>
          </div>

          {/* New Section Below Blog Header */}
          <div className="w-full px-4 md:px-8 lg:px-24 flex flex-col items-center space-y-6 ">
            {/* <div className="w-[393px] h-[55px] flex items-center bg-white rounded-lg shadow-md p-4">
              <ul className="flex w-full justify-between space-x-4 font-normal">
                <li className="p-3 w-full text-center text-fontSecondary font-[16px] bg-gray-100 rounded-lg shadow-sm">
                  Newsletter
                </li>
                <li className="p-3 w-full text-center text-[#637381] font-[16px] rounded-lg">
                  Stories
                </li>
                <li className="p-3 w-full text-center text-[#637381] font-[16px]  rounded-lg">
                  Inspiration
                </li>
              </ul>
            </div> */}
            <div className="w-full max-w-[1170px] px-4 md:px-8">
              <p className="text-[#8995A9] text-sm mb-4 text-center font-normal">
                Showing 1-6 of 6 blogs
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
                {/* Cards */}
                {newsLetters.map((newsletter) => {
                  return (
                    <div
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:cursor-pointer"
                      key={newsletter.id}
                      onClick={() => {
                        handelReadMore(newsletter.pdfFile);
                      }}
                    >
                      <img
                        src={newsletter.image}
                        alt="Card Image"
                        className="w-full md:h-[150px] xl:h-[250px] object-cover"
                      />
                      <div className="relative p-8 w-full h-[6rem] flex justify-start flex-col items-center gap-7">
                        <div className="gap-2 md:gap-4 text-center flex flex-col">
                          <p className="text-[#111928] text-lg md:text-[1.25rem] font-semibold">
                            {`${newsletter.title} | ${newsletter.date}`}
                          </p>
                          {/* <p className="text-sm md:text-base font-normal text-greyCustom">
                            {newsletter.description}
                          </p> */}
                        </div>
                      </div>
                      {/* <iframe
                        src={newsletter.pdfFile}
                        frameborder="0"
                        width="100%"
                        height="600px"
                        title="PDF Viewer"
                        style={{ border: "none", marginTop: "20px" }}
                      ></iframe> */}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* ************** Pagination bar ************** */}
          {/* <div className=" w-full p-4 flex flex-col items-center space-y-4">
            <div className="flex items-center  rounded-lg border">
              <button
                className="p-3  sm:p-3  border-gray-300  text-[#637381] "
                onClick={() => setActivePage((prev) => Math.max(prev - 1, 1))}
              >
                <FaChevronLeft />
              </button>

              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  onClick={() => setActivePage(page)}
                  className={`px-3 sm:px-4 py-3.5 sm:py-2 text-sm sm:text-base text-center transition-colors border-l border-gray-300 min-w-[2rem] sm:min-w-[2.5rem] ${
                    activePage === page
                      ? "bg-[#FDDE82] text-fontSecondary"
                      : "bg-white text-[#637381]"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                className="p-4 sm:p-3 border-l border-gray-300 text-[#637381]"
                onClick={() => setActivePage((prev) => Math.min(prev + 1, 5))}
              >
                <FaChevronRight />
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
