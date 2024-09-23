import Link from 'next/link'
import React from 'react'

const Personalize = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10 sm:py-16 md:py-20 bg-white px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-[40px] font-geistBold text-center text-black mb-4 max-w-[400px]">
        Personalized homecare services
      </h1>
      
      {/* Subheading */}
      <p className="text-gray-600 text-center text-sm sm:text-[15px] max-w-xs sm:max-w-lg md:max-w-2xl mb-6 sm:mb-8">
        We provide personalized, professional home care services to help your loved ones live comfortably and independently in the place they call home.
      </p>
      
      {/* Call to Action Button */}
      <Link href="/contactUs" className="mb-6 sm:mb-8">
        <button className="bg-green-500 text-white text-base sm:text-lg py-2 sm:py-3 px-6 sm:px-8 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300">
          Contact us now
        </button>
      </Link>
      
      {/* Social Media Icons */}
      <div className="flex space-x-3 sm:space-x-4">
        {/* Facebook Icon */}
        <a href="#" className="bg-blue-100 p-2 sm:p-3 rounded-full hover:bg-blue-200 transition-colors duration-300">
          <img src="/icons/facebook.svg" alt="Facebook" className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        
        {/* LinkedIn Icon */}
        <a href="#" className="bg-blue-100 p-2 sm:p-3 rounded-full hover:bg-blue-200 transition-colors duration-300">
          <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        
        {/* X (Twitter) Icon */}
        <a href="#" className="bg-blue-100 p-2 sm:p-3 rounded-full hover:bg-blue-200 transition-colors duration-300">
          <img src="/icons/twitter.svg" alt="Twitter" className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </div>
    </section>
  )
}

export default Personalize