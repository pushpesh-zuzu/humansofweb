import React from "react";
import HeroSectionServices from "../../../common/Services/HeroSectionServices/HeroSectionServices";
import TrustedBy from "../../../common/TrustedBy/TrustedBy";
import {
  brandTrustParaBoltAI,
  marketAnalyzerParaBoltAI,
  BOLT_AI_DEV_SERVICES,
  BOLT_AI_FAQ_DATA,
  BOLT_AI_TIMELINE,
  BOLT_AI_STRATEGY_ITEMS,
} from "./BoltAIAgencyData";
import ServicesGridSection from "../../../common/Services/ServicesGridSection/ServicesGridSection";
import ReachWithUs from "../../../common/Services/ReachWithUs/ReachWithUs";
import ScrollTimeline from "@/app/components/common/ScrollTimeLine/ScrollTimeLine";
import Interactivecontent from "@/app/components/common/SubServices/Interactivecontent/Interactivecontent";
import FaqComponent from "@/app/components/common/SubServices/FaqComponent/FaqComponent";
import ServicesLinks from "@/app/components/common/ServicesLinks/ServicesLinks";
import ServiceTwoGridForPlatFormSubPage from "@/app/components/common/Services/ServicesTwoGridDescriptionAndImage/ServiceTwoGridForPlatFormSubPage";

function BoltAIAgency() {
  return (
    <>
      <HeroSectionServices
        heading1="Build Faster With"
        heading2="Bolt AI Development"
        bgImag="/PlatformExpertise/ArtificialIntelligencyAgency/boltAIHero.webp"
        description1="Modern startups and product teams use Bolt AI to rapidly build, test, and launch applications with AI-assisted workflows and faster development cycles."
        description2="At Humans of Web, we help businesses use Bolt AI for scalable product development, workflow automation, rapid prototyping, and AI-powered digital experiences."
        altText="Bolt AI Development Agency"
        breakLine
        objectType="object-fill md:object-cover"
        mobileHeight="h-[200px]"
      />

      <TrustedBy padding={""} />

      <ServiceTwoGridForPlatFormSubPage
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
        headdingBlack="AI Powered"
        headingBlue="Bolt AI Solutions"
        image="/PlatformExpertise/ArtificialIntelligencyAgency/boltAI1.webp"
        paragraphs={marketAnalyzerParaBoltAI}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
        limit={5}
        imageClass="h-full max-h-[300px] md:w-[71%] m-auto"
        marginBottom="lg:mb-20"
      />

      <ScrollTimeline
        items={BOLT_AI_TIMELINE}
        headdingBlack="How We Build With"
        headingBlue="Bolt AI"
        buttonText="Schedule A Free Consultation"
        background="#fafafa"
      />

      <Interactivecontent
        headingStart="Our Approach To Building"
        headingEnd="AI-Powered Products"
        items={BOLT_AI_STRATEGY_ITEMS}
        ctaText="Book a free strategy call"
        ctaHref=""
        padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20"
        isJSXIcon
      />

      <ServicesLinks
        services={BOLT_AI_DEV_SERVICES}
        headdingBlack="Complete "
        headingBlue="Bolt AI Solutions We Offer"
        background="#fafafa"
      />

      <ServiceTwoGridForPlatFormSubPage
        reverse
        isHeadingInGridSection
        ctaText="Get Free Proposal"
        headdingBlack="Why Teams Choose Us"
        headingBlue="For Bolt AI Projects"
        image="/PlatformExpertise/ArtificialIntelligencyAgency/boltAI2.webp"
        limit={5}
        headingColor={false}
        paragraphs={brandTrustParaBoltAI}
        headingBlueColor="text-primary"
        paragraphTextColor
        imageClass="h-full max-h-[300px] md:w-[71%] m-auto"
      />

      <FaqComponent
        title="Frequently asked questions"
        items={BOLT_AI_FAQ_DATA}
        defaultOpen={0}
        position="mx-auto"
      />

      <ReachWithUs />
    </>
  );
}

export default BoltAIAgency;
