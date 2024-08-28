import React, { useState } from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const CareerSection = () => {
  const [selectedJob, setSelectedJob] = useState('Front End Developer');
  const [key, setKey] = useState(0); // Key to trigger re-render

  const handleJobClick = (jobTitle) => {
    setSelectedJob(jobTitle);
    setKey(prevKey => prevKey + 1); // Increment key to re-render RightSection
  };

  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[700px]">
      <LeftSection onJobClick={handleJobClick} className="w-full md:w-1/2" />
      <RightSection key={key} selectedJob={selectedJob} className="w-full md:w-1/2" />
    </div>
  );
};

export default CareerSection;
