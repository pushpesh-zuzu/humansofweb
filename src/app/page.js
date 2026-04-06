"use client";

import HeroSection from "./components/Home/HeroSection";
import TrustedBy from "./components/common/TrustedBy/TrustedBy";
import ResultOrientedServices from "./components/Home/ResultOrientedServices";
import ProposalModal from "./components/auth/ProposalModal";
import { useEffect, useState } from "react";

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
      <ProposalModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </>
  );
}
