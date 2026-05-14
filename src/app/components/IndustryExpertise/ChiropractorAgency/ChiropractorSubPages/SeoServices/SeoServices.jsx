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
    "At Humans of Web, we help chiropractic clinics strengthen their online presence and reach patients searching for trusted chiropractic care in their local area.",

    "Our tailored chiropractor SEO strategies focus on improving search rankings, increasing website visibility, and helping your practice attract high-intent local patients.",

    "We optimize your website with local SEO, targeted keywords, content improvements, and technical enhancements designed to support patient engagement and appointment growth.",

    "Our goal is to help your chiropractic practice build lasting online authority, generate consistent organic traffic, and achieve sustainable business growth through proven SEO strategies."
];

const CHIROPRACTOR_SEO_STRATEGY_ITEMS = [
    {
        title: "Local SEO for Chiropractors",
        description:
            "We optimize your chiropractic practice for local search results, helping nearby patients easily find your services through Google and map listings.",
        icon: HealthcareSeoAudit
    },
    {
        title: "Website Performance Optimization",
        description:
            "Our team improves website speed, mobile responsiveness, and technical SEO to create a better user experience and support stronger search visibility.",
        icon: LocalCompetitor
    },
    {
        title: "Chiropractic Competitor Analysis",
        description:
            "We analyze competing chiropractic clinics and identify opportunities to help your practice stand out in a competitive healthcare market.",
        icon: PatientIntentKeyword
    },
    {
        title: "On-Page SEO Enhancements",
        description:
            "We optimize service pages, headings, metadata, and website content to improve search relevance and patient engagement.",
        icon: ServicePageOptimization
    },
    {
        title: "Patient-Focused Keyword Research",
        description:
            "Our SEO specialists target high-intent chiropractic keywords that help attract patients actively searching for chiropractic treatments online.",
        icon: WebsiteOptimization
    },
    {
        title: "Authority & Trust Building",
        description:
            "We strengthen your online credibility with ethical SEO practices and quality backlink strategies that support long-term growth.",
        icon: SeoAuthority
    },
    {
        title: "SEO Content Strategy",
        description:
            "We create optimized content that educates patients, improves search rankings, and increases appointment inquiries for your chiropractic practice.",
        icon: ServicePageOptimization
    },
];

const CHIROPRACTOR_STEPS = [
    {
        step: "01",
        title: "Analyze Your Online Presence",
        description:
            "We evaluate your chiropractic website, local search visibility, and SEO performance to identify growth opportunities and improve online reach.",
    },
    {
        step: "02",
        title: "Optimize Chiropractic Service Pages",
        description:
            "We enhance your service pages, metadata, and website structure to help search engines better understand your chiropractic treatments and services.",
    },
    {
        step: "03",
        title: "Target Local Patient Searches",
        description:
            "Our SEO strategies focus on high-intent local keywords that help your practice connect with patients searching for chiropractic care nearby.",
    },
    {
        step: "04",
        title: "Improve Website Experience",
        description:
            "We optimize website speed, mobile responsiveness, and navigation to create a smooth user experience that encourages patient inquiries.",
    },
    {
        step: "05",
        title: "Monitor Growth & Rankings",
        description:
            "We continuously track rankings, traffic, and conversions to refine SEO strategies and support long-term growth for your chiropractic practice.",
    },
];

const CHIROPRACTOR_WORK_WITH_CARDS = [
    {
        title: "Local SEO Visibility",
        description:
            "We help chiropractic clinics appear in local search results so potential patients can quickly find your services in their area.",
        icon: OphthalmologySeo
    },
    {
        title: "Website SEO Improvements",
        description:
            "Our team enhances website speed, mobile experience, and technical SEO to improve rankings and patient engagement.",
        icon: DentalSeo
    },
    {
        title: "Targeted Chiropractic Keywords",
        description:
            "We research and implement high-value chiropractic keywords that attract patients actively searching for pain relief and wellness services.",
        icon: DermatologySeo
    },
    {
        title: "Optimized Service Pages",
        description:
            "We improve your website structure, content, and metadata to increase visibility and encourage more patient inquiries.",
        icon: ChiropracticSeo
    },
    {
        title: "SEO Authority Building",
        description:
            "We strengthen your online credibility with ethical SEO strategies and quality backlinks that support long-term growth.",
        icon: UrologySeo
    },
    {
        title: "Content Marketing Strategies",
        description:
            "We create engaging SEO-focused content that educates patients, improves search performance, and builds trust in your chiropractic practice.",
        icon: PlasticSurgerySeo
    },
];

const CHIROPRACTOR_SERVICE_GRID_ITEMS = [
    {
        title: "Customized SEO Roadmap",
        description:
            "We build tailored SEO strategies based on your chiropractic services, target audience, and local competition to improve online visibility.",
        icon: StrongerPractice
    },
    {
        title: "Comprehensive Website Analysis",
        description:
            "Our team reviews your website structure, search performance, and technical SEO to identify opportunities for stronger rankings and growth.",
        icon: MorePatient
    },
    {
        title: "Content & Keyword Optimization",
        description:
            "We optimize website content and implement high-intent chiropractic keywords that help attract patients searching for chiropractic care online.",
        icon: ConsistentOrganic
    },
    {
        title: "Local SEO Implementation",
        description:
            "We improve your local search presence across Google and map listings to help nearby patients easily discover your chiropractic clinic.",
        icon: SustainableCost
    },
    {
        title: "Authority Building Strategies",
        description:
            "We strengthen your website credibility with ethical SEO practices, quality backlinks, and optimized content that support long-term visibility.",
        icon: ImprovedLocal
    },
    {
        title: "SEO Monitoring & Growth Tracking",
        description:
            "We track rankings, traffic, and engagement metrics to continuously refine SEO strategies and support consistent patient growth.",
        icon: EnhancedPatient
    },
];

const FAQ_DATA = [
    {
        question: "How can SEO help grow my chiropractic business?",
        answer:
            "SEO improves your online presence so potential patients can easily find your chiropractic services through search engines, helping increase traffic and appointment bookings.",
    },
    {
        question: "What makes chiropractor SEO different from regular SEO?",
        answer:
            "Chiropractor SEO focuses on local patient searches, healthcare-related keywords, and strategies designed specifically for chiropractic clinics and wellness services.",
    },
    {
        question: "Will local SEO help my chiropractic clinic attract nearby patients?",
        answer:
            "Yes, local SEO improves your visibility in nearby searches and map listings, helping people in your area discover your chiropractic clinic more easily.",
    },
    {
        question: "Do chiropractor SEO services improve website rankings?",
        answer:
            "Yes, SEO strategies optimize your website content, structure, and authority to help improve rankings for chiropractic-related searches.",
    },
    {
        question: "Why is content important for chiropractic SEO?",
        answer:
            "SEO-focused content helps answer patient questions, improve keyword relevance, and build trust while increasing your website’s visibility in search engines.",
    },
];

const SeoServices = () => {
    return (
        <>
            <HeroSection
                heading={"Grow Your Practice with"}
                pinkHeading={"Chiropractor SEO Services"}
                description1={"Build a stronger online presence for your chiropractic practice with strategic SEO solutions that help potential patients easily find your services through search engines."}
                description2={"Our chiropractor SEO services improve local rankings, drive traffic, and generate more patient appointments for long-term practice growth."}
                bannerImage="/chiropractor/chiropractor-seo-banner.webp"
                altText={"Chiropractor SEO services helping practices grow online"}
                imageHeight="h-[200px] md:h-[373px]"
                imageClass="lg:min-h-[380px]"
            />
            <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
            <ServicesTwoGridSection
                background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
                headdingBlack="Effective Chiropractor SEO"
                headingBlue="For Practice Success"
                image="/chiropractor/chiropractor-seo-section.webp"
                paragraphs={seoService}
                headingBlueColor="text-secondary"
                headingBlackColor="text-white"
                limit={5}
                ctaText='Grow Your Chiropractic Practice'
                marginBottom="lg:mb-21"
                imageAltText="Effective chiropractor SEO strategies for practice success"
            />
            <Interactivecontent
                headingStart="SEO Strategies For"
                headingEnd="Chiropractic Practices"
                items={CHIROPRACTOR_SEO_STRATEGY_ITEMS}
                ctaText="Boost Your Online Presence"
                ctaHref=""
                padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20"
            />
            <CustomGeneration
                headdingBlack="Smart SEO Solutions For"
                headingBlue="Chiropractic Clinics"
                steps={CHIROPRACTOR_STEPS}
            />
            <WorkWithCards
                title="Advanced SEO Solutions For"
                highlightedTitle="Chiropractic Practices"
                description=""
                cards={CHIROPRACTOR_WORK_WITH_CARDS}
                showCards={3}
                ctaText="Grow Your Chiropractic Practice"
                ctaHref=""
                backgroundImage="/IndustryExpertise/seo-banner.webp"
            />
            <ServiceGridSection
                title="Our Growth-Driven SEO Approach For"
                highlightedTitle="Chiropractic Services"
                services={CHIROPRACTOR_SERVICE_GRID_ITEMS}
                // backgroundImage="/IndustryExpertise/seo-banner.webp"
                ctaText="Expand Your Chiropractic Reach"
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