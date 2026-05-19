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
import ServicesLinks from "../../common/ServicesLinks/ServicesLinks";

function HealthcareAgency() {
  return (
    <>
      <HeroSectionServices
        heading1="Care Driven Growth"
        heading2="For Healthcare Providers"
        bgImag="/IndustryExpertise/healthCare/healthCareHero.webp"
        description1="Every day people search online for reliable healthcare, from routine care to urgent needs, but success depends on being visible and trusted at the right moment."
        description2="At Humans of Web, we help healthcare providers connect with patients through SEO, local visibility, and smart campaigns to drive appointments and steady growth."
        altText="Healthcare Marketing Agency"
        breakLine
        objectType="object-fill lg:object-cover"
        mobileHeight="h-[200px]"
      />

      <TrustedBy padding={""} />

      <ServicesTwoGridDescriptionAndImage
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
        headdingBlack="Patient Focused"
        headingBlue="Healthcare Marketing"
        image="/IndustryExpertise/healthCare/healthcareMarketing.webp"
        paragraphs={marketAnalyzerParaHealthcare}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
        limit={5}
        imageClass="h-full max-h-[341px] md:w-[100%] m-auto"
        
      />

      <PillarsSection
        headdingBlack={StrategyContentHealthcare.headdingBlack}
        headingBlue={StrategyContentHealthcare.headingBlue}
        features={StrategyContentHealthcare.features}
        footerText={StrategyContentHealthcare.footerText}
        ctaLabel={StrategyContentHealthcare.ctaLabel}
        ctaHref={StrategyContentHealthcare.ctaHref}
      />

      {/* <ServicesGridSection
        services={HealthcareServices}
        headdingBlack={"Better Patient"}
        headingBlue={"Growth Services"}
      /> */}
      <ServicesLinks
        services={HealthcareServices}
        headdingBlack={"Industries "}
        headingBlue={"We Serve"}
        padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20"
      />

      <ServicesTwoGridDescriptionAndImage
        background="#fafafa"
        reverse
        isHeadingInGridSection
        ctaText="Get Free Proposal"
        headdingBlack="Why Providers Work With Us"
        headingBlue="For Sustainable Growth"
        image="/IndustryExpertise/healthCare/healthcareTrust.webp"
        limit={5}
        headingColor={false}
        paragraphs={brandTrustParaHealthcare}
        headingBlueColor="text-primary"
        paragraphTextColor
        marginBottom="lg:mb-24"
        imageClass="h-full max-h-[341px] md:w-[100%] m-auto"
      />

      <ReachWithUs />
    </>
  );
}

export default HealthcareAgency;