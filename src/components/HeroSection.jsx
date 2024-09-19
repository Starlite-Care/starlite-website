import React from 'react';
import Navbar from './Navbar';

const HeroSection = () => {
  return (
    <div className="bg-[url('/images/bg.png')] bg-cover bg-center h-screen w-full">
      <Navbar />
      <div className="flex items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold">Welcome to My Site</h1>
      </div>
    </div>
  )
}

export default HeroSection;
