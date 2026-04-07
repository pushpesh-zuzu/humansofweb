"use client";
import ContainerWrapper from "@/app/components/common/Container/ContainerWrapper";
import H2HeadingWrapper from "@/app/components/common/Container/H2HeadingWrapper";
import PaddingWrapper from "@/app/components/common/Container/PaddingWrapper";
import PaddingWrapper2 from "@/app/components/common/Container/PaddingWrapper2";
import Image from "next/image";
import React from "react";

// ── Data ──────────────────────────────────────────────────────────────────────
const INDUSTRIES = [
  {
    label: "Home Improvement & Local Services",
    heading: "Get More Calls.",
    headingBlue: "Own Your Local Market.",
    description:
      "Most local service businesses lose jobs to competitors not because they're worse — but because they're invisible online. We fix that.",
    services: [
      {
        icon: (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#48179C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        ),
        title: "Local SEO",
        desc: "Rank in Google Maps & the top 3 pack for high-intent searches like 'plumber near me'.",
      },
      {
        icon: (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#48179C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
          </svg>
        ),
        title: "Lead Generation",
        desc: "Google Ads & Meta campaigns targeting homeowners actively looking for your service.",
      },
      {
        icon: (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#48179C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
          </svg>
        ),
        title: "Conversion Pages",
        desc: "Landing pages built to turn visitors into booked jobs — not just traffic.",
      },
    ],
    visual: "/IndustryExpertise/globalBusiness.webp",
    isImage: true,
  },
  {
    label: "Real Estate",
    heading: "More Listings.",
    headingBlue: "More Closings.",
    description:
      "Buyers and sellers both start online. We make sure your brand is what they find first — with content and campaigns built for high-ticket decisions.",
    services: [
      {
        icon: (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#F65A75"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        ),
        title: "Listing SEO & Content",
        desc: "Property pages and area guides that rank for 'homes for sale in [city]' searches.",
      },
      {
        icon: (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#F65A75"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
            <path d="M7 8h10M7 12h6" />
          </svg>
        ),
        title: "Performance Ads",
        desc: "Facebook & Google campaigns targeting buyers by location, income, and life-stage triggers.",
      },
      {
        icon: (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#F65A75"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.98 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91" />
          </svg>
        ),
        title: "Lead Nurture Flows",
        desc: "Email and WhatsApp sequences that keep warm leads engaged until they're ready to buy.",
      },
    ],
    visual: (
      // Mock: Property dashboard
      <div
        className="relative w-full h-full min-h-[340px] rounded-2xl overflow-hidden bg-white"
        style={{ boxShadow: "0 4px 32px rgba(246,90,117,0.08)" }}
      >
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-400 font-medium">
              Property Dashboard
            </div>
            <div className="text-sm font-bold text-gray-800 mt-0.5">
              HOW Real Estate Analytics
            </div>
          </div>
          <div
            className="text-xs px-2 py-1 rounded-full font-semibold"
            style={{ background: "#fff0f3", color: "#F65A75" }}
          >
            Live
          </div>
        </div>
        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-2 p-3">
          {[
            { label: "Leads This Month", val: "284", delta: "+32%", up: true },
            { label: "Avg. Cost/Lead", val: "₹420", delta: "-18%", up: true },
            { label: "Listings Viewed", val: "5.1K", delta: "+47%", up: true },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl p-3"
              style={{ background: "#fafafa", border: "1px solid #f0f0f0" }}
            >
              <div className="text-xs text-gray-400 leading-tight mb-1">
                {s.label}
              </div>
              <div className="text-lg font-extrabold text-gray-800">
                {s.val}
              </div>
              <div
                className="text-xs font-semibold mt-0.5"
                style={{ color: "#16a34a" }}
              >
                {s.delta} ↑
              </div>
            </div>
          ))}
        </div>
        {/* Listing cards */}
        <div className="px-3 pb-3 flex flex-col gap-2">
          {[
            {
              name: "Green Valley Villa",
              price: "₹1.8 Cr",
              views: "342 views",
              badge: "Hot",
            },
            {
              name: "Skyline Apartments 3BHK",
              price: "₹95 L",
              views: "218 views",
              badge: "New",
            },
            {
              name: "Downtown Studio Loft",
              price: "₹55 L",
              views: "189 views",
              badge: "",
            },
          ].map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-3 rounded-xl p-3"
              style={{ background: "#fff0f3", border: "1px solid #ffd6de" }}
            >
              <div
                className="w-10 h-10 rounded-lg flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg,#F65A75,#ff8fa3)",
                }}
              />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-gray-800 truncate">
                  {p.name}
                </div>
                <div className="text-xs text-gray-400">
                  {p.price} · {p.views}
                </div>
              </div>
              {p.badge && (
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                  style={{ background: "#F65A75", color: "white" }}
                >
                  {p.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    isImage: false,
  },
  {
    label: "SaaS & Tech",
    heading: "More Signups.",
    headingBlue: "Less Churn.",
    description:
      "SaaS growth isn't just about traffic — it's about attracting the right users, activating them fast, and keeping them. That's exactly what we're built for.",
    services: [
      {
        icon: (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0284c7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
            <path d="M11 8v3h3" />
          </svg>
        ),
        title: "SaaS SEO",
        desc: "Rank for solution-aware keywords — the searches people make when they're ready to buy.",
      },
      {
        icon: (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0284c7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        ),
        title: "Performance Marketing",
        desc: "Trial-focused paid campaigns on Google & LinkedIn — optimised for signups, not just clicks.",
      },
      {
        icon: (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0284c7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        ),
        title: "Onboarding Email Flows",
        desc: "Behaviour-triggered sequences that activate free users and convert them to paid plans.",
      },
    ],
    visual: (
      // Mock: SaaS analytics dashboard
      <div
        className="relative w-full h-full min-h-[340px] rounded-2xl overflow-hidden bg-white"
        style={{ border: "1px solid #e0f0fb" }}
      >
        <div className="p-4 border-b border-gray-100 flex items-center gap-3">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: "#f0f9ff" }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0284c7"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
          <div className="text-sm font-bold text-gray-800">Growth Overview</div>
          <div className="ml-auto text-xs text-gray-400">Last 30 days</div>
        </div>

        <div className="grid grid-cols-2 gap-2 p-3">
          {[
            {
              label: "Trial Signups",
              val: "1,284",
              delta: "+41%",
              color: "#0284c7",
              bg: "#f0f9ff",
            },
            {
              label: "Paid Conversions",
              val: "312",
              delta: "+28%",
              color: "#16a34a",
              bg: "#f0fdf4",
            },
            {
              label: "MRR",
              val: "₹4.2L",
              delta: "+19%",
              color: "#48179C",
              bg: "#f5f0ff",
            },
            {
              label: "Churn Rate",
              val: "2.1%",
              delta: "-0.8%",
              color: "#F65A75",
              bg: "#fff0f3",
            },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl p-3"
              style={{ background: s.bg }}
            >
              <div className="text-xs text-gray-400 mb-1">{s.label}</div>
              <div
                className="text-base font-extrabold"
                style={{ color: s.color }}
              >
                {s.val}
              </div>
              <div
                className="text-xs font-semibold mt-0.5"
                style={{ color: s.color }}
              >
                {s.delta}
              </div>
            </div>
          ))}
        </div>

        {/* Funnel visual */}
        <div className="px-3 pb-3">
          <div className="text-xs text-gray-400 font-medium mb-2">
            Conversion Funnel
          </div>
          {[
            { stage: "Visitors", count: "18,400", pct: 100, color: "#0284c7" },
            {
              stage: "Trial Signups",
              count: "1,284",
              pct: 70,
              color: "#48179C",
            },
            { stage: "Activated", count: "876", pct: 48, color: "#F65A75" },
            { stage: "Paid", count: "312", pct: 24, color: "#16a34a" },
          ].map((f) => (
            <div key={f.stage} className="flex items-center gap-2 mb-1.5">
              <div className="text-xs text-gray-500 w-24 flex-shrink-0">
                {f.stage}
              </div>
              <div
                className="flex-1 rounded-full overflow-hidden"
                style={{ background: "#f0f0f0", height: 8 }}
              >
                <div
                  style={{
                    width: `${f.pct}%`,
                    height: "100%",
                    background: f.color,
                    borderRadius: 999,
                    transition: "width 0.4s",
                  }}
                />
              </div>
              <div className="text-xs font-semibold text-gray-600 w-12 text-right flex-shrink-0">
                {f.count}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    isImage: false,
  },
];

// ── Single Row ────────────────────────────────────────────────────────────────
function IndustryRow({ industry, reverse, index }) {
  const {
    label,
    heading,
    headingBlue,
    description,
    services,
    visual,
    isImage,
  } = industry;
  const accentColor =
    index === 0 ? "#48179C" : index === 1 ? "#F65A75" : "#0284c7";

  return (
    <div
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 xl:gap-14 items-center py-10 md:py-14`}
      style={{ borderBottom: "1px solid #f0f0f0" }}
    >
      {/* Visual */}
      <div className="w-full md:w-1/2 flex-shrink-0 rounded-[30px]">
        {isImage ? (
          <Image
            src={visual}
            alt="service"
            height={544}
            width={680}
            className="rounded-[30px]"
          />
        ) : (
          visual
        )}{" "}
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2">
        {/* Industry label pill */}
        <span
          className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4"
          style={{
            background: `${accentColor}18`,
            color: accentColor,
            border: `1px solid ${accentColor}30`,
          }}
        >
          {label}
        </span>

        <h3
          className="text-h3 font-extrabold leading-tight mb-3"
          style={{ color: "#1a1a2e" }}
        >
          {heading} <span style={{ color: accentColor }}>{headingBlue}</span>
        </h3>

        <p className="p-default text-gray-500 leading-relaxed mb-6">
          {description}
        </p>

        {/* Service list */}
        <div className="flex flex-col gap-4 mb-7">
          {services.map((s) => (
            <div key={s.title} className="flex gap-3 items-start">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: `${accentColor}12` }}
              >
                {s.icon}
              </div>
              <div>
                <div className="text-sm font-bold text-gray-800">{s.title}</div>
                <div className="text-sm text-gray-500 leading-relaxed mt-0.5">
                  {s.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          className="button-primary"
          style={{ background: accentColor, border: "none" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Explore {label.split(" ")[0]} Strategy →
        </button>
      </div>
    </div>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────
export default function IndustryDeepDive() {
  return (
    <ContainerWrapper background="#fff">
      <PaddingWrapper2>
        <H2HeadingWrapper
          headdingBlack="Industry"
          headingBlue="Deep Dive"
          description="A tailored approach for every vertical — because cookie-cutter strategies don't build category leaders."
        />

        <div>
          {INDUSTRIES.map((industry, idx) => (
            <IndustryRow
              key={industry.label}
              industry={industry}
              reverse={idx % 2 !== 0}
              index={idx}
            />
          ))}
        </div>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
}
