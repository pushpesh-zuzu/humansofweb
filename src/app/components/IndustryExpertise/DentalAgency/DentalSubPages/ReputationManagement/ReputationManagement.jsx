import HeroSection from "@/app/components/common/SubServices/HeroSection/HeroSection";
import TrustedBy from "@/app/components/common/TrustedBy/TrustedBy";
import ReachWithUs from "@/app/components/common/Services/ReachWithUs/ReachWithUs";
import BusineesSell from "@/app/components/common/SubServices/BusineesSell/BusineesSell";
import FaqComponent from "@/app/components/common/SubServices/FaqComponent/FaqComponent";
import ServiceGridSection from "@/app/components/common/SubServices/ServiceGridSection/ServiceGridSection";
import ServicesTwoGridSection from "@/app/components/common/SubServices/ServicesTwoGridSection/ServicesTwoGridSection";
import WorkWithCards from "@/app/components/common/SubServices/WorkWithCards/WorkWithCards";


const REPUTATION_DESCRIPTION = [
    "In today’s digital world, your clinic’s reputation plays a major role in attracting and retaining patients. We help you build a strong online presence that reflects trust, quality care, and patient satisfaction.",

    "At Humans of Web, we create tailored reputation management strategies that focus on improving reviews, enhancing visibility, and building a positive perception of your dental practice.",

    "We manage everything from monitoring patient feedback to responding to reviews, ensuring your clinic maintains a professional and trustworthy image across all platforms.",

    "Our goal is to turn every patient interaction into a positive experience that strengthens your credibility, boosts ratings, and helps your clinic grow consistently over time."
];

const MARKETING_WORK_CARDS = [
    {
        title: "Review Generation Strategy",
        description:
            "We help you collect more positive reviews from satisfied patients, improving your ratings and building stronger trust online.",
    },
    {
        title: "Review Monitoring & Management",
        description:
            "We track and manage your reviews across platforms, ensuring every patient feedback is addressed professionally and on time.",
    },
    {
        title: "Negative Feedback Handling",
        description:
            "We respond to negative reviews with the right approach, helping protect your reputation and maintain patient confidence.",
    },
    {
        title: "Local Reputation Optimization",
        description:
            "We enhance your presence on Google and local platforms, improving visibility and making your clinic more discoverable to nearby patients.",
    },
    {
        title: "Patient Engagement & Response",
        description:
            "We engage with patient queries and feedback, creating a positive communication channel that builds loyalty and trust.",
    },
    {
        title: "Reputation Reporting & Insights",
        description:
            "We provide clear insights into ratings, reviews, and patient sentiment to help you continuously improve your clinic’s reputation.",
    }
];

const DENTAL_REPUTATION_ITEMS = [
    {
        title: "Positive Review Generation",
        description:
            "We help you consistently collect genuine positive reviews from happy patients, improving your ratings and building strong trust online.",
    },
    {
        title: "Review Monitoring",
        description:
            "We track your reviews across platforms, ensuring you stay updated on patient feedback and maintain a strong digital presence.",
    },
    {
        title: "Smart Review Responses",
        description:
            "We craft professional responses to both positive and negative reviews, helping you build credibility and show patients you care.",
    },
    {
        title: "Local Reputation Boost",
        description:
            "We optimize your presence on Google and local listings so your clinic stands out when patients search for dental services nearby.",
    },
    {
        title: "Patient Engagement",
        description:
            "We help you engage with patients through feedback and queries, strengthening relationships and improving overall satisfaction.",
    },
    {
        title: "Reputation Insights & Growth",
        description:
            "We provide clear reports and insights into your reviews and ratings to help you continuously improve and grow your clinic’s reputation.",
    },
];

const SELL_POINTS = [
    {
        number: "1",
        title: "Proven Reputation Strategies",
        description:
            "We use ethical, data-driven methods to improve your online image, helping your business build trust through authentic reviews and positive feedback.",
    },
    {
        number: "2",
        title: "Transparent & Consistent Management",
        description:
            "We monitor, manage, and respond to feedback across platforms, ensuring your reputation stays strong and consistently reflects your brand values.",
    },
    {
        number: "3",
        title: "Focused on Trust & Growth",
        description:
            "We turn customer experiences into credibility, helping you build long-term trust, improve brand perception, and drive sustainable business growth.",
    },
];

const faqData = [
    {
        question: "What is dental reputation management?",
        answer:
            "Dental reputation management involves building and maintaining a positive online presence for your clinic. It includes managing reviews, responding to feedback, and ensuring your practice is seen as trustworthy by potential patients.",
    },
    {
        question: "Why is reputation management important for dental clinics?",
        answer:
            "A strong online reputation helps build patient trust, improves credibility, and influences decision-making. Positive reviews and active engagement make it easier for new patients to choose your clinic.",
    },
    {
        question: "How long does dental reputation management take?",
        answer:
            "Reputation management is an ongoing process. While improvements in reviews and visibility can be seen within a few weeks, building a strong and consistent reputation takes continuous effort over time.",
    },
    {
        question: "How much does dental reputation management cost?",
        answer:
            "The cost depends on your clinic’s needs, competition, and goals. Flexible plans can be created to focus on review growth, monitoring, and overall reputation improvement.",
    },
    {
        question: "How do you handle negative reviews?",
        answer:
            "Negative reviews are addressed professionally and promptly. The focus is on resolving concerns, showing responsiveness, and maintaining a positive brand image while improving patient trust.",
    },
];

const ReputationManagement = () => {
    return (
        <>
            <HeroSection
                heading={"Online Reputation That"}
                pinkHeading={"Grows Your Clinic"}
                description1={"We help dental clinics strengthen their online reputation, collect positive reviews, and build credibility that attracts new patients and trust."}
                description2={"From review management to patient feedback strategies, Humans of Web helps you maintain a strong, trustworthy online presence that supports long-term clinic growth."}
                bannerImage="/"
                altText={"dental reputation management building trust and positive online presence"}
            />
            <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
            <ServicesTwoGridSection
                background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
                headdingBlack="Build a Reputation That"
                headingBlue="Patients Trust Online"
                image="/"
                paragraphs={REPUTATION_DESCRIPTION}
                headingBlueColor="text-secondary"
                headingBlackColor="text-white"
                limit={5}
                ctaText='Strengthen My Reputation'
            />
            <WorkWithCards
                title="Our Reputation Management"
                highlightedTitle="Services for Dental Clinics"
                cards={MARKETING_WORK_CARDS}
                showCards={3}
                ctaText="Improve My Online Reputation"
                ctaHref=""
                backgroundImage="/"
                padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20"
            />
            <ServiceGridSection
                title="Reputation Management That"
                highlightedTitle="Gets Your Clinic Noticed"
                services={DENTAL_REPUTATION_ITEMS}
                ctaText="Improve My Online Reputation"
                ctaHref=""
            />
            <BusineesSell
                title="Why Businesses Trust"
                highlightedTitle="Humans Of Web for Reputation Management"
                ctaText="Improve My Online Reputation"
                points={SELL_POINTS}
            />
            <FaqComponent
                title="Frequently asked questions"
                items={faqData}
                defaultOpen={0}
                position="mx-auto"
            />
            <ReachWithUs />
        </>
    );
};

export default ReputationManagement;
