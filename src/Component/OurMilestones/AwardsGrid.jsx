import React from 'react';
import MonkEGold from "../../assets/monk-e-gold.png";

const CardGrid = () => {
  const images = [
    { id: 1, imageSrc: MonkEGold },
    { id: 2, imageSrc: MonkEGold },
    { id: 3, imageSrc: MonkEGold},
    { id: 4, imageSrc: MonkEGold },
    { id: 5, imageSrc: MonkEGold },
    { id: 6, imageSrc: MonkEGold },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
            style={{ width: '302px',  }}
          >
            <div className="p-4 flex justify-center items-center rounded-xl">
              <img src={image.imageSrc} alt={`Card ${image.id}`} className="object-contain" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
