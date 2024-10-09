import Image from "next/image";
import React from "react";

const Resources = () => {
  const resources = [
    {
      image: "/images/image-1.png",
      title: "How to Choose the Right Senior Care Assistance?",
      link: "https://www.hometeammo.com/blog/senior-care-assistance",
      date: "October, 2024",
    },
    {
      image: "/images/image-2.png",
      title: "What is In-Home Care?",
      link: "https://www.ncoa.org/adviser/local-care/in-home-care/ ",
      date: "June, 2024",
    },
    {
      image: "/images/image-3.png",
      title:
        "Vegetables And Fruits Can Lower The Risk Of Heart Disease, Stroke, High Blood Pressure, And Other Serious Health Conditions. ",
      link: "https://www.liveinhomecare.com/vegetables-and-fruits-can-lower-the-risk-of-heart-disease-stroke-high-blood-pressure-and-other-serious-health-conditions/healthy-aging/",
      date: "May, 2024",
    },
    // {
    //   image: "/images/image-4.png",
    //   title: "Positive effect of homecare ser...",
    //   link: "",
    //   date: "June, 2024",
    // },
    // {
    //   image: "/images/image-5.png",
    //   title: "Positive effect of homecare ser...",
    //   link: "",
    //   date: "June, 2024",
    // },
    // {
    //   image: "/images/image-6.png",
    //   title: "Positive effect of homecare ser...",
    //   link: "",
    //   date: "June, 2024",
    // },
    // {
    //   image: "/images/image-7.png",
    //   title: "Positive effect of homecare ser...",
    //   link: "",
    //   date: "June, 2024",
    // },
    // {
    //   image: "/images/image-8.png",
    //   title: "Positive effect of homecare ser...",
    //   link: "",
    //   date: "June, 2024",
    // },
  ];

  const getGridColumns = (itemCount) => {
    if (itemCount >= 4)
      return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
    if (itemCount === 3) return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
    if (itemCount === 2) return "grid-cols-1 sm:grid-cols-2";
    return "grid-cols-1";
  };

  const gridClass = getGridColumns(resources.length);

  return (
    <div className="container mx-auto my-10 px-4 py-8 max-w-6xl min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Homecare resources
      </h1>
      <div className={`grid ${gridClass} gap-6 justify-items-center`}>
        {resources.map((resource, index) => (
          <div key={index} className="flex flex-col w-full max-w-[280px]">
            <div className="bg-white rounded-lg overflow-hidden shadow-md mb-3 relative h-56">
              <Image
                src={resource.image}
                alt={resource.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
            <a
              href={resource.link}
              className="text-blue-500 font-semibold mb-1 text-[12px] hover:underline"
            >
              {resource.title}
            </a>
            <p className="text-gray-500 text-[10px]">{resource.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
