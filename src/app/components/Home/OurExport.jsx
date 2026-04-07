import React from "react";
import ContainerWrapper from "../common/Container/ContainerWrapper";
import H2HeadingWrapper from "../common/Container/H2HeadingWrapper";
import PaddingWrapper2 from "../common/Container/PaddingWrapper2";
import ExportInsight from "./ExportInsights/ExportInsight";

function OurExport() {
    return (
        <ContainerWrapper>
            <PaddingWrapper2 padding="pb-10 px-8.75 md:pb-14 md:px-12.5 xl:pb-18 xl:px-20">
                <H2HeadingWrapper
                    headdingBlack="Real Insights That"
                    headingBlue="Help You Grow"
                    subHeading="Practical ideas and strategies that actually make a difference to your growth."
                />
                <ExportInsight />
            </PaddingWrapper2>
        </ContainerWrapper>
    );
}

export default OurExport;
