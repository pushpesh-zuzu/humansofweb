import React from "react";
import HeroSectionServices from "../../common/Services/HeroSectionServices/HeroSectionServices";
import TrustedBy from "../../common/TrustedBy/TrustedBy";

function OphthalmologyAgency() {
  return (
    <>
      <HeroSectionServices
        heading1="Help More Patients See You Clearly"
        heading2="With Smarter Ophthalmology Growth"
        bgImag="/IndustryExpertise/ophthalmology/ophthalmologyHero.webp"
        description1="When it comes to eye care, trust and visibility go hand in hand. Patients are actively searching for specialists they can rely on — and being present at the right moment makes all the difference."
        description2="At Humans of Web, we help ophthalmology practices grow by connecting them with the right patients through thoughtful, data-driven strategies. From improving your online presence to increasing appointment bookings, everything we do is focused on helping your practice grow in a way that feels natural and sustainable."
        altText="Ophthalmology"
      />
      <TrustedBy padding={"py-5 px-[35px] px-0 md:py-12 xl:py-15"} />
    </>
  );
}

export default OphthalmologyAgency;
