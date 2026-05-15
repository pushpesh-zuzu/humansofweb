import React from "react";

const GID = "timeline-grad";

const IconWrapper = ({ children, className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="64" height="64" rx="32" fill={`url(#${GID})`} />

    <defs>
      <linearGradient
        id={GID}
        x1="64"
        y1="0"
        x2="0"
        y2="64"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F65A75" />
        <stop offset="1" stopColor="#48179C" />
      </linearGradient>
    </defs>

    {children}
  </svg>
);

// 1. Custom Website Design
export const CustomWebsiteIcon = () => (
  <IconWrapper>
    <path
      d="M22 24H42V40H22V24Z"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M28 46H36"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </IconWrapper>
);

// 2. Theme Development
export const ThemeDevelopmentIcon = () => (
  <IconWrapper>
    <path
      d="M32 20L40 24V32C40 38 36 42 32 44C28 42 24 38 24 32V24L32 20Z"
      stroke="white"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  </IconWrapper>
);

// 3. WooCommerce
export const WooCommerceIcon = () => (
  <IconWrapper>
    <path
      d="M24 28H40L38 38H26L24 28Z"
      stroke="white"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <circle cx="28" cy="43" r="2" fill="white" />
    <circle cx="36" cy="43" r="2" fill="white" />
  </IconWrapper>
);

// 4. Optimization
export const OptimizationIcon = () => (
  <IconWrapper>
    <path d="M32 44C38.6 44 44 38.6 44 32" stroke="white" strokeWidth="2.5" />
    <path
      d="M32 20V32L40 28"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </IconWrapper>
);

// 5. Plugin
export const PluginIcon = () => (
  <IconWrapper>
    <path
      d="M28 24V40M36 24V40M24 28H40M24 36H40"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </IconWrapper>
);

// 6. Migration
export const MigrationIcon = () => (
  <IconWrapper>
    <path
      d="M22 32H42"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M36 26L42 32L36 38"
      stroke="white"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  </IconWrapper>
);

// 7. Conversion
export const ConversionIcon = () => (
  <IconWrapper>
    <path
      d="M24 40L30 34L35 38L42 26"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);

// 8. Security
export const SecurityIcon = () => (
  <IconWrapper>
    <path
      d="M32 20L41 24V32C41 38 37 42 32 44C27 42 23 38 23 32V24L32 20Z"
      stroke="white"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  </IconWrapper>
);

// 9. Headless
export const HeadlessIcon = () => (
  <IconWrapper>
    <path d="M24 24H30V30H24V24Z" stroke="white" strokeWidth="2.5" />
    <path d="M34 34H40V40H34V34Z" stroke="white" strokeWidth="2.5" />
    <path d="M30 30L34 34" stroke="white" strokeWidth="2.5" />
  </IconWrapper>
);

export const WordPressTechnicalAuditIcon = () => (
  <IconWrapper>
    <rect
      x="20"
      y="18"
      width="22"
      height="28"
      rx="3"
      stroke="white"
      strokeWidth="2.5"
    />
    <path
      d="M26 26H36M26 32H36"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="44" cy="42" r="5" stroke="white" strokeWidth="2.5" />
    <path
      d="M48 46L52 50"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </IconWrapper>
);

export const WordPressCompetitorAnalysisIcon = () => (
  <IconWrapper>
    <path
      d="M18 42L26 32L34 36L46 22"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M46 22V30H38"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="18" cy="42" r="3" fill="white" />
    <circle cx="26" cy="32" r="3" fill="white" />
    <circle cx="34" cy="36" r="3" fill="white" />
    <circle cx="46" cy="22" r="3" fill="white" />
  </IconWrapper>
);

export const WordPressKeywordResearchIcon = () => (
  <IconWrapper>
    <circle cx="28" cy="28" r="10" stroke="white" strokeWidth="2.5" />
    <path
      d="M36 36L46 46"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path d="M24 28H32" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M28 24V32" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </IconWrapper>
);

export const WordPressOnPageSEOIcon = () => (
  <IconWrapper>
    <rect
      x="18"
      y="18"
      width="28"
      height="30"
      rx="3"
      stroke="white"
      strokeWidth="2.5"
    />
    <path d="M24 28H40" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M24 34H36" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M24 40H32" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M42 22L46 26"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </IconWrapper>
);

export const WordPressCoreVitalsIcon = () => (
  <IconWrapper>
    <circle cx="32" cy="32" r="12" stroke="white" strokeWidth="2.5" />
    <path
      d="M32 32L40 26"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M32 20V16M32 48V44M20 32H16M48 32H44"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </IconWrapper>
);

export const WordPressReportingIcon = () => (
  <IconWrapper>
    <path d="M20 44V30" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <path d="M32 44V24" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <path d="M44 44V18" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <path
      d="M18 44H46"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M20 30L32 24L44 18"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </IconWrapper>
);
