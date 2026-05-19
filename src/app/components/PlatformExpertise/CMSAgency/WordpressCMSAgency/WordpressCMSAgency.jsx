import React from "react";
import HeroSectionServices from "../../../common/Services/HeroSectionServices/HeroSectionServices";
import TrustedBy from "../../../common/TrustedBy/TrustedBy";
import ServicesGridSection from "../../../common/Services/ServicesGridSection/ServicesGridSection";
import ReachWithUs from "../../../common/Services/ReachWithUs/ReachWithUs";
import ScrollTimeline from "@/app/components/common/ScrollTimeLine/ScrollTimeLine";
import Interactivecontent from "@/app/components/common/SubServices/Interactivecontent/Interactivecontent";
import FaqComponent from "@/app/components/common/SubServices/FaqComponent/FaqComponent";

import {
  brandTrustParaWordpress,
  marketAnalyzerParaWordpress,
  WORDPRESS_DEV_SERVICES,
  WORDPRESS_FAQ_DATA,
  WORDPRESS_PPC_TIMELINE,
  WORDPRESS_SEO_STRATEGY_ITEMS,
} from "./WordpressCMSAgencyData";
import ServicesLinks from "@/app/components/common/ServicesLinks/ServicesLinks";
import ServiceTwoGridForPlatFormSubPage from "@/app/components/common/Services/ServicesTwoGridDescriptionAndImage/ServiceTwoGridForPlatFormSubPage";

function WordpressCMSAgency() {
  return (
    <>
      <HeroSectionServices
        heading1="Scalable Website Growth"
        heading2="For WordPress Brands"
        bgImag="/PlatformExpertise/WordpressCMS/wordpressCMSHero.webp"
        description1="People discover WordPress websites through search, content, ads, and recommendations, but growth depends on how fast, trustworthy, and easy your website feels."
        description2="At Humans of Web, we help WordPress businesses improve visibility, optimize user experience, and drive growth through SEO, ads, and conversion-focused strategies."
        altText="WordPress Marketing Agency"
        breakLine
        objectType="object-fill md:object-cover"
        mobileHeight="h-[200px]"
      />

      <TrustedBy padding={""} />

      <ServiceTwoGridForPlatFormSubPage
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
        headdingBlack="Performance Focused"
        headingBlue="WordPress Marketing"
        image="/PlatformExpertise/WordpressCMS/wordpress1.webp"
        paragraphs={marketAnalyzerParaWordpress}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
        limit={5}
        imageClass="h-full max-h-[323px] md:w-[71%] m-auto"
        marginBottom="lg:mb-20"
      />

      <ScrollTimeline
        items={WORDPRESS_PPC_TIMELINE}
        headdingBlack="We Use WordPress PPC"
        headingBlue="For Your Growth"
        buttonText="Schedule A Free Consultation"
        background="#fafafa"
      />

      <Interactivecontent
        headingStart="WordPress SEO That Improves"
        headingEnd="Visibility & Conversions"
        items={WORDPRESS_SEO_STRATEGY_ITEMS}
        ctaText="Book a free strategy call"
        ctaHref=""
        padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20"
        isJSXIcon
      />

      <ServicesLinks
        background="#fafafa"
        services={WORDPRESS_DEV_SERVICES}
        headdingBlack={"We Offer "}
        headingBlue={"WordPress Development"}
        padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20"
      />

      <ServiceTwoGridForPlatFormSubPage
        reverse
        isHeadingInGridSection
        ctaText="Get Free Proposal"
        headdingBlack="Why Businesses Scale With Us"
        headingBlue="On WordPress Platform"
        image="/PlatformExpertise/WordpressCMS/wordpress2.webp"
        limit={5}
        headingColor={false}
        paragraphs={brandTrustParaWordpress}
        headingBlueColor="text-primary"
        paragraphTextColor
        imageClass="h-full max-h-[323px] md:w-[71%] m-auto"
        marginBottom="lg:mb-20"

        
      />

      <FaqComponent
        title="Frequently asked questions"
        items={WORDPRESS_FAQ_DATA}
        defaultOpen={0}
        position="mx-auto"
      />

      <ReachWithUs />
    </>
  );
}

export default WordpressCMSAgency;
