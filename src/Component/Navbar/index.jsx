import React, { useState, useEffect, useRef } from 'react';
import Navbar from './header';
import LeftContainer from './leftContainer';
import backImg from "../../assets/header_new_bg.png";
import SocialMediaCard from './rightContainer';
import emailIcon from "../../assets/email-logo.png";
import whatsappIcon from "../../assets/whatsapp-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import facebookIcon from "../../assets/facebook-icon.png";
import favIcon from "../../assets/fav-icon.png";
import twitterIcon from "../../assets/twitter-icon.png";
import linkedinIcon from "../../assets/linkedin-icon.png";
import picsartIcon from "../../assets/picsart-icon.png";
const ParentContainer = () => {
  const slides = [
    {
      id: 1,
      content: (
        <div className="flex flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <LeftContainer />
          </div>
          <div className="w-full lg:w-1/2">
            <SocialMediaCard />
          </div>
        </div>
      )
    },
    {
      id: 2,
      content: (
        <div className="flex flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <LeftContainer />
          </div>
          <div className="w-full lg:w-1/2">
            <SocialMediaCard />
          </div>
        </div>
      )
    },
    // Add more slides if needed
  ];

  // Clone the first slide to create an infinite loop effect
  const extendedSlides = [...slides, slides[0]];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const transitionRef = useRef(null);

  // Function to handle the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000); // Slide every 3 seconds
    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  // Effect to handle infinite scrolling
  useEffect(() => {
    if (currentIndex === extendedSlides.length - 1) {
      // If we reach the cloned slide, reset to the first slide without animation
      transitionRef.current = setTimeout(() => {
        setCurrentIndex(0);
        sliderRef.current.style.transition = "none"; // Disable transition
        setTimeout(() => {
          sliderRef.current.style.transition = "transform 0.7s ease-in-out"; // Re-enable transition
        }, 50);
      }, 700); // Wait for the slide transition before resetting
    }

    return () => {
      clearTimeout(transitionRef.current); // Cleanup timeout
    };
  }, [currentIndex, extendedSlides.length]);

  return (
    <div className="relative bg-cover bg-center min-h-screen lg:h-[570px]" style={{ backgroundImage: `url(${backImg})` }}>
      <Navbar />

      {/* Fixed Positioned Left Social Icons with higher z-index */}
      <div
        style={{
          background: 'linear-gradient(94.37deg, #171719 -56.81%, #E54F26 -3.21%, #E54F26 44.09%, #FF8665 100.85%)',
          zIndex: 1000, // Higher z-index to make sure it stays on top
        }}
        className="fixed left-2 md:left-0 bottom-4 md:bottom-10 w-[48px] h-[130px] md:w-[56px] md:h-[150px] flex items-center md:items-start justify-between flex-col space-y-2 md:space-y-4 p-2"
      >
        <button className="p-1 rounded-full">
          <img src={whatsappIcon} className="w-5 h-5 md:w-6 md:h-6" alt="WhatsApp" />
        </button>
        <button className="p-1 rounded-full">
          <img src={emailIcon} className="w-5 h-4 md:w-6 md:h-5" alt="Email" />
        </button>
        <button className="p-1 rounded-full">
          <img src={phoneIcon} className="w-5 h-5 md:w-6 md:h-6" alt="Phone" />
        </button>
      </div>

      {/* Fixed Positioned Right Social Icons */}
      <div className="fixed right-2 md:right-0 top-1/2 transform -translate-y-1/2 z-1000">
        <div className="flex-col space-x-4 mt-4 md:flex-col md:space-x-0 md:space-y-4">
          <div className="p-1">
            <img
              src={facebookIcon}
              className="w-[18px] h-[28px]"
              alt="Facebook"
            />
          </div>
          <div className="p-1">
            <img
              src={favIcon}
              className="w-[26px] h-[29px]"
              alt="Favorite"
            />
          </div>
          <div className="p-1">
            <img
              src={twitterIcon}
              className="w-[35px] h-[29px]"
              alt="Twitter"
            />
          </div>
          <div className="p-2">
            <img
              src={linkedinIcon}
              className="w-[29px] h-[29px]"
              alt="LinkedIn"
            />
          </div>
          <div className="p-2">
            <img
              src={picsartIcon}
              className="w-[15px] h-[29px]"
              alt="Picsart"
            />
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-3 py-8 overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${extendedSlides.length * 100}%`, // Set width relative to number of slides
            transform: `translateX(-${currentIndex * (100 / extendedSlides.length)}%)` // Move slides
          }}
        >
          {extendedSlides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
              style={{ width: `${100 / extendedSlides.length}%` }} // Set slide width
            >
              {slide.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParentContainer;
