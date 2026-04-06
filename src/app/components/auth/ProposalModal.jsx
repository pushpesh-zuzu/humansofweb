"use client";

import { useState, useEffect } from "react";

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

  // ESC key se close
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.55)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      {/* Modal box */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: 16,
          width: "100%",
          maxWidth: 1060,
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
          boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            zIndex: 10,
            width: 32,
            height: 32,
            borderRadius: "50%",
            border: "none",
            background: "#f1f1f1",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            color: "#333",
          }}
          aria-label="Close"
        >
          ×
        </button>

        {/* Top section — left + right */}
        <div style={{ display: "flex", flexWrap: "wrap" }}>

          {/* ── Left Side ── */}
          <div
            style={{
              flex: "1 1 380px",
              padding: "2.5rem 2.5rem 2rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Watermark arrow shape */}
            <div
              style={{
                position: "absolute",
                bottom: -20,
                right: -20,
                width: 260,
                height: 260,
                opacity: 0.06,
                transform: "rotate(-10deg)",
              }}
            >
              <svg viewBox="0 0 200 200" fill="none">
                <path d="M20 180 L100 20 L180 180 L100 130 Z" fill="#1e40af"/>
              </svg>
            </div>

            <h3 className="text-h3 font-semibold text-primary">
              Limited-Time<br />
              <span>Bonus Offer!</span>
            </h3>

            <p style={{ fontSize: 15, color: "#374151", margin: "0 0 0.75rem", lineHeight: 1.6 }}>
              Sign up for our SEO Services and unlock a{" "}
              <span style={{ color: "#E87722", fontWeight: 700 }}>100% discount</span>{" "}
              on ANY add-on service:
            </p>

            <p style={{ fontSize: 15, fontWeight: 600, color: "#E87722", margin: "0 0 1.5rem" }}>
              Email Marketing • Google Ads • Meta Ads
            </p>

            <p style={{ fontSize: 14, color: "#374151", fontWeight: 500, margin: "0 0 1rem" }}>
              Your savings split:
            </p>

            {/* Saving boxes */}
            <div style={{ display: "flex", gap: 12, marginBottom: "1.5rem" }}>
              {["Month 1", "Month 2"].map((month, i) => (
                <div
                  key={i}
                  style={{
                    border: "1.5px solid #2563eb",
                    borderRadius: 10,
                    padding: "1rem 1.5rem",
                    minWidth: 130,
                  }}
                >
                  <div style={{ fontSize: 28, fontWeight: 800, color: "#2563eb" }}>50% off</div>
                  <div style={{ fontSize: 13, color: "#374151", marginTop: 2 }}>In {month}</div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 15, fontStyle: "italic", fontWeight: 700, color: "#111827", margin: "0 0 1.5rem", lineHeight: 1.5 }}>
              Get more visibility, more leads, more growth without the extra cost!
            </p>

            <p style={{ fontSize: 12, color: "#6b7280", margin: 0, lineHeight: 1.6 }}>
              Note: Offer valid only on add-on services purchased with SEO.<br />
              SEO service itself not discounted.
            </p>
          </div>

          {/* ── Right Side — Form ── */}
          <div
            style={{
              flex: "1 1 340px",
              background: "#eef2ff",
              borderRadius: "0 16px 0 0",
              padding: "2rem 2rem 1.5rem",
            }}
          >
            <h3 style={{ fontSize: 26, fontWeight: 700, color: "#1d4ed8", textAlign: "center", margin: "0 0 1.5rem" }}>
              Ready to think big?
            </h3>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {/* Input fields */}
              {[
                { name: "firstName", placeholder: "First Name*", type: "text" },
                { name: "webUrl",    placeholder: "Web URL goes here*", type: "url" },
                { name: "email",     placeholder: "Email Address*", type: "email" },
                { name: "phone",     placeholder: "Phone Number*", type: "tel" },
              ].map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={form[field.name]}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                    fontSize: 14,
                    outline: "none",
                    background: "#fff",
                    color: "#111827",
                    boxSizing: "border-box",
                  }}
                />
              ))}

              {/* Dropdowns */}
              {[
                {
                  name: "service",
                  placeholder: "Services",
                  options: ["SEO", "PPC", "Content Marketing", "Digital PR", "Social Media"],
                },
                {
                  name: "budget",
                  placeholder: "Monthly Marketing Budget",
                  options: ["Under ₹50K", "₹50K–₹1L", "₹1L–₹5L", "₹5L+"],
                },
              ].map((sel) => (
                <div key={sel.name} style={{ position: "relative" }}>
                  <select
                    name={sel.name}
                    value={form[sel.name]}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: 8,
                      border: "1px solid #d1d5db",
                      fontSize: 14,
                      outline: "none",
                      background: "#fff",
                      color: form[sel.name] ? "#111827" : "#9ca3af",
                      appearance: "none",
                      boxSizing: "border-box",
                      cursor: "pointer",
                    }}
                  >
                    <option value="">{sel.placeholder}</option>
                    {sel.options.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                  <svg
                    style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
                    width="16" height="16" fill="none" stroke="#9ca3af" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>
              ))}

              {/* Textarea */}
              <textarea
                name="about"
                placeholder="Tell us about your business"
                value={form.about}
                onChange={handleChange}
                rows={2}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: "1px solid #d1d5db",
                  fontSize: 14,
                  outline: "none",
                  background: "#fff",
                  color: "#111827",
                  resize: "none",
                  boxSizing: "border-box",
                  fontFamily: "inherit",
                }}
              />

              {/* Checkbox */}
              <label style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 12, color: "#374151", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  name="terms"
                  checked={form.terms}
                  onChange={handleChange}
                  style={{ marginTop: 2, accentColor: "#2563eb", flexShrink: 0 }}
                />
                <span>
                  I agree to{" "}
                  <a href="#" style={{ color: "#2563eb" }}>terms & conditions</a>{" "}
                  provided by the company. By providing my phone number, I agree to receive text messages from the business.
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "13px",
                  background: "#1d4ed8",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  border: "none",
                  borderRadius: 8,
                  cursor: "pointer",
                  marginTop: 4,
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#1e40af")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#1d4ed8")}
              >
                SEND MY FREE PROPOSAL
              </button>
            </form>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div
          style={{
            borderTop: "1px solid #e5e7eb",
            padding: "1rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontSize: 14, color: "#374151" }}>
            Would you prefer to talk to someone in person?
          </span>
          <a
            href="tel:+18882731050"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 20,
              fontWeight: 700,
              color: "#E87722",
              textDecoration: "none",
            }}
          >
            <svg width="20" height="20" fill="none" stroke="#E87722" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            (888) 273-1050
          </a>
        </div>

      </div>
    </div>
  );
}