import ReachWithUs from '@/app/components/common/Services/ReachWithUs/ReachWithUs';
import FaqComponent from '@/app/components/common/SubServices/FaqComponent/FaqComponent';
import HeroSection from '@/app/components/common/SubServices/HeroSection/HeroSection'
import ServiceGridSection from '@/app/components/common/SubServices/ServiceGridSection/ServiceGridSection';
import ServicesTwoGridSection from '@/app/components/common/SubServices/ServicesTwoGridSection/ServicesTwoGridSection'
import WorkWithCards from '@/app/components/common/SubServices/WorkWithCards/WorkWithCards';
import TrustedBy from '@/app/components/common/TrustedBy/TrustedBy'
import CustomGeneration from '@/app/components/Home/CustomGeneration';
import React from 'react'
import ContineousOptimization from "@/app/components/common/Icons/dental/continuosOptimization.svg"
import CustomizedPPC from "@/app/components/common/Icons/dental/customizedPPC.svg"
import dentalIndustry from "@/app/components/common/Icons/dental/dentalIndustry.svg"
import transformPerform from "@/app/components/common/Icons/dental/transform-performance.svg"
import highIntent from "@/app/components/common/Icons/dental/high-intent-patient.svg"
import provenPatient from "@/app/components/common/Icons/dental/proven-patient.svg"
import videoBased from "@/app/components/common/Icons/dental/video-based.svg"
import targetMedia from "@/app/components/common/Icons/dental/targeted-media.svg"
import keywordSearch from "@/app/components/common/Icons/dental/keyword-search.svg"
import multiPlatform from "@/app/components/common/Icons/dental/multi-platform-search.svg"
import engagingDisplay from "@/app/components/common/Icons/dental/engaging-display.svg"
import highIntentTreatment from "@/app/components/common/Icons/dental/high-intent-treatment.svg"
import targetBooking from "@/app/components/common/Icons/dental/target-booking-ready.svg"
import createAppointment from "@/app/components/common/Icons/dental/create-appointment-driven.svg"
import identifyHighIntent from "@/app/components/common/Icons/dental/identity-highIntent.svg"
import optimizeScaleBooking from "@/app/components/common/Icons/dental/optimize-scale-booking.svg"
import optimizeBookingExperience from "@/app/components/common/Icons/dental/optimize-booking-experience.svg"


const DENTAL_PPC_MANAGEMENT = [
    "At Humans of Web, dental PPC campaigns help your clinic appear exactly when patients are searching for treatments. We position your services for immediate visibility, bringing in high-intent traffic that is ready to book appointments.",

    "Your ads appear at the top of search results, helping your clinic stand out from competitors. With precise targeting and smart strategies, we reach the right patients at the right time and drive qualified leads that convert.",

    "We focus on transparency and results, providing clear insights into clicks, calls, and bookings. Our campaigns are continuously optimized to lower cost per lead, improve conversions, and deliver consistent patient growth."
];

const WORK_WITH_CARDS = [
    {
        title: "Proven Patient Results",
        description:
            "We deliver consistent patient inquiries and appointment bookings through data-driven PPC campaigns focused on real clinic growth.",
        icon: provenPatient,
    },
    {
        title: "Dental Industry Understanding",
        description:
            "We understand how patients search for dental treatments, allowing us to create campaigns that attract the right audience for your services.",
        icon: dentalIndustry
    },
    {
        title: "Transparent Performance Tracking",
        description:
            "You get clear insights into your ad spend, including clicks, calls, and bookings, so you always know how your campaigns are performing.",
        icon: transformPerform
    },
    {
        title: "High-Intent Patient Targeting",
        description:
            "We focus on reaching patients who are actively searching for treatments, increasing the chances of turning clicks into confirmed appointments.",
        icon: highIntent
    },
    {
        title: "Continuous Optimization",
        description:
            "Our team constantly monitors and improves your campaigns to reduce cost per lead and maximize conversions over time.",
        icon: ContineousOptimization
    },
    {
        title: "Customized PPC Strategies",
        description:
            "Every dental clinic is different, so we tailor campaigns based on your services, location, and growth goals for better results.",
        icon: CustomizedPPC
    }
];

const SERVICE_GRID_ITEMS = [
    {
        title: "High-Intent Treatment Ads",
        description:
            "Promote your dental services directly to patients actively searching for treatments with clear, compelling ads that highlight key services, pricing, and trust signals.",
        icon: highIntentTreatment
    },
    {
        title: "Keyword-Focused Search Campaigns",
        description:
            "Capture patient demand at the right moment with targeted keywords that place your clinic at the top and drive qualified, appointment-ready traffic.",
        icon: keywordSearch
    },
    {
        title: "Engaging Display Campaigns",
        description:
            "Build awareness and stay top-of-mind with visually engaging ads across relevant websites, helping you attract and re-engage potential patients.",
        icon: engagingDisplay
    },
    {
        title: "Video-Based Patient Education",
        description:
            "Use video content to explain treatments, showcase expertise, and build trust, influencing patient decisions through engaging visual experiences.",
        icon: videoBased
    },
    {
        title: "Multi-Platform Search Advertising",
        description:
            "Expand beyond Google by reaching patients across multiple search platforms, unlocking additional traffic and cost-effective growth opportunities.",
        icon: multiPlatform
    },
    {
        title: "Targeted Social Media Ads",
        description:
            "Reach the right patients on social platforms with precise targeting based on location, interests, and behavior to drive meaningful appointment bookings.",
        icon: targetMedia
    },
];

const STEPS = [
    {
        step: "01",
        title: "Identify High-Intent Patients",
        description: "We research your target patients and analyze search intent to focus on people actively looking for dental treatments and ready to book.",
        icon: identifyHighIntent,
    },
    {
        step: "02",
        title: "Target Booking-Ready Keywords",
        description: "We select keywords that patients use when they are ready to take action, ensuring your ads reach users most likely to schedule appointments quickly online.",
        icon: targetBooking
    },
    {
        step: "03",
        title: "Create Appointment-Driven Ads",
        description: "We design ad copy and creatives that highlight your services, build trust, and encourage patients to click and book consultations quickly.",
        icon: createAppointment,
    },
    {
        step: "04",
        title: "Optimize Booking Experience",
        description: "We align ads with landing pages and booking flows that make it easy for patients to contact you and schedule appointments without friction.",
        icon: optimizeBookingExperience,
    },
    {
        step: "05",
        title: "Optimize & Scale Bookings",
        description: "We continuously monitor performance, refine campaigns, and scale what works to increase appointment volume and maximize ROI.",
        icon: optimizeScaleBooking,
    },
];

const FAQ_DATA = [
    {
        question: "How can PPC help my dental clinic get more patients?",
        answer:
            "PPC helps your clinic appear at the top of search results when patients are actively looking for dental treatments. This brings high-intent traffic to your website and increases appointment bookings quickly.",
    },
    {
        question: "How much should I spend on dental PPC campaigns?",
        answer:
            "The budget depends on your location, competition, and services. We help you set a budget that focuses on high-impact keywords and ensures you get the best return on your ad spend.",
    },
    {
        question: "How soon can I see results from PPC?",
        answer:
            "PPC can generate traffic and patient inquiries almost immediately after campaigns go live. With ongoing optimization, results continue to improve over time.",
    },
    {
        question: "Do you create ads for different dental services?",
        answer:
            "Yes. We create targeted campaigns for services like cosmetic dentistry, orthodontics, implants, and general treatments to attract the right patients for each service.",
    },
    {
        question: "How do you measure PPC performance?",
        answer:
            "We track key metrics such as clicks, calls, form submissions, and appointment bookings, giving you clear insights into how your campaigns are performing.",
    },
    {
        question: "How much does PPC for dentists cost?",
        answer:
            "The cost of dental PPC depends on factors like your location, competition, and the services you offer. At Humans of Web, we carefully manage your budget to maximize results and ensure every rupee spent delivers strong returns. Our team uses smart bidding and continuous optimization to help you achieve better ROI and consistent patient growth.",
    },
];
const PPCServices = () => {
    return (
        <>
            <HeroSection
                heading={"Targeted Dental PPC for"}
                pinkHeading={"Patient Growth"}
                description1={"Struggling to get steady patient inquiries? Our PPC strategies are designed to attract high-intent patients and turn clicks into consistent appointment bookings."}
                description2={"We focus on your services, location, and audience to run targeted campaigns that increase visibility, maximize ROI, and drive reliable growth for your dental practice."}
                bannerImage="/ppcServices/dental-ppc-banner.svg"
                altText={"Dental PPC services driving patient leads and clinic growth through targeted advertising"}
            />
            <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
            <ServicesTwoGridSection
                background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
                headdingBlack="What Do Dental "
                headingBlue="PPC Campaigns Really Do?"
                image="/ppcServices/ppc-campaign.svg"
                imageAltText="dental PPC campaigns showing ad targeting, patient acquisition, and performance tracking"
                paragraphs={DENTAL_PPC_MANAGEMENT}
                headingBlueColor="text-secondary"
                headingBlackColor="text-white"
                limit={5}
            />
            <WorkWithCards
                title="Why Dentists Trust"
                highlightedTitle="Our PPC Experts?"
                description=""
                cards={WORK_WITH_CARDS}
                showCards={3}
                ctaText="Get Expert Guidance Today"
                ctaHref=""
                backgroundImage="/IndustryExpertise/seo-banner.webp"
                padding='py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20'
            />
            <ServiceGridSection
                title="Key Elements of"
                highlightedTitle="Successful Dental PPC Campaigns"
                services={SERVICE_GRID_ITEMS}
                backgroundImage="/IndustryExpertise/seo-banner.webp"
                ctaText="Get More Patient Appointments"
                ctaHref=""
            />
            <CustomGeneration
                headdingBlack="Run PPC Campaigns That"
                headingBlue="Fill Your Schedule"
                steps={STEPS}
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

export default PPCServices