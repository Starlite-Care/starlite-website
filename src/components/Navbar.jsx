import React from 'react';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-transparent backdrop-blur-md backdrop-filter w-full">
      <div className='flex justify-between items-center px-10 py-4'>
        {/* Logo or Brand Name */}
        <div>
          <h3 className='text-white text-[20px]'>
            Star<span className='text-green-400'>lite</span>
          </h3>
        </div>
        
        {/* Navigation Links */}
        <div className='space-x-8'>
          <a href="#" className='text-white hover:text-green-400 transition-colors duration-300'>Services</a>
          <a href="#" className='text-white hover:text-green-400 transition-colors duration-300'>Consultation</a>
          <a href="#" className='text-white hover:text-green-400 transition-colors duration-300'>Resources</a>
          <a href="#" className='text-white hover:text-green-400 transition-colors duration-300'>Career</a>
          <a href="#" className='text-white hover:text-green-400 transition-colors duration-300'>Contact us</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
