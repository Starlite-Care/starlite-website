"use client";

import Image from "next/image";
import React, { useState } from "react";
import CallIcon from "../assets/icons/ic_sharp-phone.svg";
import mainIcon from "../assets/icons/mdi_email-open.svg";
import LocationIcon from "../assets/icons/carbon_location-filled.svg";
import EmergencyIcon from "../assets/icons/emergency.svg";
import TimeIcon from "../assets/icons/carbon_time-filled.svg";
import { Check, Copy } from "lucide-react";

const ContactUs = () => {
  const [copied, setCopied] = useState(false);
  const [copiedEmg, setCopiedEmg] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("(555) 555-1234");
  const [emailAddress, setEmailAddress] = useState("samplemail@starlite.com");

  const handleCopy = async (text, setCopiedState) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedState(true);
      setTimeout(() => setCopiedState(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const CopyButton = ({ onClick, copied }) => (
    <button
      className="flex items-center w-fit justify-center px-1 py-1 bg-[#007AFF26] text-[12px] text-[#5F5B5B] rounded-2xl transition-all duration-200"
      onClick={onClick}
    >
      {copied ? (
        <>
          <Check size={14} className="mr-1" />
          <p>Copied</p>
        </>
      ) : (
        <>
          <Copy size={14} className="mr-1" />
          Copy
        </>
      )}
    </button>
  );

  const ContactCard = ({ icon, title, content, copyable, onCopy, copied }) => (
    <div className="flex flex-col gap-2 px-4 shadow-lg bg-white rounded-xl w-full h-[173px] justify-center">
      <Image src={icon} alt={title} width={52} height={52} />
      <p className="font-geistRegular font-thin text-[#252C25] text-sm w-full">
        {title}
      </p>
      <div className="flex flex-row items-center justify-between w-full">
        <h2 className="text-[20px] font-geistSemiBold font-semibold text-nowrap overflow-hidden text-ellipsis">
          {content}
        </h2>
        {copyable && <CopyButton onClick={onCopy} copied={copied} />}
      </div>
    </div>
  );

  return (
    <main className="flex flex-col justify-center w-full bg-[#F1FEF4] min-h-screen py-8 px-4 md:px-8">
      <div className="flex flex-col w-full max-w-[1000px] justify-center items-center mx-auto gap-8">
        <div className="flex flex-col justify-center items-center gap-[20px] text-center">
          <h1 className="font-geistSemiBold font-semibold text-3xl md:text-4xl">
            Get in Touch
          </h1>
          <p className="text-[14px] text-[#5F5B5B] font-normal font-geistRegular max-w-[600px]">
            Have questions or need more information? We're here to help. Whether
            you're ready to schedule a consultation or just want to learn more
            about our services, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          <ContactCard
            icon={CallIcon}
            title="Phone Number"
            content={phoneNumber}
            copyable={true}
            onCopy={() => handleCopy(phoneNumber, setCopied)}
            copied={copied}
          />
          <ContactCard
            icon={mainIcon}
            title="Email address"
            content={emailAddress}
            copyable={true}
            onCopy={() => handleCopy(emailAddress, setCopiedEmail)}
            copied={copiedEmail}
          />
          <ContactCard
            icon={LocationIcon}
            title="Location"
            content="Tulsa, Oklahoma"
          />
          <ContactCard
            icon={EmergencyIcon}
            title="Emergency contact"
            content={phoneNumber}
            copyable={true}
            onCopy={() => handleCopy(phoneNumber, setCopiedEmg)}
            copied={copiedEmg}
          />
          <ContactCard
            icon={TimeIcon}
            title="Office hours"
            content={
              <div className="flex flex-col items-start w-full">
                <p className="text-[14px] font-geistSemiBold font-semibold">
                  Mon - Fri (9am - 6pm)
                </p>
                <p className="text-[14px] font-geistSemiBold font-semibold">
                  Sat - Sun (9am - 6pm)
                </p>
              </div>
            }
          />
          <div className="flex flex-col gap-2 px-4 rounded-xl w-full h-[173px] justify-center">
            <h1 className="font-geistSemiBold font-semibold text-[24px] leading-[24px]">
              Schedule consultation
            </h1>
            <p className="font-geistRegular font-thin text-[#252C25] text-sm w-full">
              Have specific things to share? Schedule call with a specialist
            </p>
            <a
              href="/scheduleCall"
              className="font-geistRegular text-[#007AFF] underline"
            >
              Schedule a call
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
