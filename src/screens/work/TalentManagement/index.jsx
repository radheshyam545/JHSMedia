import React from 'react';
import BrandGrid from '../../../Component/Brands';

const TalentManagementSection = () => {
  return (
    <div className="bg-[#FFF4F1] py-8 md:py-12">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 xl:px-44 font-['Urbanist'] leading-normal">
        <h2 className="text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-semibold text-[#1B2430]">
          Talent Management <span className="font-light italic">Our Friends In the Industry</span>
        </h2>
        <p className="mt-2 text-[#606060] font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[24px]">
          In our long journey, we have joined hands with the leading names that now have their own digital legacy.
        </p>
      </div>
      <div className='md:-mt-10 lg:-mt-10'>
        <BrandGrid />
      </div>
    </div>
  );
};

export default TalentManagementSection;
