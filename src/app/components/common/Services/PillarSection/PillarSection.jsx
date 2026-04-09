"use client";

import ContainerWrapper from "@/app/components/common/Container/ContainerWrapper";
import PaddingWrapper2 from "@/app/components/common/Container/PaddingWrapper2";
import H2HeadingWrapper from "@/app/components/common/Container/H2HeadingWrapper";

const DEFAULT_DATA = {
  headdingBlack: "Proven Strategies to Scale",
  headingBlue: "Your Business Online",
  subHeading:
    "Built to attract the right audience, boost visibility, and earn lasting trust.",
  description:
    "Growing a business in today's market takes more than a basic online presence. You need a proven framework that consistently brings in the right people, turns attention into action, and builds the kind of credibility that keeps customers coming back. We anchor everything around four core pillars.",
  features: [
    { title: "Precision Audience Targeting" },
    { title: "Organic & Paid Search Domination" },
    { title: "High-Converting Web Experiences" },
    { title: "Reputation & Trust Management" },
  ],
  footerText:
    "These four pillars work together as one unified growth engine — turning online interest into real business results, month after month.",
  ctaLabel: "Book a Free Strategy Call",
  ctaHref: "#contact",
};

function CheckIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle
        cx="11"
        cy="11"
        r="10"
        stroke="#48179C"
        strokeWidth="1.5"
        strokeOpacity="0.4"
      />
      <path
        d="M7 11.5l3 3 5-5.5"
        stroke="#48179C"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FeatureCard({ title }) {
  return (
    <div className="p-[1.5px] rounded-[14px] bg-gradient-to-br from-primary to-secondary">
      <div className="bg-white rounded-[14px] px-6 py-5 flex items-center gap-3 h-full">
        <CheckIcon />
        <span className="text-gray-700 font-semibold p-default leading-snug">
          {title}
        </span>
      </div>
    </div>
  );
}

export default function PillarsSection({
  headdingBlack = DEFAULT_DATA.headdingBlack,
  headingBlue = DEFAULT_DATA.headingBlue,
  subHeading = DEFAULT_DATA.subHeading,
  description = DEFAULT_DATA.description,
  features = DEFAULT_DATA.features,
  footerText = DEFAULT_DATA.footerText,
  ctaLabel = DEFAULT_DATA.ctaLabel,
  ctaHref = DEFAULT_DATA.ctaHref,
}) {
  return (
    <ContainerWrapper>
      <PaddingWrapper2>
        <div className="relative">
          {/* Decorative dots */}
          <span
            aria-hidden="true"
            className="absolute top-2 left-4 w-2 h-2 rounded-full bg-pink-400 opacity-80"
          />
          <span
            aria-hidden="true"
            className="absolute top-8 right-[12%] w-2 h-2 rounded-full bg-secondary opacity-70"
          />
          <span
            aria-hidden="true"
            className="absolute top-24 left-[30%] w-1.5 h-1.5 rounded-full bg-pink-500 opacity-60"
          />
          <span
            aria-hidden="true"
            className="absolute top-20 right-[35%] w-1.5 h-1.5 rounded-full bg-yellow-400 opacity-80"
          />

          {/* Heading — H2HeadingWrapper handles h2 + subheading + description */}
          <div className="max-w-4xl mx-auto">
            <H2HeadingWrapper
              headdingBlack={headdingBlack}
              headingBlue={headingBlue}
              subHeading={subHeading}
              description={description}
              breakLine
              padding="pb-[35px] md:pb-[60px]"
            />
          </div>

          {/* Feature cards 2×2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl mx-auto mb-10">
            {features.map((f) => (
              <FeatureCard key={f.title} title={f.title} />
            ))}
          </div>

          {/* Footer text */}
          <p className="p-default text-center text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            {footerText}
          </p>

          {/* CTA */}
          <div className="flex justify-center">
            <a href={ctaHref} className="button-primary">
              {ctaLabel}
            </a>
          </div>
        </div>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
}
