"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import H2HeadingWrapper from "@/app/components/common/Container/H2HeadingWrapper";
import CheckedIcon from "../../common/Icons/IndustryExpertise/CheckedIcon";
import ContainerWrapper from "../../common/Container/ContainerWrapper";
import PaddingWrapper2 from "../../common/Container/PaddingWrapper2";

export default function WhyChooseDentalServce({
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
  isImageSmall = false,
  description = "",
}) {
  const [expanded, setExpanded] = useState(false);

  const visibleParagraphs =
    seeMore && !expanded ? paragraphs.slice(0, limit) : paragraphs;

  return (
    <ContainerWrapper background={isBackgroundPrimary ? "#48179C" : background}>
      <PaddingWrapper2>
        {!isHeadingInGridSection && (
          <div className="max-w-4xl mx-auto">
            <H2HeadingWrapper
              headdingBlack={headdingBlack}
              headingBlue={headingBlue}
              subHeading={subheading}
              breakLine={breakLine}
              description={description}
              padding="pb-[35px] md:pb-[60px]"
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
              <div className="relative bg-gradient-to-br from-primary via-primary/80 to-secondary min-h-[380px] w-full max-w-[500px] rounded-tr-[70px] rounded-bl-[70px] overflow-hidden">
                {/* Blurry background circles for depth */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

                {/* Text Content - Left aligned, centered vertically */}
                <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 md:px-8">
                  <h3 className="text-white text-h3 font-bold leading-tight mb-4">
                    More than just a<br />
                    marketing vendor
                  </h3>
                  <p className="text-white/80 p-default max-w-[90%]">
                    We know the 3 AM worry about no-shows. The frustration of
                    empty chairs. We build strategies that turn browsers into
                    loyal patients.
                  </p>

                  {/* Optional little trust badge */}
                  <div className="mt-6 flex items-center gap-3">
                    {ctaText && (
                      <button className="mt-4 button-primary bg-secondary outline-none  hover:bg-white border-transparent hover:text-secondary text-white hover:border hover:border-secondary ">
                        {ctaText}
                      </button>
                    )}
                  </div>
                </div>
              </div>{" "}
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: reverse ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`${isImageSmall ? "max-w-full" : "max-w-[700px]"}`}
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
                    className={`p-default mb-4 flex justify-left gap-2 ${
                      isBackgroundPrimary ? "text-white" : ""
                    }`}
                  >
                    <span className="inline-block">
                      <CheckedIcon />
                    </span>
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
