import React from "react";
import HeroSectionServices from "../../../common/Services/HeroSectionServices/HeroSectionServices";
import TrustedBy from "../../../common/TrustedBy/TrustedBy";
import {
  KILOCODE_FAQ_DATA,
  KILOCODE_FEATURES,
  KILOCODE_MARKET_PARA,
  KILOCODE_PPC_TIMELINE,
  KILOCODE_SEO_ITEMS,
  KILOCODE_TRUST_PARA,
} from "./KiloCodeAIData";
import ServicesGridSection from "../../../common/Services/ServicesGridSection/ServicesGridSection";
import ReachWithUs from "../../../common/Services/ReachWithUs/ReachWithUs";
import ScrollTimeline from "@/app/components/common/ScrollTimeLine/ScrollTimeLine";
import Interactivecontent from "@/app/components/common/SubServices/Interactivecontent/Interactivecontent";
import FaqComponent from "@/app/components/common/SubServices/FaqComponent/FaqComponent";
import ServicesLinks from "@/app/components/common/ServicesLinks/ServicesLinks";
import ServiceTwoGridForPlatFormSubPage from "@/app/components/common/Services/ServicesTwoGridDescriptionAndImage/ServiceTwoGridForPlatFormSubPage";

function KiloCodeAI() {
  return (
    <>
      <HeroSectionServices
        heading1="AI Coding Automation"
        heading2="With KiloCode"
        bgImag="/PlatformExpertise/ArtificialIntelligencyAgency/kilocodeHero.webp"
        description1="Development teams use AI coding assistants to speed up development, reduce repetitive work, and improve overall engineering productivity."
        description2="At Humans of Web, we help businesses implement KiloCode workflows that improve coding efficiency, automation, and development scalability."
        altText="KiloCode AI Solutions"
        breakLine
      />

      <TrustedBy padding={""} />

      <ServiceTwoGridForPlatFormSubPage
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
        headdingBlack="AI Assisted"
        headingBlue="Development Workflow"
        image="/PlatformExpertise/ArtificialIntelligencyAgency/kilocode1.webp"
        paragraphs={KILOCODE_MARKET_PARA}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
        limit={5}
        imageClass="h-full max-h-[300px] md:w-[71%] m-auto"
      />

      <ScrollTimeline
        items={KILOCODE_PPC_TIMELINE}
        headdingBlack="How We Build"
        headingBlue="AI Coding Systems"
        buttonText="Schedule A Free Consultation"
        background="#fafafa"
      />

      <Interactivecontent
        headingStart="AI Coding Systems That Improve"
        headingEnd="Development Speed"
        items={KILOCODE_SEO_ITEMS}
        ctaText="Book a free strategy call"
        ctaHref=""
        padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20"
        isJSXIcon
      />

      <ServicesLinks
        services={KILOCODE_FEATURES}
        headdingBlack={"We Build "}
        headingBlue={"AI Development Workflows"}
        background="#fafafa"
      />

      <ServiceTwoGridForPlatFormSubPage
        reverse
        isHeadingInGridSection
        ctaText="Get Free Proposal"
        headdingBlack="Why Teams Use"
        headingBlue="AI Coding Automation"
        image="/PlatformExpertise/ArtificialIntelligencyAgency/kilocode2.webp"
        limit={5}
        headingColor={false}
        paragraphs={KILOCODE_TRUST_PARA}
        headingBlueColor="text-primary"
        paragraphTextColor
        imageClass="h-full max-h-[300px] md:w-[71%] m-auto"
      />

      <FaqComponent
        title="Frequently asked questions"
        items={KILOCODE_FAQ_DATA}
        defaultOpen={0}
        position="mx-auto"
      />

      <ReachWithUs />
    </>
  );
}

export default KiloCodeAI;
