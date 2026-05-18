import React from "react";

function ContainerWrapper({
  children,
  background = "#fff",
  className = "",
  secondaryClass = "",
  maxWidth = "max-w-[1500px]",
}) {
  return (
    <div
      className={`w-full mx-auto ${className} ${secondaryClass}`}
      style={{ background: background || undefined }}  // ✅ direct inline style
    >
      <div className={`${maxWidth} mx-auto`}>{children}</div>
    </div>
  );
}

export default ContainerWrapper;