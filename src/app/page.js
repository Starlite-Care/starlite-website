import HeroSection from "@/components/HeroSection";
import SupportSection from "@/components/SupportSection";
import Image from "next/image";
import ServicesSection from "@/components/ServicesSection";
import CareGiversSection from "@/components/CareGiversSection";
import Personialize from "@/components/Personialize";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SupportSection />
      <ServicesSection />
      <CareGiversSection />
      <TestimonialCarousel />
      <Personialize />
    </>
  );
}
