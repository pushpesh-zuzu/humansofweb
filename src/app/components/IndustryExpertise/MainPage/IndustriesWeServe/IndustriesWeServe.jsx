'use client'
import React from "react";
import ContainerWrapper from "../../../common/Container/ContainerWrapper";
import PaddingWrapper from "../../../common/Container/PaddingWrapper";
import H2HeadingWrapper from "../../../common/Container/H2HeadingWrapper";
import PaddingWrapper2 from "../../../common/Container/PaddingWrapper2";
// ── Industry Data ─────────────────────────────────────────────────────────────
const INDUSTRIES = [
  {
    title: "Home Improvement & Local Services",
    description:
      "From plumbers to painters, we help local service businesses get found first — driving more calls, bookings, and reviews in their area.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" width="52" height="52">
        <rect width="56" height="56" rx="14" fill="#f5f0ff"/>
        <path d="M12 28L28 14L44 28" stroke="#48179C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="20" y="28" width="16" height="16" rx="2" stroke="#48179C" strokeWidth="2" fill="none"/>
        <rect x="24" y="34" width="8" height="10" rx="1" fill="#F65A75" opacity="0.7"/>
        <path d="M22 28v-4a2 2 0 014 0v4" stroke="#48179C" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    tags: ["Local SEO", "Google Ads", "Reviews"],
    accent: "#48179C",
    bg: "#f5f0ff",
  },
  {
    title: "Real Estate",
    description:
      "We help agents and developers attract high-intent buyers and sellers with targeted content, paid campaigns, and SEO that converts.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" width="52" height="52">
        <rect width="56" height="56" rx="14" fill="#fff0f3"/>
        <rect x="10" y="24" width="14" height="20" rx="2" stroke="#F65A75" strokeWidth="2" fill="none"/>
        <rect x="28" y="18" width="18" height="26" rx="2" stroke="#F65A75" strokeWidth="2" fill="none"/>
        <rect x="31" y="28" width="5" height="6" rx="1" fill="#F65A75" opacity="0.5"/>
        <rect x="39" y="28" width="4" height="6" rx="1" fill="#F65A75" opacity="0.5"/>
        <rect x="31" y="22" width="5" height="4" rx="1" fill="#F65A75" opacity="0.5"/>
        <path d="M10 44h36" stroke="#F65A75" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    tags: ["Lead Gen", "Content Marketing", "SEO"],
    accent: "#F65A75",
    bg: "#fff0f3",
  },
  {
    title: "E-commerce",
    description:
      "We build growth engines for online stores — from product SEO and Google Shopping to email flows that bring customers back.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" width="52" height="52">
        <rect width="56" height="56" rx="14" fill="#f0fdf4"/>
        <path d="M12 16h4l3 16h18l3-10H18" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="27" cy="38" r="2.5" stroke="#16a34a" strokeWidth="2"/>
        <circle cx="37" cy="38" r="2.5" stroke="#16a34a" strokeWidth="2"/>
        <path d="M26 22h8M28 26h4" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    tags: ["Google Shopping", "Email Flows", "CRO"],
    accent: "#16a34a",
    bg: "#f0fdf4",
  },
  {
    title: "Professional Services",
    description:
      "Law firms, consultants, and agencies trust us to build authority, generate qualified leads, and grow their client base consistently.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" width="52" height="52">
        <rect width="56" height="56" rx="14" fill="#fffbeb"/>
        <rect x="14" y="18" width="28" height="22" rx="3" stroke="#d97706" strokeWidth="2" fill="none"/>
        <path d="M20 26h16M20 30h10" stroke="#d97706" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M24 18v-3a4 4 0 018 0v3" stroke="#d97706" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="40" cy="40" r="7" fill="#fffbeb" stroke="#d97706" strokeWidth="1.8"/>
        <path d="M37.5 40l2 2 3.5-3.5" stroke="#d97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tags: ["Authority Building", "Lead Gen", "Content"],
    accent: "#d97706",
    bg: "#fffbeb",
  },
  {
    title: "SaaS & Tech",
    description:
      "We help SaaS brands rank for high-intent keywords, drive trial signups, and reduce churn through strategic content and paid growth.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" width="52" height="52">
        <rect width="56" height="56" rx="14" fill="#f0f9ff"/>
        <rect x="14" y="20" width="28" height="18" rx="3" stroke="#0284c7" strokeWidth="2" fill="none"/>
        <path d="M14 32h28" stroke="#0284c7" strokeWidth="1.5"/>
        <circle cx="28" cy="42" r="2" fill="#0284c7"/>
        <path d="M22 42h12" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 26l3 3-3 3M27 29h9" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tags: ["SaaS SEO", "PPC", "Trial Signups"],
    accent: "#0284c7",
    bg: "#f0f9ff",
  },
];

// ── Border gradient — same as ServiceCard ────────────────────────────────────
const borderGradient = (reverse) => `linear-gradient(
  to ${reverse ? "top" : "bottom"},
  #48179C 0%,
  #48179C 50%,
  #7c3aed 60%,
  #a78bfa 70%,
  #ddd6fe 80%,
  #ede9fe 90%,
  transparent 100%
)`;

// ── Industry Card ─────────────────────────────────────────────────────────────
function IndustryCard({ icon, title, description, tags, accent, bg, reverse }) {
  return (
    <div
      style={{
        borderRadius: 16,
        padding: 2,
        background: borderGradient(reverse),
        height: "100%",
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 14,
          padding: "1.75rem",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "0.875rem",
          transition: "box-shadow 0.3s ease",
          boxSizing: "border-box",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 12px 36px rgba(72,23,156,0.12)")}
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
      >
        {/* Icon */}
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 14,
            background: bg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {icon}
        </div>

        {/* Title */}
        <h3
          className="text-h5 font-bold leading-snug"
          style={{ color: "#48179C", margin: 0 }}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="p-default text-gray-500 leading-relaxed" style={{ margin: 0, flexGrow: 1 }}>
          {description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{
                background: bg,
                color: accent,
                border: `1px solid ${accent}30`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────
export default function IndustriesWeServe() {
  return (
    <ContainerWrapper background="#fafafa">
      <PaddingWrapper2>
        <H2HeadingWrapper
          headdingBlack="Industries"
          headingBlue="We Serve"
          description="We work with businesses across verticals — each with unique challenges, and each deserving a strategy built specifically for them."
        />

       <div className="flex flex-wrap justify-center gap-6 pt-2">
  {INDUSTRIES.map((industry, idx) => (
    <div
      key={industry.title}
      className="
        w-full
        sm:w-[calc(50%-12px)]
        lg:w-[calc(33.333%-16px)]
        max-w-[350px] lg:max-w-[425px]
      "
    >
      <IndustryCard
        {...industry}
        reverse={idx % 2 !== 0}
      />
    </div>
  ))}
</div>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
}