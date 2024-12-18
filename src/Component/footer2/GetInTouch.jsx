import React from 'react';
import arrowIcon from "../../assets/contact-us.png";
// import logo from "../../assets/new-logo.png";
import logo from "../../assets/JHS_MEDIA_LOGO__WB-removebg.png";
import locationIcon from '../../assets/map-icon.png'; // Replace with your actual image path
import callIcon from '../../assets/visit-icon.png';
import mapviewImg from '../../assets/mapview.png';
import footer_image from "../../assets/footer_image.png"
import get_in_touch from '../../assets/get_in_touch.png';
const GetInTouch = () => {
  return (
    <div className="relative flex flex-col lg:flex-row">
      {/* Left Section - Gray Background */}
      <div className="relative w-full lg:w-6/12  text-black py-6 px-4 sm:py-8 sm:px-8 md:py-10 md:px-16 lg:py-20 lg:pl-48 lg:pr-0 flex flex-col justify-between font-['Urbanist']">
        {/* <div className="absolute top-20 left-0 lg:-left-20 xl:-left-16 transform translate-x-0 lg:translate-x-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-[48px] lg:text-[74px] font-[900] mb-4 sm:mb-6 z-10  uppercase text-[#272727]"
           style={{
             WebkitTextStroke: '2px #FFFFFF80',
            }}
          >
            GET IN TOUCH
          </h1>
        </div> */}
  <div className="flex   justify-center mb-8"> {/* mb-6 for spacing below the image */}
        <img
          src={get_in_touch} // Replace `get_in_touch` with your actual image import or URL
          alt="Get in Touch"
          className="w-full max-w-[500px] h-auto  object-contain" // Adjust size as needed
        />
      </div>


        <div className="">
          <p className="text-base sm:text-[15px] mb-4 sm:mb-6 font-[500]">
            When there are great ideas at stake, it’s always a good idea to share. Tell us how we can make it happen for you!
          </p>
          <div className="flex flex-col sm:flex-row items-start mb-3">
            <div className="mr-4">
              <img src={locationIcon} alt="JHS Media" className="h-6 sm:h-8" />
            </div>
            <div>
              <p className="font-[300] text-[18px]">Visit us:</p>
              <p className="text-sm sm:text-base font-[400]">
                Office No. 13 The Curve Building, Sheikh Zayed Road<br />
                <span className="block">Dubai, UAE</span>
              </p>
              <div className="flex items-center mt-2">
                <img src={mapviewImg} alt="Map view" className="h-8 w-8 mr-2" />
                <a href="#" className="text-sm sm:text-base font-[400]">Check on map!</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-8 mb-3 mt-8">
            <div className="flex items-start mb-3 sm:mb-0">
              <div className="mr-4">
                <img src={callIcon} className="h-6 sm:h-8" />
              </div>
              <div>
                <p className="font-[300] text-[18px]">On call inquiry:</p>
                <p className="text-sm sm:text-base font-[400]">+91-988-600-0000</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4">
                <img src={callIcon} alt="JHS Media" className="h-6 sm:h-8" />
              </div>
              <div>
                <p className="font-[300] text-[18px]">For Assistance:</p>
                <p className="text-sm sm:text-base font-[400]">business@markie.in</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:space-x-8 mt-auto lg:-mb-11 mb-2">
          <div className="mb-2 lg:mb-0 lg:-ml-3">
            {/* <img src={logo} alt="JHS Media" className="h-16 sm:h-[70px]" /> */}
            <img src={logo} alt="JHS Media" className="h-16 sm:h-[120px]" />
          </div>
          <div className="flex space-x-2 sm:space-x-7 text-black">
            <a href="#" className="hover:text-orange-500 text-[20px] sm:text-base ">Brands</a>
            <span>|</span>
            <a href="#" className="hover:text-orange-500 text-[20px] sm:text-base ">Influencer</a>
            <span>|</span>
            <a href="#" className="hover:text-orange-500 text-[20px] sm:text-base ">Career</a>
          </div>
        </div>
      </div>

      {/* Right Section - Black Background */}
      <div className="w-full lg:w-7/12  text-black py-6 px-4 sm:py-8 sm:px-8 md:py-10 md:px-20 lg:py-8 lg:pr-40 flex flex-col justify-between font-['Urbanist']">
        <form className="p-4 sm:p-6 rounded-lg mb-6">
          <div className="mb-3">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 sm:p-3 rounded-lg border border-gray-700 bg-white text-black placeholder-[#B3B3B3]"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 sm:p-3 rounded-lg border border-gray-700 bg-white text-black placeholder-[#B3B3B3]"
            />
          </div>
          <div className="mb-3">
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-2 sm:p-3 rounded-lg border border-gray-700 bg-white text-black placeholder-[#B3B3B3]"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Website"
              className="w-full p-2 sm:p-3 rounded-lg border border-gray-700 bg-white text-black placeholder-[#B3B3B3]"
            />
          </div>
          <div className="mb-3">
            <textarea
              placeholder="Message"
              className="w-full p-2 sm:p-3 rounded-lg border border-gray-700 bg-white text-black placeholder-[#B3B3B3] h-24 sm:h-32"
            ></textarea>
          </div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <input type="checkbox" id="not-robot" className="mr-2" />
              <label htmlFor="not-robot" className="text-sm sm:text-base">I’m not a robot</label>
            </div>
            <button
              type="submit"
              className="bg-[#E54F26] hover:bg-orange-600 text-[#FFFFFF] font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg flex items-center space-x-2"
            >
              <span className='tracking-[2px]'>Submit</span>
              <img src={arrowIcon} alt="Arrow" className="w-5 h-5" />
            </button>
          </div>
        </form>
        <div className="text-[20px] sm:text-base text-center mt-auto mb-2 text-[#FFFFFF] font-[400]">
          © JHS Media Marketing 2024. All rights reserved.
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div>
      <GetInTouch />
      <div className='w-full'>
        <img 
        src={footer_image} 
        alt="Footer" 
        className='h-auto w-full object-cover'
        />
      </div>
    </div>
  );
};

export default ContactPage;
