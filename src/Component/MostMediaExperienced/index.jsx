import React from 'react';
import TalentManagementCard from './managementCards';

const InfluencerServices = () => {
  const data = [1, 2, 3, 4];
  return (
    <div className="mt-[90px] min-h-screen bg-gradient-to-r from-white font-['Urbanist']">
      <div className="text-left px-4 sm:px-8 md:px-12 lg:px-[201px]">
        <p className="font-semibold text-[20px] sm:text-[24px] lg:text-[28px] leading-[26px] sm:leading-[30px] lg:leading-[34px]">
          Most <span className="font-normal italic">JHS Media experienced</span>
        </p>
        <p className="font-semibold text-[20px] sm:text-[24px] lg:text-[28px] leading-[26px] sm:leading-[30px] lg:leading-[34px]">
          Influencer Services
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mt-[30px] sm:mt-[40px] px-4 sm:px-8 md:px-12 lg:px-[100px] xl:px-[201px]">
        {data.map((item, index) => (
          <TalentManagementCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default InfluencerServices;
