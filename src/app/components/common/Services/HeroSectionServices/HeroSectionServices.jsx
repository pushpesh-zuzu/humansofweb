"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import ContainerWrapper from "../../Container/ContainerWrapper";
import PaddingWrapper2 from "../../Container/PaddingWrapper2";
import GetProposalModal from "../../GetProposalModal/GetProposalModal";

export default function HeroSectionServices({
  bgImag = "",
  heading1 = "Build E-commerce ",
  heading2 = "Brands People Trust",
  description1 = `At Humans of Web, we don’t just run campaigns — we understand your customers, their intent, and what truly makes them click, buy, and come back.`,
  description2 = `From product discovery to checkout, we design strategies that feel natural, build trust, and turn your store into a growth engine — not just another online shop.`,
  ctaText = "Book Your Free Consultation",
  headingSectionWidth = "max-w-[600px]",
  altText = "Industry Expertise",
  breakLine = false,
}) {
  const [proposalOpen, setProposalOpen] = useState(false);

  return (
    <ContainerWrapper
      background="#48179C"
      // maxWidth="max-w-[1440px] w-[92%]"
    >
      <PaddingWrapper2>
        <section className="relative rounded-[34px] ">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`${headingSectionWidth} h-full md:mx-auto md:text-center lg:mx-0 lg:text-left`}
            >
              {/* Heading */}
              <h1 className="text-h1 font-semibold text-white mb-auto leading-[1.25]">
                {heading1} {breakLine && <br />}
                <span className="text-secondary">{heading2}</span>
              </h1>

              {/* Description */}
              <p className="mt-5 p-default text-white max-w-[560px] md:mx-auto lg:mx-0">
                {description1}
              </p>

              <p className="mt-4 p-default text-white max-w-[560px] md:mx-auto lg:mx-0">
                {description2}
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row md:justify-center lg:justify-start">
                {/* <input
                  type="text"
                  placeholder="Enter Your Whatsapp Number"
                  className="h-[52px] w-full bg-white rounded-full border border-primary px-4 text-sm text-[#111111] outline-none transition focus:border-primary sm:max-w-[250px]"
                /> */}
                <button
                  type="button"
                  onClick={() => setProposalOpen(true)}
                  className="h-[52px] cursor-pointer rounded-full bg-white px-4 text-[13px] font-bold uppercase tracking-[0.04em] text-secondary transition hover:bg-secondary hover:text-white"
                >
                  {ctaText}
                </button>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative h-[250px] w-full max-w-full overflow-hidden rounded-[32px] md:h-[370px] lg:h-[325px] xl:h-[370px]">

                <Image
                  src={bgImag}
                  alt={altText}
                  fill
                  // height={380}
                  // width={500}
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </PaddingWrapper2>

      <GetProposalModal
        isOpen={proposalOpen}
        onClose={() => setProposalOpen(false)}
      />
    </ContainerWrapper>
  );
}
