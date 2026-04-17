import HeroSection from "@/app/components/common/SubServices/HeroSection/HeroSection";
import TrustedBy from "@/app/components/common/TrustedBy/TrustedBy";
import ServicesTwoGridSection from "@/app/components/common/SubServices/ServicesTwoGridSection/ServicesTwoGridSection";
import SaveTimeEffort from "./SaveTimeEffort/SaveTimeEffort";
import WorkWithCards from "@/app/components/common/SubServices/WorkWithCards/WorkWithCards";
import ServiceGridSection from "@/app/components/common/SubServices/ServiceGridSection/ServiceGridSection";
import BusineesSell from "@/app/components/common/SubServices/BusineesSell/BusineesSell";
import FaqComponent from "@/app/components/common/SubServices/FaqComponent/FaqComponent";
import ReachWithUs from "@/app/components/common/Services/ReachWithUs/ReachWithUs";

const mediaDescription = [
    "Social media is where customers discover brands, compare products, ask questions, save ideas, and decide who feels trustworthy enough to buy from.",
    "At Humans of Web, we build social strategies that combine audience insight, content planning, creative direction, community signals, and performance tracking.",
    "We help your brand show up consistently with useful content, sharper product storytelling, and campaigns that support both awareness and conversion.",
    "The result is a social presence that feels active, credible, and connected to your wider ecommerce growth strategy."
];

const Marketing_WORK_CARDS = [
    {
        title: "Strategy Before Posting",
        description: "We define your audience, platforms, content pillars, offers, and goals before building a social plan.",
        // icon: detailedAuditIcon,
    },
    {
        title: "Content With a Purpose",
        description: "We create content angles that educate, inspire, answer objections, show product value, and move customers closer to action.",
        // icon: competitorAnalysisIcon,
    },
    {
        title: "Brand Consistency",
        description: "We keep your social content aligned with your website, email, ads, and customer experience so the brand feels clear everywhere.",
        // icon: keywordResearchIcon,
    },
    {
        title: "Performance Learning",
        description: "We review engagement, reach, clicks, content themes, and conversion signals to keep improving the social plan.",
        // icon: technicalSeoIcon,
    },
    {
        title: "Conversion-Focused Execution",
        description: "We optimize posts, CTAs, and campaigns to turn engagement into leads, sales, and measurable business outcomes.",
        // icon: contentOptimizationIcon,
    }
];

const serviceSocialItems = [
    {
        title: "Social Strategy",
        description:
            "Platform, audience, content pillar, posting, and campaign planning that gives your social presence a clear direction.",
        // icon: strategyIcon,
    },
    {
        title: "Content Planning",
        description:
            "Monthly content themes, product stories, educational ideas, launch support, and creative angles designed for ecommerce audiences.",
        // icon: contentIcon,
    },
    {
        title: "Paid Social Support",
        description:
            "Ad messaging, creative direction, audience thinking, and performance insights to support campaigns across platforms like Meta.",
        // icon: paidMediaIcon,
    },
    {
        title: "Conversion-Focused Campaigns",
        description:
            "Social campaigns designed to support product launches, offers, seasonal moments, lead generation, and sales-focused journeys.",
        // icon: conversionIcon,
    },
    {
        title: "Community and Trust Signals",
        description:
            "Guidance for social proof, comments, UGC-style content, reviews, and brand conversations that make your presence feel credible.",
        // icon: brandIcon,
    },
    {
        title: "Social Reporting",
        description:
            "Clear reports on reach, engagement, traffic, campaign response, and content learning so each month becomes smarter than the last.",
        // icon: analyticsIcon,
    },
]

const sellPoints = [
    {
        number: "1",
        title: "More Trust Before the Click",
        description:
            "Customers often check social before buying. A stronger presence helps your brand feel current, credible, and worth exploring.",
    },
    {
        number: "2",
        title: "Better Content for Every Channel",
        description:
            "Social ideas can support ads, email, landing pages, product launches, and customer education across your marketing ecosystem.",
    },
    {
        number: "3",
        title: "Clearer Paths From Attention to Action",
        description:
            "We align social content with website journeys, offers, and product pages so attention has a practical next step.",
    },
]

const faqData = [
    {
      question: "What platforms do you support?",
      answer:
        "We can plan ecommerce social strategies for platforms such as Instagram, Facebook, TikTok, LinkedIn, Pinterest, and YouTube depending on your audience and goals.",
    },
    {
      question: "Do you create social media content?",
      answer:
        "We provide strategy, content planning, copy, creative direction, campaign angles, and performance insights to support social execution.",
    },
    {
      question: "Can social media drive ecommerce sales?",
      answer:
        "Yes. Social media can support discovery, trust, product education, retargeting, campaign traffic, and repeat customer engagement.",
    },
    {
      question: "Do you help with paid social campaigns?",
      answer:
        "Yes. We can support paid social strategy, ad messaging, creative direction, campaign planning, and performance learning.",
    },
    {
      question: "How do you measure social media success?",
      answer:
        "We look at reach, engagement, traffic, audience growth, content learnings, assisted conversions, campaign response, and how social supports wider ecommerce goals.",
    },
  ]

const SocialMediaMarketing = () => {
    return (
        <>
            <HeroSection
                heading={"Social Media Marketing That"}
                pinkHeading={"Builds Brand Demand"}
                description1={"We help ecommerce brands turn social attention into trust, traffic, and sales with content and campaigns built around real customer behavior."}
                description2={"From organic storytelling to paid social support, Humans of Web creates social strategies that keep your brand visible, useful, and conversion-ready."}
                bannerImage="/websiteDesign/website-banner.webp"
                altText={"websites that grow with you"}
            />
            <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
            <ServicesTwoGridSection
                background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
                headdingBlack="Social Media Built for"
                headingBlue=" Ecommerce Growth"
                image="/IndustryExpertise/eCommerce/marketAnalyzerImage.webp"
                paragraphs={mediaDescription}
                headingBlueColor="text-secondary"
                headingBlackColor="text-white"
                limit={5}
                ctaText='Grow My Social Presence'
            />
            <SaveTimeEffort />
            <WorkWithCards
                title="Why Work With Humans Of Web for"
                highlightedTitle="Social Media Marketing?"
                cards={Marketing_WORK_CARDS}
                showCards={3}
                ctaText="Build My Social Strategy"
                ctaHref=""
                backgroundImage="/IndustryExpertise/eCommerce/marketAnalyzerImage.webp"
            />
            <ServiceGridSection
                title="Social Media Services"
                highlightedTitle="for Ecommerce Brands"
                services={serviceSocialItems}
                ctaText="Start Social Growth"
                ctaHref=""
            />
            <BusineesSell
                title="Social Marketing That"
                highlightedTitle="Supports the Full Funnel"
                ctaText="Grow My Social Channel"
                points={sellPoints}
            />
            <FaqComponent
                title="Frequently asked questions"
                items={faqData}
                defaultOpen={0}
            />
            <ReachWithUs />
        </>
    );
};

export default SocialMediaMarketing;
