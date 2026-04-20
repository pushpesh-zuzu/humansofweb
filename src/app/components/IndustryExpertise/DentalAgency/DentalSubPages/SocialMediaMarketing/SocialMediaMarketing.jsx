import ReachWithUs from "@/app/components/common/Services/ReachWithUs/ReachWithUs";
import BusineesSell from "@/app/components/common/SubServices/BusineesSell/BusineesSell";
import FaqComponent from "@/app/components/common/SubServices/FaqComponent/FaqComponent";
import HeroSection from "@/app/components/common/SubServices/HeroSection/HeroSection";
import MediaTimeEfforts from "@/app/components/common/SubServices/MediaTimeEfforts/MediaTimeEfforts";
import ServiceGridSection from "@/app/components/common/SubServices/ServiceGridSection/ServiceGridSection";
import ServicesTwoGridSection from "@/app/components/common/SubServices/ServicesTwoGridSection/ServicesTwoGridSection";
import WorkWithCards from "@/app/components/common/SubServices/WorkWithCards/WorkWithCards";
import TrustedBy from "@/app/components/common/TrustedBy/TrustedBy";
import fb from '@/app/components/common/Icons/socialMedia/fb.svg'
import googleBusinees from '@/app/components/common/Icons/socialMedia/google-businees.svg'
import Instagram from '@/app/components/common/Icons/socialMedia/Instagram.svg'
import Linkedin from '@/app/components/common/Icons/socialMedia/Linkedin.svg'
import whatsapp from '@/app/components/common/Icons/socialMedia/Whatsapp.svg'
import youtube from '@/app/components/common/Icons/socialMedia/Youtube.svg'
import paidSocial from '@/app/components/common/Icons/socialMedia/paid-social-campaign.svg'





const DENTAL_MEDIA_DESCRIPTION = [
    "Today, patients discover and evaluate dental clinics through social media, exploring services, reading reviews, and building trust before making a decision.",

    "At Humans of Web, we create strategic social media plans that combine engaging content, consistent posting, and targeted campaigns to grow your clinic’s visibility.",

    "We focus on attracting the right local audience with informative and persuasive content that highlights your expertise and encourages patient interaction and inquiries.",

    "The result is a strong, trustworthy social presence that builds credibility, increases engagement, and helps your dental practice attract and retain more patients."
];

const MARKETING_WORK_CARDS = [
    {
        title: "Facebook for Patient Engagement",
        description:
            "Connect with local patients through posts, reviews, and updates, making it easy for them to engage with your clinic and build trust.",
        icon: fb
    },
    {
        title: "Instagram for Visual Trust",
        description:
            "Showcase before-and-after results, clinic moments, and patient stories to build credibility and attract attention through visual content.",
        icon: Instagram
    },
    {
        title: "YouTube for Patient Education",
        description:
            "Share informative videos about treatments and dental care to educate patients, build authority, and influence decision-making.",
        icon: youtube
    },
    {
        title: "Google Business Profile",
        description:
            "Improve your local visibility with reviews, updates, and accurate information so patients can easily find and contact your clinic.",
        icon: googleBusinees
    },
    {
        title: "LinkedIn for Professional Presence",
        description:
            "Strengthen your clinic’s professional image by sharing expertise, updates, and achievements within a trusted business network.",
        icon: Linkedin
    },
    {
        title: "WhatsApp for Direct Communication",
        description:
            "Enable quick conversations, appointment inquiries, and support, making it easy for patients to reach your clinic instantly.",
        icon: whatsapp
    }
];

const DENTAL_SOCIAL_ITEMS = [
    {
        title: "Social Media Strategy",
        description:
            "Platform selection, audience targeting, content planning, and campaign direction to give your dental clinic a clear and consistent social presence.",
        icon: "/socialMediaMarketing/social-media-strategy.svg"
    },
    {
        title: "Content Planning",
        description:
            "Monthly content ideas including treatment education, patient stories, before-and-after results, and engaging posts tailored for dental audiences.",
        icon: "/socialMediaMarketing/content-planning.svg"
    },
    {
        title: "Paid Social Campaigns",
        description:
            "Targeted ad campaigns with the right messaging and creatives to attract local patients and drive appointment inquiries across platforms.",
        icon: "/socialMediaMarketing/paid-social-campaign.svg"
    },
    {
        title: "Appointment-Driven Campaigns",
        description:
            "Campaigns designed to promote offers, treatments, and seasonal services while encouraging patients to take action and book consultations.",
        icon: "/socialMediaMarketing/appointment-driven.svg"
    },
    {
        title: "Patient Engagement & Trust",
        description:
            "Strategies to build credibility through reviews, comments, patient interactions, and consistent communication that strengthens trust.",
        icon: "/socialMediaMarketing/patient-engagement-trust.svg"
    },
    {
        title: "Performance Tracking",
        description:
            "Clear reporting on reach, engagement, inquiries, and campaign results to continuously improve your social media performance.",
        icon: "/socialMediaMarketing/performance-tracking.svg"
    },
];

const DENTAL_SELL_POINTS = [
    {
        number: "1",
        title: "Consistent & Planned Content",
        description:
            "We manage your social media with a well-structured content calendar, ensuring your clinic stays active, relevant, and prepared without last-minute changes.",
    },
    {
        number: "2",
        title: "Complete Social Media Management",
        description:
            "From content creation and design to posting and community engagement, we handle everything to maintain a professional and trustworthy online presence.",
    },
    {
        number: "3",
        title: "Stronger Reputation & Patient Engagement",
        description:
            "We respond to inquiries, engage your audience, and build trust through consistent interaction, helping turn followers into loyal patients and referrals.",
    },
];

const faqData = [
    {
        question: "What is social media marketing for dental clinics?",
        answer:
            "Social media marketing for dental clinics involves promoting your services, building patient relationships, and creating a strong online presence through platforms like Facebook and Instagram. It includes content creation, posting, advertising, and engagement to attract and retain patients.",
    },
    {
        question: "Why is social media marketing important for dental practices?",
        answer:
            "Social media helps dental clinics stay visible, build trust, and connect with potential patients. It allows you to showcase your expertise, share patient experiences, and stay top-of-mind when someone needs dental care.",
    },
    {
        question: "How does social media marketing benefit dental clinics?",
        answer:
            "It helps increase brand awareness, improve patient engagement, and drive more inquiries and appointments. A strong social presence also builds credibility and encourages patient loyalty and referrals.",
    },
    {
        question: "Which social media platforms work best for dentists?",
        answer:
            "Platforms like Facebook, Instagram, and YouTube are highly effective for dental clinics. They allow you to share educational content, patient stories, and visual results that build trust and engagement.",
    },
    {
        question: "Can social media help attract new patients?",
        answer:
            "Yes. With the right content and targeted campaigns, social media can reach local audiences, generate interest, and bring in new patient inquiries for your clinic.",
    },
    {
        question: "How often should dental clinics post on social media?",
        answer:
            "Consistency is key. Posting a few times per week with a planned content strategy helps keep your clinic active, visible, and engaging without overwhelming your audience.",
    },
    {
        question: "What common mistakes should dentists avoid on social media?",
        answer:
            "Avoid inconsistent posting, overly promotional content, and ignoring patient engagement. A balanced approach with valuable content and active interaction delivers better long-term results.",
    },
    {
        question: "Why choose Humans of Web for dental social media marketing?",
        answer:
            "Humans of Web focuses on building trust-driven social media strategies tailored for dental clinics. We combine creative content, consistent posting, and targeted campaigns to help you attract patients, increase engagement, and grow your clinic’s online presence."
    }
];

const SocialMediaMarketing = () => {
    return (
        <>
            <HeroSection
                heading={"Dental Social Media That"}
                pinkHeading={"Builds Patient Trust"}
                description1={"We help dental clinics grow their reach, build brand awareness, and attract new patients through engaging content and targeted social media strategies."}
                description2={"From consistent posting to paid campaigns, Humans of Web creates social media strategies that keep your clinic visible, build trust, and drive patient engagement."}
                bannerImage="/SocialMediaMarketing/dental-socialMedia-banner.svg"
                altText={"dental social media marketing building patient trust and engagement"}
            />
            <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
            <ServicesTwoGridSection
                background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
                headdingBlack="Social Media That Expands"
                headingBlue="Your Dental Reach"
                image="/SocialMediaMarketing/dental-social-expand.svg"
                paragraphs={DENTAL_MEDIA_DESCRIPTION}
                headingBlueColor="text-secondary"
                headingBlackColor="text-white"
                limit={5}
                ctaText='Grow My Social Presence'
            />
            <MediaTimeEfforts
                title="Grow Your Dental Presence"
                highlightedTitle="with Strategic Social Campaigns"
                description1="Your patients are already exploring dental services on social media and looking for trusted clinics."
                description2="We help you create engaging content, run targeted campaigns, and turn your social media into a channel that builds trust and drives patient inquiries."
                ctaText="Book a Call"
                image="/SocialMediaMarketing/dental-social-campaign.svg"
                imageAlt="dental social media marketing growth and engagement illustration"
            />
            <WorkWithCards
                title="Top Platforms for"
                highlightedTitle="Dental Social Media Growth"
                cards={MARKETING_WORK_CARDS}
                showCards={3}
                ctaText="Build My Social Strategy"
                ctaHref=""
                backgroundImage="/IndustryExpertise/eCommerce/marketAnalyzerImage.webp"
            />
            <ServiceGridSection
                title="Social Media Services"
                highlightedTitle="for Dental Clinics"
                services={DENTAL_SOCIAL_ITEMS}
                ctaText="Start Social Growth"
                ctaHref=""
            />
            <BusineesSell
                title="Social Marketing That"
                highlightedTitle="Builds Trust & Patient Growth"
                ctaText="Grow My Social Channel"
                points={DENTAL_SELL_POINTS}
            />
            <FaqComponent
                title="Frequently asked questions"
                items={faqData}
                defaultOpen={0}
                position="mx-auto"
            />
            <ReachWithUs />
        </>
    );
};

export default SocialMediaMarketing;
