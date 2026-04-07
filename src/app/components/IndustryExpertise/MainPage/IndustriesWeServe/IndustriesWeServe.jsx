"use client";
import React from "react";
import ContainerWrapper from "../../../common/Container/ContainerWrapper";
import H2HeadingWrapper from "../../../common/Container/H2HeadingWrapper";
import PaddingWrapper2 from "../../../common/Container/PaddingWrapper2";
import IndustryCard from "./IndustryCard";

export default function IndustriesWeServe({ INDUSTRIES = [] }) {
  return (
    <ContainerWrapper background="#fafafa">
      <PaddingWrapper2>
        <H2HeadingWrapper
          headdingBlack="Industries"
          headingBlue="We Serve"
          description="We work with businesses across verticals — each with unique challenges, and each deserving a strategy built specifically for them."
        />

        <div className="flex flex-wrap justify-center gap-6 pt-2">
          {INDUSTRIES.map((industry, idx) => (
            <div
              key={industry.title}
              className="
        w-full
        sm:w-[calc(50%-12px)]
        lg:w-[calc(33.333%-16px)]
        max-w-[350px] lg:max-w-[425px]
      "
            >
              <IndustryCard {...industry} reverse={idx % 2 !== 0} />
            </div>
          ))}
        </div>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
}
