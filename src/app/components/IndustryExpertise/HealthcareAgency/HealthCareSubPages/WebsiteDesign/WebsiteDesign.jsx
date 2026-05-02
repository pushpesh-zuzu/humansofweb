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

const HEALTHCARE_POINTS = [
    "We design and develop modern healthcare websites that create a strong first impression, helping your practice stand out while building trust with patients from the moment they land on your site.",

    "Our websites are fully responsive and built with clean, scalable code, ensuring smooth performance across devices and allowing patients to easily explore services and book appointments.",

    "We focus on both user experience and technical performance, delivering fast, secure, and easy-to-manage websites that improve patient engagement and drive consistent growth."
];

const WORK_WITH_CARDS = [
    {
        title: "Patient-Centered Design",
        description:
            "We create intuitive designs that help patients easily explore your services, understand treatments, and confidently choose your healthcare practice.",
    },
    {
        title: "Credibility-Driven Layouts",
        description:
            "We structure your website with clear content, testimonials, and trust signals that build confidence and guide patients toward taking action.",
    },
    {
        title: "Responsive Across All Devices",
        description:
            "Your website is fully optimized for mobile, tablet, and desktop, ensuring a smooth experience for patients on any device.",
    },
    {
        title: "Fast & Technically Optimized",
        description:
            "We develop high-performance websites with clean code, fast load times, and secure architecture to improve user experience and retention.",
    },
    {
        title: "Seamless Appointment Experience",
        description:
            "We design user-friendly booking flows with clear calls-to-action, making it simple for patients to schedule appointments quickly.",
    },
    {
        title: "Built for Scalable Growth",
        description:
            "Our websites are designed to grow with your practice, allowing easy updates, new services, and future expansions without limitations.",
    }
];

const HEALTHCARE_FEATURE_CARDS = [
    {
        title: "Conversion-Driven Website Strategy",
    },
    {
        title: "Intuitive Patient Journey Design",
    },
    {
        title: "Responsive & Device-Optimized Layouts",
    },
    {
        title: "Secure & Scalable Development",
    },
    {
        title: "Integrated Patient Inquiry Systems",
    },
];

const STEPS = [
    {
        step: "01",
        title: "Strategy & Requirement Mapping",
        description:
            "We analyze your services, target audience, and business goals to define a clear website strategy focused on patient acquisition and long-term growth.",
    },
    {
        step: "02",
        title: "Experience & Interface Design",
        description:
            "We design intuitive layouts and user flows that guide patients seamlessly through your services while building trust and improving engagement.",
    },
    {
        step: "03",
        title: "Scalable Website Development",
        description:
            "We develop secure, high-performance websites using scalable architecture, ensuring fast loading, reliability, and smooth functionality across all devices.",
    },
    {
        step: "04",
        title: "Performance & Conversion Optimization",
        description:
            "We optimize speed, usability, and conversion elements like CTAs and forms to ensure your website effectively turns visitors into patient inquiries.",
    },
    {
        step: "05",
        title: "Deployment & Continuous Improvement",
        description:
            "After launch, we monitor performance, implement updates, and refine your website to keep it secure, optimized, and aligned with your growth goals.",
    },
];

const DEFAULT_POINTS = [
    {
        number: "1",
        title: "Tailored for Every Healthcare Practice",
        description:
            "From independent clinics to large healthcare groups, we design and develop websites that align with your services, patient needs, and growth objectives.",
    },
    {
        number: "2",
        title: "Unified Experience Across Locations",
        description:
            "For multi-location providers, we build structured platforms that maintain brand consistency while helping patients easily find, navigate, and contact the right facility.",
    },
    {
        number: "3",
        title: "Built to Scale With Your Growth",
        description:
            "Our websites are developed with scalability in mind, allowing you to seamlessly expand services, add locations, and enhance functionality as your practice evolves.",
    },
];

const FAQ_DATA = [
    {
        question: "What is included in healthcare website design and development?",
        answer:
            "Healthcare website design and development includes creating a visually engaging, fast, and secure website tailored to your services. It covers UI/UX design, responsive development, performance optimization, and features that help patients easily explore and connect with your practice.",
    },
    {
        question: "Can you upgrade or rebuild my existing healthcare website?",
        answer:
            "Yes. At Humans of Web, we redesign and rebuild existing websites to improve design quality, performance, and usability, helping you create a better patient experience and increase conversions.",
    },
    {
        question: "How do you ensure my website converts visitors into patients?",
        answer:
            "We focus on intuitive navigation, clear messaging, trust signals, and optimized booking flows. Every element is designed to guide visitors toward taking action and becoming patient inquiries.",
    },
    {
        question: "What factors affect the cost of a healthcare website?",
        answer:
            "The cost depends on your requirements, such as number of pages, features, integrations, and level of customization. We provide flexible solutions that align with your goals and deliver long-term value.",
    },
    {
        question: "How long does it take to launch a healthcare website?",
        answer:
            "Timelines vary based on complexity, but most healthcare websites are delivered within a few weeks. We follow a structured process to ensure quality, speed, and smooth delivery.",
    },
    {
        question: "Do you provide ongoing support after launch?",
        answer:
            "Yes. We offer continuous maintenance, updates, and performance improvements to keep your website secure, up-to-date, and aligned with your growth.",
    },
];

const WebsiteDesign = () => {
    return (
        <>
            <HeroSection
                heading={"Healthcare Websites That"}
                pinkHeading={"Build Patient Trust"}
                description1={"Your website is often the first impression patients have of your practice, so we design websites that build trust, highlight your expertise, and encourage visitors to book appointments."}
                description2={"From design to functionality, we build user-friendly healthcare websites that improve patient experience, strengthen credibility, and support your practice’s long-term growth."}
                bannerImage="/"
                altText={"healthcare websites that build patient trust"}
            />
            <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
            <ServicesTwoGridSection
                background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
                headdingBlack="Healthcare Website Design &"
                headingBlue="Development That Scales"
                image="/"
                imageAltText="healthcare website design and development showing responsive layout and patient-friendly experience"
                paragraphs={HEALTHCARE_POINTS}
                headingBlueColor="text-secondary"
                headingBlackColor="text-white"
                limit={5}
                ctaText='Start Your Website Transformation'
            />
            <WorkWithCards
                title="Trusted Healthcare Website Design"
                highlightedTitle="for Practices of All Sizes"
                description="Your website should do more than look professional—it should build trust and turn visitors into patients. We design and develop healthcare websites that clearly present your services, build credibility, and make it easy for patients to take action."
                cards={WORK_WITH_CARDS}
                showCards={2}
                ctaText="Talk to a Web Design Expert"
                ctaHref=""
                backgroundImage="/IndustryExpertise/seo-banner.webp"
                padding='py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20'
            />
            <WebsiteBrand
                titleStart="Create Digital Experiences That"
                highlightedTitle="Convert Patients Consistently"
                description="Your website should work as a growth engine for your practice. We design and develop healthcare websites that combine strong branding, intuitive navigation, and performance-driven architecture to turn visitors into qualified patient inquiries."
                ctaText="Schedule a Strategy Call"
                ctaHref=""
                cards={HEALTHCARE_FEATURE_CARDS}
            />

            <CustomGeneration
                headdingBlack="Our Process for"
                headingBlue="Healthcare Website Design & Development"
                steps={STEPS}
                showCtaButton={true}
                ctaText="Get My Free Website Plan"
            />
            <BusineesSell
                titleStart="Supporting Healthcare Providers at"
                highlightedTitle="Every Stage of Growth"
                points={DEFAULT_POINTS}
                ctaText="Speak With An Expert Now"
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

export default WebsiteDesign