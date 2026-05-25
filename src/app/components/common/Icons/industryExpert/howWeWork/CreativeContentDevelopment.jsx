import React from "react";

function CreativeContentDevelopment() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="64"
        height="64"
        rx="32"
        fill="url(#paint0_linear_204_4753)"
      />

      {/* Pencil */}
      <path
        d="M24 40L27.5 39L39.5 27C40.3284 26.1716 40.3284 24.8284 39.5 24C38.6716 23.1716 37.3284 23.1716 36.5 24L24.5 36L24 40Z"
        stroke="white"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Content lines */}
      <path
        d="M30 20H22C20.8954 20 20 20.8954 20 22V42C20 43.1046 20.8954 44 22 44H42C43.1046 44 44 43.1046 44 42V34"
        stroke="white"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M28 30H34"
        stroke="white"
        strokeWidth="2.25"
        strokeLinecap="round"
      />

      <path
        d="M28 35H38"
        stroke="white"
        strokeWidth="2.25"
        strokeLinecap="round"
      />

      <defs>
        <linearGradient
          id="paint0_linear_204_4753"
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

export default CreativeContentDevelopment;