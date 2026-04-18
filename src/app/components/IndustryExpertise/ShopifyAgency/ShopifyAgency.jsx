import React from "react";
import HeroSectionServices from "../../common/Services/HeroSectionServices/HeroSectionServices";
import TrustedBy from "../../common/TrustedBy/TrustedBy";
import PillarsSection from "../../common/Services/PillarSection/PillarSection";
import ServicesTwoGridDescriptionAndImage from "../../common/Services/ServicesTwoGridDescriptionAndImage/ServicesTwoGridDescriptionAndImage";
import {
  brandTrustParaShopify,
  marketAnalyzerParaShopify,
  ShopifyServices,
  StrategyContentShopify,
} from "./ShopifyAgencyData";
import ServicesGridSection from "../../common/Services/ServicesGridSection/ServicesGridSection";
import ReachWithUs from "../../common/Services/ReachWithUs/ReachWithUs";

function ShopifyAgency() {
  return (
    <>
      <HeroSectionServices
        heading1="Store Conversion Growth"
        heading2="For Shopify Brands"
        bgImag="/IndustryExpertise/shopify/shopifyHero.webp"
        description1="Every day shoppers browse Shopify stores, compare products, and evaluate options, but growth depends on how smoothly they discover, trust, and complete their purchase."
        description2="At Humans of Web, we help Shopify brands improve visibility, optimize store experience, and drive conversions through SEO, ads, and data-driven strategies."
        altText="Shopify Marketing Agency"
        breakLine
      />

      <TrustedBy padding={"py-5 px-[35px] px-0 md:py-12 xl:py-15"} />

      <ServicesTwoGridDescriptionAndImage
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
        headdingBlack="Conversion First"
        headingBlue="Shopify Marketing"
        image="/IndustryExpertise/shopify/shopifyMarketing.webp"
        paragraphs={marketAnalyzerParaShopify}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
        limit={5}
      />

      <PillarsSection
        headdingBlack={StrategyContentShopify.headdingBlack}
        headingBlue={StrategyContentShopify.headingBlue}
        features={StrategyContentShopify.features}
        footerText={StrategyContentShopify.footerText}
        ctaLabel={StrategyContentShopify.ctaLabel}
        ctaHref={StrategyContentShopify.ctaHref}
      />

      <ServicesGridSection
        services={ShopifyServices}
        headdingBlack={"Shopify Store"}
        headingBlue={"Growth Services"}
      />

      <ServicesTwoGridDescriptionAndImage
        background="#fafafa"
        reverse
        isHeadingInGridSection
        ctaText="Get Free Proposal"
        headdingBlack="Why Brands Scale With Us"
        headingBlue="On Shopify Platform"
        image="/IndustryExpertise/shopify/shopifyTrust.webp"
        limit={5}
        headingColor={false}
        paragraphs={brandTrustParaShopify}
        headingBlueColor="text-primary"
        paragraphTextColor
      />

      <ReachWithUs />
    </>
  );
}

export default ShopifyAgency;