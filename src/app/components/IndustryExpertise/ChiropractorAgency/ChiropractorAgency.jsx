import React from "react";
import HeroSectionServices from "../../common/Services/HeroSectionServices/HeroSectionServices";
import TrustedBy from "../../common/TrustedBy/TrustedBy";

function ChiropractorAgency() {
  return (
    <>
      <HeroSectionServices
        heading1="Get Found by Patients Who Need You Most"
        heading2="With Smarter Chiropractic Marketing"
        bgImag="/IndustryExpertise/chiropractor/chiropractorHero.webp"
        description1="More people today are actively searching for relief from pain and discomfort — but if your clinic isn’t visible online, those potential patients may never find you."
        description2="At Humans of Web, we help chiropractic practices stand out where it matters most. By improving your online presence and connecting you with people actively looking for care, we ensure your clinic doesn’t just exist online — it gets noticed, trusted, and chosen."
        altText="Chiropractor Agency"
      />
      <TrustedBy padding={"py-5 px-[35px] px-0 md:py-12 xl:py-15"} />
    </>
  );
}

export default ChiropractorAgency;
