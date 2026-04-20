import React from 'react'
import GraphFeb from '../../../../common/Icons/IndustryExpertise/graph-feb.svg'
import GraphJan from '../../../../common/Icons/IndustryExpertise/graph-jan.svg'
import GraphMar from '../../../../common/Icons/IndustryExpertise/graph-mar.svg'
import HeroSection from '../../../../common/SubServices/HeroSection/HeroSection'
import TrustedBy from '@/app/components/common/TrustedBy/TrustedBy'
// import SeoServiceVideo from './SeoServiceVideo/SeoServiceVideo'
import SeoPerformance from './SeoPerformance/SeoPerformance'
// import SeoTipsSection from './SeoTipsSection/SeoTipsSection'
import Interactivecontent from '@/app/components/common/SubServices/Interactivecontent/Interactivecontent'
import SEO_STRATEGY_ITEMS from './SeoData/seoStrategyItems'
import AnalyticsGraph from '@/app/components/common/SubServices/AnalyticsGraph/AnalyticsGraph'
import WorkWithCards from '@/app/components/common/SubServices/WorkWithCards/WorkWithCards'
import WORK_WITH_CARDS from './SeoData/workWithCardsData'
import ServiceGridSection from '@/app/components/common/SubServices/ServiceGridSection/ServiceGridSection'
import SERVICE_GRID_ITEMS from './SeoData/serviceGridData'
import FaqComponent from '@/app/components/common/SubServices/FaqComponent/FaqComponent'
import FAQ_DATA from './SeoData/faqData'
import ReachWithUs from '@/app/components/common/Services/ReachWithUs/ReachWithUs'
import CustomGeneration from '@/app/components/Home/CustomGeneration'
import product from "../../../../common/Icons/IndustryExpertise/Product-Copy.svg";
import optimize from "../../../../common/Icons/IndustryExpertise/Optimize-Category.svg";
import improve from "../../../../common/Icons/IndustryExpertise/Improve-Product.svg";
import trust from "../../../../common/Icons/IndustryExpertise/build-trust.svg";
import keywords from "../../../../common/Icons/IndustryExpertise/Use-Keywords.svg";


const SEO_GRAPH_IMAGES = [
    { src: GraphJan, alt: 'January SEO performance graph' },
    { src: GraphFeb, alt: 'February SEO performance graph' },
    { src: GraphMar, alt: 'March SEO performance graph' },
]
const STEPS = [
    {
        step: "01",
        title: "Product Copy That Sells",
        description: "Clear, helpful descriptions make it easier for shoppers to understand the product, compare options, and move toward checkout.",
        icon: product,
    },
    {
        step: "02",
        title: "Optimize Category Pages",
        description: "Strong category copy, clear headings, and strategic internal links help search engines better understand and rank your collections effectively.",
        icon: optimize,
    },
    {
        step: "03",
        title: "Use Keywords With Buyer Intent",
        description: "Target search terms your customers use when they are ready to buy, not just broad keywords with high search volume and low intent.",
        icon: keywords,
    },
    {
        step: "04",
        title: "Improve Product Page Speed",
        description: "Fast-loading product pages reduce drop-offs and help customers easily browse, compare products, and complete purchases smoothly with less friction overall.",
        icon: improve,
    },
    {
        step: "05",
        title: "Build Trust With Content",
        description: "Buying guides, comparison pages, and care tips build customer confidence while creating more entry points into your online store.",
        icon: trust,
    },
];

const SeoServices = () => {
    return (
        <>
            <HeroSection
                heading={"E-commerce SEO That"}
                pinkHeading={"Drives Sales"}
                description1={"We help your products rank higher, reach the right buyers, and turn search visibility into consistent sales that drive measurable business growth."}
                description2={"Our tailored SEO strategies focus on your store, products, and customers to build a growth plan that delivers sustainable results and long-term success."}
                bannerImage="/seoServices/seo.svg"
                altText={"E-commerce SEO That Drives Sales"}
            />
            <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
            <SeoPerformance />
            <Interactivecontent
                headingStart="SEO That Boosts"
                headingEnd="E-commerce Sales"
                items={SEO_STRATEGY_ITEMS}
                ctaText="Book a free strategy call"
                ctaHref=""
            />
            <CustomGeneration
                headdingBlack="Build Product Pages That"
                headingBlue="Customers Trust"
                steps={STEPS}
            />
            <AnalyticsGraph
                title="See How E-commerce SEO Turns"
                highlightedTitle="Traffic Into Revenue"
                images={SEO_GRAPH_IMAGES}
            />
            <WorkWithCards
                title="Why Work With"
                highlightedTitle="Humans Of Web?"
                description=""
                cards={WORK_WITH_CARDS}
                showCards={3}
                ctaText="Get Expert Guidance Today"
                ctaHref=""
                backgroundImage="/IndustryExpertise/seo-banner.webp"
            />
            <ServiceGridSection
                title="Everything Your Store Needs To"
                highlightedTitle="Grow Smarter"
                services={SERVICE_GRID_ITEMS}
                backgroundImage="/IndustryExpertise/seo-banner.webp"
                ctaText="Get Expert Guidance Today"
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
