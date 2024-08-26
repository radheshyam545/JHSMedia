import React from 'react';
import upload_document_icon from "../../../assets/upload_document.png";
import contactUs from "../../../assets/contact-us.png";

const ContactForm = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg py-5 font-['Poppins']">
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              id="fullName"
              className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-500 focus:border-orange-500 sm:text-sm placeholder-[#7B7D8F] font-[400]"
              placeholder="Full Name*"
            />
          </div>
          <div>
            <input
              type="email"
              id="emailAddress"
              className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="Email Address*"
            />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-2">
            <div className="md:w-1/3">
              <select
                id="countryCode"
                className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              >
                <option value="+91">+91</option>
                {/* Add more country codes here */}
              </select>
            </div>
            <div className="flex-grow mt-4 md:mt-0">
              <input
                type="text"
                id="phoneNumber"
                className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                placeholder="Phone Number*"
              />
            </div>
          </div>
          <div>
            <input
              type="text"
              id="subject"
              className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="Subject"
            />
          </div>
        </div>

        <div className="mt-6">
          <textarea
            id="message"
            rows="4"
            className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            placeholder="Message..."
          ></textarea>
        </div>

        <div className="mt-6">
          <button
            type="button"
            className="text-[#7B7D8F] w-full flex justify-center items-center px-4 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-[400] bg-white hover:bg-gray-50 focus:outline-none focus:ring focus:ring-orange-500"
          >
            <img src={upload_document_icon} alt="Upload Document" className="mr-2 h-5" />
            Upload Attachment
          </button>
        </div>

        <div className="mt-6 flex flex-col md:flex-row md:space-x-4">
          <input
            type="text"
            id="captchaCode"
            className="w-full md:w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            placeholder="Captcha Code"
          />
          <div className="flex items-center w-full md:w-1/2 mt-4 md:mt-0 space-x-4">
            <div className="text-[#00000080] text-sm">Input this Code</div>
            <input
              type="text"
              id="captchaInput"
              className="w-full md:w-52 h-12 px-4 py-2 text-center border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-orange-500 focus:border-orange-500 sm:text-[20px] bg-[#040642] text-[#FFFFFF] leading-[30px] font-[700] tracking-widest"
              placeholder="LYSB15"
              defaultValue="LYSB15"
              readOnly
            />
          </div>
        </div>

        <p className="text-[14px] text-gray-500 mt-4 font-[400] leading-[24px]">
          *By submitting this form, you agree to our{' '}
          <a href="#" className="text-[#E54F26]">
            Privacy Policy
          </a>
          .
        </p>

        <div className="mt-6 text-left">
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-[10px] shadow-sm text-white bg-[#E54F26] hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-500"
          >
            Submit Message
            <img src={contactUs} alt="Contact Us" className="ml-2 w-6 h-6" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
