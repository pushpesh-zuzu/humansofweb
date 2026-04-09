import React from "react";
import HeroSectionServices from "../../common/Services/HeroSectionServices/HeroSectionServices";
import TrustedBy from "../../common/TrustedBy/TrustedBy";

function PlasticSurgeonAgency() {
  return (
    <>
      <HeroSectionServices
        heading1="Turn Interest Into Real Consultations"
        heading2="Turn Interest Into Real Consultations"
        bgImag="/IndustryExpertise/plasticSurgery/plasticSurgeryHero.webp"
        description1="In the world of plastic surgery, decisions are deeply personal. Patients don’t just look for services — they look for trust, confidence, and the right expertise before taking the next step"
        description2="At Humans of Web, we help you connect with the right audience by building a strong and credible presence online. From attracting high-intent inquiries to turning them into real consultations, our approach focuses on quality over volume — so your practice grows with the right patients, not just more traffic."
        altText="Plastic surgery or surgeons Agency"
      />
      <TrustedBy padding={"py-5 px-[35px] px-0 md:py-12 xl:py-15"} />
    </>
  );
}

export default PlasticSurgeonAgency;
