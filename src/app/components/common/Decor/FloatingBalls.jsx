"use client";

import { useMemo } from "react";

const COLORS = [
  "#48179C",
  "#F65A75",
  "#6f3dcc",
  "#f98699",
];

const ICONS = [
  {
    label: "computer",
    path: (
      <>
        <rect x="4" y="6" width="16" height="11" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
  },
  {
    label: "browser",
    path: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 9h18M7 7h.01M10 7h.01" />
      </>
    ),
  },
  {
    label: "seo search",
    path: (
      <>
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="M15 15l5 5M8 10h5M8 13h3" />
      </>
    ),
  },
  {
    label: "code",
    path: (
      <>
        <path d="M9 8l-4 4 4 4M15 8l4 4-4 4M13 6l-2 12" />
      </>
    ),
  },
  {
    label: "analytics",
    path: (
      <>
        <path d="M5 19V5M5 19h15" />
        <rect x="8" y="12" width="2.5" height="5" rx="1" />
        <rect x="12" y="9" width="2.5" height="8" rx="1" />
        <rect x="16" y="6" width="2.5" height="11" rx="1" />
      </>
    ),
  },
  {
    label: "ranking",
    path: (
      <>
        <path d="M5 17l4-4 3 3 7-8" />
        <path d="M15 8h4v4" />
        <path d="M5 21h14" />
      </>
    ),
  },
  {
    label: "marketing megaphone",
    path: (
      <>
        <path d="M4 13h3l9 4V7l-9 4H4v2z" />
        <path d="M7 13l2 6h3l-2-5" />
        <path d="M18 9l2-2M19 12h3M18 15l2 2" />
      </>
    ),
  },
  {
    label: "ecommerce cart",
    path: (
      <>
        <path d="M4 5h2l2.2 10.5h9.8l2-7.5H8" />
        <circle cx="10" cy="20" r="1.5" />
        <circle cx="18" cy="20" r="1.5" />
      </>
    ),
  },
  {
    label: "dental",
    path: (
      <>
        <path d="M8 4c1.8 0 2.4 1 4 1s2.2-1 4-1c2.2 0 3.5 1.8 3 4.4-.4 2.1-1.3 3.8-2 6-.9 2.8-1.4 5.6-3.1 5.6-1.2 0-1.2-2.6-1.9-2.6S11.3 20 10.1 20C8.4 20 7.9 17.2 7 14.4c-.7-2.2-1.6-3.9-2-6C4.5 5.8 5.8 4 8 4z" />
      </>
    ),
  },
  {
    label: "healthcare",
    path: (
      <>
        <path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10z" />
        <path d="M9 12h6M12 9v6" />
      </>
    ),
  },
  {
    label: "content document",
    path: (
      <>
        <path d="M7 3h7l4 4v14H7z" />
        <path d="M14 3v5h5M9 12h6M9 16h6M9 19h4" />
      </>
    ),
  },
  {
    label: "paid ads",
    path: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 7v10M9 10c0-1.2 1.2-2 3-2s3 .8 3 2-1.2 2-3 2-3 .8-3 2 1.2 2 3 2 3-.8 3-2" />
      </>
    ),
  },
  {
    label: "email marketing",
    path: (
      <>
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="M4 8l8 6 8-6" />
      </>
    ),
  },
  {
    label: "local seo pin",
    path: (
      <>
        <path d="M12 21s6-5.3 6-11a6 6 0 0 0-12 0c0 5.7 6 11 6 11z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
  },
  {
    label: "legal seo",
    path: (
      <>
        <path d="M12 4v16M7 20h10M8 7h8" />
        <path d="M7 7l-3 6h6L7 7zM17 7l-3 6h6l-3-6z" />
      </>
    ),
  },
  {
    label: "social media",
    path: (
      <>
        <circle cx="7" cy="12" r="3" />
        <circle cx="17" cy="6" r="3" />
        <circle cx="17" cy="18" r="3" />
        <path d="M9.7 10.7l4.6-3.4M9.7 13.3l4.6 3.4" />
      </>
    ),
  },
  {
    label: "conversion target",
    path: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="1" />
        <path d="M16 8l4-4M18 4h2v2" />
      </>
    ),
  },
  {
    label: "ai chat",
    path: (
      <>
        <path d="M5 6h14v10H9l-4 4V6z" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" />
      </>
    ),
  },
  {
    label: "growth chart",
    path: (
      <>
        <path d="M4 19h16" />
        <path d="M6 16l4-4 3 2 5-7" />
        <path d="M15 7h3v3" />
      </>
    ),
  },
  {
    label: "keyword tag",
    path: (
      <>
        <path d="M4 12V5h7l9 9-7 7-9-9z" />
        <circle cx="8" cy="9" r="1" />
        <path d="M10 13h5M10 16h3" />
      </>
    ),
  },
  {
    label: "backlink",
    path: (
      <>
        <path d="M10 7h-1a5 5 0 0 0 0 10h3" />
        <path d="M14 7h1a5 5 0 0 1 0 10h-3" />
        <path d="M8 12h8" />
      </>
    ),
  },
  {
    label: "reviews star",
    path: (
      <>
        <path d="M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3z" />
      </>
    ),
  },
  {
    label: "mobile website",
    path: (
      <>
        <rect x="8" y="3" width="8" height="18" rx="2" />
        <path d="M11 6h2M12 18h.01" />
      </>
    ),
  },
  {
    label: "speed performance",
    path: (
      <>
        <path d="M5 16a7 7 0 1 1 14 0" />
        <path d="M12 16l4-5" />
        <path d="M8 20h8" />
      </>
    ),
  },
  {
    label: "security shield",
    path: (
      <>
        <path d="M12 3l7 3v5c0 4.4-2.8 8.4-7 10-4.2-1.6-7-5.6-7-10V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    label: "strategy lightbulb",
    path: (
      <>
        <path d="M9 18h6M10 21h4" />
        <path d="M8 11a4 4 0 1 1 8 0c0 2-1.5 3-2.2 4H10.2C9.5 14 8 13 8 11z" />
        <path d="M12 3V2M5 6l-1-1M19 6l1-1" />
      </>
    ),
  },
  {
    label: "video marketing",
    path: (
      <>
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="M10 9l5 3-5 3V9z" />
      </>
    ),
  },
  {
    label: "automation gear",
    path: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
      </>
    ),
  },
  {
    label: "team users",
    path: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="10" r="2" />
        <path d="M4 20c.6-3 2.5-5 5-5s4.4 2 5 5" />
        <path d="M14 16c1.9.2 3.3 1.6 4 4" />
      </>
    ),
  },
  {
    label: "calendar campaign",
    path: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16M8 14h.01M12 14h.01M16 14h.01" />
      </>
    ),
  },
];

function createSeededRandom(seed) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

export default function FloatingBalls() {
  const icons = useMemo(() => {
    const random = createSeededRandom(42);

    return Array.from({ length: 24 }, (_, index) => {
      const size = 12 + Math.floor(random() * 8);
      const left = `${Math.floor(random() * 100)}%`;
      const startY = `${102 + Math.floor(random() * 28)}%`;
      const driftX = `${Math.floor(random() * 120 - 60)}px`;
      const duration = `${6 + random() * 6}s`;
      const delay = `${random() * 6}s`;
      const opacity = 0.2 + random() * 0.25;
      const color = COLORS[Math.floor(random() * COLORS.length)];
      const icon = ICONS[Math.floor(random() * ICONS.length)];

      return {
        id: index,
        size,
        left,
        startY,
        driftX,
        duration,
        delay,
        opacity,
        color,
        icon,
      };
    });
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden"
    >
      {icons.map((icon) => (
        <span
          key={icon.id}
          className="absolute drop-shadow-[0_0_12px_currentColor]"
          style={{
            left: icon.left,
            top: icon.startY,
            width: `${icon.size}px`,
            height: `${icon.size}px`,
            color: icon.color,
            opacity: icon.opacity,
            animation: `float-up ${icon.duration} ease-in-out ${icon.delay} infinite`,
            "--float-drift-x": icon.driftX,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-label={icon.icon.label}
          >
            {icon.icon.path}
          </svg>
        </span>
      ))}
    </div>
  );
}
