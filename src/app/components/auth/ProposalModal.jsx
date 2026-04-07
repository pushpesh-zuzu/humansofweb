"use client";

import { useState, useEffect } from "react";
import Logo from "../common/Icons/Home/Logo";

function Input({ type = "text", name, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-800 placeholder-gray-400 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all duration-200"
    />
  );
}

function Select({ name, value, onChange, placeholder, options }) {
  return (
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm outline-none appearance-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all duration-200 cursor-pointer"
        style={{ color: value ? "#1f2937" : "#9ca3af" }}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <svg
        className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
        width="14"
        height="14"
        fill="none"
        stroke="#9ca3af"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
}

export default function ProposalModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    firstName: "",
    webUrl: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    about: "",
    terms: false,
  });

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[1000] flex items-center justify-center p-3 md:p-5 "
      style={{ background: "rgba(15,5,30,0.75)", backdropFilter: "blur(4px)" }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full relative flex flex-col overflow-hidden border-secondary border-1"
        style={{
          maxWidth: 980,
          maxHeight: "95vh",
          borderRadius: 20,
          boxShadow: "0 32px 80px rgba(72,23,156,0.3)",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute cursor-pointer top-3 right-3 z-20 w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-500 hover:bg-white/20 transition-all text-2xl font-light"
        >
          ×
        </button>

        {/* ── MOBILE top strip ── */}
        <div
          className="md:hidden px-5 pt-5 pb-4 flex-shrink-0 bg-white"
          // style={{ background: "linear-gradient(135deg, #48179C 0%, #6d28d9 60%, #F65A75 100%)" }}
        >
          <div className="mb-4">
            <span
              className=" ml-auto text-xs text-gray-600  px-3 py-1 rounded-full font-medium"
              style={{ background: "#F65A75" }}
            >
              Limited Offer
            </span>
          </div>

          <h2 className="text-h4 font-extrabold text-gray-500 leading-tight mb-1">
            Grow Smarter.{" "}
            <span style={{ color: "#48179C", lineHeight: 1.2 }}>
              Pay Less. Win More.
            </span>
          </h2>
          <p className="text-gray-600 text-xs mb-3">
            <span className="font-bold" style={{ color: "#F65A75" }}>
              100% discount
            </span>{" "}
            discount on any add-on with a Growth Strategy plan.
          </p>
          {/* <div className="flex gap-2">
            {["50% off — Month 1", "50% off — Month 2"].map((t) => (
              <div key={t} className="flex-1 text-center rounded-lg py-2 text-gray-500 text-xs font-bold" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid #F65A75" }}>
                {t}
              </div>
            ))}
          </div> */}
        </div>

        {/* ── DESKTOP + MOBILE form body ── */}
        <div className="flex flex-col md:flex-row flex-1 min-h-0 ">
          {/* LEFT — desktop only */}
          <div
            className="hidden md:flex flex-col relative overflow-hidden flex-shrink-0 bg-white"
            style={{
              width: "42%",
              // background: "linear-gradient(155deg, #48179C 0%, #6d28d9 55%, #c2185b 100%)",
            }}
          >
            {/* Watermark */}
            <div
              className="absolute bottom-0 right-0 opacity-[0.07] pointer-events-none"
              style={{ width: 240, height: 240 }}
            >
              <svg viewBox="0 0 120 120" fill="none">
                <rect
                  x="5"
                  y="5"
                  width="48"
                  height="48"
                  rx="6"
                  fill="white"
                  transform="rotate(45 29 29)"
                />
                <rect
                  x="67"
                  y="5"
                  width="48"
                  height="48"
                  rx="6"
                  fill="white"
                  transform="rotate(45 91 29)"
                />
                <rect
                  x="5"
                  y="67"
                  width="48"
                  height="48"
                  rx="6"
                  fill="white"
                  transform="rotate(45 29 91)"
                />
                <rect
                  x="67"
                  y="67"
                  width="48"
                  height="48"
                  rx="6"
                  fill="white"
                  transform="rotate(45 91 91)"
                />
              </svg>
            </div>

            {/* Content — flex-1 stretch karo */}
            <div className="flex flex-col justify-between flex-1 p-8">
              <div>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-700 mb-4 text-white"
                  style={{ background: "#F65A75" }}
                >
                  Limited-Time Offer
                </span>

                <h2
                  className="text-h2 font-extrabold text-gray-500 leading-tight mb-3"
                  style={{ color: "#48179C", lineHeight: 1.2 }}
                >
                  Grow Smarter.
                  <br />
                  <span style={{ color: "#F65A75" }}>
                    Pay Less.
                    <br />
                    Win More.
                  </span>
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  Sign up for our Growth Strategy and unlock a{" "}
                  <span className="font-bold" style={{ color: "#F65A75" }}>
                    100% discount
                  </span>{" "}
                  on any add-on:
                </p>

                <p
                  className="font-semibold mb-6"
                  style={{ color: "#48179C", fontSize: 15 }}
                >
                  SEO • Performance Marketing • Content Strategy • Digital PR
                </p>

                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">
                  Your savings split
                </p>
                <div className="flex gap-3 mb-6">
                  {["Month 1", "Month 2"].map((m) => (
                    <div
                      key={m}
                      className="flex-1 rounded-xl px-3 py-3 text-center"
                      style={{
                        background: "rgba(255,255,255,0.12)",
                        border: "1px solid #48179C",
                      }}
                    >
                      <div
                        className="text-h4 font-extrabold"
                        style={{ color: "#48179C" }}
                      >
                        50% off
                      </div>
                      <div className="text-sm text-gray-500 mt-0.5">In {m}</div>
                    </div>
                  ))}
                </div>

                <div
                  className="rounded-[16px] p-4 mb-6"
                  style={{
                    background:
                      "linear-gradient(135deg, #f5f0ff 0%, #fff0f3 100%)",
                    borderLeft: "4px solid #48179C",
                  }}
                >
                  <p className="text-sm font-semibold italic text-gray-700 leading-relaxed">
                    &quot;More visibility. More leads. More growth — without the
                    extra cost.&quot;
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  {["No Lock-ins", "ROI Focused", "Quick Start"].map((t) => (
                    <span
                      key={t}
                      className="text-xs text-gray-500 flex items-center gap-1"
                    >
                      <span style={{ color: "#ffd6de" }}>✓</span> {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom phone — always at bottom */}
              <div
                className="mt-6 pt-0"
                style={{ borderTop: "1px solid #F65A75" }}
              >
                <p className="text-xs text-gray-500 mb-1">
                  Prefer to speak directly?
                </p>
                <a
                  href="tel:+918888888888"
                  className="flex items-center gap-2 font-bold text-secondary text-sm hover:text-gray-600 transition-colors"
                >
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +91 88888 88888
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — Form, fills full height */}
          <div
            className="flex-1 flex flex-col overflow-y-auto"
            style={{
              background: "linear-gradient(160deg, #f5f0ff 0%, #fff0f3 100%)",
            }}
          >
            {/* Form wrapper — flex-1 so it stretches */}
            <div className="flex flex-col flex-1 p-5 md:p-8">
              <div className="hidden md:block mb-4">
                <h3
                  className="text-h3 font-bold mb-4"
                  style={{ color: "#48179C" }}
                >
                  Ready to Think Big?
                </h3>
                <p className="p-default text-gray-400 mt-1">
                  Tell us about your brand — we&apos;ll do the rest.
                </p>
              </div>

              {/* Form — flex-1 so textarea grows to fill space */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col flex-1 gap-3"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Input
                    name="firstName"
                    placeholder="First Name *"
                    value={form.firstName}
                    onChange={handleChange}
                  />
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number *"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>

                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address *"
                  value={form.email}
                  onChange={handleChange}
                />
                <Input
                  name="webUrl"
                  type="url"
                  placeholder="Your Website URL *"
                  value={form.webUrl}
                  onChange={handleChange}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    placeholder="Service Interested In"
                    options={[
                      "SEO",
                      "Performance Marketing",
                      "Content Strategy",
                      "Digital PR",
                      "Social Media",
                      "Full Growth Package",
                    ]}
                  />
                  <Select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    placeholder="Monthly Budget"
                    options={[
                      "Under ₹50K",
                      "₹50K – ₹1L",
                      "₹1L – ₹5L",
                      "₹5L – ₹10L",
                      "₹10L+",
                    ]}
                  />
                </div>

                {/* Textarea — flex-1 se baaki space fill karta hai */}
                <textarea
                  name="about"
                  placeholder="Tell us about your business & goals..."
                  value={form.about}
                  onChange={handleChange}
                  className="w-full flex-1 min-h-[80px] px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-800 placeholder-gray-400 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all resize-none"
                />

                <label className="text-xs text-gray-500 cursor-pointer leading-relaxed">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={form.terms}
                    onChange={handleChange}
                    className="mt-0.5 mr-1 flex-shrink-0 accent-secondary"
                  />
                  I agree to the{" "}
                  <a
                    href="/terms"
                    className="underline"
                    style={{ color: "#48179C" }}
                  >
                    terms & conditions
                  </a>
                  . I consent to receiving communication from HOW — Humans of
                  Web.
                </label>

                <button
                  type="submit"
                  className="button-primary w-full transition-all duration-200"
                  style={{ background: "#48179C", border: "none" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#2d0e6e")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#48179C")
                  }
                >
                  Send My Free Proposal →
                </button>

                <p className="text-xs text-center text-gray-400 pb-1">
                  No spam. No commitments. Just results.
                </p>
              </form>
            </div>

            {/* Mobile phone bar */}
            <div className="md:hidden border-t border-purple-100 px-5 py-3 flex items-center justify-center gap-2 flex-wrap flex-shrink-0">
              <span className="text-xs text-gray-500">Prefer to talk?</span>
              <a
                href="tel:+918888888888"
                className="flex items-center gap-1.5 font-bold text-sm"
                style={{ color: "#F65A75" }}
              >
                <svg
                  width="13"
                  height="13"
                  fill="none"
                  stroke="#F65A75"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +91 88888 88888
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

