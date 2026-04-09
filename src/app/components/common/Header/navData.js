const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Industry Expertise",
    href: "/industry-expertise",
    children: [
      {
        label: "Ecommerce",
        href: "/ecommerce-agency",
        subItems: [
          { label: "E-Commerce SEO", href: "/ecommerce-agency/seo-services" },
          { label: "E-Commerce Website Development", href: "/ecommerce-agency/website-design" },
          { label: "E-Commerce PPC", href: "#" },
          { label: "E-Commerce GEO Services", href: "#" },
          { label: "E-Commerce Social Media Marketing", href: "#" },
          { label: "E-Commerce CRO", href: "#" },
          { label: "E-Commerce Email Marketing", href: "#" },
          { label: "E-Commerce Content Marketing", href: "#" },
          { label: "Amazon Marketing", href: "#" },
        ],
      },
      {
        label: "SaaS",
        href: "/saas-agency",
        subItems: [
          { label: "SaaS SEO", href: "#" },
          { label: "SaaS Website Development", href: "#" },
          { label: "SaaS PPC", href: "#" },
          { label: "SaaS GEO Services", href: "#" },
          { label: "SaaS Content Services", href: "#" },
          { label: "SaaS Link Building", href: "#" },
        ],
      },
      {
        label: "Dental",
        href: "/dental-agency",
        subItems: [
          { label: "Dental SEO", href: "#" },
          { label: "Dental Web Design", href: "#" },
        ],
      },
      {
        label: "Healthcare",
        href: "/healthcare-agency",
        subItems: [
          { label: "Healthcare SEO", href: "#" },
          { label: "Healthcare PPC", href: "#" },
        ],
      },
      {
        label: "Ophthalmology",
        href: "/ophthalmology-agency",
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
        href: "plastic-surgeon-agency",
        subItems: [{ label: "Plastic Surgeon SEO", href: "#" }],
      },
      {
        label: "Legal",
        href: "/legal-agency",
        subItems: [
          { label: "Legal SEO", href: "#" },
          { label: "Legal PPC", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Platform Expertise",
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
