const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Industry Expertise",
    href: "/industry-expertise",
    children: [
      {
        label: "Ecommerce",
        href: "/ecommerce-marketing-agency",
        subItems: [
          { label: "E-Commerce SEO", href: "/ecommerce-marketing-agency/seo-services" },
          { label: "E-Commerce Website Development", href: "/ecommerce-marketing-agency/website-design" },
          { label: "E-Commerce PPC", href: "/ecommerce-marketing-agency/ppc-services" },
          { label: "E-Commerce GEO Services", href: "/ecommerce-marketing-agency/geo-services" },
          { label: "E-Commerce Social Media Marketing", href: "/ecommerce-marketing-agency/social-media-marketing" },
          { label: "E-Commerce CRO", href: "/ecommerce-marketing-agency/cro" },
          { label: "E-Commerce Email Marketing", href: "/ecommerce-marketing-agency/email-marketing" },
          { label: "E-Commerce Content Marketing", href: "/ecommerce-marketing-agency/content-marketing" },
          { label: "Amazon Marketing", href: "/ecommerce-marketing-agency/amazon-marketing" },
        ],
      },
      {
        label: "SaaS",
        href: "/saas-marketing-agency",
        subItems: [
          { label: "SaaS SEO", href: "/saas-seo" },
          { label: "SaaS Website Development", href: "#" },
          { label: "SaaS PPC", href: "#" },
          { label: "SaaS GEO Services", href: "#" },
          { label: "SaaS Content Services", href: "#" },
          { label: "SaaS Link Building", href: "#" },
        ],
      },
      {
        label: "Dental",
        href: "/dental-digital-marketing-agency",
        subItems: [
          { label: "Dental SEO", href: "#" },
          { label: "Dental PPC", href: "#" },
          { label: "Dental Website Development", href: "#" },
          { label: "Dental Social Media Marketing", href: "#" },
          { label: "Dental Reputation Management", href: "#" },

        ],
      },
      {
        label: "Healthcare",
        href: "/healthcare-marketing-agency",
        subItems: [
          { label: "Healthcare SEO", href: "#" },
          { label: "Healthcare PPC", href: "#" },
        ],
      },
      {
        label: "Ophthalmology",
        href: "/ophthalmology-digital-marketing-agency",
        subItems: [
          { label: "Ophthalmology SEO", href: "#" },
          { label: "Ophthalmology Web Design", href: "#" },
        ],
      },
      {
        label: "Chiropractor",
        href: "/chiropractor-agency",
        subItems: [{ label: "Chiropractor SEO", href: "#" }],
      },
      {
        label: "Plastic Surgeon",
        href: "/plastic-surgeon-digital-marketing-agency",
        subItems: [{ label: "Plastic Surgeon SEO", href: "#" }],
      },
      {
        label: "Legal",
        href: "/law-firm-digital-marketing",
        subItems: [
          { label: "Legal SEO", href: "#" },
          { label: "Legal PPC", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Platform Expertise",
    href: "/platform-expertise",
    children: [
      {
        label: "WordPress",
        subItems: [{ label: "WordPress Development", href: "#" }],
      },
      {
        label: "Shopify",
        subItems: [{ label: "Shopify Development", href: "#" }],
      },
      {
        label: "WooCommerce",
        subItems: [{ label: "WooCommerce Setup", href: "#" }],
      },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About Us", href: "#" },
      { label: "Our Team", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  { label: "Contact us", href: "/contact" },
];

export default NAV_ITEMS;
