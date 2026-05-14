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

const CHIROPRACTOR_POINTS = [
    "At Humans of Web, we design modern chiropractic websites that help clinics build credibility, attract new patients, and establish a strong online presence.",

    "Our custom chiropractic website solutions focus on responsive layouts, seamless navigation, and patient-friendly experiences that encourage appointment inquiries.",

    "We develop SEO-optimized chiropractic websites designed to improve search visibility, increase engagement, and support long-term clinic growth.",

    "Our team creates fast, secure, and scalable websites that reflect your chiropractic expertise while delivering a smooth experience across all devices."
];

const WORK_WITH_CARDS = [
    {
        title: "Chiropractic Brand Strategy",
        description:
            "We create website strategies that align with your chiropractic services, clinic goals, and patient expectations to build a strong digital presence.",
    },
    {
        title: "Modern Website Interface Design",
        description:
            "Our team designs clean and engaging website interfaces that improve navigation, enhance credibility, and create better patient experiences.",
    },
    {
        title: "Mobile-Friendly Development",
        description:
            "We develop responsive chiropractic websites that deliver smooth performance and accessibility across desktop, tablet, and mobile devices.",
    },
    {
        title: "Search Visibility Optimization",
        description:
            "Our websites are optimized for SEO, fast loading speed, and technical performance to improve online discoverability and user engagement.",
    },
    {
        title: "Patient Conversion Features",
        description:
            "We integrate appointment booking forms, contact options, and clear calls-to-action that encourage visitors to connect with your clinic.",
    },
    {
        title: "Website Maintenance & Growth",
        description:
            "We provide ongoing website support, updates, and improvements to keep your chiropractic website secure, modern, and growth-focused.",
    }
];

const CHIROPRACTOR_FEATURE_CARDS = [
    {
        title: "Custom Chiropractic Website Design",
    },
    {
        title: "Responsive & High-Speed Development",
    },
    {
        title: "Patient Engagement Focused Experiences",
    },
    {
        title: "SEO & Performance Optimization",
    },
    {
        title: "Website Support & Growth Solutions",
    },
];

const STEPS = [
    {
        step: "01",
        title: "Understand Your Clinic Goals",
        description:
            "We analyze your chiropractic services, target audience, and business objectives to create a website strategy aligned with your clinic growth goals.",
    },
    {
        step: "02",
        title: "Design Engaging User Experiences",
        description:
            "Our designers create modern and patient-focused website layouts that improve credibility, encourage interaction, and enhance the overall browsing experience.",
    },
    {
        step: "03",
        title: "Develop Responsive Websites",
        description:
            "We build fast, secure, and fully responsive chiropractic websites that deliver seamless performance across desktop, mobile, and tablet devices.",
    },
    {
        step: "04",
        title: "Optimize for SEO & Conversions",
        description:
            "We improve website visibility, loading speed, appointment flows, and conversion elements to help generate more patient inquiries and engagement.",
    },
    {
        step: "05",
        title: "Maintain & Improve Performance",
        description:
            "After launch, we provide continuous updates, technical support, and website improvements to ensure long-term growth and smooth performance.",
    },
];

const DEFAULT_POINTS = [
    {
        number: "1",
        title: "Tailored Websites for Chiropractic Clinics",
        description:
            "We create chiropractic websites designed around your treatments, clinic identity, and patient needs to build a strong and trustworthy digital presence.",
    },
    {
        number: "2",
        title: "Smooth & Patient-Friendly Navigation",
        description:
            "Our websites focus on easy navigation, responsive experiences, and clear appointment journeys that help visitors quickly connect with your clinic.",
    },
    {
        number: "3",
        title: "Designed for Scalable Clinic Growth",
        description:
            "We build flexible chiropractic websites that support future business growth, additional services, and long-term digital performance improvements.",
    },
];

const FAQ_DATA = [
    {
        question: "Why is a professional website important for chiropractic clinics?",
        answer:
            "A professional website helps chiropractic clinics build credibility, improve patient trust, and create a strong online presence that supports appointment growth.",
    },
    {
        question: "What features should a chiropractic website include?",
        answer:
            "A chiropractic website should include responsive design, appointment forms, service pages, contact information, SEO optimization, and patient-focused navigation.",
    },
    {
        question: "Can a chiropractic website help attract new patients?",
        answer:
            "Yes, a well-designed chiropractic website improves online visibility, enhances user experience, and helps convert visitors into potential patient inquiries.",
    },
    {
        question: "Do you create SEO-friendly chiropractic websites?",
        answer:
            "Yes, we develop chiropractic websites optimized for search engines, fast performance, and better online discoverability to support long-term digital growth.",
    },
    {
        question: "Do you provide website maintenance and updates?",
        answer:
            "Yes, we offer ongoing website support, performance monitoring, updates, and maintenance services to keep your chiropractic website secure and up to date.",
    },
];

const WebsiteDesignAndDevelopment = () => {
    return (
        <>
            <HeroSection
                heading={"Chiropractor Websites That"}
                pinkHeading={"Build Patient Trust"}
                description1={"At Humans of Web, we create professional chiropractic websites that strengthen your online presence, attract new patients, and showcase your expertise with confidence."}
                description2={"Our custom website solutions combine modern design, seamless functionality, and patient-focused experiences to help your chiropractic clinic grow in today’s digital landscape."}
                bannerImage="/chiropractor/chiropractor-website-section.webp"
                altText={"Chiropractor website design and development services focused on patient growth and online visibility"}
                imageHeight="h-[200px] md:h-[373px]"
                imageClass="object-contain object-center lg:min-h-[390px]"
            />
            <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
            <ServicesTwoGridSection
                background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
                headdingBlack="Professional Chiropractic Website"
                headingBlue="Designs That Convert"
                image="/chiropractor/chiropractor-website-banner.webp"
                imageAltText="chiropractor website design and development focused on patient engagement and online growth"
                paragraphs={CHIROPRACTOR_POINTS}
                headingBlueColor="text-secondary"
                headingBlackColor="text-white"
                limit={5}
                ctaText='Build Your Chiropractic Website'
                marginBottom="lg:mb-19"
            />
            <WorkWithCards
                title="Custom Chiropractic Website Solutions"
                highlightedTitle="Designed for Patient Engagement"
                description="At Humans of Web, we build chiropractic websites that combine modern design, seamless functionality, and conversion-focused experiences to help clinics strengthen their online presence and attract more patients."
                cards={WORK_WITH_CARDS}
                showCards={2}
                ctaText="Create Your Chiropractic Website"
                ctaHref=""
                // backgroundImage="/IndustryExpertise/seo-banner.webp"
                padding='py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20'
            />
            <WebsiteBrand
                titleStart="Create Chiropractic Websites That"
                highlightedTitle="Drive Practice Growth"
                description="At Humans of Web, we design and develop chiropractic websites focused on building credibility, improving patient interaction, and helping clinics attract more appointment opportunities through modern digital experiences."
                ctaText="Consult Our Web Experts"
                ctaHref=""
                cards={CHIROPRACTOR_FEATURE_CARDS}
            />
            <CustomGeneration
                headdingBlack="Our Approach to"
                headingBlue="Chiropractic Website Development"
                steps={STEPS}
                showCtaButton={true}
                ctaText="Launch Your Chiropractic Website"
            />
            <BusineesSell
                titleStart="Supporting Chiropractic Clinics"
                highlightedTitle="With High-Performing Websites"
                points={DEFAULT_POINTS}
                ctaText="Connect With Our Web Experts"
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

export default WebsiteDesignAndDevelopment