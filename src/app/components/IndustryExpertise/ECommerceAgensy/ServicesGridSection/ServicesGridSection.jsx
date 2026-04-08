"use client";

import { motion } from "framer-motion";
import ContainerWrapper from "../../../common/Container/ContainerWrapper";
import PaddingWrapper2 from "../../../common/Container/PaddingWrapper2";
import H2HeadingWrapper from "@/app/components/common/Container/H2HeadingWrapper";

export default function ServicesGridSection({
  headdingBlack,
  headingBlue,
  description,
  services = [],
  ctaText = "Schedule a Free Consultation",
}) {
  return (
    <ContainerWrapper background="#fff">
      <PaddingWrapper2>
        {/* Heading */}
        <div className="max-w-3xl mx-auto">
          <H2HeadingWrapper
            headdingBlack={headdingBlack}
            headingBlue={headingBlue}
            multiParagraph={description}
          />
        </div>

        {/* Grid */}
        <div className="grid gap-5 md:gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              {/* Icon */}
              <div className="mb-4">{item.icon}</div>

              {/* Title */}
              <h3 className="text-h5 font-semibold mb-2 text-primary group-hover:underline">
                {item.title}
              </h3>

              {/* Description */}
              <p className="p-small text-[#555] mb-3">{item.description}</p>

              {/* Link */}
              <button className="text-sm font-semibold text-primary hover:underline">
                Know More
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        {ctaText && (
          <div className="text-center mt-12">
            <button className="button-primary bg-primary border-none hover:bg-secondary hover:text-white text-white">
              {ctaText}
            </button>
          </div>
        )}
      </PaddingWrapper2>
    </ContainerWrapper>
  );
}
