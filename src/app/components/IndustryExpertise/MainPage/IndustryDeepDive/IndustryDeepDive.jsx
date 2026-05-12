"use client";
import ContainerWrapper from "@/app/components/common/Container/ContainerWrapper";
import H2HeadingWrapper from "@/app/components/common/Container/H2HeadingWrapper";
import PaddingWrapper from "@/app/components/common/Container/PaddingWrapper";
import PaddingWrapper2 from "@/app/components/common/Container/PaddingWrapper2";
import { GetYourFreeConsultationButton } from "@/app/components/common/CtaButtons";
import ConversionPages from "@/app/components/common/Icons/industryExpert/GetMoreCallsOwnYourLocalMarket/ConversionPages";
import LeadGeneration from "@/app/components/common/Icons/industryExpert/GetMoreCallsOwnYourLocalMarket/LeadGeneration";
import LocalSEO from "@/app/components/common/Icons/industryExpert/GetMoreCallsOwnYourLocalMarket/LocalSEO";
import HighValueProcedureAds from "@/app/components/common/Icons/industryExpert/MoreConsultationsClearerGrowth/HighValueProcedureAds";
import SpecialtyEyeCareSEO from "@/app/components/common/Icons/industryExpert/MoreConsultationsClearerGrowth/SpecialtyEyeCareSEO";
import TrustBuildingContentReviews from "@/app/components/common/Icons/industryExpert/MoreConsultationsClearerGrowth/TrustBuildingContentReviews";
import EmailandSMSRetention from "@/app/components/common/Icons/industryExpert/MoreOrdersHigherReturns/EmailandSMSRetention";
import MetaandGooglePerformanceAds from "@/app/components/common/Icons/industryExpert/MoreOrdersHigherReturns/MetaandGooglePerformanceAds";
import ShoppingSEOandProductFeeds from "@/app/components/common/Icons/industryExpert/MoreOrdersHigherReturns/ShoppingSEOandProductFeeds";
import HealthcareLocalSEO from "@/app/components/common/Icons/industryExpert/MorePatientsBuiltonTrust/HealthcareLocalSEO";
import PatientAcquisitionAds from "@/app/components/common/Icons/industryExpert/MorePatientsBuiltonTrust/PatientAcquisitionAds";
import PatientRetentionAndFollowup from "@/app/components/common/Icons/industryExpert/MorePatientsBuiltonTrust/PatientRetentionAndFollowup";
import AppointmentFocusedGoogleAds from "@/app/components/common/Icons/industryExpert/MorePatientsFullerChairs/AppointmentFocusedGoogleAds";
import LocalSEOGoogleMaps from "@/app/components/common/Icons/industryExpert/MorePatientsFullerChairs/LocalSEOGoogleMaps";
import ReviewReputationManagement from "@/app/components/common/Icons/industryExpert/MorePatientsFullerChairs/ReviewReputationManagement";
import Image from "next/image";
import React from "react";

// ── Single Row ────────────────────────────────────────────────────────────────
function IndustryRow({ industry, reverse, index }) {
  const {
    label,
    heading,
    headingBlue,
    description,
    services,
    visual,
    isImage,
    href
  } = industry;
  const accentColor = index % 2 === 0 ? "#48179C" : "#F65A75";
  const accentTextColor = index % 2 === 0 ? "text-primary" : "text-secondary";
  console.log(href,'frefff')
  return (
    <div
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-12 xl:gap-14 items-center`}
      // style={{ borderBottom: "1px solid #f0f0f0" }}
    >
      {/* Visual */}
      <div className="w-full md:w-1/2 flex-shrink-0 rounded-[30px]">
        {isImage ? (
          <Image
            src={visual}
            alt="service"
            height={544}
            width={680}
            className="rounded-[30px]"
          />
        ) : (
          visual
        )}
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 mb-10 md:mb-15 xl:mb-18">
        <span
          className={`${accentTextColor} inline-block text-xs font-bold px-3 py-1 rounded-full mb-4`}
          style={{
            background: `${accentColor}18`,
            border: `1px solid ${accentColor}30`,
          }}
        >
          {label}
        </span>

        <h3
          className="text-h3 font-extrabold leading-tight mb-3"
          style={{ color: "#1a1a2e" }}
        >
          {heading} <span className={`${accentTextColor}`}>{headingBlue}</span>
        </h3>

        <p className="p-default text-gray-500 leading-relaxed mb-6">
          {description}
        </p>

        <div className="flex flex-col gap-4 mb-6 md:mb-10">
          {services.map((s) => (
            <div key={s.title} className="flex gap-3 items-start">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: `${accentColor}12` }}
              >
                {s.icon}
              </div>
              <div>
                <div className="text-sm font-bold text-gray-800">{s.title}</div>
                <div className="text-sm text-gray-500 leading-relaxed mt-0.5">
                  {s.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        <GetYourFreeConsultationButton
          href={href}
          text={`Explore ${label.split(" ")[0]} Strategy`}
        />
      </div>
    </div>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────
export default function IndustryDeepDive({
  INDUSTRIESDEEPDIVEDATA = [],
  headingBlack = "Industry",
  headingBlue = "Deep Dive",
  description = "A tailored approach for every vertical — because cookie-cutter strategies don't build category leaders.",
}) {
  return (
    <ContainerWrapper background="#fff">
      <PaddingWrapper2 padding="pt-10 px-8.75 md:pt-[50px] md:px-12.5 xl:pt-18 xl:px-20">
        <H2HeadingWrapper
          headdingBlack={headingBlack}
          headingBlue={headingBlue}
          description={description}
        />

        <div>
          {INDUSTRIESDEEPDIVEDATA.map((industry, idx) => (
            <IndustryRow
              key={industry.label}
              industry={industry}
              reverse={idx % 2 !== 0}
              index={idx}
            />
          ))}
        </div>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
}
