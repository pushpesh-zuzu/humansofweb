import React from "react";
import HeroSectionServices from "../../common/Services/HeroSectionServices/HeroSectionServices";
import TrustedBy from "../../common/TrustedBy/TrustedBy";

function HealthcareAgency() {
  return (
    <>
      <HeroSectionServices
        heading1="Build a Stronger Healthcare Presence"
        heading2="That Connects With More Patients"
        bgImag="/IndustryExpertise/saas/saasHero.webp"
        description1="Healthcare today isn’t just about providing the right treatment — it’s about being visible, trustworthy, and easy to reach when patients need you the most."
        description2="At Humans of Web, we help healthcare providers grow by creating meaningful connections with the right audience. From improving your online presence to bringing in more patient inquiries, every strategy is designed to support real, sustainable growth for your practice."
      />
      <TrustedBy padding={"py-5 px-[35px] px-0 md:py-12 xl:py-15"} />
    </>
  );
}

export default HealthcareAgency;
