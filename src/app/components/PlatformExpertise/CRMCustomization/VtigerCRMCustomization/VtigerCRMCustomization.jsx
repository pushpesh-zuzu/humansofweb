// VtigerCRMCustomization.jsx

import React from "react";
import HeroSectionServices from "../../../common/Services/HeroSectionServices/HeroSectionServices";
import TrustedBy from "../../../common/TrustedBy/TrustedBy";
import ServicesTwoGridDescriptionAndImage from "../../../common/Services/ServicesTwoGridDescriptionAndImage/ServicesTwoGridDescriptionAndImage";
import {
  brandTrustParaVtiger,
  marketAnalyzerParaVtiger,
  VTIGER_CRM_DEV_SERVICES,
  VTIGER_CRM_FAQ_DATA,
  VTIGER_CRM_TIMELINE,
  VTIGER_CRM_STRATEGY_ITEMS,
} from "./VtigerCRMCustomizationData";
import ServicesGridSection from "../../../common/Services/ServicesGridSection/ServicesGridSection";
import ReachWithUs from "../../../common/Services/ReachWithUs/ReachWithUs";
import ScrollTimeline from "@/app/components/common/ScrollTimeLine/ScrollTimeLine";
import Interactivecontent from "@/app/components/common/SubServices/Interactivecontent/Interactivecontent";
import FaqComponent from "@/app/components/common/SubServices/FaqComponent/FaqComponent";
import ServicesLinks from "@/app/components/common/ServicesLinks/ServicesLinks";

function VtigerCRMCustomization() {
  return (
    <>
      <HeroSectionServices
        heading1="Custom Vtiger CRM"
        heading2="Solutions For Teams"
        bgImag="/PlatformExpertise/VtigerCRM/vtigerHero.webp"
        description1="Vtiger CRM helps businesses manage leads, sales, support, and customer communication, but every business follows a different workflow and operational process."
        description2="At Humans of Web, we customize Vtiger CRM around your business operations, helping teams automate tasks, improve visibility, and streamline customer management."
        altText="Vtiger CRM Customization Agency"
        breakLine
      />

      <TrustedBy padding={""} />

      <ServicesTwoGridDescriptionAndImage
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%, rgba(246, 90, 117, 1) 100%)"
        headdingBlack="Workflow Focused"
        headingBlue="Vtiger CRM Customization"
        image="/PlatformExpertise/VtigerCRM/vtiger1.webp"
        paragraphs={marketAnalyzerParaVtiger}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
        limit={5}
        imageClass="h-full max-h-[300px] md:w-[71%] m-auto"
      />

      <ScrollTimeline
        items={VTIGER_CRM_TIMELINE}
        headdingBlack="Our Vtiger CRM"
        headingBlue="Implementation Process"
        buttonText="Schedule A Free Consultation"
        background="#fafafa"
      />

      <Interactivecontent
        headingStart="Vtiger CRM Built Around"
        headingEnd="Your Workflow"
        items={VTIGER_CRM_STRATEGY_ITEMS}
        ctaText="Book a free strategy call"
        ctaHref=""
        padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20"
      />

      {/* <ServicesGridSection
        services={VTIGER_CRM_DEV_SERVICES}
        headdingBlack={"We Offer "}
        headingBlue={"Vtiger CRM Services"}
        background="#fafafa"
      /> */}
<ServicesLinks
      services={VTIGER_CRM_DEV_SERVICES}
        headdingBlack={"We Offer "}
        headingBlue={"Vtiger CRM Services"}
      padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20"
      background="#fafafa"    
      />
      <ServicesTwoGridDescriptionAndImage
        reverse
        isHeadingInGridSection
        ctaText="Get Free Proposal"
        headdingBlack="Why Businesses Choose Us"
        headingBlue="For Vtiger CRM"
        image="/PlatformExpertise/VtigerCRM/vtiger2.webp"
        limit={5}
        headingColor={false}
        paragraphs={brandTrustParaVtiger}
        headingBlueColor="text-primary"
        paragraphTextColor
        imageClass="h-full max-h-[300px] md:w-[71%] m-auto"
      />

      <FaqComponent
        title="Frequently asked questions"
        items={VTIGER_CRM_FAQ_DATA}
        defaultOpen={0}
        position="mx-auto"
      />

      <ReachWithUs />
    </>
  );
}

export default VtigerCRMCustomization;