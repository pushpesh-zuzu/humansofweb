import React from 'react'
import HeroSection from '@/app/components/common/SubServices/HeroSection/HeroSection'
import TrustedBy from '@/app/components/common/TrustedBy/TrustedBy'
import ServicesTwoGridSection from '@/app/components/common/SubServices/ServicesTwoGridSection/ServicesTwoGridSection'
import WorkWithCards from '@/app/components/common/SubServices/WorkWithCards/WorkWithCards';
import WebsiteBrand from '@/app/components/common/SubServices/WebsiteBrand/WebsiteBrand';
import CustomGeneration from '@/app/components/Home/CustomGeneration';
import BusineesSell from '@/app/components/common/SubServices/BusineesSell/BusineesSell';
import FaqComponent from '@/app/components/common/SubServices/FaqComponent/FaqComponent';
import ReachWithUs from '@/app/components/common/Services/ReachWithUs/ReachWithUs';

const OPHTHALMOLOGY_POINTS = [
    "At Humans of Web, we create professional ophthalmology websites designed to improve online visibility, attract new patients, and strengthen trust in your eye care practice.",

    "Our custom website solutions combine responsive design, SEO-friendly structure, and patient-focused functionality to help visitors easily explore treatments and schedule appointments.",

    "We build fast, secure, and scalable ophthalmology websites that enhance user experience, support long-term growth, and reflect the credibility of your medical expertise."
];

const WORK_WITH_CARDS = [
    {
        title: "Strategic Website Planning",
        description:
            "We begin by understanding your ophthalmology services, patient audience, and business goals to create a website strategy tailored to your practice.",
        // icon: PatientCentered
    },
    {
        title: "Custom UI/UX Design",
        description:
            "Our team designs visually engaging and user-friendly ophthalmology websites that reflect your brand identity and improve patient interaction.",
        // icon: Credibility
    },
    {
        title: "Responsive Website Development",
        description:
            "We develop fully responsive websites that provide a seamless browsing experience across desktop, tablet, and mobile devices.",
        // icon: ResponsiveAcross
    },
    {
        title: "SEO & Performance Optimization",
        description:
            "Every website is optimized for speed, search engines, and technical performance to improve online visibility and patient engagement.",
        // icon: FastTechnically
    },
    {
        title: "Appointment & Patient Features",
        description:
            "We integrate essential features like appointment forms, patient resources, and clear calls-to-action to support better patient conversions.",
        // Icon: SeamlessAppointment
    },
    {
        title: "Ongoing Support & Improvements",
        description:
            "Our team provides continuous website support, updates, and optimization to ensure your ophthalmology website stays secure, modern, and effective.",
        // icon: BuiltForScalable
    }
];

const OPHTHALMOLOGY_FEATURE_CARDS = [
    {
        title: "Custom Ophthalmology Web Design",
        // icon: ConversionDriven
    },
    {
        title: "Fast & Responsive Website Development",
        // icon: IntutivePatient
    },
    {
        title: "Patient-Focused Conversion Optimization",
        // icon: RespnsiveDevice
    },
    {
        title: "SEO-Friendly Content & Speed Optimization",
        // icon: SecureScalable
    },
    {
        title: "Website Automation & Ongoing Support",
        // icon: IntegratedPatient
    },
];

const STEPS = [
    {
        step: "01",
        title: "Practice Discovery & Planning",
        description:
            "We learn about your ophthalmology services, patient audience, and business goals to create a website strategy tailored to your practice needs.",
        // icon: StrategyRequirment
    },
    {
        step: "02",
        title: "Custom UI/UX Design Creation",
        description:
            "Our team designs modern website layouts and patient-friendly experiences that strengthen trust and encourage visitors to explore your services.",
        // icon: ExperienceInterface
    },
    {
        step: "03",
        title: "Responsive Website Development",
        description:
            "We develop fast, secure, and responsive ophthalmology websites that perform smoothly across desktop, tablet, and mobile devices.",
        // icon: ScalableWebsite
    },
    {
        step: "04",
        title: "SEO & Conversion Optimization",
        description:
            "We optimize website speed, search visibility, appointment flows, and calls-to-action to improve engagement and increase patient inquiries.",
        // icon: PerformanceConversion
    },
    {
        step: "05",
        title: "Launch, Support & Improvements",
        description:
            "After launch, we provide ongoing updates, monitoring, and performance improvements to keep your ophthalmology website secure and growth-focused.",
        // icon: DeploymentContinuous
    },
];

const DEFAULT_POINTS = [
    {
        number: "1",
        title: "Custom Websites for Eye Care Practices",
        description:
            "We design ophthalmology websites tailored to your services, patient audience, and practice goals to create a strong and professional online presence.",
    },
    {
        number: "2",
        title: "Seamless Patient Experience",
        description:
            "Our websites are built with intuitive navigation, responsive layouts, and clear appointment pathways that help patients easily connect with your practice.",
    },
    {
        number: "3",
        title: "Built for Long-Term Practice Growth",
        description:
            "We develop scalable ophthalmology websites that support future expansion, additional services, and ongoing performance improvements as your practice grows.",
    },
];

const FAQ_DATA = [
    {
        question: "What is ophthalmology website design?",
        answer:
            "Ophthalmology website design focuses on creating professional, patient-friendly websites for eye care practices that improve online visibility and encourage appointment bookings.",
    },
    {
        question: "Why does my ophthalmology practice need a custom website?",
        answer:
            "A custom website helps your practice build trust, showcase eye care services professionally, improve patient experience, and stand out from competitors online.",
    },
    {
        question: "Will my ophthalmology website be optimized for mobile devices?",
        answer:
            "Yes, at Humans of Web we create fully responsive ophthalmology websites that deliver a seamless browsing experience across desktop, tablet, and mobile devices.",
    },
    {
        question: "Can you improve the SEO performance of my ophthalmology website?",
        answer:
            "Absolutely. We build SEO-friendly websites optimized for speed, structure, and search visibility to help your ophthalmology practice attract more organic traffic.",
    },
    {
        question: "Do you provide ongoing support after website launch?",
        answer:
            "Yes, we offer continuous website maintenance, updates, security support, and performance optimization to keep your ophthalmology website running effectively.",
    },
];

const WebSiteDesignService = () => {
    return (
        <>
            <HeroSection
                heading={"Ophthalmology Websites That"}
                pinkHeading={"Drive Patient Growth"}
                description1={"At Humans of Web, we create modern ophthalmology websites designed to attract new patients, build credibility, and deliver a seamless online experience for your practice."}
                description2={"Our custom website designs combine professional visuals, user-friendly functionality, and conversion-focused strategies to help your eye care practice stand out and grow online."}
                bannerImage="/ophthalmology/ophthalmology-design-banner.webp"
                altText={"ophthalmology website design services focused on patient growth and online visibility"}
                imageHeight="h-[200px] md:h-[373px]"
            />
            <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
            <ServicesTwoGridSection
                background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
                headdingBlack="Custom Ophthalmology Website"
                headingBlue="Solutions That Perform"
                image="/ophthalmology/custom-ophthalmology.webp"
                imageAltText="ophthalmology website design and development with responsive user experience and patient engagement"
                paragraphs={OPHTHALMOLOGY_POINTS}
                headingBlueColor="text-secondary"
                headingBlackColor="text-white"
                limit={5}
                ctaText='Build Your Eye Care Website'
                marginBottom="lg:mb-19"
            />
            <WorkWithCards
                title="Professional Ophthalmology Website Design"
                highlightedTitle="Built for Practice Growth"
                description="At Humans of Web, we create ophthalmology websites that combine modern design, patient-focused functionality, and strong performance to help your practice attract, engage, and convert more patients online."
                cards={WORK_WITH_CARDS}
                showCards={2}
                ctaText="Build Your Ophthalmology Website"
                ctaHref=""
                backgroundImage="/IndustryExpertise/seo-banner.webp"
                padding='py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20'
            />
            <WebsiteBrand
                titleStart="Build Ophthalmology Websites That"
                highlightedTitle="Increase Patient Engagement"
                description="At Humans of Web, we create high-performing ophthalmology websites designed to improve patient experience, strengthen trust, and help your practice generate more appointment inquiries through modern design and optimized functionality."
                ctaText="Talk to a Website Expert"
                ctaHref=""
                cards={OPHTHALMOLOGY_FEATURE_CARDS}
            />
            <CustomGeneration
                headdingBlack="Our Process for"
                headingBlue="Ophthalmology Website Success"
                steps={STEPS}
                showCtaButton={true}
                ctaText="Start Your Website Project"
            />
            <BusineesSell
                titleStart="Helping Ophthalmology Practices"
                highlightedTitle="Grow With Better Websites"
                points={DEFAULT_POINTS}
                ctaText="Talk to Our Web Design Team"
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

export default WebSiteDesignService