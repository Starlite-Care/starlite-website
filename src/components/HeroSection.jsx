import React from "react";
import Link from "next/link";
import Image from "next/image";

const TrustedFamilies = () => {
  const images = [
    "/images/image-1.png",
    "/images/image-2.png",
    "/images/image-3.png",
    "/images/image-4.png",
    "/images/image-5.png",
    "/images/image-6.png",
  ];

  return (
    <div className="max-w-xs mt-8">
      <div className="relative flex justify-center items-center top-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="absolute w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-white"
            style={{
              left: `calc(50% - 5rem + ${index * 1.6}rem)`,
              zIndex: index,
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Family ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="text-center mt-10 text-xs sm:text-sm font-bold text-white">
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
    <div
      className="relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/bg.png')",
        backgroundPositionY: -50,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="min-h-screen md:h-[80vh] lg:h-[70vh] w-full flex items-center mx-auto mt-10">
        <div className="w-[94%] mx-auto px-4 sm:px-6 md:px-20 py-12 sm:py-16">
          <div className="bg-[#FFFFFF1A] rounded-full w-fit px-3 py-1 mb-8 mx-auto md:mx-0">
            <p className="text-white libre-baskerville-regular text-xs sm:text-[13px]">
              Welcome to Starlite Care !
            </p>
          </div>
          <div className="mb-8 sm:mb-6">
            <h2 className="text-3xl sm:text-5xl md:text-[80px] leading-tight md:leading-[76px] text-white font-geistSemiBold text-center md:text-start mx-auto md:mx-0 max-w-[300px] sm:max-w-none md:max-w-[800px]">
              Home care services like no other
            </h2>
            <p className="text-white w-full md:w-1/2 text-center md:text-start text-xs sm:text-sm mt-4">
              We provide personalized, professional home care services to help
              your loved ones live comfortably and independently in the place
              they call home.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between w-full items-center space-y-8 sm:space-y-0">
            <Link
              href="/contactUs"
              className="bg-gradient-to-tl gradient transition-colors duration-300 shadow-md px-10 sm:px-14 py-3 sm:py-4 rounded-full text-white text-center text-sm sm:text-base"
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
