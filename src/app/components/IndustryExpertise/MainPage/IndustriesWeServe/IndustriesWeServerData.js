import Chiropractor from "@/app/components/common/Icons/industryExpert/Chiropractor";
import Dental from "@/app/components/common/Icons/industryExpert/Dental";
import EcommerceInd from "@/app/components/common/Icons/industryExpert/EcommerceInd";
import Healthcare from "@/app/components/common/Icons/industryExpert/Healthcare";
import HomeImprovement from "@/app/components/common/Icons/industryExpert/HomeImprovement";
import Legal from "@/app/components/common/Icons/industryExpert/Legal";
import Ophthalmology from "@/app/components/common/Icons/industryExpert/Ophthalmology";
import PlasticSurgeon from "@/app/components/common/Icons/industryExpert/PlasticSurgeon";
import ProfessionalServices from "@/app/components/common/Icons/industryExpert/ProfessionalServices";

export const INDUSTRIES = [
  {
    title: "E-commerce",
    link: "/ecommerce-marketing-agency",
    description:
      "We build growth engines for online stores — from product SEO and Google Shopping to email flows that bring customers back.",
    icon: <EcommerceInd />,
    tags: [
      { title: "E-Commerce SEO", link: "/ecommerce-seo-services" },
      {
        title: "E-Commerce Website Development",
        link: "/ecommerce-website-design",
      },
      { title: "E-Commerce PPC", link: "/ecommerce-ppc-services" },
      { title: "E-Commerce GEO Services", link: "/ecommerce-geo-services" },
      {
        title: "E-Commerce Social Media Marketing",
        link: "/ecommerce-social-media-marketing",
      },
      { title: "E-Commerce CRO", link: "/ecommerce-cro" },
      {
        title: "E-Commerce Email Marketing",
        link: "/ecommerce-email-marketing",
      },
      {
        title: "E-Commerce Content Marketing",
        link: "/ecommerce-content-marketing",
      },
      { title: "Amazon Marketing", link: "/amazon-marketing" },
    ],
    accent: "#16a34a",
    bg: "#f0fdf4",
  },

  {
    title: "Dental",
    link: "/dental-digital-marketing-agency",
    description:
      "We help dental clinics attract more patients with local SEO, appointment-driven ads, and high-converting websites.",
    icon: <Dental />,
    tags: [
      { title: "Dental SEO", link: "/dental-seo-services" },
      { title: "Dental PPC", link: "/dental-ppc-services" },
      {
        title: "Dental Website Development",
        link: "/dental-website-design-development-services",
      },
      {
        title: "Dental Social Media Marketing",
        link: "/dental-social-media-marketing-services",
      },
      {
        title: "Dental Reputation Management",
        link: "/dental-reputation-management-services",
      },
    ],
    accent: "#4f46e5",
    bg: "#eef2ff",
  },

  {
    title: "Healthcare",
    link: "/healthcare-marketing-agency",
    description:
      "We support healthcare providers with compliant marketing strategies that increase visibility, trust, and patient acquisition.",
    icon: <Healthcare />,
    tags: [
      { title: "Healthcare SEO", link: "/healthcare-seo-services" },
      { title: "Healthcare PPC", link: "/healthcare-ppc-services" },
      {
        title: "Healthcare Website Design & Development",
        link: "/healthcare-website-design-development-services",
      },
      {
        title: "Healthcare Link Building",
        link: "/healthcare-link-building-services",
      },
      {
        title: "Healthcare Social Media Marketing",
        link: "/healthcare-social-media-marketing-services",
      },
    ],
    accent: "#0891b2",
    bg: "#ecfeff",
  },

  {
    title: "Ophthalmology",
    link: "/ophthalmology-digital-marketing-agency",
    description:
      "We help eye care specialists grow with targeted campaigns, local SEO, and content that builds patient trust.",
    icon: <Ophthalmology />,
    tags: [
      { title: "Ophthalmology SEO", link: "/ophthalmology-seo-services" },
      { title: "Ophthalmology PPC", link: "/ophthalmology-ppc-services" },
      {
        title: "Ophthalmology Website Design & Development",
        link: "/ophthalmology-website-design-services",
      },
    ],
    accent: "#0d9488",
    bg: "#f0fdfa",
  },

  {
    title: "Chiropractor",
    link: "/chiropractor-digital-marketing-agency",
    description:
      "We help chiropractic clinics increase bookings with local search optimization, paid ads, and conversion-focused landing pages.",
    icon: <Chiropractor />,
    tags: [
      { title: "Chiropractor SEO", link: "/chiropractor-seo-services" },
      { title: "Chiropractor PPC", link: "/chiropractor-ppc-services" },
      {
        title: "Chiropractor Website Design & Development",
        link: "/chiropractor-website-design-development-services",
      },
      {
        title: "Chiropractor Social Media Marketing",
        link: "/chiropractor-social-media-marketing-services",
      },
      {
        title: "Chiropractor Reputation Management",
        link: "/chiropractor-reputation-management-services",
      },
    ],
    accent: "#dc2626",
    bg: "#fef3f2",
  },

  {
    title: "Plastic Surgeon",
    link: "/plastic-surgeon-digital-marketing-agency",
    description:
      "We help cosmetic clinics attract high-value clients through premium branding, SEO, and targeted ad campaigns.",
    icon: <PlasticSurgeon />,
    tags: [
      { title: "Plastic Surgeon SEO", link: "/plastic-surgeon-seo-services" },
      { title: "Plastic Surgeon PPC", link: "/plastic-surgeon-ppc-services" },
      {
        title: "Plastic Surgeon Website Design & Development",
        link: "/plastic-surgeon-website-design-development-services",
      },
      {
        title: "Plastic Surgeon Social Media Marketing",
        link: "/plastic-surgeon-social-media-marketing-services",
      },
      {
        title: "Plastic Surgeon Reputation Management",
        link: "/plastic-surgeon-reputation-management-services",
      },
    ],
    accent: "#e11d48",
    bg: "#fff1f2",
  },

  {
    title: "Legal",
    link: "/law-firm-digital-marketing",
    description:
      "We help law firms generate qualified leads with SEO, paid ads, and authority-driven content strategies.",
    icon: <Legal />,
    tags: [],
    accent: "#374151",
    bg: "#f9fafb",
  },

  {
    title: "Home Improvement & Local Services",
    link: "",
    description:
      "From plumbers to painters, we help local service businesses get found first — driving more calls, bookings, and reviews in their area.",
    icon: <HomeImprovement />,
    tags: [],
    accent: "#48179C",
    bg: "#f5f0ff",
  },

  {
    title: "Professional Services",
    link: "",
    description:
      "Law firms, consultants, and agencies trust us to build authority, generate qualified leads, and grow their client base consistently.",
    icon: <ProfessionalServices />,
    tags: [],
    accent: "#d97706",
    bg: "#fffbeb",
  },
];
