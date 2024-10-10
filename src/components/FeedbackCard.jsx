"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import InputField from "./UI/InputField";
import Toast from "./UI/Toast";

const FeedbackCard = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const [toastType, setToastType] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.current) return;

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_FEEDBACK,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_FEEDBACK,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY_FEEDBACK
      );

      console.log("SUCCESS!", result.text);
      setToastMessage("Your feedback has been sent successfully.");
      setToastType("success");
      setShowToast(true);
      setFormData({
        name: "",
        message: "",
      });
    } catch (error) {
      console.error("FAILED...", error);
      setToastMessage("Failed to send feedback. Please try again later.");
      setToastType("error");
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setShowToast(false), 5000);
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-2xl p-6 relative">
      {showToast && <Toast message={toastMessage} type={toastType} />}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
      >
        ×
      </button>
      <h1 className="font-geistBold font-bold text-xl mb-4 text-center">
        Feedback Form
      </h1>
      <form
        ref={form}
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-4"
      >
        <InputField
          label="Name"
          name="name"
          required
          value={formData.name}
          type="text"
          placeholder="Micah Olabisi"
          onChange={handleInputChange}
        />
        <div className="flex flex-col w-full">
          <label className="font-normal font-geistRegular mb-2">Message</label>
          <textarea
            name="message"
            required
            className="w-full font-geistRegular h-32 border px-4 py-2 rounded-lg placeholder:text-[#ABA5A5] bg-[#F4F4F4] border-[#E1E1E1]"
            placeholder="Hey there! I think you should..."
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-center w-full mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-tl gradient transition-colors duration-300 shadow-md px-6 sm:px-10 py-2 sm:py-3 rounded-full text-white text-center text-sm sm:text-base disabled:opacity-50 w-full sm:w-auto"
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackCard;
