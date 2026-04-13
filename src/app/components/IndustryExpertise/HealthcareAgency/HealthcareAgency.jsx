import React from "react";
import HeroSectionServices from "../../common/Services/HeroSectionServices/HeroSectionServices";
import TrustedBy from "../../common/TrustedBy/TrustedBy";
import PillarsSection from "../../common/Services/PillarSection/PillarSection";
import ServicesTwoGridDescriptionAndImage from "../../common/Services/ServicesTwoGridDescriptionAndImage/ServicesTwoGridDescriptionAndImage";
import {
  brandTrustParaHealthcare,
  marketAnalyzerParaHealthcare,
  HealthcareServices,
  StrategyContentHealthcare,
} from "./HealthcareAgencyData";
import ServicesGridSection from "../../common/Services/ServicesGridSection/ServicesGridSection";
import ReachWithUs from "../../common/Services/ReachWithUs/ReachWithUs";

function HealthcareAgency() {
  return (
    <>
      <HeroSectionServices
        heading1="Care Driven Growth"
        heading2="For Healthcare Providers"
        bgImag="/IndustryExpertise/healthcare/healthcareHero.webp"
        description1="Every day people search online for reliable healthcare, from routine care to urgent needs, but success depends on being visible and trusted at the right moment."
        description2="At Humans of Web, we help healthcare providers connect with patients through SEO, local visibility, and smart campaigns to drive appointments and steady growth."
        altText="Healthcare Marketing Agency"
        breakLine
      />

      <TrustedBy padding={"py-5 px-[35px] px-0 md:py-12 xl:py-15"} />

      <ServicesTwoGridDescriptionAndImage
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
        headdingBlack="Patient Focused"
        headingBlue="Healthcare Marketing"
        image="/IndustryExpertise/healthcare/healthcareMarketing.webp"
        paragraphs={marketAnalyzerParaHealthcare}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
        limit={5}
      />

      <PillarsSection
        headdingBlack={StrategyContentHealthcare.headdingBlack}
        headingBlue={StrategyContentHealthcare.headingBlue}
        features={StrategyContentHealthcare.features}
        footerText={StrategyContentHealthcare.footerText}
        ctaLabel={StrategyContentHealthcare.ctaLabel}
        ctaHref={StrategyContentHealthcare.ctaHref}
      />

      <ServicesGridSection
        services={HealthcareServices}
        headdingBlack={"Better Patient"}
        headingBlue={"Growth Services"}
      />

      <ServicesTwoGridDescriptionAndImage
        background="#fafafa"
        reverse
        isHeadingInGridSection
        ctaText="Get Free Proposal"
        headdingBlack="Why Providers Work With Us"
        headingBlue="For Sustainable Patient Growth"
        image="/IndustryExpertise/healthcare/healthcareTrust.webp"
        limit={5}
        headingColor={false}
        paragraphs={brandTrustParaHealthcare}
        headingBlueColor="text-primary"
        paragraphTextColor
      />

      <ReachWithUs />
    </>
  );
}

export default HealthcareAgency;