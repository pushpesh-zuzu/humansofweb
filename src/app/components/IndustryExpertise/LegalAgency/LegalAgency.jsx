import React from "react";
import HeroSectionServices from "../../common/Services/HeroSectionServices/HeroSectionServices";
import TrustedBy from "../../common/TrustedBy/TrustedBy";
// import PillarsSection from "../../common/Services/PillarSection/PillarSection";
// import ServicesTwoGridDescriptionAndImage from "../../common/Services/ServicesTwoGridDescriptionAndImage/ServicesTwoGridDescriptionAndImage";
// import ServicesGridSection from "../../common/Services/ServicesGridSection/ServicesGridSection";
// import ReachWithUs from "../../common/Services/ReachWithUs/ReachWithUs";
import { brandTrustParaLegal, LegalServices, marketAnalyzerParaLegal, StrategyContentLegal } from "./LegaAgencyData";
import ServicesTwoGridDescriptionAndImage from "../../common/Services/ServicesTwoGridDescriptionAndImage/ServicesTwoGridDescriptionAndImage";
import PillarsSection from "../../common/Services/PillarSection/PillarSection";
// import ServicesGridSection from "../../common/Services/ServicesGridSection/ServicesGridSection";
import ReachWithUs from "../../common/Services/ReachWithUs/ReachWithUs";
import ServicesLinks from "../../common/ServicesLinks/ServicesLinks";

function LegalAgency() {
  return (
    <>
      <HeroSectionServices
        heading1="Client Focused Growth"
        heading2="For Law Firms"
        bgImag="/IndustryExpertise/legal/LegalBanner.webp"
        description1="Every day people search online for legal help, from urgent cases to long-term matters, but success depends on being visible and trusted at the right moment."
        description2="At Humans of Web, we help law firms connect with clients through SEO, local visibility, and smart campaigns to drive inquiries and consistent case growth."
        altText="Law Firm Marketing Agency"
        breakLine
        objectType="object-fill md:object-cover"
        mobileHeight="h-[200px]"
      />

      <TrustedBy padding={""} />

      <ServicesTwoGridDescriptionAndImage
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
        headdingBlack="Client First"
        headingBlue="Legal Marketing"
        image="/IndustryExpertise/legal/LegalSeccond.webp"
        paragraphs={marketAnalyzerParaLegal}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
        limit={5}
        marginBottom="lg:mb-18"
         imageClass="h-full max-h-[341px] md:w-[100%] m-auto"
      />

      <PillarsSection
        headdingBlack={StrategyContentLegal.headdingBlack}
        headingBlue={StrategyContentLegal.headingBlue}
        features={StrategyContentLegal.features}
        footerText={StrategyContentLegal.footerText}
        ctaLabel={StrategyContentLegal.ctaLabel}
        ctaHref={StrategyContentLegal.ctaHref}
      />

      {/* <ServicesGridSection
        services={LegalServices}
        headdingBlack={"Legal Growth"}
        headingBlue={"Marketing Services"}
      /> */}

      <ServicesLinks
        services={LegalServices}
        headdingBlack={"Legal Growth"}
        headingBlue={"Marketing Services"}
        padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20"
      />

      <ServicesTwoGridDescriptionAndImage
        background="#fafafa"
        reverse
        isHeadingInGridSection
        ctaText="Get Free Proposal"
        headdingBlack="Why Firms Rely On Us"
        headingBlue="For Consistent Case Growth"
        image="/IndustryExpertise/legal/LegalThird.webp"
        limit={5}
        headingColor={false}
        paragraphs={brandTrustParaLegal}
        headingBlueColor="text-primary"
        paragraphTextColor
        marginBottom="lg:mb-19"
         imageClass="h-full max-h-[341px] md:w-[100%] m-auto"
      />

      <ReachWithUs />
    </>
  );
}

export default LegalAgency;