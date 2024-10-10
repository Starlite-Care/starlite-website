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

      <div>
        {isOpen && (
          <div className="fixed inset-0 z-30">
            <div ref={feedbackRef}>
              <FeedbackCard />
            </div>
          </div>
        )}
        <button onClick={OpenFeedBack}>
          <Image
            src={FeedBackIcon}
            alt="FeedBackIcon"
            width={50}
            height={50}
            className="fixed top-[590px] z-20 right-14"
          />
        </button>
      </div>
      <SupportSection />
      <ServicesSection />
      <CareGiversSection />
      <TestimonialCarousel />
      <Personialize />
    </div>
  );
}
