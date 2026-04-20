import ReachWithUs from "@/app/components/common/Services/ReachWithUs/ReachWithUs";
import BusineesSell from "@/app/components/common/SubServices/BusineesSell/BusineesSell";
import FaqComponent from "@/app/components/common/SubServices/FaqComponent/FaqComponent";
import HeroSection from "@/app/components/common/SubServices/HeroSection/HeroSection";
import ServiceGridSection from "@/app/components/common/SubServices/ServiceGridSection/ServiceGridSection";
import ServicesTwoGridSection from "@/app/components/common/SubServices/ServicesTwoGridSection/ServicesTwoGridSection";
import WorkWithCards from "@/app/components/common/SubServices/WorkWithCards/WorkWithCards";
import TrustedBy from "@/app/components/common/TrustedBy/TrustedBy";
import CustomGeneration from "@/app/components/Home/CustomGeneration";
import audit from '../../../../common/Icons/amazon/audit-marketplace.svg'
import launch from '../../../../common/Icons/amazon/launch-smarter.svg'
import shopper from '../../../../common/Icons/amazon/map-shopper.svg'
import measureScale from '../../../../common/Icons/amazon/measure-scale.svg'
import optimize from '../../../../common/Icons/amazon/optimize-listings.svg'
import performance from '../../../../common/Icons/amazon/clear-performance.svg'
import smart from '../../../../common/Icons/amazon/smarter-sponsored.svg'
import listing from '../../../../common/Icons/amazon/listings-built.svg'
import market from '../../../../common/Icons/amazon/marketplace-first.svg'



const serviceParagraph = [
  "Amazon is not just another sales channel. It is a search engine, marketplace, review platform, and conversion funnel working together in one fast-moving environment.",
  "At Humans of Web, we optimize the full Amazon journey so your products are easier to find, easier to trust, and easier to buy.",
  "We improve listing content, keyword targeting, ad structure, product positioning, and reporting so every decision is tied to visibility, conversion rate, and profitable growth.",
  "Our approach helps growing brands reduce wasted spend, protect margins, and build a marketplace presence that can scale beyond short-term campaign wins.",
]

const MARKETING_WORK_CARDS = [
  {
    title: "Marketplace-First Strategy",
    description:
      "We shape your Amazon plan around shopper behavior, product economics, category competition, and the search terms that actually influence purchases.",
    icon: market,
  },
  {
    title: "Listings Built to Convert",
    description:
      "We improve titles, bullets, images, A plus content, and product messaging so shoppers understand value faster and move confidently toward checkout.",
    icon: listing,
  },
  {
    title: "Smarter Sponsored Ads",
    description:
      "We structure campaigns to control wasted spend, test keywords, find profitable segments, and scale the ad groups that produce measurable revenue.",
    icon: smart,
  },
  {
    title: "Clear Performance Tracking",
    description:
      "We monitor rankings, sales trends, conversion rates, and advertising metrics so every optimization has a clear reason behind it.",
    icon: performance,
  },
]

const SERVICE_GRID_ITEMS = [{
  title: "Amazon SEO",
  description:
    "Keyword research, listing structure, backend terms, and category alignment that help your products appear for searches with stronger buying intent.",
  // icon: keywordResearchIcon,
},
{
  title: "Product Listing Optimization",
  description:
    "Conversion-focused titles, bullets, descriptions, image direction, and A plus content that make your products easier to compare and trust.",
  // icon: contentOptimizationIcon,
},
{
  title: "Sponsored Ads Management",
  description:
    "Sponsored Products, Sponsored Brands, and Sponsored Display campaigns planned around visibility, efficiency, and sales growth.",
  // icon: organicTrafficIcon,
},
{
  title: "Competitor and Category Research",
  description:
    "A practical review of pricing, messaging, ranking opportunities, and customer expectations across your Amazon category.",
  // icon: competitorAnalysisIcon,
},
{
  title: "Review and Trust Signals",
  description:
    "Guidance to improve product credibility, answer shopper questions, and strengthen the trust signals that influence Amazon conversion rates.",
  // icon: detailedAuditIcon,
},
{
  title: "Reporting and Scale Planning",
  description:
    "Clear performance reporting that highlights what is driving sales, where spend is leaking, and how to scale with better control.",
  // icon: revenueIcon,
}]

const STEPS = [
  {
    step: "01",
    title: "Audit Marketplace Position",
    description:
      "We review listings, ads, rankings, reviews, competitors, and conversion signals to find the highest-impact business growth opportunities.",
    icon: audit,
  },
  {
    step: "02",
    title: "Map Shopper Intent",
    description:
      "We identify search terms, buying questions, and category expectations that shape how customers discover and compare your products.",
    icon: shopper,
  },
  {
    step: "03",
    title: "Optimize Listings",
    description:
      "We refine content, structure, visuals, and product messaging so every listing is built to earn strong customer attention and convert effectively into real sales consistently.",
    icon: optimize,
  },
  {
    step: "04",
    title: "Launch Smarter Campaigns",
    description:
      "We build paid campaigns with clean targeting, testing logic, and budget controls to improve sales without losing margin discipline.",
    icon: launch,
  },
  {
    step: "05",
    title: "Measure and Scale",
    description:
      "We track what works, cut what wastes budget, and scale the products, keywords, and campaigns with the strongest return consistently and profitably.",
    icon: measureScale,
  },
]

const points = [
  {
    number: "1",
    title: "Better Product Discovery",
    description:
      "We align your listings and ads with the way Amazon shoppers search, compare, and make purchase decisions.",
  },
  {
    number: "2",
    title: "Conversion-Focused Marketplace Content",
    description:
      "Your product pages get clearer messaging, stronger structure, and trust-building details that support more confident buying.",
  },
  {
    number: "3",
    title: "Ad Spend With More Control",
    description:
      "We keep campaigns accountable to sales, efficiency, and margin so growth does not depend on uncontrolled spending.",
  },
]

const FaqData = [{
  question: "What is Amazon marketing?",
  answer:
    "Amazon marketing combines listing optimization, Amazon SEO, sponsored ads, review strategy, and performance tracking to improve product visibility and sales on the marketplace.",
},
{
  question: "Can you improve existing Amazon listings?",
  answer:
    "Yes. We can audit and improve existing listings by refining keywords, titles, bullets, descriptions, images, A plus content, and conversion signals.",
},
{
  question: "Do you manage Amazon sponsored ads?",
  answer:
    "Yes. We plan, launch, optimize, and report on Amazon paid campaigns including Sponsored Products, Sponsored Brands, and Sponsored Display.",
},
{
  question: "How long does Amazon marketing take to show results?",
  answer:
    "Some paid campaign insights appear quickly, while organic ranking and listing improvements usually build over several weeks as Amazon gathers performance signals.",
},
{
  question: "Is Amazon marketing useful for new products?",
  answer:
    "Yes. New products need clear positioning, search visibility, launch campaigns, and trust-building content to gain early traction in competitive categories.",
}]

const AmazonMarketing = () => {
  return (
    <>
      <HeroSection
        heading={"Amazon Marketing That"}
        pinkHeading={"Turns Searches Into Sales"}
        description1={"We help ecommerce brands win more visibility, clicks, and conversions on Amazon with marketplace strategies built around real shopper intent."}
        description2={"From listing optimization to sponsored ads and performance reporting, Humans of Web helps your products stand out where customers are ready to buy."}
        bannerImage="/amazonMarketing/amazon.svg"
        altText={"amazon listing optimization and ads driving ecommerce conversions"}
      />
      <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
      <ServicesTwoGridSection
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
        headdingBlack="Amazon Growth Built Around"
        headingBlue="High-Intent Shoppers"
        image="/IndustryExpertise/eCommerce/marketAnalyzerImage.webp"
        paragraphs={serviceParagraph}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
        limit={5}
        ctaText='Grow Your Amazon Sales'
      />
      <WorkWithCards
        title="Win More Sales on Amazon With"
        highlightedTitle="Humans Of Web"
        cards={MARKETING_WORK_CARDS}
        showCards={3}
        ctaText="Get an Amazon Growth Plan"
        ctaHref=""
        backgroundImage="/IndustryExpertise/eCommerce/marketAnalyzerImage.webp"
        padding='py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20'
      />
      <ServiceGridSection
        title="Amazon Marketing Services"
        highlightedTitle="for Ecommerce Brands"
        services={SERVICE_GRID_ITEMS}
        backgroundImage="/IndustryExpertise/seo-banner.webp"
        ctaText="Start Growing on Amazon"
        ctaHref=""
      />
      <CustomGeneration
        headdingBlack="How We Build"
        headingBlue="Amazon Momentum"
        steps={STEPS}
        showCtaButton={true}
        ctaText='Book an Amazon Strategy Call'
      />
      <BusineesSell
        titleStart="Amazon Services That"
        highlightedTitle="Help You Sell Better"
        points={points}
        ctaText="Improve My Amazon Sales"
      />
      <FaqComponent
        title="Frequently asked questions"
        items={FaqData}
        defaultOpen={0}
        position="mx-auto"
      />
      <ReachWithUs />
    </>
  );
};

export default AmazonMarketing;
