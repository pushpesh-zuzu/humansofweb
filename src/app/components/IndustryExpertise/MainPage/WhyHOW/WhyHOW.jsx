"use client";
import ContainerWrapper from "@/app/components/common/Container/ContainerWrapper";
import PaddingWrapper from "@/app/components/common/Container/PaddingWrapper";
import PaddingWrapper2 from "@/app/components/common/Container/PaddingWrapper2";
import React from "react";

// ── Why Points ────────────────────────────────────────────────────────────────
const WHY_POINTS = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Tailored Strategies",
    description:
      "No templates. No copy-paste playbooks. Every strategy is built from scratch around your industry, audience, and growth stage.",
    color: "#48179C",
    bg: "#f5f0ff",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: "ROI-Focused Execution",
    description:
      "Every rupee we spend or recommend has a purpose — measurable outcomes tied to leads, revenue, and growth. Not vanity metrics.",
    color: "#F65A75",
    bg: "#fff0f3",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="6" height="6" rx="1" />
        <rect x="9" y="3" width="6" height="6" rx="1" />
        <rect x="16" y="3" width="6" height="6" rx="1" />
        <rect x="2" y="12" width="6" height="6" rx="1" />
        <rect x="9" y="12" width="6" height="6" rx="1" />
        <rect x="16" y="12" width="6" height="6" rx="1" />
      </svg>
    ),
    title: "Multi-Industry Experience",
    description:
      "From local plumbers to SaaS platforms — we've grown brands across verticals and know what works where.",
    color: "#0284c7",
    bg: "#f0f9ff",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Fast, Agile Execution",
    description:
      "We move at startup speed — campaigns live in days, not months. No bureaucracy, no endless approval loops.",
    color: "#d97706",
    bg: "#fffbeb",
  },
  // {
  //   icon: (
  //     <svg
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="1.8"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //     >
  //       <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
  //       <circle cx="12" cy="12" r="3" />
  //     </svg>
  //   ),
  //   title: "Full Transparency",
  //   description:
  //     "Live dashboards, weekly updates, and zero jargon reports. You always know exactly what's happening and why.",
  //   color: "#16a34a",
  //   bg: "#f0fdf4",
  // },
  // {
  //   icon: (
  //     <svg
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="1.8"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //     >
  //       <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
  //       <circle cx="9" cy="7" r="4" />
  //       <path d="M23 21v-2a4 4 0 00-3-3.87" />
  //       <path d="M16 3.13a4 4 0 010 7.75" />
  //     </svg>
  //   ),
  //   title: "A Team That Cares",
  //   description:
  //     "You get a dedicated strategist — not a rotating account manager. Someone who knows your brand as well as you do.",
  //   color: "#7c3aed",
  //   bg: "#f5f3ff",
  // },
];

// ── Abstract visual — tech grid ───────────────────────────────────────────────
function AbstractVisual({ path = "/IndustryExpertise/digitalDisplay.webp" }) {
  return (
    <div
      className="relative w-full h-full rounded-[30px] min-h-[480px] rounded-3xl overflow-hidden flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: path
          ? `url(${path})`
          : "linear-gradient(155deg, #0f0a1e 0%, #1e0a3c 50%, #2d0a2e 100%)",
      }}
    >
      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Floating stat chips */}
        {[
          {
            label: "Avg. ROAS",
            val: "4.8x",
            color: "#34d399",
            top: -120,
            left: -120,
          },
          {
            label: "Client Retention",
            val: "94%",
            color: "#a78bfa",
            top: -80,
            left: 80,
          },
          {
            label: "Industries",
            val: "12+",
            color: "#F65A75",
            top: 80,
            left: -110,
          },
          {
            label: "Keywords Ranked",
            val: "850+",
            color: "#60a5fa",
            top: 100,
            left: 70,
          },
        ].map((chip) => (
          <div
            key={chip.label}
            className="absolute rounded-xl px-3 py-2 text-center"
            style={{
              top: chip.top,
              left: chip.left,
              background: "rgba(255,255,255,0.06)",
              border: `1px solid ${chip.color}40`,
              backdropFilter: "blur(8px)",
              minWidth: 90,
            }}
          >
            <div
              style={{
                fontSize: 18,
                fontWeight: 800,
                color: chip.color,
                lineHeight: 1,
              }}
            >
              {chip.val}
            </div>
            <div
              className="text-secondary font-extrabold"
              style={{ fontSize: 10, marginTop: 2 }}
            >
              {chip.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Why Card ──────────────────────────────────────────────────────────────────
function WhyCard({ point }) {
  return (
    <div
      className="flex gap-4 items-start p-4 rounded-2xl transition-all duration-300 group cursor-default"
      style={{ border: "1px solid transparent" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = point.bg;
        e.currentTarget.style.borderColor = `${point.color}25`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.borderColor = "transparent";
      }}
    >
      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
        style={{ background: point.bg, color: point.color }}
      >
        {point.icon}
      </div>

      {/* Text */}
      <div>
        <h4 className="text-h6 font-bold mb-1" style={{ color: "#1a1a2e" }}>
          {point.title}
        </h4>
        <p
          className="p-default text-gray-500 leading-relaxed"
          style={{ margin: 0 }}
        >
          {point.description}
        </p>
      </div>
    </div>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────
export default function WhyHOW() {
  return (
    <ContainerWrapper maxWidth="max-w-[1500px]" background="#fff">
      <PaddingWrapper2>
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-4 items-center">
          {/* LEFT — Visual */}
          <div className="w-full lg:w-[50%] flex-shrink-0">
            <AbstractVisual />
          </div>

          {/* RIGHT — Content */}
          <div className="flex-1 min-w-0">
            {/* Heading */}
            <div className="mb-8">
              <span
                className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4"
                style={{
                  background: "#f5f0ff",
                  color: "#48179C",
                  border: "1px solid #e9d5ff",
                }}
              >
                Why HOW?
              </span>
              <h2
                className="text-h2 font-extrabold leading-tight mb-3"
                style={{ color: "#1a1a2e" }}
              >
                Not Just Another{" "}
                <span style={{ color: "#48179C" }}>Digital Agency</span>
              </h2>
              <p className="p-default text-gray-500 leading-relaxed">
                Most agencies sell you reports. We sell you results. Here's what
                makes Humans of Web different from everyone else you've tried.
              </p>
            </div>

            {/* 2-col grid of why points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {WHY_POINTS.map((point) => (
                <WhyCard key={point.title} point={point} />
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                className="button-primary"
                style={{ background: "#48179C", border: "none" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#2d0e6e")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#48179C")
                }
              >
                Work With Us →
              </button>
              <a
                href="#results"
                className="text-sm font-semibold flex items-center gap-1.5 transition-colors"
                style={{ color: "#48179C" }}
              >
                See our results
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
}
