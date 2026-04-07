import React from "react";
import ContainerWrapper from "../common/Container/ContainerWrapper";
import H2HeadingWrapper from "../common/Container/H2HeadingWrapper";
import StepsCard from "./CustomGeneration/StepsCard";
import PaddingWrapper2 from "../common/Container/PaddingWrapper2";


const CustomGeneration = () => {
    return (
        <ContainerWrapper>
            <PaddingWrapper2 padding="pb-10 px-8.75 md:pb-14 md:px-12.5 xl:pb-18 xl:px-20">
                <H2HeadingWrapper
                    headdingBlack="Invest in Growth That"
                    headingBlue="Actually Brings Real Customers"
                    subHeading="Built to attract the right audience and drive meaningful results for your business."
                />
                <StepsCard />
            </PaddingWrapper2>
        </ContainerWrapper>)
}

export default CustomGeneration