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



const CHIROPRACTOR_MEDIA_DESCRIPTION = [
    "Patients often explore social media before choosing a chiropractic clinic, making a strong online presence essential for building trust and attracting new patients.",

    "At Humans of Web, we create customized social media strategies that combine engaging visuals, valuable content, and targeted campaigns to improve brand visibility.",

    "Our team focuses on sharing educational and patient-focused content that highlights your chiropractic expertise and encourages stronger audience interaction.",

    "The result is a professional social media presence that increases engagement, strengthens credibility, and helps your chiropractic clinic grow consistently online."
];

const MARKETING_WORK_CARDS = [
    {
        title: "Facebook for Local Patient Reach",
        description:
            "Connect with local audiences through educational posts, clinic updates, and community-focused content that strengthens patient trust and engagement.",
        icon: fb
    },
    {
        title: "Instagram for Brand Visibility",
        description:
            "Showcase chiropractic treatments, wellness tips, and clinic experiences through engaging visuals that attract attention and improve online presence.",
        icon: instagram
    },
    {
        title: "YouTube for Chiropractic Education",
        description:
            "Share informative videos about chiropractic care, posture improvement, and wellness guidance to build credibility and educate potential patients.",
        icon: youtube
    },
    {
        title: "Google Business Profile Management",
        description:
            "Improve local discoverability with optimized profiles, patient reviews, and regular updates that help people easily find your chiropractic clinic.",
        icon: googleBusinees
    },
    {
        title: "LinkedIn for Professional Authority",
        description:
            "Build a stronger professional presence by sharing chiropractic insights, achievements, and industry knowledge that increase brand credibility.",
        icon: linkdin
    },
    {
        title: "WhatsApp for Faster Patient Communication",
        description:
            "Simplify patient communication with instant messaging support for inquiries, appointment coordination, and quick responses to potential patients.",
        icon: whatsapp
    }
];

const CHIROPRACTOR_SOCIAL_ITEMS = [
    {
        title: "Customized Social Media Planning",
        description:
            "We develop social media strategies tailored to your chiropractic services, audience interests, and clinic goals to improve online visibility.",
        icon: SocialMedia
    },
    {
        title: "Creative Chiropractic Content",
        description:
            "Our team creates engaging posts, wellness content, treatment highlights, and educational updates that connect with potential patients online.",
        icon: HealthCareContent
    },
    {
        title: "Targeted Social Advertising",
        description:
            "We run focused social media advertising campaigns designed to increase brand awareness and attract qualified chiropractic patient inquiries.",
        icon: TargetedAdvertising
    },
    {
        title: "Patient Engagement Campaigns",
        description:
            "We create campaigns that encourage audience interaction, promote chiropractic services, and help convert followers into appointment leads.",
        icon: LeadGeneration
    },
    {
        title: "Online Community Management",
        description:
            "We manage comments, messages, and audience interactions to strengthen trust and maintain an active chiropractic social media presence.",
        icon: CommunityBuilding
    },
    {
        title: "Social Performance Tracking",
        description:
            "We monitor engagement, reach, and campaign results to optimize strategies and improve social media performance for your chiropractic clinic.",
        icon: AnalyticsPerformance
    },
];

const CHIROPRACTOR_SELL_POINTS = [
    {
        number: "1",
        title: "Consistent Chiropractic Branding",
        description:
            "We create content strategies that keep your chiropractic clinic visible, professional, and aligned with the interests of your target audience.",
    },
    {
        number: "2",
        title: "Complete Social Media Support",
        description:
            "From content planning and campaign management to audience interaction, we handle every aspect of your chiropractic social media presence.",
    },
    {
        number: "3",
        title: "Audience Engagement That Converts",
        description:
            "We build meaningful patient interactions through engaging content and active communication that encourages trust and appointment inquiries.",
    },
];

const FAQ_DATA = [
    {
        question: "Why should chiropractic clinics invest in social media marketing?",
        answer:
            "Social media marketing helps chiropractic clinics increase online visibility, connect with local audiences, and build trust with potential patients.",
    },
    {
        question: "Which social media platforms are best for chiropractors?",
        answer:
            "Facebook, Instagram, YouTube, and Google Business Profile are effective platforms for chiropractors to engage audiences and promote services.",
    },
    {
        question: "Can social media marketing generate chiropractic patient leads?",
        answer:
            "Yes, targeted social media strategies can attract local patients, improve engagement, and increase appointment inquiries for chiropractic clinics.",
    },
    {
        question: "What content works best for chiropractic social media?",
        answer:
            "Educational posts, wellness tips, treatment information, patient stories, and short videos help improve engagement and build credibility online.",
    },
    {
        question: "Do you manage social media campaigns for chiropractic clinics?",
        answer:
            "Yes, we handle content creation, campaign management, audience engagement, and performance optimization for chiropractic social media marketing.",
    },
];

const SocialMediaMarketing = () => {
    return (
        <>
            <HeroSection
                heading={"Chiropractor Social Media"}
                pinkHeading={"That Builds Patient Trust"}
                description1={
                    "We help chiropractic clinics grow their online presence, connect with local audiences, and attract patients through engaging social media strategies and creative content."
                }
                description2={
                    "From content creation to targeted campaigns, Humans of Web develops social media strategies that improve visibility, strengthen credibility, and encourage patient engagement."
                }
                bannerImage="/chiropractor/chiropractor-socialmedia-banner.webp"
                altText={
                    "Chiropractor social media marketing increasing patient engagement and online visibility"
                }
                imageHeight="h-[200px] md:h-[373px]"
                imageClass="object-contain object-center lg:min-h-[390px]"
            />
            <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
            <ServicesTwoGridSection
                background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
                headdingBlack="Social Media Strategies For"
                headingBlue="Chiropractic Growth"
                image="/chiropractor/chiropractor-social-section.webp"
                imageAltText={"chiropractor social media marketing improving patient engagement and online visibility"}
                paragraphs={CHIROPRACTOR_MEDIA_DESCRIPTION}
                headingBlueColor="text-secondary"
                headingBlackColor="text-white"
                limit={5}
                ctaText='Boost Your Social Reach'
                marginBottom=""
            />
            <MediaTimeEfforts
                title="Grow Your Chiropractic Presence"
                highlightedTitle="with Engaging Social Campaigns"
                description1="Patients often explore social media to discover chiropractic clinics, learn about treatments, and connect with trusted healthcare providers."
                description2="We help your clinic create engaging content, manage social platforms, and run targeted campaigns that strengthen credibility and attract patient inquiries."
                ctaText="Schedule a Strategy Call"
                image="/chiropractor/chiro-grow.webp"
                imageAlt="chiropractor social media marketing growth and patient engagement illustration"
            />
            <WorkWithCards
                title="Best Platforms for"
                highlightedTitle="Chiropractic Social Growth"
                cards={MARKETING_WORK_CARDS}
                showCards={3}
                ctaText="Grow Your Social Presence"
                ctaHref=""
            />
            <ServiceGridSection
                title="Social Media Solutions"
                highlightedTitle="for Chiropractic Clinics"
                services={CHIROPRACTOR_SOCIAL_ITEMS}
                ctaText="Boost Your Online Presence"
                ctaHref=""
            />
            <BusineesSell
                title="Social Media That"
                highlightedTitle="Strengthens Chiropractic Brands"
                ctaText="Grow My Chiropractic Presence"
                points={CHIROPRACTOR_SELL_POINTS}
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