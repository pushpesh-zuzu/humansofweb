import React from "react";

function PaddingWrapper({ children, className = "", padding = "" }) {
  return (
    <div
      className={`${padding ? padding : "py-9.5 md:py-15 xl:py-20"} ${className} `}
    >
      {children}
    </div>
  );
}

export default PaddingWrapper;
