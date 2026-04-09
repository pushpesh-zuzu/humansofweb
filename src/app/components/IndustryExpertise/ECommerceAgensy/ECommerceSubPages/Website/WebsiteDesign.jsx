import HeroSection from '@/app/components/common/SubServices/HeroSection/HeroSection'
import WorkWithCards from '@/app/components/common/SubServices/WorkWithCards/WorkWithCards'
import TrustedBy from '@/app/components/common/TrustedBy/TrustedBy'
import React from 'react'
import WORK_WITH_CARDS from './SectionsData/workWithCardsData'
import WebsiteBrand from '@/app/components/common/SubServices/WebsiteBrand/WebsiteBrand'
import CLIENT_CARDS from './SectionsData/clientData'
import DriveConversation from '@/app/components/common/SubServices/DriveConversation/DriveConversation'
import ReachWithUs from '@/app/components/common/Services/ReachWithUs/ReachWithUs'
import BusineesSell from './BusineesSell/BusineesSell'
import FaqComponent from '@/app/components/common/SubServices/FaqComponent/FaqComponent'
import FAQ_DATA from './SectionsData/faqData'

const WebsiteDesign = () => {
    return (
        <>
            <HeroSection
                heading={"E-commerce Websites That"}
                pinkHeading={"Grow With You"}
                description1={"Start small or scale big—we design eCommerce websites that are built to adapt as your business grows."}
                description2={"From design to functionality, we create fast, user-friendly stores that help you sell more and scale with confidence."}
                bannerImage="/WebsiteDesign/website-banner.webp"
                altText={""}
            />
            <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
            <WorkWithCards
                title="What Makes an"
                highlightedTitle="eCommerce Website Actually Sell?"
                description="It’s not just about how your store looks—it’s about how it works. We design experiences that are easy to navigate, visually clear, and built to turn visitors into customers and repeat buyers."
                cards={WORK_WITH_CARDS}
                showCards={2}
                ctaText="Talk to a Web Design Expert"
                ctaHref=""
                backgroundImage="/IndustryExpertise/seo-banner.webp"
            />
            <WebsiteBrand />
            <WorkWithCards
                title="Why Clients Choose Our"
                highlightedTitle="eCommerce Design Services?"
                description="We build websites that don’t just look good—they perform, convert, and grow with your business. Here’s what makes us different."
                cards={CLIENT_CARDS}
                showCards={3}
                ctaText=""
                ctaHref=""
                backgroundImage=""
            />
            <DriveConversation />
            <BusineesSell />
            <FaqComponent
                title="Frequently asked questions"
                items={FAQ_DATA}
                defaultOpen={0}
            />
            <ReachWithUs />
        </>
    )
}

export default WebsiteDesign