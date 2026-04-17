import React from "react";

function PaddingWrapper2({ children, className = "", padding = "" }) {
  return (
    <div
      className={`${padding ? padding : "py-10 px-8.75 md:py-[50px] md:px-12.5 xl:py-18 xl:px-20"} ${className} `}
    >
      {children}
    </div>
  );
}

export default PaddingWrapper2;
