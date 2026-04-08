"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";

// Border underline animation — left→right on enter, right→left on leave
function AnimatedBorder({ hovered }) {
  return (
    <span
      style={{
        transformOrigin: hovered ? "left" : "left",
        transform: hovered ? "scaleX(1)" : "scaleX(0)",
        transition: "transform 0.6s ease",
      }}
      className="absolute bottom-0 left-0 h-[1.5px] w-full bg-secondary block"
    />
  );
}

export default function NavItem({ item }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 100);
    setHovered(false);
  };

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        setHovered(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Simple link — no dropdown
  if (!item.children) {
    return (
      <Link
        href={item.href ?? "#"}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative text-[15px] font-normal text-[#2c2c2c] hover:text-secondary transition-colors duration-500 ease-in-out px-4.5 py-3.75"
      >
        {item.label}
        <AnimatedBorder hovered={hovered} />
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
      href={item?.href? item.href :""}
        onClick={() => setOpen((v) => !v)}
        className={`relative  flex items-center gap-1 text-[15px] font-normal transition-colors duration-600 cursor-pointer ease-in-out px-3 xl:px-4.5 py-3.75
          ${open || hovered ? "text-secondary" : "text-[#2c2c2c]"}`}
      >
        {item.label}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <AnimatedBorder hovered={hovered || open} />
      </Link>

      <DropdownMenu items={item.children} open={open} />
    </div>
  );
}
