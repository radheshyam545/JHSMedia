import React from 'react';
import locationIcon from '../../assets/map-icon.png'; // Replace with your actual image path
import callIcon from '../../assets/visit-icon.png';
import logo from "../../assets/new-logo.png"; // Replace with your actual image path
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <div className="text-white py-8 px-4 md:px-10 lg:px-48 relative font-['Urbanist'] ">
      <div className="lg:flex lg:justify-between lg:items-start">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0"> {/* Adjusted width and margin */}
          <h2 
            className="text-[36px] sm:text-[48px] font-[900] text-left mb-6 tracking-wide text-[#272727] leading-tight sm:leading-[60px]" 
            style={{ WebkitTextStroke: '2px #FFFFFF80' }}
          >
            GET IN TOUCH
          </h2>
          <p className="text-left mb-6 max-w-lg font-[500] text-[16px] sm:text-[18px]">
            When there are great ideas at stake, it’s always a good idea to share.
            Tell us how can we make it happen for you!
          </p>
          <div className="grid grid-cols-1 gap-4 lg:gap-8">
            <div className="flex items-start space-x-2">
              <div className="p-1 rounded">
                <img src={locationIcon} alt="Location Icon" className="w-6 h-6"/>
              </div>
              <div>
                <h4 className="font-[400] text-[16px] sm:text-[18px] leading-[21.6px]">Visit us</h4>
                <p className="text-[16px] sm:text-[18px] font-[600]">Office M-13, The Curve Building, Sheikh Zayed Road,<br/> Dubai, UAE</p>
                <p className="text-green-500 cursor-pointer text-[14px] font-[400]">Check on map!</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 md:gap-y-0">
              <div className="flex items-start space-x-2">
                <div className="p-1 rounded">
                  <img src={callIcon} alt="Call Icon" className="w-6 h-6"/>
                </div>
                <div>
                  <h4 className="font-[400] text-[16px] sm:text-[18px] leading-[21.6px] text-[#FFFFFF]">On call Inquiry</h4>
                  <p className="text-[16px] sm:text-[18px] font-[600] leading-[21.6px] text-[#FFFFFF]">+91-988-600-0000</p>
                </div>
              </div>
              <div className="flex items-start space-x-2 mt-4 md:mt-0">
                <div className="p-1 rounded">
                  <img src={callIcon} alt="Assistance Icon" className="w-6 h-6"/>
                </div>
                <div>
                  <h4 className="text-[16px] sm:text-[18px] font-[400] text-[#FFFFFF]">For Assistance</h4>
                  <p className="text-[16px] sm:text-[18px] font-[600] leading-[21.6px] text-[#FFFFFF]">business@monke.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:ml-20"> {/* Adjusted width and margin */}
          <ContactForm />
        </div>
      </div>
      <div className="mt-10 lg:flex lg:justify-between lg:items-center">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4">
          <img src={logo} alt="JHS Logo" className="mr-4 w-12 h-12 mx-auto lg:mx-0" />
          <div className="flex justify-center lg:justify-start space-x-4 lg:space-x-6 mt-4 lg:mt-0">
            <a href="#" className="text-white hover:text-gray-400 text-[16px] sm:text-[20px]">Brands</a>
            <span className="text-white">|</span>
            <a href="#" className="text-white hover:text-gray-400 text-[16px] sm:text-[20px]">Influencer</a>
            <span className="text-white">|</span>
            <a href="#" className="text-white hover:text-gray-400 text-[16px] sm:text-[20px]">Career</a>
          </div>
        </div>
        <p className="text-white text-sm mt-4 lg:mt-0 text-center lg:text-right">
          © JHS Media Marketing 2024. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
