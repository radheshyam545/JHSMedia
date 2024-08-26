import React from "react";
import sonyMusicImage from '../../../assets/InfluencerCard1.png';  // Import your images here
import skillShareImage from '../../../assets/InfluencerCard2.png';
import growwImage from '../../../assets/InfluencerCard3.png';

const influencerData = [
  {
    image: sonyMusicImage,
    alt: 'Sony Music',
    title: 'Sony Music'
  },
  {
    image: skillShareImage,
    alt: 'SkillShare',
    title: 'SkillShare'
  },
  {
    image: growwImage,
    alt: 'Groww',
    title: 'Groww'
  },
  {
    image: skillShareImage,
    alt: 'SkillShare',
    title: 'SkillShare'
  },
  {
    image: growwImage,
    alt: 'Groww',
    title: 'Groww'
  },
  {
    image: sonyMusicImage,
    alt: 'Sony Music',
    title: 'Sony Music'
  },
  // Add more objects here if you have more images
];

const InfluencerMarketing = () => {
  return (
    <div className="flex flex-col px-4 md:px-44 font-['Urbanist'] lg:-mt-5">
      <div className="mt-8 lg:px-5">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold  leading-[60px] text-[#1B2430]">
          Influencer Marketing <span className="italic font-[300]">JHS Media</span>
        </h2>
      </div>
      <div className="flex justify-center flex-wrap gap-6 mt-4"> {/* Flexbox layout for wrapping */}
        {influencerData.map((card, index) => (
          <div key={index} className="relative bg-white rounded-lg overflow-hidden shadow-lg w-full sm:w-auto"> {/* Adjust width for responsiveness */}
            <img
              src={card.image}
              alt={card.alt}
              className="w-full h-auto sm:h-[290px] object-cover mx-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center  ">
              <p className="font-[700] text-[18px] text-[#FFFFFF] leading-[36.4px]" >{card.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfluencerMarketing;
