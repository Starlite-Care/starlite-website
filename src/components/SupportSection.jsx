import Image from 'next/image';

const SupportSection = () => {
  return (
    <section className="flex items-center justify-center py-10 bg-white px-4 md:px-0">
      <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-[760px] md:h-[240px] bg-[#F1FEF4] rounded-lg shadow-lg overflow-hidden">
        {/* Text Section */}
        <div className="flex-[7] p-6">
          <div className="flex items-center mb-2">
            <div className="flex items-center justify-center w-7 h-7 border-[2px] border-green-500 bg-white rounded-full">
              <span className="text-green-500 text-base font-bold">/</span>
            </div>
          </div>
          <h2 className="text-xl md:text-2xl text-black font-bold md:w-[210px] font-geistSemiBold leading-tight mb-2 flex flex-col">
            Support all-round the clock
          </h2>
          <p className="text-sm text-[12px] font-geistRegular text-gray-600 md:w-[75%] leading-snug">
            Our compassionate caregivers are here to support your family every step of the way. Your loved ones live comfortably and independently in the place they call home.
          </p>
        </div>
        {/* Image Section */}
        <div className="w-full md:flex-[4] h-48 md:h-full relative">
          <Image 
            src="/images/support-image.png"
            alt="Support Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SupportSection;