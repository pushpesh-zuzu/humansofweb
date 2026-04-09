"use client";

import ContainerWrapper from "@/app/components/common/Container/ContainerWrapper";
import PaddingWrapper2 from "@/app/components/common/Container/PaddingWrapper2";
import H2HeadingWrapper from "../../common/Container/H2HeadingWrapper";

const features = [
  {
    title: "Performance Marketing",
    description:
      "Drive qualified leads through Google, Meta, and programmatic ads paired with high-converting landing pages built to turn clicks into customers.",
  },
  {
    title: "AI-Powered SEO & Content",
    description:
      "Dominate search rankings with technical SEO, authoritative backlinks, and AI-assisted content that keeps your brand visible across Google, Bing, and AI platforms.",
  },
  {
    title: "Website Design & Development",
    description:
      "Launch fast, mobile-first websites with seamless UX, secure forms, and conversion-focused design that turns every visit into a measurable business outcome.",
  },
  {
    title: "Brand Trust & Reputation",
    description:
      "Build credibility with automated review systems, social proof strategies, and brand monitoring that protect and amplify your reputation online.",
  },
];

function CheckIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="shrink-0 "
    >
      <circle
        cx="10" cy="10" r="9"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.5"
      />
      <path
        d="M6.5 10.5l2.5 2.5 4.5-5"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function GrowthStrategiesSection() {
  return (
    <ContainerWrapper background="linear-gradient(135deg, #1227c4 0%, #0e1fa0 60%, #0b198a 100%)">
      <PaddingWrapper2>
        <div className="relative overflow-hidden">

          {/* ── Layout ── */}
          <div className="flex flex-col md:flex-row gap-12 items-stretch">

            {/* Left: Image */}
            <div
              className="w-full md:w-[38%] shrink-0 rounded-2xl overflow-hidden"
              style={{ aspectRatio: "3/4", maxHeight: "100%" }}
            >
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
                alt="Team working on digital strategy"
                className="w-full h-full object-cover block rounded-tr-[40px]"
              />
              {/* <Image
                fill
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
                alt="Team working on digital strategy"
                className="w-full h-full object-cover block"
              /> */}
            </div>

            {/* Right: Content */}
            <div className="flex-1 max-w-[600px] mx-auto flex flex-col justify-start md:gap-6">

              {/* Heading */}
              {/* <div>
                <h2
                  className="font-normal leading-tight m-0 text-white/90"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
                >
                  Smart Growth Strategies
                </h2>
                <h2
                  className="font-bold leading-tight m-0 text-white"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
                >
                  Built for Your Business
                </h2>
              </div> */}
              <H2HeadingWrapper
                                headingColor={true}
                                headdingBlack={'Smart Growth Strategies'}
                                headingBlue={'Built for Your Business'}
                                textAlign="text-left"
                                breakLine={true}
                              />

              {/* Description */}
              <p className="text-white/70 text-base leading-relaxed mb-6 md:mb-0 m-0 max-w-xl">
                Every growing business faces the same challenge — standing out online
                while converting attention into revenue. Success demands more than
                ads or a website. It requires a complete digital framework that
                captures demand, earns trust, and turns traffic into consistent growth.
              </p>

              {/* Features 2×2 grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((f) => (
                  <div key={f.title} className="flex flex-col gap-2">

                    {/* Title row */}
                    <div className="flex items-start gap-2">
                      <CheckIcon />
                      <span className="text-white font-bold text-base leading-snug">
                        {f.title}
                      </span>
                    </div>

                    {/* Description — indented to align under title */}
                    <p className="text-white/65 text-sm leading-relaxed m-0 pl-7">
                      {f.description}
                    </p>

                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
}