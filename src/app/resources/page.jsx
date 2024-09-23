import React from 'react';

const Resources = () => {
  const resources = [
    { image: '/images/image-1.png', title: 'Positive effect of homecare ser...', date: 'June, 2024' },
    { image: '/images/image-2.png', title: 'Positive effect of homecare ser...', date: 'June, 2024' },
    { image: '/images/image-3.png', title: 'Positive effect of homecare ser...', date: 'June, 2024' },
    { image: '/images/image-4.png', title: 'Positive effect of homecare ser...', date: 'June, 2024' },
    { image: '/images/image-5.png', title: 'Positive effect of homecare ser...', date: 'June, 2024' },
    { image: '/images/image-6.png', title: 'Positive effect of homecare ser...', date: 'June, 2024' },
    { image: '/images/image-7.png', title: 'Positive effect of homecare ser...', date: 'June, 2024' },
    { image: '/images/image-8.png', title: 'Positive effect of homecare ser...', date: 'June, 2024' },
  ];

  return (
    <div className="container mx-auto my-10 px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Homecare resources</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {resources.map((resource, index) => (
          <div key={index} className="flex flex-col">
            <div className="bg-white rounded-lg overflow-hidden shadow-md mb-3">
              <img src={resource.image} alt={resource.title} className="w-full h-56 object-cover rounded-md" />
            </div>
            <h3 className="text-blue-500 font-semibold mb-1 text-[12px]">{resource.title}</h3>
            <p className="text-gray-500 text-[10px]">{resource.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;