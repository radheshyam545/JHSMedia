import React from 'react';
import TalentManagement from "../../assets/talent-management.png";
import exploreMore from "../../assets/explore-more.png";

const TalentManagementCard = () => {
  return (
    <div className="bg-white border border-gray-200 shadow-md rounded-xl p-4 sm:p-6 w-full max-w-[200px] sm:max-w-[230px] md:max-w-[250px] h-[350px] sm:h-[400px] transform transition hover:-translate-y-3 mx-auto">
      <div className="flex justify-center mb-4">
        <div className="p-4 rounded-full w-[60px] sm:w-[83px]">
          <img src={TalentManagement} alt="Talent Management Icon" />
        </div>
      </div>
      <h3 className="text-center text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2">
        Talent Management
      </h3>
      <p className="text-center text-xs sm:text-sm md:text-base text-gray-600 mb-4">
        We enable creators to become the biggest personal brands with the help
        of monetization, PR, and collaborations.
      </p>
      <div className="text-center">
        <a
          href="#"
          className="text-red-500 hover:text-red-600 font-medium inline-flex items-center"
        >
          Explore More
          <img src={exploreMore} className="ml-2" alt="Explore More Arrow" />
        </a>
      </div>
    </div>
  );
};

export default TalentManagementCard;
