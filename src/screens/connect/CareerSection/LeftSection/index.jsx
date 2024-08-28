import React from 'react';

const LeftSection = ({ onJobClick }) => {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full md:w-1/2 bg-[#1F1412] text-white p-6 md:p-10 flex flex-col">
      <div className="max-w-md mx-auto grid grid-cols-1 md:grid-cols-6 gap-4">
        <div
          className="hidden md:flex flex-col items-start col-span-1 my-[400px] -ml-10 justify-center cursor-pointer"
          onClick={handleScroll}
        >
          <div className="w-6 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
          </div>
          <p className="text-gray-400 text-sm mt-2">Scroll</p>
        </div>

        <div className="col-span-5 md:py-8 font-['Urbanist'] pl-10" id="target-section">
          <h1 className="text-[24px] md:text-[34px] font-semibold mb-4 leading-[32px] md:leading-[40px] text-[#FFFFFF]">
            Want to Join The <span className="italic font-[300]">JHS<br className="hidden md:block" /> Media Marketing</span>
          </h1>
          <p className="mb-8 text-[10px] md:text-[11px] leading-[14px] md:leading-[15px] font-[400] text-[#FFFFFF]">
            We have been looking out for you! And your expertise in all things innovation!
            <br /><br />
            <span className='text-[10px] md:text-[11px]'>
            At Mark-L we believe in innovating the content and stories we tell through ingenious minds. We are a clan of dedicated, passionate, multi-skilled think-tanks who are always looking out for more.
            </span>
            <br /><br />
            And if this sounds like you, say hello to us with your resume.
          </p>
          
          <ul className="space-y-4 border-l-2 border-gray-700 pl-4 py-4">
            {['Front End Developer', 'Back End Developer', 'Creative Leader', 'Graphic Designer & Video Editor'].map((job) => (
              <li
                key={job}
                className="text-lg font-[500] text-[#FFFFFF99] leading-[28.8px] transition-all duration-300 ease-in-out hover:text-[20px] md:hover:text-[20px] hover:font-bold hover:leading-[28.8px] md:hover:leading-[38.4px] hover:text-[#FFFFFF] cursor-pointer"
                onClick={() => onJobClick(job)}
              >
                {job}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
};

export default LeftSection;
