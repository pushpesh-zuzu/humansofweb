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

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const timer = null;
    setTimeout(() => {
      setIsOpen(true);
    }, 3000);
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
      <WorkingWithUs />
      <CustomGeneration />
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
