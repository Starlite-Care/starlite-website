import Image from 'next/image'
import React from 'react'

const ServicesSection = () => {
  const services = [
    { title: "Personalized Care", image: "/images/personal.png" },
    { title: "Companionship", image: "/images/companionship.png" },
    { title: "Specialized Care", image: "/images/specialize.png" },
    { title: "Home Support", image: "/images/home-support.png" },
    { title: "Post-Surgery Recovery Care", image: "/images/sugery.png" },
  ];

  return (
    <section className="py-8 px-4 mt-8 md:py-10 md:px-16 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className=" rounded-md p-6 flex flex-col justify-center items-center sm:items-start">
            <span className="text-black font-geistRegular text-xs leading-6">Our services</span>
            <span className="text-black font-geistBold text-2xl md:text-3xl leading-6 mt-2">What We Do</span>
          </div>
          {services.map((service, index) => (
            <div key={index} className="relative rounded-md overflow-hidden">
              <Image 
                src={service.image} 
                alt={service.title} 
                width={400} 
                height={300} 
                layout="responsive" 
                className="rounded-md"
              />
              <p className="absolute font-geistRegular text-xs bottom-0 w-full py-2 px-2 text-white">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection