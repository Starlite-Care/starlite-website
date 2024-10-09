import CareGiversSection from "@/components/CareGiversSection";
import CareService from "@/components/CareService";
import ServicesSection from "@/components/ServicesSection";
import React from "react";

const page = () => {
  return (
    <>
      <CareService />

      <CareGiversSection />
    </>
  );
};

export default page;
