// HubspotCRMCustomization.jsx

import React from "react";
import HeroSectionServices from "../../../common/Services/HeroSectionServices/HeroSectionServices";
import TrustedBy from "../../../common/TrustedBy/TrustedBy";
import {
  brandTrustParaHubspot,
  marketAnalyzerParaHubspot,
  HUBSPOT_CRM_DEV_SERVICES,
  HUBSPOT_CRM_FAQ_DATA,
  HUBSPOT_CRM_TIMELINE,
  HUBSPOT_CRM_STRATEGY_ITEMS,
} from "./HubspotCRMCustomizationData";
import ServicesGridSection from "../../../common/Services/ServicesGridSection/ServicesGridSection";
import ReachWithUs from "../../../common/Services/ReachWithUs/ReachWithUs";
import ScrollTimeline from "@/app/components/common/ScrollTimeLine/ScrollTimeLine";
import Interactivecontent from "@/app/components/common/SubServices/Interactivecontent/Interactivecontent";
import FaqComponent from "@/app/components/common/SubServices/FaqComponent/FaqComponent";
import ServicesLinks from "@/app/components/common/ServicesLinks/ServicesLinks";
import ServiceTwoGridForPlatFormSubPage from "@/app/components/common/Services/ServicesTwoGridDescriptionAndImage/ServiceTwoGridForPlatFormSubPage";

function HubspotCRMCustomization() {
  return (
    <>
      <HeroSectionServices
        heading1="Custom HubSpot CRM"
        heading2="Solutions For Growth"
        bgImag="/PlatformExpertise/HubspotCRM/hubspotHero.webp"
        description1="HubSpot CRM helps businesses manage marketing, sales, and customer relationships, but every company follows different processes, reporting structures, and automation requirements."
        description2="At Humans of Web, we customize HubSpot CRM around your business operations, helping teams automate workflows, improve lead management, and scale customer engagement."
        altText="HubSpot CRM Customization Agency"
        breakLine
      />

      <TrustedBy padding={""} />

      <ServiceTwoGridForPlatFormSubPage
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%, rgba(246, 90, 117, 1) 100%)"
        headdingBlack="Growth Focused"
        headingBlue="HubSpot CRM Customization"
        image="/PlatformExpertise/HubspotCRM/hubspot11.webp"
        paragraphs={marketAnalyzerParaHubspot}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
        limit={5}
        imageClass="h-full max-h-[300px] md:w-[300px] m-auto"
      />

      <ScrollTimeline
        items={HUBSPOT_CRM_TIMELINE}
        headdingBlack="Our HubSpot CRM"
        headingBlue="Implementation Process"
        buttonText="Schedule A Free Consultation"
        background="#fafafa"
      />

      <Interactivecontent
        headingStart="HubSpot CRM Built Around"
        headingEnd="Your Business Workflow"
        items={HUBSPOT_CRM_STRATEGY_ITEMS}
        ctaText="Book a free strategy call"
        ctaHref=""
        padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20"
        isJSXIcon
      />

      {/* <ServicesGridSection
        services={HUBSPOT_CRM_DEV_SERVICES}
        headdingBlack={"We Offer "}
        headingBlue={"HubSpot CRM Services"}
        background="#fafafa"
      /> */}
      <ServicesLinks
        services={HUBSPOT_CRM_DEV_SERVICES}
        headdingBlack={"We Offer "}
        headingBlue={"HubSpot CRM Services"}
        padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20"
        background="#fafafa"
      />

      <ServiceTwoGridForPlatFormSubPage
        reverse
        isHeadingInGridSection
        ctaText="Get Free Proposal"
        headdingBlack="Why Businesses Choose Us"
        headingBlue="For HubSpot CRM"
        image="/PlatformExpertise/HubspotCRM/hubspot22.webp"
        limit={5}
        headingColor={false}
        paragraphs={brandTrustParaHubspot}
        headingBlueColor="text-primary"
        paragraphTextColor
        imageClass="h-full max-h-[300px] md:w-[71%] m-auto"
      />

      <FaqComponent
        title="Frequently asked questions"
        items={HUBSPOT_CRM_FAQ_DATA}
        defaultOpen={0}
        position="mx-auto"
      />

      <ReachWithUs />
    </>
  );
}

export default HubspotCRMCustomization;
