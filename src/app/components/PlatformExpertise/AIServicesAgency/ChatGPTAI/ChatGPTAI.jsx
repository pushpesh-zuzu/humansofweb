import React from "react";
import HeroSectionServices from "../../../common/Services/HeroSectionServices/HeroSectionServices";
import TrustedBy from "../../../common/TrustedBy/TrustedBy";
import ServicesTwoGridDescriptionAndImage from "../../../common/Services/ServicesTwoGridDescriptionAndImage/ServicesTwoGridDescriptionAndImage";
import {
  CHATGPT_FAQ_DATA,
  CHATGPT_FEATURES,
  CHATGPT_MARKET_PARA,
  CHATGPT_PPC_TIMELINE,
  CHATGPT_SEO_ITEMS,
  CHATGPT_TRUST_PARA,
} from "./ChatGPTAIData";
import ServicesGridSection from "../../../common/Services/ServicesGridSection/ServicesGridSection";
import ReachWithUs from "../../../common/Services/ReachWithUs/ReachWithUs";
import ScrollTimeline from "@/app/components/common/ScrollTimeLine/ScrollTimeLine";
import Interactivecontent from "@/app/components/common/SubServices/Interactivecontent/Interactivecontent";
import FaqComponent from "@/app/components/common/SubServices/FaqComponent/FaqComponent";
import ServicesLinks from "@/app/components/common/ServicesLinks/ServicesLinks";

function ChatGPTAI() {
  return (
    <>
      <HeroSectionServices
        heading1="AI Automation Solutions"
        heading2="Powered By ChatGPT"
        bgImag="/PlatformExpertise/ArtificialIntelligencyAgency/chatgptHero.webp"
        description1="Businesses use ChatGPT to automate support, streamline workflows, generate content, and improve customer communication across multiple channels."
        description2="At Humans of Web, we help brands integrate ChatGPT solutions that improve productivity, reduce manual work, and create scalable AI-driven experiences."
        altText="ChatGPT AI Solutions"
        breakLine
      />

      <TrustedBy padding={""} />

      <ServicesTwoGridDescriptionAndImage
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
        headdingBlack="Smart Automation With"
        headingBlue="ChatGPT AI"
        image="/PlatformExpertise/ArtificialIntelligencyAgency/chatgpt1.webp"
        paragraphs={CHATGPT_MARKET_PARA}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
        limit={5}
        imageClass="h-full max-h-[300px] md:w-[71%] m-auto"
      />

      <ScrollTimeline
        items={CHATGPT_PPC_TIMELINE}
        headdingBlack="How We Build"
        headingBlue="ChatGPT Solutions"
        buttonText="Schedule A Free Consultation"
        background="#fafafa"
      />

      <Interactivecontent
        headingStart="AI Workflows That Improve"
        headingEnd="Business Efficiency"
        items={CHATGPT_SEO_ITEMS}
        ctaText="Book a free strategy call"
        ctaHref=""
        padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20"
        isJSXIcon
      />

      <ServicesLinks
        services={CHATGPT_FEATURES}
        headdingBlack={"We Build "}
        headingBlue={"ChatGPT Integrations"}
        background="#fafafa"
      />

      <ServicesTwoGridDescriptionAndImage
        reverse
        isHeadingInGridSection
        ctaText="Get Free Proposal"
        headdingBlack="Why Businesses Choose"
        headingBlue="ChatGPT Automation"
        image="/PlatformExpertise/ArtificialIntelligencyAgency/chatgpt2.webp"
        limit={5}
        headingColor={false}
        paragraphs={CHATGPT_TRUST_PARA}
        headingBlueColor="text-primary"
        paragraphTextColor
        imageClass="h-full max-h-[300px] md:w-[71%] m-auto"
      />

      <FaqComponent
        title="Frequently asked questions"
        items={CHATGPT_FAQ_DATA}
        defaultOpen={0}
        position="mx-auto"
      />

      <ReachWithUs />
    </>
  );
}

export default ChatGPTAI;
