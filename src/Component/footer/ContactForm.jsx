import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-black text-white p-4 sm:p-6 md:p-8 lg:p-10">
      <form className="mx-auto max-w-lg lg:max-w-none">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 border border-gray-600 rounded-[12px] bg-transparent text-white focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 border border-gray-600 rounded-[12px] bg-transparent text-white focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-4 border border-gray-600 rounded-[12px] bg-transparent text-white focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Website"
            className="w-full p-4 border border-gray-600 rounded-[12px] bg-transparent text-white focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <textarea
            placeholder="Message"
            className="w-full p-4 border border-gray-600 rounded-[12px] bg-transparent text-white focus:outline-none h-32"
          ></textarea>
        </div>
        <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <input type="checkbox" className="mr-2" />
            <label>I'm not a robot</label>
          </div>
          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-[12px] flex items-center"
          >
            Submit
            <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
