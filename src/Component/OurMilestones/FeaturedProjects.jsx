import React from "react";
import featuredProjectsImg from "../../assets/featured-projects.png";

const projects = [
  {
    id: 1,
    title: "Featured Projects",
    description: "In the past couple of years, we have created trends, curated brand reputations, and shaped quite a few talents. Want your minds to be blown away? Browse through our case studies.",
    imgSrc: featuredProjectsImg,
  },
  {
    id: 2,
    title: "Featured Projects",
    description: "In the past couple of years, we have created trends, curated brand reputations, and shaped quite a few talents. Want your minds to be blown away? Browse through our case studies.",
    imgSrc: featuredProjectsImg,
  },
  // You can add more project objects here
];

const FeaturedProjects = () => {
  return (
    <div className="flex justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 l"  style={{ maxWidth: "943px" }}> {/* Adjusted max-w-4xl to max-w-5xl */}
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"> {/* Increased shadow intensity */}
            <div className="relative p-6">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-auto rounded-[20px] object-cover"
                style={{ maxHeight: "200px", margin: "0 auto" }}
              />
            </div>
            <div className="px-6 pb-6 font-['Urbanist']">
              <h3 className="text-[24px] font-semibold mb-2 leading-[28.8px]">{project.title}</h3>
              <p className="text-[#606060] text-[16px] leading-[24px] font-[400]">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
