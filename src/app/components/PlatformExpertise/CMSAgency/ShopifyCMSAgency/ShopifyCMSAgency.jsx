import React from "react";
import HeroSectionServices from "../../../common/Services/HeroSectionServices/HeroSectionServices";
import TrustedBy from "../../../common/TrustedBy/TrustedBy";
import {
  brandTrustParaShopify,
  marketAnalyzerParaShopify,
  SHOPIFY_DEV_SERVICES,
  SHOPIFY_FAQ_DATA,
  SHOPIFY_PPC_TIMELINE,
  SHOPIFY_SEO_STRATEGY_ITEMS,
  ShopifyServices,
  StrategyContentShopify,
} from "./ShopifyCMSAgencyData";
import ServicesGridSection from "../../../common/Services/ServicesGridSection/ServicesGridSection";
import ReachWithUs from "../../../common/Services/ReachWithUs/ReachWithUs";
import ScrollTimeline from "@/app/components/common/ScrollTimeLine/ScrollTimeLine";
import Interactivecontent from "@/app/components/common/SubServices/Interactivecontent/Interactivecontent";
import FaqComponent from "@/app/components/common/SubServices/FaqComponent/FaqComponent";
import ServicesLinks from "@/app/components/common/ServicesLinks/ServicesLinks";
import ServiceTwoGridForPlatFormSubPage from "@/app/components/common/Services/ServicesTwoGridDescriptionAndImage/ServiceTwoGridForPlatFormSubPage";

function ShopifyCMSAgency() {
  return (
    <>
      <HeroSectionServices
        heading1="Store Conversion Growth"
        heading2="For Shopify Brands"
        bgImag="/PlatformExpertise/ShopifyCMS/shopifyCMSHero.webp"
        description1="Every day shoppers browse Shopify stores, compare products, and evaluate options, but growth depends on how smoothly they discover, trust, and complete their purchase."
        description2="At Humans of Web, we help Shopify brands improve visibility, optimize store experience, and drive conversions through SEO, ads, and data-driven strategies."
        altText="Shopify Marketing Agency"
        breakLine
        objectType="object-fill lg:object-cover"
        mobileHeight="h-[200px]"
      />

      <TrustedBy padding={""} />

      <ServiceTwoGridForPlatFormSubPage
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
        headdingBlack="Conversion First"
        headingBlue="Shopify Marketing"
        image="/PlatformExpertise/ShopifyCMS/shopify1.webp"
        paragraphs={marketAnalyzerParaShopify}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
        limit={5}
        imageClass="h-full max-h-[300px] md:w-[71%] m-auto"
        marginBottom="lg:mb-20"
      />
      <ScrollTimeline
        items={SHOPIFY_PPC_TIMELINE}
        headdingBlack="We Use Shopify PPC"
        headingBlue="For Your Growth"
        buttonText="Schedule A Free Consultation"
        // buttonHref="/contact"
        background="#fafafa"
      />
      <Interactivecontent
        headingStart="Sopify SEO That Boosts"
        headingEnd="E-commerce Sales"
        items={SHOPIFY_SEO_STRATEGY_ITEMS}
        ctaText="Book a free strategy call"
        ctaHref=""
        padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20"
        isJSXIcon
      />
      {/* <ServicesGridSection
        services={SHOPIFY_DEV_SERVICES}
        headdingBlack={"We Offer "}
        headingBlue={"Shopify Development"}
        // description={marketingServicesPara}
        background="#fafafa"
      /> */}
      <ServicesLinks
        services={SHOPIFY_DEV_SERVICES}
        headdingBlack={"We Offer "}
        headingBlue={"Shopify Development"}
        padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20"
        background="#fafafa"
      />
      <ServiceTwoGridForPlatFormSubPage
        reverse
        isHeadingInGridSection
        ctaText="Get Free Proposal"
        headdingBlack="Why Brands Scale With Us"
        headingBlue="On Shopify Platform"
        image="/PlatformExpertise/ShopifyCMS/shopify2.webp"
        limit={5}
        headingColor={false}
        paragraphs={brandTrustParaShopify}
        headingBlueColor="text-primary"
        paragraphTextColor
        imageClass="h-full max-h-[300px] md:w-[71%] m-auto"
      />
      <FaqComponent
        title="Frequently asked questions"
        items={SHOPIFY_FAQ_DATA}
        defaultOpen={0}
        position="mx-auto"
      />
      <ReachWithUs />
    </>
  );
}

export default ShopifyCMSAgency;
