"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ServiceCard from "./ServiceCard";
import analyticsIcon from "../../common/Icons/Home/Analytics.svg";
import digitalPRIcon from "../../common/Icons/Home/digital-pr.svg";
import paidMediaIcon from "../../common/Icons/Home/paid-media.svg";
import reportingIcon from "../../common/Icons/Home/reporting.svg";
import searchVisibilityIcon from "../../common/Icons/Home/search-visibility.svg";
import technologyIcon from "../../common/Icons/Home/technology.svg";

const IconAsset = ({ src, alt }) => (
  <Image src={src} alt={alt} width={72} height={72} />
);

const SERVICES = [
  {
    icon: <IconAsset src={searchVisibilityIcon} alt="" />,
    title: "Search Visibility",
    subtitle: "Get Discovered by Real People",
    description: "We help your brand get discovered by the right audience through smart, human-first visibility.",
    warm: true,
  },
  {
    icon: <IconAsset src={reportingIcon} alt="" />,
    title: "Analytics & Reporting",
    subtitle: "Understand What Truly Matters",
    description: "We turn data into clear, human insights—helping you understand what’s working, what’s not, and where to grow with confidence.",
    warm: false,
  },
  {
    icon: <IconAsset src={digitalPRIcon} alt="" />,
    title: "Digital PR",
    subtitle: "Earn Attention That Matters",
    description: "We craft and place stories that build trust, boost credibility, and get your brand noticed.",
    warm: false,
  },
  {
    icon: <IconAsset src={technologyIcon} alt="" />,
    title: "Technology",
    subtitle: "Technology That Drives Growth",
    description: "We use the right tools to simplify processes, improve efficiency, and support smarter decisions that deliver real results.",
    warm: false,
  },
  {
    icon: <IconAsset src={analyticsIcon} alt="" />,
    title: "SEO Strategy",
    subtitle: "Grow with Smart SEO",
    description: "We build data-driven SEO strategies that improve visibility, attract the right audience, and drive sustainable growth.",
    warm: true,
  },
  {
    icon: <IconAsset src={paidMediaIcon} alt="" />,
    title: "PPC Advertising",
    subtitle: "Smarter Ads, Better Returns",
    description: "We run targeted ad campaigns that maximize impact, drive conversions, and deliver strong returns on every spend.",
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
        .services-arrow-prev { left: -40px; }
        .services-arrow-next { right: -40px; }
        @media (min-width: 640px) {
          .services-embla-slide { flex: 0 0 50%; }
          .services-arrow-prev { left: -42px; }
          .services-arrow-next { right: -42px; }
        }
        @media (min-width: 1024px) {
          .services-embla-slide { flex: 0 0 33.333%; }
        }
        @media (min-width: 1280px) {
          .services-embla-slide { flex: 0 0 25%; }
        }
      `}</style>

      <div className="mx-auto px-6">
        <div className="relative">

          {/* Prev Arrow */}
          <button
            onClick={scrollPrev}
            aria-label="Previous"
            className="services-arrow-prev"
            style={{
              position: "absolute",
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
            className="services-arrow-next"
            style={{
              position: "absolute",
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
