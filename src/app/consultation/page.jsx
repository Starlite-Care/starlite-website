"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import InputField from "@/components/UI/InputField";
import Toast from "@/components/UI/Toast";

const ScheduleCall = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zipCode: "",
    message: "",
  });
  const [toastType, setToastType] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Input changed: ${name} = ${value}`); // Debug log (can be removed if no longer needed)
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData); // Debug log (can be removed if no longer needed)
    setIsSubmitting(true);

    if (!form.current) return;

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      console.log("SUCCESS!", result.text);
      setToastMessage(
        "Your message has been sent successfully. Please allow 24 - 48 hours for a response"
      );
      setToastType("success");
      setShowToast(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        zipCode: "",
        message: "",
      });
    } catch (error) {
      console.error("FAILED...", error);
      setToastMessage("Failed to send message. Please try again later.");
      setToastType("error");
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setShowToast(false), 5000);
    }
  };

  return (
    <section className="w-full flex flex-col items-center">
      <div className="bg-[url('/images/scheduleCallImg.png')] bg-cover bg-center h-[300px] sm:h-[400px] md:h-[560px] w-full"></div>
      <div className="w-full max-w-[800px] bg-white rounded-2xl shadow-md -mt-20 sm:-mt-40 md:-mt-60 lg:-mt-80 p-6 md:p-12 mb-12">
        {showToast && <Toast message={toastMessage} type={toastType} />}
        <div className="w-full max-w-[600px] mx-auto mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-geistSemiBold text-center mb-4">
            Schedule a consultation
          </h1>
          <p className="font-normal font-geistRegular text-sm text-center">
            Have questions or need more information? We are here to help.
            Whether you are ready to schedule a consultation or just want to
            learn more about our services, feel free to reach out.
          </p>
        </div>

        <form
          ref={form}
          onSubmit={handleFormSubmit}
          className="w-full max-w-[650px] mx-auto flex flex-col gap-4"
        >
          <InputField
            label="Full Name"
            name="name"
            value={formData.name}
            type="text"
            required
            placeholder="Alexandre Porchosky"
            onChange={handleInputChange}
          />
          <InputField
            label="Email address"
            name="email"
            value={formData.email}
            type="email"
            required
            placeholder="Alexandrepor@gmail.com"
            onChange={handleInputChange}
          />
          <InputField
            label="Phone number"
            name="phone"
            required
            value={formData.phone}
            type="tel"
            placeholder="xxx-xxxx-xxx"
            onChange={handleInputChange}
          />
          <InputField
            label="ZIP Code"
            name="zipCode"
            value={formData.zipCode}
            type="text"
            placeholder="9478HE"
            onChange={handleInputChange}
          />
          <div className="flex flex-col w-full">
            <label className="font-normal font-geistRegular mb-2">
              Message
            </label>
            <textarea
              name="message"
              required
              className="w-full font-geistRegular h-32 border px-4 py-2 rounded-lg placeholder:text-[#ABA5A5] bg-[#F4F4F4] border-[#E1E1E1]"
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full justify-center items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-[300px] py-3 px-4 text-white font-geistRegular font-semibold text-lg rounded-full bg-gradient-to-tl from-green-700 to-green-500 hover:from-green-700 hover:to-green-500 transition-colors duration-300 shadow-md mt-4 mx-auto disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ScheduleCall;
