import React from "react";

function AiInd({ className = "" }) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        width="64"
        height="64"
        rx="32"
        fill="url(#aiGradient)"
      />

      {/* AI brain / nodes */}
      <circle cx="32" cy="32" r="10" stroke="white" strokeWidth="2" />
      <circle cx="24" cy="26" r="2" fill="white" />
      <circle cx="40" cy="26" r="2" fill="white" />
      <circle cx="24" cy="38" r="2" fill="white" />
      <circle cx="40" cy="38" r="2" fill="white" />

      <path
        d="M26 26L38 38M38 26L26 38"
        stroke="white"
        strokeWidth="1.5"
      />

      <defs>
        <linearGradient
          id="aiGradient"
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
    </svg>
  );
}

export default AiInd;