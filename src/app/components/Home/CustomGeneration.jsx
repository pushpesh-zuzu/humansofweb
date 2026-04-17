import React from "react";
import ContainerWrapper from "../common/Container/ContainerWrapper";
import H2HeadingWrapper from "../common/Container/H2HeadingWrapper";
import StepsCard from "../common/Customgeneration/StepsCard";
import PaddingWrapper2 from "../common/Container/PaddingWrapper2";
import discovery from "../common/Icons/Home/discovery-research.svg";
import onboard from "../common/Icons/Home/onboarding.svg";
import strategy from "../common/Icons/Home/strategy-implementaion.svg";
import operations from "../common/Icons/Home/operations.svg";
import reporting from "../common/Icons/Home/reporting.svg";
import GetCtaButton from "../common/CtaButtons/GetCtaButton";

const STEPS = [
    {
        step: "01",
        title: "Discovery & Research",
        description: "We dive into your audience, market gaps, and positioning to build strategies based on clarity, not assumptions.",
        icon: discovery,
    },
    {
        step: "02",
        title: "Onboarding",
        description: "We align early, understand your goals, and set everything up so execution starts without delays.",
        icon: onboard,
    },
    {
        step: "03",
        title: "Strategy & Implementation",
        description: "We build a focused strategy around your goals and put it into action without unnecessary delays.",
        icon: strategy,
    },
    {
        step: "04",
        title: "Operations & Execution",
        description: "We manage, launch, and optimize everything behind the scenes while you focus on what matters most.",
        icon: operations,
    },
    {
        step: "05",
        title: "Reporting & Forecasting",
        description: "We keep you updated with clear insights, showing progress and what to expect moving forward.",
        icon: reporting,
    },
];

const CustomGeneration = ({
    headdingBlack = "Invest in Growth That",
    headingBlue = "Actually Brings Real Customers",
    steps = STEPS,
    showCtaButton = false,
    ctaText,
}) => {
    return (
        <ContainerWrapper>
            <PaddingWrapper2 padding="pb-10 px-8.75 md:pb-14 md:px-12.5 xl:pb-18 xl:px-20">
                <H2HeadingWrapper
                    headdingBlack={headdingBlack}
                    headingBlue={headingBlue}
                    padding="pb-[30px] md:pb-10 lg:pb-15"
                />
                <StepsCard steps={steps} />
                {
                    showCtaButton ? (
                        <div className="flex justify-center pt-6 md:pt-[30px] lg:pt-10">
                            <GetCtaButton text={ctaText}
                                href="" />
                        </div>
                    ) : null
                }
            </PaddingWrapper2>
        </ContainerWrapper>)
}

export default CustomGeneration
