import React from "react";
import IndustryHeroSection from "./HeroSection/HeroSection";
import TrustedBy from "../../common/TrustedBy/TrustedBy";
import IndustriesWeServe from "./IndustriesWeServe/IndustriesWeServe";
import IndustryDeepDive from "./IndustryDeepDive/IndustryDeepDive";
import HowWeWork from "./HowWeWork/HowWeWork";
import ResultsSection from "./ResultsSection/ResultsSection";
import WhyHOW from "./WhyHOW/WhyHOW";
import CTASection from "./CTASection/CTASection";
import { FAQ } from "./FAQ/FAQ";
import { INDUSTRIES } from "./IndustriesWeServe/IndustriesWeServerData";
import FaqComponent from "../../common/SubServices/FaqComponent/FaqComponent";
import ContainerWrapper from "../../common/Container/ContainerWrapper";
import PaddingWrapper2 from "../../common/Container/PaddingWrapper2";
import ReachWithUs from "../../common/Services/ReachWithUs/ReachWithUs";

export const FREQUENTLY_QUESTION = [
  {
    key: "1",
    question: "Do you specialise in specific industries?",
    answer: `
       Yes, we work across a wide range of industries including technology, healthcare, finance, e-commerce, and more. Our team adapts quickly to different domains, ensuring that every solution is aligned with industry-specific trends, challenges, and audience expectations.`,
  },
  {
    key: "2",
    question: "How long does it take to see results?",
    answer: `
    We follow a tailored approach for every client. First, we understand your business goals, target audience, and current challenges. Based on this, we create a data-driven strategy that is flexible, scalable, and designed specifically to achieve your objectives.   
    `,
  },
  {
    key: "3",
    question: "How do you customise strategies?",
    answer: `
    The timeline depends on the scope and type of project. Some improvements can be seen within a few weeks, while long-term strategies may take a few months to deliver measurable results. We always focus on sustainable growth rather than quick fixes.`,
  },
];
function IndustryExpertise() {
  return (
    <>
      <IndustryHeroSection />
      <TrustedBy padding={"py-5 md:py-12 xl:py-15"} />
      <IndustriesWeServe INDUSTRIES={INDUSTRIES} />
      <IndustryDeepDive />
      <HowWeWork />
      <ResultsSection />
      {/* <WhyHOW/> */}
      <ContainerWrapper>
        <PaddingWrapper2 padding="pt-10 md:pt-14  xl:pt-18 ">
          <FaqComponent items={FREQUENTLY_QUESTION} />
        </PaddingWrapper2>
      </ContainerWrapper>
      <ReachWithUs />
      {/* <CTASection/> */}
    </>
  );
}

export default IndustryExpertise;
