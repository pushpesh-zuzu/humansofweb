import HeroSection from "@/app/components/common/SubServices/HeroSection/HeroSection";
import TrustedBy from "@/app/components/common/TrustedBy/TrustedBy";
import ReachWithUs from "@/app/components/common/Services/ReachWithUs/ReachWithUs";
import BusineesSell from "@/app/components/common/SubServices/BusineesSell/BusineesSell";
import FaqComponent from "@/app/components/common/SubServices/FaqComponent/FaqComponent";
import ServiceGridSection from "@/app/components/common/SubServices/ServiceGridSection/ServiceGridSection";
import ServicesTwoGridSection from "@/app/components/common/SubServices/ServicesTwoGridSection/ServicesTwoGridSection";
import WorkWithCards from "@/app/components/common/SubServices/WorkWithCards/WorkWithCards";
import reviewGeneration from '@/app/components/common/Icons/ReputationManagement/review-generation.svg'
import reviewMonitoring from '@/app/components/common/Icons/ReputationManagement/review-monitoring.svg'
import localReputation from '@/app/components/common/Icons/ReputationManagement/local-reputation.svg'
import negativeFeedback from '@/app/components/common/Icons/ReputationManagement/negative-feedback.svg'
import patientEngagement from '@/app/components/common/Icons/ReputationManagement/patient-engagement.svg'
import reputationReporting from '@/app/components/common/Icons/ReputationManagement/reputation-reporting.svg'

import localReputationBoost from '@/app/components/common/Icons/ReputationManagement/local-reputation-boost.svg'
import patients from '@/app/components/common/Icons/ReputationManagement/patients.svg'
import positiveReview from '@/app/components/common/Icons/ReputationManagement/positiveReview.svg'
import reputationInsight from '@/app/components/common/Icons/ReputationManagement/reputationInsights.svg'
import reviewMonitoringDetails from '@/app/components/common/Icons/ReputationManagement/reviewMonitoringdetails.svg'
import smartReviewResponse from '@/app/components/common/Icons/ReputationManagement/smartReviewResponse.svg'


const REPUTATION_DESCRIPTION = [
    "Patients often read reviews and research clinics online before choosing a plastic surgeon, making a trusted reputation essential for attracting consultation inquiries.",

    "We help plastic surgery clinics manage reviews, strengthen credibility, and build a professional online image that creates stronger patient confidence online.",

    "Our reputation management strategies focus on improving patient feedback, increasing positive engagement, and maintaining a consistent and trustworthy digital presence.",

    "The result is a strong online reputation that improves visibility, builds patient trust, and supports long-term plastic surgery clinic growth."
];

const MARKETING_WORK_CARDS = [
    {
        title: "Patient Trust Review Strategies",
        description:
            "We help your clinic build stronger patient confidence through authentic reviews that improve credibility and strengthen your online reputation.",
        icon: reviewGeneration
    },
    {
        title: "Multi-Platform Reputation Monitoring",
        description:
            "We monitor patient feedback across major review platforms to maintain a positive and professional image for your cosmetic brand.",
        icon: reviewMonitoring
    },
    {
        title: "Strategic Negative Review Handling",
        description:
            "Our team responds to negative feedback professionally to protect your clinic’s image and maintain trust with future consultation leads.",
        icon: negativeFeedback
    },
    {
        title: "Local Brand Visibility Enhancement",
        description:
            "We improve your clinic’s visibility across local search platforms and directories to attract more nearby cosmetic surgery patients.",
        icon: localReputation
    },
    {
        title: "Professional Patient Communication",
        description:
            "We manage online interactions and patient responses to create stronger relationships and improve overall brand perception consistently.",
        icon: patientEngagement
    },
    {
        title: "Online Reputation Performance Reports",
        description:
            "We provide reputation insights, patient sentiment tracking, and review analysis to support stronger clinic growth and online credibility.",
        icon: reputationReporting
    }
];

const DATA = [
    {
        title: "Trusted Patient Review Management",
        description:
            "We help plastic surgery clinics build stronger credibility through authentic patient reviews that improve trust and online reputation consistently.",
        icon: positiveReview
    },
    {
        title: "24/7 Reputation Monitoring",
        description:
            "Our team monitors reviews and patient feedback across platforms to maintain a positive and professional cosmetic brand image online.",
        icon: reviewMonitoringDetails
    },
    {
        title: "Strategic Review Response Support",
        description:
            "We create professional responses to patient feedback that strengthen trust, improve credibility, and protect your clinic’s online reputation.",
        icon: smartReviewResponse
    },
    {
        title: "Local Reputation Visibility Growth",
        description:
            "We optimize your clinic’s presence across Google and local platforms to help attract more nearby cosmetic consultation inquiries online.",
        icon: localReputationBoost
    },
    {
        title: "Patient Communication Management",
        description:
            "We manage patient interactions and online engagement strategies that improve relationships and strengthen confidence in your cosmetic services.",
        icon: patients
    },
    {
        title: "Reputation Insights & Performance Tracking",
        description:
            "We provide detailed reputation insights and review analytics that support smarter decisions and long-term plastic surgery clinic growth.",
        icon: reputationInsight
    },
];

const SELL_POINTS = [
    {
        number: "1",
        title: "Strong Cosmetic Brand Reputation",
        description:
            "We help plastic surgery clinics build a professional online image that increases credibility and strengthens patient trust across digital platforms.",
    },
    {
        number: "2",
        title: "Professional Review Management Support",
        description:
            "We manage patient reviews, monitor feedback, and maintain positive communication that protects and strengthens your clinic’s online reputation.",
    },
    {
        number: "3",
        title: "Focused on Trust & Consultation Growth",
        description:
            "Our reputation strategies help improve patient confidence, strengthen online visibility, and support long-term cosmetic consultation growth consistently.",
    },
];

const FAQ_DATA = [
    {
        question: "Why is reputation management important for plastic surgery clinics?",
        answer:
            "Patients often research reviews and online feedback before choosing a plastic surgeon, making a strong reputation essential for building trust and attracting consultations.",
    },
    {
        question: "Can reputation management improve cosmetic consultation inquiries?",
        answer:
            "Yes, positive reviews and a professional online presence help increase patient confidence and encourage more consultation inquiries for cosmetic procedures.",
    },
    {
        question: "How do you handle negative reviews for plastic surgery clinics?",
        answer:
            "We respond to negative feedback professionally and strategically to protect your clinic’s reputation while maintaining patient trust and brand credibility online.",
    },
    {
        question: "Do you monitor reviews across multiple online platforms?",
        answer:
            "Absolutely. We monitor patient feedback across Google, social media, and review platforms to maintain a strong and positive clinic reputation consistently.",
    },
    {
        question: "Can reputation management help build long-term patient trust?",
        answer:
            "Yes, consistent review management and positive patient engagement help strengthen credibility and support long-term growth for your plastic surgery clinic.",
    },
];

const ReputationManagement = () => {
    return (
        <>
            <HeroSection
                heading={"Reputation Management That"}
                pinkHeading={"Patient Confidence"}
                description1={
                    "We help plastic surgery clinics build a trusted online reputation, improve credibility, and create a positive brand image that attracts consultation inquiries."
                }
                description2={
                    "From review management to reputation strategies, we help your clinic maintain a professional online presence that supports long-term growth and patient trust."
                }
                bannerImage="/plasticSurgeon/surgeon-stars-banner.webp"
                altText={
                    "plastic surgeon reputation management improving patient trust and online credibility"
                }
                imageHeight="h-[200px] md:h-[373px]"
            />
            <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
            <ServicesTwoGridSection
                background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
                headdingBlack="Build a Reputation That"
                headingBlue="Patients Trust Online"
                image="/plasticSurgeon/surgeon-management.webp"
                paragraphs={REPUTATION_DESCRIPTION}
                headingBlueColor="text-secondary"
                headingBlackColor="text-white"
                limit={5}
                ctaText='Strengthen My Online Reputation'
                marginBottom="lg:mb-19"
                imageAltText="plastic surgeon reputation management improving patient trust and online credibility"
            />
            <WorkWithCards
                title="Advanced Reputation Management"
                highlightedTitle="for Plastic Surgery Clinics"
                cards={MARKETING_WORK_CARDS}
                showCards={3}
                ctaText="Build My Online Reputation"
                ctaHref=""
                padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20"
            />
            <ServiceGridSection
                title="Reputation Strategies That"
                highlightedTitle="Build Patient Confidence"
                services={DATA}
                ctaText="Strengthen My Online Reputation"
                ctaHref=""
            />
            <BusineesSell
                title="Why Plastic Surgery Clinics Trust"
                highlightedTitle="Our Reputation Management Strategies"
                ctaText="Improve My Online Reputation"
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
    );
};

export default ReputationManagement;
