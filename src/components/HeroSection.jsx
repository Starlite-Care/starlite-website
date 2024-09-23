import React from "react";
import Link from "next/link";
import Image from "next/image";

const TrustedFamilies = () => {
  const images = [
    '/images/image-1.png',
    '/images/image-2.png',
    '/images/image-3.png',
    '/images/image-4.png',
    '/images/image-5.png',
    '/images/image-6.png',
  ];

  return (
    <div className="max-w-xs mt-8">
      <div className="relative flex justify-center items-center">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="absolute w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white"
            style={{
              left: `calc(50% - 6.2rem + ${index * 2.0}rem)`,
              zIndex: index
            }}
          >
            <div className="relative w-full h-full">
              <Image 
                src={src} 
                alt={`Family ${index + 1}`} 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="text-center mt-6 text-sm font-bold text-white">
        Trusted by over 100k families
      </p>
      <p className="text-center text-xs text-white">
        in the United States of America
      </p>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/bg.png')" }}>
      <div className="h-screen md:-h-[80vh] lg:-h-[70vh] w-full flex items-center"> 
        <div className="container mx-auto px-6 sm:px-8 py-12 sm:py-16">
          <div className="bg-[#958C9B] rounded-full w-fixed sm:w-[20%] text-center px-3 py-1 mb-8">
            <p className="text-white libre-baskerville-regular text-[13px]">Welcome to Starlite Care !</p>
          </div>
          <div className="mb-8 sm:mb-12">
            <h2 className="text-[50px] leading-[50px] w-[550px] text-white font-geistSemiBold">
              Home care services like no other
            </h2>
            <p className="text-white w-full sm:w-[50%] text-[12px] mt-4">
              We provide personalized, professional home care services to help your loved ones live comfortably and independently in the place they call home.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-8 sm:space-y-0">
            <Link 
              href="/contactUs" 
              className="bg-[#4CAF50] px-6 py-2 sm:px-8 sm:py-3 rounded-full text-white text-center"
            >
              Contact Us
            </Link>
            <TrustedFamilies />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;