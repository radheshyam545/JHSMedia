import React from 'react';
import contactUs from "../../assets/contact-us.png";
import emailIcon from "../../assets/email-logo.png";
import whatsappIcon from "../../assets/whatsapp-icon.png";
import phoneIcon from "../../assets/phone-icon.png";

const LeftContainer = () => {
  return (
    <div className="flex h-full lg:h-auto items-center justify-between flex-col from-black to-red-900 font-['Urbanist'] px-4 md:px-0">
      <div className="mt-10 md:mt-1 md:ml-56 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold text-black leading-snug">
          Connecting Your Brand
          <br />
          <span className="text-[#E54F26] italic">JHS Media</span> Influencer
          <br />
          For Your Business
        </h1>
        <p className="mt-4 text-sm md:text-lg text-gray-300">
          Monk-E represents India's finest digital creators and empowers India's fastest growing startups with influencer marketing.
        </p>
        <div className="Frame2 lg:w-[150px] mt-6 h-[45px] px-4 py-2 bg-[#e54f26] rounded-lg flex justify-center md:justify-start items-center">
          <div className="ContactUs w-[111px] text-white text-lg font-semibold font-['Urbanist']">
            Let's Talk 
          </div>
          <img className="Subtract w-5 h-5 ml-2" src={contactUs} />
        </div>
      </div>
      <div 
        style={{
          background: 'linear-gradient(94.37deg, #171719 -56.81%, #E54F26 -3.21%, #E54F26 44.09%, #FF8665 100.85%)'
        }}
        className="fixed left-2 md:left-0 bottom-4 md:bottom-10 w-[48px] h-[130px] md:w-[56px] md:h-[150px] flex items-center md:items-start justify-between md:justify-between flex-col space-y-2 md:space-y-4 p-2"
      >
        <button className="p-1 rounded-full">
          <img src={whatsappIcon} className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button className="p-1 rounded-full">
          <img src={emailIcon} className="w-5 h-4 md:w-6 md:h-5" />
        </button>
        <button className="p-1 rounded-full">
          <img src={phoneIcon} className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
};

export default LeftContainer;
