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
        <stop stop-color="#F65A75" />
        <stop offset="1" stop-color="#48179C" />
      </linearGradient>
    </defs>

    {children}
  </svg>
);

// 1. Setup → shield + settings
export const VtigerSetupIcon = () => (
  <IconWrapper>
    <path
      d="M32 18L43 23V31C43 39 37 44 32 46C27 44 21 39 21 31V23L32 18Z"
      fill="white"
    />
    <circle cx="32" cy="31" r="4" fill="#B46BFF" />
  </IconWrapper>
);

// 2. Modules → layered blocks
export const VtigerModuleIcon = () => (
  <IconWrapper>
    <rect x="20" y="28" width="14" height="14" rx="4" fill="white" />
    <rect
      x="30"
      y="20"
      width="14"
      height="14"
      rx="4"
      fill="white"
      opacity=".8"
    />
    <rect
      x="34"
      y="34"
      width="10"
      height="10"
      rx="3"
      fill="white"
      opacity=".6"
    />
  </IconWrapper>
);

// 3. Workflow → circular process
export const VtigerWorkflowIcon = () => (
  <IconWrapper>
    <path
      d="M32 20C39 20 44 25 44 32"
      stroke="white"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M32 44C25 44 20 39 20 32"
      stroke="white"
      strokeWidth="6"
      strokeLinecap="round"
      opacity=".6"
    />
  </IconWrapper>
);

// 4. API Integration → plugs
export const VtigerApiIcon = () => (
  <IconWrapper>
    <rect x="22" y="24" width="8" height="14" rx="3" fill="white" />
    <rect
      x="34"
      y="24"
      width="8"
      height="14"
      rx="3"
      fill="white"
      opacity=".8"
    />

    <rect x="25" y="20" width="2" height="4" rx="1" fill="white" />
    <rect x="37" y="20" width="2" height="4" rx="1" fill="white" />
  </IconWrapper>
);

// 5. Sales → target
export const VtigerSalesIcon = () => (
  <IconWrapper>
    <circle cx="32" cy="32" r="12" fill="white" opacity=".2" />
    <circle cx="32" cy="32" r="8" fill="white" opacity=".5" />
    <circle cx="32" cy="32" r="4" fill="white" />
  </IconWrapper>
);

// 6. Dashboard → widgets
export const VtigerDashboardIcon = () => (
  <IconWrapper>
    <rect x="20" y="20" width="10" height="10" rx="3" fill="white" />
    <rect
      x="34"
      y="20"
      width="10"
      height="10"
      rx="3"
      fill="white"
      opacity=".8"
    />
    <rect
      x="20"
      y="34"
      width="24"
      height="10"
      rx="3"
      fill="white"
      opacity=".6"
    />
  </IconWrapper>
);

// 7. Migration → folders
export const VtigerMigrationIcon = () => (
  <IconWrapper>
    <path d="M18 26H28L31 30H46V42H18V26Z" fill="white" />
    <path
      d="M34 34H42"
      stroke="#B46BFF"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </IconWrapper>
);

// 8. Performance → lightning
export const VtigerPerformanceIcon = () => (
  <IconWrapper>
    <path d="M35 18L24 34H31L29 46L40 30H33L35 18Z" fill="white" />
  </IconWrapper>
);

// 9. Support → chat bubble
export const VtigerSupportIcon = () => (
  <IconWrapper>
    <path d="M20 22H44V38H32L25 44V38H20V22Z" fill="white" />

    <circle cx="27" cy="30" r="2" fill="#B46BFF" />
    <circle cx="32" cy="30" r="2" fill="#B46BFF" />
    <circle cx="37" cy="30" r="2" fill="#B46BFF" />
  </IconWrapper>
);

export const VtigerWorkflowPlanningIcon = () => (
  <IconWrapper>
    <rect
      x="18"
      y="18"
      width="12"
      height="12"
      rx="2"
      stroke="white"
      strokeWidth="2"
    />
    <rect
      x="34"
      y="18"
      width="12"
      height="12"
      rx="2"
      stroke="white"
      strokeWidth="2"
    />
    <rect
      x="26"
      y="38"
      width="12"
      height="12"
      rx="2"
      stroke="white"
      strokeWidth="2"
    />
    <path
      d="M30 24H34M40 30V38"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </IconWrapper>
);

export const VtigerPipelineIcon = () => (
  <IconWrapper>
    <path
      d="M18 20H46L38 32H26L18 20Z"
      stroke="white"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M26 32H38L34 44H30L26 32Z"
      stroke="white"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  </IconWrapper>
);

export const VtigerCustomModuleIcon = () => (
  <IconWrapper>
    <rect
      x="18"
      y="18"
      width="12"
      height="12"
      rx="2"
      stroke="white"
      strokeWidth="2"
    />
    <rect
      x="34"
      y="18"
      width="12"
      height="12"
      rx="2"
      stroke="white"
      strokeWidth="2"
    />
    <rect
      x="18"
      y="34"
      width="12"
      height="12"
      rx="2"
      stroke="white"
      strokeWidth="2"
    />
    <rect
      x="34"
      y="34"
      width="12"
      height="12"
      rx="2"
      stroke="white"
      strokeWidth="2"
    />
  </IconWrapper>
);

export const VtigerAutomationIcon = () => (
  <IconWrapper>
    <circle cx="32" cy="32" r="10" stroke="white" strokeWidth="2.5" />
    <path
      d="M32 18V22M32 42V46M18 32H22M42 32H46"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M28 32L31 35L37 28"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);

export const VtigerReportingIcon = () => (
  <IconWrapper>
    <path d="M20 44V32" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <path d="M32 44V24" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <path d="M44 44V18" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <path
      d="M18 44H46"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </IconWrapper>
);

export const VtigerIntegrationStrategyIcon = () => (
  <IconWrapper>
    <circle cx="22" cy="22" r="5" stroke="white" strokeWidth="2.5" />
    <circle cx="42" cy="22" r="5" stroke="white" strokeWidth="2.5" />
    <circle cx="32" cy="42" r="5" stroke="white" strokeWidth="2.5" />

    <path
      d="M27 22H37"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M25 26L29 37"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M39 26L35 37"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </IconWrapper>
);
