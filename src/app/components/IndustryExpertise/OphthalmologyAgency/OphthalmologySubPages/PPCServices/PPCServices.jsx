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


const OPHTHALMOLOGY_PPC_MANAGEMENT = [
    "At Humans of Web, we create data-driven PPC campaigns that help ophthalmology practices attract qualified patient leads and improve appointment bookings through targeted advertising.",

    "Our team develops customized Google Ads strategies focused on eye care services, audience targeting, and landing page optimization to maximize visibility and increase conversions.",

    "We continuously monitor campaign performance, optimize ad spending, and refine targeting strategies to improve ROI, lower acquisition costs, and support long-term practice growth."
];

const WORK_WITH_CARDS = [
    {
        title: "Targeted PPC Campaign Setup",
        description:
            "We create customized Google Ads campaigns focused on eye care services, patient intent, and local targeting to generate high-quality leads for your practice.",
        icon: StrategicKeyword
    },
    {
        title: "Smart Keyword & Audience Targeting",
        description:
            "Our PPC specialists research high-converting keywords and audience behaviors to help your ophthalmology ads reach the right patients at the right time.",
        icon: CompellingCopy
    },
    {
        title: "Landing Page Optimization",
        description:
            "We optimize landing pages for better user experience and stronger conversions, helping turn ad clicks into appointment inquiries and patient bookings.",
        icon: ConversionFocused
    },
    {
        title: "Continuous Campaign Optimization",
        description:
            "We regularly refine ad copy, bidding strategies, and targeting settings to improve campaign performance and maximize your advertising ROI.",
        icon: DataDriven
    },
    {
        title: "Performance Tracking & Reporting",
        description:
            "Our detailed PPC reports provide insights into leads, conversions, and campaign growth so you can clearly measure your marketing success.",
        icon: ABBetterPerformance
    },
    {
        title: "Scalable PPC Growth Strategies",
        description:
            "We build long-term PPC strategies designed to increase patient acquisition, improve visibility, and support sustainable growth for your ophthalmology practice.",
        icon: TailoredPPC
    }
];

const SERVICE_GRID_ITEMS = [
    {
        title: "Targeted Eye Care Ads",
        description:
            "We create focused PPC ads for ophthalmology services that reach patients actively searching for eye exams, LASIK, cataract treatment, and vision care solutions.",
        icon: HighIntentMedical
    },
    {
        title: "High-Intent Keyword Campaigns",
        description:
            "Our keyword-driven campaigns target patients with strong search intent, helping your ophthalmology practice attract qualified traffic and appointment-ready leads.",
        icon: KeywordDriven
    },
    {
        title: "Conversion-Focused Landing Pages",
        description:
            "We optimize landing pages to improve patient experience, increase trust, and convert ad clicks into consultation requests and booked appointments.",
        icon: ConversionFocused
    },
    {
        title: "Local PPC Advertising",
        description:
            "Our local targeting strategies help your eye care practice appear in front of nearby patients searching for ophthalmology services in your service area.",
        icon: TargetedSocial
    },
    {
        title: "Google Ads Performance Optimization",
        description:
            "We continuously monitor and refine bids, ad copy, and targeting settings to improve campaign performance and maximize your advertising ROI.",
        icon: EngagingDisplay
    },
    {
        title: "Patient Retargeting Campaigns",
        description:
            "We re-engage interested visitors through retargeting ads that keep your ophthalmology services visible and encourage patients to return and book appointments.",
        icon: MultiformPlatformAd
    },
];

const STEPS = [
    {
        step: "01",
        title: "Research High-Intent Eye Care Keywords",
        description:
            "We identify ophthalmology search terms patients use for treatments, helping your ads attract qualified and appointment-ready patients.",
        icon: UnderstandPatient
    },
    {
        step: "02",
        title: "Create Targeted PPC Campaigns",
        description:
            "Our team builds customized Google Ads campaigns focused on your ophthalmology services, location, and patient demographics to improve lead quality and increase patient conversions consistently.",
        icon: BuildTargeting
    },
    {
        step: "03",
        title: "Develop Engaging Ad Messaging",
        description:
            "We craft compelling ad copy that highlights your expertise, eye care treatments, and patient benefits to increase clicks and generate more qualified patient inquiries consistently online.",
        icon: CraftHighImpact
    },
    {
        step: "04",
        title: "Optimize Landing Page Conversions",
        description:
            "We design and optimize landing pages with clear calls-to-action that encourage visitors to schedule consultations and ophthalmology appointments with greater confidence and engagement.",
        icon: OptimizeConversion
    },
    {
        step: "05",
        title: "Monitor & Improve Campaign Performance",
        description:
            "We continuously analyze PPC performance, test campaign variations, and refine strategies to maximize ROI and support long-term patient growth.",
        icon: ScalePerformance
    },
];

const FAQ_DATA = [
    {
        question: "What are ophthalmology PPC services?",
        answer:
            "Ophthalmology PPC services use targeted paid advertising campaigns to help eye care practices attract qualified patients, increase appointment bookings, and improve online visibility.",
    },
    {
        question: "How does PPC help ophthalmology practices attract more patients?",
        answer:
            "PPC places your ophthalmology services in front of patients actively searching for eye care treatments, helping generate high-intent leads and faster patient inquiries.",
    },
    {
        question: "Do you create customized PPC campaigns for ophthalmologists?",
        answer:
            "Yes, at Humans of Web we build customized PPC campaigns based on your ophthalmology services, target audience, location, and business goals to maximize conversions and ROI.",
    },
    {
        question: "How do you improve ophthalmology PPC campaign performance?",
        answer:
            "We continuously optimize keywords, ad copy, bidding strategies, audience targeting, and landing pages to improve lead quality and increase campaign performance.",
    },
    {
        question: "Can PPC campaigns target local eye care patients?",
        answer:
            "Yes, we use location-based targeting strategies to help your ophthalmology ads reach nearby patients searching for eye care services and treatments online.",
    },
];

const PPCServices = () => {
    return (
        <>
            <HeroSection
                heading={"Ophthalmology PPC That"}
                pinkHeading={"Drives More Patients"}
                description1={"At Humans of Web, we create targeted PPC campaigns that help ophthalmology practices attract qualified patient leads and increase appointment bookings."}
                description2={"Our data-driven Google Ads strategies focus on improving visibility, maximizing ad performance, and generating consistent growth for your eye care practice."}
                bannerImage="/ophthalmology/ophthalmology-ppc-banner.webp"
                altText={"Ophthalmology PPC services driving patient leads and practice growth through targeted advertising"}
                imageHeight="h-[180px] md:h-[373px]"
                imageClass="lg:min-h-[392px]"
            />
            <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
            <ServicesTwoGridSection
                background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
                headdingBlack="Partner With PPC Experts For "
                headingBlue="Ophthalmology Growth"
                image="/ophthalmology/ppc-ophthalmology.webp"
                imageAltText="ophthalmology PPC campaign strategy improving patient leads, appointment bookings, and ROI"
                paragraphs={OPHTHALMOLOGY_PPC_MANAGEMENT}
                headingBlueColor="text-secondary"
                headingBlackColor="text-white"
                limit={5}
                marginBottom="lg:mb-19"
            />
            <WorkWithCards
                title="Why Ophthalmology Practices Choose"
                highlightedTitle="Our PPC Specialists?"
                description=""
                cards={WORK_WITH_CARDS}
                showCards={3}
                ctaText="Start Growing With PPC"
                ctaHref=""
                backgroundImage="/IndustryExpertise/seo-banner.webp"
                padding='py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20'
            />
            <ServiceGridSection
                title="Essential Strategies For"
                highlightedTitle="Ophthalmology PPC Success"
                services={SERVICE_GRID_ITEMS}
                backgroundImage="/IndustryExpertise/seo-banner.webp"
                ctaText="Increase Eye Care Appointments"
                ctaHref=""
            />
            <CustomGeneration
                headdingBlack="PPC Strategies That"
                headingBlue="Grow Ophthalmology Practices"
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
