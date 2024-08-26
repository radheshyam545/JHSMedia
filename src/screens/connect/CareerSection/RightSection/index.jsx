import React from 'react';
import connect_Developer_Illustration from "../../../../assets/connect_Developer_Illustration.png";

const RightSection = () => {
  return (
    <div className="w-full md:w-1/2 bg-[#FFF4F1] text-black py-10 flex flex-col font-['Urbanist']">
      <div className="max-w-md mx-auto px-4 md:px-0 md:ml-10 lg:ml-10">
        {/* Image Section */}
        <div className="flex justify-center mb-4">
          <img 
            src={connect_Developer_Illustration} 
            alt="Developer Illustration" 
            className="w-[200px] h-[150px] md:w-[270.35px] md:h-[210.15px]"
          />
        </div>

        {/* Description Section */}
        <p className="mb-2 text-[10px] md:text-[11px] leading-[18px] md:leading-[20px] font-[400] text-[#000000]">
          We are looking for a dynamic hustler who has a positive approach towards developing <br/>
          and creating new elements for user needs.
        </p>
        <p className="mb-2 text-[10px] md:text-[11px] leading-[18px] md:leading-[20px] font-[400] text-[#000000]">
          You shall be expected to collaborate with user experience designers, graphic <br/> designers, 
          and front-end engineers.
        </p>
        <p className="mb-2 text-[10px] md:text-[11px] leading-[18px] md:leading-[20px] font-[400] text-[#000000]">
          You'll be responsible for building and maintaining elements that include graphs,<br/>
          widgets, custom UI controls, and much more.
        </p>

        {/* Pre-Requisites Section */}
        <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#000000] leading-[20px] md:leading-[22px]">Pre-Requisites:</h2>
        <ol className="list-decimal pl-4 md:pl-6 space-y-1 md:space-y-2 font-[400] text-[12px] md:text-[14px] leading-[16px] md:leading-[18px]">
          <li>Strong appreciation for logic/optimization</li>
          <li>1-2 years of experience in back-end development</li>
          <li>A deep understanding of JavaScript</li>
          <li>Expertise in Node.js, Express, and Python</li>
          <li>Ability to quickly implement and adapt to new projects</li>
          <li>Comfortable with high-paced environment</li>
          <li>Good communication and interpersonal skills</li>
        </ol>
      </div>
    </div>
  );
};

export default RightSection;
