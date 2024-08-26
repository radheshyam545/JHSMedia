import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const CareerSection = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[700px]">
      <LeftSection className="w-full md:w-1/2" />
      <RightSection className="w-full md:w-1/2" />
    </div>
  );
};

export default CareerSection;
