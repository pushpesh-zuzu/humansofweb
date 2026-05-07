import React from 'react'
import HeroSection from '@/app/components/common/SubServices/HeroSection/HeroSection'
import ServiceGridSection from '@/app/components/common/SubServices/ServiceGridSection/ServiceGridSection';
import ServicesTwoGridSection from '@/app/components/common/SubServices/ServicesTwoGridSection/ServicesTwoGridSection'
import WorkWithCards from '@/app/components/common/SubServices/WorkWithCards/WorkWithCards';
import TrustedBy from '@/app/components/common/TrustedBy/TrustedBy'
import FaqComponent from '@/app/components/common/SubServices/FaqComponent/FaqComponent';
import ReachWithUs from '@/app/components/common/Services/ReachWithUs/ReachWithUs';

const HEALTHCARE_MANAGEMENT = [
    "At Humans of Web, our healthcare link-building expertise helps strengthen your website authority and improve visibility across search engines. We focus on securing quality backlinks that connect your healthcare practice with the right target audience.",

    "Our team uses strategic outreach and industry-relevant link-building methods to improve rankings, increase organic traffic, and build long-term online credibility. We help your healthcare business stand out in competitive search results and attract more potential patients.",

    "We continuously implement effective healthcare SEO strategies designed to support sustainable growth and stronger search performance. Our goal is to help your practice gain higher visibility, drive valuable traffic, and achieve long-term online success."
];

const WORK_WITH_CARDS = [
    {
        title: "High-Authority Backlink Building",
        description:
            "We secure quality backlinks from trusted and relevant healthcare websites to strengthen your domain authority and improve search engine visibility.",
    },
    {
        title: "Targeted Outreach Strategies",
        description:
            "Our outreach campaigns focus on niche-relevant platforms that help your healthcare business connect with the right audience and generate valuable organic traffic.",
    },
    {
        title: "Improved Organic Search Rankings",
        description:
            "We implement effective link-building strategies that help your healthcare website rank higher in search results and increase online discoverability.",
    },
    {
        title: "Customized SEO Link Strategies",
        description:
            "Our team creates tailored healthcare link-building plans designed around your services, goals, and target market for long-term SEO success.",
    },
    {
        title: "Stronger Online Brand Credibility",
        description:
            "By earning backlinks from reputable sources, we help build trust, authority, and credibility for your healthcare practice across search engines.",
    },
    {
        title: "Long-Term Healthcare SEO Growth",
        description:
            "We focus on sustainable link-building methods that improve online visibility, drive qualified traffic, and support consistent business growth.",
    }
];

const LINK_BUILDING_ITEMS = [
    {
        title: "SEO Discovery & Strategy",
        description:
            "We analyze your healthcare website, backlink profile, and SEO goals to create a customized link-building strategy focused on long-term search growth.",
    },
    {
        title: "Authority Website Research",
        description:
            "Our team identifies trusted and relevant healthcare websites that can provide high-quality backlinks to improve your online authority and rankings.",
    },
    {
        title: "Content Creation & Outreach",
        description:
            "We develop engaging SEO-friendly content and perform targeted outreach to secure valuable backlinks from reputable industry-related websites.",
    },
    {
        title: "Content Review & Approval",
        description:
            "Before publishing, we share all backlink content for your approval to ensure it aligns with your healthcare brand, services, and SEO objectives.",
    },
    {
        title: "High-Quality Link Placement",
        description:
            "We publish backlinks on authoritative platforms that help strengthen your website credibility, improve rankings, and increase organic traffic.",
    },
    {
        title: "Performance Tracking & Reports",
        description:
            "Our team provides detailed reporting and SEO insights so you can monitor backlink performance, keyword improvements, and overall growth.",
    },
];

const FAQDATA = [
    {
        question: "What are healthcare link building services?",
        answer:
            "Healthcare link building services help improve your website’s authority and search rankings by securing high-quality backlinks from trusted and relevant healthcare-related websites.",
    },
    {
        question: "Why is link building important for healthcare websites?",
        answer:
            "Link building increases your online credibility, improves search engine visibility, and helps your healthcare practice attract more organic traffic and potential patients.",
    },
    {
        question: "How do you build backlinks for healthcare businesses?",
        answer:
            "We use strategic outreach, guest posting, content promotion, and niche-relevant placements to earn quality backlinks from authoritative healthcare and industry websites.",
    },
    {
        question: "How long does healthcare link building take to show results?",
        answer:
            "SEO and link-building results typically take a few months to become noticeable, depending on your competition, website authority, and overall SEO strategy.",
    },
    {
        question: "Do you use safe healthcare link-building strategies?",
        answer:
            "Yes, we follow ethical white-hat SEO practices focused on securing natural and high-quality backlinks that support long-term search engine growth and website authority.",
    },
];

const LinkBuildingServices = () => {
    return (
        <>
            <HeroSection
                heading={"Healthcare Link Building for"}
                pinkHeading={"More Patient Visibility"}
                description1={"Boost your healthcare website’s authority with strategic link-building solutions designed to improve search rankings, strengthen credibility, and attract more potential patients."}
                description2={"Our team secures high-quality backlinks from trusted websites to increase organic visibility, drive targeted traffic, and support long-term growth for your healthcare practice."}
                bannerImage="/healthcare/link_building_banner.webp"
                altText={"Healthcare link building services improving SEO rankings and patient acquisition through quality backlinks"}
            />
            <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
            <ServicesTwoGridSection
                background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
                headdingBlack="Build Stronger Rankings With "
                headingBlue="Healthcare Link Building"
                image="/healthcare/build_stronger.webp"
                imageAltText="Healthcare link building services improving SEO rankings, website authority, and organic patient growth"
                paragraphs={HEALTHCARE_MANAGEMENT}
                headingBlueColor="text-secondary"
                headingBlackColor="text-white"
                ctaText="Boost Healthcare SEO"
                limit={5}
            />
            <WorkWithCards
                title="Why Healthcare Brands Choose"
                highlightedTitle="Our Link Building Experts?"
                description=""
                cards={WORK_WITH_CARDS}
                showCards={3}
                ctaText="Boost Your SEO Authority"
                ctaHref=""
                backgroundImage="/IndustryExpertise/seo-banner.webp"
                padding='py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20'
            />
            <ServiceGridSection
                title="Healthcare Link Building That"
                highlightedTitle="Drives SEO Growth"
                services={LINK_BUILDING_ITEMS}
                ctaText="Strengthen My SEO Presence"
                ctaHref=""
            />
            <FaqComponent
                title="Frequently asked questions"
                items={FAQDATA}
                defaultOpen={0}
                position="mx-auto"
            />
            <ReachWithUs />
        </>
    )
}

export default LinkBuildingServices