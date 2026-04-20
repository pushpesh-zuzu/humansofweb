import React from 'react'
import GraphFeb from '../../../../common/Icons/IndustryExpertise/graph-feb.svg'
import GraphJan from '../../../../common/Icons/IndustryExpertise/graph-jan.svg'
import GraphMar from '../../../../common/Icons/IndustryExpertise/graph-mar.svg'
import HeroSection from '../../../../common/SubServices/HeroSection/HeroSection'
import TrustedBy from '@/app/components/common/TrustedBy/TrustedBy'
import ServicesTwoGridSection from '@/app/components/common/SubServices/ServicesTwoGridSection/ServicesTwoGridSection'
import Interactivecontent from '@/app/components/common/SubServices/Interactivecontent/Interactivecontent'
import CustomGeneration from '@/app/components/Home/CustomGeneration'
import WorkWithCards from '@/app/components/common/SubServices/WorkWithCards/WorkWithCards'
import ServiceGridSection from '@/app/components/common/SubServices/ServiceGridSection/ServiceGridSection'
import ReachWithUs from '@/app/components/common/Services/ReachWithUs/ReachWithUs'
import FaqComponent from '@/app/components/common/SubServices/FaqComponent/FaqComponent'
// // import SeoServiceVideo from './SeoServiceVideo/SeoServiceVideo'
// import SeoPerformance from './SeoPerformance/SeoPerformance'
// // import SeoTipsSection from './SeoTipsSection/SeoTipsSection'
// import Interactivecontent from '@/app/components/common/SubServices/Interactivecontent/Interactivecontent'
// import SEO_STRATEGY_ITEMS from './SeoData/seoStrategyItems'
// import AnalyticsGraph from '@/app/components/common/SubServices/AnalyticsGraph/AnalyticsGraph'
// import WorkWithCards from '@/app/components/common/SubServices/WorkWithCards/WorkWithCards'
// import WORK_WITH_CARDS from './SeoData/workWithCardsData'
// import ServiceGridSection from '@/app/components/common/SubServices/ServiceGridSection/ServiceGridSection'
// import SERVICE_GRID_ITEMS from './SeoData/serviceGridData'
// import FaqComponent from '@/app/components/common/SubServices/FaqComponent/FaqComponent'
// import FAQ_DATA from './SeoData/faqData'
// import ReachWithUs from '@/app/components/common/Services/ReachWithUs/ReachWithUs'
// import CustomGeneration from '@/app/components/Home/CustomGeneration'
// import product from "../../../../common/Icons/IndustryExpertise/Product-Copy.svg";
// import optimize from "../../../../common/Icons/IndustryExpertise/Optimize-Category.svg";
// import improve from "../../../../common/Icons/IndustryExpertise/Improve-Product.svg";
// import trust from "../../../../common/Icons/IndustryExpertise/build-trust.svg";
// import keywords from "../../../../common/Icons/IndustryExpertise/Use-Keywords.svg";


// const SEO_GRAPH_IMAGES = [
//     { src: GraphJan, alt: 'January SEO performance graph' },
//     { src: GraphFeb, alt: 'February SEO performance graph' },
//     { src: GraphMar, alt: 'March SEO performance graph' },
// ]
// const STEPS = [
//     {
//         step: "01",
//         title: "Product Copy That Sells",
//         description: "Clear, helpful descriptions make it easier for shoppers to understand the product, compare options, and move toward checkout.",
//         icon: product,
//     },
//     {
//         step: "02",
//         title: "Optimize Category Pages",
//         description: "Strong category copy, clear headings, and strategic internal links help search engines better understand and rank your collections effectively.",
//         icon: optimize,
//     },
//     {
//         step: "03",
//         title: "Use Keywords With Buyer Intent",
//         description: "Target search terms your customers use when they are ready to buy, not just broad keywords with high search volume and low intent.",
//         icon: keywords,
//     },
//     {
//         step: "04",
//         title: "Improve Product Page Speed",
//         description: "Fast-loading product pages reduce drop-offs and help customers easily browse, compare products, and complete purchases smoothly with less friction overall.",
//         icon: improve,
//     },
//     {
//         step: "05",
//         title: "Build Trust With Content",
//         description: "Buying guides, comparison pages, and care tips build customer confidence while creating more entry points into your online store.",
//         icon: trust,
//     },
// ];

const dentalService = [
    "Dental SEO is one of the most effective ways to grow your practice because it helps you reach patients actively searching for treatments in your area.",
    "At Humans of Web, we create SEO strategies that turn searchers into visitors, visitors into booked appointments, and patients into long-term relationships.",
    "We build optimized service pages, local SEO strategies, content plans, and performance tracking focused on the key moments in your patient journey.",
    "The goal is simple: improve your visibility, attract the right patients at the right time, and grow your clinic with consistent, high-quality leads."
]

const DENTAL_SEO_STRATEGY_ITEMS = [
    {
        title: "Clinic SEO Audit",
        description:
            "With our in-depth SEO audit, we analyze your website structure, technical setup, local signals, and performance to uncover issues that may be limiting your clinic’s visibility and patient growth.",
        // icon: DetailedAuditIcon,

    },
    {
        title: "Local Competitor Research",
        description:
            "We study competing dental clinics in your area to understand their keyword strategy, content approach, and local rankings, then use those insights to build a stronger growth plan for your practice.",
        // icon: DetailedAuditIcon,

    },
    {
        title: "Patient-Focused Keywords",
        description:
            "We identify high-intent keywords patients use when searching for dental treatments, ensuring your clinic appears for the right services at the right time in their decision journey.",
        // icon: DetailedAuditIcon,

    },
    {
        title: "Service Page Optimization",
        description:
            "We create and improve service pages that clearly explain treatments, build trust, and help potential patients choose your clinic while sending strong relevance signals to search engines.",
        // icon: DetailedAuditIcon,

    },
    {
        title: "Content & Structure Optimization",
        description:
            "We refine existing content, headings, internal links, and page structure so your key service pages rank better and convert visitors into booked appointments.",
        // icon: DetailedAuditIcon,

    },
    {
        title: "Local SEO & Authority Building",
        description:
            "We strengthen your online presence through local SEO signals, directory listings, and authority-building strategies that help your clinic rank higher in local search results.",
        // icon: DetailedAuditIcon,

    },
];

const DENTAL_STEPS = [
    {
        step: "01",
        title: "Analyze Your Online Visibility",
        description: "We assess how your dental clinic appears across organic and local search results to identify gaps, missed opportunities, and areas for growth.",
    },
    {
        step: "02",
        title: "Optimize Service Search Signals",
        description: "We refine service pages, metadata, and structured data so search engines clearly understand your treatments and rank them for relevant patient searches.",
    },
    {
        step: "03",
        title: "Align With Patient Intent",
        description: "We improve content, FAQs, and treatment details to match what patients are actively searching for, helping your clinic appear in modern search and AI-driven results.",
    },
    {
        step: "04",
        title: "Improve Appointment Journeys",
        description: "From landing pages to contact forms, we streamline the path from search to booking, making it easier for patients to choose and contact your clinic.",
    },
    {
        step: "05",
        title: "Track & Grow Patient Leads",
        description: "We monitor rankings, local visibility, and appointment trends to continuously improve performance and scale your clinic’s patient acquisition over time.",
    },
];

const DENTAL_WORK_WITH_CARDS = [
    {
        title: "Dental SEO Experience",
        description:
            "We understand how patients search for dental treatments and use that insight to improve your visibility, increase inquiries, and drive more appointments.",
        // icon: InHouse,
    },
    {
        title: "Specialized SEO Team",
        description:
            "Our team handles strategy, content, local SEO, and technical optimization together, ensuring your clinic gets consistent and focused growth support.",
    },
    {
        title: "Clear & Honest Reporting",
        description:
            "You get straightforward updates, clear priorities, and actionable insights so you always know what’s working and where to improve.",
    },
    {
        title: "Patient-Focused Strategy",
        description:
            "We build strategies around real patient behavior, helping your clinic attract the right audience and convert them into long-term patients.",
    },
    {
        title: "Flexible Growth Approach",
        description:
            "We adapt our strategies to your clinic’s services, location, and goals, ensuring everything aligns with how you want to grow your practice.",
    },
    {
        title: "Local SEO Expertise",
        description:
            "We optimize your presence for local searches, maps, and directories so nearby patients can easily find and choose your clinic.",
    },
    {
        title: "Conversion-Driven Approach",
        description:
            "We focus not just on traffic, but on turning visitors into booked appointments through better user experience and clear patient journeys.",
    },
    {
        title: "Long-Term Growth Focus",
        description:
            "We build sustainable SEO strategies that continue to bring in new patients consistently, helping your clinic grow month after month.",
    }
];

const DENTAL_SERVICE_GRID_ITEMS = [
    {
        title: "Stronger Clinic Awareness",
        description:
            "When your clinic appears more often in local searches, more patients discover your services and begin to trust your brand.",
    },
    {
        title: "More Patient Appointments",
        description:
            "By improving rankings, service pages, and search intent targeting, we help generate more qualified appointment bookings for your clinic.",
    },
    {
        title: "Consistent Organic Traffic",
        description:
            "Our tailored dental SEO strategies drive relevant local traffic to your website, creating a steady flow of potential patients over time.",
    },
    {
        title: "Cost-Effective Growth",
        description:
            "Our SEO solutions are designed to fit your clinic’s goals and budget, helping you grow sustainably without relying only on paid ads.",
    },
    {
        title: "Better Local Visibility",
        description:
            "We optimize your clinic for local search and map listings so nearby patients can easily find and choose your services.",
    },
    {
        title: "Higher Patient Trust",
        description:
            "By improving your online presence, reviews, and content quality, we help build credibility that encourages patients to choose your clinic.",
    },
];

const FAQ_DATA = [
    {
        question: "How does SEO help my dental clinic grow?",
        answer:
            "SEO helps your clinic appear when patients search for dental treatments in your area. Better visibility means more website visits, more inquiries, and more booked appointments over time.",
    },
    {
        question: "Is dental SEO suitable for my clinic’s budget?",
        answer:
            "Yes. At Humans of Web, we tailor dental SEO strategies based on your clinic’s goals, services, and budget. We focus on high-impact areas first to deliver measurable results efficiently.",
    },
    {
        question: "How long does it take to see results from dental SEO?",
        answer:
            "SEO is a long-term strategy, but many clinics start seeing improvements in visibility and inquiries within a few months. Consistent optimization leads to steady patient growth over time.",
    },
    {
        question: "Can SEO help me get more local patients?",
        answer:
            "Absolutely. Local SEO ensures your clinic appears in nearby searches, maps, and location-based queries, helping you attract patients who are actively looking for dental services in your area.",
    },
    {
        question: "Why choose Humans of Web for dental SEO?",
        answer:
            "Humans of Web focuses on patient-driven strategies, transparent reporting, and long-term growth. We help dental clinics increase visibility, build trust, and convert visitors into loyal patients.",
    },
];
const SeoServices = () => {
    return (
        <>
            <HeroSection
                heading={"Dental SEO That"}
                pinkHeading={"Drives More Patients"}
                description1={"We help your clinic rank higher, reach the right patients, and turn search visibility into consistent appointments that drive measurable growth."}
                description2={"Our tailored SEO strategies focus on your services, location, and audience to build a growth plan that delivers lasting results and long-term success."}
                bannerImage="/"
                altText={"Dental SEO That Drives Patients"}
            />
            <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
            <ServicesTwoGridSection
                background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
                headdingBlack="Dental SEO Solutions"
                headingBlue="Built for Practice Growth"
                image="/"
                paragraphs={dentalService}
                headingBlueColor="text-secondary"
                headingBlackColor="text-white"
                limit={5}
                ctaText='Start Growing Your Clinic'
            />
            <Interactivecontent
                headingStart="SEO That Grows"
                headingEnd="Dental Practices"
                items={DENTAL_SEO_STRATEGY_ITEMS}
                ctaText="Book a free consultation"
                ctaHref=""
            />
            <CustomGeneration
                headdingBlack="Build Dental Pages That"
                headingBlue="Patients Trust"
                steps={DENTAL_STEPS}
            />
            <WorkWithCards
                title="Why Choose"
                highlightedTitle="Our Dental SEO Experts?"
                description=""
                cards={DENTAL_WORK_WITH_CARDS}
                showCards={3}
                ctaText="Get More Patients Today"
                ctaHref=""
                backgroundImage="/IndustryExpertise/seo-banner.webp"
            />
            <ServiceGridSection
                title="Everything Your Clinic Needs To"
                highlightedTitle="Grow Consistently"
                services={DENTAL_SERVICE_GRID_ITEMS}
                backgroundImage="/IndustryExpertise/seo-banner.webp"
                ctaText="Get More Patients Today"
                ctaHref=""
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

export default SeoServices
