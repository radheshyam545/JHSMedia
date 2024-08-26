import React from 'react';

// Import your images at the top
import image1 from '../../../assets/video_production1.png';
import image2 from '../../../assets/video_production2.png';
import image3 from '../../../assets/video_production3.png';
import image4 from '../../../assets/video_production4.png';
import image5 from '../../../assets/video_production5.png';

const VideoProduction = () => {
  const videos = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
    { id: 5, image: image5 },
  ];

  return (
    <div className="flex flex-col px-4 md:px-[192px] font-['Urbanist'] lg:-mt-5 py-12">
      <h2 className="text-3xl font-semibold mb-4 mt-8 lg:px-1 text-[#1B2430]">Video Production</h2>
      <div className="flex justify-between flex-wrap gap-5 mt-4">
        {videos.map((video) => (
          <div key={video.id} className="relative bg-white rounded-lg overflow-hidden shadow-lg w-full sm:w-[calc(50%-10px)] lg:w-auto ">
            <img
              src={video.image}
              alt={`Video ${video.id}`}
              className="w-full h-auto sm:h-[290px] object-cover mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoProduction;
