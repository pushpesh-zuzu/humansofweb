"use client";

import HeroSection from "./components/Home/HeroSection";
import TrustedBy from "./components/common/TrustedBy/TrustedBy";
import ResultOrientedServices from "./components/Home/ResultOrientedServices";
import WorkingWithUs from "./components/Home/WorkingWithUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <ResultOrientedServices />
      <WorkingWithUs />
    </>
  );
}
