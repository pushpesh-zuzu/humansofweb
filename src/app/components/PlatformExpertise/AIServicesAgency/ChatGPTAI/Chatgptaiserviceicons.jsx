import React from "react";

// ─── Shared gradient wrapper ──────────────────────────────────────────────────
const GID = "chatgpt-grad";

const IconWrapper = ({ children }) => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
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
        <stop stopColor="#00C896" />
        <stop offset="1" stopColor="#0066FF" />
      </linearGradient>
    </defs>
    {children}
  </svg>
);

// ─── 1. AI Chatbot Development ───────────────────────────────────────────────
// Concept: chatbot face + chat bubble
export const AIChatbotDevelopmentIcon = () => (
  <IconWrapper>
    {/* Chat bubble */}
    <path
      d="M18 22C18 19.8 19.8 18 22 18H42C44.2 18 46 19.8 46 22V34C46 36.2 44.2 38 42 38H31L25 44V38H22C19.8 38 18 36.2 18 34V22Z"
      stroke="white"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />

    {/* Robot eyes */}
    <circle cx="28" cy="28" r="2" fill="white" />
    <circle cx="36" cy="28" r="2" fill="white" />

    {/* Smile */}
    <path
      d="M28 33C28 33 30 35 32 35C34 35 36 33 36 33"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </IconWrapper>
);

// ─── 2. Custom GPT Workflows ─────────────────────────────────────────────────
// Concept: connected workflow nodes
export const CustomGPTWorkflowIcon = () => (
  <IconWrapper>
    {/* Nodes */}
    <circle cx="22" cy="22" r="4" stroke="white" strokeWidth="2.2" />
    <circle cx="42" cy="22" r="4" stroke="white" strokeWidth="2.2" />
    <circle cx="32" cy="42" r="4" stroke="white" strokeWidth="2.2" />

    {/* Connecting lines */}
    <path
      d="M26 22H38M25 25L29 38M39 25L35 38"
      stroke="white"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </IconWrapper>
);

// ─── 3. ChatGPT API Integration ──────────────────────────────────────────────
// Concept: plug connected to browser/app window
export const ChatGPTAPIIntegrationIcon = () => (
  <IconWrapper>
    {/* Window */}
    <rect
      x="18"
      y="18"
      width="28"
      height="20"
      rx="3"
      stroke="white"
      strokeWidth="2.2"
    />

    {/* API connection */}
    <path
      d="M32 38V46"
      stroke="white"
      strokeWidth="2.2"
      strokeLinecap="round"
    />

    {/* Plug */}
    <path
      d="M28 46H36"
      stroke="white"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M29 42V46M35 42V46"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Window top dots */}
    <circle cx="23" cy="23" r="1.5" fill="white" />
    <circle cx="28" cy="23" r="1.5" fill="white" />
  </IconWrapper>
);

// ─── 4. AI Content Automation ────────────────────────────────────────────────
// Concept: document + magic spark automation
export const AIContentAutomationIcon = () => (
  <IconWrapper>
    {/* Document */}
    <rect
      x="22"
      y="18"
      width="20"
      height="28"
      rx="3"
      stroke="white"
      strokeWidth="2.2"
    />

    {/* Content lines */}
    <path
      d="M27 26H37M27 31H37M27 36H34"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
    />

    {/* Spark */}
    <path
      d="M44 20L45.5 24L49 25.5L45.5 27L44 31L42.5 27L39 25.5L42.5 24Z"
      fill="white"
    />
  </IconWrapper>
);

// ─── 5. AI Support Systems ───────────────────────────────────────────────────
// Concept: headset support + AI pulse
export const AISupportSystemsIcon = () => (
  <IconWrapper>
    {/* Headset */}
    <path
      d="M22 32C22 26.5 26.5 22 32 22C37.5 22 42 26.5 42 32"
      stroke="white"
      strokeWidth="2.2"
      strokeLinecap="round"
    />

    {/* Ear pads */}
    <rect
      x="20"
      y="31"
      width="5"
      height="10"
      rx="2"
      stroke="white"
      strokeWidth="2"
    />
    <rect
      x="39"
      y="31"
      width="5"
      height="10"
      rx="2"
      stroke="white"
      strokeWidth="2"
    />

    {/* Mic */}
    <path
      d="M42 40C42 40 40 44 35 44"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Pulse */}
    <path
      d="M27 34H29L31 30L33 38L35 34H37"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);

// ─── 6. Business Process Automation ──────────────────────────────────────────
// Concept: circular automation arrows + briefcase
export const BusinessProcessAutomationIcon = () => (
  <IconWrapper>
    {/* Briefcase */}
    <rect
      x="22"
      y="24"
      width="20"
      height="14"
      rx="2.5"
      stroke="white"
      strokeWidth="2.2"
    />

    {/* Briefcase handle */}
    <path
      d="M28 24V20H36V24"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Circular arrows */}
    <path
      d="M20 32C20 25 25 20 32 20"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M31 17L32 20L29 21"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M44 32C44 39 39 44 32 44"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M33 47L32 44L35 43"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);

// ─── Updated Features Array ──────────────────────────────────────────────────
