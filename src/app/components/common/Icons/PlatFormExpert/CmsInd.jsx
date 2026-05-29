import React from "react";

function CmsInd({ className = "" }) {
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
        fill="url(#cmsGradient)"
      />

      {/* CMS window/grid icon */}
      <path
        d="M20 22H28V30H20V22ZM36 22H44V30H36V22ZM20 34H28V42H20V34ZM36 34H44V42H36V34Z"
        fill="white"
      />

      <defs>
        <linearGradient
          id="cmsGradient"
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

export default CmsInd;