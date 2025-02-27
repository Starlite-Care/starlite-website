"use client";

import React from "react";

const InputField = ({
  label = "Full Name",
  name, // Add this line
  value,
  type,
  placeholder = "Alexandre Porchosky",
  onChange,
  className = "",
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={name} className="font-normal font-geistRegular">
        {label}
      </label>
      <input
        required
        id={name}
        name={name} // Add this line
        type={type}
        value={value}
        className={`w-full font-geistRegular h-14 md:h-16 border px-4 md:px-6 rounded-lg placeholder:text-[#ABA5A5] bg-[#F4F4F4] border-[#E1E1E1] focus:outline-none focus:border-[#3778C2] ${className}`}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
