import React from "react";
import HeroSectionServices from "../../common/Services/HeroSectionServices/HeroSectionServices";
import TrustedBy from "../../common/TrustedBy/TrustedBy";

function DentalAgency() {
  return (
    <>
      <HeroSectionServices
        heading1="Turn Patient Searches "
        heading2="Into Real Appointments"
        bgImag="/IndustryExpertise/saas/saasHero.webp"
        description1="Every day, people search online for trusted dental care — from routine checkups to urgent treatments. The real challenge isn’t just being online, it’s being seen and chosen at the right moment."
        description2="At Humans of Web, we help dental clinics connect with patients who are actively looking for services like yours. Through targeted SEO, local optimization, and smart advertising, we make sure your clinic appears when it matters most. More visibility means more calls, more bookings, and consistent growth you can rely on."
      />
      <TrustedBy padding={"py-5 px-[35px] px-0 md:py-12 xl:py-15"} />
      {/* <SeoServiceVideo /> */}
    </>
  );
}

export default DentalAgency;
