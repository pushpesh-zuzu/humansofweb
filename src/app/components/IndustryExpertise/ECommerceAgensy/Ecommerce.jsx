import React from "react";
import HeroSectionEcommerse from "./HeroSectionEcommerse/HeroSectionEcommerse";
import TrustedBy from "../../common/TrustedBy/TrustedBy";
import EcommerceStrategy from "./EcommerceStrategy/EcommerceStrategy";
import ServicesGridSection from "./ServicesGridSection/ServicesGridSection";
import ProcessCarouselSection from "./ProcessCarouselSection/ProcessCarouselSection";
import { brandTrustPara, businessGrowthPara, marketAnalyzerPara, marketingServicesPara, processSectionContent, processSteps, scaleYourBrandPara, scaleYourBrandParaBottom, services } from "./eCommerceData";

function Ecommerce() {
  return (
    <>
      <HeroSectionEcommerse
        bgImag={"/IndustryExpertise/eCommerce/eCommerceHero.webp"}
      />
      <TrustedBy padding={"py-5 px-[35px] px-0 md:py-12 xl:py-15"} />
      <EcommerceStrategy
        background="#fafafa"
        ctaText=""
        headdingBlack="Marketing That Feels Human"
        headingBlue="Data Driven eCommerce"
        image="/IndustryExpertise/eCommerce/marketAnalyzer.webp"
        paragraphs={marketAnalyzerPara}
      />
      <EcommerceStrategy
        headdingBlack="eCommerce Growth That "
        headingBlue="Builds Real, Lasting Brands"
        image="/IndustryExpertise/eCommerce/businessGrowth.webp"
        reverse
        limit={6}
        isBackgroundPrimary
        isHeadingInGridSection
        paragraphs={businessGrowthPara}
      />
      <ServicesGridSection
        services={services}
        headdingBlack={"eCommerce Marketing Services"}
        headingBlue={"That Drive Meaningful Growth"}
        description={marketingServicesPara}
      />
      <EcommerceStrategy
        ctaText=""
        background="#fafafa"
        reverse
        breakLine
        subheading="Strategies That Deliver Real Results"
        headdingBlack="Scale Your Brand With"
        headingBlue="Proven eCommerce Growth"
        image="/IndustryExpertise/eCommerce/scaleYourBrandh.webp"
        paragraphs={scaleYourBrandPara}
        bottomParagraph={scaleYourBrandParaBottom}
      />
      <ProcessCarouselSection
        headdingBlack={processSectionContent.headdingBlack}
        headingBlue={processSectionContent.headingBlue}
        description={processSectionContent.description}
        steps={processSteps}
      />
      <EcommerceStrategy
      background="#fafafa"
        reverse
        isHeadingInGridSection
        ctaText="Book A Call Now"
        headdingBlack="Why Brands Trust Us to Grow "
        headingBlue="Their eCommerce Business"
        image="/IndustryExpertise/eCommerce/brandTrust.webp"
        limit={5}
        headingColor={false}
        paragraphs={brandTrustPara}
      />
    </>
  );
}

export default Ecommerce;
