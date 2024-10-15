import Image from "next/image";
import Link from "next/link";
import React from "react";

const Personalize = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10 sm:py-16 md:py-20 bg-white px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-geistBold text-center text-black mb-4 max-w-[400px] sm:max-w-[500px] md:max-w-[600px]">
        Personalized homecare services
      </h1>

      {/* Subheading */}
      <p className="text-gray-600 text-center text-sm sm:text-base md:text-lg max-w-xs sm:max-w-lg md:max-w-2xl mb-8 sm:mb-10">
        We provide personalized, professional home care services to help your
        loved ones live comfortably and independently in the place they call
        home.
      </p>

      {/* Call to Action Button */}
      <Link
        href="/contactUs"
        className=" sm:w-[300px] mb-7 text-center py-3 px-14 text-white font-geistRegular font-semibold text-lg rounded-full gradient transition-colors w-fit duration-300 shadow-md mt-4 mx-auto"
      >
        Contact Us
      </Link>

      {/* Social Media Icons */}
      <div className="flex space-x-4 sm:space-x-6">
        {/* Facebook Icon */}
        <a
          href="https://www.facebook.com/share/iVqU5WgAhHHF4mBG/?mibextid=LQQJ4d"
          className="w-10 h-10 sm:w-12 sm:h-12 relative"
          target="_blank"
        >
          <Image
            src="/images/facebook.svg"
            alt="Facebook"
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 640px) 40px, 48px"
          />
        </a>

        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/starlite-care-075277333/"
          className="w-10 h-10 sm:w-12 sm:h-12 relative"
          target="_blank"
        >
          <Image
            src="/images/in.svg"
            alt="LinkedIn"
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 640px) 40px, 48px"
          />
        </a>

        {/* X (Twitter) Icon */}
        <a
          href="https://www.instagram.com/starlitenc?igsh=MWI4MHhucW5nYWUwcQ%3D%3D&utm_source=qr"
          target="_blank"
          className="w-10 h-10 sm:w-12 sm:h-12 relative"
        >
          <div className=" flex flex-col justify-center items-center p-1 bg-[#F9F3FF] w-12 h-12 rounded-full">
            <Image
              src="/images/icons8-instagram-logo-94.png"
              alt="Twitter"
              width={32}
              height={32}
              style={{ objectFit: "contain" }}
              sizes="(max-width: 640px) 40px, 48px"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Personalize;
