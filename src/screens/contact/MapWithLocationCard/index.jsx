import React from 'react';
import mapImage from '../../../assets/MapWithLocationCard.png'; // Adjust the path accordingly

const MapWithLocationCard = () => {
  return (
    <div className="relative w-full h-full py-2">
      <img
        src={mapImage}
        alt="Map"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default MapWithLocationCard;
