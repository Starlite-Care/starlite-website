"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const BLACK_TEXT_ROUTES = ["/contactUs", "/services", "/resources"];
const WHITE_TEXT_ROUTES = ["/career", "/consultation", "/"];

const Navbar = () => {
  const pathname = usePathname();
  const [isBlackTextRoute, setIsBlackTextRoute] = useState(false);
  const [isWhiteTextRoute, setIsWhiteTextRoute] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsBlackTextRoute(BLACK_TEXT_ROUTES.includes(pathname));
    setIsWhiteTextRoute(WHITE_TEXT_ROUTES.includes(pathname));

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const linkClass = (href) => {
    const isActive = pathname === href;
    let textColor = "text-white"; // Default color

    if (isBlackTextRoute || (isScrolled && isWhiteTextRoute)) {
      textColor = "text-black";
    }

    return `
      ${isActive ? "text-green-400" : textColor}
      ${!isActive ? "hover:text-green-400" : ""}
      transition-colors duration-300
      text-sm sm:text-base
    `;
  };

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/consultation", label: "Consultation" },
    { href: "/resources", label: "Resources" },
    { href: "/career", label: "Career" },
    { href: "/contactUs", label: "Contact us" },
  ];

  return (
    <>
      <div
        className={`fixed top-0 z-50 w-full transition-all duration-300 overflow-hidden ${
          isScrolled
            ? "bg-white shadow-md text-black"
            : "bg-transparent backdrop-blur-md backdrop-filter"
        }`}
      >
        <div className="flex justify-between w-[89%] max-w-7xl mx-auto items-center px-4 sm:px-10 py-4">
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
            <Menu className={linkClass("")} size={24} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden sm:flex sm:space-x-4 md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={linkClass(link.href)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Side Menu for Mobile */}
      <div
        className={`fixed top-0 right-0 w-1/2 h-1/2 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isSideMenuOpen ? "translate-x-0" : "translate-x-full"
        } ${
          isScrolled
            ? "bg-white shadow-md"
            : "bg-transparent backdrop-blur-md backdrop-filter"
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-black hover:text-green-400 text-lg ${
                  pathname === link.href ? "text-green-500" : "text-black"
                }`}
                onClick={toggleSideMenu}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
