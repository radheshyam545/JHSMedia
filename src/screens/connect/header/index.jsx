import React from 'react';
import Navbar from '../../../Component/Navbar/header';
import backgroundImage from '../../../assets/img-17.png'; // Adjust the path based on your project structure

const HeaderSection = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center text-white lg:h-[350px] sm:h-[300px] h-[250px]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Navbar />
        <div className="max-w-4xl mx-auto text-center mt-5 sm:mt-8 lg:mt-10 font-['Urbanist'] px-4">
          <h1 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[45px] font-[500] mb-2 sm:mb-3 lg:mb-4 leading-tight lg:leading-[60px]">
          Taking The World By Digital Storm <br /> JHS Media Influencer
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-[18px] leading-normal md:leading-[28px] lg:leading-[32px] font-[300] mb-3 lg:mb-4">
          Take the first step towards an innovative content for your brand. Reach out to us. <br className="hidden md:block" />
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeaderSection