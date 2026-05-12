import React from "react";
import HeroSectionServices from "../../common/Services/HeroSectionServices/HeroSectionServices";
import TrustedBy from "../../common/TrustedBy/TrustedBy";
import PillarsSection from "../../common/Services/PillarSection/PillarSection";
import ServicesTwoGridDescriptionAndImage from "../../common/Services/ServicesTwoGridDescriptionAndImage/ServicesTwoGridDescriptionAndImage";
import {
  marketAnalyzerParaPlasticSurgeon,
  StrategyContentPlasticSurgeon,
  PlasticSurgeonServices,
  brandTrustPara,
} from "./plasticSurgeonAgencyData";
// import ServicesGridSection from "../../common/Services/ServicesGridSection/ServicesGridSection";
import ReachWithUs from "../../common/Services/ReachWithUs/ReachWithUs";
import ServicesLinks from "../../common/ServicesLinks/ServicesLinks";

function PlasticSurgeonAgency() {
  return (
    <>
      <HeroSectionServices
        heading1="Build Patient"
        heading2="Trust First"
        description1="We don’t just promote your practice — we understand aesthetic patients, their expectations, and what truly helps them feel confident choosing the right plastic surgeon."
        description2="From first search to consultation, we create journeys that feel personal, build trust, and position your practice as the right choice — not just another clinic."
        bgImag="/IndustryExpertise/plasticSurgery/PlasticSurgeryBanner.webp"
        altText="Plastic surgery or surgeons Agency"
        breakLine
      />
      <TrustedBy padding={""} />
      <ServicesTwoGridDescriptionAndImage
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
        headdingBlack="Marketing "
        headingBlue="That Feels Personal"
        image="/IndustryExpertise/plasticSurgery/PlasticSurgerySecond.webp"
        paragraphs={marketAnalyzerParaPlasticSurgeon}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
        limit={5}
        marginBottom="lg:mb-19"
      />
      <PillarsSection
        headdingBlack={StrategyContentPlasticSurgeon.headdingBlack}
        headingBlue={StrategyContentPlasticSurgeon.headingBlue}
        features={StrategyContentPlasticSurgeon.features}
        footerText={StrategyContentPlasticSurgeon.footerText}
        ctaLabel={StrategyContentPlasticSurgeon.ctaLabel}
        ctaHref={StrategyContentPlasticSurgeon.ctaHref}
      />
      {/* <ServicesGridSection
        services={PlasticSurgeonServices}
        headdingBlack={"Patient First  "}
        headingBlue={"We Offer Services"}
      /> */}
      <ServicesLinks
        services={PlasticSurgeonServices}
        headdingBlack={"Patient First  "}
        headingBlue={"We Offer Services"}
        padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20"
      />
      <ServicesTwoGridDescriptionAndImage
        background="#fafafa"
        reverse
        isHeadingInGridSection
        ctaText="Get Free Proposal"
        headdingBlack="Why Surgeons Choose Us to Grow"
        headingBlue="Their Aesthetic Practice"
        image="/IndustryExpertise/plasticSurgery/PlasticSurgeryThird.webp"
        limit={5}
        headingColor={false}
        paragraphs={brandTrustPara}
        headingBlueColor="text-primary"
        paragraphTextColor
        marginBottom="lg:mb-20"
      />
      <ReachWithUs />
    </>
  );
}

export default PlasticSurgeonAgency;
