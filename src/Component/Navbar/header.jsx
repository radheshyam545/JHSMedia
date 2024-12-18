import React, { useState } from 'react';
import logo from "../../assets/JHS_MEDIA_LOGO__WB-removebg.png";
import contactUs from "../../assets/contact-us.png";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white py-4 px-5 sm:px-8 flex items-center justify-center font-['Urbanist'] relative z-10">
      <div className="max-w-[90vw] w-full flex items-center justify-between">
        <div className="flex items-center ml-2 sm:ml-[12.5%]">
          {/* <img src={logo} alt="JHS Media" className="h-[20vw] sm:h-[5vw] w-auto" /> */}
          <img src={logo} alt="JHS Media" className="h-[20vw] sm:h-[10vw] w-auto" />
        </div>
        <div className="flex items-center mr-2 sm:mr-[12.5%]">
          {/* Mobile Menu Button */}
          <button className={`sm:hidden flex items-center ${isOpen ? 'bg-black' : ''}`} onClick={toggleMenu}>
            <svg className={`w-6 h-6 ${isOpen ? 'text-white' : 'text-black'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Desktop Menu */}
          <ul className={`hidden sm:flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-[4vw] ml-4 sm:ml-0 text-black`}>
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
            <li><Link to="/work" className="hover:text-gray-400">Work</Link></li>
            <li><Link to="/connect" className="hover:text-gray-400">Connect</Link></li>
            <li><Link to="/media" className="hover:text-gray-400">Media</Link></li>
          </ul>
          
          {/* Contact Us Button */}
          <div className="hidden sm:flex Frame2 h-[45px] px-5 py-3 bg-[#e54f26] rounded-lg justify-start items-center ml-4 sm:ml-[3vw] cursor-pointer" onClick={() => navigate("/contact")}>
            <div className="ContactUs w-[111px] text-white text-lg font-semibold font-['Urbanist']">Contact Us</div>
            <img className="Subtract w-5 h-5" src={contactUs} alt="Contact Us" />
          </div>
        </div>
      </div>

      {/* Mobile Menu (Overlay) */}
      {isOpen && (
        <div className="sm:hidden absolute top-16 left-0 w-full bg-black text-white text-center z-20">
          <ul className="flex flex-col space-y-4 py-4">
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
            <li><Link to="/work" className="hover:text-gray-400">Work</Link></li>
            <li><Link to="/connect" className="hover:text-gray-400">Connect</Link></li>
            <li><Link to="/media" className="hover:text-gray-400">Media</Link></li>
            <li className="Frame2 h-[45px] px-5 py-3 bg-[#e54f26] rounded-lg justify-center items-center inline-flex mx-auto cursor-pointer" onClick={() => navigate("/contact")}>
              <div className="ContactUs w-[111px] text-white text-lg font-semibold font-['Urbanist']">Contact Us</div>
              <img className="Subtract w-5 h-5" src={contactUs} alt="Contact Us" />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
