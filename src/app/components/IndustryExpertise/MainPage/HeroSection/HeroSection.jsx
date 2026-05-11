
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import ContainerWrapper from "../../../common/Container/ContainerWrapper";
import PaddingWrapper from "../../../common/Container/PaddingWrapper";
import PaddingWrapper2 from "../../../common/Container/PaddingWrapper2";
import GetProposalModal from "@/app/components/common/GetProposalModal/GetProposalModal";
import { useState } from "react";

export default function IndustryHeroSection({
  headingWhite = "",
  headingPink = "",
  description1="",
  description2="",
  banner='/IndustryExpertise/industryHero1.svg',
  deepDiveRef,
}) {
    const [proposalOpen, setProposalOpen] = useState(false);
    const onViewIndustries = () => {
      const element = deepDiveRef?.current;
    //   console.log(
    //   "industry/platform top",
    //   deepDiveRef.current?.getBoundingClientRect().top
    // );
      if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - 80; // 80px upar
    window.scrollTo({ top, behavior: "smooth" });
  }
};
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
              className="max-w-[650px] h-full md:mx-auto md:text-center lg:mx-0 lg:text-left"
            >
              {/* Heading */}
              <h1 className="text-h1 font-semibold text-white mb-auto leading-[1.25]">
                {headingWhite}{" "}
                <span className="text-secondary">{headingPink}</span>
              </h1>

              {/* Description */}
              <p className="mt-5 p-default text-white max-w-[560px] md:mx-auto lg:mx-0">
                {description1}
              </p>

              <p className="mt-4 p-default text-white max-w-[560px] md:mx-auto lg:mx-0">
               {description2}
              </p>

              {/* CTA */}
              <div className="mt-8 md:mt-12 flex flex-col gap-3 sm:flex-row md:justify-center lg:justify-start">
                <button onClick={() => setProposalOpen(true)} className="h-[52px] cursor-pointer rounded-full bg-white px-6 text-sm font-bold uppercase tracking-[0.04em] text-primary transition hover:bg-secondary hover:text-white">
                  Get Free Strategy
                </button>

                <button onClick={onViewIndustries} className="h-[52px] cursor-pointer rounded-full bg-white px-6 text-sm font-bold uppercase tracking-[0.04em] text-primary transition hover:bg-secondary hover:text-white">
                  View Industries
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
              {/* Decorative elements */}
              <div className="absolute right-[12%] top-[10%] h-14 w-14 rounded-full border border-dashed border-[#1d1d1d]/30" />
              <div className="absolute left-[0%] bottom-[12%] h-24 w-24 rounded-full border border-dashed border-[#1d1d1d]/20" />

              {/* Image Card */}
              <div className="relative max-h-50 h-80 md:max-h-93.25 w-full max-w-full overflow-hidden rounded-[32px] bg-[#f5f7ff] shadow-[0_20px_60px_rgba(72,23,156,0.15)] md:h-[420px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(72,23,156,0.12),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(246,90,117,0.14),_transparent_35%)]" />

                <Image
                  src={banner}
                  alt="Industry Expertise"
                  height={373}
                  width={640}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  className="object-cover h-50 md:h-93.25"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>
        <GetProposalModal
                isOpen={proposalOpen}
                onClose={() => setProposalOpen(false)}
              />
      </PaddingWrapper2>
    </ContainerWrapper>
  );
}
