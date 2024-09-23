import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Personalize = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10 sm:py-16 md:py-20 bg-white px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-geistBold text-center text-black mb-4 max-w-[400px] sm:max-w-[500px] md:max-w-[600px]">
        Personalized homecare services
      </h1>
      
      {/* Subheading */}
      <p className="text-gray-600 text-center text-sm sm:text-base md:text-lg max-w-xs sm:max-w-lg md:max-w-2xl mb-8 sm:mb-10">
        We provide personalized, professional home care services to help your loved ones live comfortably and independently in the place they call home.
      </p>
      
      {/* Call to Action Button */}
      <Link href="/contactUs" className="mb-8 sm:mb-10">
        <span className="bg-green-500 text-white text-base sm:text-lg py-3 px-6 sm:px-8 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 inline-block">
          Contact us now
        </span>
      </Link>
      
      {/* Social Media Icons */}
      <div className="flex space-x-4 sm:space-x-6">
        {/* Facebook Icon */}
        <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 relative">
          <Image src="/images/facebook.svg" alt="Facebook" fill style={{objectFit: 'contain'}} sizes="(max-width: 640px) 40px, 48px" />
        </a>
        
        {/* LinkedIn Icon */}
        <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 relative">
          <Image src="/images/in.svg" alt="LinkedIn" fill style={{objectFit: 'contain'}} sizes="(max-width: 640px) 40px, 48px" />
        </a>
        
        {/* X (Twitter) Icon */}
        <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 relative">
          <Image src="/images/x.svg" alt="Twitter" fill style={{objectFit: 'contain'}} sizes="(max-width: 640px) 40px, 48px" />
        </a>
      </div>
    </section>
  )
}

export default Personalize