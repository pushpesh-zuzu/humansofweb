import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import TrustedBy from '@/app/components/common/TrustedBy/TrustedBy'
import SeoServiceVideo from './SeoServiceVideo'
import SeoPerformance from './SeoPerformance'
import SeoTipsSection from './SeoTipsSection'
import Interactivecontent from '../Interactivecontent/Interactivecontent'
import SEO_STRATEGY_ITEMS from './seoStrategyItems'
import AnalyticsGraph from '../AnalyticsGraph/AnalyticsGraph'
import GraphFeb from '../../../../common/Icons/IndustryExpertise/graph-feb.svg'
import GraphJan from '../../../../common/Icons/IndustryExpertise/graph-jan.svg'
import GraphMar from '../../../../common/Icons/IndustryExpertise/graph-mar.svg'
import WorkWithCards from '../WorkWithCards/WorkWithCards'
import WORK_WITH_CARDS from './workWithCardsData'
import ServiceGridSection from '../ServiceGridSection/ServiceGridSection'
import SERVICE_GRID_ITEMS from './serviceGridData'
import FaqComponent from '../FaqComponent/FaqComponent'
import FAQ_DATA from './faqData'
import ReachWithUs from '@/app/components/common/Services/ReachWithUs/ReachWithUs'

const SEO_GRAPH_IMAGES = [
    { src: GraphJan, alt: 'January SEO performance graph' },
    { src: GraphFeb, alt: 'February SEO performance graph' },
    { src: GraphMar, alt: 'March SEO performance graph' },
]

const SeoServices = () => {
    return (
        <>
            <HeroSection
                heading={"E-commerce SEO That"}
                pinkHeading={"Drives Sales"}
                description={"We help your products rank higher, reach the right buyers, and turn search visibility into consistent sales."}
                bannerImage="/IndustryExpertise/seo-banner.webp"
                altText={"E-commerce SEO That Drives Sales"}
            />
            <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
            <SeoServiceVideo />
            <SeoPerformance />
            <SeoTipsSection />
            <Interactivecontent
                headingStart="How Does"
                headingHighlight="Humans Of Web Build Winning SEO Strategies"
                headingEnd="That Put E-commerce Sales Through the Roof?"
                items={SEO_STRATEGY_ITEMS}
                ctaText="Get My Growth Plan"
                ctaHref=""
            />
            <AnalyticsGraph
                title="See How E-commerce SEO Turns"
                highlightedTitle="Traffic Into Revenue"
                images={SEO_GRAPH_IMAGES}
            />
            <WorkWithCards
                title="Why Work With"
                highlightedTitle="Humans Of Web?"
                description="Partner with a team built around clarity, execution, and eCommerce growth that you can actually measure."
                cards={WORK_WITH_CARDS}
                showCards={3}
                ctaText="Get Expert Guidance Today"
                ctaHref=""
                backgroundImage="/IndustryExpertise/seo-banner.webp"
            />
            <ServiceGridSection
                title="Everything Your Store Needs To"
                highlightedTitle="Grow Smarter"
                description="From visibility to conversions, our eCommerce services work together to help your store attract better traffic and turn more visits into revenue."
                services={SERVICE_GRID_ITEMS}
                backgroundImage="/IndustryExpertise/seo-banner.webp"
                ctaText="Get Expert Guidance Today"
                ctaHref=""
            />
            <FaqComponent
                title="Frequently asked questions"
                items={FAQ_DATA}
                defaultOpen={0}
            />
            <ReachWithUs
                title="MAXIMIZE YOUR ONLINE REACH WITH US"
                buttonText="SCHEDULE CONSULTATION CALL"
                buttonHref=""
                imageSrc="/IndustryExpertise/pretty-women.webp"
                imageAlt="Consultation support"
            />
        </>
    )
}

export default SeoServices
