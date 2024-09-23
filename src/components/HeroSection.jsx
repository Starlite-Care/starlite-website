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
    <div className="max-w-xs mt-14">
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
      <p className="text-center mt-8 text-[12px] text-sm font-bold text-white">
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
    <div className="bg-[url('/images/bg.png')] bg-cover bg-center min-h-[50vh] sm:min-h-screen w-full">
      <div className="py-16 sm:py-32 px-6 sm:px-28">
        <div className="bg-[#958C9B] rounded-full w-full sm:w-[20%] text-center px-3 py-1">
          <p className="text-white libre-baskerville-regular text-[13px]">Welcome to Starlight Care !</p>
        </div>
        <div className="py-6 sm:py-10">
          <h2 className="text-[32px] sm:text-[50px] w-full sm:w-[550px] font-bold text-white font-geistSemiBold leading-[60px] flex flex-col">
            Home care services like no other
          </h2>
          <p className="text-white w-full sm:w-[50%] text-[12px] mt-4 sm:mt-0">
            We provide personalized, professional home care services to help your loved ones live comfortably and independently in the place they call home.
          </p>
           <div className="flex flex-col md:flex-row justify-between items-center">
          <Link 
            href="/contactUs" 
            className="bg-[#4CAF50] px-6 py-2 md:px-8 md:py-2 rounded-full text-white text-center"
          >
            Contact Us
          </Link>
          <div className="mt-4 md:mt-0 md:ml-6">
            <TrustedFamilies />
          </div>
        </div> 
        </div>
      </div>
    </div>
  );
};

export default HeroSection;