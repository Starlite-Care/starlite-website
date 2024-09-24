'use client'

import Image from 'next/image'
import React from 'react'

const CareGiversSection = () => {
  return (
    <section className="w-full my-8 bg-white">
      <div className="flex flex-col md:flex-row items-stretch w-full bg-[#F9F3FF]">
        {/* Image Section */}
        <div className="w-full md:w-5/12 h-[300px] md:h-auto relative">
          <Image 
            src="/images/care-giver.png"
            alt="Support Image"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 41.66vw"
          />
        </div>
        {/* Text Section */}
        <div className="w-full md:w-7/12 p-6 md:p-12 lg:p-16">
          <div className="flex items-center mb-6">
            <Image src="/images/backward.svg" alt='backward' width={80} height={80} />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold mb-4 font-geistSemiBold leading-tight">
            Our caregivers
          </h2>
          <p className="text-base md:text-lg font-geistRegular text-gray-600 leading-relaxed max-w-2xl">
            We take pride in our team of skilled caregivers, who are carefully screened, trained, and dedicated to providing exceptional care. Every caregiver at Starlite Care is selected not just for their qualifications, but for their passion and commitment to helping others.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CareGiversSection