import React from "react";
import HeroSectionServices from "../../common/Services/HeroSectionServices/HeroSectionServices";
import TrustedBy from "../../common/TrustedBy/TrustedBy";
import PillarsSection from "../../common/Services/PillarSection/PillarSection";
import ServicesTwoGridDescriptionAndImage from "../../common/Services/ServicesTwoGridDescriptionAndImage/ServicesTwoGridDescriptionAndImage";
import {
  brandTrustParaCMS,
  marketAnalyzerParaCMS,
  CMSServices,
  StrategyContentCMS,
} from "./CMSAgencyData";
// import ServicesGridSection from "../../common/Services/ServicesGridSection/ServicesGridSection";
import ReachWithUs from "../../common/Services/ReachWithUs/ReachWithUs";
import ServicesLinks from "../../common/ServicesLinks/ServicesLinks";

function CMSAgency() {
  return (
    <>
      <HeroSectionServices
        heading1="Flexible Website Growth"
        heading2="With Smart CMS Systems"
        bgImag="/PlatformExpertise/CMSAgency/CMSHero.svg"
        description1="Every day users explore websites for information, services, and products, but growth depends on how easily content is managed, updated, and presented."
        description2="At Humans of Web, we help businesses build and optimize CMS platforms that improve visibility, simplify management, and support long-term digital growth."
        altText="CMS Marketing Agency"
        breakLine
      />

      <TrustedBy padding={""} />

      <ServicesTwoGridDescriptionAndImage
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
        headdingBlack="Content First"
        headingBlue="CMS Marketing"
        image="/PlatformExpertise/CMSAgency/cmsMarketing.svg"
        paragraphs={marketAnalyzerParaCMS}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
        limit={5}
        marginBottom="lg:mb-15"
      />

      <PillarsSection
        headdingBlack={StrategyContentCMS.headdingBlack}
        headingBlue={StrategyContentCMS.headingBlue}
        features={StrategyContentCMS.features}
        footerText={StrategyContentCMS.footerText}
        ctaLabel={StrategyContentCMS.ctaLabel}
        ctaHref={StrategyContentCMS.ctaHref}
      />

      {/* <ServicesGridSection
        services={CMSServices}
        headdingBlack={"CMS Platform"}
        headingBlue={"Growth Services"}
      /> */}
      <ServicesLinks
        services={CMSServices}
        headdingBlack={"CMS Platform"}
        headingBlue={"Growth Services"}
        padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20"
      />

      <ServicesTwoGridDescriptionAndImage
        background="#fafafa"
        reverse
        isHeadingInGridSection
        ctaText="Get Free Proposal"
        headdingBlack="Why Businesses "
        headingBlue="Prefer Us"
        image="/PlatformExpertise/CMSAgency/cmsTrust.svg"
        limit={5}
        headingColor={false}
        paragraphs={brandTrustParaCMS}
        headingBlueColor="text-primary"
        paragraphTextColor
        marginBottom="lg:mb-20"
      />

      <ReachWithUs />
    </>
  );
}

export default CMSAgency;