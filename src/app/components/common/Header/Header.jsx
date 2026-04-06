"use client";

import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";
import NAV_ITEMS from "./navData";
import Logo from "../Icons/Home/Logo";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div
        className="w-full py-[4.6px]"
        style={{
          background: "linear-gradient(90deg, #F65A75 0%, #48179C 100%)",
        }}
      ></div>
      <div className="mx-auto px-4 sm:px-6 py-[10px] lg:px-7 lg:py-7">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 h-11">
            <span className="text-2xl font-black tracking-tight text-gray-900">
              <Logo className="h-7.25 w-30 md:h-11 md:w-61 lg:pr-8 md:pr-13" />
            </span>
          </Link>

          <div className="flex">
            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-6 lg:gap-1">
              {NAV_ITEMS.map((item, idx) => (
                <NavItem key={idx} item={item} />
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="hidden md:inline-flex rounded-full items-center button-outline font-bold text-[#4b4b4b] border-1 hover:border-secondary px-4.5 py-3.75 hover:bg-secondary hover:text-white transition-colors duration-200"
              >
                GET A PROPOSAL
              </Link>

              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="flex xl:hidden p-2 rounded text-gray-700 hover:text-secondary"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu
        items={NAV_ITEMS}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </header>
  );
}
