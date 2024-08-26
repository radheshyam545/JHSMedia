import React from 'react';
import facebookLogo from '../../../assets/Facebook_f_logo.png'; // Ensure this path is correct
import instagramlogo from '../../../assets/instagram_logo.png'; // Ensure this path is correct
import youtubelogo from '../../../assets/youtube_logo.png'; // Ensure this path is correct

const SocialMediaManagement = () => {
  const platforms = [
    { id: 1, logo: facebookLogo, name: 'Facebook', description: 'Lorem ipsum is simply dummy text of the printing and typesetting', bg: '#F5F8FF', border: '#C2E5FF' },
    { id: 2, logo: instagramlogo, name: 'Instagram', description: 'Lorem ipsum is simply dummy text of the printing and typesetting', bg: '#FFF9FA', border: "#FFEDAD"},
    { id: 3, logo: youtubelogo, name: 'You Tube', description: 'Lorem ipsum is simply dummy text of the printing and typesetting', bg: '#FFF2F2', border: "#FFBDBD" },
    { id: 4, logo: facebookLogo, name: 'Facebook', description: 'Lorem ipsum is simply dummy text of the printing and typesetting', bg: '#F5F8FF', border: "#C2E5FF" }
  ];

  return (
    <div className="bg-white py-16 font-['Urbanist']">
      <div className="mx-auto px-5 sm:px-[155px] max-w-screen-xl">
        <h2 className="text-left font-semibold mb-6 text-[40px] leading-[60px] text-[#1B2430]">
          Social Media Management <span className='italic font-[300]'>JHS Media</span>
        </h2>
        <div className="flex flex-wrap justify-around lg:gap-1 gap-4">
          {platforms.map(platform => (
            <div key={platform.id} style={{ backgroundColor: platform.bg, borderColor: platform.border, borderWidth: '1.5px' }} className="flex flex-col items-center px-5 border rounded-[20px] shadow-md h-56 w-56">
              <img src={platform.logo} alt={`${platform.name} logo`} className="w-16 h-16 mb-4 mt-8 rounded-full" />
              <h3 className="font-semibold text-[20px] leading-[32px] text-[#1B2430]">{platform.name}</h3>
              <p className="text-[12px] text-[#606060] mt-4 font-[400] leading-[14px]">{platform.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaManagement;
