import React from "react";

// ─── Shared gradient wrapper (same as Shopify icons) ──────────────────────────
const GID = "claude-grad";

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

// ─── 1. Claude AI Integration ─────────────────────────────────────────────────
// Concept: plug/socket — two systems snapping together
export const ClaudeIntegrationIcon = () => (
  <IconWrapper>
    {/* Left block (system A) */}
    <rect
      x="18"
      y="28"
      width="10"
      height="8"
      rx="1.5"
      stroke="white"
      strokeWidth="2.2"
    />
    {/* Right block (system B) */}
    <rect
      x="36"
      y="28"
      width="10"
      height="8"
      rx="1.5"
      stroke="white"
      strokeWidth="2.2"
    />
    {/* Connector bridge */}
    <path
      d="M28 32H36"
      stroke="white"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
    {/* Plug prongs on left */}
    <path
      d="M22 28V24M26 28V24"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Socket slots on right */}
    <path
      d="M40 36V40M44 36V40"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </IconWrapper>
);

// ─── 2. AI Workflow Automation ────────────────────────────────────────────────
// Concept: circular arrows (loop) + lightning bolt inside
export const WorkflowAutomationIcon = () => (
  <IconWrapper>
    {/* Circular loop arrow */}
    <path
      d="M22 32C22 26.477 26.477 22 32 22C37.523 22 42 26.477 42 32"
      stroke="white"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M42 32C42 37.523 37.523 42 32 42C26.477 42 22 37.523 22 32"
      stroke="white"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {/* Top arrowhead */}
    <path
      d="M39 19L42 22L45 19"
      stroke="white"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    {/* Lightning bolt center */}
    <path
      d="M33.5 27L30 32.5H34L30.5 38"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);

// ─── 3. Custom AI Chatbot Development ────────────────────────────────────────
// Concept: chat bubble with a blinking cursor / waveform inside
export const ChatbotDevelopmentIcon = () => (
  <IconWrapper>
    {/* Main chat bubble */}
    <path
      d="M20 22H44C45.1 22 46 22.9 46 24V38C46 39.1 45.1 40 44 40H26L20 46V24C20 22.9 20.9 22 20 22Z"
      stroke="white"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    {/* Waveform / typing dots */}
    <circle cx="26" cy="31" r="2" fill="white" />
    <circle cx="32" cy="31" r="2" fill="white" />
    <circle cx="38" cy="31" r="2" fill="white" />
  </IconWrapper>
);

// ─── 4. AI Content Automation ─────────────────────────────────────────────────
// Concept: stacked document pages + sparkle star (auto-generation)
export const ContentAutomationIcon = () => (
  <IconWrapper>
    {/* Back page */}
    <rect
      x="24"
      y="20"
      width="18"
      height="22"
      rx="2"
      stroke="white"
      strokeWidth="2"
      strokeDasharray="3 2"
    />
    {/* Front page */}
    <rect
      x="20"
      y="24"
      width="18"
      height="22"
      rx="2"
      stroke="white"
      strokeWidth="2.2"
    />
    {/* Lines of text */}
    <path
      d="M24 30H34"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M24 34H34"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M24 38H30"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    {/* Sparkle top-right */}
    <path
      d="M42 18V22M40 20H44"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="42" cy="20" r="1.2" fill="white" />
  </IconWrapper>
);

// ─── 5. Third-Party System Integrations ──────────────────────────────────────
// Concept: hub-and-spoke — centre node with 4 outer nodes connected
export const ThirdPartyIntegrationIcon = () => (
  <IconWrapper>
    {/* Centre hub */}
    <circle cx="32" cy="32" r="4" fill="white" />
    {/* Outer nodes */}
    <circle cx="20" cy="22" r="3" stroke="white" strokeWidth="2" />
    <circle cx="44" cy="22" r="3" stroke="white" strokeWidth="2" />
    <circle cx="20" cy="42" r="3" stroke="white" strokeWidth="2" />
    <circle cx="44" cy="42" r="3" stroke="white" strokeWidth="2" />
    {/* Spokes */}
    <path
      d="M23 25L29 29"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M41 25L35 29"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M23 39L29 35"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M41 39L35 35"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </IconWrapper>
);

// ─── 6. AI Prompt Engineering ─────────────────────────────────────────────────
// Concept: code angle brackets < > with a cursor blinking inside
export const PromptEngineeringIcon = () => (
  <IconWrapper>
    {/* Left bracket */}
    <path
      d="M24 24L18 32L24 40"
      stroke="white"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Right bracket */}
    <path
      d="M40 24L46 32L40 40"
      stroke="white"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Cursor line inside */}
    <path
      d="M30 29L34 32L30 35"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Underscore cursor blink */}
    <path d="M34 35H38" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </IconWrapper>
);

// ─── 7. Internal AI Knowledge Systems ────────────────────────────────────────
// Concept: open book with a magnifying glass (find knowledge fast)
export const KnowledgeSystemIcon = () => (
  <IconWrapper>
    {/* Book spine */}
    <path d="M32 22V44" stroke="white" strokeWidth="2" strokeLinecap="round" />
    {/* Left page */}
    <path
      d="M32 22C32 22 26 23 20 26V44C26 41 32 40 32 40"
      stroke="white"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    {/* Right page */}
    <path
      d="M32 22C32 22 38 23 44 26V44C38 41 32 40 32 40"
      stroke="white"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    {/* Magnifying glass overlay top-right */}
    <circle cx="41" cy="22" r="4" stroke="white" strokeWidth="2" />
    <path
      d="M44 25L47 28"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </IconWrapper>
);

// ─── 8. AI Performance Optimization ──────────────────────────────────────────
// Concept: speedometer / gauge with needle pointing high
export const PerformanceOptimizationIcon = () => (
  <IconWrapper>
    {/* Gauge arc */}
    <path
      d="M20 38C20 30.268 25.373 24 32 24C38.627 24 44 30.268 44 38"
      stroke="white"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {/* Tick marks */}
    <path
      d="M21 34L23.5 35.4"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M32 24V27"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M43 34L40.5 35.4"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    {/* Needle pointing upper-right (high performance) */}
    <path
      d="M32 38L40 28"
      stroke="white"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {/* Pivot dot */}
    <circle cx="32" cy="38" r="2.5" fill="white" />
  </IconWrapper>
);

// ─── 9. Claude AI Support & Maintenance ──────────────────────────────────────
// Concept: shield (protection/support) with a wrench inside (maintenance)
export const SupportMaintenanceIcon = () => (
  <IconWrapper>
    {/* Shield */}
    <path
      d="M32 19L21 23V32C21 37.5 26 42.5 32 45C38 42.5 43 37.5 43 32V23L32 19Z"
      stroke="white"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    {/* Wrench inside */}
    <path
      d="M28 36L36 28"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="27" cy="37" r="2.5" stroke="white" strokeWidth="1.8" />
    <circle cx="37" cy="27" r="2.5" stroke="white" strokeWidth="1.8" />
  </IconWrapper>
);

// ─── Updated JSON data with correct icons ─────────────────────────────────────
export const CLAUDE_AI_DEV_SERVICES = [
  {
    title: "Claude AI Integration",
    description:
      "We integrate Claude AI into websites, CRMs, internal tools, support systems, and operational workflows for business automation.",
    icon: <ClaudeIntegrationIcon />,
  },
  {
    title: "AI Workflow Automation",
    description:
      "We automate repetitive business tasks, reporting workflows, customer communication, and operational processes using Claude AI.",
    icon: <WorkflowAutomationIcon />,
  },
  {
    title: "Custom AI Chatbot Development",
    description:
      "Our team develops Claude AI-powered chatbots for customer support, lead generation, internal assistance, and workflow management.",
    icon: <ChatbotDevelopmentIcon />,
  },
  {
    title: "AI Content Automation",
    description:
      "We build systems that generate content, summaries, documentation, reports, and communication workflows using Claude AI.",
    icon: <ContentAutomationIcon />,
  },
  {
    title: "Third-Party System Integrations",
    description:
      "We integrate Claude AI with CRMs, ERPs, APIs, support systems, communication tools, and custom business applications.",
    icon: <ThirdPartyIntegrationIcon />,
  },
  {
    title: "AI Prompt Engineering",
    description:
      "We create structured prompt systems and AI response frameworks that improve output quality, consistency, and workflow efficiency.",
    icon: <PromptEngineeringIcon />,
  },
  {
    title: "Internal AI Knowledge Systems",
    description:
      "We develop AI-powered internal knowledge bases that help teams access information, processes, and documentation faster.",
    icon: <KnowledgeSystemIcon />,
  },
  {
    title: "AI Performance Optimization",
    description:
      "We optimize AI workflows, prompts, automations, and integrations to improve business efficiency and operational performance.",
    icon: <PerformanceOptimizationIcon />,
  },
  {
    title: "Claude AI Support & Maintenance",
    description:
      "We provide ongoing AI optimization, troubleshooting, workflow improvements, and technical support after deployment.",
    icon: <SupportMaintenanceIcon />,
  },
];

// ─── 1. AI Workflow Planning ─────────────────────────────
export const ClaudeWorkflowPlanningIcon = () => (
  <IconWrapper>
    <circle cx="20" cy="24" r="3" fill="white" />
    <circle cx="32" cy="18" r="3" fill="white" />
    <circle cx="44" cy="24" r="3" fill="white" />
    <circle cx="32" cy="38" r="3" fill="white" />

    <path d="M20 24L32 18L44 24L32 38Z" stroke="white" strokeWidth="2" />
  </IconWrapper>
);

// ─── 2. Customer Support Automation ───────────────────────
export const ClaudeSupportAutomationIcon = () => (
  <IconWrapper>
    <path d="M20 26H44V38H32L26 44V38H20V26Z" stroke="white" strokeWidth="2" />

    <circle cx="26" cy="32" r="1.5" fill="white" />
    <circle cx="32" cy="32" r="1.5" fill="white" />
    <circle cx="38" cy="32" r="1.5" fill="white" />
  </IconWrapper>
);

// ─── 3. AI Content Generation Systems ─────────────────────
export const ClaudeContentGenerationIcon = () => (
  <IconWrapper>
    <rect
      x="20"
      y="20"
      width="24"
      height="28"
      rx="3"
      stroke="white"
      strokeWidth="2"
    />

    <path d="M24 26H40" stroke="white" strokeWidth="2" />
    <path d="M24 31H38" stroke="white" strokeWidth="2" />
    <path d="M24 36H36" stroke="white" strokeWidth="2" />

    <circle cx="42" cy="22" r="2" fill="white" />
  </IconWrapper>
);

// ─── 4. Internal Knowledge Automation ─────────────────────
export const ClaudeKnowledgeAutomationIcon = () => (
  <IconWrapper>
    <rect
      x="22"
      y="20"
      width="20"
      height="28"
      rx="3"
      stroke="white"
      strokeWidth="2"
    />

    <path d="M26 26H38" stroke="white" strokeWidth="2" />
    <path d="M26 31H38" stroke="white" strokeWidth="2" />
    <path d="M26 36H34" stroke="white" strokeWidth="2" />

    <circle cx="32" cy="16" r="3" fill="white" />
  </IconWrapper>
);

// ─── 5. Business Process Automation ───────────────────────
export const ClaudeBusinessAutomationIcon = () => (
  <IconWrapper>
    <circle cx="26" cy="28" r="5" stroke="white" strokeWidth="2" />
    <circle cx="38" cy="28" r="5" stroke="white" strokeWidth="2" />
    <circle cx="32" cy="40" r="5" stroke="white" strokeWidth="2" />

    <path d="M26 28L38 28L32 40Z" stroke="white" strokeWidth="2" />
  </IconWrapper>
);

// ─── 6. AI Integration Strategy ───────────────────────────
export const ClaudeIntegrationStrategyIcon = () => (
  <IconWrapper>
    <rect
      x="22"
      y="22"
      width="20"
      height="20"
      rx="3"
      stroke="white"
      strokeWidth="2"
    />

    <path
      d="M32 18V22M32 42V46M18 32H22M42 32H46"
      stroke="white"
      strokeWidth="2"
    />

    <circle cx="32" cy="32" r="3" fill="white" />
  </IconWrapper>
);
