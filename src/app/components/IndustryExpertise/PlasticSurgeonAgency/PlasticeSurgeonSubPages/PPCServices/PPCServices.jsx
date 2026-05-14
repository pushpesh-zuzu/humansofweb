import React from 'react'
import ReachWithUs from '@/app/components/common/Services/ReachWithUs/ReachWithUs'
import FaqComponent from '@/app/components/common/SubServices/FaqComponent/FaqComponent'
import HeroSection from '@/app/components/common/SubServices/HeroSection/HeroSection'
import ServiceGridSection from '@/app/components/common/SubServices/ServiceGridSection/ServiceGridSection'
import ServicesTwoGridSection from '@/app/components/common/SubServices/ServicesTwoGridSection/ServicesTwoGridSection'
import WorkWithCards from '@/app/components/common/SubServices/WorkWithCards/WorkWithCards'
import TrustedBy from '@/app/components/common/TrustedBy/TrustedBy'
import CustomGeneration from '@/app/components/Home/CustomGeneration'
import TailoredPPC from "../../../../common/Icons/healthcare/tailored-ppc-growth-strategies.svg";
import ABBetterPerformance from "../../../../common/Icons/healthcare/ab-better-performance.svg";
import CompellingCopy from "../../../../common/Icons/healthcare/compelling-ad-copy-creation.svg";
import ConversionFocused from "../../../../common/Icons/healthcare/conversion-focused-landing-pages.svg";
import DataDriven from "../../../../common/Icons/healthcare/data-driven-campaign-optimization.svg";
import StrategicKeyword from "../../../../common/Icons/healthcare/strategic-keyword-targeting.svg";
import HighIntentMedical from "../../../../common/Icons/healthcare/high-intent-medical-ads.svg";
import KeywordDriven from "../../../../common/Icons/healthcare/keyword-driven-search-campaigns.svg";
import MultiformPlatformAd from "../../../../common/Icons/healthcare/multi-platform-ad-reach.svg";
import TargetedSocial from "../../../../common/Icons/healthcare/targeted-social-media-campaigns.svg";
import EngagingDisplay from "../../../../common/Icons/healthcare/engaging-display.svg";
import ScalePerformance from "../../../../common/Icons/healthcare/scale-performance-with-data.svg";
import OptimizeConversion from "../../../../common/Icons/healthcare/optimize-conversion-pathways.svg";
import CraftHighImpact from "../../../../common/Icons/healthcare/craft-high-impact-ad-creatives.svg";
import BuildTargeting from "../../../../common/Icons/healthcare/build-precision-targeting-strategy.svg";
import UnderstandPatient from "../../../../common/Icons/healthcare/understand-your-patient-audience.svg";


const PLASTIC_SURGEON_PPC_MANAGEMENT = [
    "We build performance-driven PPC campaigns that help plastic surgery clinics attract high-intent consultation leads and increase online visibility.",

    "Our PPC specialists create customized advertising strategies focused on cosmetic procedures, audience targeting, and conversion-focused landing pages to improve campaign performance.",

    "We continuously optimize ad campaigns, refine targeting strategies, and manage budgets effectively to maximize ROI and support long-term clinic growth online."
];

const WORK_WITH_CARDS = [
    {
        title: "High-Intent PPC Campaigns",
        description:
            "We create targeted PPC campaigns designed to attract patients actively searching for cosmetic and plastic surgery procedures online.",
        icon: StrategicKeyword
    },
    {
        title: "Advanced Audience Targeting",
        description:
            "Our PPC specialists identify ideal patient audiences and keyword opportunities to improve ad relevance and campaign conversions consistently.",
        icon: CompellingCopy
    },
    {
        title: "Conversion-Focused Landing Pages",
        description:
            "We optimize landing pages with strong calls-to-action and user-focused experiences that encourage consultation inquiries and bookings.",
        icon: ConversionFocused
    },
    {
        title: "Continuous PPC Optimization",
        description:
            "We regularly refine bidding strategies, ad performance, and targeting settings to maximize campaign efficiency and advertising returns.",
        icon: DataDriven
    },
    {
        title: "Detailed Campaign Reporting",
        description:
            "Our reporting process provides insights into clicks, leads, and conversions so you can clearly track campaign performance and growth.",
        icon: ABBetterPerformance
    },
    {
        title: "Scalable Advertising Strategies",
        description:
            "We develop long-term PPC strategies that improve visibility, increase patient acquisition, and support sustainable clinic growth online.",
        icon: TailoredPPC
    }
];

const SERVICE_GRID_ITEMS = [
    {
        title: "Cosmetic Procedure PPC Ads",
        description:
            "We create targeted PPC campaigns that promote cosmetic procedures and attract patients actively searching for plastic surgery services online.",
        icon: HighIntentMedical
    },
    {
        title: "High-Converting Keyword Campaigns",
        description:
            "Our PPC strategies focus on high-intent cosmetic surgery keywords that drive qualified traffic and increase consultation opportunities consistently.",
        icon: KeywordDriven
    },
    {
        title: "Optimized Consultation Landing Pages",
        description:
            "We design landing pages focused on improving trust, enhancing user experience, and converting ad visitors into consultation inquiries effectively.",
        icon: ConversionFocused
    },
    {
        title: "Local Plastic Surgery Advertising",
        description:
            "Our location-based targeting helps your clinic appear before nearby patients searching for cosmetic and reconstructive surgery services online.",
        icon: TargetedSocial
    },
    {
        title: "Advanced Google Ads Optimization",
        description:
            "We continuously improve ad performance, bidding strategies, and audience targeting to maximize campaign efficiency and advertising ROI consistently.",
        icon: EngagingDisplay
    },
    {
        title: "Retargeting & Patient Re-Engagement",
        description:
            "We use retargeting campaigns to reconnect with interested visitors and encourage them to schedule cosmetic surgery consultations confidently.",
        icon: MultiformPlatformAd
    },
];

const STEPS = [
    {
        step: "01",
        title: "Research Cosmetic Surgery Keywords",
        description:
            "We identify cosmetic procedure keywords patients actively search for to attract qualified consultation leads through targeted PPC advertising campaigns.",
        icon: UnderstandPatient
    },
    {
        step: "02",
        title: "Build Customized Google PPC Campaigns",
        description:
            "Our team creates Google Ads campaigns focused on cosmetic services, audience targeting, and increasing consultation conversion opportunities online.",
        icon: BuildTargeting
    },
    {
        step: "03",
        title: "Create Engaging PPC Advertisements",
        description:
            "We develop compelling ad messaging that highlights cosmetic procedures, patient benefits, and expertise to improve clicks and online engagement.",
        icon: CraftHighImpact
    },
    {
        step: "04",
        title: "Optimize Consultation Landing Pages",
        description:
            "We optimize landing pages with strong calls-to-action and user-focused experiences designed to increase consultation inquiries and appointment bookings.",
        icon: OptimizeConversion
    },
    {
        step: "05",
        title: "Monitor PPC Campaign Performance",
        description:
            "We monitor campaign performance, analyze advertising data, and refine PPC strategies to maximize ROI and support long-term clinic growth.",
        icon: ScalePerformance
    },
];

const FAQ_DATA = [
    {
        question: "Why should plastic surgeons invest in PPC advertising?",
        answer:
            "PPC advertising helps plastic surgery clinics appear before potential patients searching for cosmetic procedures, increasing visibility and consultation opportunities quickly.",
    },
    {
        question: "Can PPC campaigns generate qualified cosmetic surgery leads?",
        answer:
            "Yes, targeted PPC campaigns help attract high-intent patients actively searching for cosmetic and reconstructive surgery services online.",
    },
    {
        question: "How do you target the right audience for plastic surgery PPC?",
        answer:
            "We use advanced audience targeting, location-based strategies, and high-intent keywords to reach patients interested in cosmetic procedures effectively.",
    },
    {
        question: "Do you optimize landing pages for better conversions?",
        answer:
            "Yes, we optimize landing pages with strong calls-to-action and user-focused experiences designed to increase consultation inquiries and bookings.",
    },
    {
        question: "How do you improve plastic surgery PPC campaign performance?",
        answer:
            "We continuously monitor ad performance, optimize bidding strategies, refine audience targeting, and improve campaigns to maximize ROI and lead quality.",
    },
];

const PPCServices = () => {
    return (
        <>
            <HeroSection
                heading={"Plastic Surgery PPC That"}
                pinkHeading={"Generates More Leads"}
                description1={
                    "At Humans of Web, we create high-converting PPC campaigns that help plastic surgery clinics attract qualified consultation leads and increase patient inquiries."
                }
                description2={
                    "Our performance-focused advertising strategies improve brand visibility, maximize campaign ROI, and help your clinic reach patients searching for cosmetic procedures."
                }
                bannerImage="/plasticSurgeon/plastic-surgeon-ppc-banner.webp"
                altText={
                    "Plastic surgeon PPC services generating consultation leads and clinic growth through targeted advertising"
                }
                imageHeight="h-[180px] md:h-[373px]"
                imageClass="object-cover object-center"
            />
            <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
            <ServicesTwoGridSection
                background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
                headdingBlack="Work With PPC Specialists For"
                headingBlue="Plastic Surgery Growth"
                image="/plasticSurgeon/ppc-plastic-surgeon.webp"
                imageAltText="plastic surgeon PPC campaign strategy increasing consultation leads and online visibility"
                paragraphs={PLASTIC_SURGEON_PPC_MANAGEMENT}
                headingBlueColor="text-secondary"
                headingBlackColor="text-white"
                limit={5}
                marginBottom="lg:mb-19"
            />
            <WorkWithCards
                title="Why Plastic Surgery Clinics Trust"
                highlightedTitle="Our PPC Specialists"
                description=""
                cards={WORK_WITH_CARDS}
                showCards={3}
                ctaText="Launch Your PPC Campaign"
                ctaHref=""
                padding='py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20'
            />
            <ServiceGridSection
                title="Powerful PPC Strategies For"
                highlightedTitle="Plastic Surgery Clinics"
                services={SERVICE_GRID_ITEMS}
                ctaText="Increase Consultation Bookings"
                ctaHref=""
            />
            <CustomGeneration
                headdingBlack="PPC Campaigns That Drive"
                headingBlue="Plastic Surgery Growth"
                steps={STEPS}
            />
            <FaqComponent
                title="Frequently asked questions"
                items={FAQ_DATA}
                defaultOpen={0}
                position="mx-auto"
            />
            <ReachWithUs />
        </>)
}

export default PPCServices
