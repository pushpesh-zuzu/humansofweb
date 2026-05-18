import EcommerceInd from "../common/Icons/industryExpert/EcommerceInd";
import AiInd from "../common/Icons/PlatFormExpert/AiInd";
import CmsInd from "../common/Icons/PlatFormExpert/CmsInd";
import CrmInd from "../common/Icons/PlatFormExpert/CrmInd";

export const PLATFORMS = [
  {
    title: "CMS",
    link: "/cms-digital-marketing-agency",
    description:
      "We build scalable CMS ecosystems that make publishing, SEO, and growth easier for modern brands.",
    icon: <CmsInd />,
    tags: [
      {
        title: "Shopify Development",
        link: "/cms-shopify",
      },
      {
        title: "WordPress Development",
        link: "/cms-wordpress",
      },
    ],
    accent: "#16a34a",
    bg: "#f0fdf4",
  },

  {
    title: "CRM Customisation Services",
    link: "/crm-customisation-digital-marketing-agency",
    description:
      "We customise CRM systems around your workflows — helping sales, automation, and reporting run smoothly.",
    icon: <CrmInd />,
    tags: [
      {
        title: "Zoho CRM",
        link: "/crm-zoho",
      },
      {
        title: "Vtiger CRM",
        link: "/crm-vtiger",
      },
      {
        title: "Hubspot CRM",
        link: "/crm-hubspot",
      },
    ],
    accent: "#4f46e5",
    bg: "#eef2ff",
  },

  {
    title: "AI Services",
    link: "/artificial-digital-services-agency",
    description:
      "We integrate modern AI workflows that improve productivity, content operations, automation, and customer experience.",
    icon: <AiInd />,
    tags: [
      {
        title: "Claude Integration",
        link: "/claude",
      },
      {
        title: "Kilocode Solutions",
        link: "/kilocode",
      },
      {
        title: "ChatGPT Integration",
        link: "/chatgpt",
      },
      {
        title: "Bolt AI Workflows",
        link: "/bolt",
      },
    ],
    accent: "#7c3aed",
    bg: "#f5f3ff",
  },
];
