// components/common/TimelineIcon.jsx
// Gradient SVG icons for Shopify PPC Timeline
// Usage: <TimelineIcon name="audit" />

import { useId } from "react";

const GRADIENT_ID = "timeline-grad";

const GradRect = () => {
  const gradientId = useId();
  const clipId = useId();

  return (
    <>
      <rect width="64" height="64" rx="32" fill={`url(#${gradientId})`} />

      <defs>
        <linearGradient
          id={gradientId}
          x1="64"
          y1="0"
          x2="0"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F65A75" />
          <stop offset="1" stop-color="#48179C" />
        </linearGradient>

        <clipPath id={clipId}>
          <rect
            width="36"
            height="36"
            fill="white"
            transform="translate(14 14)"
          />
        </clipPath>
      </defs>

      <style>
        {`:root {
          --timeline-clip: ${clipId};
        }`}
      </style>
    </>
  );
};

const ICONS = {
  // Shopify Store Audit — magnifying glass with plus
  audit: (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <GradRect />
      <g clipPath="url(#icon-clip)">
        <circle
          cx="30"
          cy="30"
          r="9"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
        />
        <line
          x1="36.5"
          y1="36.5"
          x2="44"
          y2="44"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="27"
          y1="30"
          x2="33"
          y2="30"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="30"
          y1="27"
          x2="30"
          y2="33"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  ),

  // Competitor Research — bar chart with arrow
  research: (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <GradRect />
      <g clipPath="url(#icon-clip)">
        <rect x="17" y="36" width="6" height="12" rx="1" fill="white" />
        <rect x="26" y="28" width="6" height="20" rx="1" fill="white" />
        <rect x="35" y="22" width="6" height="26" rx="1" fill="white" />
        <line
          x1="17"
          y1="50"
          x2="45"
          y2="50"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <polyline
          points="39,19 44,19 44,24"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="38"
          y1="25"
          x2="44"
          y2="19"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  ),

  // Keyword Strategy — bullseye target
  keyword: (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <GradRect />
      <g clipPath="url(#icon-clip)">
        <circle
          cx="32"
          cy="32"
          r="14"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
        />
        <circle
          cx="32"
          cy="32"
          r="8"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
        />
        <circle cx="32" cy="32" r="3" fill="white" />
        <line
          x1="32"
          y1="16"
          x2="32"
          y2="20"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="32"
          y1="44"
          x2="32"
          y2="48"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="16"
          y1="32"
          x2="20"
          y2="32"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="44"
          y1="32"
          x2="48"
          y2="32"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  ),

  // Google Shopping — shopping bag
  shopping: (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <GradRect />
      <g clipPath="url(#icon-clip)">
        <path
          d="M22 26h20l-3 18H25L22 26z"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          d="M27 26c0-2.76 2.24-5 5-5s5 2.24 5 5"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <line
          x1="28"
          y1="33"
          x2="28"
          y2="39"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="36"
          y1="33"
          x2="36"
          y2="39"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  ),

  // Ad Creatives — pencil
  creative: (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <GradRect />
      <g clipPath="url(#icon-clip)">
        <path
          d="M20 44l4-1.5 18-18-2.5-2.5-18 18L20 44z"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          d="M37.5 22.5l4 4"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M39.5 20.5a2 2 0 012.83 0l1.17 1.17a2 2 0 010 2.83L42 26l-4-4 1.5-1.5z"
          fill="white"
        />
      </g>
    </svg>
  ),

  // Smart Bidding — dollar circle
  bidding: (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <GradRect />
      <g clipPath="url(#icon-clip)">
        <circle
          cx="32"
          cy="32"
          r="14"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
        />
        <line
          x1="32"
          y1="20"
          x2="32"
          y2="44"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M26 36.5c0 2 1.8 3.5 6 3.5s6-1.5 6-3.5-2-3-6-3.5-6-1.5-6-3.5 1.8-3.5 6-3.5 6 1.5 6 3.5"
          stroke="white"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </g>
    </svg>
  ),

  // Retargeting — refresh arrows
  retarget: (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <GradRect />
      <g clipPath="url(#icon-clip)">
        <path
          d="M20 32a12 12 0 0121-7.94"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M44 32a12 12 0 01-21 7.94"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <polyline
          points="38,20 41,24.06 37,25"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="26,44 23,39.94 27,39"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  ),

  // Landing Page — browser window
  landing: (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <GradRect />
      <g clipPath="url(#icon-clip)">
        <rect
          x="16"
          y="19"
          width="32"
          height="24"
          rx="3"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
        />
        <line x1="16" y1="26" x2="48" y2="26" stroke="white" strokeWidth="2" />
        <circle cx="21" cy="22.5" r="1.5" fill="white" />
        <circle cx="26" cy="22.5" r="1.5" fill="white" />
        <circle cx="31" cy="22.5" r="1.5" fill="white" />
        <line
          x1="22"
          y1="33"
          x2="38"
          y2="33"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="22"
          y1="37"
          x2="34"
          y2="37"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="30"
          y1="43"
          x2="34"
          y2="43"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="32"
          y1="43"
          x2="32"
          y2="48"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  ),

  // Analytics — line chart
  analytics: (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <GradRect />
      <g clipPath="url(#icon-clip)">
        <polyline
          points="18,42 26,32 33,37 41,24 46,28"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="18"
          y1="44"
          x2="46"
          y2="44"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="26" cy="32" r="2.5" fill="white" />
        <circle cx="33" cy="37" r="2.5" fill="white" />
        <circle cx="41" cy="24" r="2.5" fill="white" />
      </g>
    </svg>
  ),

  // Monthly Report — document with checkmark
  report: (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <GradRect />
      <g clipPath="url(#icon-clip)">
        <rect
          x="19"
          y="15"
          width="22"
          height="30"
          rx="2"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
        />
        <line
          x1="24"
          y1="23"
          x2="36"
          y2="23"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="24"
          y1="28"
          x2="36"
          y2="28"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="24"
          y1="33"
          x2="30"
          y2="33"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          cx="38"
          cy="41"
          r="7"
          fill={`url(#${GRADIENT_ID})`}
          stroke="white"
          strokeWidth="2"
        />
        <polyline
          points="35,41 37.5,43.5 42,39"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  ),

  // Scaling — rocket
  scale: (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <GradRect />
      <g clipPath="url(#icon-clip)">
        <path
          d="M32 20c0 0 9 4 9 14v2l-4 4h-10l-4-4v-2c0-10 9-14 9-14z"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          d="M24 36c-2 1.5-4 4.5-4 8h5"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40 36c2 1.5 4 4.5 4 8h-5"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="30" r="2.5" fill="white" />
      </g>
    </svg>
  ),
};

export default function TimelineIcon({ name }) {
  return ICONS[name] || null;
}
