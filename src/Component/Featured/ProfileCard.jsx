import React from 'react';
import ceoprofileImg from "../../assets/ceo-profile.png" 

const ProfileCard = () => {
  return (
    <div className="max-w-[480px] mx-auto bg-white border border-[#E5E5E5] shadow-lg rounded-xl overflow-hidden my-4 h-auto font-['Urbanist']">
      <div className="flex flex-col md:flex-row items-center p-6">
        <img
          className="w-[84px] h-[84px] rounded-full border-2 border-white shadow-lg"
          src={ceoprofileImg}
          alt="Profile"
        />
        <div className="mt-4 md:mt-0 md:ml-4 text-center md:text-left">
          <h2 className="text-[20px] md:text-[24px] font-semibold text-gray-800 leading-[28.8px] mt-2">Ranveer Allahbadia</h2>
          <p className="text-[#E54F26] font-[500] text-[16px] md:text-[18px] leading-[21.6px] mt-1">CEO/Founder</p>
        </div>
      </div>
      <div className="p-4 md:p-7 -mt-6 md:-mt-9 text-center md:text-left">
        <p className="text-[#1B2430] italic mb-2 font-[500] text-[20px] md:text-[24px] leading-[28px] md:leading-[31px]">
          We want to mentor women and help them turn entrepreneurs:
        </p>
        <p className="text-[#606060] text-[14px] md:text-[16px] font-[400] leading-[24px] md:leading-[26px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
