"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const BLACK_TEXT_ROUTES = [,"/contactUs", "/services", "/resources"];

const Navbar = () => {
  const pathname = usePathname();
  const [isBlackTextRoute, setIsBlackTextRoute] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  useEffect(() => {
    setIsBlackTextRoute(BLACK_TEXT_ROUTES.includes(pathname));
  }, [pathname]);

  const linkClass = `
    ${isBlackTextRoute ? "text-black" : "text-white"} 
    hover:text-green-400 transition-colors duration-300
    text-sm sm:text-base
  `;

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <>
      <div className="fixed top-0 z-50 bg-transparent backdrop-blur-md backdrop-filter w-full">
        <div className="flex justify-between items-center px-4 sm:px-10 py-4">
          {/* Logo or Brand Name */}
          <Link
            href="/"
            className={`${
              isBlackTextRoute ? "text-black" : "text-white"
            } text-xl sm:text-2xl font-semibold no-underline`}
          >
            Star<span className="text-green-400">lite</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleSideMenu}
            className="sm:hidden text-white hover:text-green-400"
          >
            <Menu size={24} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden sm:flex sm:space-x-4 md:space-x-8">
            <Link href="/services" className={linkClass}>
              Services
            </Link>
            <Link href="/consultation" className={linkClass}>
              Consultation
            </Link>
            <Link href="/resources" className={linkClass}>
              Resources
            </Link>
            <Link href="/career" className={linkClass}>
              Career
            </Link>
            <Link href="/contactUs" className={linkClass}>
              Contact us
            </Link>
          </nav>
        </div>
      </div>

      {/* Side Menu for Mobile */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isSideMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <button
            onClick={toggleSideMenu}
            className="mb-8 text-black hover:text-green-400"
          >
            <X size={24} />
          </button>
          <nav className="flex flex-col space-y-4">
            <Link href="/services" className="text-black hover:text-green-400" onClick={toggleSideMenu}>
              Services
            </Link>
            <Link href="/consultation" className="text-black hover:text-green-400" onClick={toggleSideMenu}>
              Consultation
            </Link>
            <Link href="/resources" className="text-black hover:text-green-400" onClick={toggleSideMenu}>
              Resources
            </Link>
            <Link href="/career" className="text-black hover:text-green-400" onClick={toggleSideMenu}>
              Career
            </Link>
            <Link href="/contactUs" className="text-black hover:text-green-400" onClick={toggleSideMenu}>
              Contact us
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;  