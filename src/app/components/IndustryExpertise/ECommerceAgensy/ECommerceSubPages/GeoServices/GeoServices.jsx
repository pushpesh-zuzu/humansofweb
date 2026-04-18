import HeroSection from '@/app/components/common/SubServices/HeroSection/HeroSection'
import ServicesTwoGridSection from '@/app/components/common/SubServices/ServicesTwoGridSection/ServicesTwoGridSection'
import TrustedBy from '@/app/components/common/TrustedBy/TrustedBy'
import WorkWithCards from '@/app/components/common/SubServices/WorkWithCards/WorkWithCards'
import ServiceGridSection from '@/app/components/common/SubServices/ServiceGridSection/ServiceGridSection'
import CustomGeneration from '@/app/components/Home/CustomGeneration'
import FaqComponent from '@/app/components/common/SubServices/FaqComponent/FaqComponent'
import ReachWithUs from '@/app/components/common/Services/ReachWithUs/ReachWithUs'
import revenueIcon from '@/app/components/common/Icons/IndustryExpertise/SEORevenue.svg'
import BusineesSell from '@/app/components/common/SubServices/BusineesSell/BusineesSell'
import AiVisibility from '@/app/components/common/Icons/geoServices/AI-Visibility.svg'
import signals from '@/app/components/common/Icons/geoServices/Local-Signals.svg'
import smartProduct from '@/app/components/common/Icons/geoServices/Smart-Product.svg'
import structuredData from '@/app/components/common/Icons/geoServices/Structured-Data.svg'
import continuousGeo from '@/app/components/common/Icons/geoServices/Continuous-Geo.svg'
import aiDriven from '@/app/components/common/Icons/geoServices/AI-Driven.svg'
import aiOptimized from '@/app/components/common/Icons/geoServices/AI-Optimised.svg'
import structureSchema from '@/app/components/common/Icons/geoServices/Structured-Schema.svg'
import geoPerformance from '@/app/components/common/Icons/geoServices/GEO-Performance.svg'
import focused from '@/app/components/common/Icons/geoServices/Conversion-Focused.svg'
import authority from '@/app/components/common/Icons/geoServices/Authority-Brand.svg'
import review from '@/app/components/common/Icons/geoServices/Review-Reputation.svg'
import tracking from '@/app/components/common/Icons/geoServices/Continuous-Tracking.svg'

import step1 from '@/app/components/common/Icons/geoServices/step1.svg'
import step2 from '@/app/components/common/Icons/geoServices/step2.svg'
import step3 from '@/app/components/common/Icons/geoServices/step3.svg'
import step4 from '@/app/components/common/Icons/geoServices/step4.svg'
import step5 from '@/app/components/common/Icons/geoServices/step5.svg'

const geoService = [
    "At Humans of Web, our Generative Engine Optimization (GEO) services help your eCommerce store stay visible in the era of AI-powered search and discovery.",
    "We combine structured data, advanced keyword strategies, and technical SEO with AI-focused optimisation to align your content with modern search intent.",
    "Our approach ensures your brand appears in AI-driven results like Google AI Overviews, voice search, and other intelligent search experiences where users are actively exploring.",
    "Using data-driven insights and evolving technologies, we position your products effectively, optimising not just for search engines but for how people search today and tomorrow."
];

const GEO_WORK_CARDS = [
    {
        title: "AI-First Visibility",
        description: "We optimise your catalog and storefront for generative engine results, voice search, and AI-powered discovery so customers find you earlier in the shopping journey.",
        icon: AiVisibility,
    },
    {
        title: "Local & Intent Signals",
        description: "Our GEO work combines local search signals with buyer intent to put your products in front of customers actively exploring relevant categories and solutions.",
        icon: signals,
    },
    {
        title: "Smart Product Discovery",
        description: "We map product attributes, categories, and search intent so your store surfaces the right items in modern search experiences and AI recommendations.",
        icon: smartProduct,
    },
    {
        title: "Structured Data Optimisation",
        description: "We implement advanced structured data to help AI engines better understand your products, improving visibility in rich results and AI-generated responses.",
        icon: structuredData,
    },
    {
        title: "Continuous GEO Enhancement",
        description: "We monitor performance, refine strategies, and adapt to evolving AI search trends to ensure your store stays competitive and consistently visible.",
        icon: continuousGeo,
    }
];

const GEO_SERVICE_GRID_ITEMS = [
    {
        title: "AI-Driven Keyword Intelligence",
        description: "We identify conversational, long-tail, and intent-based search queries using AI insights, helping your brand align with how users interact with modern search engines and assistants.",
        icon: aiDriven,
    },
    {
        title: "AI-Optimised Content Strategy",
        description: "We create high-quality, user-focused content that is structured for both humans and AI systems, ensuring better visibility across generative search results and discovery platforms.",
        icon: aiOptimized,
    },
    {
        title: "Structured Data & Schema Enhancement",
        description: "We implement advanced schema markup to help AI engines clearly understand your content, improving your chances of appearing in rich results, snippets, and AI-generated answers.",
        icon: structureSchema,
    },
    {
        title: "GEO Performance Audits",
        description: "We analyse your website’s visibility across AI-driven platforms, reviewing technical SEO, content performance, and discoverability to uncover opportunities for improvement and growth.",
        icon: geoPerformance,
    },
    {
        title: "Conversion-Focused Optimisation",
        description: "We optimise your site experience, product pages, and user journey to convert high-intent visitors into customers, maximising the value of your traffic.",
        icon: focused,
    },
    {
        title: "Authority & Brand Trust Building",
        description: "We strengthen your brand’s credibility through expert content, internal linking, and strategic distribution, helping AI engines recognise your site as a trusted source.",
        icon: authority,
    },
    {
        title: "Review & Reputation Signals",
        description: "We enhance your online reputation by encouraging authentic customer reviews and user-generated content, improving trust signals for both users and AI-driven recommendations.",
        icon: review,
    },
    {
        title: "Continuous Tracking & Insights",
        description: "We monitor your performance across AI search, track visibility metrics, and refine strategies using real-time data to ensure consistent improvement and long-term success.",
        icon: tracking,
    },
];

const GEO_STEPS = [
    {
        step: "01",
        title: "Analyze Your Search Visibility",
        description: "We assess how your store currently appears in organic, local, and AI-driven search channels to uncover key gaps and potential opportunity areas.",
        icon: step1,
    },
    {
        step: "02",
        title: "Optimize Product Search Signals",
        description: "We refine titles, categories, metadata, and schema to improve how products are better understood by search engines, making discovery easier.",
        icon: step2,
    },
    {
        step: "03",
        title: "Improve AI Relevance",
        description: "We align copy, FAQs, and product details with modern search intent, helping your store show up in AI-generated discovery and answer results.",
        icon: step3,
    },
    {
        step: "04",
        title: "Strengthen Conversion Paths",
        description: "From landing page flow to product discovery, we make the path from search to checkout clearer, faster, and more compelling for every user.",
        icon: step4,
    },
    {
        step: "05",
        title: "Measure & Scale Visibility",
        description: "We monitor new visibility signals, conversion trends, and performance data so your GEO strategy keeps improving over time.",
        icon: step5,
    },
];

const FAQ_DATA = [
    {
        question: "What is Generative Engine Optimization (GEO)?",
        answer: "Generative Engine Optimization (GEO) is the process of optimizing your e-commerce content so AI platforms like ChatGPT and voice assistants can accurately understand, recommend, and display your products in relevant user queries.",
    },
    {
        question: "How does GEO improve product visibility?",
        answer: "GEO aligns your website’s content, structure, and data with how AI systems interpret search intent, helping your products appear in AI-generated answers, recommendations, and conversational search results.",
    },
    {
        question: "Why is GEO important for e-commerce businesses?",
        answer: "As more users rely on AI tools and voice assistants for product discovery, GEO ensures your store appears as a top recommendation when customers search using platforms like Siri or Alexa.",
    },
    {
        question: "What are the key benefits of GEO services?",
        answer: "GEO increases your product visibility, attracts high-intent buyers, and improves conversions by making your content optimized for AI-driven platforms, voice search, and generative search experiences.",
    },
    {
        question: "How is GEO different from traditional SEO?",
        answer: "Traditional SEO focuses on ranking in search engines, while GEO focuses on making your content appear directly within AI-generated responses, helping you reach users in modern search environments.",
    },
    {
        question: "Does GEO work with my existing SEO strategy?",
        answer: "Yes, GEO complements your current SEO efforts by enhancing your content and technical setup for AI platforms, without affecting your existing rankings or ongoing optimization strategies.",
    },
];

const DEFAULT_POINTS = [
    {
        number: "1",
        title: "Generative Search Expertise",
        description:
            "We optimize your content for AI-driven platforms like ChatGPT and Google SGE, helping your brand appear directly in generated answers.",
    },
    {
        number: "2",
        title: "Tailored GEO Strategies",
        description:
            "Our GEO strategies are customized to your business, aligning content, structure, and intent with how AI systems understand user queries.",
    },
    {
        number: "3",
        title: "Performance You Can Measure",
        description:
            "We track visibility across AI responses, featured snippets, and voice search to ensure your content drives real engagement and conversions.",
    },
];

const GeoServices = () => {
    return (
        <>
            <HeroSection
                heading={"E-Commerce GEO"}
                pinkHeading={"Optimization Services"}
                description1={"As the digital landscape evolves, relying only on traditional SEO is no longer enough to maintain strong online visibility and stay competitive."}
                description2={"With AI-driven and generative search engines rising, GEO ensures your business stays discoverable, relevant, and visible across modern search experiences."}
                bannerImage="/geoServices/geo-banner.svg"
                altText={"ai driven search optimization for ecommerce visibility and discoverability"}
            />
            <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
            <ServicesTwoGridSection
                background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
                headdingBlack="Future-Ready eCommerce"
                headingBlue="GEO Services"
                image="/geoServices/geo-engine.webp"
                paragraphs={geoService}
                headingBlueColor="text-secondary"
                headingBlackColor="text-white"
                limit={5}
                ctaText='Upgrade to GEO Today'
            />
            <WorkWithCards
                title="Why GEO Matters"
                highlightedTitle="for Modern Stores"
                description="GEO helps your eCommerce business be found by the customers and AI systems that matter most today—before competitors take the top discovery spots."
                cards={GEO_WORK_CARDS}
                showCards={3}
                ctaText="Get Your GEO Audit"
                ctaHref=""
                backgroundImage="/IndustryExpertise/eCommerce/marketAnalyzerImage.webp"
                padding='py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20'
            />
            <ServiceGridSection
                title="Our GEO Services Built for"
                highlightedTitle="Measurable Growth"
                services={GEO_SERVICE_GRID_ITEMS}
                ctaText="Get free consultation"
                ctaHref=""
            />
            <CustomGeneration
                headdingBlack="How We Build"
                headingBlue="GEO Momentum"
                steps={GEO_STEPS}
                showCtaButton={true}
                ctaText="Book a GEO Strategy Call"
            />
            <BusineesSell
                titleStart="AI Search Visibility"
                highlightedTitle="Optimized for GEO"
                points={DEFAULT_POINTS}
                ctaText="Get Found in AI Answers"
            />
            <FaqComponent
                title="Frequently asked questions"
                items={FAQ_DATA}
                defaultOpen={0}
            />
            <ReachWithUs />
        </>
    )
}

export default GeoServices
