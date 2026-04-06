"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContainerWrapper from "../common/Container/ContainerWrapper";
import PaddingWrapper from "../common/Container/PaddingWrapper";

const ROTATING_TEXTS = [
  "Healthcare Brands",
  "E-commerce Brands",
  "SaaS Companies",
];

export default function HeroSection() {
  const [activeTextIndex, setActiveTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = ROTATING_TEXTS[activeTextIndex];
    let timeout;

    if (!isDeleting && displayText === currentText) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && displayText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setActiveTextIndex((current) => (current + 1) % ROTATING_TEXTS.length);
      }, 150);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((current) =>
          isDeleting
            ? currentText.slice(0, current.length - 1)
            : currentText.slice(0, current.length + 1)
        );
      }, isDeleting ? 45 : 90);
    }

    return () => clearTimeout(timeout);
  }, [activeTextIndex, displayText, isDeleting]);

  const handleExploreClick = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ContainerWrapper
      background="#ffffff"
      maxWidth="max-w-[1500px] w-[92%] xl:w-[88%]"
    >
      <PaddingWrapper padding="pt-6 pb-10 md:pt-10 md:pb-14 xl:pt-15 xl:pb-7.5">
        <section className="relative overflow-hidden rounded-[34px] bg-white">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 max-w-[650px]"
            >
              <h1 className="text-h1 font-semibold text-[#1c1c1c]">
                We - Turn{" "}
                <span className="text-primary">Visibility Into Revenue</span>{" "}
                Everywhere Your Audience Spends Time
              </h1>

              <p className="mt-5 p-tertiary font-semibold text-[#1c1c1c]">
                HOW Helps{" "}
                <span className="relative inline-flex min-w-[12ch] align-bottom text-primary">
                  <span className="inline-block">{displayText}</span>
                </span>
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  placeholder="Enter website address"
                  className="h-[52px] w-full rounded-full border border-primary px-4 text-sm text-[#111111] outline-none transition focus:border-primary sm:max-w-[210px]"
                />
                <button className="h-[52px] cursor-pointer rounded-full bg-primary px-6 text-sm font-bold uppercase tracking-[0.04em] text-white transition hover:bg-secondary">
                  Get Your Free Proposal
                </button>
              </div>

              <p className="mt-9 max-w-[560px] p-default leading-[1.30] font-semibold text-[#000000]">
                Grow faster with full-stack digital marketing across search,
                social, forums, and AI platforms like ChatGPT. Strategy meets
                execution to drive results that actually move the needle.
              </p>

              <a
                href="#"
                onClick={handleExploreClick}
                className="group mt-7 flex w-full items-center justify-center gap-3 text-[14px] font-bold uppercase tracking-[0.08em] text-primary transition-all duration-500 ease-out md:w-fit md:justify-start md:text-[20px]"
              >
                <span className="transition-colors duration-500 ease-out group-hover:text-secondary">
                  Explore Our Services
                </span>
                <span
                  aria-hidden="true"
                  className="text-xl leading-none transition-transform duration-500 ease-out group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative flex min-h-[420px] items-center justify-center lg:min-h-[580px]"
            >
              <div className="absolute right-[10%] top-[12%] h-14 w-14 rounded-full border border-dashed border-[#1d1d1d]/40" />
              <div className="absolute left-[2%] bottom-[16%] h-24 w-24 rounded-full border border-dashed border-[#1d1d1d]/25" />

              <div className="relative h-[320px] w-full max-w-[430px] overflow-hidden rounded-[36px] bg-[#f3f6ff] shadow-[0_24px_70px_rgba(22,44,185,0.12)] md:h-[420px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(22,44,185,0.12),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(232,119,34,0.16),_transparent_35%)]" />
                <Image
                  src="/globe.svg"
                  alt="Hero visual"
                  fill
                  priority
                  className="object-contain p-10 md:p-14"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </PaddingWrapper>
    </ContainerWrapper>
  );
}
