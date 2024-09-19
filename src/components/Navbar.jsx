"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const BLACK_TEXT_ROUTES = ["/contactUs", "/services", "/resources"];

const Navbar = () => {
  const pathname = usePathname();
  const [isBlackTextRoute, setIsBlackTextRoute] = useState(false);

  useEffect(() => {
    setIsBlackTextRoute(BLACK_TEXT_ROUTES.includes(pathname));
  }, [pathname]);

  const linkClass = () => `
    ${isBlackTextRoute ? "text-black" : "text-white"} 
    hover:text-green-400 transition-colors duration-300
    text-sm sm:text-base
  `;

  return (
    <div className="fixed top-0 z-50 bg-transparent backdrop-blur-md backdrop-filter w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 py-4">
        {/* Logo or Brand Name */}
        <div className="mb-4 sm:mb-0">
          <Link
            href="/"
            className={`${
              isBlackTextRoute ? "text-black" : "text-white"
            } text-xl sm:text-2xl font-semibold no-underline`}
          >
            Star<span className="text-green-400">lite</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center sm:space-x-4 md:space-x-8">
          <Link href="/services" className={linkClass()}>
            Services
          </Link>
          <Link href="/consultation" className={linkClass()}>
            Consultation
          </Link>
          <Link href="/resources" className={linkClass()}>
            Resources
          </Link>
          <Link href="/career" className={linkClass()}>
            Career
          </Link>
          <Link href="/contactUs" className={linkClass()}>
            Contact us
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
