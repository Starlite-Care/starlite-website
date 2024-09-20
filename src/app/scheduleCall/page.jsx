"use client";
import InputField from "@/components/UI/InputField";
import Toast from "@/components/UI/Toast";
import React, { useState } from "react";

const ScheduleCall = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [zipCode, setZipCode] = useState();
  const [message, setMessage] = useState();
  const [showToast, setShowToast] = useState(false);

  const handleFormSubmit = (e) => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
    e.preventDefault(); // Prevent default form submission
  };

  return (
    <section className="w-full flex flex-col items-center">
      <div className="bg-[url('/images/scheduleCallImg.png')] bg-cover bg-center h-[300px] sm:h-[400px] md:h-[560px] w-full"></div>
      <div className="w-full max-w-[800px] bg-white rounded-2xl shadow-md -mt-20 sm:-mt-40 md:-mt-60 lg:-mt-80 p-6 md:p-12 mb-12">
        {showToast && (
          <Toast message="Your message has been sent successfully. Please allow 24 - 48 hours for a response" />
        )}
        <div className="w-full max-w-[600px] mx-auto mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-geistSemiBold text-center mb-4">
            Schedule a consultation
          </h1>
          <p className="font-normal font-geistRegular text-sm text-center">
            Have questions or need more information? We're here to help. Whether
            you're ready to schedule a consultation or just want to learn more
            about our services, feel free to reach out.
          </p>
        </div>

        <form
          onSubmit={handleFormSubmit}
          className="w-full max-w-[650px] mx-auto flex flex-col gap-4"
        >
          <InputField
            label="Full Name"
            value={name}
            type="text"
            placeholder="Alexandre Porchosky"
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            label="Email address"
            value={email}
            type="email"
            placeholder="Alexandrepor@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="Phone number"
            value={phone}
            type="tel"
            placeholder="xxx-xxxx-xxx"
            onChange={(e) => setPhone(e.target.value)}
          />
          <InputField
            label="ZIP Code"
            value={zipCode}
            type="text"
            placeholder="9478HE"
            onChange={(e) => setZipCode(e.target.value)}
          />
          <div className="flex flex-col w-full">
            <label className="font-normal font-geistRegular mb-2">
              Message
            </label>
            <textarea
              className="w-full font-geistRegular h-32 border px-4 py-2 rounded-lg placeholder:text-[#ABA5A5] bg-[#F4F4F4] border-[#E1E1E1]"
              placeholder="Your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className=" w-full justify-center items-center ">
            <button className="w-full sm:w-[300px] py-3 px-4 text-white font-geistRegular font-semibold text-lg rounded-full bg-gradient-to-tl from-green-700 to-green-500 hover:from-green-700 hover:to-green-500 transition-colors duration-300 shadow-md mt-4 mx-auto">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ScheduleCall;
