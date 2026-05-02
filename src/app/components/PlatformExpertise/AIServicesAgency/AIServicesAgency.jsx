import React from "react";
import HeroSectionServices from "../../common/Services/HeroSectionServices/HeroSectionServices";
import TrustedBy from "../../common/TrustedBy/TrustedBy";
import PillarsSection from "../../common/Services/PillarSection/PillarSection";
import ServicesTwoGridDescriptionAndImage from "../../common/Services/ServicesTwoGridDescriptionAndImage/ServicesTwoGridDescriptionAndImage";
import {
  brandTrustParaAI,
  marketAnalyzerParaAI,
  AIServices,
  StrategyContentAI,
} from "./AIServicesAgencyData";
import ServicesGridSection from "../../common/Services/ServicesGridSection/ServicesGridSection";
import ReachWithUs from "../../common/Services/ReachWithUs/ReachWithUs";

function AIServicesAgency() {
  return (
    <>
      <HeroSectionServices
        heading1="Intelligent Business"
        heading2="With AI Systems"
        bgImag="/PlatformExpertise/ArtificialIntelligencyAgency/aiHero.svg"
        description1="Businesses today handle large amounts of data, tasks, and customer interactions, but growth depends on how efficiently these processes are managed and automated."
        description2="At Humans of Web, we help companies use AI tools and systems to streamline workflows, improve decision-making, and create smarter, more efficient operations."
        altText="AI Services Agency"
        breakLine
      />

      <TrustedBy padding={"py-5 px-[35px] px-0 md:py-12 xl:py-15"} />

      <ServicesTwoGridDescriptionAndImage
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
        headdingBlack="Automation First"
        headingBlue="AI Growth Systems"
        image="/PlatformExpertise/ArtificialIntelligencyAgency/aiMarketing.svg"
        paragraphs={marketAnalyzerParaAI}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
        limit={5}
      />

      <PillarsSection
        headdingBlack={StrategyContentAI.headdingBlack}
        headingBlue={StrategyContentAI.headingBlue}
        features={StrategyContentAI.features}
        footerText={StrategyContentAI.footerText}
        ctaLabel={StrategyContentAI.ctaLabel}
        ctaHref={StrategyContentAI.ctaHref}
      />

      <ServicesGridSection
        services={AIServices}
        headdingBlack={"AI Powered"}
        headingBlue={"Growth Services"}
      />

      <ServicesTwoGridDescriptionAndImage
        background="#fafafa"
        reverse
        isHeadingInGridSection
        ctaText="Get Free Proposal"
        headdingBlack="Why Businesses"
        headingBlue="Choose AI"
        image="/PlatformExpertise/ArtificialIntelligencyAgency/aiTrust.svg"
        limit={5}
        headingColor={false}
        paragraphs={brandTrustParaAI}
        headingBlueColor="text-primary"
        paragraphTextColor
      />

      <ReachWithUs />
    </>
  );
}

export default AIServicesAgency;