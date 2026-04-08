"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContainerWrapper from "../../Container/ContainerWrapper";
import PaddingWrapper2 from "../../Container/PaddingWrapper2";
import H2HeadingWrapper from "@/app/components/common/Container/H2HeadingWrapper";

export default function ServicesTwoGridDescriptionAndImage({
  headdingBlack,
  headingBlue,
  subheading = "",
  paragraphs = [],
  image,
  reverse = false,
  isHeadingInGridSection = false,
  isBackgroundPrimary = false,
  background = "#fff",
  ctaText = "Book a call Now",
  seeMore = true,
  limit = 7,
  bottomParagraph = [],
  breakLine = true,
  headingColor = true,
  isImageSmall=false
}) {
  const [expanded, setExpanded] = useState(false);

  const visibleParagraphs =
    seeMore && !expanded ? paragraphs.slice(0, limit) : paragraphs;

  return (
    <ContainerWrapper background={isBackgroundPrimary ? "#48179C" : background}>
      <PaddingWrapper2>
        {!isHeadingInGridSection && (
          <div className="max-w-2xl mx-auto">
            <H2HeadingWrapper
              headdingBlack={headdingBlack}
              headingBlue={headingBlue}
              subHeading={subheading}
              breakLine={breakLine}
            />
          </div>
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
              <div className="relative w-full max-w-[500px] rounded-[16px]">
                <Image
                  src={image}
                  alt="industry"
                  width={500}
                  height={380}
                  className="object-contain rounded-[16px]"
                />
              </div>
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: reverse ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`${isImageSmall ? 'max-w-full' :'max-w-[700px]'}`}
            >
              {isHeadingInGridSection && (
                <H2HeadingWrapper
                  headingColor={headingColor}
                  headdingBlack={headdingBlack}
                  headingBlue={headingBlue}
                  textAlign="text-left"
                  breakLine={breakLine}
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
                    className={`p-default mb-4 ${
                      isBackgroundPrimary ? "text-white" : ""
                    }`}
                  >
                    {para}

                    {/* Inline Read More */}
                    {shouldShowButton && (
                      <>
                        {" "}
                        <span
                          onClick={() => setExpanded(!expanded)}
                          className={`cursor-pointer font-bold ${
                            isBackgroundPrimary
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

              {/* CTA */}
              {ctaText && (
                <button className="mt-4 button-primary bg-secondary outline-none  hover:bg-white border-transparent hover:text-secondary text-white hover:border hover:border-secondary ">
                  {ctaText}
                </button>
              )}
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
