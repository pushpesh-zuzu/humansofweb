"use client";

import ContainerWrapper from "@/app/components/common/Container/ContainerWrapper";
import PaddingWrapper from "@/app/components/common/Container/PaddingWrapper";
import PaddingWrapper2 from "@/app/components/common/Container/PaddingWrapper2";
import React, { useEffect, useRef, useState } from "react";

// ── Count-up hook ─────────────────────────────────────────────────────────────
function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// ── Stats ─────────────────────────────────────────────────────────────────────
const STATS = [
  { value: 312, suffix: "%", label: "Average increase in organic leads", sub: "across client portfolio", color: "#732cee" },
  { value: 850, suffix: "+", label: "Keywords ranked on Page 1", sub: "Google & Bing combined", color: "#F65A75" },
  { value: 4.8, suffix: "x", label: "Average ROAS on paid campaigns", sub: "within first 90 days", color: "#34d399", isFloat: true },
  { value: 60, suffix: "%", label: "Reduction in cost per lead", sub: "vs. industry benchmark", color: "#732cee" },
];

// ── Case Studies ──────────────────────────────────────────────────────────────
const CASES = [
  {
    industry: "Home Services",
    brand: "Local Contractor Co.",
    result: "3.4x more inbound calls in 90 days",
    metrics: [
      { label: "Organic Traffic", before: 820, after: 4100, color: "#732cee" },
      { label: "Monthly Leads", before: 34, after: 116, color: "#F65A75" },
    ],
    tag: "Local SEO + Google Ads",
    color: "#732cee",
  },
  {
    industry: "SaaS",
    brand: "TechFlow App",
    result: "41% jump in trial signups in 60 days",
    metrics: [
      { label: "Trial Signups", before: 210, after: 890, color: "#732cee" },
      { label: "Paid Conversions", before: 28, after: 312, color: "#34d399" },
    ],
    tag: "SaaS SEO + Email Flows",
    color: "#732cee",
  },
  {
    industry: "Real Estate",
    brand: "Prime Properties",
    result: "2.9x more qualified buyer leads",
    metrics: [
      { label: "Cost / Lead", before: 1200, after: 380, color: "#fbbf24", reverse: true },
      { label: "Monthly Enquiries", before: 42, after: 148, color: "#F65A75" },
    ],
    tag: "Performance Ads + Content",
    color: "#fbbf24",
  },
];

// ── Animated bar ──────────────────────────────────────────────────────────────
function Bar({ label, before, after, color, reverse = false, animate }) {
  const maxVal = Math.max(before, after);
  const beforePct = (before / maxVal) * 100;
  const afterPct = (after / maxVal) * 100;
  const improvement = reverse
    ? `-${Math.round(((before - after) / before) * 100)}%`
    : `+${Math.round(((after - before) / before) * 100)}%`;

  return (
    <div className="mb-3">
      <div className="flex items-center justify-between mb-1.5">
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>{label}</span>
        <span style={{ fontSize: 11, color, fontWeight: 700 }}>{improvement}</span>
      </div>
      <div className="flex flex-col gap-1">
        {/* Before */}
        <div className="flex items-center gap-2">
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", width: 30, flexShrink: 0 }}>Before</span>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.06)", borderRadius: 99, height: 6, overflow: "hidden" }}>
            <div style={{
              width: animate ? `${beforePct}%` : "0%",
              height: "100%",
              background: "rgba(255,255,255,0.2)",
              borderRadius: 99,
              transition: "width 1s ease 0.2s",
            }}/>
          </div>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", width: 28, textAlign: "right", flexShrink: 0 }}>
            {before > 999 ? `${(before/1000).toFixed(1)}k` : before}
          </span>
        </div>
        {/* After */}
        <div className="flex items-center gap-2">
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", width: 30, flexShrink: 0 }}>After</span>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.06)", borderRadius: 99, height: 6, overflow: "hidden" }}>
            <div style={{
              width: animate ? `${afterPct}%` : "0%",
              height: "100%",
              background: color,
              borderRadius: 99,
              transition: "width 1.2s ease 0.4s",
            }}/>
          </div>
          <span style={{ fontSize: 10, color, width: 28, textAlign: "right", flexShrink: 0, fontWeight: 600 }}>
            {after > 999 ? `${(after/1000).toFixed(1)}k` : after}
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Case Card ─────────────────────────────────────────────────────────────────
function CaseCard({ c, animate }) {
  return (
    <div
      className="rounded-2xl p-5 flex flex-col gap-4 flex-1"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: `1px solid ${c.color}30`,
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <span style={{ fontSize: 11, color: c.color, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
            {c.industry}
          </span>
          <div style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.9)", marginTop: 2 }}>{c.brand}</div>
        </div>
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
          style={{ background: `${c.color}18`, color: c.color, border: `1px solid ${c.color}30` }}
        >
          {c.tag}
        </span>
      </div>

      {/* Result headline */}
      <p style={{ fontSize: 15, fontWeight: 700, color: "#fff", lineHeight: 1.4, margin: 0 }}>
        "{c.result}"
      </p>

      {/* Bars */}
      <div>
        {c.metrics.map((m) => (
          <Bar key={m.label} {...m} animate={animate} />
        ))}
      </div>
    </div>
  );
}

// ── Stat Number ───────────────────────────────────────────────────────────────
function StatNumber({ stat, animate }) {
  const count = useCountUp(
    stat.isFloat ? Math.floor(stat.value * 10) : stat.value,
    1800,
    animate
  );
  const display = stat.isFloat ? (count / 10).toFixed(1) : count;

  return (
    <div className="flex flex-col items-center text-center px-4 py-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
      <div style={{ fontSize: "clamp(44px,6vw,72px)", fontWeight: 900, color: stat.color, lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>
        {animate ? display : 0}{stat.suffix}
      </div>
      <div className="text-h6 font-semibold text-white mt-2 leading-snug">{stat.label}</div>
      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>{stat.sub}</div>
    </div>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────
export default function ResultsSection() {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <ContainerWrapper background="#0f0a1e">
      <PaddingWrapper2>
        <div ref={ref}>
          {/* Section heading */}
          <div className="text-center mb-10 md:mb-[70px]">
            <span
              className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4"
              style={{ background: "rgba(167,139,250,0.15)", color: "#732cee", border: "1px solid rgba(167,139,250,0.3)" }}
            >
              Proof, Not Promises
            </span>
            <h2 className="text-h2 font-extrabold text-white leading-tight">
              Numbers That{" "}
              <span style={{ color: "#732cee" }}>Actually Matter</span>
            </h2>
            <p className="p-default mt-3 mx-auto" style={{ color: "rgba(255,255,255,0.5)", maxWidth: 520 }}>
              Real results from real brands — no cherry-picked outliers, no inflated claims.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
            {STATS.map((s) => <StatNumber key={s.label} stat={s} animate={animate} />)}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }}/>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Case Snapshots
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }}/>
          </div>

          {/* Case cards */}
          <div className="flex flex-col lg:flex-row gap-4 mb-12">
            {CASES.map((c) => <CaseCard key={c.brand} c={c} animate={animate} />)}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, marginBottom: 16 }}>
              *Results vary by industry, budget, and baseline. All figures are real client data.
            </p>
            <button
              className="button-primary hover:text-secondary hover:bg-white!"
            >
              See If We're the Right Fit
            </button>
          </div>
        </div>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
}