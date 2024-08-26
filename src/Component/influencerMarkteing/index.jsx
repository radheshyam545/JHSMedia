import React from 'react';
import InfluencerMarketingLogo from "../../assets/influencer-marketing.png";
import watchvideoicon from "../../assets/watch-video.png"

const InfluencerMarketingSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-8 ml-0 md:ml-[201px] font-['Urbanist'] w-full md:w-[1050px]">
      {/* Image Section */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img
          src={InfluencerMarketingLogo}
          alt="Influencer Marketing"
          className="rounded-lg shadow-lg w-full h-auto"
        />
        <div className="absolute inset-0 from-transparent to-pink-100 rounded-lg"></div>
      </div>
      {/* Text Section */}
      <div className="w-full md:w-1/2 md:pl-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Who Are We? <span className="text-gray-600 italic font-normal">JHS Media</span>
        </h2>
        <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-2">
          Influencer Marketing
        </h3>
        <p className="text-sm md:text-base text-gray-700 mt-4 font-normal">
          A bunch of changemakers in their early twenties who decided to change the way brands happen. Four years later, we are the innovative brains behind the digital marketing solutions of leading brands like Nykaa Man, Amazon Prime Video, Mama Earth, Livonser, Seeker Academy and many others.
        </p>
        <button className="flex items-center mt-6 hover:text-orange-600 font-semibold text-[20px] md:text-[24px] text-[#E54F26] leading-[24px] md:leading-[28.8px]">
          <img 
            src={watchvideoicon} 
            className="h-10 md:h-14 w-10 md:w-14 mr-3"
          />
          Watch Video
        </button>
      </div>
    </div>
  );
};

export default InfluencerMarketingSection;
