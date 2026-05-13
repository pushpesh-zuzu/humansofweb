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



// 1. CRM Setup → workspace
export const CRMSetupIcon = () => (
  <IconWrapper>
    <rect x="17" y="18" width="30" height="22" rx="6" fill="white" opacity=".18"/>

    <rect x="22" y="23" width="9" height="9" rx="2" fill="white"/>
    <rect x="34" y="23" width="8" height="3" rx="1.5" fill="white"/>
    <rect x="34" y="29" width="6" height="3" rx="1.5" fill="white" opacity=".6"/>

    <rect x="24" y="43" width="16" height="3" rx="2" fill="white"/>
  </IconWrapper>
);



// 2. Workflow → automation machine
export const WorkflowAutomationIcon = () => (
  <IconWrapper>
    <circle cx="25" cy="30" r="7" fill="white"/>
    <circle cx="39" cy="36" r="5" fill="white" opacity=".7"/>

    <circle cx="25" cy="30" r="2.5" fill="#B46BFF"/>
    <circle cx="39" cy="36" r="2" fill="#B46BFF"/>

    <rect x="30" y="31" width="6" height="3" rx="1.5" fill="white"/>
  </IconWrapper>
);



// 3. Sales Pipeline → stacked conversion blocks
export const SalesPipelineIcon = () => (
  <IconWrapper>
    <rect x="21" y="20" width="22" height="8" rx="3" fill="white"/>
    <rect x="25" y="30" width="14" height="8" rx="3" fill="white" opacity=".8"/>
    <rect x="29" y="40" width="6" height="6" rx="2" fill="white" opacity=".6"/>
  </IconWrapper>
);



// 4. Marketing → campaign box + stars
export const MarketingAutomationIcon = () => (
  <IconWrapper>
    <rect x="22" y="24" width="20" height="16" rx="5" fill="white"/>

    <path
      d="M28 30L32 34L38 28"
      stroke="#B46BFF"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <circle cx="21" cy="22" r="2" fill="white" opacity=".6"/>
    <circle cx="43" cy="21" r="1.5" fill="white" opacity=".5"/>
  </IconWrapper>
);



// 5. Integrations → connected apps
export const IntegrationIcon = () => (
  <IconWrapper>
    <rect x="19" y="24" width="11" height="11" rx="3" fill="white"/>
    <rect x="34" y="24" width="11" height="11" rx="3" fill="white" opacity=".85"/>
    <rect x="27" y="37" width="11" height="11" rx="3" fill="white" opacity=".65"/>

    <circle cx="32" cy="32" r="3" fill="#B46BFF"/>
  </IconWrapper>
);



// 6. Dashboard → analytics panel
export const DashboardIcon = () => (
  <IconWrapper>
    <rect x="18" y="18" width="28" height="28" rx="6" fill="white" opacity=".15"/>

    <rect x="24" y="34" width="5" height="8" rx="2" fill="white"/>
    <rect x="31" y="28" width="5" height="14" rx="2" fill="white"/>
    <rect x="38" y="23" width="5" height="19" rx="2" fill="white"/>
  </IconWrapper>
);



// 7. Migration → files moving
export const MigrationIcon = () => (
  <IconWrapper>
    <rect x="20" y="24" width="12" height="15" rx="3" fill="white"/>
    <rect x="35" y="24" width="12" height="15" rx="3" fill="white" opacity=".7"/>

    <path
      d="M30 31H35"
      stroke="#B46BFF"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </IconWrapper>
);



// 8. Performance → performance core
export const PerformanceIcon = () => (
  <IconWrapper>
    <circle cx="32" cy="32" r="11" fill="white"/>
    <circle cx="32" cy="32" r="5" fill="#B46BFF"/>

    <circle cx="32" cy="18" r="2" fill="white" opacity=".6"/>
    <circle cx="46" cy="32" r="2" fill="white" opacity=".6"/>
    <circle cx="32" cy="46" r="2" fill="white" opacity=".6"/>
    <circle cx="18" cy="32" r="2" fill="white" opacity=".6"/>
  </IconWrapper>
);



// 9. Support → human support assistant
export const SupportIcon = () => (
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