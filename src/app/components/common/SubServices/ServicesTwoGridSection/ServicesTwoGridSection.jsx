"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContainerWrapper from "../../Container/ContainerWrapper";
import PaddingWrapper2 from "../../Container/PaddingWrapper2";
import H2HeadingWrapper from "@/app/components/common/Container/H2HeadingWrapper";
import GetCtaButton from "../../CtaButtons/GetCtaButton";

export default function ServicesTwoGridSection({
  headdingBlack,
  headingBlue,
  subheading = "",
  paragraphs = [],
  image,
  imageAltText,
  reverse = false,
  isHeadingInGridSection = false,
  isBackgroundPrimary = false,
  background = "#fff",
  ctaText = "Start Your PPC Growth",
  seeMore = true,
  limit = 7,
  bottomParagraph = [],
  breakLine = false,
  headingBlueColor = "",
  headingBlackColor = "",
  isImageSmall = false,
  paragraphTextColor = false
}) {
  const [expanded, setExpanded] = useState(false);

  const visibleParagraphs =
    seeMore && !expanded ? paragraphs.slice(0, limit) : paragraphs;

  return (
    <ContainerWrapper background={isBackgroundPrimary ? "#48179C" : background}>
      <PaddingWrapper2>
        {!isHeadingInGridSection && (
          <H2HeadingWrapper
            headdingBlack={headdingBlack}
            headingBlue={headingBlue}
            subHeading={subheading}
            breakLine={breakLine}
            padding="pb-[35px] md:pb-[60px]"
            headingBlueColor={headingBlueColor}
            headingBlackColor={headingBlackColor}
          />
        )}

        <section className="relative">
          <div
            className={`grid items-center gap-12 
              ${isImageSmall ? "lg:grid-cols-[30%_70%]" : "lg:grid-cols-2"}
              ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
            `}
          >
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: reverse ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-[500px] rounded-[32px]">
                <Image
                  src={image}
                  alt={imageAltText}
                  width={540}
                  height={380}
                  className="object-contain rounded-[32px] h-full max-h-[540px] w-[85%]"

                />
              </div>
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: reverse ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`${isImageSmall ? 'max-w-full' : 'max-w-[700px]'}`}
            >
              {isHeadingInGridSection && (
                <H2HeadingWrapper
                  headdingBlack={headdingBlack}
                  headingBlue={headingBlue}
                  subHeading={subheading}
                  breakLine={breakLine}
                  padding="pb-[35px] md:pb-[60px]"
                  headingBlueColor={headingBlueColor}
                  headingBlackColor={headingBlackColor}
                />
              )}

              {/* Paragraphs */}
              {visibleParagraphs.map((para, i) => {
                const isLast = i === visibleParagraphs.length - 1;
                const shouldShowButton =
                  seeMore && paragraphs.length > limit && isLast;

                return (
                  <p
                    key={i}
                    className={`p-default mb-4 ${paragraphTextColor ? paragraphTextColor : "text-white"}`}
                  >
                    {para}

                    {/* Inline Read More */}
                    {shouldShowButton && (
                      <>
                        {" "}
                        <span
                          onClick={() => setExpanded(!expanded)}
                          className={`cursor-pointer font-bold ${isBackgroundPrimary
                            ? "text-white hover:text-secondary"
                            : "text-primary hover:text-secondary"
                            }`}
                        >
                          {expanded ? "Show Less" : "Read More"}
                        </span>
                      </>
                    )}
                  </p>
                );
              })}
              {ctaText && (
                <div className="flex justify-start mt-2 md:mt-[14px] lg:pt-6">
                  <GetCtaButton text={ctaText}
                    href="" />
                </div>)}
            </motion.div>
          </div>
          {bottomParagraph &&
            bottomParagraph.length > 0 &&
            bottomParagraph.map((para, index) => (
              <p key={index} className="p-default mt-3.75">
                {para}
              </p>
            ))}
        </section>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
}
