import React from 'react'
import HeroSection from '@/app/components/common/SubServices/HeroSection/HeroSection'
import ServicesTwoGridSection from '@/app/components/common/SubServices/ServicesTwoGridSection/ServicesTwoGridSection'
import TrustedBy from '@/app/components/common/TrustedBy/TrustedBy'
import Interactivecontent from '@/app/components/common/SubServices/Interactivecontent/Interactivecontent'
import CustomGeneration from '@/app/components/Home/CustomGeneration'
import WorkWithCards from '@/app/components/common/SubServices/WorkWithCards/WorkWithCards'
import ServiceGridSection from '@/app/components/common/SubServices/ServiceGridSection/ServiceGridSection'
import FaqComponent from '@/app/components/common/SubServices/FaqComponent/FaqComponent'
import ReachWithUs from '@/app/components/common/Services/ReachWithUs/ReachWithUs'
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
import UrologySeo from "../../../../common/Icons/healthcare/urology-seo.svg";
import ChiropracticSeo from "../../../../common/Icons/healthcare/chiropractic-seo.svg";
import DentalSeo from "../../../../common/Icons/healthcare/dental-seo.svg";
import DermatologySeo from "../../../../common/Icons/healthcare/dermatology-seo.svg";
import OphthalmologySeo from "../../../../common/Icons/healthcare/ophthalmology-seo.svg";
import PlasticSurgerySeo from "../../../../common/Icons/healthcare/plastic-surgery-seo.svg";
import SustainableCost from "../../../../common/Icons/healthcare/sustainable-cost-effective-growth.svg";
import ConsistentOrganic from "../../../../common/Icons/healthcare/consistent-organic-traffic.svg";
import EnhancedPatient from "../../../../common/Icons/healthcare/enhanced-patient-trust-credibility.svg";
import ImprovedLocal from "../../../../common/Icons/healthcare/improved-local-discoverability.svg";
import MorePatient from "../../../../common/Icons/healthcare/more-patient-appointments.svg";
import StrongerPractice from "../../../../common/Icons/healthcare/stronger-practice-visibility.svg";






const seoService = [
    "Healthcare SEO is one of the most effective ways to grow your practice, helping you reach patients actively searching for medical services in your area.",
    "At Humans of Web, we build tailored SEO strategies that turn searches into visitors, visitors into booked appointments, and patients into long-term relationships.",
    "We create optimized service pages, local SEO strategies, content plans, and performance tracking focused on every stage of the patient journey.",
    "Our goal is simple: improve your visibility, attract the right patients at the right time, and grow your practice with consistent, high-quality leads."
];

const HEALTHCARE_SEO_STRATEGY_ITEMS = [
    {
        title: "Healthcare SEO Audit",
        description:
            "Our comprehensive SEO audit evaluates your website’s technical health, structure, local signals, and performance to identify gaps that may be limiting your visibility and patient acquisition.",
        icon: HealthcareSeoAudit
    },
    {
        title: "Local Competitor Analysis",
        description:
            "We analyze top healthcare providers in your area to understand their keyword strategies, content approach, and local rankings, then use those insights to position your practice ahead of the competition.",
        icon: LocalCompetitor
    },
    {
        title: "Patient-Intent Keyword Research",
        description:
            "We identify high-intent search terms patients use when looking for treatments, ensuring your services appear at the right moment in their decision-making journey.",
        icon: PatientIntentKeyword
    },
    {
        title: "Service Page Optimization",
        description:
            "We create and optimize service pages that clearly explain treatments, build credibility, and guide patients toward booking while improving your search engine relevance.",
        icon: ServicePageOptimization
    },
    {
        title: "Content & Website Optimization",
        description:
            "We enhance your content, page structure, and internal linking to improve rankings, user experience, and conversion rates across your key service pages.",
        icon: WebsiteOptimization
    },
    {
        title: "Local SEO & Authority Growth",
        description:
            "We strengthen your local presence through optimized listings, reputation signals, and authority-building strategies that help your practice rank higher in local search results.",
        icon: SeoAuthority
    },
];

const HEALTHCARE_STEPS = [
    {
        step: "01",
        title: "Analyze Your Online Presence",
        description:
            "We evaluate how your healthcare practice appears across search engines and local listings to uncover visibility gaps, technical issues, and missed growth opportunities.",
        icon: AnalyzeYourPresence
    },
    {
        step: "02",
        title: "Optimize Service Visibility",
        description:
            "We enhance service pages, metadata, and structured data so search engines understand treatments and rank them for relevant patient searches.",
        icon: OptimizeService
    },
    {
        step: "03",
        title: "Match Patient Search Intent",
        description:
            "We align your content, FAQs, and service details with what patients are actively searching for, helping your practice show up at the right stage of their journey.",
        icon: MatchPatient
    },
    {
        step: "04",
        title: "Improve Patient Experience",
        description:
            "We optimize landing pages, navigation, and contact flows to create a seamless experience that encourages patients to take action and book appointments.",
        icon: ImprovePatientExperience
    },
    {
        step: "05",
        title: "Measure & Scale Growth",
        description:
            "We track rankings, local visibility, and patient inquiries to refine strategies, improve performance, and drive consistent, long-term patient growth sustainably.",
        icon: MeasureScale
    },
];

const HEALTHCARE_WORK_WITH_CARDS = [
    {
        title: "Ophthalmology SEO",
        description:
            "We optimize your online presence for eye care services like LASIK, cataract surgery, and vision correction, helping patients find your clinic when searching for specialized treatments.",
        icon: OphthalmologySeo
    },
    {
        title: "Dental SEO",
        description:
            "We improve your visibility for dental services such as cleanings, implants, and orthodontics, ensuring local patients can easily discover and choose your practice.",
        icon: DentalSeo
    },
    {
        title: "Dermatology SEO",
        description:
            "We help your clinic rank for skin treatments, cosmetic procedures, and medical dermatology services, attracting patients actively searching for skincare solutions.",
        icon: DermatologySeo
    },
    {
        title: "Chiropractic SEO",
        description:
            "We position your practice for searches related to pain relief, spinal care, and posture correction, making it easier for patients to find and trust your services.",
        icon: ChiropracticSeo
    },
    {
        title: "Urology SEO",
        description:
            "We enhance your rankings for urology treatments and consultations, connecting your practice with patients looking for specialized and sensitive care services.",
        icon: UrologySeo
    },
    {
        title: "Plastic Surgery SEO",
        description:
            "We optimize your site for cosmetic and reconstructive procedures, helping you attract high-intent patients and establish authority in a competitive market.",
        icon: PlasticSurgerySeo
    },
];

const HEALTHCARE_SERVICE_GRID_ITEMS = [
    {
        title: "Stronger Practice Visibility",
        description:
            "We increase your presence across search engines and local results so more patients discover your services and recognize your healthcare brand.",
        icon: StrongerPractice
    },
    {
        title: "More Patient Appointments",
        description:
            "By improving rankings, optimizing service pages, and targeting patient intent, we help generate more qualified inquiries and booked appointments.",
        icon: MorePatient
    },
    {
        title: "Consistent Organic Traffic",
        description:
            "Our healthcare SEO strategies drive relevant, high-intent traffic to your website, ensuring a steady flow of potential patients over time.",
        icon: ConsistentOrganic
    },
    {
        title: "Sustainable, Cost-Effective Growth",
        description:
            "We focus on long-term SEO strategies that reduce dependency on paid ads while delivering consistent and measurable growth for your practice.",
        icon: SustainableCost
    },
    {
        title: "Improved Local Discoverability",
        description:
            "We optimize your presence across local search, maps, and directories so nearby patients can easily find and choose your healthcare services.",
        icon: ImprovedLocal
    },
    {
        title: "Enhanced Patient Trust & Credibility",
        description:
            "Through optimized content, reviews, and authority signals, we help build trust that encourages patients to choose your practice with confidence.",
        icon: EnhancedPatient
    },
];

const FAQ_DATA = [
    {
        question: "What makes healthcare SEO different from general SEO?",
        answer:
            "Healthcare SEO requires a deeper focus on trust, accuracy, and compliance. It involves optimizing medical content, building authority, and ensuring your practice meets search engine guidelines while addressing patient concerns effectively.",
    },
    {
        question: "How do you identify the right keywords for my practice?",
        answer:
            "We research patient search behavior, treatment-specific queries, and local intent to find keywords that bring high-quality traffic. This ensures your practice appears for searches that are most likely to convert into appointments.",
    },
    {
        question: "Will SEO work for specialized medical services?",
        answer:
            "Yes. Whether you offer niche treatments or general healthcare services, SEO helps you reach patients actively searching for those specific solutions, improving both visibility and targeted inquiries.",
    },
    {
        question: "Do I need content updates for better rankings?",
        answer:
            "Regular content updates are essential. We optimize existing pages and create new, relevant content to keep your website aligned with patient needs and search engine algorithms.",
    },
    {
        question: "How do you measure the success of healthcare SEO?",
        answer:
            "We track key metrics like keyword rankings, website traffic, local visibility, and patient inquiries. These insights help us refine strategies and ensure your practice continues to grow steadily.",
    },
];

const SeoServices = () => {
    return (
        <>
            <HeroSection
                heading={"Medical SEO That"}
                pinkHeading={"Drives More Patients"}
                description1={"We help your medical practice improve online visibility, attract qualified organic traffic, and connect with patients actively searching for your services."}
                description2={"Our customized SEO strategies are designed to increase your reach, build trust, and turn search traffic into consistent patient appointments."}
                bannerImage="/seoServices/healthcare-banner.svg"
                altText={"Medical SEO Services for Patient Growth"}
                imageHeight="h-[230px] md:h-[373px]"
            />
            <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
            <ServicesTwoGridSection
                background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
                headdingBlack="Advanced Healthcare SEO"
                headingBlue="For Traffic & Patient Growth"
                image="/seoServices/healthcare-image.svg"
                paragraphs={seoService}
                headingBlueColor="text-secondary"
                headingBlackColor="text-white"
                limit={5}
                ctaText='Get More Patients with SEO'
            />
            <Interactivecontent
                headingStart="SEO That Grows"
                headingEnd="Healthcare Practices"
                items={HEALTHCARE_SEO_STRATEGY_ITEMS}
                ctaText="Boost Your Patient Traffic Now"
                ctaHref=""
                padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20"
            />
            <CustomGeneration
                headdingBlack="Build Healthcare Pages That"
                headingBlue="Patients Trust"
                steps={HEALTHCARE_STEPS}
            />
            <WorkWithCards
                title="Our Expertise Across"
                highlightedTitle="Healthcare Specialties"
                description=""
                cards={HEALTHCARE_WORK_WITH_CARDS}
                showCards={3}
                ctaText="Get More Patients Today"
                ctaHref=""
                backgroundImage="/IndustryExpertise/seo-banner.webp"
            />
            <ServiceGridSection
                title="Everything Your Healthcare Practice Needs To"
                highlightedTitle="Grow Consistently"
                services={HEALTHCARE_SERVICE_GRID_ITEMS}
                backgroundImage="/IndustryExpertise/seo-banner.webp"
                ctaText="Start Growing Your Practice Now"
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