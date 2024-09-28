"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { Upload } from "lucide-react";
import emailjs from "@emailjs/browser";
import InputField from "@/components/UI/InputField";
import Toast from "@/components/UI/Toast";
import TimeIcon from "@/app/assets/icons/ion_time-sharp.svg";
import PayIcon from "@/app/assets/icons/game-icons_cash.svg";
import peopleIcon from "@/app/assets/icons/Vector.svg";

const FeatureItem = ({ icon, text }) => (
  <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
    <Image src={icon} alt={text} width={30} height={30} />
    <p className="text-[12px] sm:text-base">{text}</p>
  </div>
);

const ResponsiveFeatures = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
      <div className=" flex flex-row justify-center items-center gap-4">
        <FeatureItem icon={TimeIcon} text="Flexible work schedule" />
        <FeatureItem icon={PayIcon} text="Competitive pay" />
      </div>
      <FeatureItem icon={peopleIcon} text="Family-like workforce" />
    </div>
  );
};

const Career = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [positionSought, setPositionSought] = useState("");
  const [resume, setResume] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      console.log("SUCCESS!", result.text);
      setToastMessage(
        "Your application has been sent successfully. We'll get back to you soon!"
      );
      setShowToast(true);
      setName("");
      setEmail("");
      setPhone("");
      setPositionSought("");
      setResume(null);
    } catch (error) {
      console.error("FAILED...", error);
      setToastMessage("Failed to send application. Please try again later.");
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setShowToast(false), 5000);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  return (
    <section className="w-full flex flex-col items-center">
      <div className="bg-[url('/images/joinOutTeam.png')] bg-cover bg-center h-[300px] sm:h-[400px] md:h-[560px] w-full"></div>
      <div className="w-full max-w-[800px] bg-white rounded-2xl shadow-md -mt-20 sm:-mt-40 md:-mt-60 lg:-mt-80 p-6 md:p-12 mb-12">
        {showToast && <Toast message={toastMessage} />}
        <div className="w-full max-w-[600px] mx-auto mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-geistSemiBold text-center mb-4">
            Join our team
          </h1>
          <p className="font-normal font-geistRegular text-sm text-center">
            Are you passionate about making a difference in someone's life? We
            are always looking for caring and dedicated individuals to join our
            team. Apply today and become part of a community that values
            work/life balance, compassion and excellence.
          </p>
          <ResponsiveFeatures />
        </div>

        <form
          ref={form}
          onSubmit={handleFormSubmit}
          className="w-full max-w-[650px] mx-auto flex flex-col gap-4"
        >
          <InputField
            label="Full Name"
            name="name"
            value={name}
            type="text"
            placeholder="Alexandre Porchosky"
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            label="Email address"
            name="email"
            value={email}
            type="email"
            placeholder="Alexandrepor@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="Phone number"
            name="phone"
            value={phone}
            type="tel"
            placeholder="xxx-xxxx-xxx"
            onChange={(e) => setPhone(e.target.value)}
          />
          <InputField
            label="Position sought"
            name="positionSought"
            value={positionSought}
            type="text"
            placeholder="Home care nurse"
            onChange={(e) => setPositionSought(e.target.value)}
          />
          <div className="flex flex-col w-full">
            <label className="font-normal font-geistRegular mb-2">Resume</label>
            <div className="border-2 border-dashed border-green-300 rounded-lg p-4 flex items-center justify-center cursor-pointer hover:bg-green-50 transition-colors duration-300">
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
                id="resume-upload"
              />
              <label
                htmlFor="resume-upload"
                className="cursor-pointer flex items-center"
              >
                <Upload className="w-6 h-6 mr-2 text-green-500" />
                <span className="text-green-500">
                  {resume ? resume.name : "Upload a file"}
                </span>
              </label>
            </div>
          </div>
          <div className="w-full flex justify-start items-start">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-[300px] py-3 px-4 text-white font-geistRegular font-semibold text-lg rounded-full bg-gradient-to-tl from-[#535353] to-[#000000] transition-colors duration-300 shadow-md mt-4"
            >
              {isSubmitting ? "Submitting..." : "Submit application"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Career;
