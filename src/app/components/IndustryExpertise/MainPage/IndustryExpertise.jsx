"use client";
import React, { useRef } from "react";
import IndustryHeroSection from "./HeroSection/HeroSection";
import TrustedBy from "../../common/TrustedBy/TrustedBy";
import IndustriesWeServe from "./IndustriesWeServe/IndustriesWeServe";
import IndustryDeepDive from "./IndustryDeepDive/IndustryDeepDive";
import HowWeWork from "./HowWeWork/HowWeWork";
import ResultsSection from "./ResultsSection/ResultsSection";
import WhyHOW from "./WhyHOW/WhyHOW";
import CTASection from "./CTASection/CTASection";
import { FAQ } from "./FAQ/FAQ";
import { INDUSTRIES } from "./IndustriesWeServe/IndustriesWeServerData";
import FaqComponent from "../../common/SubServices/FaqComponent/FaqComponent";
import ContainerWrapper from "../../common/Container/ContainerWrapper";
import PaddingWrapper2 from "../../common/Container/PaddingWrapper2";
import ReachWithUs from "../../common/Services/ReachWithUs/ReachWithUs";
import CustomGeneration from "../../Home/CustomGeneration";
import IndustryResearch from "../../common/Icons/industryExpert/howWeWork/IndustryResearch";
import StrategyPlanning from "../../common/Icons/industryExpert/howWeWork/StrategyPlanning";
import Execution from "../../common/Icons/industryExpert/howWeWork/Execution";
import Optimisation from "../../common/Icons/industryExpert/howWeWork/Optimisation";
import SpecialtyEyeCareSEO from "../../common/Icons/industryExpert/MoreConsultationsClearerGrowth/SpecialtyEyeCareSEO";
import HighValueProcedureAds from "../../common/Icons/industryExpert/MoreConsultationsClearerGrowth/HighValueProcedureAds";
import TrustBuildingContentReviews from "../../common/Icons/industryExpert/MoreConsultationsClearerGrowth/TrustBuildingContentReviews";
import PatientAcquisitionAds from "../../common/Icons/industryExpert/MorePatientsBuiltonTrust/PatientAcquisitionAds";
import PatientRetentionAndFollowup from "../../common/Icons/industryExpert/MorePatientsBuiltonTrust/PatientRetentionAndFollowup";
import HealthcareLocalSEO from "../../common/Icons/industryExpert/MorePatientsBuiltonTrust/HealthcareLocalSEO";
import ReviewReputationManagement from "../../common/Icons/industryExpert/MorePatientsFullerChairs/ReviewReputationManagement";
import AppointmentFocusedGoogleAds from "../../common/Icons/industryExpert/MorePatientsFullerChairs/AppointmentFocusedGoogleAds";
import LocalSEOGoogleMaps from "../../common/Icons/industryExpert/MorePatientsFullerChairs/LocalSEOGoogleMaps";
import EmailandSMSRetention from "../../common/Icons/industryExpert/MoreOrdersHigherReturns/EmailandSMSRetention";
import MetaandGooglePerformanceAds from "../../common/Icons/industryExpert/MoreOrdersHigherReturns/MetaandGooglePerformanceAds";
import ShoppingSEOandProductFeeds from "../../common/Icons/industryExpert/MoreOrdersHigherReturns/ShoppingSEOandProductFeeds";
import ConversionPages from "../../common/Icons/industryExpert/GetMoreCallsOwnYourLocalMarket/ConversionPages";
import LeadGeneration from "../../common/Icons/industryExpert/GetMoreCallsOwnYourLocalMarket/LeadGeneration";
import LocalSEO from "../../common/Icons/industryExpert/GetMoreCallsOwnYourLocalMarket/LocalSEO";

export const FREQUENTLY_QUESTION = [
  {
    key: "1",
    question: "Do you specialise in specific industries?",
    answer: `
       Yes, we work across a wide range of industries including technology, healthcare, finance, e-commerce, and more. Our team adapts quickly to different domains, ensuring that every solution is aligned with industry-specific trends, challenges, and audience expectations.`,
  },
  {
    key: "2",
    question: "How long does it take to see results?",
    answer: `
    We follow a tailored approach for every client. First, we understand your business goals, target audience, and current challenges. Based on this, we create a data-driven strategy that is flexible, scalable, and designed specifically to achieve your objectives.   
    `,
  },
  {
    key: "3",
    question: "How do you customise strategies?",
    answer: `
    The timeline depends on the scope and type of project. Some improvements can be seen within a few weeks, while long-term strategies may take a few months to deliver measurable results. We always focus on sustainable growth rather than quick fixes.`,
  },
];
const STEPS = [
  {
    step: "01",
    title: "Industry Research",
    description:
      "We dig deep into your market — competitors, keywords, audience intent, and gaps nobody else is targeting.",
    icon: <IndustryResearch className="w-full h-full" />,
  },
  {
    step: "02",
    title: "Strategy Planning",
    description:
      "Every brand gets a custom growth blueprint — channels, timelines, budgets, and KPIs mapped to your actual goals.",
    icon: <StrategyPlanning className="w-full h-full" />,
  },
  {
    step: "03",
    title: "Execution",
    description:
      "Our team moves fast — content live, ads running, pages ranking. No long waiting periods, no fluff deliverables.",
    icon: <Execution className="w-full h-full" />,
  },
  {
    step: "04",
    title: "Optimisation",
    description:
      "We analyse what's working, double down on it, and cut what isn't. Growth compounds every single month.",
    icon: <Optimisation className="w-full h-full" />,
  },
];

// ── Data ──────────────────────────────────────────────────────────────────────
const INDUSTRIESDEEPDIVEDATA = [
  // ── 1. Home Improvement ───────────────────────────────────────────────────
  {
    label: "Home Improvement & Local Services",
    heading: "Get More Calls.",
    headingBlue: "Own Your Local Market.",
    description:
      "Most local service businesses lose jobs to competitors not because they're worse — but because they're invisible online. We fix that.",
    services: [
      {
        icon: <LocalSEO />,
        title: "Local SEO",
        desc: "Rank in Google Maps & the top 3 pack for high-intent searches like 'plumber near me'.",
      },
      {
        icon: <LeadGeneration />,
        title: "Lead Generation",
        desc: "Google Ads & Meta campaigns targeting homeowners actively looking for your service.",
      },
      {
        icon: <ConversionPages />,
        title: "Conversion Pages",
        desc: "Landing pages built to turn visitors into booked jobs — not just traffic.",
      },
    ],
    visual: (
      <div className="rounded-[24px] relative w-full h-full min-h-[340px] rounded-2xl overflow-hidden bg-[linear-gradient(90deg,#48179C_0%,#F65A75_25%,#48179C_50%,#F65A75_75%,#48179C_100%)] text-white">
        <div className="absolute top-[-50px] left-[-50px] w-[200px] h-[200px] bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-[200px] h-[200px] bg-pink-500 opacity-20 blur-3xl rounded-full"></div>
        <div className="p-4 flex items-center">
          <div className="text-sm text-white font-semibold">
            Local Growth Dashboard
          </div>
          <div className="text-white ml-auto text-xs">Last 7 days</div>
        </div>
        <div className="px-4 pb-2">
          <div className="text-xs opacity-60">Total Calls</div>
          <div className="text-3xl font-extrabold">124</div>
          <div className="text-green-400 text-sm font-semibold">
            +38% growth
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 px-4 py-3">
          {[
            { label: "Leads", value: "86" },
            { label: "Jobs Booked", value: "32" },
            { label: "Cost / Lead", value: "₹420" },
            { label: "Conversion", value: "37%" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/5 backdrop-blur-md rounded-xl p-3 border border-white/10"
            >
              <div className="text-xs opacity-60">{item.label}</div>
              <div className="text-lg font-bold">{item.value}</div>
            </div>
          ))}
        </div>
        <div className="px-4 pb-3">
          <div className="text-xs opacity-60 mb-2">Calls Trend</div>
          <div className="h-20 flex items-end gap-1">
            {[30, 50, 40, 70, 60, 80, 100].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-sm"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3 flex justify-between items-center">
          <div>
            <div className="text-xs opacity-60">Google Ranking</div>
            <div className="text-sm font-semibold">#1 Local Pack</div>
          </div>
          <div className="text-green-400 text-xs font-bold">↑ Top Position</div>
        </div>
      </div>
    ),
    isImage: false,
  },

  // ── 3. Ecommerce ──────────────────────────────────────────────────────────
  {
    label: "Ecommerce",
    heading: "More Orders.",
    headingBlue: "Higher Returns.",
    description:
      "Traffic without conversions is just an expense. We build full-funnel strategies that bring buyers to your store and keep them coming back — profitably.",
    services: [
      {
        icon: <ShoppingSEOandProductFeeds />,
        title: "Shopping SEO & Product Feeds",
        desc: "Optimised product listings and Google Shopping feeds that rank where buyers are searching.",
      },
      {
        icon: <MetaandGooglePerformanceAds />,
        title: "Meta & Google Performance Ads",
        desc: "Retargeting and prospecting campaigns with creative that converts browsers into buyers.",
      },
      {
        icon: <EmailandSMSRetention />,
        title: "Email & SMS Retention",
        desc: "Abandoned cart, post-purchase, and win-back flows that maximise lifetime value.",
      },
    ],
    visual: (
      <div
        className="relative w-full h-full min-h-[340px] rounded-[16px] overflow-hidden bg-white"
        style={{ border: "1px solid #ede9ff" }}
      >
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-400 font-medium">
              Store Dashboard
            </div>
            <div className="text-sm font-bold text-gray-800 mt-0.5">
              Ecommerce Analytics
            </div>
          </div>
          <div
            className="text-xs px-2 py-1 rounded-full font-semibold"
            style={{ background: "#f0f0ff", color: "#48179C" }}
          >
            Live
          </div>
        </div>
        {/* KPI strip */}
        <div className="grid grid-cols-3 gap-2 p-3">
          {[
            { label: "Revenue (30d)", val: "₹8.4L", delta: "+52%" },
            { label: "Orders", val: "1,340", delta: "+39%" },
            { label: "ROAS", val: "4.8×", delta: "+1.2×" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl p-3"
              style={{ background: "#fafafa", border: "1px solid #f0f0f0" }}
            >
              <div className="text-xs text-gray-400 leading-tight mb-1">
                {s.label}
              </div>
              <div className="text-base font-extrabold text-gray-800">
                {s.val}
              </div>
              <div
                className="text-xs font-semibold mt-0.5"
                style={{ color: "#16a34a" }}
              >
                {s.delta} ↑
              </div>
            </div>
          ))}
        </div>
        {/* Revenue bar chart */}
        <div className="px-3 pb-2">
          <div className="text-xs text-gray-400 font-medium mb-2">
            Daily Revenue
          </div>
          <div className="h-16 flex items-end gap-1">
            {[35, 55, 45, 65, 50, 80, 70, 90, 75, 95, 85, 100, 88, 100].map(
              (h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    background: i === 13 ? "#48179C" : "#c4b5fd",
                  }}
                />
              ),
            )}
          </div>
        </div>
        {/* Top products */}
        <div className="px-3 pb-3 flex flex-col gap-2">
          <div className="text-xs text-gray-400 font-medium">Top Products</div>
          {[
            {
              name: "Wireless Earbuds Pro",
              rev: "₹1.8L",
              units: "214 units",
              badge: "🔥",
            },
            {
              name: "Leather Wallet Slim",
              rev: "₹92K",
              units: "186 units",
              badge: "",
            },
            {
              name: "Yoga Mat Premium",
              rev: "₹74K",
              units: "152 units",
              badge: "",
            },
          ].map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-3 rounded-xl p-3"
              style={{ background: "#f5f0ff", border: "1px solid #ddd6fe" }}
            >
              <div
                className="w-9 h-9 rounded-lg flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg,#48179C,#7c3aed)",
                }}
              />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-gray-800 truncate">
                  {p.name}
                </div>
                <div className="text-xs text-gray-400">
                  {p.rev} · {p.units}
                </div>
              </div>
              {p.badge && <span className="text-base">{p.badge}</span>}
            </div>
          ))}
        </div>
      </div>
    ),
    isImage: false,
  },

  // ── 4. Dental ─────────────────────────────────────────────────────────────
  {
    label: "Dental Clinics",
    heading: "More Patients.",
    headingBlue: "Fuller Chairs.",
    description:
      "Most dental clinics rely on walk-ins and word-of-mouth. We add a predictable digital engine that books appointments on autopilot — every single month.",
    services: [
      {
        icon: <LocalSEOGoogleMaps />,
        title: "Local SEO & Google Maps",
        desc: "Rank #1 when someone searches 'dentist near me' or 'teeth whitening in [city]'.",
      },
      {
        icon: <AppointmentFocusedGoogleAds />,
        title: "Appointment-Focused Google Ads",
        desc: "Search campaigns targeting high-intent patients ready to book — not just browse.",
      },
      {
        icon: <ReviewReputationManagement />,
        title: "Review & Reputation Management",
        desc: "Automated follow-ups that generate 5-star Google reviews and build patient trust.",
      },
    ],
    visual: (
      <div
        className="relative w-full h-full min-h-[340px] rounded-[16px] overflow-hidden bg-white"
        style={{ boxShadow: "0 4px 32px rgba(246,90,117,0.08)" }}
      >
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-400 font-medium">
              Clinic Dashboard
            </div>
            <div className="text-sm font-bold text-gray-800 mt-0.5">
              SmileCare Dental
            </div>
          </div>
          <div
            className="text-xs px-2 py-1 rounded-full font-semibold"
            style={{ background: "#fff0f3", color: "#F65A75" }}
          >
            This Month
          </div>
        </div>
        {/* KPIs */}
        <div className="grid grid-cols-3 gap-2 p-3">
          {[
            { label: "Appointments", val: "186", delta: "+44%" },
            { label: "New Patients", val: "72", delta: "+38%" },
            { label: "Cost / Patient", val: "₹310", delta: "-22%" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl p-3"
              style={{ background: "#fafafa", border: "1px solid #f0f0f0" }}
            >
              <div className="text-xs text-gray-400 leading-tight mb-1">
                {s.label}
              </div>
              <div className="text-base font-extrabold text-gray-800">
                {s.val}
              </div>
              <div
                className="text-xs font-semibold mt-0.5"
                style={{ color: "#16a34a" }}
              >
                {s.delta} ↑
              </div>
            </div>
          ))}
        </div>
        {/* Appointment slots */}
        <div className="px-3 pb-2">
          <div className="text-xs text-gray-400 font-medium mb-2">
            Today's Appointments
          </div>
          {[
            {
              time: "10:00 AM",
              patient: "Riya Sharma",
              service: "Teeth Whitening",
              status: "Confirmed",
            },
            {
              time: "11:30 AM",
              patient: "Arun Mehta",
              service: "Root Canal",
              status: "Confirmed",
            },
            {
              time: "02:00 PM",
              patient: "Priya Jain",
              service: "Braces Consult",
              status: "Pending",
            },
          ].map((appt) => (
            <div
              key={appt.time}
              className="flex items-center gap-3 rounded-xl p-2.5 mb-1.5"
              style={{ background: "#fff0f3", border: "1px solid #ffd6de" }}
            >
              <div className="text-xs font-bold text-gray-500 w-16 flex-shrink-0">
                {appt.time}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-gray-800">
                  {appt.patient}
                </div>
                <div className="text-xs text-gray-400">{appt.service}</div>
              </div>
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                style={{
                  background:
                    appt.status === "Confirmed" ? "#dcfce7" : "#fef9c3",
                  color: appt.status === "Confirmed" ? "#16a34a" : "#ca8a04",
                }}
              >
                {appt.status}
              </span>
            </div>
          ))}
        </div>
        {/* Google rating */}
        <div
          className="mx-3 mb-3 rounded-xl p-3 flex items-center justify-between"
          style={{ background: "#fff0f3", border: "1px solid #ffd6de" }}
        >
          <div>
            <div className="text-xs text-gray-400">Google Rating</div>
            <div className="text-sm font-bold text-gray-800">
              4.9 ★ · 312 Reviews
            </div>
          </div>
          <div className="text-green-500 text-xs font-bold">
            ↑ +48 this month
          </div>
        </div>
      </div>
    ),
    isImage: false,
  },

  // ── 5. Healthcare ─────────────────────────────────────────────────────────
  {
    label: "Healthcare & Clinics",
    heading: "More Patients.",
    headingBlue: "Built on Trust.",
    description:
      "Patients choose healthcare providers they trust — and trust starts online. We build your digital presence with HIPAA-safe content and strategies that convert.",
    services: [
      {
        icon: <HealthcareLocalSEO />,
        title: "Healthcare Local SEO",
        desc: "Rank for 'doctor near me', speciality searches, and symptom-based queries in your city.",
      },
      {
        icon: <PatientAcquisitionAds />,
        title: "Patient Acquisition Ads",
        desc: "Google Search & Display ads targeting people actively looking for your specialty.",
      },
      {
        icon: <PatientRetentionAndFollowup />,
        title: "Patient Retention & Follow-up",
        desc: "Automated WhatsApp & email reminders that reduce no-shows and drive repeat visits.",
      },
    ],
    visual: (
      <div
        className="relative w-full h-full min-h-[340px] rounded-[16px] overflow-hidden bg-white"
        style={{ border: "1px solid #ede9ff" }}
      >
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-400 font-medium">
              Patient Growth Dashboard
            </div>
            <div className="text-sm font-bold text-gray-800 mt-0.5">
              HealthFirst Clinic
            </div>
          </div>
          <div
            className="text-xs px-2 py-1 rounded-full font-semibold"
            style={{ background: "#f5f0ff", color: "#48179C" }}
          >
            Live
          </div>
        </div>
        {/* KPIs */}
        <div className="grid grid-cols-2 gap-2 p-3">
          {[
            {
              label: "New Patients (Month)",
              val: "148",
              delta: "+42%",
              bg: "#f5f0ff",
              color: "#48179C",
            },
            {
              label: "Avg. Cost / Patient",
              val: "₹280",
              delta: "-19%",
              bg: "#f0fdf4",
              color: "#16a34a",
            },
            {
              label: "Organic Visits",
              val: "9.2K",
              delta: "+61%",
              bg: "#f5f0ff",
              color: "#48179C",
            },
            {
              label: "Appointment Fill",
              val: "91%",
              delta: "+12%",
              bg: "#f0fdf4",
              color: "#16a34a",
            },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl p-3"
              style={{ background: s.bg }}
            >
              <div className="text-xs text-gray-400 mb-1">{s.label}</div>
              <div
                className="text-base font-extrabold"
                style={{ color: s.color }}
              >
                {s.val}
              </div>
              <div
                className="text-xs font-semibold mt-0.5"
                style={{ color: s.color }}
              >
                {s.delta} ↑
              </div>
            </div>
          ))}
        </div>
        {/* Speciality breakdown */}
        <div className="px-3 pb-3">
          <div className="text-xs text-gray-400 font-medium mb-2">
            Patient Source
          </div>
          {[
            { src: "Google Search", pct: 54, color: "#48179C" },
            { src: "Google Maps", pct: 28, color: "#7c3aed" },
            { src: "Referral", pct: 12, color: "#F65A75" },
            { src: "Direct", pct: 6, color: "#a78bfa" },
          ].map((f) => (
            <div key={f.src} className="flex items-center gap-2 mb-1.5">
              <div className="text-xs text-gray-500 w-28 flex-shrink-0">
                {f.src}
              </div>
              <div
                className="flex-1 rounded-full overflow-hidden"
                style={{ background: "#f0f0f0", height: 8 }}
              >
                <div
                  style={{
                    width: `${f.pct}%`,
                    height: "100%",
                    background: f.color,
                    borderRadius: 999,
                  }}
                />
              </div>
              <div className="text-xs font-semibold text-gray-600 w-8 text-right flex-shrink-0">
                {f.pct}%
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    isImage: false,
  },

  // ── 6. Ophthalmology ──────────────────────────────────────────────────────
  {
    label: "Ophthalmology & Eye Care",
    heading: "More Consultations.",
    headingBlue: "Clearer Growth.",
    description:
      "Eye care decisions are high-consideration. Patients research before they book. We ensure your clinic dominates search, earns trust, and fills slots consistently.",
    services: [
      {
        icon: <SpecialtyEyeCareSEO />,
        title: "Specialty Eye Care SEO",
        desc: "Rank for high-intent searches like 'LASIK surgeon near me' and 'cataract specialist [city]'.",
      },
      {
        icon: <HighValueProcedureAds />,
        title: "High-Value Procedure Ads",
        desc: "Google & Meta campaigns targeting patients researching LASIK, cataract, retina, and dry eye treatments.",
      },
      {
        icon: <TrustBuildingContentReviews />,
        title: "Trust-Building Content & Reviews",
        desc: "Patient education content and review generation that positions your clinic as the trusted expert.",
      },
    ],
    visual: (
      <div
        className="relative w-full h-full min-h-[340px] rounded-[16px] overflow-hidden bg-white"
        style={{ boxShadow: "0 4px 32px rgba(246,90,117,0.08)" }}
      >
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-400 font-medium">
              Eye Care Dashboard
            </div>
            <div className="text-sm font-bold text-gray-800 mt-0.5">
              ClearVision Eye Clinic
            </div>
          </div>
          <div
            className="text-xs px-2 py-1 rounded-full font-semibold"
            style={{ background: "#fff0f3", color: "#F65A75" }}
          >
            This Month
          </div>
        </div>
        {/* KPIs */}
        <div className="grid grid-cols-3 gap-2 p-3">
          {[
            { label: "Consultations", val: "118", delta: "+46%" },
            { label: "LASIK Inquiries", val: "54", delta: "+58%" },
            { label: "Cost / Lead", val: "₹340", delta: "-24%" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl p-3"
              style={{ background: "#fafafa", border: "1px solid #f0f0f0" }}
            >
              <div className="text-xs text-gray-400 leading-tight mb-1">
                {s.label}
              </div>
              <div className="text-base font-extrabold text-gray-800">
                {s.val}
              </div>
              <div
                className="text-xs font-semibold mt-0.5"
                style={{ color: "#16a34a" }}
              >
                {s.delta} ↑
              </div>
            </div>
          ))}
        </div>
        {/* Procedure breakdown */}
        <div className="px-3 pb-2">
          <div className="text-xs text-gray-400 font-medium mb-2">
            Leads by Procedure
          </div>
          {[
            { name: "LASIK / SMILE", count: 54, pct: 100, color: "#F65A75" },
            { name: "Cataract Surgery", count: 32, pct: 59, color: "#F65A75" },
            { name: "Retina Consult", count: 18, pct: 33, color: "#F65A75" },
            { name: "Dry Eye Treatment", count: 14, pct: 26, color: "#F65A75" },
          ].map((f) => (
            <div key={f.name} className="flex items-center gap-2 mb-1.5">
              <div className="text-xs text-gray-500 w-32 flex-shrink-0">
                {f.name}
              </div>
              <div
                className="flex-1 rounded-full overflow-hidden"
                style={{ background: "#f0f0f0", height: 8 }}
              >
                <div
                  style={{
                    width: `${f.pct}%`,
                    height: "100%",
                    background: f.color,
                    borderRadius: 999,
                  }}
                />
              </div>
              <div className="text-xs font-semibold text-gray-600 w-6 text-right flex-shrink-0">
                {f.count}
              </div>
            </div>
          ))}
        </div>
        {/* Trust bar */}
        <div
          className="mx-3 mb-3 rounded-xl p-3 flex items-center justify-between"
          style={{ background: "#fff0f3", border: "1px solid #ffd6de" }}
        >
          <div>
            <div className="text-xs text-gray-400">Google Rating</div>
            <div className="text-sm font-bold text-gray-800">
              4.8 ★ · 428 Reviews
            </div>
          </div>
          <div className="text-green-500 text-xs font-bold">
            ↑ +62 this month
          </div>
        </div>
      </div>
    ),
    isImage: false,
  },
];

const STATS = [
  { value: 312, suffix: "%", label: "Average increase in organic leads", sub: "across client portfolio", color: "#732cee" },
  { value: 850, suffix: "+", label: "Keywords ranked on Page 1", sub: "Google & Bing combined", color: "#F65A75" },
  { value: 4.8, suffix: "x", label: "Average ROAS on paid campaigns", sub: "within first 90 days", color: "#34d399", isFloat: true },
  { value: 60, suffix: "%", label: "Reduction in cost per lead", sub: "vs. industry benchmark", color: "#732cee" },
];

function IndustryExpertise() {
  const deepDiveRef = useRef(null);
  return (
    <>
      <IndustryHeroSection
        headingWhite="Industry Expertise That Drives"
        headingPink="Real Growth"
        description1="We craft data-driven strategies tailored to your industry,
                helping you generate leads, increase visibility, and scale
                faster."
        description2=" We combine deep industry understanding with data-driven
                marketing to help businesses grow sustainably, generate
                qualified leads, and dominate search rankings."
                deepDiveRef={deepDiveRef}
      />
      <TrustedBy padding={""} />
      <IndustriesWeServe
        INDUSTRIES={INDUSTRIES}
        headdingBlack="Industries"
        headdingBlue="We Serve"
        description="We work with businesses across verticals — each with unique challenges, and each deserving a strategy built specifically for them."
      />
      <div ref={deepDiveRef}>
      <IndustryDeepDive
        INDUSTRIESDEEPDIVEDATA={INDUSTRIESDEEPDIVEDATA}
        headingBlack="Industry"
        headingBlue="Deep Dive"
        description="A tailored approach for every vertical — because cookie-cutter strategies don't build category leaders."
      />
      </div>
      <HowWeWork cards={STEPS} />
      <ResultsSection STATS ={STATS}/>
      {/* <WhyHOW/> */}
      <ContainerWrapper>
        <PaddingWrapper2 padding="pt-10 md:pt-14  xl:pt-18 ">
          <FaqComponent position="mx-auto" items={FREQUENTLY_QUESTION} />
        </PaddingWrapper2>
      </ContainerWrapper>
      <ReachWithUs />
      {/* <CTASection/> */}
    </>
  );
}

export default IndustryExpertise;
