import React from "react";
import ContainerWrapper from "../common/Container/ContainerWrapper";
import H2HeadingWrapper from "../common/Container/H2HeadingWrapper";
import ServicesSlider1 from "./ResultOrientedServices/ServiceSlider1";
import PaddingWrapper2 from "../common/Container/PaddingWrapper2";

function ResultOrientedServices() {
  return (
    <ContainerWrapper>
      <PaddingWrapper2 padding="pb-10 px-8.75 md:pb-14 md:px-12.5 xl:pb-18 xl:px-20">
        <H2HeadingWrapper
          headdingBlack="Performance-Driven"
          headingBlue="Solutions"
          subHeading=""
        />
        <ServicesSlider1 />
      </PaddingWrapper2>
    </ContainerWrapper>
  );
}

export default ResultOrientedServices;
