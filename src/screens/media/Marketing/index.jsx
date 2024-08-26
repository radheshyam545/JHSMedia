import React from 'react';
import CardGrid from '../../../Component/AboutUsMediaMarketing';
import starIcon from '../../../assets/about-us-star.png'; // replace with the actual path to your star icon image

const MarketingSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="text-left sm:mr-auto sm:w-full lg:mr-[270px] lg:w-auto font-['Urbanist']">
        <h2 className="text-2xl sm:text-[30px] font-semibold text-[#1B2430] text-center sm:text-left leading-[50px]">
          As Featured In <span className="italic font-[300]">JHS Media Marketing</span>
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#606060] text-center sm:text-left max-w-xl sm:max-w-2xl leading-[24px]">
          Interested in our story? Discover the story of the real storytellers through the eyes of print media.
        </p>
      </div>
      <CardGrid />
      <div className="absolute top-4 right-4 lg:top-0 lg:right-0 lg:mt-4 lg:mr-24">
        <img 
          src={starIcon} 
          alt="Star Icon" 
          className="w-12 h-12 lg:w-24 lg:h-24"
        />
      </div>
    </div>
  );
};

export default MarketingSection;
