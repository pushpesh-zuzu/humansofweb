import React from "react";

// ─── Shared gradient wrapper ──────────────────────────────────────────────────
const GID = "kilo-grad";

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

// ─── 1. AI Coding Integration ─────────────────────────────────────────────────
// Concept: monitor screen with chip/circuit inside — IDE + AI merged
export const AICodingIntegrationIcon = () => (
  <IconWrapper>
    {/* Monitor frame */}
    <rect
      x="17"
      y="18"
      width="30"
      height="22"
      rx="2.5"
      stroke="white"
      strokeWidth="2.2"
    />
    {/* Monitor stand */}
    <path
      d="M28 40V44M36 40V44M25 44H39"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* AI chip inside screen — small square with pins */}
    <rect
      x="27"
      y="23"
      width="10"
      height="10"
      rx="1.5"
      stroke="white"
      strokeWidth="1.8"
    />
    <path
      d="M27 26H24M27 30H24M37 26H40M37 30H40"
      stroke="white"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M30 23V20M34 23V20"
      stroke="white"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </IconWrapper>
);

// ─── 2. Custom Development Workflows ─────────────────────────────────────────
// Concept: git branch — fork with commit dots (developer workflow symbol)
export const CustomDevWorkflowIcon = () => (
  <IconWrapper>
    {/* Main trunk line */}
    <path
      d="M24 20V44"
      stroke="white"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {/* Branch line going right */}
    <path
      d="M24 28C24 28 30 28 36 22"
      stroke="white"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {/* Branch merges back down */}
    <path
      d="M36 22V36C36 36 36 40 32 42"
      stroke="white"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {/* Commit dots */}
    <circle cx="24" cy="24" r="3" fill="white" />
    <circle cx="36" cy="28" r="3" fill="white" />
    <circle cx="24" cy="40" r="3" fill="white" />
  </IconWrapper>
);

// ─── 3. AI Documentation Systems ─────────────────────────────────────────────
// Concept: scroll/paper with a robotic quill auto-writing (automated docs)
export const AIDocumentationIcon = () => (
  <IconWrapper>
    {/* Scroll body */}
    <rect
      x="20"
      y="20"
      width="24"
      height="28"
      rx="3"
      stroke="white"
      strokeWidth="2.2"
    />
    {/* Scroll curl top */}
    <path
      d="M20 24C20 24 17 24 17 20C17 17 20 17 20 17"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Text lines */}
    <path
      d="M25 27H39"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M25 31H39"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    {/* Quill/pen writing — bottom portion */}
    <path
      d="M25 36L33 36"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    {/* Pen tip with spark */}
    <path
      d="M36 34L39 37L36 40"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="37" cy="33" r="1.5" fill="white" />
  </IconWrapper>
);

// ─── 4. Developer Productivity Automation ────────────────────────────────────
// Concept: rocket launching upward through horizontal code lines
export const DevProductivityIcon = () => (
  <IconWrapper>
    {/* Rocket body */}
    <path
      d="M32 18C32 18 26 22 26 30V38L32 36L38 38V30C38 22 32 18 32 18Z"
      stroke="white"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    {/* Rocket window */}
    <circle cx="32" cy="28" r="2.5" stroke="white" strokeWidth="1.8" />
    {/* Rocket fins */}
    <path
      d="M26 34L22 38"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M38 34L42 38"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Exhaust flame */}
    <path
      d="M29 38C29 38 30 42 32 44C34 42 35 38 35 38"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);

// ─── 5. AI Testing Assistance ─────────────────────────────────────────────────
// Concept: test flask/beaker with a checkmark inside (QA + pass)
export const AITestingIcon = () => (
  <IconWrapper>
    {/* Flask neck */}
    <path
      d="M28 18H36"
      stroke="white"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path d="M30 18V26" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M34 18V26" stroke="white" strokeWidth="2" strokeLinecap="round" />
    {/* Flask body */}
    <path
      d="M30 26L21 40C21 40 21 44 32 44C43 44 43 40 43 40L34 26Z"
      stroke="white"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    {/* Checkmark inside flask */}
    <path
      d="M26 36L30 40L38 32"
      stroke="white"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);

// ─── 6. AI Workflow Optimization ─────────────────────────────────────────────
// Concept: two interlocking gears — systems meshing together efficiently
export const AIWorkflowOptimizationIcon = () => (
  <IconWrapper>
    {/* Large gear (left) */}
    <circle cx="27" cy="30" r="7" stroke="white" strokeWidth="2" />
    <circle cx="27" cy="30" r="2.5" fill="white" />
    {/* Large gear teeth */}
    <path
      d="M27 20V23M27 37V40M17 30H20M34 30H37"
      stroke="white"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M20 23L22 25M32 35L34 37M20 37L22 35M32 25L34 23"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Small gear (right, interlocking) */}
    <circle cx="39" cy="26" r="5" stroke="white" strokeWidth="2" />
    <circle cx="39" cy="26" r="2" fill="white" />
    {/* Small gear teeth */}
    <path
      d="M39 18V21M39 31V34M31 26H34M44 26H47"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </IconWrapper>
);

// ─── 1. AI Code Generation ─────────────────────────────
export const AICodeGenerationIcon = () => (
  <IconWrapper>
    {/* code window */}
    <rect
      x="18"
      y="20"
      width="28"
      height="24"
      rx="3"
      stroke="white"
      strokeWidth="2.2"
    />

    {/* code brackets */}
    <path d="M26 28L22 32L26 36" stroke="white" strokeWidth="2" />
    <path d="M38 28L42 32L38 36" stroke="white" strokeWidth="2" />

    {/* AI spark */}
    <circle cx="32" cy="24" r="2" fill="white" />
  </IconWrapper>
);

// ─── 2. AI Debugging Assistance ─────────────────────────
export const AIDebuggingIcon = () => (
  <IconWrapper>
    {/* bug body */}
    <circle cx="32" cy="30" r="8" stroke="white" strokeWidth="2" />

    {/* bug eyes */}
    <circle cx="29" cy="28" r="1.5" fill="white" />
    <circle cx="35" cy="28" r="1.5" fill="white" />

    {/* debug cross */}
    <path d="M26 42L38 30M38 42L26 30" stroke="white" strokeWidth="2" />
  </IconWrapper>
);

// ─── 3. Development Workflow Automation ─────────────────
export const WorkflowAutomationIcon = () => (
  <IconWrapper>
    {/* flow nodes */}
    <circle cx="20" cy="24" r="3" fill="white" />
    <circle cx="32" cy="18" r="3" fill="white" />
    <circle cx="44" cy="24" r="3" fill="white" />
    <circle cx="32" cy="36" r="3" fill="white" />

    {/* connections */}
    <path d="M20 24L32 18L44 24L32 36Z" stroke="white" strokeWidth="2" />
  </IconWrapper>
);

// ─── 4. AI Engineering Support ──────────────────────────
export const AIEngineeringSupportIcon = () => (
  <IconWrapper>
    {/* gear */}
    <circle cx="32" cy="30" r="8" stroke="white" strokeWidth="2" />

    {/* inner core */}
    <circle cx="32" cy="30" r="3" fill="white" />

    {/* gear teeth */}
    <path
      d="M32 18V22M32 38V42M20 30H24M40 30H44"
      stroke="white"
      strokeWidth="2"
    />
  </IconWrapper>
);
