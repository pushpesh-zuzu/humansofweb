"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ContainerWrapper from "../common/Container/ContainerWrapper";
import PaddingWrapper from "../common/Container/PaddingWrapper";
import H2HeadingWrapper from "../common/Container/H2HeadingWrapper";

const TAG_ROWS = [
    [
        "LAW",
        "ECOMMERCE",
        "FOREX",
        "FINTECH",
        "SAAS",
        "HEALTHCARE",
        "HOME",
        "SOLAR",
        "ADDICTION",
        "ART",
        "LUXURY",
    ],
    [
        "SAAS",
        "PROPERTY",
        "CYBERSEC",
        "JEWELLERY",
        "EDUCATION",
        "CBD",
        "MORTGAGE",
        "TRAVEL",
        "FINANCE",
        "INVESTMENT",
    ],
    [
        "FINTECH",
        "ART",
        "SOLAR",
        "ADDICTION",
        "LUXURY",
        "LAW",
        "ECOMMERCE",
        "HOME",
        "FOREX",
        "HEALTHCARE",
        "SAAS",
    ],
    [
        "EDUCATION",
        "INVESTMENT",
        "TRAVEL",
        "FINANCE",
        "SAAS",
        "CYBERSEC",
        "PROPERTY",
        "CBD",
        "JEWELLERY",
        "MORTGAGE",
    ],
];

const tagStyles = [
    "border-primary/30 bg-primary/10 text-primary",
    "border-secondary/30 bg-secondary/10 text-secondary",
    "border-primary/25 bg-white text-primary",
];

function TagRow({ tags, reverse = false, progress }) {
    const x = useTransform(progress, [0, 1], reverse ? ["0%", "-16%"] : ["-16%", "0%"]);
    const repeatedTags = [...tags, ...tags];

    return (
        <div className="overflow-hidden py-2">
            <motion.div className="flex w-max gap-4" style={{ x }}>
                {repeatedTags.map((tag, index) => (
                    <span
                        key={`${tag}-${index}`}
                        className={`p-default whitespace-nowrap rounded-full border px-6 py-3 font-bold shadow-[0_12px_28px_rgba(72,23,156,0.10)] ${tagStyles[index % tagStyles.length]
                            }`}
                    >
                        {tag}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}

const IndustryTags = () => {
    const { scrollYProgress } = useScroll();

    return (
        <ContainerWrapper>
            <PaddingWrapper padding="pb-10 px-8.75 md:pb-14 md:px-12.5 xl:pb-18 xl:px-20">
                <section className="overflow-hidden bg-[#f5f6ff] px-4 py-8 md:px-8 md:py-10" style={{ borderRadius: 18 }}>
                    <H2HeadingWrapper
                        headdingBlack="Industry Expertise"
                        headingBlue="That Keeps Moving"
                        subHeading=""
                    />

                    <div className="relative">
                        {TAG_ROWS.map((tags, index) => (
                            <TagRow
                                key={index}
                                tags={tags}
                                progress={scrollYProgress}
                                reverse={index % 2 !== 0}
                            />
                        ))}
                    </div>
                </section>
            </PaddingWrapper>
        </ContainerWrapper>
    );
};

export default IndustryTags;
