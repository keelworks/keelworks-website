import card1 from '../../assets/images/Blogs/card-1.png'
import card2 from '../../assets/images/Blogs/card-2.png'
import card3 from '../../assets/images/Blogs/card-3.png'

export const Blog = () => {
  return (
    <div className="w-screen bg-white flex justify-center">
      <div className="w-screen max-w-[3000px] my-[5rem] md:mt-[8rem] flex justify-center h-auto ">
        <div className="m-[1rem] md:mx-[2rem] lg:mx-[8rem]  w-screen h-auto flex flex-col items-center gap-12 ">
          {/* Blog Header Section */}
          <div className="w-full md:w-[755px] h-auto flex justify-center items-center flex-col gap-5 px-4 md:px-0">
            <div className="h-auto md:h-[114px]">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-Inter font-bold fontPrimarys">
                Blogs
              </h1>
            </div>
            <div className="text-sm sm:text-base md:text-lg lg:text-xl fontPrimarys text-center">
              <p>
                There are many variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form.
              </p>
            </div>
          </div>


          {/* New Section Below Blog Header */}
          <div className="w-full px-4 md:px-8 lg:px-24 flex flex-col items-center space-y-6">
            <div className="w-[393px] h-[55px] flex items-center bg-white rounded-lg shadow-md p-4">
              <ul className="flex w-full justify-between space-x-4 font-normal">
                <li className="p-3 w-full text-center text-[#3758F9] font-[16px] bg-gray-100 rounded-lg shadow-sm">Stories</li>
                <li className="p-3 w-full text-center text-[#637381] font-[16px] rounded-lg shadow-sm">Tech</li>
                <li className="p-3 w-full text-center text-[#637381] font-[16px]  rounded-lg shadow-sm">Inspiration</li>
              </ul>
            </div>
            <div className="w-full max-w-[1170px] px-4 md:px-8">
              <p className="text-[#8995A9] text-sm mb-4 text-center font-normal">Showing 1-12 of 1000+ blog</p>
              <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 shadow-sm">
                {/* Card 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={card1} alt="Card Image" className="w-full h-[230px] object-cover" />
                  <div className="p-8 w-full flex justify-center flex-col items-center gap-7 ">
                    <div>
                      <p className='w-auto px-4 py-1 bg-[#FEF4D5] text-fontSecondary rounded-md text-xs'>Dec 22, 2023</p>
                    </div>
                    <div className='gap-2 md:gap-4 text-center flex flex-col'>
                      <p className="text-[#111928] text-lg md:text-2xl font-semibold">Your Support Makes A Difference</p>
                      <p className='text-sm md:text-base font-normal text-greyCustom'>Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.</p>
                    </div>
                    <div className='rounded-full border-fontSecondary px-5 md:px-7 py-2 md:py-3 text-fontSecondary border text-[14px] md:text-[16px] font-medium'>
                      <button>Read More</button>
                    </div>
                  </div>
                </div>
                  {/* Card 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={card2} alt="Card Image" className="w-full h-[230px] object-cover" />
                  <div className="p-8 w-full flex justify-center flex-col items-center gap-7 ">
                    <div>
                      <p className='w-auto px-4 py-1 bg-[#FEF4D5] text-fontSecondary rounded-md text-xs'>Dec 22, 2023</p>
                    </div>
                    <div className='gap-2 md:gap-4 text-center flex flex-col'>
                      <p className="text-[#111928] text-lg md:text-2xl font-semibold">Your Support Makes A Difference</p>
                      <p className='text-sm md:text-base font-normal text-greyCustom'>Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.</p>
                    </div>
                    <div className='rounded-full border-fontSecondary px-5 md:px-7 py-2 md:py-3 text-fontSecondary border text-[14px] md:text-[16px] font-medium'>
                      <button>Read More</button>
                    </div>
                  </div>
                </div>
                  {/* Card 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={card3} alt="Card Image" className="w-full h-[230px] object-cover" />
                  <div className="p-8 w-full flex justify-center flex-col items-center gap-7 ">
                    <div>
                      <p className='w-auto px-4 py-1 bg-[#FEF4D5] text-fontSecondary rounded-md text-xs'>Dec 22, 2023</p>
                    </div>
                    <div className='gap-2 md:gap-4 text-center flex flex-col'>
                      <p className="text-[#111928] text-lg md:text-2xl font-semibold">Your Support Makes A Difference</p>
                      <p className='text-sm md:text-base font-normal text-greyCustom'>Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.</p>
                    </div>
                    <div className='rounded-full border-fontSecondary px-5 md:px-7 py-2 md:py-3 text-fontSecondary border text-[14px] md:text-[16px] font-medium'>
                      <button>Read More</button>
                    </div>
                  </div>
                </div>
                {/* Card 4 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={card1} alt="Card Image" className="w-full h-[230px] object-cover" />
                  <div className="p-8 w-full flex justify-center flex-col items-center gap-7 ">
                    <div>
                      <p className='w-auto px-4 py-1 bg-[#FEF4D5] text-fontSecondary rounded-md text-xs'>Dec 22, 2023</p>
                    </div>
                    <div className='gap-2 md:gap-4 text-center flex flex-col'>
                      <p className="text-[#111928] text-lg md:text-2xl font-semibold">Your Support Makes A Difference</p>
                      <p className='text-sm md:text-base font-normal text-greyCustom'>Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.</p>
                    </div>
                    <div className='rounded-full border-fontSecondary px-5 md:px-7 py-2 md:py-3 text-fontSecondary border text-[14px] md:text-[16px] font-medium'>
                      <button>Read More</button>
                    </div>
                  </div>
                </div>
                  {/* Card 5 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={card2} alt="Card Image" className="w-full h-[230px] object-cover" />
                  <div className="p-8 w-full flex justify-center flex-col items-center gap-7 ">
                    <div>
                      <p className='w-auto px-4 py-1 bg-[#FEF4D5] text-fontSecondary rounded-md text-xs'>Dec 22, 2023</p>
                    </div>
                    <div className='gap-2 md:gap-4 text-center flex flex-col'>
                      <p className="text-[#111928] text-lg md:text-2xl font-semibold">Your Support Makes A Difference</p>
                      <p className='text-sm md:text-base font-normal text-greyCustom'>Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.</p>
                    </div>
                    <div className='rounded-full border-fontSecondary px-5 md:px-7 py-2 md:py-3 text-fontSecondary border text-[14px] md:text-[16px] font-medium'>
                      <button>Read More</button>
                    </div>
                  </div>
                </div>
                  {/* Card 6 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={card3} alt="Card Image" className="w-full h-[230px] object-cover" />
                  <div className="p-8 w-full flex justify-center flex-col items-center gap-7 ">
                    <div>
                      <p className='w-auto px-4 py-1 bg-[#FEF4D5] text-fontSecondary rounded-md text-xs'>Dec 22, 2023</p>
                    </div>
                    <div className='gap-2 md:gap-4 text-center flex flex-col'>
                      <p className="text-[#111928] text-lg md:text-2xl font-semibold">Your Support Makes A Difference</p>
                      <p className='text-sm md:text-base font-normal text-greyCustom'>Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.</p>
                    </div>
                    <div className='rounded-full border-fontSecondary px-5 md:px-7 py-2 md:py-3 text-fontSecondary border text-[14px] md:text-[16px] font-medium'>
                      <button>Read More</button>
                    </div>
                  </div>
                </div>
                



              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
