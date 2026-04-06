"use client";

import { useRef, useState } from "react";
import Link from "next/link";

export default function DropdownMenu({ items, open }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeTop, setActiveTop] = useState(0);
  const itemRefs = useRef([]);

  const activeItem = activeIndex !== null ? items[activeIndex] : null;
  const hasSubItems = activeItem?.subItems?.length > 0;
  const setActiveItem = (idx) => {
    setActiveIndex(idx);
    setActiveTop(itemRefs.current[idx]?.offsetTop ?? 0);
  };

  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-7 z-50 min-w-[200px]
      transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
      ${open
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      onMouseLeave={() => setActiveIndex(null)}
    >
      {/* Left Column */}
      <ul className="bg-secondary min-w-[240px] overflow-hidden shadow-2xl">
        {items.map((item, idx) => (
          <li
            key={idx}
            ref={(element) => {
              itemRefs.current[idx] = element;
            }}
          >
            {item.subItems ? (
              <button
                onMouseEnter={() => setActiveItem(idx)}
                onClick={() => setActiveItem(idx)}
                className={`w-full text-left flex items-center justify-between gap-4 px-5 py-3 text-sm font-medium text-white transition-colors duration-200
                  ${activeIndex === idx
                    ? "bg-[#f4758a]"
                    : "hover:bg-[#f4758a]"
                  }`}
              >
                {item.label}
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            ) : (
              <Link
                href={item.href ?? "#"}
                className="block px-5 py-3 text-sm font-medium text-white hover:bg-[#f4758a]"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Right Column (Sub Items) */}
      {hasSubItems && (
        <ul
          className="absolute left-full ml-1 bg-secondary min-w-[240px] overflow-hidden shadow-2xl before:absolute before:-left-1 before:top-0 before:h-full before:w-1 before:content-['']"
          style={{ top: activeTop }}
        >
          {activeItem.subItems.map((sub, idx) => (
            <li key={idx}>
              <Link
                href={sub.href}
                className="block px-5 py-3 text-sm text-white hover:bg-[#f4758a]"
              >
                {sub.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
