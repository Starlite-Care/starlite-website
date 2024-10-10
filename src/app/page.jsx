"use client";
import HeroSection from "@/components/HeroSection";
import SupportSection from "@/components/SupportSection";
import Image from "next/image";
import ServicesSection from "@/components/ServicesSection";
import CareGiversSection from "@/components/CareGiversSection";
import Personialize from "@/components/Personialize";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FeedBackIcon from "@/app/assets/icons/feedback float.svg";
import { useState, useRef, useEffect } from "react";
import FeedbackCard from "@/components/FeedbackCard";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const feedbackRef = useRef(null);
  const buttonRef = useRef(null);

  const OpenFeedBack = () => {
    setIsOpen(true);
  };

  const CloseFeedBack = (event) => {
    if (feedbackRef.current && !feedbackRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", CloseFeedBack);
    } else {
      document.removeEventListener("mousedown", CloseFeedBack);
    }

    return () => {
      document.removeEventListener("mousedown", CloseFeedBack);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <HeroSection />

      <div className="fixed z-20 bottom-4 right-2 sm:bottom-8 sm:right-8 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16">
        <button
          ref={buttonRef}
          onClick={OpenFeedBack}
          className="relative z-30"
        >
          <Image
            src={FeedBackIcon}
            alt="FeedBackIcon"
            width={50}
            height={50}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-14 lg:h-14"
          />
        </button>
        {isOpen && (
          <div
            ref={feedbackRef}
            className="absolute bottom-full right-0 mb-4 mr-4 w-[350px] max-w-[calc(100vw-2rem)]"
          >
            <FeedbackCard onClose={() => setIsOpen(false)} />
          </div>
        )}
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-10" onClick={CloseFeedBack}></div>
      )}
      <SupportSection />
      <ServicesSection />
      <CareGiversSection />
      <TestimonialCarousel />
      <Personialize />
    </div>
  );
}
