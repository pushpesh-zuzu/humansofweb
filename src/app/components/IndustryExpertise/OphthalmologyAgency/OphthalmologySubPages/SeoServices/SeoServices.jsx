import React from 'react'
import HeroSection from '@/app/components/common/SubServices/HeroSection/HeroSection'
import TrustedBy from '@/app/components/common/TrustedBy/TrustedBy'
import ServicesTwoGridSection from '@/app/components/common/SubServices/ServicesTwoGridSection/ServicesTwoGridSection';
import Interactivecontent from '@/app/components/common/SubServices/Interactivecontent/Interactivecontent';
import CustomGeneration from '@/app/components/Home/CustomGeneration';
import WorkWithCards from '@/app/components/common/SubServices/WorkWithCards/WorkWithCards';
import ServiceGridSection from '@/app/components/common/SubServices/ServiceGridSection/ServiceGridSection';
import FaqComponent from '@/app/components/common/SubServices/FaqComponent/FaqComponent';
import ReachWithUs from '@/app/components/common/Services/ReachWithUs/ReachWithUs';
import HealthcareSeoAudit from "../../../../common/Icons/healthcare/healthcare-seo-audit.svg";
import LocalCompetitor from "../../../../common/Icons/healthcare/local-competitor-analysis.svg";
import PatientIntentKeyword from "../../../../common/Icons/healthcare/patient-intent-keyword.svg";
import ServicePageOptimization from "../../../../common/Icons/healthcare/service-page-optimization.svg";
import WebsiteOptimization from "../../../../common/Icons/healthcare/content-website-optimization.svg";
import SeoAuthority from "../../../../common/Icons/healthcare/seo-authority-growth.svg";
import AnalyzeYourPresence from "../../../../common/Icons/healthcare/analyze-your-online-presence.svg";
import ImprovePatientExperience from "../../../../common/Icons/healthcare/improve-patient-experience.svg";
import MatchPatient from "../../../../common/Icons/healthcare/match-patient-search-intent.svg";
import MeasureScale from "../../../../common/Icons/healthcare/measure-scale-growth.svg";
import OptimizeService from "../../../../common/Icons/healthcare/optimize-service-visibility.svg";
import OphthalmologySeo from "../../../../common/Icons/healthcare/ophthalmology-seo.svg";
import DentalSeo from "../../../../common/Icons/healthcare/dental-seo.svg";
import DermatologySeo from "../../../../common/Icons/healthcare/dermatology-seo.svg";
import ChiropracticSeo from "../../../../common/Icons/healthcare/chiropractic-seo.svg";
import UrologySeo from "../../../../common/Icons/healthcare/urology-seo.svg";
import PlasticSurgerySeo from "../../../../common/Icons/healthcare/plastic-surgery-seo.svg";
import StrongerPractice from "../../../../common/Icons/healthcare/stronger-practice-visibility.svg";
import MorePatient from "../../../../common/Icons/healthcare/more-patient-appointments.svg";
import ConsistentOrganic from "../../../../common/Icons/healthcare/consistent-organic-traffic.svg";
import SustainableCost from "../../../../common/Icons/healthcare/sustainable-cost-effective-growth.svg";
import ImprovedLocal from "../../../../common/Icons/healthcare/improved-local-discoverability.svg";
import EnhancedPatient from "../../../../common/Icons/healthcare/enhanced-patient-trust-credibility.svg";


const seoService = [
    "At Humans of Web, we help ophthalmology practices improve search visibility and connect with patients actively searching for eye care services online.",

    "Our SEO experts create customized strategies focused on increasing rankings, driving qualified organic traffic, and helping your practice stand out in competitive local search results.",

    "We optimize your website with targeted keywords, local SEO, content strategies, and performance tracking designed to improve patient engagement and appointment growth.",

    "Our goal is to help your ophthalmology practice build long-term online authority, attract more patients, and achieve consistent growth through effective SEO solutions."
];

const OPHTHALMOLOGY_SEO_STRATEGY_ITEMS = [
    {
        title: "Local Search Optimization",
        description:
            "We optimize your ophthalmology practice for local search visibility, helping nearby patients discover your services through targeted local SEO strategies.",
        icon: HealthcareSeoAudit
    },
    {
        title: "Technical SEO Enhancements",
        description:
            "Our technical SEO improvements focus on website speed, mobile responsiveness, crawlability, and overall performance to support stronger search rankings.",
        icon: LocalCompetitor
    },
    {
        title: "Competitive Market Research",
        description:
            "We study competing ophthalmology practices to identify SEO opportunities and build strategies that help your clinic gain a competitive advantage online.",
        icon: PatientIntentKeyword
    },
    {
        title: "On-Page SEO Improvements",
        description:
            "We refine your website content, titles, meta descriptions, and page structure to improve keyword relevance, user experience, and patient engagement.",
        icon: ServicePageOptimization
    },
    {
        title: "Strategic Keyword Planning",
        description:
            "Our team researches high-value ophthalmology keywords that align with patient search intent and increase your chances of attracting qualified traffic.",
        icon: WebsiteOptimization
    },
    {
        title: "Authority Building Strategies",
        description:
            "We strengthen your website authority through ethical off-page SEO and link-building methods that improve credibility and long-term online growth.",
        icon: SeoAuthority
    },
    {
        title: "SEO Content Development",
        description:
            "We create optimized content and service pages that improve search visibility, answer patient questions, and encourage appointment inquiries.",
        icon: ServicePageOptimization
    },
];

const OPHTHALMOLOGY_STEPS = [
    {
        step: "01",
        title: "Evaluate Website Performance",
        description:
            "We review your ophthalmology website’s SEO health, search visibility, and local presence to identify opportunities for stronger rankings and patient growth.",
        icon: AnalyzeYourPresence
    },
    {
        step: "02",
        title: "Optimize Eye Care Services",
        description:
            "We improve service pages, metadata, and keyword targeting so your ophthalmology treatments appear in relevant patient searches and attract more qualified patients.",
        icon: OptimizeService
    },
    {
        step: "03",
        title: "Target High-Intent Searches",
        description:
            "Our SEO strategies focus on matching your content with the keywords and search intent patients commonly use when looking for eye care services online.",
        icon: MatchPatient
    },
    {
        step: "04",
        title: "Enhance User Experience",
        description:
            "We optimize website structure, mobile responsiveness, and navigation to create a seamless browsing experience that encourages appointment inquiries.",
        icon: ImprovePatientExperience
    },
    {
        step: "05",
        title: "Track SEO Performance",
        description:
            "We monitor rankings, traffic, and patient engagement to continuously refine strategies and support long-term growth for your ophthalmology practice.",
        icon: MeasureScale
    },
];

const OPHTHALMOLOGY_WORK_WITH_CARDS = [
    {
        title: "Local Ophthalmology SEO",
        description:
            "We optimize your eye care practice for local search results so patients nearby can easily find your ophthalmology services online.",
        icon: OphthalmologySeo
    },
    {
        title: "Technical SEO Optimization",
        description:
            "Our team improves website performance, mobile responsiveness, and technical SEO to support stronger rankings and better patient experiences.",
        icon: DentalSeo
    },
    {
        title: "Ophthalmology Keyword Research",
        description:
            "We identify high-intent eye care keywords that help your website attract qualified patients searching for ophthalmology treatments and services.",
        icon: DermatologySeo
    },
    {
        title: "On-Page SEO Enhancements",
        description:
            "We optimize titles, service pages, metadata, and content structure to improve visibility and increase patient engagement across your website.",
        icon: ChiropracticSeo
    },
    {
        title: "Authority & Link Building",
        description:
            "We strengthen your website authority through strategic link-building and SEO practices designed to improve trust and long-term search growth.",
        icon: UrologySeo
    },
    {
        title: "SEO Content Strategy",
        description:
            "We create optimized ophthalmology content that improves search rankings, educates patients, and drives more appointment inquiries.",
        icon: PlasticSurgerySeo
    },
];

const OPHTHALMOLOGY_SERVICE_GRID_ITEMS = [
    {
        title: "Strategic SEO Planning",
        description:
            "We create a customized ophthalmology SEO strategy focused on your services, patient audience, and growth goals to improve rankings and online visibility.",
        icon: StrongerPractice
    },
    {
        title: "Smooth SEO Onboarding",
        description:
            "Our onboarding process reviews your current SEO performance, website structure, and analytics setup to build a strong foundation for long-term success.",
        icon: MorePatient
    },
    {
        title: "Actionable SEO Recommendations",
        description:
            "We provide targeted recommendations for technical SEO, content optimization, keyword improvements, and authority growth to strengthen your search performance.",
        icon: ConsistentOrganic
    },
    {
        title: "SEO Execution & Optimization",
        description:
            "Our team implements on-page SEO, local optimization, and link-building strategies designed to increase traffic, rankings, and patient inquiries.",
        icon: SustainableCost
    },
    {
        title: "Local Search Visibility",
        description:
            "We improve your presence across Google search, maps, and local listings so nearby patients can easily discover your ophthalmology services.",
        icon: ImprovedLocal
    },
    {
        title: "Performance Tracking & Reporting",
        description:
            "We continuously monitor rankings, traffic, and SEO performance while providing transparent reports to support consistent practice growth.",
        icon: EnhancedPatient
    },
];

const FAQ_DATA = [
    {
        question: "What are ophthalmology SEO services?",
        answer:
            "Ophthalmology SEO services help eye care practices improve search engine visibility, attract qualified patients, and increase appointment inquiries through targeted SEO strategies and local optimization.",
    },
    {
        question: "Why is SEO important for ophthalmology practices?",
        answer:
            "SEO helps your ophthalmology clinic appear in front of patients actively searching for eye care services online, improving visibility, website traffic, and long-term patient growth.",
    },
    {
        question: "How does local SEO help ophthalmologists?",
        answer:
            "Local SEO improves your visibility in Google Maps and local search results, making it easier for nearby patients to discover your ophthalmology services and contact your practice.",
    },
    {
        question: "How long does ophthalmology SEO take to show results?",
        answer:
            "SEO is a long-term strategy, and most ophthalmology practices begin seeing noticeable improvements in rankings and traffic within a few months, depending on competition and website condition.",
    },
    {
        question: "Do you optimize content for ophthalmology keywords?",
        answer:
            "Yes, we research and optimize high-intent ophthalmology keywords related to treatments, services, and patient searches to improve rankings and attract targeted organic traffic.",
    },
];

const SeoServices = () => {
    return (
        <>
            <HeroSection
                heading={"SEO Services for"}
                pinkHeading={"Ophthalmologists"}
                description1={"At Humans of Web, we help ophthalmology practices improve search visibility, attract qualified traffic, and connect with patients searching for eye care services online."}
                description2={"Our customized ophthalmology SEO strategies are designed to boost rankings, increase website traffic, and drive more patient appointments for your practice."}
                bannerImage="/ophthalmology/seo-banner.webp"
                altText={"Ophthalmology SEO services improving search visibility and patient growth"}
                imageHeight="h-[200px] md:h-[373px]"
                imageClass="object-contain object-center lg:min-h-[450px]"
            />
            <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
            <ServicesTwoGridSection
                background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
                headdingBlack="Advanced Ophthalmology SEO"
                headingBlue="For Practice Growth"
                image="/ophthalmology/advance-ophthalmology.webp"
                paragraphs={seoService}
                headingBlueColor="text-secondary"
                headingBlackColor="text-white"
                limit={5}
                ctaText='Grow Your Eye Care Practice'
                marginBottom="lg:mb-21"
                imageAltText = "Advanced ophthalmology SEO strategies to improve search rankings and attract patients"
            />
            <Interactivecontent
                headingStart="SEO Solutions For"
                headingEnd="Ophthalmology Practices"
                items={OPHTHALMOLOGY_SEO_STRATEGY_ITEMS}
                ctaText="Increase Your Search Visibility"
                ctaHref=""
                padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20"
            />
            <CustomGeneration
                headdingBlack="SEO Strategies That Help"
                headingBlue="Ophthalmology Practices Grow"
                steps={OPHTHALMOLOGY_STEPS}
            />
            <WorkWithCards
                title="Specialized SEO Services For"
                highlightedTitle="Ophthalmology Practices"
                description=""
                cards={OPHTHALMOLOGY_WORK_WITH_CARDS}
                showCards={3}
                ctaText="Increase Your Patient Reach"
                ctaHref=""
            />
            <ServiceGridSection
                title="Our Proven SEO Process For"
                highlightedTitle="Ophthalmology Growth"
                services={OPHTHALMOLOGY_SERVICE_GRID_ITEMS}
                ctaText="Grow Your Ophthalmology Practice"
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
