import React from "react";
import HeroSectionServices from "../../common/Services/HeroSectionServices/HeroSectionServices";
import TrustedBy from "../../common/TrustedBy/TrustedBy";
import PillarsSection from "../../common/Services/PillarSection/PillarSection";
import ServicesTwoGridDescriptionAndImage from "../../common/Services/ServicesTwoGridDescriptionAndImage/ServicesTwoGridDescriptionAndImage";
import {
  brandTrustParaCRM,
  marketAnalyzerParaCRM,
  CRMServices,
  StrategyContentCRM,
} from "./CRMAgencyData";
// import ServicesGridSection from "../../common/Services/ServicesGridSection/ServicesGridSection";
import ReachWithUs from "../../common/Services/ReachWithUs/ReachWithUs";
import ServicesLinks from "../../common/ServicesLinks/ServicesLinks";

function CRMAgency() {
  return (
    <>
      <HeroSectionServices
        heading1="Smarter System Growth"
        heading2="For Modern Businesses"
        bgImag="/PlatformExpertise/CRMAgency/CRMHero.svg"
        description1="Every day businesses struggle with scattered data, missed follow-ups, and inefficient workflows, but growth depends on having systems that are clear, connected, and easy to manage."
        description2="At Humans of Web, we help businesses streamline operations through CRM customization, automation, and smart integrations to improve efficiency and drive consistent growth."
        altText="CRM Customisation Agency"
        breakLine
      />

      <TrustedBy padding={""} />

      <ServicesTwoGridDescriptionAndImage
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
        headdingBlack="System First"
        headingBlue="CRM Optimization"
        image="/PlatformExpertise/CRMAgency/crmMarketing.svg"
        paragraphs={marketAnalyzerParaCRM}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
        limit={5}
        marginBottom="lg:mb-20"
         imageClass="h-full max-h-[341px] md:w-[100%] m-auto"
      />

      <PillarsSection
        headdingBlack={StrategyContentCRM.headdingBlack}
        headingBlue={StrategyContentCRM.headingBlue}
        features={StrategyContentCRM.features}
        footerText={StrategyContentCRM.footerText}
        ctaLabel={StrategyContentCRM.ctaLabel}
        ctaHref={StrategyContentCRM.ctaHref}
      />

      {/* <ServicesGridSection
        services={CRMServices}
        headdingBlack={"Business Process"}
        headingBlue={"Growth Services"}
      /> */}

      <ServicesLinks
        services={CRMServices}
        headdingBlack={"Business Process"}
        headingBlue={"Growth Services"}
        padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20"
      />

      <ServicesTwoGridDescriptionAndImage
        background="#fafafa"
        reverse
        isHeadingInGridSection
        ctaText="Get Free Proposal"
        headdingBlack="Why Businesses Choose Us"
        headingBlue="For Better System Efficiency"
        image="/PlatformExpertise/CRMAgency/crmTrust.svg"
        limit={5}
        headingColor={false}
        paragraphs={brandTrustParaCRM}
        headingBlueColor="text-primary"
        paragraphTextColor
        marginBottom="lg:mb-22"
         imageClass="h-full max-h-[341px] md:w-[100%] m-auto"
      />

      <ReachWithUs />
    </>
  );
}

export default CRMAgency;