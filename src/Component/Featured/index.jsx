import React from 'react';
import ProfileCard from './ProfileCard';

const FeaturedIn = ({bg}) => {
  return (
    <div className={`bg-${bg || "white"} py-12`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-40">
        <p className="text-xl md:text-2xl font-semibold mb-5 px-2 text-center md:text-left">
          As Featured In The <span className="italic text-gray-700">JHS Media Marketing</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn;
