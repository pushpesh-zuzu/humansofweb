import React from "react";
import styles from "./ContainerWrapper.module.css";

function ContainerWrapper({
  children,
  background = "#fff",
  className = "",
  secondaryClass = "",
  maxWidth = "max-w-[1500px]",
}) {
  return (
    <div
      className={`w-full mx-auto ${className} ${secondaryClass} ${background ? styles.bgResponsive : ""}`}
      style={background ? { "--wrapper-bg": background } : {}}
    >
      <div className={`${maxWidth} mx-auto `}>{children}</div>
    </div>
  );
}

export default ContainerWrapper;
