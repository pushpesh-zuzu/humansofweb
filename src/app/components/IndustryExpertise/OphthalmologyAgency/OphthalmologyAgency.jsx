import React from "react";
import HeroSectionServices from "../../common/Services/HeroSectionServices/HeroSectionServices";
import TrustedBy from "../../common/TrustedBy/TrustedBy";
import PillarsSection from "../../common/Services/PillarSection/PillarSection";
import ServicesTwoGridDescriptionAndImage from "../../common/Services/ServicesTwoGridDescriptionAndImage/ServicesTwoGridDescriptionAndImage";
import {
  brandTrustParaOphthalmology,
  marketAnalyzerParaOphthalmology,
  OphthalmologyServices,
  // marketAnalyzerParaPlasticSurgeon,
  StrategyContentOphthalmology,
  // PlasticSurgeonServices,
  // brandTrustPara,
} from "./OphthalmologyAgencyData";
import ServicesGridSection from "../../common/Services/ServicesGridSection/ServicesGridSection";
import ReachWithUs from "../../common/Services/ReachWithUs/ReachWithUs";

function OphthalmologyAgency() {
  return (
    <>
      <HeroSectionServices
        heading1="Clear Vision Growth "
        heading2="For Modern Clinics"
        bgImag="/IndustryExpertise/ophthalmology/OpthoBanner.webp"
        description1="Every day people search online for trusted eye care, from vision checks to treatments, but success depends on being seen and chosen at the right moment."
        description2="At Humans of Web, we help ophthalmology clinics connect with patients through SEO, local visibility, and smart campaigns to drive appointments and consistent growth."
        altText="Ophthalmology Agency"
        breakLine
      />

      <TrustedBy padding={"py-5 px-[35px] px-0 md:py-12 xl:py-15"} />
      <ServicesTwoGridDescriptionAndImage
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
        headdingBlack="Patient First"
        headingBlue="Eye Care Marketing"
        image="/IndustryExpertise/ophthalmology/OpthoSecond.webp"
        paragraphs={marketAnalyzerParaOphthalmology}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
        limit={5}
      />
      <PillarsSection
        headdingBlack={StrategyContentOphthalmology.headdingBlack}
        headingBlue={StrategyContentOphthalmology.headingBlue}
        features={StrategyContentOphthalmology.features}
        footerText={StrategyContentOphthalmology.footerText}
        ctaLabel={StrategyContentOphthalmology.ctaLabel}
        ctaHref={StrategyContentOphthalmology.ctaHref}
      />
      <ServicesGridSection
        services={OphthalmologyServices}
        headdingBlack={"Eye Care"}
        headingBlue={"Growth Services"}
      />
      <ServicesTwoGridDescriptionAndImage
        background="#fafafa"
        reverse
        isHeadingInGridSection
        ctaText="Get Free Proposal"
        headdingBlack="Why Clinics Trust Us to Grow"
        headingBlue="Their Eye Care Practice"
        image="/IndustryExpertise/ophthalmology/OpthoThird.webp"
        limit={5}
        headingColor={false}
        paragraphs={brandTrustParaOphthalmology}
        headingBlueColor="text-primary"
        paragraphTextColor
      />
      <ReachWithUs />
    </>
  );
}

export default OphthalmologyAgency;
