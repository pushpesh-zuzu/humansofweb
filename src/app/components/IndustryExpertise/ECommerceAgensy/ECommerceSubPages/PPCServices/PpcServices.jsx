import HeroSection from '@/app/components/common/SubServices/HeroSection/HeroSection'
import ServicesTwoGridSection from '@/app/components/common/SubServices/ServicesTwoGridSection/ServicesTwoGridSection'
import WorkWithCards from '@/app/components/common/SubServices/WorkWithCards/WorkWithCards';
import TrustedBy from '@/app/components/common/TrustedBy/TrustedBy'
import WORK_WITH_CARDS from './PPCServicesData/workWithCardData';
import ServiceGridSection from '@/app/components/common/SubServices/ServiceGridSection/ServiceGridSection';
import SERVICE_GRID_ITEMS from './PPCServicesData/serviceGridData';
import CustomGeneration from '@/app/components/Home/CustomGeneration';
import Interactivecontent from '@/app/components/common/SubServices/Interactivecontent/Interactivecontent';
import PPC_STRATEGY_ITEMS from './PPCServicesData/ppcStrategyItems';
import FaqComponent from '@/app/components/common/SubServices/FaqComponent/FaqComponent';
import FAQ_DATA from './PPCServicesData/FaqData';
import ReachWithUs from '@/app/components/common/Services/ReachWithUs/ReachWithUs';

const ppcManagement = [
    "At Humans of Web, PPC (pay-per-click) advertising helps your brand appear exactly where your customers are searching. Instead of waiting for organic traffic, we place your products on platforms like Google, YouTube, and Amazon to drive immediate visibility, targeted traffic, and high-intent visitors ready to buy.",

    "Your ads appear above and alongside search results, ensuring your business stands out before competitors. We focus on precise targeting and smart campaign strategies to reach the right audience at the right time, increasing brand awareness while driving qualified traffic that converts into real customers.",

    "With more businesses investing in paid advertising, PPC has become essential for scalable growth. At Humans of Web, we continuously optimize campaigns to maximize performance, deliver measurable results, and turn ad spend into consistent sales and long-term success."
];

const STEPS = [
    {
        step: "01",
        title: "Audience & Intent Research",
        description: "We identify your ideal customers, analyse their behavior, and understand what drives them to click, engage, and convert.",
        icon: "",
    },
    {
        step: "02",
        title: "Keyword & Platform Strategy",
        description: "We select high-intent keywords and the right platforms to ensure your ads reach users who are ready to take action.",
        icon: "",
    },
    {
        step: "03",
        title: "High-Converting Ad Creation",
        description: "We craft compelling ad copy and creatives that grab attention, communicate value, and encourage users to click and explore.",
        icon: "",
    },
    {
        step: "04",
        title: "Landing Page Optimization",
        description: "We align ads with optimized landing pages to reduce drop-offs, improve user experience, and increase conversion rates.",
        icon: "",
    },
    {
        step: "05",
        title: "Continuous Testing & Scaling",
        description: "We monitor performance, test variations, and scale winning campaigns to maximise ROI and drive consistent business growth.",
        icon: "",
    },
];

const PpcServices = () => {
    return (
        <>
            <HeroSection
                heading={"Ecommerce PPC Agency for"}
                pinkHeading={"Scalable Growth"}
                description1={"Want to unlock your business potential? Supercharge your sales with effective PPC management services designed to attract high-intent traffic and drive consistent conversions."}
                description2={"Our expert PPC strategies focus on your audience, campaigns, and goals to maximise ROI, increase visibility, and deliver scalable growth for your business."}
                bannerImage="/ppcServices/ppc-banner.webp"
                altText={"PPC management services boosting ecommerce sales and ROI through targeted ads"}
            />
            <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
            <ServicesTwoGridSection
                background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
                headdingBlack="What Does eCommerce "
                headingBlue="PPC Management Really Do?"
                image="/ppcServices/ppc-analytics.webp"
                imageAltText="ecommerce PPC management process showing ad optimization, keyword targeting, and performance tracking"
                paragraphs={ppcManagement}
                headingBlueColor="text-secondary"
                headingBlackColor="text-white"
                limit={5}
            />
            <WorkWithCards
                title="Why Brands Choose"
                highlightedTitle="Humans Of Web for PPC?"
                description=""
                cards={WORK_WITH_CARDS}
                showCards={3}
                ctaText="Get Expert Guidance Today"
                ctaHref=""
                backgroundImage="/IndustryExpertise/seo-banner.webp"
                padding='py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20'
            />
            <ServiceGridSection
                title="E-commerce"
                highlightedTitle="PPC Management We Provide"
                services={SERVICE_GRID_ITEMS}
                backgroundImage="/IndustryExpertise/seo-banner.webp"
                ctaText="Start Scaling Your PPC Today"
                ctaHref=""
            />
            <CustomGeneration
                headdingBlack="Build PPC Campaigns That"
                headingBlue="Drive Real Sales"
                steps={STEPS}
            />
            <Interactivecontent
                headingStart="How to Build a High-Performing"
                headingEnd="PPC Campaign"
                items={PPC_STRATEGY_ITEMS}
                ctaText="Build Your PPC Strategy Today"
                ctaHref=""
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

export default PpcServices
