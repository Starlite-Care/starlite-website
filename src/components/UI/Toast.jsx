import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

const Toast = ({ message, type }) => {
  const isSuccess = type === "success";

  return (
    <div className="fixed top-12 left-1/2 transform -translate-x-1/2 z-50 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl w-full px-4">
      <div
        className={`${
          isSuccess ? "bg-green-500" : "bg-red-500"
        } text-white px-4 py-3 rounded-md shadow-md flex items-center space-x-2`}
      >
        {isSuccess ? (
          <CheckCircle className="flex-shrink-0" size={20} />
        ) : (
          <XCircle className="flex-shrink-0" size={20} />
        )}
        <span className="text-sm font-normal font-geistRegular flex-grow">
          {message}
        </span>
      </div>
    </div>
  );
};

export default Toast;
