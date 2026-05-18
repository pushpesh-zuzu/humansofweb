import React from "react";

function CrmInd({ className = "" }) {
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
        fill="url(#crmGradient)"
      />

      {/* CRM users network */}
      <path
        d="M32 28C34.2 28 36 26.2 36 24C36 21.8 34.2 20 32 20C29.8 20 28 21.8 28 24C28 26.2 29.8 28 32 28Z"
        fill="white"
      />
      <path
        d="M22 44C22 38.5 26.5 34 32 34C37.5 34 42 38.5 42 44"
        fill="white"
      />

      <defs>
        <linearGradient
          id="crmGradient"
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
    </svg>
  );
}

export default CrmInd;