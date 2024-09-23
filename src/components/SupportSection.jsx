import Image from 'next/image';

const SupportSection = () => {
  return (
    <section className="flex items-center justify-center py-10 bg-white px-4">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl bg-[#F1FEF4] rounded-lg shadow-lg overflow-hidden">
        {/* Text Section */}
        <div className="w-full md:w-7/12 p-6 md:p-8">
          <div className="flex items-center mb-4">
            <div className="flex items-center justify-center w-7 h-7 border-2 border-green-500 bg-white rounded-full">
              <span className="text-green-500 text-base font-bold">/</span>
            </div>
          </div>
          <h2 className="text-xl md:text-2xl text-black font-bold font-geistSemiBold leading-tight mb-4">
            Support all-round the clock
          </h2>
          <p className="text-sm md:text-base font-geistRegular text-gray-600 leading-relaxed">
            Our compassionate caregivers are here to support your family every step of the way. Your loved ones live comfortably and independently in the place they call home.
          </p>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-5/12 h-48 md:h-60 relative">
          <Image 
            src="/images/support-image.png"
            alt="Support Image"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
};

export default SupportSection;