import React from "react";
import TrustedBy from "../../common/TrustedBy/TrustedBy";
import ServicesTwoGridDescriptionAndImage from "../../common/Services/ServicesTwoGridDescriptionAndImage/ServicesTwoGridDescriptionAndImage";
import ServicesGridSection from "../../common/Services/ServicesGridSection/ServicesGridSection";
import ProcessCarouselSection from "./ProcessCarouselSection/ProcessCarouselSection";
import {
  brandTrustPara,
  businessGrowthPara,
  marketAnalyzerPara,
  marketingServicesPara,
  processSectionContent,
  processSteps,
  scaleYourBrandPara,
  scaleYourBrandParaBottom,
  services,
  StrategyContentEcommerce,
} from "./eCommerceData";
import HeroSectionServices from "../../common/Services/HeroSectionServices/HeroSectionServices";
import PillarsSection from "../../common/Services/PillarSection/PillarSection";
import ReachWithUs from "../../common/Services/ReachWithUs/ReachWithUs";
import ServicesLinks from "../../common/ServicesLinks/ServicesLinks";

function Ecommerce() {
  return (
    <>
      <HeroSectionServices
        bgImag={"/IndustryExpertise/eCommerce/eCommerceHeroImage.webp"}
        headingSectionWidth="max-w-[586px]"
      />
      <TrustedBy padding={""} />
      <ServicesTwoGridDescriptionAndImage
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
        headdingBlack="Marketing "
        headingBlue="That Feels Human"
        image="/IndustryExpertise/eCommerce/marketAnalyzerImage.webp"
        paragraphs={marketAnalyzerPara}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
        limit={5}
        breakLine
        marginBottom="lg:mb-19"
        imageClass="h-full max-h-[341px] md:w-[100%] m-auto"
      />
      <PillarsSection
        headdingBlack={StrategyContentEcommerce.headdingBlack}
        headingBlue={StrategyContentEcommerce.headingBlue}
        features={StrategyContentEcommerce.features}
        footerText={StrategyContentEcommerce.footerText}
        ctaLabel={StrategyContentEcommerce.ctaLabel}
        ctaHref={StrategyContentEcommerce.ctaHref}
      />
      {/* <ServicesGridSection
        services={services}
        headdingBlack={"eCommerce Solutions "}
        headingBlue={"We Offer"}
      // description={marketingServicesPara}
      /> */}
      <ServicesLinks
        services={services}
        headdingBlack={"eCommerce Solutions "}
        headingBlue={"We Offer"}
        padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20"
      />
      {/* //done */}
      {/* <ServicesTwoGridDescriptionAndImage
        headdingBlack="eCommerce Growth That "
        headingBlue="Builds Real, Lasting Brands"
        image="/IndustryExpertise/eCommerce/businessGrowth.webp"
        reverse
        limit={6}
        isBackgroundPrimary
        isHeadingInGridSection
        paragraphs={businessGrowthPara}
        paragraphTextColor
      /> */}

      {/* <ServicesTwoGridDescriptionAndImage
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
        headdingBlack="Scale Your Brand With"
        headingBlue="Proven eCommerce Growth"
        image="/IndustryExpertise/eCommerce/scaleYourBrandh.webp"
        paragraphs={scaleYourBrandPara}
        bottomParagraph={scaleYourBrandParaBottom}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
      /> */}
      {/* <ProcessCarouselSection
        headdingBlack={processSectionContent.headdingBlack}
        headingBlue={processSectionContent.headingBlue}
        description={processSectionContent.description}
        steps={processSteps}
      /> */}
      <ServicesTwoGridDescriptionAndImage
        background="#fafafa"
        reverse
        isHeadingInGridSection
        ctaText="Get Free Proposal"
        headdingBlack="Why Brands Grow With Us"
        headingBlue="Beyond Just Marketing"
        image="/IndustryExpertise/eCommerce/brandTrustImage.webp"
        limit={5}
        headingColor={false}
        paragraphs={brandTrustPara}
        headingBlueColor="text-primary"
        paragraphTextColor
        marginBottom="lg:mb-24"
         imageClass="h-full max-h-[341px] md:w-[100%] m-auto"
      />
      <ReachWithUs />
    </>
  );
}

export default Ecommerce;
