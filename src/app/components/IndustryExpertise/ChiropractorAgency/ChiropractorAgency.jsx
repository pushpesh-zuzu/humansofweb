import React from "react";
import HeroSectionServices from "../../common/Services/HeroSectionServices/HeroSectionServices";
import TrustedBy from "../../common/TrustedBy/TrustedBy";
import PillarsSection from "../../common/Services/PillarSection/PillarSection";
import ServicesTwoGridDescriptionAndImage from "../../common/Services/ServicesTwoGridDescriptionAndImage/ServicesTwoGridDescriptionAndImage";
import {
  brandTrustParaChiropractor,
  marketAnalyzerParaChiropractor,
  ChiropractorServices,
  StrategyContentChiropractor,
} from "./ChiropractorAgencyData";
import ServicesGridSection from "../../common/Services/ServicesGridSection/ServicesGridSection";
import ReachWithUs from "../../common/Services/ReachWithUs/ReachWithUs";

function ChiropractorAgency() {
  return (
    <>
      <HeroSectionServices
        heading1="Pain Relief Growth"
        heading2="For Local Clinics"
        bgImag="/IndustryExpertise/chiropractor/chiropractorHero1.svg"
        description1="Every day people search online for relief from pain, stiffness, and mobility issues, but success depends on being visible and trusted when they need help most."
        description2="At Humans of Web, we help chiropractic clinics connect with patients through SEO, local visibility, and smart campaigns to drive bookings and steady growth."
        altText="Chiropractor Marketing Agency"
        breakLine
      />

      <TrustedBy padding={"py-5 px-[35px] px-0 md:py-12 xl:py-15"} />

      <ServicesTwoGridDescriptionAndImage
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
        headdingBlack="Patient First"
        headingBlue="Chiropractic Marketing"
        image="/IndustryExpertise/chiropractor/chiropractorMarketing.svg"
        paragraphs={marketAnalyzerParaChiropractor}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
        limit={5}
      />

      <PillarsSection
        headdingBlack={StrategyContentChiropractor.headdingBlack}
        headingBlue={StrategyContentChiropractor.headingBlue}
        features={StrategyContentChiropractor.features}
        footerText={StrategyContentChiropractor.footerText}
        ctaLabel={StrategyContentChiropractor.ctaLabel}
        ctaHref={StrategyContentChiropractor.ctaHref}
      />

      <ServicesGridSection
        services={ChiropractorServices}
        headdingBlack={"Local Patient"}
        headingBlue={"Growth Services"}
      />

      <ServicesTwoGridDescriptionAndImage
        background="#fafafa"
        reverse
        isHeadingInGridSection
        ctaText="Get Free Proposal"
        headdingBlack="Why Clinics Grow With Us"
        headingBlue="Through Consistent Bookings"
        image="/IndustryExpertise/chiropractor/chiropractorTrust.svg"
        limit={5}
        headingColor={false}
        paragraphs={brandTrustParaChiropractor}
        headingBlueColor="text-primary"
        paragraphTextColor
      />

      <ReachWithUs />
    </>
  );
}

export default ChiropractorAgency;
