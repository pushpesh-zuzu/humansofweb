import ReachWithUs from "@/app/components/common/Services/ReachWithUs/ReachWithUs";
import FaqComponent from "@/app/components/common/SubServices/FaqComponent/FaqComponent";
import HeroSection from "@/app/components/common/SubServices/HeroSection/HeroSection";
import Interactivecontent from "@/app/components/common/SubServices/Interactivecontent/Interactivecontent";
import ServicesTwoGridSection from "@/app/components/common/SubServices/ServicesTwoGridSection/ServicesTwoGridSection";
import WorkWithCards from "@/app/components/common/SubServices/WorkWithCards/WorkWithCards";
import TrustedBy from "@/app/components/common/TrustedBy/TrustedBy";
import CustomGeneration from "@/app/components/Home/CustomGeneration";

const serviceParagraph = [
  "More traffic is useful only when your store is ready to convert it. CRO helps you get more value from the visitors you already attract.",
  "At Humans of Web, we analyze how customers browse, where they hesitate, what slows decisions, and which parts of the journey create drop-offs.",
  "We improve product pages, landing pages, navigation, checkout flows, messaging, and trust signals so customers can move from interest to purchase with less friction.",
  "Our CRO work is grounded in evidence, not guesswork, giving your ecommerce brand a smarter path to more revenue and better customer experience."
]

const CRO_WORK_CARDS = [{
  title: "Data-Led Diagnosis",
  description:
    "We review analytics, behavior patterns, funnels, and page performance to find the friction that is costing your store sales.",
  // icon: analyticsIcon,
},
{
  title: "Customer Journey Clarity",
  description:
    "We make browsing, product discovery, comparison, and checkout easier so customers understand what to do next.",
  // icon: userJourneyIcon,
},
{
  title: "Conversion-Focused UX",
  description:
    "We improve layouts, copy, trust elements, calls to action, and mobile usability to support confident buying decisions.",
  // icon: conversionIcon,
},
{
  title: "Testing and Iteration",
  description:
    "We prioritize changes, measure impact, and keep refining the experience so CRO becomes a repeatable growth process.",
  // icon: detailedAuditIcon,
},
]

const CRO_STRATEGY_ITEMS = [
  {
    title: "UX Design & Development",
    description:
      "We design and develop seamless user experiences that guide customers effortlessly through their buying journey. From intuitive navigation to mobile responsiveness, every element is crafted to engage users and improve conversions.",
    // icon: DetailedAuditIcon,
  },
  {
    title: "Content Personalization",
    description:
      "We create personalized experiences based on user behavior, preferences, and purchase history. This helps deliver relevant content that not only improves engagement but also encourages repeat visits and conversions.",
    // icon: CompetitorAnalysisIcon,
  },
  {
    title: "A/B Testing",
    description:
      "We test different versions of key elements like headlines, visuals, and CTAs to identify what works best. This data-driven approach helps continuously improve performance and maximize conversion rates.",
    // icon: KeywordResearchIcon,
  },
  {
    title: "eCommerce Consulting & Strategy",
    description:
      "We build tailored CRO strategies based on your business goals and challenges. Our approach focuses on long-term growth by aligning optimization efforts with your brand and market dynamics.",
    // icon: OnSiteContentIcon,
  },
  {
    title: "Conversion Funnel Optimization",
    description:
      "We analyze and optimize every stage of your sales funnel to reduce drop-offs and improve conversions. From landing pages to checkout, we identify friction points and streamline the journey to turn more visitors into customers.",
    // icon: ContentOptimizationIcon,
  }
]

const STEPS = [
  {
    step: "01",
    title: "CRO Audit",
    description: "We start with a deep audit of your store, analyzing user behavior, funnels, and key pages. This helps uncover hidden issues and opportunities, giving you a clear roadmap for improving conversions.",
    icon: "",
  },
  {
    step: "02",
    title: "Custom CRO Strategy (Scope)",
    description: "Every business is different, so we build a tailored CRO strategy aligned with your goals. Our approach focuses on what will drive the most impact for your brand and audience.",
    icon: "",
  },
  {
    step: "03",
    title: "Quick-Win Mini Audit",
    description: "We identify fast, high-impact improvements that can deliver immediate results. This ensures you start seeing conversion gains quickly while building toward long-term optimization.",
    icon: "",
  },
  {
    step: "04",
    title: "Testing & Optimization",
    description: "We run continuous A/B and multivariate tests on key elements like headlines, layouts, and CTAs. This data-driven process helps refine your store for maximum performance.",
    icon: "",
  },
  {
    step: "05",
    title: "Site Speed Optimization",
    description: "We improve your website speed by optimizing assets and performance. Faster load times create a smoother user experience and directly boost conversions.",
    icon: "",
  },
];

const FAQ_DATA = [{
  question: "What does CRO mean for ecommerce?",
  answer:
    "CRO, or conversion rate optimization, improves your store experience so more visitors complete valuable actions like adding to cart, checking out, or requesting a quote.",
},
{
  question: "Do I need more traffic before CRO?",
  answer:
    "Not always. If your store already receives traffic but sales are weaker than expected, CRO can help you get more value from those visitors.",
},
{
  question: "What pages do you optimize?",
  answer:
    "We can optimize landing pages, product pages, category pages, cart flows, checkout steps, forms, and other key conversion paths.",
},
{
  question: "How do you decide what to change first?",
  answer:
    "We prioritize based on analytics, customer behavior, page importance, friction level, expected impact, and implementation effort.",
},
{
  question: "Can CRO work with SEO and PPC?",
  answer:
    "Yes. CRO often strengthens SEO and PPC results because better landing pages and product experiences help more traffic convert.",
}]
const Cro = () => {
  return (
    <>
      <HeroSection
        heading={"CRO Services That"}
        pinkHeading={"Turn Traffic Into Revenue"}
        description1={"We help ecommerce brands improve conversion rates by finding friction, testing stronger experiences, and making every key page easier to buy from."}
        description2={"Humans of Web combines analytics, UX thinking, and persuasive messaging to help more visitors become customers without simply spending more on traffic."}
        bannerImage="/"
        altText={"conversion rate optimization dashboard and ecommerce website improving user experience"}
      />
      <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
      <ServicesTwoGridSection
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
        headdingBlack="Conversion Rate Optimization"
        headingBlue="for Serious Growth"
        image="/IndustryExpertise/eCommerce/marketAnalyzerImage.webp"
        paragraphs={serviceParagraph}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
        limit={5}
        ctaText='Improve My Conversion Rate'
      />
      <WorkWithCards
        title="Why Businesses Rely On"
        highlightedTitle="Humans Of Web for CRO"
        cards={CRO_WORK_CARDS}
        showCards={2}
        ctaText="Build My Social Strategy"
        ctaHref=""
        backgroundImage="/IndustryExpertise/eCommerce/marketAnalyzerImage.webp"
        padding='py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20'
      />
      <Interactivecontent
        headingStart="Advanced CRO Services for"
        headingEnd="E-commerce Growth"
        items={CRO_STRATEGY_ITEMS}
        ctaText="Get Your Free CRO"
        ctaHref=""
      />
      <CustomGeneration
        headdingBlack="Steps We Take to Increas"
        headingBlue="Your Conversions"
        steps={STEPS}
      />
      <FaqComponent
        title="Frequently asked questions"
        items={FAQ_DATA}
        defaultOpen={0}
      />
      <ReachWithUs />
    </>
  );
};

export default Cro;
