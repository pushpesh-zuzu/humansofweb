import React from "react";

function HomeImprovement({ className = "" }) {
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
        fill="url(#paint0_linear_202_4636)"
      />
      <path
        d="M21.5 32H18.5L32 18.5L45.5 32H42.5M21.5 32V42.5C21.5 43.2956 21.8161 44.0587 22.3787 44.6213C22.9413 45.1839 23.7044 45.5 24.5 45.5H39.5C40.2956 45.5 41.0587 45.1839 41.6213 44.6213C42.1839 44.0587 42.5 43.2956 42.5 42.5V32"
        stroke="white"
        stroke-width="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.5 45.5V36.5C27.5 35.7044 27.8161 34.9413 28.3787 34.3787C28.9413 33.8161 29.7044 33.5 30.5 33.5H33.5C34.2956 33.5 35.0587 33.8161 35.6213 34.3787C36.1839 34.9413 36.5 35.7044 36.5 36.5V45.5"
        stroke="white"
        stroke-width="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_202_4636"
          x1="64"
          y1="7.62939e-06"
          x2="7.62939e-06"
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

export default HomeImprovement;
