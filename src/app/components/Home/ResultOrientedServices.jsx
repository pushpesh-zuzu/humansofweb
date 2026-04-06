import React from "react";
import ContainerWrapper from "../common/Container/ContainerWrapper";
import PaddingWrapper from "../common/Container/PaddingWrapper";
import H2HeadingWrapper from "../common/Container/H2HeadingWrapper";
// import ServicesSlider from "./ResultOrientedServices/ServicesSlider";
import ServicesSlider1 from "./ResultOrientedServices/ServiceSlider1";

function ResultOrientedServices() {
  return (
    <ContainerWrapper maxWidth="max-w-[1500px] w-[88%]">
      <PaddingWrapper padding="py-5 md:py-7 xl:py-10">
        <H2HeadingWrapper
          headdingBlack="Results Oriented"
          headingBlue="Solutions"
          subHeading="Built to Perform. Backed by Strategy"
        />
        <ServicesSlider1 />
      </PaddingWrapper>
    </ContainerWrapper>
  );
}

export default ResultOrientedServices;
