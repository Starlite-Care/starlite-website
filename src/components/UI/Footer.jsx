import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#EEEEEE] py-4 px-3 sm:px-6 flex justify-center items-center">
      <p className="text-xs sm:text-sm md:text-base text-center">
        Copyright © {new Date().getFullYear()} Starlite care - All rights
        reserved
      </p>
    </footer>
  );
};

export default Footer;
