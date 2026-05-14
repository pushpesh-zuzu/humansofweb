import React from 'react'
import HeroSection from '@/app/components/common/SubServices/HeroSection/HeroSection'
import TrustedBy from '@/app/components/common/TrustedBy/TrustedBy'
import ServicesTwoGridSection from '@/app/components/common/SubServices/ServicesTwoGridSection/ServicesTwoGridSection'
import WorkWithCards from '@/app/components/common/SubServices/WorkWithCards/WorkWithCards';
import ServiceGridSection from '@/app/components/common/SubServices/ServiceGridSection/ServiceGridSection';
import CustomGeneration from '@/app/components/Home/CustomGeneration';
import FaqComponent from '@/app/components/common/SubServices/FaqComponent/FaqComponent';
import ReachWithUs from '@/app/components/common/Services/ReachWithUs/ReachWithUs';
import TailoredPPC from "../../../../common/Icons/healthcare/tailored-ppc-growth-strategies.svg";
import ABBetterPerformance from "../../../../common/Icons/healthcare/ab-better-performance.svg";
import CompellingCopy from "../../../../common/Icons/healthcare/compelling-ad-copy-creation.svg";
import ConversionFocused from "../../../../common/Icons/healthcare/conversion-focused-landing-pages.svg";
import DataDriven from "../../../../common/Icons/healthcare/data-driven-campaign-optimization.svg";
import StrategicKeyword from "../../../../common/Icons/healthcare/strategic-keyword-targeting.svg";
import VideoBased from "../../../../common/Icons/healthcare/video-based-patient-education.svg";
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


const HEALTHCARE_PPC_MANAGEMENT = [
    "At Humans of Web, our healthcare PPC expertise ensures your practice reaches patients at the exact moment they are searching for medical services. We focus on targeted visibility that brings in high-intent traffic and drives meaningful patient inquiries.",

    "We combine strategic keyword targeting with optimized landing pages to attract the right audience and convert clicks into qualified leads. Our approach helps your practice stand out while maximizing every advertising investment for better ROI.",

    "Our PPC specialists continuously monitor and refine campaigns to improve performance, reduce cost per lead, and increase conversions. This allows you to stay focused on delivering quality care while we consistently drive growth and patient acquisition."
];

const WORK_WITH_CARDS = [
    {
        title: "Strategic Keyword Targeting",
        description:
            "We conduct in-depth keyword research to target high-intent patient searches while using negative keywords to reduce wasted spend and improve lead quality.",
        icon: StrategicKeyword
    },
    {
        title: "Compelling Ad Copy Creation",
        description:
            "Our team crafts persuasive ad copy tailored to your services, ensuring your messaging connects with potential patients and drives higher click-through and conversion rates.",
        icon: CompellingCopy
    },
    {
        title: "Conversion-Focused Landing Pages",
        description:
            "We design and optimize landing pages that guide visitors smoothly through their journey, helping convert clicks into patient inquiries and appointments.",
        icon: ConversionFocused
    },
    {
        title: "Data-Driven Campaign Optimization",
        description:
            "We continuously monitor and refine campaigns using performance data to improve results, reduce costs, and maximize your return on ad spend.",
        icon: DataDriven
    },
    {
        title: "A/B Testing for Better Performance",
        description:
            "Through ongoing A/B testing, we identify what works best in your campaigns and apply those insights to increase engagement and conversion rates.",
        icon: ABBetterPerformance
    },
    {
        title: "Tailored PPC Growth Strategies",
        description:
            "We build customized PPC strategies based on your healthcare services, location, and goals to ensure consistent growth and long-term success.",
        icon: TailoredPPC
    }
];

const SERVICE_GRID_ITEMS = [
    {
        title: "High-Intent Medical Ads",
        description:
            "Promote your healthcare services to patients actively searching for treatments with clear, compelling ads that highlight your expertise, services, and trust signals.",
        icon: HighIntentMedical
    },
    {
        title: "Keyword-Driven Search Campaigns",
        description:
            "Capture patient demand at the right moment using targeted medical keywords that position your practice at the top and drive qualified, appointment-ready traffic.",
        icon: KeywordDriven
    },
    {
        title: "Engaging Display Advertising",
        description:
            "Increase awareness with visually engaging ads across relevant websites, helping your practice stay top-of-mind and re-engage potential patients effectively.",
        icon: EngagingDisplay
    },
    {
        title: "Video-Based Patient Education",
        description:
            "Use video campaigns to explain treatments, build trust, and showcase expertise, helping patients make informed decisions about your healthcare services.",
        icon: VideoBased
    },
    {
        title: "Multi-Platform Ad Reach",
        description:
            "Expand beyond a single platform by reaching patients across multiple search and advertising channels to drive more traffic and maximize growth opportunities.",
        icon: MultiformPlatformAd
    },
    {
        title: "Targeted Social Media Campaigns",
        description:
            "Connect with the right audience on social platforms using precise targeting based on location, interests, and behavior to generate meaningful patient inquiries.",
        icon: TargetedSocial
    },
];

const STEPS = [
    {
        step: "01",
        title: "Understand Your Patient Audience",
        description:
            "We analyze your services, location, and patient behavior to identify the right audience segments most likely to convert into inquiries and appointments.",
        icon: UnderstandPatient
    },
    {
        step: "02",
        title: "Build Precision Audience Targeting Strategy",
        description:
            "We create targeted campaigns using high-performing keywords, audience signals, and geo-targeting to ensure your ads reach potential patients consistently.",
        icon: BuildTargeting
    },
    {
        step: "03",
        title: "Craft High-Impact Ad Creatives",
        description:
            "We develop compelling ad copy and creatives that highlight your expertise, build trust, and motivate potential patients to confidently take immediate action online.",
        icon: CraftHighImpact
    },
    {
        step: "04",
        title: "Optimize Conversion Pathways",
        description:
            "We align ads with optimized landing pages and clear calls-to-action, making it easy for patients to connect, inquire, or book appointments.",
        icon: OptimizeConversion
    },
    {
        step: "05",
        title: "Scale Performance with Data",
        description:
            "We continuously track campaign performance, refine targeting, and scale winning strategies to increase patient acquisition and maximize ROI.",
        icon: ScalePerformance
    },
];

const FAQ_DATA = [
    {
        question: "What makes healthcare PPC different from other industries?",
        answer:
            "Healthcare PPC requires precise targeting, compliance awareness, and patient-focused messaging. Campaigns must build trust while reaching users searching for sensitive medical services, making strategy and accuracy critical.",
    },
    {
        question: "How do you ensure we reach the right patients?",
        answer:
            "At Humans of Web, we use detailed keyword research, audience targeting, and location-based strategies to connect your ads with patients actively searching for your services.",
    },
    {
        question: "Can PPC work for specialized healthcare services?",
        answer:
            "Yes. Whether you offer niche treatments or general care, PPC allows us to target specific services and patient needs, helping you attract highly relevant and qualified leads.",
    },
    {
        question: "What factors impact the success of a PPC campaign?",
        answer:
            "Success depends on keyword selection, ad quality, landing page experience, and ongoing optimization. We continuously refine these elements to improve performance and maximize results.",
    },
    {
        question: "Will I get insights into campaign performance?",
        answer:
            "Absolutely. We provide transparent reporting on clicks, leads, conversions, and cost efficiency so you can clearly understand how your campaigns are performing.",
    },
    {
        question: "How do you maximize ROI in healthcare PPC?",
        answer:
            "We optimize bidding strategies, refine targeting, and continuously test campaign elements to reduce wasted spend and increase conversions, ensuring your investment delivers consistent patient growth.",
    },
];

const PPCServices = () => {
    return (
        <>
            <HeroSection
                heading={"Targeted Healthcare PPC for"}
                pinkHeading={"Patient Growth"}
                description1={"Struggling to get consistent patient inquiries? Our PPC strategies are built to attract high-intent patients and convert clicks into steady appointment bookings."}
                description2={"We focus on your services, location, and audience to run targeted campaigns that boost visibility, improve ROI, and drive reliable growth for your healthcare practice."}
                bannerImage="/ppcServices/health-ppc-banner.svg"
                altText={"Healthcare PPC services driving patient leads and practice growth through targeted advertising"}
                imageHeight="h-[200px] md:h-[373px]"
                imageClass="object-cover object-center"
            />
            <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
            <ServicesTwoGridSection
                background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
                headdingBlack="Partner With Experts In "
                headingBlue="Healthcare PPC Growth"
                image="/ppcServices/health-ppc-growth.svg"
                imageAltText="healthcare PPC campaign strategy showing patient targeting, lead generation, and ROI optimization"
                paragraphs={HEALTHCARE_PPC_MANAGEMENT}
                headingBlueColor="text-secondary"
                headingBlackColor="text-white"
                limit={5}
                marginBottom="lg:mb-19"
            />
            <WorkWithCards
                title="Why Healthcare Providers Trust"
                highlightedTitle="Our PPC Experts?"
                description=""
                cards={WORK_WITH_CARDS}
                showCards={3}
                ctaText="Get Expert Guidance Today"
                ctaHref=""
                backgroundImage="/IndustryExpertise/seo-banner.webp"
                padding='py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20'
            />
            <ServiceGridSection
                title="Key Elements of"
                highlightedTitle="Successful Healthcare PPC Campaigns"
                services={SERVICE_GRID_ITEMS}
                backgroundImage="/IndustryExpertise/seo-banner.webp"
                ctaText="Get More Patient Appointments"
                ctaHref=""
            />
            <CustomGeneration
                headdingBlack="Launch PPC Campaigns That"
                headingBlue="Drive Patient Demand"
                steps={STEPS}
            />
            <FaqComponent
                title="Frequently asked questions"
                items={FAQ_DATA}
                defaultOpen={0}
                position="mx-auto"
            />
            <ReachWithUs />
        </>
    )
}

export default PPCServices