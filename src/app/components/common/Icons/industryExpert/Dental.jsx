import React from "react";

function Dental({ className = "" }) {
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
        fill="url(#paint0_linear_202_4598)"
      />
      <path
        d="M27.4999 23C28.2499 23.75 29.7544 23.618 31.9999 21.764M31.9999 21.764C31.6679 21.492 31.3234 21.179 30.9664 20.825C27.5074 17.399 22.7974 18.0695 20.5909 20.825C19.0669 22.73 15.1669 27.47 24.7129 44.36C25.1089 45.059 25.8964 45.5 26.7439 45.5C28.0969 45.5 29.1544 44.42 29.1979 43.16C29.2924 40.487 29.8099 37.4045 31.9999 37.4045C34.1899 37.4045 34.7089 40.487 34.8019 43.16C34.8454 44.42 35.9029 45.5 37.2559 45.5C38.1034 45.5 38.8909 45.059 39.2869 44.36C48.8344 27.4685 44.9329 22.73 43.4089 20.825C41.2024 18.0695 36.4924 17.399 33.0334 20.825C32.6764 21.178 32.3319 21.491 31.9999 21.764Z"
        stroke="white"
        stroke-width="2.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_202_4598"
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

export default Dental;
