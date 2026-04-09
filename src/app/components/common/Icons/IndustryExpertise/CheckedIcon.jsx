import React from "react";

function CheckedIcon({color=''}) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      fill="#F65A75"
      aria-hidden="true"
      className="shrink-0 "
    >
      <circle
        cx="10"
        cy="10"
        r="9"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.5"
      />
      <path
        d="M6.5 10.5l2.5 2.5 4.5-5"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CheckedIcon;
