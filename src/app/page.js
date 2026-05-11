"use client";

import HeroSection from "./components/Home/HeroSection";
import TrustedBy from "./components/common/TrustedBy/TrustedBy";
import ResultOrientedServices from "./components/Home/ResultOrientedServices";
import WorkingWithUs from "./components/Home/WorkingWithUs";
import ProposalModal from "./components/auth/ProposalModal";
import { useEffect, useState } from "react";
import CustomGeneration from "./components/Home/CustomGeneration";
// import BlogSection from "./components/Home/BlogSection";
import IndustryTags from "./components/Home/IndustryTags";
import OurExport from "./components/Home/OurExport";
import ServiceSectors from "./components/Home/ServiceSectors";

let hasAutoOpenedProposalModal = false;

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (hasAutoOpenedProposalModal) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      hasAutoOpenedProposalModal = true;
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <HeroSection />
      <TrustedBy />
      <ResultOrientedServices />
      <IndustryTags />
      <ServiceSectors />
      <WorkingWithUs />
      <CustomGeneration />
      <OurExport />
      {/* <BlogSection /> */}
      <ProposalModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </>
  );
}
