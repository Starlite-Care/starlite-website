import Image from "next/image";
import React from "react";
import Image1 from "@/app/assets/images/Group 2.png";

const CareService = () => {
  return (
    <div className=" mt-24 w-full mx-auto justify-center items-center flex flex-col">
      <h2 className="text-xs sm:text-sm md:text-base font-normal text-[#5F5B5B] font-geistRegular">
        What we do
      </h2>
      <h1 className="text-2xl md:text-5xl font-semibold font-geistSemiBold">
        Services
      </h1>
      <div className=" flex flex-col justify-center items-center mx-auto w-[80%]">
        <div className="flex flex-col sm:flex-col sm:w-[80%] md:flex-row justify-between items-center w-full md:w-[50%] gap-10 mt-10 md:mt-20">
          <Image
            src={Image1}
            alt="Image1"
            width={300}
            height={380}
            className=" w-full md:w-auto h-auto md:h-[260px]"
          />
          <div className="flex flex-col justify-start items-start gap-3 w-full md:w-[312px]">
            <h1 className="text-xl font-semibold font-geistSemiBold">
              Personal care
            </h1>
            <p className="text-sm text-[#5F5B5B] font-geistRegular">
              Friendly supervision to assist with lifes daily activities. Home
              care services ensure that individuals receive the necessary
              support while maintaining their independence.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-col sm:w-[80%] md:flex-row-reverse justify-between items-center w-full md:w-[60%] gap-10 mt-10 md:mt-20">
          <Image
            src={Image1}
            alt="Image1"
            width={300}
            height={380}
            className="md:right-3 w-full md:w-auto h-auto md:h-[260px]"
          />
          <div className="flex flex-col justify-start items-start gap-3 w-full md:w-[392px]">
            <h1 className="text-xl font-semibold font-geistSemiBold">
              Companionship & Conversation
            </h1>
            <p className="text-sm text-[#5F5B5B] font-geistRegular">
              Through meaningful conversations, shared activities, and a
              listening ear, our caregivers help reduce feelings of loneliness
              and isolation. Whether its sharing stories, playing games, or
              simply being there for daily companionship, we aim to brighten
              each day and enhance overall well-being.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#EBEBEB] mt-10 md:mt-20 w-full py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto w-[80%] lg:w-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Specialized care",
                content:
                  "Our specialized care services are designed to provide personalized, comprehensive support that addresses specific health conditions. We believe that specialized care is not just about addressing medical needs; we aim to improve the quality of life for each client by offering expert care. Chronic disease management (e.g., diabetes, heart disease), Dementia and Alzheimer's care, Stroke recovery, Mobility assistance and fall prevention.",
              },
              {
                title: "Outings & Errands",
                content:
                  "Whether its grocery shopping, medical appointments, picking up prescriptions or social activities, our caregivers provide reliable transportation and support, ensuring clients maintain their independence and connection to the community.",
              },
              {
                title: "Laundry & Housekeeping",
                content:
                  "Our laundry and housekeeping services ensure a clean, comfortable living environment for clients. We handle routine tasks such as washing, folding, ironing clothes, and maintaining a tidy home. With attention to detail and care, our goal is to create a safe, clutter-free space, allowing clients to enjoy their homes without the stress of household chores.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold font-geistSemiBold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5F5B5B] font-geistRegular flex-grow">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center mx-auto w-[80%]">
        <div className="flex flex-col sm:flex-col sm:w-[80%] md:flex-row justify-between items-center w-full md:w-[60%] gap-10 mt-10 md:mt-20">
          <Image
            src={Image1}
            alt="Image1"
            width={300}
            height={380}
            className="md:right-3 w-full md:w-auto h-auto md:h-[260px]"
          />
          <div className="flex flex-col justify-start items-start gap-3 w-full md:w-[420px]">
            <h1 className="text-xl font-semibold font-geistSemiBold">
              Post Surgery Recovery Care
            </h1>
            <p className="text-sm text-[#5F5B5B] font-geistRegular">
              Our post-surgery recovery care provides essential support to
              individuals during their healing process at home. We offer
              assistance with daily activities, medication management, wound
              care, and mobility support to ensure a safe and smooth recovery.
              Our trained caregivers work closely with healthcare providers to
              promote a faster, more comfortable rehabilitation, while helping
              patients regain strength and independence in a familiar
              environment.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-col sm:w-[80%] md:flex-row-reverse justify-between items-center w-full md:w-[55%] gap-10 mt-10 md:mt-20">
          <Image
            src={Image1}
            alt="Image1"
            width={300}
            height={380}
            className="md:right-3 w-full md:w-auto h-auto md:h-[260px]"
          />
          <div className="flex flex-col justify-start items-start gap-3 w-full md:w-[392px]">
            <h1 className="text-xl font-semibold font-geistSemiBold">
              Developmental Disabilities Care
            </h1>
            <p className="text-sm text-[#5F5B5B] font-geistRegular">
              We focus on empowering each individual with developmental
              disabilities through compassionate care, helping them thrive at
              home and within their community. We provide assistance with daily
              activities, personal care, and skill development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareService;
