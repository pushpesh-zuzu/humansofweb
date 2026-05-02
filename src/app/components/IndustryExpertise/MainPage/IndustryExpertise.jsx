"use client";
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
import CustomGeneration from "../../Home/CustomGeneration";
import IndustryResearch from "../../common/Icons/industryExpert/howWeWork/IndustryResearch";
import StrategyPlanning from "../../common/Icons/industryExpert/howWeWork/StrategyPlanning";
import Execution from "../../common/Icons/industryExpert/howWeWork/Execution";
import Optimisation from "../../common/Icons/industryExpert/howWeWork/Optimisation";

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
const STEPS = [
  {
    step: "01",
    title: "Industry Research",
    description:
      "We dig deep into your market — competitors, keywords, audience intent, and gaps nobody else is targeting.",
    icon: <IndustryResearch className="w-full h-full" />,
  },
  {
    step: "02",
    title: "Strategy Planning",
    description:
      "Every brand gets a custom growth blueprint — channels, timelines, budgets, and KPIs mapped to your actual goals.",
    icon: <StrategyPlanning className="w-full h-full" />,
  },
  {
    step: "03",
    title: "Execution",
    description:
      "Our team moves fast — content live, ads running, pages ranking. No long waiting periods, no fluff deliverables.",
    icon: <Execution className="w-full h-full" />,
  },
  {
    step: "04",
    title: "Optimisation",
    description:
      "We analyse what's working, double down on it, and cut what isn't. Growth compounds every single month.",
    icon: <Optimisation className="w-full h-full" />,
  },
];
function IndustryExpertise() {
  return (
    <>
      <IndustryHeroSection />
      <TrustedBy padding={"py-5 md:py-12 xl:py-15"} />
      <IndustriesWeServe INDUSTRIES={INDUSTRIES} />
      <IndustryDeepDive />
      <HowWeWork cards={STEPS} />
      <ResultsSection />
      {/* <WhyHOW/> */}
      <ContainerWrapper>
        <PaddingWrapper2 padding="pt-10 md:pt-14  xl:pt-18 ">
          <FaqComponent position="mx-auto" items={FREQUENTLY_QUESTION} />
        </PaddingWrapper2>
      </ContainerWrapper>
      <ReachWithUs />
      {/* <CTASection/> */}
    </>
  );
}

export default IndustryExpertise;
