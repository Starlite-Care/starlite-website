import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-[url('/images/bg.png')] bg-cover bg-center h-screen w-full">
      <div className=" py-32 px-28">
        <div className="bg-[#958C9B] rounded-full w-[20%] text-center px-3 py-1">
        <p className="text-white libre-baskerville-regular text-[13px]">Welcome to Starlight Care !</p>
        </div>
        <div className=" py-10">
    <h2 className="text-[50px] w-[600px] text-white font-geistBold flex flex-col">
    Home care Services Like No other
</h2>
          <p className="text-white w-[50%] text-[12px]">We provide personalized, professional home care services to help your loved ones live comfortably and independently in the place they call home.</p>
        </div>
        <div className="flex">
             <Link href="/contactUs" className="bg-[#4CAF50] px-8 py-2 rounded-full text-white">
                 Contact Us
             </Link>
             
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
