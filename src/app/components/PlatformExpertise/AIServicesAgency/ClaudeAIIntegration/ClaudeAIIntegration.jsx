// ClaudeAIIntegration.jsx

import React from "react";
import HeroSectionServices from "../../../common/Services/HeroSectionServices/HeroSectionServices";
import TrustedBy from "../../../common/TrustedBy/TrustedBy";
import ServicesTwoGridDescriptionAndImage from "../../../common/Services/ServicesTwoGridDescriptionAndImage/ServicesTwoGridDescriptionAndImage";
import {
  brandTrustParaClaude,
  marketAnalyzerParaClaude,
  CLAUDE_AI_DEV_SERVICES,
  CLAUDE_AI_FAQ_DATA,
  CLAUDE_AI_TIMELINE,
  CLAUDE_AI_STRATEGY_ITEMS,
} from "./ClaudeAIIntegrationData";
import ServicesGridSection from "../../../common/Services/ServicesGridSection/ServicesGridSection";
import ReachWithUs from "../../../common/Services/ReachWithUs/ReachWithUs";
import ScrollTimeline from "@/app/components/common/ScrollTimeLine/ScrollTimeLine";
import Interactivecontent from "@/app/components/common/SubServices/Interactivecontent/Interactivecontent";
import FaqComponent from "@/app/components/common/SubServices/FaqComponent/FaqComponent";
import ServicesLinks from "@/app/components/common/ServicesLinks/ServicesLinks";

function ClaudeAIIntegration() {
  return (
    <>
      <HeroSectionServices
        heading1="Custom Claude AI"
        heading2="Solutions For Businesses"
        // bgImag="/AIIntegration/ClaudeAI/claudeHero.webp"
        bgImag="/PlatformExpertise/ArtificialIntelligencyAgency/claudeHero.webp"
        description1="Claude AI helps businesses automate workflows, process information, generate content, and improve operational efficiency through advanced AI capabilities."
        description2="At Humans of Web, we integrate Claude AI into your business systems, helping teams streamline operations, automate repetitive tasks, and improve decision-making."
        altText="Claude AI Integration Agency"
        breakLine
      />

      <TrustedBy padding={""} />

      <ServicesTwoGridDescriptionAndImage
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%, rgba(246, 90, 117, 1) 100%)"
        headdingBlack="Business Focused"
        headingBlue="Claude AI Integration"
        image="/PlatformExpertise/ArtificialIntelligencyAgency/claude1.webp"
        paragraphs={marketAnalyzerParaClaude}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
        limit={5}
        imageClass="h-full max-h-[300px] md:w-[71%] m-auto"

      />

      <ScrollTimeline
        items={CLAUDE_AI_TIMELINE}
        headdingBlack="Our Claude AI"
        headingBlue="Implementation Process"
        buttonText="Schedule A Free Consultation"
        background="#fafafa"
      />

      <Interactivecontent
        headingStart="Claude AI Built Around"
        headingEnd="Your Business Workflow"
        items={CLAUDE_AI_STRATEGY_ITEMS}
        ctaText="Book a free strategy call"
        ctaHref=""
        padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20"
      />

      <ServicesLinks
        services={CLAUDE_AI_DEV_SERVICES}
        headdingBlack={"We Offer "}
        headingBlue={"Claude AI Services"}
        background="#fafafa"
      />

      <ServicesTwoGridDescriptionAndImage
        reverse
        isHeadingInGridSection
        ctaText="Get Free Proposal"
        headdingBlack="Why Businesses Choose Us"
        headingBlue="For Claude AI"
        image="/PlatformExpertise/ArtificialIntelligencyAgency/claude2.webp"
        limit={5}
        headingColor={false}
        paragraphs={brandTrustParaClaude}
        headingBlueColor="text-primary"
        paragraphTextColor
        imageClass="h-full max-h-[300px] md:w-[71%] m-auto"

      />

      <FaqComponent
        title="Frequently asked questions"
        items={CLAUDE_AI_FAQ_DATA}
        defaultOpen={0}
        position="mx-auto"
      />

      <ReachWithUs />
    </>
  );
}

export default ClaudeAIIntegration;