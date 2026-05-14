import HeroSection from "@/app/components/common/SubServices/HeroSection/HeroSection";
import TrustedBy from "@/app/components/common/TrustedBy/TrustedBy";
import ReachWithUs from "@/app/components/common/Services/ReachWithUs/ReachWithUs";
import BusineesSell from "@/app/components/common/SubServices/BusineesSell/BusineesSell";
import FaqComponent from "@/app/components/common/SubServices/FaqComponent/FaqComponent";
import ServiceGridSection from "@/app/components/common/SubServices/ServiceGridSection/ServiceGridSection";
import ServicesTwoGridSection from "@/app/components/common/SubServices/ServicesTwoGridSection/ServicesTwoGridSection";
import WorkWithCards from "@/app/components/common/SubServices/WorkWithCards/WorkWithCards";
import reviewGeneration from '@/app/components/common/Icons/ReputationManagement/review-generation.svg'
import reviewMonitoring from '@/app/components/common/Icons/ReputationManagement/review-monitoring.svg'
import localReputation from '@/app/components/common/Icons/ReputationManagement/local-reputation.svg'
import negativeFeedback from '@/app/components/common/Icons/ReputationManagement/negative-feedback.svg'
import patientEngagement from '@/app/components/common/Icons/ReputationManagement/patient-engagement.svg'
import reputationReporting from '@/app/components/common/Icons/ReputationManagement/reputation-reporting.svg'

import localReputationBoost from '@/app/components/common/Icons/ReputationManagement/local-reputation-boost.svg'
import patients from '@/app/components/common/Icons/ReputationManagement/patients.svg'
import positiveReview from '@/app/components/common/Icons/ReputationManagement/positiveReview.svg'
import reputationInsight from '@/app/components/common/Icons/ReputationManagement/reputationInsights.svg'
import reviewMonitoringDetails from '@/app/components/common/Icons/ReputationManagement/reviewMonitoringdetails.svg'
import smartReviewResponse from '@/app/components/common/Icons/ReputationManagement/smartReviewResponse.svg'


const REPUTATION_DESCRIPTION = [
  "Patients often check online reviews and ratings before choosing a chiropractic clinic, making a strong reputation essential for attracting new patients.",

  "At Humans of Web, we help chiropractic clinics manage reviews, strengthen credibility, and create a trustworthy online image across digital platforms.",

  "Our reputation management strategies focus on improving patient feedback, increasing positive engagement, and maintaining a professional brand presence online.",

  "The result is a reliable online reputation that builds patient confidence, improves visibility, and supports long-term chiropractic clinic growth."
];

const MARKETING_WORK_CARDS = [
  {
    title: "Positive Review Growth",
    description:
      "We help chiropractic clinics encourage satisfied patients to leave positive reviews that improve trust and strengthen online credibility.",
    icon: reviewGeneration
  },
  {
    title: "Online Review Supervision",
    description:
      "Our team monitors reviews across multiple platforms to ensure patient feedback is managed professionally and consistently.",
    icon: reviewMonitoring
  },
  {
    title: "Reputation Recovery Support",
    description:
      "We handle negative feedback with thoughtful responses that protect your chiropractic clinic’s image and maintain patient confidence.",
    icon: negativeFeedback
  },
  {
    title: "Google & Local Presence Management",
    description:
      "We optimize your online presence across Google and local directories to improve discoverability and attract nearby patients.",
    icon: localReputation
  },
  {
    title: "Patient Communication Engagement",
    description:
      "We manage patient interactions and feedback responses to build stronger relationships and improve your clinic’s online reputation.",
    icon: patientEngagement
  },
  {
    title: "Review Insights & Reputation Tracking",
    description:
      "We provide detailed insights into reviews, ratings, and patient sentiment to help improve your chiropractic clinic’s reputation strategy.",
    icon: reputationReporting
  }
];

const CHIROPRACTOR_REPUTATION_ITEMS = [
  {
    title: "Authentic Patient Review Growth",
    description:
      "We help chiropractic clinics collect positive patient reviews that improve credibility, strengthen trust, and enhance online visibility.",
    icon: positiveReview
  },
  {
    title: "Online Feedback Monitoring",
    description:
      "Our team tracks patient reviews and ratings across platforms to help maintain a professional and trustworthy digital presence.",
    icon: reviewMonitoringDetails
  },
  {
    title: "Professional Reputation Responses",
    description:
      "We create thoughtful responses to patient feedback that demonstrate professionalism and strengthen confidence in your chiropractic clinic.",
    icon: smartReviewResponse
  },
  {
    title: "Google Presence Optimization",
    description:
      "We improve your visibility across Google and local business listings to help nearby patients easily discover your chiropractic services.",
    icon: localReputationBoost
  },
  {
    title: "Patient Relationship Engagement",
    description:
      "We help manage patient interactions and feedback conversations that improve communication and support long-term patient relationships.",
    icon: patients
  },
  {
    title: "Reputation Analytics & Reporting",
    description:
      "We provide valuable insights into patient sentiment, ratings, and review trends to strengthen your chiropractic clinic’s reputation strategy.",
    icon: reputationInsight
  },
];

const SELL_POINTS = [
  {
    number: "1",
    title: "Trusted Reputation Building Strategies",
    description:
      "We use patient-focused reputation strategies that help chiropractic clinics build trust, improve credibility, and maintain a positive online image.",
  },
  {
    number: "2",
    title: "Consistent Review & Feedback Management",
    description:
      "We monitor reviews, manage patient feedback, and maintain professional communication to keep your chiropractic reputation strong across platforms.",
  },
  {
    number: "3",
    title: "Focused on Patient Confidence & Growth",
    description:
      "We help chiropractic clinics strengthen patient trust, improve online perception, and support long-term business growth through reputation management.",
  },
];

const faqData = [
  {
    question: "What is chiropractor reputation management?",
    answer:
      "Chiropractor reputation management focuses on improving your clinic’s online image through patient reviews, feedback management, and strategies that build trust and credibility.",
  },
  {
    question: "Why is online reputation important for chiropractic clinics?",
    answer:
      "Patients often read reviews before choosing a chiropractic clinic, so a strong online reputation helps increase trust, improve credibility, and attract new patients.",
  },
  {
    question: "Can reputation management help increase patient inquiries?",
    answer:
      "Yes, positive reviews and a professional online presence can encourage potential patients to trust your clinic and contact you for chiropractic services.",
  },
  {
    question: "How do you manage negative patient reviews?",
    answer:
      "We respond to negative feedback professionally and strategically to protect your clinic’s reputation while maintaining patient confidence and trust.",
  },
  {
    question: "Do you monitor reviews across multiple platforms?",
    answer:
      "Yes, we monitor and manage reviews across Google, social media, and other platforms to maintain a consistent and positive chiropractic brand presence.",
  },
];

const ReputationManagement = () => {
  return (
    <>
      <HeroSection
        heading={"Reputation Management That"}
        pinkHeading={"Builds Patient Trust"}
        description1={
          "We help chiropractic clinics strengthen their online reputation, improve patient trust, and create a positive brand image that attracts new patients."
        }
        description2={
          "From review monitoring to reputation strategies, Humans of Web helps your clinic maintain a credible online presence that supports long-term growth."
        }
        bannerImage="/chiropractor/chiro-reputation-banner.webp"
        altText={
          "chiropractor reputation management improving patient trust and online credibility"
        }
        imageHeight="h-[200px] md:h-[373px]"
        imageClass="object-contain object-center lg:min-h-[425px]"
      />
      <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
      <ServicesTwoGridSection
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
        headdingBlack="Create a Reputation That"
        headingBlue="Patients Value Online"
        image="/chiropractor/chirp-management.webp"
        paragraphs={REPUTATION_DESCRIPTION}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
        limit={5}
        ctaText='Improve My Online Reputation'
        marginBottom="lg:mb-19"
        imageAltText="chiropractor reputation management strategy improving patient trust and online credibility"
      />
      <WorkWithCards
        title="Our Reputation Management"
        highlightedTitle="Services for Chiropractic Clinics"
        cards={MARKETING_WORK_CARDS}
        showCards={3}
        ctaText="Strengthen My Clinic Reputation"
        ctaHref=""
        padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20"
      />
      <ServiceGridSection
        title="Reputation Strategies That"
        highlightedTitle="Strengthen Your Clinic"
        services={CHIROPRACTOR_REPUTATION_ITEMS}
        ctaText="Build My Online Trust"
        ctaHref=""
      />
      <BusineesSell
        title="Why Chiropractic Clinics Choose"
        highlightedTitle="Humans Of Web for Reputation Management"
        ctaText="Strengthen My Online Reputation"
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
