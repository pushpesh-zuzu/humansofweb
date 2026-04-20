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
          {
            label: "E-Commerce SEO",
            href: "/ecommerce-marketing-agency/seo-services",
          },
          {
            label: "E-Commerce Website Development",
            href: "/ecommerce-marketing-agency/website-design",
          },
          {
            label: "E-Commerce PPC",
            href: "/ecommerce-marketing-agency/ppc-services",
          },
          {
            label: "E-Commerce GEO Services",
            href: "/ecommerce-marketing-agency/geo-services",
          },
          {
            label: "E-Commerce Social Media Marketing",
            href: "/ecommerce-marketing-agency/social-media-marketing",
          },
          { label: "E-Commerce CRO", href: "/ecommerce-marketing-agency/cro" },
          {
            label: "E-Commerce Email Marketing",
            href: "/ecommerce-marketing-agency/email-marketing",
          },
          {
            label: "E-Commerce Content Marketing",
            href: "/ecommerce-marketing-agency/content-marketing",
          },
          {
            label: "Amazon Marketing",
            href: "/ecommerce-marketing-agency/amazon-marketing",
          },
        ],
      },

      {
        label: "Dental",
        href: "/dental-digital-marketing-agency",
        subItems: [
          { label: "Dental SEO", href: "/dental-digital-marketing-agency/seo-services" },
          { label: "Dental PPC", href: "/dental-digital-marketing-agency/ppc-services" },
          { label: "Dental Website Development", href: "/dental-digital-marketing-agency/website-design" },
          { label: "Dental Social Media Marketing", href: "/dental-digital-marketing-agency/social-media-marketing" },
          { label: "Dental Reputation Management", href: "/dental-digital-marketing-agency/reputation-management-services" },
        ],
      },
      {
        label: "Healthcare",
        href: "/healthcare-marketing-agency",
        subItems: [
          { label: "Healthcare SEO", href: "#" },
          { label: "Healthcare PPC", href: "#" },
          { label: "Healthcare Website Design & Development", href: "#" },
          { label: "Healthcare Link Building", href: "#" },
          { label: "Healthcare Social Media Marketing", href: "#" },
        ],
      },
      {
        label: "Ophthalmology",
        href: "/ophthalmology-digital-marketing-agency",
        subItems: [
          { label: "Ophthalmology SEO", href: "#" },
          { label: "Ophthalmology PPC", href: "#" },
          { label: "Ophthalmology Website Design & Development", href: "#" },
        ],
      },
      {
        label: "Chiropractor",
        href: "/chiropractor-digital-marketing-agency",
        subItems: [
          { label: "Chiropractor SEO", href: "#" },
          { label: "Chiropractor PPC", href: "#" },
          { label: "Chiropractor Website Design & Development", href: "#" },
          { label: "Chiropractor Social Media Marketing", href: "#" },
          { label: "Chiropractor Reputation Management", href: "#" },
        ],
      },
      {
        label: "Plastic Surgeon",
        href: "/plastic-surgeon-digital-marketing-agency",
        subItems: [
          { label: "Plastic Surgeon SEO", href: "#" },
          { label: "Plastic Surgeon PPC", href: "#" },
          { label: "Plastic Surgeon Website Design & Development", href: "#" },
          { label: "Plastic Surgeon Social Media Marketing", href: "#" },
          { label: "Plastic Surgeon Reputation Management", href: "#" },
        ],
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
        label: "CMS",
        href: "/cms-digital-marketing-agency",
        subItems: [
          { label: "Shopify", href: "#" },
          { label: "Wordpress", href: "#" },
        ],
      },
      {
        label: "CRM Customisation Services",
        href: "/crm-customisation-digital-marketing-agency",
        subItems: [
          { label: "Zoho", href: "#" },
          { label: "Vtiger CRM", href: "#" },
          { label: "Hubspot CRM", href: "#" },
        ],
      },
      {
        label: "AI Services",
        href: "#",
        subItems: [
          { label: "Claude", href: "#" },
          { label: "Kilocode", href: "#" },
          { label: "ChatGPT", href: "#" },
          { label: "Bolt", href: "#" },
        ],
      },
    ],
  },
  { label: "Contact us", href: "/contact" },
];

export default NAV_ITEMS;
