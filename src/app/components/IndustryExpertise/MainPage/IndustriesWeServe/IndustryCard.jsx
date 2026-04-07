import React from "react";

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
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "translateY(-6px)")
      }
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
        onMouseEnter={(e) =>
          (e.currentTarget.style.boxShadow = "0 12px 36px rgba(72,23,156,0.12)")
        }
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
        <p
          className="p-default text-gray-500 leading-relaxed"
          style={{ margin: 0, flexGrow: 1 }}
        >
          {description}
        </p>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            marginTop: "auto",
          }}
        >
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

export default IndustryCard;
