import Image from 'next/image'
import React from 'react'

const CareGiversSection = () => {
  return (
    <section className="flex items-center justify-center py-10 bg-white">
      <div className="flex flex-row items-center justify-between w-full max-w-7xl h-[300px] bg-[#F9F3FF] rounded-lg shadow-lg overflow-hidden">
        {/* Image Section */}
        <div className="flex-[5] h-full relative">
          <Image 
            src="/images/care-giver.png"
            alt="Support Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* Text Section */}
        <div className="flex-[7] p-8 px-10 py-10">
          <div className="flex items-center mb-2">
            <div className="flex items-center justify-center w-8 h-8 border-[2px] border-[#805AA0] bg-white rounded-full">
              <span className="text-[#805AA0] text-base font-bold">/</span>
            </div>
          </div>
          <h2 className="text-2xl text-black font-bold w-[260px] font-geistSemiBold leading-tight mb-2">
          Our caregivers
          </h2>
          <p className="text-sm text-[12px] font-geistRegular text-gray-600 w-[75%] leading-snug">
          We take pride in our team of skilled caregivers, who are carefully screened, trained, and dedicated to providing exceptional care. Every caregiver at Starlite Care is selected not just for their qualifications, but for their passion and commitment to helping others
          </p>
        </div>
      </div>
    </section>
  )
}

export default CareGiversSection