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
import ServicesGridSection from "../../common/Services/ServicesGridSection/ServicesGridSection";
import ReachWithUs from "../../common/Services/ReachWithUs/ReachWithUs";

function CRMAgency() {
  return (
    <>
      <HeroSectionServices
        heading1="Smarter System Growth"
        heading2="For Modern Businesses"
        bgImag="/IndustryExpertise/crm/crmHero.webp"
        description1="Every day businesses struggle with scattered data, missed follow-ups, and inefficient workflows, but growth depends on having systems that are clear, connected, and easy to manage."
        description2="At Humans of Web, we help businesses streamline operations through CRM customization, automation, and smart integrations to improve efficiency and drive consistent growth."
        altText="CRM Customisation Agency"
        breakLine
      />

      <TrustedBy padding={"py-5 px-[35px] px-0 md:py-12 xl:py-15"} />

      <ServicesTwoGridDescriptionAndImage
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
        headdingBlack="System First"
        headingBlue="CRM Optimization"
        image="/IndustryExpertise/crm/crmMarketing.webp"
        paragraphs={marketAnalyzerParaCRM}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
        limit={5}
      />

      <PillarsSection
        headdingBlack={StrategyContentCRM.headdingBlack}
        headingBlue={StrategyContentCRM.headingBlue}
        features={StrategyContentCRM.features}
        footerText={StrategyContentCRM.footerText}
        ctaLabel={StrategyContentCRM.ctaLabel}
        ctaHref={StrategyContentCRM.ctaHref}
      />

      <ServicesGridSection
        services={CRMServices}
        headdingBlack={"Business Process"}
        headingBlue={"Growth Services"}
      />

      <ServicesTwoGridDescriptionAndImage
        background="#fafafa"
        reverse
        isHeadingInGridSection
        ctaText="Get Free Proposal"
        headdingBlack="Why Businesses Choose Us"
        headingBlue="For Better System Efficiency"
        image="/IndustryExpertise/crm/crmTrust.webp"
        limit={5}
        headingColor={false}
        paragraphs={brandTrustParaCRM}
        headingBlueColor="text-primary"
        paragraphTextColor
      />

      <ReachWithUs />
    </>
  );
}

export default CRMAgency;