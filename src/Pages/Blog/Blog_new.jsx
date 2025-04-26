import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { newsLetters } from "./data";
import media1 from "../../assets/images/Blogs/media1.jpg";
import media2 from "../../assets/images/Blogs/media2.png";
import media3 from "../../assets/images/Blogs/media3.png";

const blogs = [
  {
    title: 'Your Support Makes A Difference',
    date: 'Dec 22, 2023',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    image: media1,
    pdfFile: "https://drive.google.com/file/d/1YKU_-5sXFtv-2N0RzcVCh51G5qHQQkg8/view?usp=drive_link", 
  },
  {
    title: 'Financial Disability Dables',
    date: 'Dec 22, 2023',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    image: media2,
    pdfFile: "https://drive.google.com/file/d/1YKU_-5sXFtv-2N0RzcVCh51G5qHQQkg8/view?usp=drive_link",
  },
  {
    title: 'Your Support Makes A Difference',
    date: 'Dec 22, 2023',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    image: media3,
    pdfFile: "https://drive.google.com/file/d/1YKU_-5sXFtv-2N0RzcVCh51G5qHQQkg8/view?usp=drive_link",
  },
];

const Blog_new = () => {
  const [activeFilter, setActiveFilter] = useState('Article'); // Default filter
  const [activePage, setActivePage] = useState(1);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handelReadMore = (pdfURL) => {
    window.open(pdfURL, "_blank");
  };

  // Get the number of items in the current filter
  const getFilteredItems = () => {
    if (activeFilter === 'Newsletter') {
      return newsLetters;
    } else if (activeFilter === 'Article') {
      return blogs;
    } else {
      // Handle Media filter (if you have media items)
      return blogs; // Change this if you have media items
    }
  };

  const filteredItems = getFilteredItems();

  // Determine if pagination should be shown based on the number of cards
  const shouldShowPagination = filteredItems.length > 12;

  return (
    <div className="w-screen bg-white flex justify-center">
      <div className="w-screen max-w-[3000px] my-[5rem] md:mt-[8rem] flex justify-center h-auto">
        <div className="m-[1rem] md:mx-[2rem] [@media(min-width:1100px)]:mx-[8rem] w-screen h-auto flex flex-col items-center gap-12">

          {/* Blog Header Section */}
          <div className="w-full md:w-[755px] h-auto flex justify-center items-center flex-col gap-5 px-4 md:px-0">
            <div className="h-auto md:h-[114px]">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-Inter font-bold text-[#333]">
                Blogs
              </h1>
            </div>
            <div className="text-sm sm:text-base md:text-lg lg:text-xl fontPrimarys text-center text-[#000]">
              <p>
                There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>

          {/* Filter Section */}
          <div className="w-full flex justify-center mb-6">
            <div className="flex items-center bg-white shadow-lg rounded-lg px-1 py-1">
              <button
                onClick={() => handleFilterChange('Newsletter')}
                className={`px-6 py-2 rounded-md font-semibold text-sm transition-all duration-300 ${activeFilter === 'Newsletter' ? 'bg-[#DBA300] text-white' : 'text-[#646464]'}`}
              >
                Newsletter
              </button>
              <button
                onClick={() => handleFilterChange('Article')}
                className={`px-6 py-2 rounded-md font-semibold text-sm transition-all duration-300 ${activeFilter === 'Article' ? 'bg-[#DBA300] text-white' : 'text-[#646464]'}`}
              >
                Article
              </button>
              <button
                onClick={() => handleFilterChange('Media')}
                className={`px-6 py-2 rounded-md font-semibold text-sm transition-all duration-300 ${activeFilter === 'Media' ? 'bg-[#DBA300] text-white' : 'text-[#646464]'}`}
              >
                Media
              </button>
            </div>
          </div>

          {/* New Section Below Blog Header */}
          <div className="w-full px-4 md:px-8 lg:px-24 flex flex-col items-center space-y-6">
            <div className="w-full max-w-[1170px] px-4 md:px-8">
              {/* Dynamic Text for Showing Items */}
              <p className="text-[#8995A9] text-sm mb-4 text-center font-normal">
                Showing {filteredItems.length} {activeFilter}{''}
                {filteredItems.length !== 1 ? 's' : ''}
              </p>

              {/* Cards Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {filteredItems.map((item, index) => (
                  <div
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:cursor-pointer"
                    key={index}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full md:h-[150px] xl:h-[250px] object-cover"
                    />
                    <div className="relative p-8 w-full h-[6rem] flex justify-start flex-col items-center gap-7">
                      <div className="gap-2 md:gap-4 text-center flex flex-col">
                        <p className="text-[#111928] text-lg md:text-[1.25rem] font-semibold">
                          {`${item.title} | ${item.date}`}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center mt-4 mb-8">
                      <button
                        className="bg-white text-[#8995A9] border border-[#8995A9] rounded-full px-8 py-2 mt-4 text-sm font-bold hover:bg-[#DBA300] hover:text-white transition-colors duration-300"
                        onClick={() => handelReadMore(item.pdfFile)}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pagination Section */}
          <div className="w-full p-4 flex flex-col items-center space-y-4">
            <div className="flex items-center rounded-lg border">
              <button
                className={`p-3 sm:p-3 border-gray-300 text-[#637381] ${!shouldShowPagination && 'cursor-not-allowed'}`}
                onClick={() => setActivePage((prev) => Math.max(prev - 1, 1))}
                disabled={!shouldShowPagination}
              >
                <FaChevronLeft />
              </button>

              <button
                className={`px-3 sm:px-4 py-3.5 sm:py-2 text-sm sm:text-base text-center transition-colors border-l border-gray-300 min-w-[2rem] sm:min-w-[2.5rem] ${activePage === 1
                  ? "bg-[#FDDE82] text-fontSecondary"
                  : "bg-white text-[#637381]"
                  }`}
              >
                1
              </button>

              <button
                className={`p-4 sm:p-3 border-l border-gray-300 text-[#637381] ${!shouldShowPagination && 'cursor-not-allowed'}`}
                onClick={() => setActivePage((prev) => Math.min(prev + 1, 5))}
                disabled={!shouldShowPagination}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Blog_new;
