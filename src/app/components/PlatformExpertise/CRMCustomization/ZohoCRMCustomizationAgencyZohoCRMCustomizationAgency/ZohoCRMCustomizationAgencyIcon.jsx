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



// 1. Setup → control panel
export const ZohoSetupIcon = () => (
  <IconWrapper>
    <rect x="19" y="20" width="26" height="24" rx="6" fill="white" opacity=".18"/>

    <circle cx="26" cy="28" r="4" fill="white"/>
    <rect x="34" y="25" width="8" height="3" rx="2" fill="white"/>
    <rect x="34" y="31" width="6" height="3" rx="2" fill="white" opacity=".6"/>

    <rect x="23" y="37" width="18" height="3" rx="2" fill="white"/>
  </IconWrapper>
);



// 2. Module → cube blocks
export const ZohoModuleIcon = () => (
  <IconWrapper>
    <rect x="20" y="24" width="12" height="12" rx="3" fill="white"/>
    <rect x="32" y="18" width="12" height="12" rx="3" fill="white" opacity=".8"/>
    <rect x="32" y="36" width="12" height="12" rx="3" fill="white" opacity=".6"/>
  </IconWrapper>
);



// 3. Pipeline → flow path
export const ZohoPipelineIcon = () => (
  <IconWrapper>
    <circle cx="22" cy="24" r="5" fill="white"/>
    <circle cx="42" cy="32" r="5" fill="white" opacity=".8"/>
    <circle cx="26" cy="42" r="5" fill="white" opacity=".6"/>

    <path
      d="M27 24H37M39 34L30 39"
      stroke="white"
      strokeWidth="2.8"
      strokeLinecap="round"
    />
  </IconWrapper>
);



// 4. Workflow → process loop
export const ZohoWorkflowIcon = () => (
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
      opacity=".55"
    />
  </IconWrapper>
);



// 5. Integration → connected apps
export const ZohoIntegrationIcon = () => (
  <IconWrapper>
    <rect x="20" y="26" width="10" height="10" rx="3" fill="white"/>
    <rect x="34" y="26" width="10" height="10" rx="3" fill="white" opacity=".8"/>

    <circle cx="32" cy="31" r="3" fill="white" opacity=".5"/>
  </IconWrapper>
);



// 6. Dashboard → analytics widgets
export const ZohoDashboardIcon = () => (
  <IconWrapper>
    <rect x="20" y="20" width="24" height="24" rx="6" fill="white" opacity=".15"/>

    <rect x="24" y="34" width="4" height="6" rx="2" fill="white"/>
    <rect x="31" y="28" width="4" height="12" rx="2" fill="white"/>
    <rect x="38" y="24" width="4" height="16" rx="2" fill="white"/>
  </IconWrapper>
);



// 7. Migration → file transfer
export const ZohoMigrationIcon = () => (
  <IconWrapper>
    <rect x="20" y="24" width="11" height="15" rx="3" fill="white"/>
    <rect x="34" y="24" width="11" height="15" rx="3" fill="white" opacity=".7"/>

    <path
      d="M30 31H35"
      stroke="#A855F7"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
  </IconWrapper>
);



// 8. Permissions → security lock
export const ZohoPermissionIcon = () => (
  <IconWrapper>
    <rect x="24" y="28" width="16" height="14" rx="4" fill="white"/>

    <path
      d="M28 28V24C28 21 30 19 32 19C34 19 36 21 36 24V28"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </IconWrapper>
);



// 9. Support → support agent
export const ZohoSupportIcon = () => (
  <IconWrapper>
    <circle cx="32" cy="25" r="7" fill="white"/>

    <path
      d="M22 43C22 37 27 34 32 34C37 34 42 37 42 43"
      fill="white"
      opacity=".8"
    />

    <rect x="20" y="28" width="4" height="8" rx="2" fill="white"/>
    <rect x="40" y="28" width="4" height="8" rx="2" fill="white"/>
  </IconWrapper>
);