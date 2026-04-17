import contentMarketingIcon from "@/app/components/common/Icons/Home/content-marketing.svg";
import searchVisibilityIcon from "@/app/components/common/Icons/Home/search-visibility.svg";
import strategyIcon from "@/app/components/common/Icons/Home/strategy-implementaion.svg";
import analyticsIcon from "@/app/components/common/Icons/Home/Analytics.svg";
import trustIcon from "@/app/components/common/Icons/IndustryExpertise/build-trust.svg";
import keywordIcon from "@/app/components/common/Icons/IndustryExpertise/keyword-research.svg";

const CONTENT_MARKETING_DATA = {
  hero: {
    heading: "Content Marketing That",
    pinkHeading: "Builds Demand",
    description1:
      "We create ecommerce content that attracts qualified visitors, answers buying questions, and moves customers closer to purchase.",
    description2:
      "From product education to SEO content and campaign assets, Humans of Web turns content into a practical growth channel for your brand.",
    bannerImage: "/IndustryExpertise/seo-banner.webp",
    altText: "Content marketing for ecommerce brands",
  },
  overview: {
    title: "Content That Helps Customers",
    highlightedTitle: "Choose You",
    image: "/IndustryExpertise/eCommerce/brandTrustImage.webp",
    ctaText: "Build My Content Plan",
    paragraphs: [
      "Good ecommerce content does more than fill a blog. It answers real questions, builds trust, supports search visibility, and gives customers reasons to buy from your brand.",
      "At Humans of Web, we plan content around the full customer journey, from discovery and comparison to product education and retention.",
      "We combine SEO research, conversion-focused messaging, and brand storytelling so every page, guide, and campaign asset has a clear business purpose.",
      "The result is a content system that supports rankings, paid campaigns, email flows, social content, and stronger customer confidence.",
    ],
  },
  workWith: {
    title: "Why Brands Trust",
    highlightedTitle: "Our Content Marketing",
    description:
      "We write for people first, then structure content so search engines, AI platforms, and campaign channels can understand it clearly.",
    ctaText: "Get Content That Converts",
    cards: [
      {
        title: "Buyer-Led Strategy",
        description:
          "We map content to customer intent, pain points, objections, and buying moments so every topic has a reason to exist.",
        icon: strategyIcon,
      },
      {
        title: "SEO and Brand Balance",
        description:
          "We combine search visibility with a clear brand voice, helping your content rank while still sounding credible and human.",
        icon: searchVisibilityIcon,
      },
      {
        title: "Conversion-Aware Copy",
        description:
          "We create content that guides action, supports product pages, improves trust, and helps visitors take the next meaningful step.",
        icon: contentMarketingIcon,
      },
      {
        title: "Measurable Content Growth",
        description:
          "We track rankings, engagement, assisted conversions, and content opportunities so your strategy keeps improving over time.",
        icon: analyticsIcon,
      },
    ],
  },
  services: {
    title: "Content Marketing Services",
    highlightedTitle: "Built for Ecommerce",
    ctaText: "Plan My Content Strategy",
    items: [
      {
        title: "SEO Content Strategy",
        description:
          "Topic planning, keyword mapping, and content architecture designed to improve visibility for searches your customers actually make.",
        icon: keywordIcon,
      },
      {
        title: "Blog and Guide Content",
        description:
          "Helpful articles, buying guides, comparisons, and educational pages that attract traffic and support product discovery.",
        icon: contentMarketingIcon,
      },
      {
        title: "Product and Category Copy",
        description:
          "Clear product, collection, and category content that improves search relevance while helping customers understand value faster.",
        icon: searchVisibilityIcon,
      },
      {
        title: "Landing Page Copy",
        description:
          "Campaign and service landing pages written to communicate value, reduce friction, and guide visitors toward conversion.",
        icon: strategyIcon,
      },
      {
        title: "Email and Social Content Support",
        description:
          "Reusable content angles, campaign copy, and storylines that keep your audience engaged across owned and social channels.",
        icon: trustIcon,
      },
      {
        title: "Content Performance Reporting",
        description:
          "Regular reporting on visibility, engagement, and content opportunities so your publishing plan is guided by performance data.",
        icon: analyticsIcon,
      },
    ],
  },
  steps: {
    title: "How We Create",
    highlightedTitle: "Content That Works",
    ctaText: "Start My Content Engine",
    items: [
      {
        step: "01",
        title: "Research the Buyer Journey",
        description:
          "We study customer questions, search behavior, competitors, and product value to understand what content your audience needs.",
        icon: searchVisibilityIcon,
      },
      {
        step: "02",
        title: "Build the Topic Map",
        description:
          "We organize content themes across awareness, consideration, conversion, and retention so the plan supports the full funnel.",
        icon: strategyIcon,
      },
      {
        step: "03",
        title: "Write With Purpose",
        description:
          "We create clear, useful content that speaks to customers, supports search intent, and reflects your brand voice.",
        icon: contentMarketingIcon,
      },
      {
        step: "04",
        title: "Connect Content to Sales",
        description:
          "We link guides, product pages, category pages, and campaign assets so visitors have natural paths toward action.",
        icon: trustIcon,
      },
      {
        step: "05",
        title: "Measure and Improve",
        description:
          "We review rankings, engagement, and conversion signals to refine the content plan and uncover new growth opportunities.",
        icon: analyticsIcon,
      },
    ],
  },
  sell: {
    title: "Content That",
    highlightedTitle: "Supports Real Sales",
    ctaText: "Get My Content Plan",
    points: [
      {
        number: "1",
        title: "More Helpful Entry Points",
        description:
          "Content gives customers more ways to discover your brand through search, social, email, and educational journeys.",
      },
      {
        number: "2",
        title: "Stronger Buying Confidence",
        description:
          "Clear explanations, guides, comparisons, and product education reduce hesitation and help customers choose with confidence.",
      },
      {
        number: "3",
        title: "Reusable Growth Assets",
        description:
          "Strong content can support SEO, paid campaigns, email flows, social posts, and sales conversations across your brand.",
      },
    ],
  },
  faq: [
    {
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
    },
  ],
};

export default CONTENT_MARKETING_DATA;
