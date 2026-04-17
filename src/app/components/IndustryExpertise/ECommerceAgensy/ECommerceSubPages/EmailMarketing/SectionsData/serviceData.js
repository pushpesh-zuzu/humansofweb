import analyticsIcon from "@/app/components/common/Icons/Home/Analytics.svg";
import onboardingIcon from "@/app/components/common/Icons/Home/onboarding.svg";
import operationsIcon from "@/app/components/common/Icons/Home/operations.svg";
import contentIcon from "@/app/components/common/Icons/Home/content-marketing.svg";
import revenueIcon from "@/app/components/common/Icons/IndustryExpertise/SEORevenue.svg";
import trustIcon from "@/app/components/common/Icons/IndustryExpertise/build-trust.svg";

const EMAIL_MARKETING_DATA = {
  hero: {
    heading: "Email Marketing That",
    pinkHeading: "Brings Customers Back",
    description1:
      "We build ecommerce email and automation systems that nurture shoppers, recover lost carts, increase repeat purchases, and grow customer lifetime value.",
    description2:
      "Humans of Web combines strategy, copy, segmentation, flows, campaigns, and reporting so your owned channel becomes a reliable revenue engine.",
    bannerImage: "/IndustryExpertise/eCommerce/businessGrowth.webp",
    altText: "Email marketing for ecommerce customer retention",
  },
  overview: {
    title: "Email Marketing Built for",
    highlightedTitle: "Retention and Revenue",
    image: "/IndustryExpertise/eCommerce/brandTrustImage.webp",
    ctaText: "Grow My Email Revenue",
    paragraphs: [
      "Email is one of the strongest owned channels for ecommerce because it lets you reach customers without depending only on ads or algorithms.",
      "At Humans of Web, we create email strategies that turn first-time visitors into subscribers, subscribers into buyers, and buyers into repeat customers.",
      "We build automated flows, campaign calendars, segmentation logic, and performance reporting around the moments that matter most to your customer journey.",
      "The goal is simple: send better messages to the right people at the right time, while protecting trust and increasing long-term customer value.",
    ],
  },
  workWith: {
    title: "Why Choose Humans Of Web for",
    highlightedTitle: "Email Marketing?",
    description:
      "We treat email as a full-funnel revenue channel, not just a newsletter schedule.",
    ctaText: "Plan My Email Growth",
    cards: [
      {
        title: "Lifecycle Strategy",
        description:
          "We plan emails around customer stages such as welcome, browse, cart, purchase, repeat order, winback, and loyalty.",
        icon: onboardingIcon,
      },
      {
        title: "Segmentation That Matters",
        description:
          "We group audiences by behavior, purchase history, engagement, and intent so your campaigns feel more relevant.",
        icon: operationsIcon,
      },
      {
        title: "Copy That Builds Trust",
        description:
          "We write clear, helpful, conversion-aware emails that communicate value without exhausting your audience.",
        icon: contentIcon,
      },
      {
        title: "Revenue-Focused Reporting",
        description:
          "We monitor flow revenue, campaign performance, list health, engagement, and customer behavior so the channel keeps improving.",
        icon: analyticsIcon,
      },
    ],
  },
  services: {
    title: "Email Marketing Services",
    highlightedTitle: "for Ecommerce Growth",
    ctaText: "Build My Email System",
    items: [
      {
        title: "Email Strategy and Planning",
        description:
          "A clear roadmap for campaigns, automations, segments, offers, and messaging based on your goals and customer journey.",
        icon: onboardingIcon,
      },
      {
        title: "Automated Email Flows",
        description:
          "Welcome, abandoned cart, browse abandonment, post-purchase, replenishment, review, winback, and loyalty flows built to recover revenue.",
        icon: operationsIcon,
      },
      {
        title: "Campaign Copy and Creative Direction",
        description:
          "Email copy, content angles, subject lines, and creative guidance that make campaigns useful, clear, and conversion-focused.",
        icon: contentIcon,
      },
      {
        title: "Audience Segmentation",
        description:
          "Behavior and purchase-based audience groups that help you send more relevant messages to subscribers and customers.",
        icon: trustIcon,
      },
      {
        title: "List Growth Optimization",
        description:
          "Popup, form, incentive, and lead capture improvements designed to grow your list with better-fit subscribers.",
        icon: revenueIcon,
      },
      {
        title: "Performance Reporting",
        description:
          "Reporting on revenue, engagement, deliverability indicators, and flow opportunities so your email channel keeps getting stronger.",
        icon: analyticsIcon,
      },
    ],
  },
  steps: {
    title: "How We Build",
    highlightedTitle: "Email Revenue",
    ctaText: "Start My Email Strategy",
    items: [
      {
        step: "01",
        title: "Audit the Current Channel",
        description:
          "We review your list, flows, campaigns, segmentation, deliverability indicators, and revenue performance to find gaps.",
        icon: analyticsIcon,
      },
      {
        step: "02",
        title: "Map Customer Moments",
        description:
          "We identify the points where email can educate, recover, reassure, upsell, and bring customers back.",
        icon: onboardingIcon,
      },
      {
        step: "03",
        title: "Build Core Automations",
        description:
          "We create the email flows your store needs to welcome, recover, nurture, and retain customers automatically.",
        icon: operationsIcon,
      },
      {
        step: "04",
        title: "Launch Campaigns",
        description:
          "We plan useful campaigns around products, offers, education, seasonality, and customer needs.",
        icon: contentIcon,
      },
      {
        step: "05",
        title: "Optimize for Lifetime Value",
        description:
          "We improve segmentation, timing, content, and offers based on engagement, revenue, and repeat purchase behavior.",
        icon: revenueIcon,
      },
    ],
  },
  sell: {
    title: "Email Systems That",
    highlightedTitle: "Keep Customers Buying",
    ctaText: "Improve My Email Revenue",
    points: [
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
    ],
  },
  faq: [
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
  ],
};

export default EMAIL_MARKETING_DATA;
