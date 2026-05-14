import React from 'react'
import HeroSection from '@/app/components/common/SubServices/HeroSection/HeroSection'
import TrustedBy from '@/app/components/common/TrustedBy/TrustedBy'
import ServicesTwoGridSection from '@/app/components/common/SubServices/ServicesTwoGridSection/ServicesTwoGridSection';
import Interactivecontent from '@/app/components/common/SubServices/Interactivecontent/Interactivecontent';
import CustomGeneration from '@/app/components/Home/CustomGeneration';
import WorkWithCards from '@/app/components/common/SubServices/WorkWithCards/WorkWithCards';
import ServiceGridSection from '@/app/components/common/SubServices/ServiceGridSection/ServiceGridSection';
import FaqComponent from '@/app/components/common/SubServices/FaqComponent/FaqComponent';
import ReachWithUs from '@/app/components/common/Services/ReachWithUs/ReachWithUs';
import HealthcareSeoAudit from "../../../../common/Icons/healthcare/healthcare-seo-audit.svg";
import LocalCompetitor from "../../../../common/Icons/healthcare/local-competitor-analysis.svg";
import PatientIntentKeyword from "../../../../common/Icons/healthcare/patient-intent-keyword.svg";
import ServicePageOptimization from "../../../../common/Icons/healthcare/service-page-optimization.svg";
import WebsiteOptimization from "../../../../common/Icons/healthcare/content-website-optimization.svg";
import SeoAuthority from "../../../../common/Icons/healthcare/seo-authority-growth.svg";
import AnalyzeYourPresence from "../../../../common/Icons/healthcare/analyze-your-online-presence.svg";
import ImprovePatientExperience from "../../../../common/Icons/healthcare/improve-patient-experience.svg";
import MatchPatient from "../../../../common/Icons/healthcare/match-patient-search-intent.svg";
import MeasureScale from "../../../../common/Icons/healthcare/measure-scale-growth.svg";
import OptimizeService from "../../../../common/Icons/healthcare/optimize-service-visibility.svg";
import OphthalmologySeo from "../../../../common/Icons/healthcare/ophthalmology-seo.svg";
import DentalSeo from "../../../../common/Icons/healthcare/dental-seo.svg";
import DermatologySeo from "../../../../common/Icons/healthcare/dermatology-seo.svg";
import ChiropracticSeo from "../../../../common/Icons/healthcare/chiropractic-seo.svg";
import UrologySeo from "../../../../common/Icons/healthcare/urology-seo.svg";
import PlasticSurgerySeo from "../../../../common/Icons/healthcare/plastic-surgery-seo.svg";
import StrongerPractice from "../../../../common/Icons/healthcare/stronger-practice-visibility.svg";
import MorePatient from "../../../../common/Icons/healthcare/more-patient-appointments.svg";
import ConsistentOrganic from "../../../../common/Icons/healthcare/consistent-organic-traffic.svg";
import SustainableCost from "../../../../common/Icons/healthcare/sustainable-cost-effective-growth.svg";
import ImprovedLocal from "../../../../common/Icons/healthcare/improved-local-discoverability.svg";
import EnhancedPatient from "../../../../common/Icons/healthcare/enhanced-patient-trust-credibility.svg";


const seoService = [
  "At Humans of Web, we help plastic surgery clinics improve online visibility and connect with patients searching for cosmetic and reconstructive procedures online.",

  "Our SEO specialists develop customized strategies focused on improving rankings, attracting qualified traffic, and helping your clinic stand out in competitive search results.",

  "We optimize your website with targeted keywords, local SEO, content enhancements, and technical improvements designed to increase consultation inquiries and patient engagement.",

  "Our goal is to help your plastic surgery clinic build online authority, attract more qualified patients, and achieve consistent long-term digital growth."
];

const PLASTICE_SURGEON_SEO_STRATEGY_ITEMS = [
  {
    title: "Local Plastic Surgery SEO",
    description:
      "We optimize your plastic surgery clinic for local search visibility so nearby patients can easily discover your cosmetic procedures online.",
    icon: HealthcareSeoAudit
  },
  {
    title: "Technical SEO Improvements",
    description:
      "Our technical SEO strategies improve website speed, mobile responsiveness, and overall performance to support stronger search rankings consistently.",
    icon: LocalCompetitor
  },
  {
    title: "Plastic Surgery Market Analysis",
    description:
      "We research competing plastic surgery clinics to identify SEO opportunities and develop strategies that strengthen your online competitive advantage.",
    icon: PatientIntentKeyword
  },
  {
    title: "Advanced On-Page Optimization",
    description:
      "We optimize website structure, service pages, metadata, and content to improve keyword relevance and patient engagement across your website.",
    icon: ServicePageOptimization
  },
  {
    title: "High-Intent Keyword Targeting",
    description:
      "Our SEO specialists research cosmetic procedure keywords that align with patient search intent and increase qualified traffic opportunities online.",
    icon: WebsiteOptimization
  },
  {
    title: "Authority & Trust Building",
    description:
      "We strengthen your clinic’s online authority through ethical SEO methods and strategic link-building practices designed for long-term growth.",
    icon: SeoAuthority
  },
  {
    title: "SEO Content Optimization",
    description:
      "We create optimized plastic surgery content that improves search visibility, educates potential patients, and supports consultation inquiries online.",
    icon: ServicePageOptimization
  },
];

const PLASTIC_SURGEON_STEPS = [
  {
    step: "01",
    title: "Analyze Clinic SEO Performance",
    description:
      "We evaluate your plastic surgery website’s SEO health, search visibility, and online presence to identify growth opportunities and ranking improvements.",
    icon: AnalyzeYourPresence
  },
  {
    step: "02",
    title: "Optimize Cosmetic Service Pages",
    description:
      "We improve procedure pages, metadata, and keyword targeting so your cosmetic services appear in relevant patient search results online.",
    icon: OptimizeService
  },
  {
    step: "03",
    title: "Target High-Intent Patient Searches",
    description:
      "Our SEO strategies focus on matching your content with the cosmetic procedure keywords patients actively search for online across search engines.",
    icon: MatchPatient
  },
  {
    step: "04",
    title: "Monitor SEO Growth Performance",
    description:
      "We track rankings, traffic, and engagement metrics to refine SEO strategies and support long-term plastic surgery clinic growth online.",
    icon: MeasureScale
  },
  {
    step: "05",
    title: "Improve Website User Experience",
    description:
      "We optimize website structure, mobile responsiveness, and navigation to create smooth browsing experiences that encourage consultation inquiries consistently.",
    icon: ImprovePatientExperience
  },
];

const WORK_WITH_CARDS = [
  {
    title: "Local Plastic Surgery SEO",
    description:
      "We optimize your plastic surgery clinic for local search visibility so nearby patients can easily discover your cosmetic procedures online.",
    icon: OphthalmologySeo
  },
  {
    title: "Technical Website SEO",
    description:
      "Our team improves website speed, responsiveness, and technical SEO performance to support stronger rankings and seamless user experiences.",
    icon: DentalSeo
  },
  {
    title: "Cosmetic Procedure Keywords",
    description:
      "We research high-intent cosmetic procedure keywords that help your clinic attract qualified patients searching for plastic surgery services.",
    icon: DermatologySeo
  },
  {
    title: "On-Page SEO Improvements",
    description:
      "We optimize service pages, titles, metadata, and content structure to improve visibility and increase patient engagement across your website.",
    icon: ChiropracticSeo
  },
  {
    title: "SEO Authority Growth",
    description:
      "We strengthen your clinic’s online authority through strategic SEO practices and quality link-building methods designed for long-term growth.",
    icon: UrologySeo
  },
  {
    title: "Optimized SEO Content",
    description:
      "We create SEO-focused plastic surgery content that improves rankings, educates potential patients, and supports consultation inquiries online.",
    icon: PlasticSurgerySeo
  },
];

const SERVICE_GRID_ITEMS = [
  {
    title: "Customized SEO Strategy Planning",
    description:
      "We develop tailored plastic surgery SEO strategies focused on your procedures, target audience, and clinic growth objectives online.",
    icon: StrongerPractice
  },
  {
    title: "Complete SEO Website Analysis",
    description:
      "Our team reviews website structure, SEO performance, and analytics data to create a strong foundation for long-term search visibility.",
    icon: MorePatient
  },
  {
    title: "Advanced SEO Recommendations",
    description:
      "We provide strategic SEO recommendations for technical optimization, keyword targeting, and content improvements that strengthen online performance.",
    icon: ConsistentOrganic
  },
  {
    title: "SEO Optimization Implementation",
    description:
      "We implement on-page SEO, local search optimization, and authority-building strategies designed to increase traffic and consultation inquiries.",
    icon: SustainableCost
  },
  {
    title: "Improved Local Search Presence",
    description:
      "We optimize your clinic’s visibility across Google search, maps, and local listings to attract nearby cosmetic surgery patients online.",
    icon: ImprovedLocal
  },
  {
    title: "SEO Monitoring & Reporting",
    description:
      "We continuously track rankings, traffic, and SEO performance while providing transparent insights that support long-term clinic growth.",
    icon: EnhancedPatient
  },
];

const FAQ_DATA = [
  {
    question: "Why do plastic surgeons need SEO services?",
    answer:
      "SEO helps plastic surgery clinics improve online visibility, attract qualified consultation leads, and connect with patients searching for cosmetic procedures online.",
  },
  {
    question: "Can SEO help increase plastic surgery consultations?",
    answer:
      "Yes, targeted SEO strategies improve search rankings and website visibility, helping your clinic generate more consultation inquiries from potential patients.",
  },
  {
    question: "How does local SEO benefit plastic surgery clinics?",
    answer:
      "Local SEO helps your clinic appear in Google search and maps, making it easier for nearby patients to discover your cosmetic surgery services.",
  },
  {
    question: "What type of keywords are used in plastic surgery SEO?",
    answer:
      "Plastic surgery SEO focuses on high-intent keywords related to cosmetic procedures, treatments, and patient searches to attract qualified website traffic.",
  },
  {
    question: "Do you provide ongoing SEO optimization services?",
    answer:
      "Yes, we continuously monitor rankings, optimize website performance, and refine SEO strategies to support long-term plastic surgery clinic growth.",
  },
];

const SeoServices = () => {
  return (
    <>
      <HeroSection
        heading={"Plastic Surgery SEO That"}
        pinkHeading={"Drives More Consultations"}
        description1={
          "At Humans of Web, we help plastic surgery clinics strengthen online visibility, attract qualified leads, and connect with patients searching for cosmetic procedures online."
        }
        description2={
          "Our plastic surgeon SEO strategies focus on improving search rankings, increasing website traffic, and generating more consultation opportunities for your clinic."
        }
        bannerImage="/plasticSurgeon/plastic-surgeon-pencil-men.webp"
        altText={
          "Plastic surgeon SEO services improving online visibility and consultation growth"
        }
        imageHeight="h-[200px] md:h-[373px]"
        imageClass="object-contain object-center"
      />
      <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
      <ServicesTwoGridSection
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
        headdingBlack="Strategic Plastic Surgery SEO"
        headingBlue="For Clinic Growth"
        image="/plasticSurgeon/plastice-surgeon-women.webp"
        paragraphs={seoService}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
        limit={5}
        ctaText='Grow Your Plastic Surgery Clinic'
        marginBottom="lg:mb-21"
      />

      <Interactivecontent
        headingStart="SEO Solutions For"
        headingEnd="Plastic Surgery Clinics"
        items={PLASTICE_SURGEON_SEO_STRATEGY_ITEMS}
        ctaText="Boost Your Search Visibility"
        ctaHref=""
        padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20"
      />
      <CustomGeneration
        headdingBlack="SEO Strategies That Drive"
        headingBlue="Plastic Surgery Growth"
        steps={PLASTIC_SURGEON_STEPS}
      />
      <WorkWithCards
        title="Advanced SEO Services For"
        highlightedTitle="Plastic Surgery Clinics"
        description=""
        cards={WORK_WITH_CARDS}
        showCards={3}
        ctaText="Increase Consultation Inquiries"
        ctaHref=""
      />
      <ServiceGridSection
        title="SEO Strategies Designed For"
        highlightedTitle="Plastic Surgery Success"
        services={SERVICE_GRID_ITEMS}
        ctaText="Grow Your Plastic Surgery Clinic"
        ctaHref=""
      />
      <FaqComponent
        title="Frequently asked questions"
        items={FAQ_DATA}
        defaultOpen={0}
        position="mx-auto"
      />
      <ReachWithUs />
    </>
  )
}

export default SeoServices
