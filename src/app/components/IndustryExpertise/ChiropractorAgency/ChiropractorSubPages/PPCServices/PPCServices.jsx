import React from 'react'
import ReachWithUs from '@/app/components/common/Services/ReachWithUs/ReachWithUs'
import FaqComponent from '@/app/components/common/SubServices/FaqComponent/FaqComponent'
import HeroSection from '@/app/components/common/SubServices/HeroSection/HeroSection'
import ServiceGridSection from '@/app/components/common/SubServices/ServiceGridSection/ServiceGridSection'
import ServicesTwoGridSection from '@/app/components/common/SubServices/ServicesTwoGridSection/ServicesTwoGridSection'
import WorkWithCards from '@/app/components/common/SubServices/WorkWithCards/WorkWithCards'
import TrustedBy from '@/app/components/common/TrustedBy/TrustedBy'
import CustomGeneration from '@/app/components/Home/CustomGeneration'


const CHIROPRACTOR_PPC_MANAGEMENT = [
  "At Humans of Web, we help chiropractic clinics connect with potential patients through targeted PPC campaigns designed to increase visibility and generate high-quality leads.",

  "Our PPC specialists create customized advertising strategies focused on local patient searches, optimized landing pages, and audience targeting to improve conversions and appointment requests.",
  "We continuously analyze campaign performance, optimize ad budgets, and refine targeting strategies to maximize ROI, increase patient inquiries, and support steady business growth.",
  "We create compelling ad copy and conversion-focused campaigns that help chiropractic clinics attract more qualified leads and increase patient appointment bookings.",
];

const WORK_WITH_CARDS = [
  {
    title: "Local PPC Campaign Strategies",
    description:
      "We create targeted PPC campaigns that help chiropractic clinics reach nearby patients searching for chiropractic treatments and wellness services.",
  },
  {
    title: "High-Intent Audience Targeting",
    description:
      "Our PPC specialists focus on reaching users actively looking for chiropractic care, helping generate qualified leads and stronger conversion opportunities.",
  },
  {
    title: "Conversion-Focused Landing Pages",
    description:
      "We optimize landing pages to improve user engagement, encourage appointment bookings, and turn ad traffic into real patient inquiries.",
  },
  {
    title: "Advanced Ad Performance Optimization",
    description:
      "We continuously refine ad creatives, bidding strategies, and targeting settings to improve campaign performance and maximize advertising results.",
  },
  {
    title: "Transparent PPC Reporting",
    description:
      "Our detailed reporting helps chiropractic clinics track leads, conversions, and campaign growth with clear insights into advertising performance.",
  },
  {
    title: "Long-Term Patient Acquisition",
    description:
      "We build scalable PPC strategies designed to increase patient appointments, strengthen online visibility, and support sustainable clinic growth.",
  }
];

const SERVICE_GRID_ITEMS = [
  {
    title: "Local Chiropractic Ad Campaigns",
    description:
      "We create highly targeted PPC campaigns that help chiropractic clinics reach nearby patients searching for pain relief and wellness treatments.",
  },
  {
    title: "Patient-Intent Keyword Targeting",
    description:
      "Our PPC specialists focus on high-converting search terms that connect your clinic with people actively looking for chiropractic care services.",
  },
  {
    title: "Lead-Driven Landing Page Optimization",
    description:
      "We optimize landing pages to improve user engagement, build trust, and increase appointment inquiries from paid advertising traffic.",
  },
  {
    title: "Geo-Targeted PPC Advertising",
    description:
      "Our location-based ad strategies help chiropractic clinics appear in front of potential patients within targeted service areas and local communities.",
  },
  {
    title: "Campaign Performance Management",
    description:
      "We continuously monitor ad performance, optimize bidding strategies, and improve targeting to maximize lead generation and advertising ROI.",
  },
  {
    title: "Remarketing & Patient Retargeting",
    description:
      "We use retargeting campaigns to reconnect with interested visitors and encourage them to return and book chiropractic appointments.",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Identify Local Patient Search Trends",
    description:
      "We research chiropractic-related search behavior and local keywords to help your ads reach patients actively looking for chiropractic care services.",
  },
  {
    step: "02",
    title: "Build High-Converting PPC Campaigns",
    description:
      "Our team creates customized PPC campaigns focused on chiropractic treatments, local targeting, and patient acquisition to improve lead quality and campaign performance.",
  },
  {
    step: "03",
    title: "Create Persuasive Ad Copy",
    description:
      "We develop engaging ad messaging that highlights your chiropractic expertise, treatment benefits, and patient-focused services to drive more clicks and inquiries.",
  },
  {
    step: "04",
    title: "Enhance Landing Page User Experience",
    description:
      "We optimize landing pages with strong calls-to-action, faster performance, engaging patient-focused content, and user-friendly layouts designed to increase appointment bookings.",
  },
  {
    step: "05",
    title: "Track Results & Refine Campaigns",
    description:
      "We continuously monitor campaign metrics, improve targeting strategies, and optimize ad performance to maximize ROI and support long-term clinic growth.",
  },
];

const FAQ_DATA = [
  {
    question: "How can PPC advertising help chiropractic clinics grow?",
    answer:
      "PPC advertising helps chiropractic clinics reach potential patients instantly through targeted ads, increasing visibility, website traffic, and appointment inquiries.",
  },
  {
    question: "Why should chiropractors invest in Google Ads?",
    answer:
      "Google Ads helps chiropractors appear at the top of search results when people are actively searching for chiropractic treatments and wellness services nearby.",
  },
  {
    question: "Do chiropractic PPC campaigns generate qualified leads?",
    answer:
      "Yes, targeted PPC campaigns focus on high-intent searches, helping chiropractic clinics attract patients who are more likely to book consultations and treatments.",
  },
  {
    question: "How do you optimize PPC campaigns for better results?",
    answer:
      "We improve campaign performance through keyword optimization, audience targeting, ad testing, bid management, and conversion-focused landing page strategies.",
  },
  {
    question: "Can PPC campaigns target specific local areas?",
    answer:
      "Yes, we use geo-targeting strategies to ensure your chiropractic ads reach nearby patients within your preferred service locations and communities.",
  },
];

const PPCServices = () => {
  return (
    <>
      <HeroSection
        heading={"PPC Services for"}
        pinkHeading={"Chiropractic Clinics"}
        description1={
          "At Humans of Web, we build performance-focused PPC campaigns that help chiropractic clinics connect with patients searching for trusted chiropractic care online."
        }
        description2={
          "Our paid advertising strategies are designed to increase visibility, drive quality leads, and support consistent appointment growth for your chiropractic business."
        }
        bannerImage="/chiropractor/chiropractor-ppc-banner.webp"
        altText={
          "Chiropractor PPC services helping clinics attract more patient appointments"
        }
        imageHeight="h-[180px] md:h-[373px]"
        imageClass="object-cover object-center lg:min-h-[410px]"
      />
      <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
      <ServicesTwoGridSection
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
        headdingBlack="Performance-Driven PPC For"
        headingBlue="Chiropractic Clinics"
        image="/chiropractor/doctor-consulting.webp"
        imageAltText="Chiropractor PPC campaign strategies increasing patient leads and appointment bookings"
        paragraphs={CHIROPRACTOR_PPC_MANAGEMENT}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
        limit={5}
        marginBottom="lg:mb-19"
      />
      <WorkWithCards
        title="Why Chiropractic Clinics Trust"
        highlightedTitle="Our PPC Experts?"
        description=""
        cards={WORK_WITH_CARDS}
        showCards={3}
        ctaText="Boost Your PPC Performance"
        ctaHref=""
        backgroundImage="/IndustryExpertise/seo-banner.webp"
        padding='py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20'
      />
      <ServiceGridSection
        title="Powerful PPC Strategies For"
        highlightedTitle="Chiropractic Growth"
        services={SERVICE_GRID_ITEMS}
        backgroundImage="/IndustryExpertise/seo-banner.webp"
        ctaText="Generate More Patient Leads"
        ctaHref=""
      />
      <CustomGeneration
        headdingBlack="PPC Campaigns That"
        headingBlue="Increase Chiropractic Leads"
        steps={STEPS}
      />
      <FaqComponent
        title="Frequently asked questions"
        items={FAQ_DATA}
        defaultOpen={0}
        position="mx-auto"
      />
      <ReachWithUs />
    </>)
}

export default PPCServices