import React from "react";

const GID = "bolt-ai-grad";

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

export const AIProductArchitectureIcon = ({ className = "" }) => {
  return (
    <IconWrapper className={className}>
      <rect
        x="18"
        y="18"
        width="28"
        height="28"
        rx="8"
        fill="white"
        fillOpacity="0.15"
      />

      <path
        d="M24 28H40"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M24 36H34"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <circle cx="40" cy="40" r="4" fill="white" />
    </IconWrapper>
  );
};

export const WorkflowAutomationIcon = ({ className = "" }) => {
  return (
    <IconWrapper className={className}>
      <circle cx="22" cy="22" r="5" fill="white" />
      <circle cx="42" cy="22" r="5" fill="white" opacity="0.8" />
      <circle cx="22" cy="42" r="5" fill="white" opacity="0.8" />
      <circle cx="42" cy="42" r="5" fill="white" />

      <path
        d="M27 22H37"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M22 27V37"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M42 27V37"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M27 42H37"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </IconWrapper>
  );
};

export const RapidMVPDevelopmentIcon = ({ className = "" }) => {
  return (
    <IconWrapper className={className}>
      <path d="M32 14L46 42H18L32 14Z" fill="white" fillOpacity="0.9" />

      <path
        d="M32 26V34"
        stroke="#48179C"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <circle cx="32" cy="39" r="2" fill="#48179C" />
    </IconWrapper>
  );
};

export const CustomAIIntegrationsIcon = ({ className = "" }) => {
  return (
    <IconWrapper className={className}>
      <rect x="14" y="24" width="14" height="16" rx="4" fill="white" />

      <rect
        x="36"
        y="24"
        width="14"
        height="16"
        rx="4"
        fill="white"
        fillOpacity="0.8"
      />

      <path
        d="M28 32H36"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </IconWrapper>
  );
};

export const PerformanceOptimizationIcon = ({ className = "" }) => {
  return (
    <IconWrapper className={className}>
      <path
        d="M18 42L28 32L36 38L46 22"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="18" cy="42" r="2.5" fill="white" />
      <circle cx="28" cy="32" r="2.5" fill="white" />
      <circle cx="36" cy="38" r="2.5" fill="white" />
      <circle cx="46" cy="22" r="2.5" fill="white" />
    </IconWrapper>
  );
};

export const GrowthMaintenanceIcon = ({ className = "" }) => {
  return (
    <IconWrapper className={className}>
      <circle cx="32" cy="32" r="14" fill="white" fillOpacity="0.18" />

      <path
        d="M32 24V32L39 36"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconWrapper>
  );
};

export const AIProductDevelopmentIcon = ({ className = "" }) => (
  <IconWrapper className={className}>
    <rect
      x="18"
      y="18"
      width="28"
      height="28"
      rx="8"
      fill="white"
      fillOpacity="0.18"
    />

    <path d="M24 28H40" stroke="white" strokeWidth="3" strokeLinecap="round" />

    <path d="M24 36H34" stroke="white" strokeWidth="3" strokeLinecap="round" />

    <circle cx="40" cy="40" r="3" fill="white" />
  </IconWrapper>
);

export const RapidMVPDevelopmentServiceIcon = ({ className = "" }) => (
  <IconWrapper className={className}>
    <path d="M32 14L46 42H18L32 14Z" fill="white" fillOpacity="0.92" />

    <path
      d="M32 26V34"
      stroke="#48179C"
      strokeWidth="3"
      strokeLinecap="round"
    />

    <circle cx="32" cy="39" r="2" fill="#48179C" />
  </IconWrapper>
);

export const WorkflowAutomationServiceIcon = ({ className = "" }) => (
  <IconWrapper className={className}>
    <circle cx="22" cy="22" r="4" fill="white" />
    <circle cx="42" cy="22" r="4" fill="white" opacity="0.8" />
    <circle cx="22" cy="42" r="4" fill="white" opacity="0.8" />
    <circle cx="42" cy="42" r="4" fill="white" />

    <path
      d="M26 22H38"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    <path
      d="M22 26V38"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    <path
      d="M42 26V38"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    <path
      d="M26 42H38"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </IconWrapper>
);

export const CustomDashboardDevelopmentIcon = ({ className = "" }) => (
  <IconWrapper className={className}>
    <rect
      x="16"
      y="18"
      width="32"
      height="28"
      rx="6"
      fill="white"
      fillOpacity="0.18"
    />

    <rect x="22" y="26" width="6" height="14" rx="2" fill="white" />
    <rect x="31" y="22" width="6" height="18" rx="2" fill="white" />
    <rect x="40" y="30" width="4" height="10" rx="2" fill="white" />
  </IconWrapper>
);

export const APIAIIntegrationsIcon = ({ className = "" }) => (
  <IconWrapper className={className}>
    <rect x="15" y="24" width="14" height="16" rx="4" fill="white" />

    <rect
      x="35"
      y="24"
      width="14"
      height="16"
      rx="4"
      fill="white"
      fillOpacity="0.8"
    />

    <path d="M29 32H35" stroke="white" strokeWidth="3" strokeLinecap="round" />
  </IconWrapper>
);

export const ScalableFrontendDevelopmentIcon = ({ className = "" }) => (
  <IconWrapper className={className}>
    <rect
      x="16"
      y="18"
      width="32"
      height="24"
      rx="6"
      fill="white"
      fillOpacity="0.18"
    />

    <path
      d="M24 30L28 26"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />

    <path
      d="M24 30L28 34"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />

    <path
      d="M40 30L36 26"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />

    <path
      d="M40 30L36 34"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </IconWrapper>
);

export const BackendSystemDevelopmentIcon = ({ className = "" }) => (
  <IconWrapper className={className}>
    <ellipse cx="32" cy="20" rx="12" ry="5" fill="white" />

    <path
      d="M20 20V36C20 39 25 42 32 42C39 42 44 39 44 36V20"
      stroke="white"
      strokeWidth="3"
    />

    <path
      d="M20 28C20 31 25 34 32 34C39 34 44 31 44 28"
      stroke="white"
      strokeWidth="3"
    />
  </IconWrapper>
);

export const PerformanceOptimizationServiceIcon = ({ className = "" }) => (
  <IconWrapper className={className}>
    <path
      d="M18 42L28 32L36 38L46 22"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <circle cx="18" cy="42" r="2.5" fill="white" />
    <circle cx="28" cy="32" r="2.5" fill="white" />
    <circle cx="36" cy="38" r="2.5" fill="white" />
    <circle cx="46" cy="22" r="2.5" fill="white" />
  </IconWrapper>
);

export const OngoingProductSupportIcon = ({ className = "" }) => (
  <IconWrapper className={className}>
    <circle cx="32" cy="32" r="14" fill="white" fillOpacity="0.16" />

    <path
      d="M32 24V32L39 36"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);
