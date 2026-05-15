import React from 'react'
import HeroSection from '@/app/components/common/SubServices/HeroSection/HeroSection'
import ServicesTwoGridSection from '@/app/components/common/SubServices/ServicesTwoGridSection/ServicesTwoGridSection'
import TrustedBy from '@/app/components/common/TrustedBy/TrustedBy'
import WorkWithCards from '@/app/components/common/SubServices/WorkWithCards/WorkWithCards';
import WebsiteBrand from '@/app/components/common/SubServices/WebsiteBrand/WebsiteBrand';
import CustomGeneration from '@/app/components/Home/CustomGeneration';
import BusineesSell from '@/app/components/common/SubServices/BusineesSell/BusineesSell';
import ReachWithUs from '@/app/components/common/Services/ReachWithUs/ReachWithUs';
import FaqComponent from '@/app/components/common/SubServices/FaqComponent/FaqComponent';
import SecureScalable from "../../../../common/Icons/healthcare/secure-scalable-development.svg";
import ConversionDriven from "../../../../common/Icons/healthcare/conversion-driven-website-strategy.svg";
import IntegratedPatient from "../../../../common/Icons/healthcare/integrated-patient-inquiry-systems.svg";
import IntutivePatient from "../../../../common/Icons/healthcare/intuitive-patient-journey-design.svg";
import RespnsiveDevice from "../../../../common/Icons/healthcare/responsive-device-optimized-layouts.svg";
import SeamlessAppointment from "../../../../common/Icons/healthcare/seamless-appointment-experience.svg";
import BuiltForScalable from "../../../../common/Icons/healthcare/built-for-scalable-growth.svg";
import Credibility from "../../../../common/Icons/healthcare/credibility-driven-layouts.svg";
import FastTechnically from "../../../../common/Icons/healthcare/fast-technically-optimized.svg";
import PatientCentered from "../../../../common/Icons/healthcare/Patient-centered-design.svg";
import ResponsiveAcross from "../../../../common/Icons/healthcare/responsive-across-all-devices.svg";
import StrategyRequirment from "../../../../common/Icons/healthcare/strategy-requirement-mapping.svg";
import DeploymentContinuous from "../../../../common/Icons/healthcare/deployment-continuous-improvement.svg";
import ExperienceInterface from "../../../../common/Icons/healthcare/experience-interface-design.svg";
import PerformanceConversion from "../../../../common/Icons/healthcare/performance-conversion-optimization.svg";
import ScalableWebsite from "../../../../common/Icons/healthcare/scalable-website-development.svg";


const WEBSITE_POINTS = [
    "We create modern plastic surgery websites that strengthen your online presence, showcase your expertise, and build patient confidence from the first interaction online.",

    "Our responsive website solutions are designed to deliver smooth browsing experiences across devices while helping patients easily explore cosmetic procedures and consultation options.",

    "We focus on performance, usability, and visual appeal to build fast and secure plastic surgery websites that improve engagement and support long-term clinic growth."
];

const WORK_WITH_CARDS = [
    {
        title: "Patient-Focused Website Design",
        description:
            "We create visually engaging website designs that help potential patients explore procedures and build confidence in your plastic surgery clinic.",
        icon: PatientCentered
    },
    {
        title: "Trust & Credibility Optimization",
        description:
            "We structure your website with testimonials, procedure highlights, and trust-focused content that strengthens patient confidence online.",
        icon: Credibility
    },
    {
        title: "Responsive Multi-Device Experience",
        description:
            "Your plastic surgery website is optimized for mobile, tablet, and desktop to ensure smooth browsing experiences across every device.",
        icon: ResponsiveAcross
    },
    {
        title: "Fast & Secure Website Performance",
        description:
            "We develop high-performance websites with secure architecture, optimized speed, and clean code to improve usability and engagement.",
        icon: FastTechnically
    },
    {
        title: "Seamless Consultation Booking",
        description:
            "We design user-friendly consultation flows and clear calls-to-action that encourage patients to schedule appointments more easily online.",
        icon: SeamlessAppointment
    },
    {
        title: "Scalable Website Growth Solutions",
        description:
            "Our websites are built to support future growth, additional cosmetic services, and long-term expansion without performance limitations.",
        icon: BuiltForScalable
    }
];

const WEBSITE_FEATURE_CARDS = [
    {
        title: "Consultation-Focused Website Strategy",
        icon: ConversionDriven
    },
    {
        title: "Patient-Centered User Experience Design",
        icon: IntutivePatient
    },
    {
        title: "Responsive Multi-Device Website Layouts",
        icon: RespnsiveDevice
    },
    {
        title: "Secure & High-Performance Development",
        icon: SecureScalable
    },
    {
        title: "Integrated Consultation Inquiry Systems",
        icon: IntegratedPatient
    },
];

const STEPS = [
    {
        step: "01",
        title: "Understand Clinic Goals & Growth Objectives",
        description:
            "We analyze your cosmetic services, target audience, and business goals to create a website strategy focused on clinic growth and online visibility.",
        icon: StrategyRequirment
    },
    {
        step: "02",
        title: "Design Premium Patient User Experiences",
        description:
            "We create modern website layouts and patient-focused experiences that strengthen trust and encourage consultation inquiries across your website.",
        icon: ExperienceInterface
    },
    {
        step: "03",
        title: "Develop Responsive Website Solutions",
        description:
            "We build fast, secure, and responsive plastic surgery websites that deliver smooth functionality across desktop, tablet, and mobile devices seamlessly online.",
        icon: ScalableWebsite
    },
    {
        step: "04",
        title: "Optimize Conversions & Performance",
        description:
            "We improve website speed, navigation, and conversion elements to help transform visitors into qualified cosmetic consultation inquiries and patient bookings online.",
        icon: PerformanceConversion
    },
    {
        step: "05",
        title: "Support Long-Term Website Growth",
        description:
            "We provide ongoing updates, technical support, and website improvements to maintain strong performance and support long-term clinic growth.",
        icon: DeploymentContinuous
    },
];

const DEFAULT_POINTS = [
    {
        number: "1",
        title: "Custom Websites for Plastic Surgeons",
        description:
            "We design plastic surgery websites tailored to your procedures, patient audience, and clinic goals to create a strong online presence.",
    },
    {
        number: "2",
        title: "Premium Patient Website Experience",
        description:
            "Our websites provide smooth navigation, responsive layouts, and consultation-focused journeys that encourage patients to take action confidently.",
    },
    {
        number: "3",
        title: "Built for Long-Term Clinic Growth",
        description:
            "We develop scalable website solutions that support future services, increased traffic, and long-term growth for your plastic surgery clinic.",
    },
];

const FAQ_DATA = [
    {
        question: "Why should plastic surgeons invest in a professional website?",
        answer:
            "A professional website helps plastic surgery clinics build trust, showcase expertise, and create strong first impressions that encourage consultation inquiries.",
    },
    {
        question: "Can a custom website help increase cosmetic consultations?",
        answer:
            "Yes. Conversion-focused website designs improve user experience, strengthen credibility, and guide potential patients toward booking consultations online.",
    },
    {
        question: "Will my plastic surgery website be mobile-friendly?",
        answer:
            "Absolutely. We create fully responsive websites that provide smooth browsing experiences across desktop, tablet, and mobile devices for every visitor.",
    },
    {
        question: "Do you create custom website designs for cosmetic procedures?",
        answer:
            "Yes. We design customized plastic surgery websites tailored to your procedures, clinic branding, patient audience, and long-term business goals.",
    },
    {
        question: "Do you provide website maintenance and ongoing support?",
        answer:
            "Yes. We offer continuous updates, technical support, and website improvements to keep your plastic surgery website secure and optimized consistently.",
    },
];

const WebsiteDesignDevelopment = () => {
    return (
        <>
            <HeroSection
                heading={"Plastic Surgery Websites"}
                pinkHeading={"That Build Trust"}
                description1={
                    "Your website plays a major role in how potential patients view your clinic, so we design modern plastic surgery websites that highlight expertise and encourage consultation inquiries."
                }
                description2={
                    "From responsive design to seamless functionality, we create plastic surgery websites that improve credibility, enhance patient experience, and support long-term clinic growth."
                }
                bannerImage="/plasticSurgeon/surgeon-design-banner.webp"
                altText={"plastic surgeon website design and development services that build patient trust"}
                imageHeight="h-[200px] md:h-[373px]"
            />
            <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
            <ServicesTwoGridSection
                background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
                headdingBlack="Plastic Surgery Website Design"
                headingBlue="Built for Clinic Growth"
                image="/plasticSurgeon/surgeon-clinic.webp"
                imageAltText="plastic surgeon website design and development with responsive layout and patient-focused experience"
                paragraphs={WEBSITE_POINTS}
                headingBlueColor="text-secondary"
                headingBlackColor="text-white"
                limit={5}
                ctaText='Build Your Plastic Surgery Website'
            />
            <WorkWithCards
                title="Professional Plastic Surgery Websites"
                highlightedTitle="Designed for Patient Conversions"
                description="Your plastic surgery website should do more than showcase services—it should build trust, highlight expertise, and encourage visitors to schedule consultations with confidence."
                cards={WORK_WITH_CARDS}
                showCards={2}
                ctaText="Talk to a Website Specialist"
                ctaHref=""
                padding='py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20'
            />
            <WebsiteBrand
                titleStart="Build Plastic Surgery Websites That"
                highlightedTitle="Increase Consultation Inquiries"
                description="Your website should reflect the quality of your cosmetic services while building trust with potential patients. We design and develop plastic surgery websites that combine modern visuals, smooth user experiences, and conversion-focused functionality to support long-term clinic growth."
                ctaText="Book a Website Strategy Call"
                ctaHref=""
                cards={WEBSITE_FEATURE_CARDS}
            />

            <CustomGeneration
                headdingBlack="Our Process for"
                headingBlue="Plastic Surgery Website Growth"
                steps={STEPS}
                showCtaButton={true}
                ctaText="Get My Free Website Plan"
            />
            <BusineesSell
                titleStart="Helping Plastic Surgery Clinics"
                highlightedTitle="Grow With Better Websites"
                points={DEFAULT_POINTS}
                ctaText="Talk With a Website Expert"
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

export default WebsiteDesignDevelopment