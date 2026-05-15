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
// import ServicesGridSection from "../../common/Services/ServicesGridSection/ServicesGridSection";
import ReachWithUs from "../../common/Services/ReachWithUs/ReachWithUs";
import ServicesLinks from "../../common/ServicesLinks/ServicesLinks";

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

      <TrustedBy padding={""} />
      <ServicesTwoGridDescriptionAndImage
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
        headdingBlack="Patient First"
        headingBlue="Eye Care Marketing"
        image="/IndustryExpertise/ophthalmology/OpthoSecond.webp"
        paragraphs={marketAnalyzerParaOphthalmology}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
        limit={5}
        marginBottom="lg:mb-19"
         imageClass="h-full max-h-[341px] md:w-[100%] m-auto"
      />
      <PillarsSection
        headdingBlack={StrategyContentOphthalmology.headdingBlack}
        headingBlue={StrategyContentOphthalmology.headingBlue}
        features={StrategyContentOphthalmology.features}
        footerText={StrategyContentOphthalmology.footerText}
        ctaLabel={StrategyContentOphthalmology.ctaLabel}
        ctaHref={StrategyContentOphthalmology.ctaHref}
      />
      {/* <ServicesGridSection
        services={OphthalmologyServices}
        headdingBlack={"Eye Care"}
        headingBlue={"Growth Services"}
      /> */}
      <ServicesLinks
        services={OphthalmologyServices}
        headdingBlack={"Eye Care"}
        headingBlue={"Growth Services"}
        padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20"
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
        marginBottom="lg:mb-20"
        imageClass="h-full max-h-[341px] md:w-[100%] m-auto"
      />
      <ReachWithUs />
    </>
  );
}

export default OphthalmologyAgency;
