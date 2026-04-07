"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContainerWrapper from "../common/Container/ContainerWrapper";
import PaddingWrapper2 from "../common/Container/PaddingWrapper2";

const ROTATING_TEXTS = [
  "startups",
  "creators",
  "brands",
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
    >
      <PaddingWrapper2>
        <section className="relative overflow-visible rounded-[34px] bg-white">
          <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 max-w-[650px] md:mx-auto md:text-center lg:mx-0 lg:text-left"
            >
              <h1 className="text-h1 font-semibold text-[#1c1c1c]">
                We Turn{" "}
                <span className="text-primary">Ideas Into Digital Experiences</span>{" "}
                That Humans Love
              </h1>

              <p className="mt-5 p-tertiary font-semibold text-[#1c1c1c]">
                Humans of Web helps{" "}
                <span className="relative inline-flex align-bottom text-primary">
                  <span className="inline-block">{displayText}</span>
                </span>{" "}
                craft human-centered digital experiences that convert.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row md:justify-center lg:justify-start">
                <input
                  type="text"
                  placeholder="Enter your website"
                  className="h-[52px] w-full rounded-full border border-primary px-4 text-sm text-[#111111] outline-none transition focus:border-primary sm:max-w-[210px]"
                />
                <button className="h-[52px] cursor-pointer rounded-full bg-primary px-6 text-sm font-bold uppercase tracking-[0.04em] text-white transition hover:bg-secondary">
                  Get Your Free Consultation
                </button>
              </div>

              <p className="mt-9 max-w-[560px] p-default leading-[1.30] font-semibold text-[#000000] md:mx-auto lg:mx-0">
                We help your business grow faster using digital marketing across search, social media, forums, and AI platforms like ChatGPT. From planning to execution, everything we do is focused on getting real results.
              </p>

              <a
                href="#"
                onClick={handleExploreClick}
                className="group mt-7 flex w-full items-center justify-center gap-3 text-[14px] font-bold uppercase tracking-[0.08em] text-primary transition-all duration-500 ease-out md:mx-auto md:w-fit md:text-[20px] lg:mx-0 lg:justify-start"
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
              className="relative flex items-center justify-center"
            >
              <div className="relative h-[250px] w-full max-w-[660px] md:h-[410px] lg:h-[480px] xl:h-[500px]">
                <Image
                  src="/Home/homeherosection.webp"
                  alt="test"
                  fill
                  priority
                  sizes="(min-width: 1024px) 48vw, 92vw"
                  className="-translate-y-3 scale-110 object-contain object-center"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
}
