'use client'

import Image from 'next/image'
import React from 'react'

const CareGiversSection = () => {
  return (
    <section className="flex items-center justify-center py-10 bg-white px-4">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl bg-[#F9F3FF] rounded-lg shadow-lg overflow-hidden">
        {/* Image Section */}
        <div className="w-full md:w-5/12 h-[200px] md:h-[300px] relative">
          <Image 
            src="/images/care-giver.png"
            alt="Support Image"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        {/* Text Section */}
        <div className="w-full md:w-7/12 p-6 md:p-8">
          <div className="flex items-center mb-4">
            <div className="flex items-center justify-center w-8 h-8 border-[2px] border-[#805AA0] bg-white rounded-full">
              <span className="text-[#805AA0] text-base font-bold">/</span>
            </div>
          </div>
          <h2 className="text-xl md:text-2xl text-black font-bold mb-4 font-geistSemiBold leading-tight">
            Our caregivers
          </h2>
          <p className="text-sm md:text-base font-geistRegular text-gray-600 leading-relaxed">
            We take pride in our team of skilled caregivers, who are carefully screened, trained, and dedicated to providing exceptional care. Every caregiver at Starlite Care is selected not just for their qualifications, but for their passion and commitment to helping others.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CareGiversSection