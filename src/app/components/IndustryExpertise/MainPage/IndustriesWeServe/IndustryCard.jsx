import React, { useState } from "react";

const VISIBLE_COUNT = 3;

const borderGradient = (reverse) => `linear-gradient(
  to ${reverse ? "top" : "bottom"},
  #48179C 0%, #48179C 50%, #7c3aed 60%,
  #a78bfa 70%, #ddd6fe 80%, #ede9fe 90%, transparent 100%
)`;

function ExtraTagsPopover({
  tags,
  accent,
  bg,
  open,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        position: "absolute",
        bottom: "calc(100% + 8px)",
        left: 0,
        background: "#fff",
        border: "1.5px solid #ede9fe",
        borderRadius: 12,
        padding: "10px 12px",
        boxShadow: "0 8px 32px rgba(72,23,156,0.14)",
        display: "flex",
        flexWrap: "wrap",
        gap: 6,
        zIndex: 10,
        width: "max-content",
        maxWidth: 260,
        pointerEvents: open ? "auto" : "none",
        opacity: open ? 1 : 0,
        transform: open
          ? "translateY(0) scale(1)"
          : "translateY(6px) scale(0.97)",
        transition: "opacity 0.22s ease, transform 0.22s ease",
      }}
    >
      {/* Arrow */}
      <div
        style={{
          position: "absolute",
          bottom: -7,
          left: 18,
          width: 12,
          height: 12,
          background: "#fff",
          borderRight: "1.5px solid #ede9fe",
          borderBottom: "1.5px solid #ede9fe",
          transform: "rotate(45deg)",
        }}
      />

      {tags.map((tag, i) => (
        <span
          key={tag}
          style={{
            fontSize: "0.72rem",
            fontWeight: 600,
            padding: "4px 10px",
            borderRadius: 999,
            background: bg,
            color: accent,
            border: `1px solid ${accent}30`,
            whiteSpace: "nowrap",
            opacity: open ? 1 : 0,
            transform: open ? "translateY(0)" : "translateY(4px)",
            transition: `opacity 0.18s ease ${i * 0.1 + 0.2}s,
                         transform 0.1s ease ${i * 0.4 + 0.04}s`,
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function IndustryCard({ icon, title, description, tags, accent, bg, reverse }) {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [cardHover, setCardHover] = useState(false);

  const visibleTags = tags.slice(0, VISIBLE_COUNT);
  const extraTags = tags.slice(VISIBLE_COUNT);

  // ── Shared handlers for pill + popover ──────────────────────────────────────
  // timeout trick: agar mouse pill se popover ki taraf ja raha ho,
  // toh us beech ka chota gap cross karte waqt close na ho
  let closeTimer = null;

  const handleOpen = () => {
    clearTimeout(closeTimer);
    setPopoverOpen(true);
  };
  const handleClose = () => {
    closeTimer = setTimeout(() => setPopoverOpen(false), 80); // 80ms grace period
  };

  return (
    <div
      style={{
        borderRadius: 16,
        padding: 2,
        background: borderGradient(reverse),
        height: "100%",
        transition: "transform 0.3s ease",
        transform: cardHover ? "translateY(-6px)" : "translateY(0)",
      }}
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
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
          boxSizing: "border-box",
          transition: "box-shadow 0.3s ease",
          boxShadow: cardHover ? "0 12px 36px rgba(72,23,156,0.12)" : "none",
        }}
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

        {/* ── Tags ── */}
        <div style={{ position: "relative", marginTop: "auto" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              alignItems: "center",
            }}
          >
            {/* Visible tags — NO hover handlers here */}
            {visibleTags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  padding: "4px 10px",
                  borderRadius: 999,
                  background: bg,
                  color: accent,
                  border: `1px solid ${accent}30`,
                  whiteSpace: "nowrap",
                }}
              >
                {tag}
              </span>
            ))}

            {/* +N more pill — ONLY this triggers open */}
            {extraTags.length > 0 && (
              <span
                onMouseEnter={handleOpen} // ✅ sirf pill pe
                onMouseLeave={handleClose} // ✅ grace period ke saath
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  padding: "4px 10px",
                  borderRadius: 999,
                  background: popoverOpen ? accent : bg,
                  color: popoverOpen ? "#fff" : accent,
                  border: `1px solid ${accent}30`,
                  cursor: "default",
                  transition: "background 0.2s, color 0.2s",
                  userSelect: "none",
                }}
              >
                +{extraTags.length} more
              </span>
            )}
          </div>

          {/* Popover — mouse enter/leave yahan bhi handle hoga */}
          {extraTags.length > 0 && (
            <ExtraTagsPopover
              tags={extraTags}
              accent={accent}
              bg={bg}
              open={popoverOpen}
              onMouseEnter={handleOpen} // ✅ popover pe aate hi timer cancel
              onMouseLeave={handleClose} // ✅ popover se jaate hi close
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default IndustryCard;
