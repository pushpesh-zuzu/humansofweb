import React from "react";

function H2HeadingWrapper({
  headdingBlack = "",
  headingBlue = "",
  subHeading = "",
  description = "",
  breakLine = false,
}) {
  return (
    <div className="pb-8.75 text-center">
      <h2 className="text-h2">
        {headdingBlack} {breakLine && <br />}{" "}
        {headingBlue && (
          <span className="font-bold text-[#162cb9]">{headingBlue}</span>
        )}
      </h2>
      {subHeading && (
        <h4 className="text-h4 py-6  font-medium">{subHeading}</h4>
      )}
      {description && <p className="p-default p-3.75">{description}</p>}
    </div>
  );
}

export default H2HeadingWrapper;
