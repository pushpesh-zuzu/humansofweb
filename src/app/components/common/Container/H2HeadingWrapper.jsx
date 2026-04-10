import React from "react";

function H2HeadingWrapper({
  headdingBlack = "",
  headingBlue = "",
  subHeading = "",
  description = "",
  breakLine = false,
  headingBlueColor="text-primary",
  headingBlackColor="",
  multiParagraph=[],
  textAlign="",
  padding='pb-6 md:pb-8.75'
}) {
  return (
    <div className={`${padding} ${textAlign ? textAlign :'text-left'}`}>
      <h2 className={`text-h2 ${headingBlackColor}`}>
        {headdingBlack} {breakLine && <br />}{" "}
        {headingBlue && (
          <span className={`font-bold ${headingBlueColor}`}>{headingBlue}</span>
        )}
      </h2>
      {subHeading && (
        <h4 className="text-h4 py-3 md:py-6  font-medium">{subHeading}</h4>
      )}
      {/* Paragraph Logic */}
      {multiParagraph && multiParagraph.length > 0 ? (
        multiParagraph.map((para, index) => (
          <p key={index} className="p-default mt-3.75">
            {para}
          </p>
        ))
      ) : (
        description && <p className="p-default pt-3.75">{description}</p>
      )}
    </div>
  );
}

export default H2HeadingWrapper;
