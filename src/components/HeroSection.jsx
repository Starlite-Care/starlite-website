import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-[url('/images/bg.png')] bg-cover bg-center min-h-[50vh] sm:min-h-screen w-full">
      <div className="py-16 sm:py-32 px-6 sm:px-28">
        <div className="bg-[#958C9B] rounded-full w-full sm:w-[20%] text-center px-3 py-1">
          <p className="text-white libre-baskerville-regular text-[13px]">Welcome to Starlight Care !</p>
        </div>
        <div className="py-6 sm:py-10">
          <h2 className="text-[32px] sm:text-[50px] w-full sm:w-[600px] text-white font-geistBold flex flex-col">
            Home care Services Like No other
          </h2>
          <p className="text-white w-full sm:w-[50%] text-[12px] mt-4 sm:mt-0">
            We provide personalized, professional home care services to help your loved ones live comfortably and independently in the place they call home.
          </p>
        </div>
        <div className="flex mt-6 sm:mt-0">
          <Link href="/contactUs" className="bg-[#4CAF50] px-8 py-2 rounded-full text-white text-center">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
