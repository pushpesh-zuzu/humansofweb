"use client";

import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ServiceCard from "./ServiceCard";

// ── Icons ────────────────────────────────────────────────────────────────────

const IconContentMarketing = () => (
  <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
    <rect width="72" height="72" rx="16" fill="#fff7ed"/>
    <rect x="14" y="22" width="30" height="22" rx="4" stroke="#E87722" strokeWidth="2" fill="none"/>
    <path d="M20 30h18M20 35h12" stroke="#E87722" strokeWidth="2" strokeLinecap="round"/>
    <path d="M38 36l8-6v16l-8-6z" fill="#E87722" opacity="0.7"/>
    <circle cx="48" cy="48" r="8" fill="#667eea" opacity="0.15"/>
    <path d="M44 48l3 3 5-5" stroke="#667eea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconAnalytics = () => (
  <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
    <rect width="72" height="72" rx="16" fill="#f5f3ff"/>
    <rect x="14" y="42" width="8" height="14" rx="2" fill="#E87722" opacity="0.6"/>
    <rect x="26" y="32" width="8" height="24" rx="2" fill="#E87722"/>
    <rect x="38" y="24" width="8" height="32" rx="2" fill="#667eea"/>
    <rect x="50" y="36" width="8" height="20" rx="2" fill="#667eea" opacity="0.6"/>
    <path d="M16 40 L28 30 L40 22 L52 34" stroke="#E87722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="52" cy="34" r="3" fill="#E87722"/>
    <path d="M54 16l4-4M58 16l-4-4" stroke="#667eea" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconDigitalPR = () => (
  <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
    <rect width="72" height="72" rx="16" fill="#fef3f2"/>
    <rect x="16" y="20" width="32" height="24" rx="3" stroke="#E87722" strokeWidth="2" fill="none"/>
    <rect x="20" y="28" width="16" height="3" rx="1.5" fill="#E87722"/>
    <rect x="20" y="33" width="12" height="2" rx="1" fill="#E87722" opacity="0.5"/>
    <circle cx="50" cy="26" r="8" fill="#667eea" opacity="0.15"/>
    <path d="M47 26l2.5 2.5L54 23" stroke="#667eea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 44v8M24 52h16" stroke="#E87722" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IconTechnology = () => (
  <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
    <rect width="72" height="72" rx="16" fill="#f0fdf4"/>
    <circle cx="36" cy="34" r="10" stroke="#667eea" strokeWidth="2" fill="none"/>
    <circle cx="36" cy="34" r="4" fill="#E87722"/>
    <path d="M36 18v4M36 46v4M20 34h4M48 34h4" stroke="#667eea" strokeWidth="2" strokeLinecap="round"/>
    <path d="M24.7 22.7l2.8 2.8M44.5 42.5l2.8 2.8M24.7 45.3l2.8-2.8M44.5 25.5l2.8-2.8" stroke="#667eea" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="52" cy="18" r="4" fill="#E87722" opacity="0.7"/>
    <path d="M50 18h4M52 16v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconSEO = () => (
  <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
    <rect width="72" height="72" rx="16" fill="#f0f9ff"/>
    <circle cx="32" cy="32" r="14" stroke="#667eea" strokeWidth="2" fill="none"/>
    <path d="M42 42L54 54" stroke="#667eea" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M28 28h8M28 33h5" stroke="#E87722" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IconPPC = () => (
  <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
    <rect width="72" height="72" rx="16" fill="#fff7ed"/>
    <path d="M36 16v40M28 20l8-4 8 4" stroke="#E87722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M22 44c0-7.7 6.3-14 14-14s14 6.3 14 14" stroke="#667eea" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <circle cx="36" cy="44" r="4" fill="#E87722"/>
  </svg>
);

// ── Data ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: <IconContentMarketing />,
    title: "Search Visibility",
    subtitle: "Be Found by the Right People",
    description: "We help your content show up where it matters - on search, across platforms, and in front of the audiences that convert.",
    warm: true,
  },
  {
    icon: <IconAnalytics />,
    title: "Analytics & Reporting",
    subtitle: "Know What's Working, Instantly",
    description: "We cut the noise and focus on what moves the needle. Clean dashboards. Actionable insights. No fluff.",
    warm: false,
  },
  {
    icon: <IconDigitalPR />,
    title: "Digital PR",
    subtitle: "Get Coverage That Counts",
    description: "We pitch, place, and publish stories that boost your credibility, build backlinks, and put your name in the right conversations.",
    warm: false,
  },
  {
    icon: <IconTechnology />,
    title: "Technology",
    subtitle: "Tools That Power Results",
    description: "We use platforms like CollabX — an ERP built for speed — to streamline reporting, manage execution, and support faster, smarter decisions.",
    warm: false,
  },
  {
    icon: <IconSEO />,
    title: "SEO Strategy",
    subtitle: "Rank. Grow. Dominate.",
    description: "Data-driven SEO that gets you found by the right audience, increases organic traffic, and builds long-term search authority.",
    warm: true,
  },
  {
    icon: <IconPPC />,
    title: "PPC Advertising",
    subtitle: "Every Rupee, Maximum Return",
    description: "Smart paid campaigns across Google, Meta, and more — targeted to convert, optimized to scale, built to outperform.",
    warm: false,
  },
];

// ── Main Component ───────────────────────────────────────────────────────────
export default function ServicesSlider1() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="w-full bg-white">
      {/*
        CSS media queries se slide width control —
        Server pe bhi yahi CSS render hogi, crawler ko sab content dikhega
      */}
      <style>{`
        .services-embla { overflow: hidden; }
        .services-embla-track { display: flex; }
        .services-embla-slide {
          flex: 0 0 100%;
          min-width: 0;
        }
        @media (min-width: 640px) {
          .services-embla-slide { flex: 0 0 50%; }
        }
        @media (min-width: 1024px) {
          .services-embla-slide { flex: 0 0 33.333%; }
        }
        @media (min-width: 1280px) {
          .services-embla-slide { flex: 0 0 25%; }
        }
      `}</style>

      <div className="mx-auto px-8">
        <div className="relative">

          {/* Prev Arrow */}
          <button
            onClick={scrollPrev}
            aria-label="Previous"
            style={{
              position: "absolute",
              left: -30,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "transparent",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <svg width="32" height="32" fill="none" stroke="#F65A75" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          {/* Embla viewport */}
          <div ref={emblaRef} className="services-embla">
            <div className="services-embla-track py-3.75">
              {SERVICES.map((service, idx) => (
                <div key={idx} className="services-embla-slide">
                  <ServiceCard {...service} reverse={idx % 2 !== 0} />
                </div>
              ))}
            </div>
          </div>

          {/* Next Arrow */}
          <button
            onClick={scrollNext}
            aria-label="Next"
            style={{
              position: "absolute",
              right: -30,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "transparent",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <svg width="32" height="32" fill="none" stroke="#F65A75" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
}