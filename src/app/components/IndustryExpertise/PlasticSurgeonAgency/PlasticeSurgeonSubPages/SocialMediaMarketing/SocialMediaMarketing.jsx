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



const SOCIAL_MEDIA_DESCRIPTION = [
    "Patients often explore social media before choosing a plastic surgery clinic, making a strong online presence essential for building trust and credibility.",

    "We create customized social media strategies that combine engaging visuals, educational content, and targeted campaigns to improve your clinic’s visibility online.",

    "Our team focuses on sharing valuable content that highlights cosmetic procedures, patient experiences, and your expertise to encourage stronger audience engagement.",

    "The result is a professional social media presence that increases brand awareness, attracts consultation inquiries, and supports long-term clinic growth."
];

const MARKETING_WORK_CARDS = [
    {
        title: "Instagram for Cosmetic Branding",
        description:
            "Showcase cosmetic procedures, clinic transformations, and visual content that strengthens credibility and attracts patient attention online.",
        icon: instagram
    },
    {
        title: "Facebook for Audience Engagement",
        description:
            "Connect with potential patients through educational posts, clinic updates, reviews, and campaigns that build trust and engagement consistently.",
        icon: fb
    },
    {
        title: "YouTube for Procedure Awareness",
        description:
            "Share informative videos about cosmetic treatments, recovery guidance, and patient education to strengthen authority and online visibility.",
        icon: youtube
    },
    {
        title: "Google Business Profile Optimization",
        description:
            "Improve local visibility with optimized profiles, patient reviews, and regular updates that help patients discover your plastic surgery clinic.",
        icon: googleBusinees
    },
    {
        title: "LinkedIn for Professional Authority",
        description:
            "Strengthen your professional reputation by sharing achievements, expertise, and industry insights that build confidence in your cosmetic brand.",
        icon: linkdin
    },
    {
        title: "WhatsApp for Patient Communication",
        description:
            "Provide quick responses for consultation inquiries, appointment coordination, and patient support through direct and convenient communication channels.",
        icon: whatsapp
    }
];

const SOCIAL_ITEMS = [
    {
        title: "Plastic Surgery Social Strategy",
        description:
            "We create customized social media strategies focused on your cosmetic services, patient audience, and long-term clinic growth goals.",
        icon: SocialMedia
    },
    {
        title: "Engaging Cosmetic Content Creation",
        description:
            "We produce visually engaging content that highlights procedures, clinic expertise, and patient-focused information to increase audience interest online.",
        icon: HealthCareContent
    },
    {
        title: "Targeted Social Advertising Campaigns",
        description:
            "We run strategic social media advertisements that increase visibility, attract qualified leads, and generate cosmetic consultation inquiries consistently.",
        icon: TargetedAdvertising
    },
    {
        title: "Consultation Lead Generation Funnels",
        description:
            "We develop optimized campaigns designed to guide potential patients toward consultation inquiries and stronger engagement with your cosmetic services.",
        icon: LeadGeneration
    },
    {
        title: "Audience Engagement & Community Growth",
        description:
            "We manage interactions, respond to inquiries, and strengthen relationships that build trust and improve your clinic’s online reputation consistently.",
        icon: CommunityBuilding
    },
    {
        title: "Performance Tracking & Insights",
        description:
            "We monitor engagement, reach, and lead performance while providing insights that help improve your social media marketing strategies continuously.",
        icon: AnalyticsPerformance
    },
];

const SELL_POINTS = [
    {
        number: "1",
        title: "Strategic Cosmetic Content Planning",
        description:
            "We create engaging content strategies focused on cosmetic procedures, patient interests, and brand visibility to strengthen your online presence.",
    },
    {
        number: "2",
        title: "Complete Social Media Management",
        description:
            "From content publishing to campaign management, we handle your entire social presence to maintain a professional and trusted cosmetic brand image.",
    },
    {
        number: "3",
        title: "Audience Engagement That Converts",
        description:
            "We manage interactions, build patient trust, and encourage meaningful engagement that supports consultation inquiries and long-term clinic growth.",
    },
];

const FAQ_DATA = [
    {
        question: "Why is social media important for plastic surgery clinics?",
        answer:
            "Social media helps plastic surgery clinics increase visibility, build patient trust, and showcase cosmetic procedures to attract more consultation inquiries online.",
    },
    {
        question: "Can social media marketing help generate cosmetic consultation leads?",
        answer:
            "Yes. Strategic social media campaigns help attract high-intent audiences, increase engagement, and encourage potential patients to book consultations.",
    },
    {
        question: "What type of content works best for plastic surgery marketing?",
        answer:
            "Procedure highlights, educational content, clinic updates, patient-focused visuals, and informative videos help improve engagement and strengthen brand credibility.",
    },
    {
        question: "Do you run paid social media campaigns for plastic surgeons?",
        answer:
            "Yes. We create targeted advertising campaigns designed to increase brand visibility, attract qualified leads, and improve consultation opportunities online.",
    },
    {
        question: "Can you manage all social media platforms for my clinic?",
        answer:
            "Absolutely. We handle content creation, posting, engagement, and campaign management across multiple social platforms to maintain a strong online presence.",
    },
];

const SocialMediaMarketing = () => {
    return (
        <>
            <HeroSection
                heading={"Plastic Surgery Social"}
                pinkHeading={"Builds Patient Interest"}
                description1={
                    "We help plastic surgery clinics strengthen visibility, connect with potential patients, and attract consultation inquiries through strategic social media marketing campaigns."
                }
                description2={
                    "From engaging content to targeted promotions, we create social media strategies that improve credibility, increase audience engagement, and keep your clinic visible online."
                }
                bannerImage="/plasticSurgeon/surgeon-social-banner.webp"
                altText={"plastic surgeon social media marketing increasing engagement and consultation inquiries"}
                imageHeight="h-[200px] md:h-[373px]"
                imageClass="object-contain object-center lg:min-h-[383px]"
            />
            <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
            <ServicesTwoGridSection
                background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
                headdingBlack="Social Media That Elevates"
                headingBlue="Plastic Surgery Brands"
                image="/plasticSurgeon/surgeons-media-clinic.webp"
                imageAltText={"plastic surgeon social media marketing improving engagement and online visibility"}
                paragraphs={SOCIAL_MEDIA_DESCRIPTION}
                headingBlueColor="text-secondary"
                headingBlackColor="text-white"
                limit={5}
                ctaText='Boost My Social Presence'
                marginBottom="lg:mb-19"
            />
            <MediaTimeEfforts
                title="Grow Your Plastic Surgery Brand"
                highlightedTitle="with Strategic Social Media"
                description1="Patients often explore social media before choosing a plastic surgery clinic and engage with brands they trust online."
                description2="We help you create engaging content, run targeted campaigns, and turn your social platforms into powerful consultation-generating channels."
                ctaText="Schedule a Strategy Call"
                image="/plasticSurgeon/media-elevation.webp"
                imageAlt="plastic surgeon social media marketing growth and patient engagement illustration"
            />
            <WorkWithCards
                title="Top Platforms for"
                highlightedTitle="Plastic Surgery Social Growth"
                cards={MARKETING_WORK_CARDS}
                showCards={3}
                ctaText="Grow My Social Presence"
                ctaHref=""
            />
            <ServiceGridSection
                title="Social Media Solutions"
                highlightedTitle="for Plastic Surgery Clinics"
                services={SOCIAL_ITEMS}
                ctaText="Grow My Social Presence"
                ctaHref=""
            />
            <BusineesSell
                title="Social Media That"
                highlightedTitle="Builds Cosmetic Brand Authority"
                ctaText="Boost My Social Presence"
                points={SELL_POINTS}
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