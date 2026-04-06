import React from "react";
import ContainerWrapper from "../common/Container/ContainerWrapper";
import PaddingWrapper from "../common/Container/PaddingWrapper";
import H2HeadingWrapper from "../common/Container/H2HeadingWrapper";
import ServicesSlider1 from "./ResultOrientedServices/ServiceSlider1";

function WorkingWithUs() {
  return (
    <ContainerWrapper maxWidth="max-w-[1500px] w-[92%]">
      <PaddingWrapper padding="py-5 md:py-7 xl:py-10">
        <H2HeadingWrapper
          headdingBlack="Trusted by Teams"
          headingBlue="That Want to Grow"
          subHeading="Real experiences from people who partnered with us to scale smarter"
        />
        {/* <ServicesSlider1 /> */}
      </PaddingWrapper>
    </ContainerWrapper>
  );
}

export default WorkingWithUs;
