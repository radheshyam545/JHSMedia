import React from 'react';
import importedImage from '../../../assets/about-us-group.png'; // replace with actual path to your image
import starIcon from '../../../assets/about-us-star.png'; // replace with the actual path to your star icon image

const AboutUsSection = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-start lg:px-52 px-8 py-16 bg-white">
      <div className="flex-shrink-0 mb-8 lg:mb-0">
        <img 
          src={importedImage} 
          alt="About Us" 
          className="block mx-auto lg:mx-0"
          style={{ width: '100%', maxWidth: '480px', height: 'auto' }} 
        />
      </div>

      <div className="lg:-ml-[80px] mt-8 lg:mt-0 flex flex-col font-['Urbanist'] text-center lg:text-left">
        <h2 className="text-[#E54F26] text-[34px] font-[800] mb-4">About Us</h2>
        <h3 className="text-gray-900 text-[30px] font-semibold mb-4 leading-[20px]">
          Why <span className='italic font-[300]'> JHS Media experienced </span>
        </h3>
        <p className="text-[#606060] text-[12px] lg:text-[12px] mb-8 font-[400]">
        Monk-E is a 360° creative digital media organisation that unifies Talent  Management, Video Production, Social Media Management and Influencer Marketing under one roof. Conceptualised by Viraj Sheth and Ranveer Allahbadia, we are an ensemble set of young creators who specialise in all things digital.
        </p>
        <p className='text-[#606060] text-[12px] lg:text-[12px] -mt-4 font-[400]'>
        You have a brand? Let us tell your story and leave it to us for a seamless execution right from the start.
        </p>
        <div className='lg:ml-28 lg:mt-5 mt-8'>
        <h4 className="text-gray-900 text-[34px] font-semibold mb-4 leading-[40px]">
          What Brews In <span className='italic font-[300]'> Our JHS Boardrooms? </span>
        </h4>
        <p className="text-[#606060] text-[12px] lg:text-[12px] font-[400]">
          We are a bunch of young, passionate trendsetters who also help some of the most credible names in the industry. So when you step into the digital universe with us, we ensure you are heard without getting lost in the echo of trends.
        </p>
        </div>
      </div>

      {/* Star Icon Image */}
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

export default AboutUsSection;
