import React from "react";

const GRADIENT_ID = "timeline-grad";

const IconWrapper = ({ children }) => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="32" fill={`url(#${GRADIENT_ID})`} />

    <defs>
      <linearGradient
        id={GRADIENT_ID}
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
    <path
      d="M32 44C38.6 44 44 38.6 44 32"
      stroke="white"
      strokeWidth="2.5"
    />
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
    <path
      d="M24 24H30V30H24V24Z"
      stroke="white"
      strokeWidth="2.5"
    />
    <path
      d="M34 34H40V40H34V34Z"
      stroke="white"
      strokeWidth="2.5"
    />
    <path
      d="M30 30L34 34"
      stroke="white"
      strokeWidth="2.5"
    />
  </IconWrapper>
);