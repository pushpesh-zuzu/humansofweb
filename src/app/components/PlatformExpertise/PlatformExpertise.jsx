"use client";
import React, { useRef } from "react";
// import IndustryHeroSection from "../HeroSection/HeroSection";
// import TrustedBy from "../common/TrustedBy/TrustedBy";
// import IndustriesWeServe from "./IndustriesWeServe/IndustriesWeServe";
// import IndustryDeepDive from "./IndustryDeepDive/IndustryDeepDive";
// import HowWeWork from "../HowWeWork/HowWeWork";
// import ResultsSection from "./ResultsSection/ResultsSection";
import FaqComponent from "../common/SubServices/FaqComponent/FaqComponent";
import ReachWithUs from "../common/Services/ReachWithUs/ReachWithUs";

// temporary icons (same as industry page for now)
import IndustryResearch from "../common/Icons/industryExpert/howWeWork/IndustryResearch";
import StrategyPlanning from "../common/Icons/industryExpert/howWeWork/StrategyPlanning";
import Execution from "../common/Icons/industryExpert/howWeWork/Execution";
import Optimisation from "../common/Icons/industryExpert/howWeWork/Optimisation";

import ShoppingSEOandProductFeeds from "../common/Icons/industryExpert/MoreOrdersHigherReturns/ShoppingSEOandProductFeeds";
import MetaandGooglePerformanceAds from "../common/Icons/industryExpert/MoreOrdersHigherReturns/MetaandGooglePerformanceAds";
import EmailandSMSRetention from "../common/Icons/industryExpert/MoreOrdersHigherReturns/EmailandSMSRetention";

import LocalSEO from "../common/Icons/industryExpert/GetMoreCallsOwnYourLocalMarket/LocalSEO";
import LeadGeneration from "../common/Icons/industryExpert/GetMoreCallsOwnYourLocalMarket/LeadGeneration";
// import ConversionPages from "../../common/Icons/industryExpert/GetMoreCallsOwnYourLocalMarket/ConversionPages";

import SpecialtyEyeCareSEO from "../common/Icons/industryExpert/MoreConsultationsClearerGrowth/SpecialtyEyeCareSEO";
import HighValueProcedureAds from "../common/Icons/industryExpert/MoreConsultationsClearerGrowth/HighValueProcedureAds";
import TrustBuildingContentReviews from "../common/Icons/industryExpert/MoreConsultationsClearerGrowth/TrustBuildingContentReviews";
import ContainerWrapper from "../common/Container/ContainerWrapper";
import PaddingWrapper2 from "../common/Container/PaddingWrapper2";
import ConversionPages from "../common/Icons/industryExpert/GetMoreCallsOwnYourLocalMarket/ConversionPages";
import IndustryHeroSection from "../IndustryExpertise/MainPage/HeroSection/HeroSection";
import HowWeWork from "../IndustryExpertise/MainPage/HowWeWork/HowWeWork";
import IndustriesWeServe from "../IndustryExpertise/MainPage/IndustriesWeServe/IndustriesWeServe";
import TrustedBy from "../common/TrustedBy/TrustedBy";
import IndustryDeepDive from "../IndustryExpertise/MainPage/IndustryDeepDive/IndustryDeepDive";
import ResultsSection from "../IndustryExpertise/MainPage/ResultsSection/ResultsSection";
import { PLATFORMS } from "./plateformExpertiseData";
import HowItWorkIndustryExpert from "../IndustryExpertise/MainPage/HowWeWork/HowWeWorkIndustryExpert";
import CreativeContentDevelopment from "../common/Icons/industryExpert/howWeWork/CreativeContentDevelopment";

export const FREQUENTLY_QUESTION = [
  {
    key: "1",
    question: "Do you work with specific platforms only?",
    answer: `
      We work across leading CMS, CRM, and AI platforms including Shopify, WordPress, Zoho, HubSpot, Claude, ChatGPT, and more. Every solution is tailored to the platform your business already uses.
    `,
  },
  {
    key: "2",
    question: "Can you customise platforms based on business workflows?",
    answer: `
      Yes. We customise workflows, automations, dashboards, integrations, and customer journeys based on how your business operates — not generic templates.
    `,
  },
  {
    key: "3",
    question: "Do you help with migration and integrations?",
    answer: `
      Absolutely. We help businesses migrate between platforms, integrate third-party tools, and improve operational efficiency without disrupting existing systems.
    `,
  },
];

const STEPS = [
  {
    step: "01",
    title: "Platform Audit",
    description:
      "We analyse your current setup, workflows, bottlenecks, integrations, and performance gaps before planning improvements.",
    icon: <IndustryResearch className="w-full h-full" />,
  },
  {
    step: "02",
    title: "Solution Mapping",
    description:
      "We create platform-specific strategies tailored to your operations, customer journey, and long-term sustainable business growth goals.",
    icon: <StrategyPlanning className="w-full h-full" />,
  },
  {
    step: "03",
    title: "Automation",
    description:
      "We build custom automations, integrations, and scalable workflows that simplify operations and improve team efficiency.",
    icon: <CreativeContentDevelopment className="w-full h-full" />,
  },

  {
    step: "04",
    title: "Implementation",
    description:
      "From CRM customisation to CMS optimisation and AI integrations — our team executes without slowing your business down.",
    icon: <Execution className="w-full h-full" />,
  },
  {
    step: "05",
    title: "Optimisation",
    description:
      "We continuously improve workflows, automations, and user experiences to maximise efficiency and growth.",
    icon: <Optimisation className="w-full h-full" />,
  },
];
const INDUSTRIESDEEPDIVEDATA = [
  // CMS
  {
    label: "CMS Platforms",
    href: "/cms-digital-marketing-agency",
    heading: "Smarter Websites.",
    headingBlue: "Better Conversions.",
    description:
      "Your CMS should do more than manage pages. We optimise platforms like Shopify and WordPress to improve speed, SEO, user experience, and conversions.",

    services: [
      {
        icon: <ShoppingSEOandProductFeeds />,
        title: "Shopify",
        desc: "Conversion-focused Shopify experiences designed to improve sales, retention, and store performance.",
      },
      {
        icon: <MetaandGooglePerformanceAds />,
        title: "WordPress",
        desc: "Flexible and scalable WordPress solutions built for visibility, lead generation, and long-term growth.",
      },
    ],

    visual: (
      <div className="relative w-full min-h-[340px] rounded-[20px] overflow-hidden bg-white border border-[#ede9ff]">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-400 font-medium">
              CMS Dashboard
            </div>
            <div className="text-sm font-bold text-gray-800 mt-0.5">
              Website Performance
            </div>
          </div>

          <div
            className="text-xs px-2 py-1 rounded-full font-semibold"
            style={{ background: "#f5f0ff", color: "#48179C" }}
          >
            Live
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 p-4">
          {[
            { label: "Speed Score", value: "96%" },
            { label: "SEO Health", value: "92%" },
            { label: "Conversion Rate", value: "4.8%" },
            { label: "Bounce Rate", value: "-28%" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl p-3 bg-[#fafafa] border border-[#f1f1f1]"
            >
              <div className="text-xs text-gray-400">{item.label}</div>
              <div className="text-lg font-bold text-gray-800 mt-1">
                {item.value}
              </div>
            </div>
          ))}
        </div>

        <div className="px-4 pb-4">
          <div className="text-xs text-gray-400 mb-2">Weekly Performance</div>

          <div className="h-20 flex items-end gap-1">
            {[35, 50, 40, 70, 65, 80, 100].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-[#48179C] to-[#8b5cf6]"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    ),

    isImage: false,
  },

  // CRM
  {
    label: "CRM Customisation Services",
    href: "/crm-customisation-digital-marketing-agency,",
    heading: "Better Systems.",
    headingBlue: "Stronger Relationships.",
    description:
      "Modern CRMs should simplify operations, automate repetitive work, and improve customer relationships. We customise CRM platforms around your workflow.",

    services: [
      {
        icon: <LocalSEO />,
        title: "Zoho",
        desc: "Custom workflows, automations, and reporting systems tailored to your sales and operations.",
      },
      {
        icon: <LeadGeneration />,
        title: "Vtiger CRM",
        desc: "Optimised lead tracking and pipeline management designed to improve follow-ups and conversions.",
      },
      {
        icon: <ConversionPages />,
        title: "Hubspot CRM",
        desc: "Scalable HubSpot setups focused on marketing automation, customer journeys, and business growth.",
      },
    ],

    visual: (
      <div className="rounded-[20px] overflow-hidden bg-[linear-gradient(135deg,#48179C,#F65A75)] text-white min-h-[340px] relative">
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="text-xs opacity-60">CRM Dashboard</div>
            <div className="text-sm font-bold mt-0.5">Sales & Automation</div>
          </div>

          <div className="text-xs font-semibold bg-white/10 px-2 py-1 rounded-full">
            Active
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 p-4">
          {[
            { label: "Leads Managed", value: "2.4K" },
            { label: "Automation Rate", value: "78%" },
            { label: "Follow-up Speed", value: "+42%" },
            { label: "Team Efficiency", value: "+36%" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/10 border border-white/10 rounded-xl p-3 backdrop-blur-md"
            >
              <div className="text-xs opacity-70">{item.label}</div>
              <div className="text-lg font-bold mt-1">{item.value}</div>
            </div>
          ))}
        </div>

        <div className="px-4 pb-4">
          <div className="text-xs opacity-70 mb-2">Pipeline Activity</div>

          <div className="space-y-2">
            {[78, 62, 92, 55].map((w, i) => (
              <div
                key={i}
                className="h-3 rounded-full bg-white/10 overflow-hidden"
              >
                <div
                  className="h-full bg-white rounded-full"
                  style={{ width: `${w}%` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    ),

    isImage: false,
  },

  // AI
  {
    label: "AI Services",
    href: "/artificial-digital-services-agency",
    heading: "Smarter Automation.",
    headingBlue: "Faster Execution.",
    description:
      "AI should improve productivity, reduce manual work, and accelerate decision-making. We integrate AI tools that support real business operations.",

    services: [
      {
        icon: <SpecialtyEyeCareSEO />,
        title: "Claude",
        desc: "AI workflows designed for research, content handling, business assistance, and operational support.",
      },
      {
        icon: <HighValueProcedureAds />,
        title: "Kilocode",
        desc: "AI-powered development and workflow solutions focused on speed, automation, and execution efficiency.",
      },
      {
        icon: <TrustBuildingContentReviews />,
        title: "ChatGPT",
        desc: "Custom AI integrations for support systems, content generation, automation, and internal productivity.",
      },
      {
        icon: <EmailandSMSRetention />,
        title: "Bolt",
        desc: "Rapid AI-assisted building systems that help businesses prototype and launch faster.",
      },
    ],

    visual: (
      <div className="relative min-h-[340px] rounded-[20px] overflow-hidden bg-black text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#7c3aed,transparent_60%)]"></div>

        <div className="relative p-4 border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="text-xs opacity-60">AI Workspace</div>
            <div className="text-sm font-bold mt-0.5">
              Automation Intelligence
            </div>
          </div>

          <div className="text-xs font-semibold bg-white/10 px-2 py-1 rounded-full">
            AI Active
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 p-4">
          {[
            { label: "Tasks Automated", value: "1.8K" },
            { label: "Time Saved", value: "64%" },
            { label: "AI Requests", value: "12K" },
            { label: "Execution Speed", value: "+58%" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl p-3 border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <div className="text-xs opacity-60">{item.label}</div>
              <div className="text-lg font-bold mt-1">{item.value}</div>
            </div>
          ))}
        </div>

        <div className="px-4 pb-4">
          <div className="text-xs opacity-60 mb-2">AI Activity</div>

          <div className="flex items-end gap-1 h-20">
            {[20, 35, 60, 45, 70, 85, 100].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-[#7c3aed] to-[#F65A75]"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    ),

    isImage: false,
  },
];

const STATS = [
  {
    value: 68,
    suffix: "%",
    label: "Increase in workflow efficiency",
    sub: "after platform optimisation",
    color: "#732cee",
  },
  {
    value: 4.6,
    suffix: "x",
    label: "Average automation improvement",
    sub: "across CRM & AI systems",
    color: "#34d399",
    isFloat: true,
  },
  {
    value: 52,
    suffix: "%",
    label: "Faster operational execution",
    sub: "through AI integrations",
    color: "#F65A75",
  },
  {
    value: 91,
    suffix: "%",
    label: "Platform performance score",
    sub: "across CMS implementations",
    color: "#732cee",
  },
];

function PlatformExpertise() {
  const deepDiveRef = useRef(null);

  return (
    <>
      <IndustryHeroSection
        banner="/PlatformExpertise/platformExpertHero.webp"
        headingWhite="Platform Expertise That Drives"
        headingPink="Real Growth"
        description1="We build platform-focused strategies that improve workflows, automate operations, and help businesses scale faster."
        description2="From CMS and CRM systems to AI-powered workflows, we create solutions designed around performance, efficiency, and long-term growth."
        deepDiveRef={deepDiveRef}
      />

      <TrustedBy padding={""} />

      <IndustriesWeServe
        INDUSTRIES={PLATFORMS}
        headdingBlack="Platforms"
        headdingBlue="We Specialise In"
        description="We work across leading CMS, CRM, and AI platforms — building solutions tailored to your workflows, operations, and growth goals."
      />
      <div ref={deepDiveRef}>
        <IndustryDeepDive
          INDUSTRIESDEEPDIVEDATA={INDUSTRIESDEEPDIVEDATA}
          headingBlack="Platform"
          headingBlue="Deep Dive"
          description="Every platform requires a different strategy. We customise systems around performance, automation, scalability, and user experience."
        />
      </div>

      <HowItWorkIndustryExpert steps={STEPS} />

      <ResultsSection STATS={STATS} />

      <ContainerWrapper>
        <PaddingWrapper2 padding="pt-10 md:pt-14 xl:pt-18">
          <FaqComponent position="mx-auto" items={FREQUENTLY_QUESTION} />
        </PaddingWrapper2>
      </ContainerWrapper>

      <ReachWithUs />
    </>
  );
}

export default PlatformExpertise;
