import React from 'react';
import CelioImg from "../../assets/celio-brand.png";
import fcukbrandImg from "../../assets/fcuk-brand.png";
import jockeybrandImg from "../../assets/jockey-brand.png";
import gillettebrandImg from "../../assets/gillette-brand.png";

const brands = [
  { src: CelioImg, alt: 'Celio' },
  { src: fcukbrandImg, alt: 'Fcuk' },
  { src: jockeybrandImg, alt: 'Jockey' },
  { src: gillettebrandImg, alt: 'Gillette' },
  { src: CelioImg, alt: 'Celio' },
  { src: fcukbrandImg, alt: 'Fcuk' },
  { src: jockeybrandImg, alt: 'Jockey' },
  { src: gillettebrandImg, alt: 'Gillette' },
];

const BrandGrid = () => {
  return (
    <div className="bg-[#FFF4F1] p-4 flex justify-center items-center h-[290px]">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-[140px] sm:w-[180px] md:w-[220px] h-[50px] sm:h-[60px] md:h-[70px] bg-white rounded-lg shadow-lg mx-1"
          >
            <img src={brand.src} alt={brand.alt} className="max-w-[50%] sm:max-w-[60%] md:max-w-[70%] max-h-[50%] sm:max-h-[60%] md:max-h-[70%] object-center" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandGrid;
