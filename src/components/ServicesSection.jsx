import Image from 'next/image'
import React from 'react'

const ServicesSection = () => {
  return (
    <section className="py-8 px-4 md:py-10 md:px-60 bg-white">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <span className="text-black font-geistRegular text-[10px] leading-6">Our services</span>
          <span className="text-black font-geistBold text-[25px] leading-6">What We DO</span>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 md:ml-28">
          <div className="relative rounded-md w-full md:w-auto">
            <Image src="/images/personal.png" alt="personal" width={200} height={200} layout="responsive" />
            <p className="absolute font-geistRegular text-[12px] bottom-0 w-full py-2 px-2 text-white bg-black bg-opacity-50">
              Personalized Care
            </p>
          </div>
          <div className="relative rounded-md w-full md:w-auto">
            <Image src="/images/companionship.png" alt="companionship" width={200} height={200} layout="responsive" />
            <p className="absolute font-geistRegular text-[12px] bottom-0 w-full py-2 px-2 text-white bg-black bg-opacity-50">
              Companionship
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row py-6 md:py-10 gap-4 md:gap-8 md:ml-16'>
        <div className="relative rounded-md w-full md:w-auto">
          <Image src="/images/specialize.png" alt="specialized" width={200} height={200} layout="responsive" className="rounded-md" />
          <p className="absolute font-geistRegular text-[12px] bottom-0 w-full py-2 px-2 text-white bg-black bg-opacity-50">
            Specialized Care
          </p>
        </div>
        <div className="relative rounded-md w-full md:w-auto">
          <Image src="/images/home-support.png" alt="home support" width={200} height={200} layout="responsive" />
          <p className="absolute font-geistRegular text-[12px] bottom-0 w-full py-2 px-2 text-white bg-black bg-opacity-50">
            Home Support
          </p>
        </div>
        <div className="relative rounded-md w-full md:w-auto">
          <Image src="/images/sugery.png" alt="post-surgery" width={200} height={200} layout="responsive" />
          <p className="absolute font-geistRegular text-[12px] bottom-0 w-full py-2 px-2 text-white bg-black bg-opacity-50">
            Post-Surgery Recovery Care
          </p>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection