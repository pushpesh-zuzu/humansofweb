"use client";

import Image from "next/image";
import { useState } from "react";
import ContainerWrapper from "../../Container/ContainerWrapper";
import PaddingWrapper2 from "../../Container/PaddingWrapper2";
import H2HeadingWrapper from "../../Container/H2HeadingWrapper";
import GetCtaButton from "../../CtaButtons/GetCtaButton";

const Interactivecontent = ({
    headingStart = "How Humans of Web Drives",
    headingEnd = "Explosive E-commerce SEO Growth",
    items = [],
    ctaText = "Speak With An Expert Now",
    ctaHref = "/contact",
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeItem = items[activeIndex] ?? items[0];

    if (!activeItem) return null;

    return (
        <ContainerWrapper>
            <PaddingWrapper2 padding="pb-10 px-8.75 md:pb-14 md:px-12.5 xl:pb-18 xl:px-20">
                <section>
                    <H2HeadingWrapper
                        headdingBlack={headingStart}
                        headingBlue={headingEnd}
                        padding="pb-[30px] md:pb-10 lg:pb-15"
                        textAlign="text-center"
                    />

                    <div className="mx-auto max-w-[1130px] rounded-[14px] bg-gradient-to-br from-primary to-secondary p-[2px] shadow-[0_14px_34px_rgba(72,23,156,0.15)]">
                        <div className="grid gap-5 rounded-[12px] bg-white p-4 md:p-5 lg:grid-cols-[minmax(280px,0.38fr)_minmax(0,0.62fr)]">
                            <div className="grid gap-3">
                                {items.map((item, index) => {
                                    const isActive = index === activeIndex;

                                    return (
                                        <button
                                            key={item.title}
                                            type="button"
                                            onClick={() => setActiveIndex(index)}
                                            className={`flex min-h-[76px] w-full cursor-pointer items-center gap-4 rounded-[14px] px-4 text-left transition ${isActive
                                                ? "bg-secondary text-white"
                                                : "bg-primary text-white hover:bg-secondary"
                                                }`}
                                        >
                                            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-white p-2">
                                                <Image
                                                    src={item.icon}
                                                    alt=""
                                                    width={34}
                                                    height={34}
                                                    className="h-full w-full object-contain"
                                                />
                                            </span>
                                            <span className="min-w-0 flex-1 text-h6 font-bold">{item.title}</span>
                                            <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-white text-base leading-none">
                                                &gt;
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>

                            <div className="rounded-[14px] border border-primary/25 bg-[#f4fbff] p-6 md:p-8 lg:p-10">
                                <div className="flex min-h-[360px] flex-col justify-center">
                                    <Image
                                        src={activeItem.icon}
                                        alt=""
                                        width={132}
                                        height={132}
                                        className="h-[110px] w-[110px] object-contain md:h-[132px] md:w-[132px]"
                                    />
                                    <h3 className="mt-6 text-h4 font-bold text-primary">{activeItem.title}</h3>
                                    <p className="p-small mt-4 max-w-[650px] font-medium leading-[1.9] text-[#2f2f2f]">
                                        {activeItem.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center pt-6 md:pt-[30px] lg:pt-10">
                        <GetCtaButton text={ctaText}
                            href="" />
                    </div>
                </section>
            </PaddingWrapper2>
        </ContainerWrapper>
    );
};

export default Interactivecontent;
