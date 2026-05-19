import React from "react";
import HeroSectionServices from "../../../common/Services/HeroSectionServices/HeroSectionServices";
import TrustedBy from "../../../common/TrustedBy/TrustedBy";
import ServicesGridSection from "../../../common/Services/ServicesGridSection/ServicesGridSection";
import ReachWithUs from "../../../common/Services/ReachWithUs/ReachWithUs";
import ScrollTimeline from "@/app/components/common/ScrollTimeLine/ScrollTimeLine";
import Interactivecontent from "@/app/components/common/SubServices/Interactivecontent/Interactivecontent";
import FaqComponent from "@/app/components/common/SubServices/FaqComponent/FaqComponent";

import {
  brandTrustParaZoho,
  marketAnalyzerParaZoho,
  ZOHO_CRM_CUSTOMIZATION_SERVICES,
  ZOHO_FAQ_DATA,
  ZOHO_IMPLEMENTATION_TIMELINE,
  ZOHO_AUTOMATION_STRATEGY_ITEMS,
} from "./ZohoCRMCustomizationData";
import ServicesLinks from "@/app/components/common/ServicesLinks/ServicesLinks";
import ServiceTwoGridForPlatFormSubPage from "@/app/components/common/Services/ServicesTwoGridDescriptionAndImage/ServiceTwoGridForPlatFormSubPage";

function ZohoCRMCustomizationAgency() {
  return (
    <>
      <HeroSectionServices
        heading1="Smarter CRM Operations"
        heading2="With Zoho Customization"
        bgImag="/PlatformExpertise/ZohoCRM/zohoCRMHero.webp"
        description1="Businesses use Zoho CRM to manage leads, sales, and customer relationships, but growth depends on how well the system fits your actual workflows and team operations."
        description2="At Humans of Web, we help businesses customize Zoho CRM for automation, reporting, lead management, and scalable operational efficiency."
        altText="Zoho CRM Customization Services"
        breakLine
        objectType="object-fill lg:object-cover"
        mobileHeight="h-[200px]"
      />

      <TrustedBy padding={""} />

      <ServiceTwoGridForPlatFormSubPage
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
        headdingBlack="Workflow Focused"
        headingBlue="Zoho CRM Customization"
        image="/PlatformExpertise/ZohoCRM/zoho1.webp"
        paragraphs={marketAnalyzerParaZoho}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
        limit={5}
        imageClass="h-full max-h-[300px] md:w-[71%] m-auto"
        marginBottom="lg:mb-20"
      />

      <ScrollTimeline
        items={ZOHO_IMPLEMENTATION_TIMELINE}
        headdingBlack="How We Customize"
        headingBlue="Zoho CRM Systems"
        buttonText="Schedule A Free Consultation"
        background="#fafafa"
        
      />

      <Interactivecontent
        headingStart="Zoho CRM Automation"
        headingEnd="Built Around Your Workflow"
        items={ZOHO_AUTOMATION_STRATEGY_ITEMS}
        ctaText="Book a free strategy call"
        ctaHref=""
        padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20"
        isJSXIcon
      />

      {/* <ServicesGridSection
        services={ZOHO_CRM_CUSTOMIZATION_SERVICES}
        headdingBlack={"We Offer "}
        headingBlue={"Zoho CRM Services"}
        
      /> */}
      <ServicesLinks
              services={ZOHO_CRM_CUSTOMIZATION_SERVICES}
              headdingBlack={"eCommerce Solutions "}
              headingBlue={"We Offer"}
              padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20"
              background="#fafafa"
              
            />

      <ServiceTwoGridForPlatFormSubPage
        reverse
        isHeadingInGridSection
        ctaText="Get Free Proposal"
        headdingBlack="Why Businesses Choose Us"
        headingBlue="For Zoho CRM Customization"
        image="/PlatformExpertise/ZohoCRM/zoho2.webp"
        limit={5}
        headingColor={false}
        paragraphs={brandTrustParaZoho}
        headingBlueColor="text-primary"
        paragraphTextColor
        imageClass="h-full max-h-[300px] md:w-[71%] m-auto"
      />

      <FaqComponent
        title="Frequently asked questions"
        items={ZOHO_FAQ_DATA}
        defaultOpen={0}
        position="mx-auto"
      />

      <ReachWithUs />
    </>
  );
}

export default ZohoCRMCustomizationAgency;