import React from 'react'
import ReachWithUs from '@/app/components/common/Services/ReachWithUs/ReachWithUs';
import BusineesSell from '@/app/components/common/SubServices/BusineesSell/BusineesSell';
import FaqComponent from '@/app/components/common/SubServices/FaqComponent/FaqComponent';
import HeroSection from '@/app/components/common/SubServices/HeroSection/HeroSection'
import MediaTimeEfforts from '@/app/components/common/SubServices/MediaTimeEfforts/MediaTimeEfforts';
import ServiceGridSection from '@/app/components/common/SubServices/ServiceGridSection/ServiceGridSection';
import ServicesTwoGridSection from '@/app/components/common/SubServices/ServicesTwoGridSection/ServicesTwoGridSection'
import WorkWithCards from '@/app/components/common/SubServices/WorkWithCards/WorkWithCards';
import TrustedBy from '@/app/components/common/TrustedBy/TrustedBy'
import youtube from "../../../../common/Icons/healthcare/youtube.svg";
import fb from "../../../../common/Icons/healthcare/fb.svg";
import googleBusinees from "../../../../common/Icons/healthcare/google-businees.svg";
import instagram from "../../../../common/Icons/healthcare/instagram.svg";
import linkdin from "../../../../common/Icons/healthcare/linkdin.svg";
import whatsapp from "../../../../common/Icons/healthcare/whatsapp.svg";
import AnalyticsPerformance from "../../../../common/Icons/healthcare/analytics-performance-insights.svg";
import CommunityBuilding from "../../../../common/Icons/healthcare/community-building-engagement.svg";
import HealthCareContent from "../../../../common/Icons/healthcare/healthcare-content-creation.svg";
import LeadGeneration from "../../../../common/Icons/healthcare/lead-generation-campaigns.svg";
import SocialMedia from "../../../../common/Icons/healthcare/social-media-growth-strategy.svg";
import TargetedAdvertising from "../../../../common/Icons/healthcare/targeted-advertising-campaigns.svg";



const HEALTHCARE_MEDIA_DESCRIPTION = [
    "Today, patients rely on social media to discover healthcare providers, explore services, and build trust before choosing the right practice for their needs.",

    "At Humans of Web, we develop tailored social media strategies that combine engaging content, consistent activity, and targeted campaigns to grow your visibility.",

    "We focus on reaching the right audience with informative and value-driven content that highlights your expertise and encourages meaningful patient interaction.",

    "The result is a strong digital presence that builds credibility, increases engagement, and helps your healthcare practice attract and retain more patients."
];

const MARKETING_WORK_CARDS = [
    {
        title: "Facebook for Patient Engagement",
        description:
            "Engage with local patients through updates, reviews, and community-driven content that builds trust and keeps your healthcare brand top-of-mind.",
        icon: fb
    },
    {
        title: "Instagram for Visual Storytelling",
        description:
            "Showcase your services, patient journeys, and clinic environment through engaging visuals that strengthen credibility and attract attention.",
        icon: instagram
    },
    {
        title: "YouTube for Patient Education",
        description:
            "Create informative videos about treatments, procedures, and healthcare tips to educate patients and position your practice as a trusted authority.",
        icon: youtube
    },
    {
        title: "Google Business Profile",
        description:
            "Boost local visibility with optimized listings, patient reviews, and regular updates so patients can easily discover and contact your practice.",
        icon: googleBusinees
    },
    {
        title: "LinkedIn for Professional Branding",
        description:
            "Enhance your professional presence by sharing insights, achievements, and industry updates to build credibility within the healthcare community.",
        icon: linkdin
    },
    {
        title: "WhatsApp for Instant Patient Connect",
        description:
            "Enable quick communication for inquiries, support, and appointment coordination, making it easier for patients to reach your practice instantly.",
        icon: whatsapp
    }
];

const HEALTHCARE_SOCIAL_ITEMS = [
    {
        title: "Social Media Growth Strategy",
        description:
            "We create tailored strategies based on your services, audience behavior, and goals to build a strong and consistent healthcare brand presence.",
        icon: SocialMedia
    },
    {
        title: "Healthcare Content Creation",
        description:
            "We produce engaging and informative content, including health tips, awareness posts, and service highlights that connect with your audience.",
        icon: HealthCareContent
    },
    {
        title: "Targeted Advertising Campaigns",
        description:
            "We run data-driven social media ads to reach the right audience, increase visibility, and generate high-quality patient inquiries.",
        icon: TargetedAdvertising
    },
    {
        title: "Lead Generation Campaigns",
        description:
            "We design campaigns focused on driving patient inquiries, promoting services, and encouraging users to take action through optimized funnels.",
        icon: LeadGeneration
    },
    {
        title: "Community Building & Engagement",
        description:
            "We manage interactions, respond to queries, and build relationships that strengthen trust and keep your healthcare brand active and approachable.",
        icon: CommunityBuilding
    },
    {
        title: "Analytics & Performance Insights",
        description:
            "We track key metrics like reach, engagement, and leads, providing actionable insights to continuously refine and improve campaign performance.",
        icon: AnalyticsPerformance
    },
];

const HEALTHCARE_SELL_POINTS = [
    {
        number: "1",
        title: "Strategic Content Execution",
        description:
            "We plan and deliver content aligned with your services and audience, ensuring your healthcare brand stays consistent, relevant, and impactful across platforms.",
    },
    {
        number: "2",
        title: "End-to-End Social Management",
        description:
            "From content creation and campaign execution to daily management, we handle your entire social presence to maintain a strong and professional brand image.",
    },
    {
        number: "3",
        title: "Engagement That Builds Trust",
        description:
            "We actively engage with your audience, manage conversations, and strengthen your reputation, helping turn interactions into patient inquiries and long-term relationships.",
    },
];

const FAQ_DATA = [
    {
        question: "What does healthcare social media marketing include?",
        answer:
            "Healthcare social media marketing includes strategy planning, content creation, posting, paid campaigns, and community management. It focuses on building trust, educating patients, and increasing visibility across platforms.",
    },
    {
        question: "How can social media improve my healthcare brand presence?",
        answer:
            "Social media helps you stay visible, share valuable information, and connect with your audience. Consistent activity builds credibility and keeps your practice top-of-mind for patients.",
    },
    {
        question: "Is social media effective for patient acquisition?",
        answer:
            "Yes. With the right targeting and content strategy, social media can attract local audiences, generate interest, and convert engagement into patient inquiries.",
    },
    {
        question: "What type of content works best for healthcare social media?",
        answer:
            "Educational posts, health tips, patient stories, service highlights, and short videos perform well. Content that informs and builds trust tends to drive higher engagement.",
    },
    {
        question: "Do I need paid ads for better results?",
        answer:
            "While organic content builds long-term presence, paid campaigns help you reach a wider and more targeted audience quickly, improving lead generation and visibility.",
    },
    {
        question: "How do you measure success in social media campaigns?",
        answer:
            "We track metrics like reach, engagement, follower growth, and patient inquiries. These insights help us refine strategies and improve overall performance.",
    },
    {
        question: "Can you manage all my social media platforms?",
        answer:
            "Yes. Humans of Web handles content creation, posting, ad management, and engagement across platforms, ensuring a consistent and professional presence.",
    },
    {
        question: "What makes Humans of Web different for healthcare marketing?",
        answer:
            "We focus on strategy-driven campaigns tailored for healthcare providers, combining creative content, targeted ads, and consistent management to drive patient engagement and growth."
    }
];

const SocialMediaMarketing = () => {
    return (
        <>
            <HeroSection
                heading={"Healthcare Social Media"}
                pinkHeading={"That Converts Patients"}
                description1={"We help healthcare providers boost their online presence, increase brand visibility, and attract new patients through strategic content and targeted social media campaigns."}
                description2={"From regular content to paid promotions, Humans of Web builds social media strategies that keep your practice visible, strengthen trust, and drive consistent patient engagement."}
                bannerImage="/SocialMediaMarketing/healthcare-media-banner.svg"
                altText={"healthcare social media marketing driving patient growth and engagement"}
            />
            <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
            <ServicesTwoGridSection
                background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
                headdingBlack="Social Media That Grows"
                headingBlue="Your Healthcare Brand"
                image="/SocialMediaMarketing/healthcare-brand.svg"
                paragraphs={HEALTHCARE_MEDIA_DESCRIPTION}
                headingBlueColor="text-secondary"
                headingBlackColor="text-white"
                limit={5}
                ctaText='Grow My Social Presence'
            />
            <MediaTimeEfforts
                title="Boost Your Healthcare Visibility"
                highlightedTitle="with Smart Social Strategies"
                description1="Patients are actively searching for healthcare providers on social media and engaging with trusted brands."
                description2="We help you manage content, run targeted campaigns, and turn your social platforms into channels that build trust and generate patient inquiries."
                ctaText="Book a Call"
                image="/SocialMediaMarketing/healthcare-strategy-banner.svg"
                imageAlt="healthcare social media marketing growth and patient engagement illustration"
            />
            <WorkWithCards
                title="Top Platforms for"
                highlightedTitle="Healthcare Social Media Growth"
                cards={MARKETING_WORK_CARDS}
                showCards={3}
                ctaText="Build My Social Strategy"
                ctaHref=""
                backgroundImage="/IndustryExpertise/eCommerce/marketAnalyzerImage.webp"
            />
            <ServiceGridSection
                title="Social Media Services"
                highlightedTitle="for Healthcare Providers"
                services={HEALTHCARE_SOCIAL_ITEMS}
                ctaText="Start Social Growth"
                ctaHref=""
            />
            <BusineesSell
                title="Social Media That"
                highlightedTitle="Builds Authority & Patient Demand"
                ctaText="Grow My Social Channel"
                points={HEALTHCARE_SELL_POINTS}
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

export default SocialMediaMarketing