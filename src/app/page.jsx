"use client";
import HeroSection from "@/components/HeroSection";
import SupportSection from "@/components/SupportSection";
import Image from "next/image";
import ServicesSection from "@/components/ServicesSection";
import CareGiversSection from "@/components/CareGiversSection";
import Personialize from "@/components/Personialize";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FeedBackIcon from "@/app/assets/icons/feedback float.svg";
import { useState } from "react";
import FeedbackCard from "@/components/FeedbackCard";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const OpenFeedBack = () => {
    setIsOpen(!isOpen);
    // setTimeout(() => setIsOpen(false), 20000);
  };
  return (
    <>
      <HeroSection />
      <div>
        {isOpen && <FeedbackCard />}
        <button onClick={OpenFeedBack}>
          <Image
            src={FeedBackIcon}
            alt="FeedBackIcon"
            width={50}
            height={50}
            className=" fixed top-[590px] right-14"
          />
        </button>
      </div>
      <SupportSection />
      <ServicesSection />
      <CareGiversSection />
      <TestimonialCarousel />
      <Personialize />
    </>
  );
}
