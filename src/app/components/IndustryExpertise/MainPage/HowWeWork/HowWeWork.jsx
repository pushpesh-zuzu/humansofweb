'use client'
import ContainerWrapper from "@/app/components/common/Container/ContainerWrapper";
import H2HeadingWrapper from "@/app/components/common/Container/H2HeadingWrapper";
import PaddingWrapper from "@/app/components/common/Container/PaddingWrapper";
import PaddingWrapper2 from "@/app/components/common/Container/PaddingWrapper2";
import React from "react";

// ── Steps Data ────────────────────────────────────────────────────────────────
const STEPS = [
  {
    number: "01",
    title: "Industry Research",
    description:
      "We dig deep into your market — competitors, keywords, audience intent, and gaps nobody else is targeting.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="8"/>
        <path d="M20 20l6 6"/>
        <path d="M11 11h6M11 14h4"/>
      </svg>
    ),
    color: "#48179C",
    bg: "#f5f0ff",
  },
  {
    number: "02",
    title: "Strategy Planning",
    description:
      "Every brand gets a custom growth blueprint — channels, timelines, budgets, and KPIs mapped to your actual goals.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="24" height="24" rx="4"/>
        <path d="M10 16l4 4 8-8"/>
        <path d="M10 10h12M10 22h6"/>
      </svg>
    ),
    color: "#F65A75",
    bg: "#fff0f3",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Our team moves fast — content live, ads running, pages ranking. No long waiting periods, no fluff deliverables.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 16L14 8l4 4 8-8"/>
        <path d="M20 4h6v6"/>
        <path d="M6 26h20"/>
        <rect x="6" y="20" width="4" height="6" rx="1"/>
        <rect x="14" y="16" width="4" height="10" rx="1"/>
        <rect x="22" y="12" width="4" height="14" rx="1"/>
      </svg>
    ),
    color: "#0284c7",
    bg: "#f0f9ff",
  },
  {
    number: "04",
    title: "Optimisation",
    description:
      "We analyse what's working, double down on it, and cut what isn't. Growth compounds every single month.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4v4M16 24v4M4 16h4M24 16h4"/>
        <circle cx="16" cy="16" r="6"/>
        <path d="M9.17 9.17l2.83 2.83M19.17 19.17l2.83 2.83M22.83 9.17l-2.83 2.83M12.83 19.17l-2.83 2.83"/>
        <circle cx="16" cy="16" r="2" fill="currentColor" stroke="none"/>
      </svg>
    ),
    color: "#16a34a",
    bg: "#f0fdf4",
  },
];

// ── Connector Arrow ───────────────────────────────────────────────────────────
function Connector({ fromColor, toColor }) {
  return (
    <div className="hidden lg:flex items-center justify-center flex-shrink-0" style={{ width: 60, marginTop: -28 }}>
      <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
        <defs>
          <linearGradient id={`grad-${fromColor}-${toColor}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={fromColor} stopOpacity="0.5"/>
            <stop offset="100%" stopColor={toColor} stopOpacity="0.5"/>
          </linearGradient>
        </defs>
        <path
          d="M4 12 Q30 12 52 12"
          stroke={`url(#grad-${fromColor}-${toColor})`}
          strokeWidth="2"
          strokeDasharray="4 3"
          strokeLinecap="round"
        />
        <path d="M50 8l6 4-6 4" stroke={toColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6"/>
      </svg>
    </div>
  );
}

// ── Step Card ─────────────────────────────────────────────────────────────────
function StepCard({ step, isLast }) {
  return (
    <div className="relative flex-1 min-w-0">
      {/* Card */}
      <div
        className="rounded-2xl p-6 h-full flex flex-col gap-4 transition-all duration-300 group"
        style={{
          background: "#fff",
          border: "1px solid #f0f0f0",
          boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 12px 40px ${step.color}22`;
          e.currentTarget.style.borderColor = `${step.color}40`;
          e.currentTarget.style.transform = "translateY(-4px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.04)";
          e.currentTarget.style.borderColor = "#f0f0f0";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {/* Step number + icon row */}
        <div className="flex items-start justify-between">
          {/* Icon circle */}
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300"
            style={{ background: step.bg, color: step.color }}
          >
            {step.icon}
          </div>

          {/* Big step number — watermark */}
          <span
            className="text-5xl font-black leading-none select-none"
            style={{ color: `${step.color}12`, fontVariantNumeric: "tabular-nums" }}
          >
            {step.number}
          </span>
        </div>

        {/* Step label pill */}
        <div>
          <span
            className="text-xs font-bold px-2.5 py-1 rounded-full"
            style={{ background: step.bg, color: step.color }}
          >
            Step {step.number}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-h5 font-bold leading-snug" style={{ color: "#1a1a2e", margin: 0 }}>
          {step.title}
        </h3>

        {/* Description */}
        <p className="p-default text-gray-500 leading-relaxed flex-1" style={{ margin: 0 }}>
          {step.description}
        </p>

        {/* Bottom accent line */}
        <div
          className="h-1 rounded-full mt-auto transition-all duration-300"
          style={{ background: `linear-gradient(to right, ${step.color}, ${step.color}40)`, width: "40%" }}
        />
      </div>
    </div>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────
export default function HowWeWork() {
  return (
    <ContainerWrapper background="#fafafa">
      <PaddingWrapper2>
        <H2HeadingWrapper
          headdingBlack="How We"
          headingBlue="Work"
          description="A clear, repeatable process that turns business goals into measurable growth — every single time."
        />

        {/* Desktop: horizontal flow | Mobile: vertical stack */}
        <div className="flex flex-col lg:flex-row items-stretch gap-0 lg:gap-0 pt-1.25  md:pt-5">
          {STEPS.map((step, idx) => (
            <React.Fragment key={step.number}>
              <StepCard step={step} isLast={idx === STEPS.length - 1} />
              {idx < STEPS.length - 1 && (
                <Connector fromColor={step.color} toColor={STEPS[idx + 1].color} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile vertical connectors — only show on small screens */}
        <style>{`
          @media (max-width: 1023px) {
            .how-we-work-cards > * + * { margin-top: 1rem; }
          }
        `}</style>

        {/* Bottom CTA strip */}
        <div
          className="mt-12 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{
            background: "linear-gradient(135deg, #48179C 0%, #6d28d9 60%, #F65A75 100%)",
          }}
        >
          <div>
            <h4 className="text-h4 font-bold text-white mb-1">Ready to start your growth journey?</h4>
            <p className="text-white/75 p-default">
              Most brands see measurable results within 60 days of working with us.
            </p>
          </div>
          <button
            className="button-primary flex-shrink-0"
            style={{ background: "white", color: "#48179C", border: "none", whiteSpace: "nowrap" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#f5f0ff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "white"; }}
          >
            Get Your Free Strategy Call →
          </button>
        </div>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
}