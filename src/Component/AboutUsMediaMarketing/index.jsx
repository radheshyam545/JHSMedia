import React from 'react';
import ProfileImage from '../../assets/about-us-profile-img.png'; // Update with the correct path to your image
import readMoreIcon from '../../assets/read-more.png'; // Update with the correct path to your image

const cardsData = [
  {
    title: "We want to mentor women and help them turn entrepreneurs: Ranveer Allahbadia",
    description: "Ranveer Allahbadia knows a thing or two about the internet. He runs three YouTube...",
    link: "#",
  },
  {
    title: "We want to mentor women and help them turn entrepreneurs: Ranveer Allahbadia",
    description: "Ranveer Allahbadia knows a thing or two about the internet. He runs three YouTube...",
    link: "#",
  },
  {
    title: "We want to mentor women and help them turn entrepreneurs: Ranveer Allahbadia",
    description: "Ranveer Allahbadia knows a thing or two about the internet. He runs three YouTube...",
    link: "#",
  },
  {
    title: "We want to mentor women and help them turn entrepreneurs: Ranveer Allahbadia",
    description: "Ranveer Allahbadia knows a thing or two about the internet. He runs three YouTube...",
    link: "#",
  },
  {
    title: "We want to mentor women and help them turn entrepreneurs: Ranveer Allahbadia",
    description: "Ranveer Allahbadia knows a thing or two about the internet. He runs three YouTube...",
    link: "#",
  },
  {
    title: "We want to mentor women and help them turn entrepreneurs: Ranveer Allahbadia",
    description: "Ranveer Allahbadia knows a thing or two about the internet. He runs three YouTube...",
    link: "#",
  },
  {
    title: "We want to mentor women and help them turn entrepreneurs: Ranveer Allahbadia",
    description: "Ranveer Allahbadia knows a thing or two about the internet. He runs three YouTube...",
    link: "#",
  },
  {
    title: "We want to mentor women and help them turn entrepreneurs: Ranveer Allahbadia",
    description: "Ranveer Allahbadia knows a thing or two about the internet. He runs three YouTube...",
    link: "#",
  },
  {
    title: "We want to mentor women and help them turn entrepreneurs: Ranveer Allahbadia",
    description: "Ranveer Allahbadia knows a thing or two about the internet. He runs three YouTube...",
    link: "#",
  },
];

const Card = ({ title, description, link }) => {
  return (
    <div className="relative rounded-[24px] overflow-hidden shadow-lg h-[300px] sm:h-[350px] md:h-[388px] w-full sm:w-[250px] md:w-[300px]">
      <img src={ProfileImage} alt="Profile" className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent font-['Urbanist']">
        <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
        <a href={link} className="text-[#E54F26] text-sm mt-2 inline-block font-medium flex items-center">
          <span className="border-b border-[#E54F26]">Read More</span>
          <img src={readMoreIcon} alt="Read More Icon" className="ml-2 w-3   h-3" />
        </a>
      </div>
    </div>
  );
};

const CardGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6 lg:p-8">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} link={card.link} />
      ))}
    </div>
  );
};

export default CardGrid;
