import ReachWithUs from "@/app/components/common/Services/ReachWithUs/ReachWithUs";
import FaqComponent from "@/app/components/common/SubServices/FaqComponent/FaqComponent";
import HeroSection from "@/app/components/common/SubServices/HeroSection/HeroSection";
import Interactivecontent from "@/app/components/common/SubServices/Interactivecontent/Interactivecontent";
import ServiceGridSection from "@/app/components/common/SubServices/ServiceGridSection/ServiceGridSection";
import ServicesTwoGridSection from "@/app/components/common/SubServices/ServicesTwoGridSection/ServicesTwoGridSection";
import WorkWithCards from "@/app/components/common/SubServices/WorkWithCards/WorkWithCards";
import TrustedBy from "@/app/components/common/TrustedBy/TrustedBy";

const serviceParagraph = [
  "Good ecommerce content does more than fill a blog. It answers real questions, builds trust, supports search visibility, and gives customers reasons to buy from your brand.",
  "At Humans of Web, we plan content around the full customer journey, from discovery and comparison to product education and retention.",
  "We combine SEO research, conversion-focused messaging, and brand storytelling so every page, guide, and campaign asset has a clear business purpose.",
  "The result is a content system that supports rankings, paid campaigns, email flows, social content, and stronger customer confidence.",
]

const CONTENT_WORK_CARDS = [{
  title: "Buyer-Led Strategy",
  description:
    "We map content to customer intent, pain points, objections, and buying moments so every topic has a reason to exist.",
  // icon: strategyIcon,
},
{
  title: "SEO and Brand Balance",
  description:
    "We combine search visibility with a clear brand voice, helping your content rank while still sounding credible and human.",
  // icon: searchVisibilityIcon,
},
{
  title: "Conversion-Aware Copy",
  description:
    "We create content that guides action, supports product pages, improves trust, and helps visitors take the next meaningful step.",
  // icon: contentMarketingIcon,
},
{
  title: "Measurable Content Growth",
  description:
    "We track rankings, engagement, assisted conversions, and content opportunities so your strategy keeps improving over time.",
  // icon: analyticsIcon,
}]

const SERVICE_GRID_ITEMS = [{
  title: "SEO Content Strategy",
  description:
    "Topic planning, keyword mapping, and content architecture designed to improve visibility for searches your customers actually make.",
  // icon: keywordIcon,
},
{
  title: "Blog and Guide Content",
  description:
    "Helpful articles, buying guides, comparisons, and educational pages that attract traffic and support product discovery.",
  // icon: contentMarketingIcon,
},
{
  title: "Product and Category Copy",
  description:
    "Clear product, collection, and category content that improves search relevance while helping customers understand value faster.",
  // icon: searchVisibilityIcon,
},
{
  title: "Landing Page Copy",
  description:
    "Campaign and service landing pages written to communicate value, reduce friction, and guide visitors toward conversion.",
  // icon: strategyIcon,
},
{
  title: "Email and Social Content Support",
  description:
    "Reusable content angles, campaign copy, and storylines that keep your audience engaged across owned and social channels.",
  // icon: trustIcon,
},
{
  title: "Content Performance Reporting",
  description:
    "Regular reporting on visibility, engagement, and content opportunities so your publishing plan is guided by performance data.",
  // icon: analyticsIcon,
}]

const faqData = [{
  question: "What is ecommerce content marketing?",
  answer:
    "Ecommerce content marketing uses useful copy, guides, product education, SEO pages, and campaign content to attract customers and support buying decisions.",
},
{
  question: "Do you write blogs and product content?",
  answer:
    "Yes. We can create blog content, buying guides, product descriptions, category copy, landing pages, and campaign content for ecommerce brands.",
},
{
  question: "How does content marketing support SEO?",
  answer:
    "Content marketing helps target relevant search intent, answer customer questions, strengthen internal linking, and create more useful pages for search engines to rank.",
},
{
  question: "Can content help improve conversions?",
  answer:
    "Yes. Clear product education, trust-building copy, and helpful buying guidance can reduce friction and make customers more confident before purchase.",
},
{
  question: "How often should an ecommerce brand publish content?",
  answer:
    "The right pace depends on your goals and resources. We focus on consistent, high-quality content that supports strategy instead of publishing without direction.",
}]

const CONTENT_STRATEGY_ITEMS = [
  {
    title: "Content Planning",
    description:
      "We analyze your content performance against competitors to identify gaps and opportunities. This helps us build a strategy aligned with your business goals and audience needs.",
    // icon: DetailedAuditIcon,
  },
  {
    title: "Content Research",
    description:
      "We dive deep into your brand and audience to uncover search intent and relevant keywords. This ensures your content connects with users at every stage of their journey.",
    // icon: CompetitorAnalysisIcon,
  },
  {
    title: "Content Creation",
    description:
      "Our team creates engaging, conversion-focused content including web copy, blogs, and visual assets. Every piece is designed to attract, inform, and drive action.",
    // icon: KeywordResearchIcon,
  },
  {
    title: "Content Distribution",
    description:
      "We publish and promote your content across multiple channels, including SEO, social media, email, and partnerships. This maximizes reach and visibility.",
    // icon: OnSiteContentIcon,
  },
  {
    title: "Performance Tracking & Optimization",
    description:
      "We track key metrics like traffic, engagement, and conversions. Continuous analysis helps us refine the strategy and improve results over time.",
    // icon: ContentOptimizationIcon,
  }
]

const ContentMarketing = () => {
  return (
    <>
      <HeroSection
        heading={"Content Marketing That"}
        pinkHeading={"Builds Demand"}
        description1={"We create ecommerce content that attracts qualified visitors, answers buying questions, and moves customers closer to purchase."}
        description2={"From product education to SEO content and campaign assets, Humans of Web turns content into a practical growth channel for your brand."}
        bannerImage="/contentMarketing/content-banner.svg"
        altText={"content marketing strategy driving ecommerce traffic and customer demand"}
      />
      <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
      <ServicesTwoGridSection
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
        headdingBlack="Content That Helps"
        headingBlue="Customers Choose You"
        image="/IndustryExpertise/eCommerce/marketAnalyzerImage.webp"
        paragraphs={serviceParagraph}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
        limit={5}
        ctaText='Build My Content Plan'
      />
      <WorkWithCards
        title="What Makes Humans Of Web Different"
        highlightedTitle="in Email Marketing"
        cards={CONTENT_WORK_CARDS}
        showCards={3}
        ctaText="Get Content That Converts"
        ctaHref=""
        backgroundImage="/IndustryExpertise/eCommerce/marketAnalyzerImage.webp"
        padding='py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20'
      />
      <ServiceGridSection
        title="Content Marketing Services"
        highlightedTitle="Built for Ecommerce"
        services={SERVICE_GRID_ITEMS}
        backgroundImage="/IndustryExpertise/seo-banner.webp"
        ctaText="Plan My Content Strategy"
        ctaHref=""
      />
      <Interactivecontent
        headingStart="Our Approach to"
        headingEnd="E-commerce Content Marketing"
        items={CONTENT_STRATEGY_ITEMS}
        ctaText="Get Your Content Strategy"
        ctaHref=""
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

export default ContentMarketing;
