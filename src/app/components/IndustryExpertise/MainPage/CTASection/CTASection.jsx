"use client";

import ContainerWrapper from "@/app/components/common/Container/ContainerWrapper";
import PaddingWrapper from "@/app/components/common/Container/PaddingWrapper";
import PaddingWrapper2 from "@/app/components/common/Container/PaddingWrapper2";
import React, { useState } from "react";

export default function CTASection({ onOpenModal }) {
  const [hovered, setHovered] = useState(false);

  return (
    <ContainerWrapper background="#0f0a1e">
      <PaddingWrapper2>
        <div className="relative rounded-3xl overflow-hidden"
          style={{ background: "linear-gradient(135deg, #48179C 0%, #6d28d9 45%, #c2185b 100%)" }}
        >
          {/* HOW diamond grid watermark */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Top-left watermark */}
            <svg className="absolute -top-16 -left-16 opacity-[0.07]" width="300" height="300" viewBox="0 0 120 120" fill="none">
              <rect x="5" y="5" width="48" height="48" rx="6" fill="white" transform="rotate(45 29 29)"/>
              <rect x="67" y="5" width="48" height="48" rx="6" fill="white" transform="rotate(45 91 29)"/>
              <rect x="5" y="67" width="48" height="48" rx="6" fill="white" transform="rotate(45 29 91)"/>
              <rect x="67" y="67" width="48" height="48" rx="6" fill="white" transform="rotate(45 91 91)"/>
            </svg>
            {/* Bottom-right watermark */}
            <svg className="absolute -bottom-16 -right-16 opacity-[0.07]" width="300" height="300" viewBox="0 0 120 120" fill="none">
              <rect x="5" y="5" width="48" height="48" rx="6" fill="white" transform="rotate(45 29 29)"/>
              <rect x="67" y="5" width="48" height="48" rx="6" fill="white" transform="rotate(45 91 29)"/>
              <rect x="5" y="67" width="48" height="48" rx="6" fill="white" transform="rotate(45 29 91)"/>
              <rect x="67" y="67" width="48" height="48" rx="6" fill="white" transform="rotate(45 91 91)"/>
            </svg>
            {/* Dot grid */}
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
              {Array.from({ length: 8 }).map((_, row) =>
                Array.from({ length: 16 }).map((_, col) => (
                  <circle key={`${row}-${col}`} cx={col * 54 + 27} cy={row * 54 + 27} r="1.5" fill="white" opacity={(row + col) % 3 === 0 ? 1 : 0.4}/>
                ))
              )}
            </svg>
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 py-16 md:py-20 xl:py-24">

            {/* Top badge */}
            <span
              className="inline-flex items-center gap-2 text-xs font-bold px-4 py-1.5 rounded-full mb-6"
              style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", color: "white" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block"/>
              Currently Taking New Clients
            </span>

            {/* Headline */}
            <h2 className="text-h1 font-extrabold text-white leading-tight mb-4" style={{ maxWidth: 720 }}>
              Ready to Grow{" "}
              <span style={{
                background: "linear-gradient(90deg, #ffd6de, #fff, #ffd6de)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                in Your Industry?
              </span>
            </h2>

            {/* Sub text */}
            <p className="p-secondary text-white/70 leading-relaxed mb-10" style={{ maxWidth: 520 }}>
              Stop leaving growth on the table. Let's build a strategy that's built for your market, your audience, and your goals.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <button
                onClick={onOpenModal}
                className="button-primary"
                style={{
                  background: "white",
                  color: "#48179C",
                  border: "none",
                  boxShadow: hovered ? "0 0 0 6px rgba(255,255,255,0.15)" : "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  setHovered(true);
                  e.currentTarget.style.background = "#f5f0ff";
                  e.currentTarget.style.boxShadow = "0 0 0 6px rgba(255,255,255,0.15)";
                }}
                onMouseLeave={(e) => {
                  setHovered(false);
                  e.currentTarget.style.background = "white";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Let's Build Your Strategy →
              </button>

              <a
                href="tel:+918888888888"
                className="flex items-center gap-2 text-white/80 font-semibold text-sm hover:text-white transition-colors"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Or call us directly
              </a>
            </div>

            {/* Trust bar */}
            <div
              className="flex flex-wrap items-center justify-center gap-6 pt-8 w-full"
              style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
            >
              {[
                { icon: "🔒", text: "No Lock-in Contracts" },
                { icon: "📈", text: "Results in 60 Days" },
                { icon: "🎯", text: "Industry-Specific Strategy" },
                { icon: "💬", text: "Dedicated Strategist" },
              ].map((t) => (
                <div key={t.text} className="flex items-center gap-2 text-white/60 text-xs font-medium">
                  <span style={{ fontSize: 14 }}>{t.icon}</span>
                  {t.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
}