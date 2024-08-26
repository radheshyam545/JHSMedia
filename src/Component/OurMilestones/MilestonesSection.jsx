import React from 'react';

const MilestonesSection = () => {
  return (
    <section className="bg-white py-12 px-12 md:px-16 lg:px-56 font-['Urbanist']">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="md:text-4xl font-semibold text-gray-900 mb-4 text-[48px] leading-[50px] text-left">
          Our Milestones so Far <span className="font-light italic">JHS Media Marketing</span>
        </h2>
        <div className="mt-4">
          <h3 className="text-[24px] md:text-xl font-semibold text-[#E54F26] mb-2 leading-[28.8px] text-left">Achievements</h3>
          <p className="text-[16px] md:text-base font-normal leading-[24px] text-left text-[#606060]">
            As a new-age media start-up, our work has been consistently recognized by
            various reputed media platforms. <br /> We are glad to share our achievements with you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;
