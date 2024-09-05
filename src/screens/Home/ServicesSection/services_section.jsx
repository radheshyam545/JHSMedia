import React from 'react';
import BrandingImage from "../../../assets/healthcare_heart.png";
import SocialMediaImage from '../../../assets/social_media_management.png'; 
import InfluencerImage from '../../../assets/social_media_management.png'; 
import PublicRelationsImage from '../../../assets/public_relations.png'; 

const services = [
  { image: BrandingImage, title: '360° Branding' },
  { image: SocialMediaImage, title: 'Social Media Management' },
  { image: InfluencerImage, title: 'Influencer Marketing' },
  { image: PublicRelationsImage, title: 'Public Relations' },
  { image: BrandingImage, title: 'Real Estate Marketing' },
  { image: SocialMediaImage, title: 'Restaurant Marketing' },
  { image: InfluencerImage, title: 'Advertising' },
  { image: PublicRelationsImage, title: 'Media Buying' },
];

const ServicesSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-40">
        <h2 className="text-2xl sm:text-3xl font-[600] text-[#1B2430] mb-4 text-center sm:text-left">
          What We Do at <span className="italic font-[300]">JHS Media Marketing</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#FFFFFF] w-full sm:w-56 h-32 px-7 py-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col justify-center items-center"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-10 h-10 mb-4"
              />
              <h3 className="text-[14px] sm:text-[13px] font-[500] text-[#040642] text-center">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
