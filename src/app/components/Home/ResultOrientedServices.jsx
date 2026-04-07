import React from "react";
import ContainerWrapper from "../common/Container/ContainerWrapper";
import PaddingWrapper from "../common/Container/PaddingWrapper";
import H2HeadingWrapper from "../common/Container/H2HeadingWrapper";
// import ServicesSlider from "./ResultOrientedServices/ServicesSlider";
import ServicesSlider1 from "./ResultOrientedServices/ServiceSlider1";

function ResultOrientedServices() {
  return (
    <ContainerWrapper maxWidth="max-w-[1500px] w-[92%]">
      <PaddingWrapper padding="py-3 md:py-7 xl:py-5">
        <H2HeadingWrapper
          headdingBlack="Performance-Driven"
          headingBlue="Solutions"
          subHeading="Built to Deliver. Powered by Strategy"
        />
        <ServicesSlider1 />
      </PaddingWrapper>
    </ContainerWrapper>
  );
}

export default ResultOrientedServices;
