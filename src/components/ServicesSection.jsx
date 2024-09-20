import Image from 'next/image'
import React from 'react'

const ServicesSection = () => {
  return (
<section className="items-center py-10 px-60 bg-white">
  <div className="flex items-center gap-8">
    <div className="flex flex-col">
      <span className="text-black font-geistRegular text-[10px] leading-6">Our services</span>
      <span className="text-black font-geistBold text-[25px] leading-6">What We DO</span>
    </div>
    <div className="relative rounded-md ml-28">
      <Image src="/images/personal.png" alt="personal" width={200} height={200} />
      <p className="absolute font-geistRegular text-[12px] bottom-0 w-full py-2 px-2 text-white">
    Personalized Care
  </p>
    </div>
    <div className=" relative rounded-md">
      <Image src="/images/companionship.png" alt="personal" width={200} height={200} />
      <p className="absolute font-geistRegular text-[12px] bottom-0 w-full py-2 px-2 text-white">
      Companionship
  </p>
    </div>
  </div>
  <div className='flex py-10 gap-8 ml-16'>
  <div className="relative rounded-md">
  <Image src="/images/specialize.png" alt="personal" width={200} height={200} className="rounded-md" />
  <p className="absolute font-geistRegular text-[12px] bottom-0 w-full py-2 px-2 text-white">
    Specialized Care
  </p>
</div>
  <div className="relative rounded-md">
      <Image src="/images/home-support.png" alt="personal" width={200} height={200} />
      <p className="absolute font-geistRegular text-[12px] bottom-0 w-full py-2 px-2 text-white">
    Home Support
  </p>
    </div>
  <div className="relative rounded-md">
      <Image src="/images/sugery.png" alt="personal" width={200} height={200} />
      <p className="absolute font-geistRegular text-[12px] bottom-0 w-full py-2 px-2 text-white">
      Post-Surgery Recovery Care
  </p>
    </div>
    </div>
</section>

  )
}

export default ServicesSection
