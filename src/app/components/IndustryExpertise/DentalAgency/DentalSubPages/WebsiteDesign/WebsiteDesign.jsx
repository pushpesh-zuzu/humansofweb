import React from 'react'
import HeroSection from '@/app/components/common/SubServices/HeroSection/HeroSection'
import TrustedBy from '@/app/components/common/TrustedBy/TrustedBy'
import ReachWithUs from '@/app/components/common/Services/ReachWithUs/ReachWithUs'
// import FaqComponent from '@/app/components/common/SubServices/FaqComponent/FaqComponent'
// import FAQ_DATA from './SectionsData/faqData'
// import CustomGeneration from '@/app/components/Home/CustomGeneration'
// import goals from '@/app/components/common/Icons/WebsiteDesign/goals.svg'
// import trust from '@/app/components/common/Icons/WebsiteDesign/trust.svg'
// import speed from '@/app/components/common/Icons/WebsiteDesign/build-speed.svg'
// import launch from '@/app/components/common/Icons/WebsiteDesign/launch.svg'
// import userJourney from '@/app/components/common/Icons/WebsiteDesign/user-journey.svg'
// import BusineesSell from '@/app/components/common/SubServices/BusineesSell/BusineesSell'


// const STEPS = [
//     {
//         step: "01",
//         title: "Understand Your Brand and Goals",
//         description: "We begin by learning about your business, customers, and growth goals so the website strategy is shaped around what matters most to your brand.",
//         icon: goals,
//     },
//     {
//         step: "02",
//         title: "Plan the User Journey",
//         description: "From homepage flow to product discovery, we map a shopping experience that feels intuitive, reduces friction, and supports better conversions.",
//         icon: userJourney,
//     },
//     {
//         step: "03",
//         title: "Design for Trust and Sales",
//         description: "We craft layouts, visuals, and messaging that make your store feel polished, highly credible, and easy to buy from across every key page.",
//         icon: trust,
//     },
//     {
//         step: "04",
//         title: "Build for Speed and Flexibility",
//         description: "We make sure your website feels fast, responsive, and easy to manage so it supports both a better user experience and future growth.",
//         icon: speed,
//     },
//     {
//         step: "05",
//         title: "Refine and Launch with Confidence",
//         description: "Before launch, we review the final experience carefully, fine-tune key details, and make sure your store is ready to perform from day one.",
//         icon: launch,
//     },
// ];

const WebsiteDesign = () => {
    return (
        <>
            <HeroSection
                heading={"E-commerce Websites That"}
                pinkHeading={"Grow With You"}
                description1={"Start small or scale big, we design eCommerce websites that adapt seamlessly as your business grows, ensuring flexibility, performance, and long-term success."}
                description2={"From design to functionality, we build fast, user-friendly online stores that enhance customer experience, increase conversions, and help you confidently grow your business."}
                bannerImage="/"
                altText={"websites that grow with you"}
            />
            <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
            {/* <WorkWithCards
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
                ctaText="Book your free consulation"
                ctaHref=""
                backgroundImage=""
            />
            <CustomGeneration
                headdingBlack="Approach to"
                headingBlue="High-Converting eCommerce Design"
                steps={STEPS}
                showCtaButton={true}
                ctaText="get my free website plan"
            />
            <BusineesSell />
            <FaqComponent
                title="Frequently asked questions"
                items={FAQ_DATA}
                defaultOpen={0}
                position="mx-auto"
            /> */}
            <ReachWithUs />
        </>
    )
}

export default WebsiteDesign
