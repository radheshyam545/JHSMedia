import React from 'react';
import Navbar from '../../../Component/Navbar/header';
// import backgroundImage from '../../../assets/img-17.png'; // Adjust the path based on your project structure
import backgroundImage from '../../../assets/header_new_bg.png'; // Adjust the path based on your project structure

const DigitalInfluencerSection = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center text-white lg:h-[500px] sm:h-[300px] h-[250px]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Navbar />
        <div className="max-w-4xl mx-auto text-center mt-5 sm:mt-8 lg:mt-10 font-['Urbanist'] px-4 text-black">
          <h1 className="text-2xl sm:text-3xl md:text-[40px] lg:text-[55px] font-[500] mb-2 sm:mb-3 lg:mb-4 leading-tight lg:leading-[80px]">
            We Bring In The Digital <br /> Influencer Impact
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-normal md:leading-[30px] lg:leading-[36px] font-[300] mb-3 lg:mb-4">
            We are the fastest growing digital media organisation with an incredible community <br className="hidden md:block" />
            that we have formed in a short span.
          </p>
        </div>
      </div>
      {/* <div className="w-full bg-[#171719] h-[40px] sm:h-[50px] lg:h-[60px]"></div> */}
    </div>
  );
};

export default DigitalInfluencerSection;
