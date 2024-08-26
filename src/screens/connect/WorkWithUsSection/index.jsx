import React from 'react';
import workImage from '../../../assets/work_with_us_arrow.png'; // Update the path based on your file structure
import image1 from '../../../assets/work_with_us1.png';
import image2 from '../../../assets/work_with_us2.png';
import image3 from '../../../assets/work_with_us3.png';

const WorkWithUs = () => {
    const images = [
        { src: image1, alt: "Influencer 1" },
        { src: image2, alt: "Influencer 2" },
        { src: image3, alt: "Influencer 3" }
    ];

    return (
        <div className="bg-gradient-to-r from-white via-red-50 to-white py-8 px-8 lg:px-60 font-['Urbanist']">
            <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="mb-6 lg:mb-0 mt-9">
                    <h2 className="text-[36px] font-semibold text-[rgb(27,36,48)] leading-[50px]">
                        Like what you saw? <span className="font-light italic">Work with Us</span>
                    </h2>
                    <p className="text-[12px] text-[#606060] mt-2 leading-[24px]">
                        Interested in our story? Discover the story of the real storytellers through the eyes of print media.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <img src={workImage} alt="Work with us logo" className="w-24 h-24"/>
                </div>
            </div>
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-[24px] transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 "
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkWithUs;
