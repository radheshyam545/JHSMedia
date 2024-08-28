import React from 'react';
import Navbar from './header'; // Adjust the import path as necessary
import LeftContainer from './leftContainer';
// import backImg from "../../assets/img-17.png";
import backImg from "../../assets/header_new_bg.png";
import SocialMediaCard from './rightContainer';

const ParentContainer = () => {
  return (
    <div className="relative bg-cover bg-center min-h-screen lg:h-[570px]" style={{ backgroundImage: `url(${backImg})` }}>
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-3 py-8">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0"> {/* LeftContainer takes full width on small screens, half on large screens */}
          <LeftContainer />
        </div>
        <div className="w-full lg:w-1/2"> {/* SocialMediaCard takes full width on small screens, half on large screens */}
          <SocialMediaCard />
        </div>
      </div>
    </div>
  );
};

export default ParentContainer;
