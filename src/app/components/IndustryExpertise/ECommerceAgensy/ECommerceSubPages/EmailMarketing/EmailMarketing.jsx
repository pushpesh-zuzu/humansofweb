import ReachWithUs from "@/app/components/common/Services/ReachWithUs/ReachWithUs";
import BusineesSell from "@/app/components/common/SubServices/BusineesSell/BusineesSell";
import FaqComponent from "@/app/components/common/SubServices/FaqComponent/FaqComponent";
import HeroSection from "@/app/components/common/SubServices/HeroSection/HeroSection";
import ServiceGridSection from "@/app/components/common/SubServices/ServiceGridSection/ServiceGridSection";
import ServicesTwoGridSection from "@/app/components/common/SubServices/ServicesTwoGridSection/ServicesTwoGridSection";
import WorkWithCards from "@/app/components/common/SubServices/WorkWithCards/WorkWithCards";
import TrustedBy from "@/app/components/common/TrustedBy/TrustedBy";
import buildsTrust from '../../../../common/Icons/emailMarketing/copy-builds.svg'
import lifecycle from '../../../../common/Icons/emailMarketing/lifecycle-strategy.svg'
import revenue from '../../../../common/Icons/emailMarketing/revenue-reporting.svg'
import segmentation from '../../../../common/Icons/emailMarketing/segmentation-matters.svg'
import performanceReporting from '../../../../common/Icons/emailMarketing/performance-reporting.svg'
import listGrowth from '../../../../common/Icons/emailMarketing/list-growth.svg'
import emailStrategy from '../../../../common/Icons/emailMarketing/email-strategy.svg'
import campaignCreative from '../../../../common/Icons/emailMarketing/campaign-creative.svg'
import automatedEmail from '../../../../common/Icons/emailMarketing/automated-email.svg'
import audience from '../../../../common/Icons/emailMarketing/audience.svg'


const serviceParagraph = [
  "Email is one of the strongest owned channels for ecommerce because it lets you reach customers without depending only on ads or algorithms.",
  "At Humans of Web, we create email strategies that turn first-time visitors into subscribers, subscribers into buyers, and buyers into repeat customers.",
  "We build automated flows, campaign calendars, segmentation logic, and performance reporting around the moments that matter most to your customer journey.",
  "The goal is simple: send better messages to the right people at the right time, while protecting trust and increasing long-term customer value.",
]

const EMAIL_WORK_CARDS = [
  {
    title: "Lifecycle Strategy",
    description:
      "We plan emails around customer stages such as welcome, browse, cart, purchase, repeat order, winback, and loyalty.",
    icon: lifecycle,
  },
  {
    title: "Segmentation That Matters",
    description:
      "We group audiences by behavior, purchase history, engagement, and intent so your campaigns feel more relevant.",
    icon: segmentation,
  },
  {
    title: "Copy That Builds Trust",
    description:
      "We write clear, helpful, conversion-aware emails that communicate value without exhausting your audience.",
    icon: buildsTrust,
  },
  {
    title: "Revenue-Focused Reporting",
    description:
      "We monitor flow revenue, campaign performance, list health, engagement, and customer behavior so the channel keeps improving.",
    icon: revenue,
  },
]

const SERVICE_GRID_ITEMS = [
  {
    title: "Email Strategy and Planning",
    description:
      "A clear roadmap for campaigns, automations, segments, offers, and messaging based on your goals and customer journey.",
    icon: emailStrategy,
  },
  {
    title: "Automated Email Flows",
    description:
      "Welcome, abandoned cart, browse abandonment, post-purchase, replenishment, review, winback, and loyalty flows built to recover revenue.",
    icon: automatedEmail,
  },
  {
    title: "Campaign Copy and Creative Direction",
    description:
      "Email copy, content angles, subject lines, and creative guidance that make campaigns useful, clear, and conversion-focused.",
    icon: campaignCreative,
  },
  {
    title: "Audience Segmentation",
    description:
      "Behavior and purchase-based audience groups that help you send more relevant messages to subscribers and customers.",
    icon: audience,
  },
  {
    title: "List Growth Optimization",
    description:
      "Popup, form, incentive, and lead capture improvements designed to grow your list with better-fit subscribers.",
    icon: listGrowth,
  },
  {
    title: "Performance Reporting",
    description:
      "Reporting on revenue, engagement, deliverability indicators, and flow opportunities so your email channel keeps getting stronger.",
    icon: performanceReporting,
  },
]

const sellPoints = [
  {
    number: "1",
    title: "More Revenue From Owned Audiences",
    description:
      "Email helps your brand communicate with customers directly instead of relying only on paid traffic and platform algorithms.",
  },
  {
    number: "2",
    title: "Automations That Work Every Day",
    description:
      "Strong lifecycle flows recover missed sales, educate new subscribers, encourage reviews, and bring past buyers back.",
  },
  {
    number: "3",
    title: "Better Retention and Repeat Purchases",
    description:
      "Relevant email experiences help customers remember your brand, understand your products, and return when they are ready to buy again.",
  },
]

const faqData = [
  {
    question: "What email flows should an ecommerce store have?",
    answer:
      "Most ecommerce stores benefit from welcome, abandoned cart, browse abandonment, post-purchase, review request, replenishment, winback, and loyalty flows.",
  },
  {
    question: "Do you write email copy?",
    answer:
      "Yes. We create email copy, subject lines, content angles, campaign messaging, and creative direction for flows and campaign sends.",
  },
  {
    question: "Can email marketing increase repeat purchases?",
    answer:
      "Yes. Well-timed product education, post-purchase support, replenishment reminders, loyalty messages, and winback campaigns can encourage customers to buy again.",
  },
  {
    question: "How often should ecommerce brands send emails?",
    answer:
      "Send frequency depends on your audience, offer calendar, list health, and content quality. We balance consistency with relevance so subscribers stay engaged.",
  },
  {
    question: "Do you help with segmentation?",
    answer:
      "Yes. We create useful audience segments based on behavior, purchase history, engagement, lifecycle stage, and customer intent.",
  },
]

const EmailMarketing = () => {
  return (
    <>
      <HeroSection
        heading={"Email Marketing That"}
        pinkHeading={"Brings Customers Back"}
        description1={"We build ecommerce email and automation systems that nurture shoppers, recover lost carts, increase repeat purchases, and grow customer lifetime value."}
        description2={"Humans of Web combines strategy, copy, segmentation, flows, campaigns, and reporting so your owned channel becomes a reliable revenue engine."}
        bannerImage="/emailMarketing/email-banner.svg"
        altText={"email marketing strategy increasing customer lifetime value and repeat sales"}
      />
      <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
      <ServicesTwoGridSection
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
        headdingBlack="Email Marketing Built for"
        headingBlue="Retention and Revenue"
        image="/IndustryExpertise/eCommerce/marketAnalyzerImage.webp"
        paragraphs={serviceParagraph}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
        limit={5}
        ctaText='Grow My Email Revenue'
      />
      <WorkWithCards
        title="What Makes Humans Of Web Different"
        highlightedTitle="in Email Marketing"
        cards={EMAIL_WORK_CARDS}
        showCards={3}
        ctaText="Build My Social Strategy"
        ctaHref=""
        backgroundImage="/IndustryExpertise/eCommerce/marketAnalyzerImage.webp"
        padding='py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20'
      />
      <ServiceGridSection
        title="Email Marketing Services"
        highlightedTitle="for Ecommerce Growth"
        services={SERVICE_GRID_ITEMS}
        backgroundImage="/IndustryExpertise/seo-banner.webp"
        ctaText="Build My Email System"
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
        position="mx-auto"
      />
      <ReachWithUs />
    </>
  );
};

export default EmailMarketing;
