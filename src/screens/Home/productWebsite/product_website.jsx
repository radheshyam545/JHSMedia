import React from 'react';
import live_breaking_news from "../../../assets/live_breaking_news.png";
import readMoreIcon from '../../../assets/visit_now_icon.png'; // Update with the correct path to your image

const ProductWebsites = () => {
  const productCards = [
    { bgColor: 'bg-blue-100', image: live_breaking_news },
    { bgColor: 'bg-orange-100', image: live_breaking_news },
    { bgColor: 'bg-pink-100', image: live_breaking_news },
    { bgColor: 'bg-green-100', image: live_breaking_news },
  ];

  return (
    <div className="py-12 px-5 md:px-20 lg:px-52 font=['Urbanist']">
      <h2 className="text-[24px] md:text-[28px] font-[600] text-[#1B2430]">
        Our Product <span className="italic font-[300] leading-[5px]">Websites</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {productCards.map((card, index) => (
          <div
            key={index}
            className={`rounded-xl ${card.bgColor} p-6 shadow-lg flex flex-col items-center w-full h-56`}
          >
            <div className="bg-[#FFFFFF] rounded-xl p-7 flex flex-col items-center justify-between w-full h-[180px]">
              <img
                src={card.image}
                alt="Product"
                className="w-[85px] md:w-[105px] mb-2"
              />
              <div className="relative flex items-center space-x-2 mt-3">
                <a
                  href="#"
                  className="text-red-500 font-semibold text-sm border-b border-red-500 flex items-center space-x-1 mt-2"
                >
                  <span className="top-2">Visit Now</span>
                  <img 
                    src={readMoreIcon} 
                    alt="Read More" 
                    className="w-3 h-3" 
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductWebsites;
