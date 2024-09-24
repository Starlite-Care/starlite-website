"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const BLACK_TEXT_ROUTES = ["/contactUs", "/services", "/resources"];

const Navbar = () => {
  const pathname = usePathname();
  const [isBlackTextRoute, setIsBlackTextRoute] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsBlackTextRoute(BLACK_TEXT_ROUTES.includes(pathname));

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50); // Change to black after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const linkClass = `
    ${isBlackTextRoute || isScrolled ? "text-black" : "text-white"} 
    hover:text-green-400 transition-colors duration-300
    text-sm sm:text-base
  `;

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <>
      <div
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md"
            : "bg-transparent backdrop-blur-md backdrop-filter"
        }`}
      >
        <div className="flex justify-between items-center px-4 sm:px-10 py-4">
          {/* Logo or Brand Name */}
          <Link
            href="/"
            className={`${
              isBlackTextRoute || isScrolled ? "text-black" : "text-white"
            } text-xl sm:text-2xl font-semibold no-underline transition-colors duration-300`}
          >
            Star<span className="text-green-400">lite</span>
          </Link>

          {/* Mobile Menu Button */}
          <button onClick={toggleSideMenu} className="sm:hidden">
            <Menu className={linkClass} size={24} />
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
        className={`fixed top-0 right-0 w-1/2 h-1/2 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isSideMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 h-full flex flex-col">
          <button
            onClick={toggleSideMenu}
            className="self-end text-black hover:text-green-400 mb-4"
          >
            <X size={24} />
          </button>
          <nav className="flex flex-col space-y-4">
            <Link
              href="/services"
              className="text-black hover:text-green-400 text-lg"
              onClick={toggleSideMenu}
            >
              Services
            </Link>
            <Link
              href="/consultation"
              className="text-black hover:text-green-400 text-lg"
              onClick={toggleSideMenu}
            >
              Consultation
            </Link>
            <Link
              href="/resources"
              className="text-black hover:text-green-400 text-lg"
              onClick={toggleSideMenu}
            >
              Resources
            </Link>
            <Link
              href="/career"
              className="text-black hover:text-green-400 text-lg"
              onClick={toggleSideMenu}
            >
              Career
            </Link>
            <Link
              href="/contactUs"
              className="text-black hover:text-green-400 text-lg"
              onClick={toggleSideMenu}
            >
              Contact us
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
