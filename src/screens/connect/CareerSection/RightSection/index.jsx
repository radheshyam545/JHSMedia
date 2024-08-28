import React, { useEffect, useState } from 'react';
import connect_Developer_Illustration from "../../../../assets/connect_Developer_Illustration.png";

const RightSection = ({ selectedJob }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (selectedJob) {
      setAnimate(true);
    }
  }, [selectedJob]);

  const animationStyles = (delay) => ({
    opacity: animate ? 1 : 0,
    transform: animate ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
  });

  return (
    <div className="w-full md:w-1/2 bg-[#FFF4F1] text-black py-10 flex flex-col font-['Urbanist']">
      <div className="max-w-md mx-auto px-4 md:px-0 md:ml-10 lg:ml-10">
        {/* Image Section */}
        <div style={animationStyles(0.2)} className="flex justify-center mb-4">
          <img
            src={connect_Developer_Illustration}
            alt="Developer Illustration"
            className="w-[200px] h-[150px] md:w-[270.35px] md:h-[210.15px]"
          />
        </div>

        {/* Description Section */}
        <p
          style={animationStyles(0.4)}
          className="mb-2 text-[10px] md:text-[11px] leading-[18px] md:leading-[20px] font-[400] text-[#000000]"
        >
          We are looking for a dynamic hustler who has a positive approach towards developing
          <br />
          and creating new elements for user needs.
        </p>
        <p
          style={animationStyles(0.6)}
          className="mb-2 text-[10px] md:text-[11px] leading-[18px] md:leading-[20px] font-[400] text-[#000000]"
        >
          You shall be expected to collaborate with user experience designers, graphic
          <br /> designers, and front-end engineers.
        </p>
        <p
          style={animationStyles(0.8)}
          className="mb-2 text-[10px] md:text-[11px] leading-[18px] md:leading-[20px] font-[400] text-[#000000]"
        >
          You'll be responsible for building and maintaining elements that include graphs,
          <br />
          widgets, custom UI controls, and much more.
        </p>

        {/* Pre-Requisites Section */}
        <h2
          style={animationStyles(1.0)}
          className="text-lg md:text-xl font-semibold mb-4 text-[#000000] leading-[20px] md:leading-[22px]"
        >
          Pre-Requisites:
        </h2>
        <ol
          style={animationStyles(1.2)}
          className="list-decimal pl-4 md:pl-6 space-y-1 md:space-y-2 font-[400] text-[12px] md:text-[14px] leading-[16px] md:leading-[18px]"
        >
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
