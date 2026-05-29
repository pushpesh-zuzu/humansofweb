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

// 1. Store Design
export const StoreDesignIcon = () => (
  <IconWrapper>
    <path
      d="M22 28H42V40H22V28Z"
      stroke="white"
      strokeWidth="2.4"
      strokeLinejoin="round"
    />
    <path
      d="M26 24H38"
      stroke="white"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </IconWrapper>
);

// 2. Theme Development
export const ThemeDevelopmentIcon = () => (
  <IconWrapper>
    <path
      d="M24 38L32 22L40 38"
      stroke="white"
      strokeWidth="2.4"
      strokeLinejoin="round"
    />
    <path
      d="M28 32H36"
      stroke="white"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </IconWrapper>
);

// 3. Store Setup
export const StoreSetupIcon = () => (
  <IconWrapper>
    <circle cx="32" cy="32" r="8" stroke="white" strokeWidth="2.4" />
    <path
      d="M32 18V22M32 42V46M18 32H22M42 32H46"
      stroke="white"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </IconWrapper>
);

// 4. Migration
export const MigrationIcon = () => (
  <IconWrapper>
    <path
      d="M20 32H44"
      stroke="white"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M38 26L44 32L38 38"
      stroke="white"
      strokeWidth="2.4"
      strokeLinejoin="round"
    />
  </IconWrapper>
);

// 5. App Development
export const AppDevelopmentIcon = () => (
  <IconWrapper>
    <rect
      x="24"
      y="24"
      width="16"
      height="16"
      stroke="white"
      strokeWidth="2.4"
    />
    <path
      d="M32 20V24M32 40V44M20 32H24M40 32H44"
      stroke="white"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </IconWrapper>
);

// 6. Headless Commerce
export const HeadlessIcon = () => (
  <IconWrapper>
    <rect x="22" y="22" width="8" height="8" stroke="white" strokeWidth="2.4" />
    <rect x="34" y="34" width="8" height="8" stroke="white" strokeWidth="2.4" />
    <path d="M30 30L34 34" stroke="white" strokeWidth="2.4" />
  </IconWrapper>
);

// 7. Integrations
export const IntegrationIcon = () => (
  <IconWrapper>
    <circle cx="24" cy="24" r="3" fill="white" />
    <circle cx="40" cy="24" r="3" fill="white" />
    <circle cx="32" cy="40" r="3" fill="white" />

    <path
      d="M27 24H37M26 27L30 37M38 27L34 37"
      stroke="white"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </IconWrapper>
);

// 8. Performance
export const PerformanceIcon = () => (
  <IconWrapper>
    <path
      d="M22 38C22 32 26 26 32 26C38 26 42 32 42 38"
      stroke="white"
      strokeWidth="2.4"
    />
    <path
      d="M32 32L38 28"
      stroke="white"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </IconWrapper>
);

// 9. Conversion
export const ConversionIcon = () => (
  <IconWrapper>
    <path
      d="M22 40L28 34L34 38L42 26"
      stroke="white"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);

export const ShopifyTechnicalAuditIcon = () => (
  <IconWrapper>
    <rect
      x="20"
      y="18"
      width="20"
      height="28"
      rx="3"
      stroke="white"
      strokeWidth="2.5"
    />
    <path
      d="M26 26H34M26 32H34"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="42" cy="42" r="6" stroke="white" strokeWidth="2.5" />
    <path
      d="M46 46L50 50"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </IconWrapper>
);

export const ShopifyCompetitorAnalysisIcon = () => (
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

export const ShopifyKeywordResearchIcon = () => (
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

export const ShopifyPageOptimizationIcon = () => (
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

export const ShopifySpeedOptimizationIcon = () => (
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

export const ShopifyReportingGrowthIcon = () => (
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
