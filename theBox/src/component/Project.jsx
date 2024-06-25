import React, { useState } from 'react';


import imagecard1 from '../assets/imagecard1.jpeg';
import imagecard2 from '../assets/imagecard2.jpeg';
import imagecard3 from '../assets/imagecard3.jpeg';
import imagecard4 from '../assets/imagecard4.jpeg';

const projects = [
  {
    id: 1,
    title: 'Wildstone Infra Hotel',
    address: '2715 Ash Dr. San Jose, South Dakota',
    imageUrl: `${imagecard1}`, // Replace with the actual image path
  },
  {
    id: 2,
    title: 'Wish Stone Building',
    address: '2972 Westheimer Rd. Santa Ana, Illinois',
    imageUrl: `${imagecard2}`, // Replace with the actual image path
  },
  {
    id: 3,
    title: "Mr. Parkinston’s House",
    address: '3517 W. Gray St. Utica, Pennsylvania',
    imageUrl: `${imagecard3}`, // Replace with the actual image path
  },
  {
    id: 4,
    title: 'Oregano Height',
    address: '2464 Royal Ln. Mesa, New Jersey',
    imageUrl: `${imagecard4}`, 
  }
];

const ProjectCard = ({ project }) => (
  <div className="m-auto  col-span-1 bg-blue-600 text-white rounded-lg shadow-lg overflow-hidden w-[328px]">
    <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover"/>
    <div className="p-4">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="text-sm text-white">{project.address}</p>
    </div>
  </div>
);

export const Project = () => {
  const [selectedTab, setSelectedTab] = useState('All');

  return (
    <div className="p-8 grid  md:grid-cols-2 place-items-center  md:place-items-start">
      <div className="flex  flex-col mb-4 w-[250px] ">
        {['All', 'Commercial', 'Residential', 'Other'].map((tab) => (
          <button
            key={tab}
            className={`mr-4 pb-2 ${selectedTab === tab ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
        <div className='rightcard'>

        
      <div className="grid  text-center md:grid-cols-2 lg:grid-cols-2  gap-4 ">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="flex md:justify-between mt-8">
        <button className="mr-3 px-20 md:px-24 py-2 bg-gray-200 text-gray-700 rounded-lg">Back</button>
        <button className=" px-20 md:px-24 py-2 bg-gray-200 text-gray-700  flex text-center">Next </button>
      </div>
      </div>
    </div>
  );
};
