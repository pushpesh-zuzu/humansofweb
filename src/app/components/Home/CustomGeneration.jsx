import React from "react";
import ContainerWrapper from "../common/Container/ContainerWrapper";
import PaddingWrapper from "../common/Container/PaddingWrapper";
import H2HeadingWrapper from "../common/Container/H2HeadingWrapper";
import StepsCard from "./CustomGeneration/StepsCard";


const CustomGeneration = () => {
    return (
        <ContainerWrapper maxWidth="max-w-[1500px] w-[92%]">
            <PaddingWrapper padding="py-5 md:py-7 xl:py-10">
                <H2HeadingWrapper
                    headdingBlack="Invest in Growth That"
                    headingBlue="Actually Brings Real Customers"
                    subHeading="Built to attract the right audience and drive meaningful results for your business."
                />
                <StepsCard />
            </PaddingWrapper>
        </ContainerWrapper>)
}

export default CustomGeneration