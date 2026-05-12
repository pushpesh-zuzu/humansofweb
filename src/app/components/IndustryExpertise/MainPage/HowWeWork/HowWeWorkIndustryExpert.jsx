import ContainerWrapper from "@/app/components/common/Container/ContainerWrapper";
import H2HeadingWrapper from "@/app/components/common/Container/H2HeadingWrapper";
import PaddingWrapper2 from "@/app/components/common/Container/PaddingWrapper2";
import { GetYourFreeConsultationButton } from "@/app/components/common/CtaButtons";
import StepsCard from "@/app/components/common/Customgeneration/StepsCard";
// import StepsCard from "@/app/components/Home/CustomGeneration/StepsCard";
import React, { useState } from "react";
import HowItWorkStepCardIndustryExpert from "./HowItWorkStepCardIndustryExpert";
import GetProposalModal from "@/app/components/common/GetProposalModal/GetProposalModal";

const HowItWorkIndustryExpert = ({
    headdingBlack = "How We ",
    headingBlue = "Work",
    steps = [],
    showCtaButton = true,
    ctaText='Schedule A Free Consultation Today',
    
}) => {
      const [proposalOpen, setProposalOpen] = useState(false);
    
    return (
        <ContainerWrapper>
            <PaddingWrapper2 padding="pb-10 px-8.75 md:pb-14 md:px-12.5 xl:pb-18 xl:px-20">
                <H2HeadingWrapper
                    headdingBlack={headdingBlack}
                    headingBlue={headingBlue}
                    padding="pb-[30px] md:pb-10 lg:pb-15"
                />
                <HowItWorkStepCardIndustryExpert steps={steps} />
                {showCtaButton ? (
                    <div className="flex justify-center pt-6 md:pt-[30px] lg:pt-10">
                        <GetYourFreeConsultationButton onClick={()=>{setProposalOpen(true)}} text={ctaText} />
                    </div>
                ) : null}
            </PaddingWrapper2>
             <GetProposalModal
        isOpen={proposalOpen}
        onClose={() => setProposalOpen(false)}
      />
        </ContainerWrapper>
    );
};

export default HowItWorkIndustryExpert;