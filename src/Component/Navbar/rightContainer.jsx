import React from 'react';
import header from "../../assets/headerRight.png";
import facebookIcon from "../../assets/facebook-icon.png";
import favIcon from "../../assets/fav-icon.png";
import twitterIcon from "../../assets/twitter-icon.png";
import linkedinIcon from "../../assets/linkedin-icon.png";
import picsartIcon from "../../assets/picsart-icon.png";

const SocialCard = () => {
  return (
    <div className="relative flex items-center justify-center flex-col md:flex-row">
      <div className="relative">
        <img
          src={header}
          alt="Header"
          className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:-ml-11"
        />
      </div>
      {/* <div className="flex space-x-4 mt-4 md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 md:flex-col md:space-x-0 md:space-y-4">
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
      </div> */}
    </div>
  );
};

export default SocialCard;
