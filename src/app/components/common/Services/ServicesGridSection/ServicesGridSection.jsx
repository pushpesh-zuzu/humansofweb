"use client";

import { motion } from "framer-motion";
import ContainerWrapper from "../../Container/ContainerWrapper";
import PaddingWrapper2 from "../../Container/PaddingWrapper2";
import H2HeadingWrapper from "@/app/components/common/Container/H2HeadingWrapper";
import { GetYourFreeConsultationButton } from "../../CtaButtons";

export default function ServicesGridSection({
  headdingBlack,
  headingBlue,
  description,
  services = [],
  background="#fff"
}) {
  return (
    <ContainerWrapper background={background}>
      <PaddingWrapper2>
        {/* Heading */}
          <H2HeadingWrapper
            headdingBlack={headdingBlack}
            headingBlue={headingBlue}
            multiParagraph={description}
          />

        {/* Grid */}
        <div className="grid gap-5 md:gap-10 mt-4 md:mt-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              {/* Icon */}
              <div className="flex gap-4 items-center">
                <div className="mb-4">{item.icon}</div>

              {/* Title */}
              <h3 className="text-h5 font-semibold mb-2 text-primary group-hover:underline">
                {item.title}
              </h3></div>

              {/* Description */}
              <p className="p-default mb-3">{item.description}</p>

              {/* Link */}
              {/* <button className="text-sm font-semibold text-primary hover:underline">
                Know More
              </button> */}
            </motion.div>
          ))}
        </div>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
}
