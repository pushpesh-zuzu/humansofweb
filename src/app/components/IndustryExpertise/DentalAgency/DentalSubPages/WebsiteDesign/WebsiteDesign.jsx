import React from 'react'
import HeroSection from '@/app/components/common/SubServices/HeroSection/HeroSection'
import TrustedBy from '@/app/components/common/TrustedBy/TrustedBy'
import ReachWithUs from '@/app/components/common/Services/ReachWithUs/ReachWithUs'
import WorkWithCards from '@/app/components/common/SubServices/WorkWithCards/WorkWithCards'
import WebsiteBrand from '@/app/components/common/SubServices/WebsiteBrand/WebsiteBrand'
import ServicesTwoGridSection from '@/app/components/common/SubServices/ServicesTwoGridSection/ServicesTwoGridSection'
import CustomGeneration from '@/app/components/Home/CustomGeneration'
import BusineesSell from '@/app/components/common/SubServices/BusineesSell/BusineesSell'
import FaqComponent from '@/app/components/common/SubServices/FaqComponent/FaqComponent'
import trustBuilding from '@/app/components/common/Icons/WebsiteDesign/trust-building.svg'
import easyAppointmentBooking from '@/app/components/common/Icons/WebsiteDesign/easy-appointment-booking.svg'
import fastPerformance from '@/app/components/common/Icons/WebsiteDesign/fast-performance-driven.svg'
import mobileOptimized from '@/app/components/common/Icons/WebsiteDesign/mobile-optimized.svg'
import patientFocused from '@/app/components/common/Icons/WebsiteDesign/patient-focused-design.svg'
import scalableGrowth from '@/app/components/common/Icons/WebsiteDesign/scalable-for-growth.svg'
import customDentalDesign from '@/app/components/common/Icons/WebsiteDesign/customDentalDesign.svg'
import easyAppointment from '@/app/components/common/Icons/WebsiteDesign/easyOpointment.svg'
import fastLoading from '@/app/components/common/Icons/WebsiteDesign/fastLoadingPerformance.svg'
import mobileOptimizeDesign from '@/app/components/common/Icons/WebsiteDesign/mobileOptimizeDesign.svg'
import patientFocussed from '@/app/components/common/Icons/WebsiteDesign/patentFocused.svg'

import discoveryPlanning from '@/app/components/common/Icons/WebsiteDesign/discoverPlanning.svg'
import launchOnging from '@/app/components/common/Icons/WebsiteDesign/launchOnging.svg'
import mocksupDesign from '@/app/components/common/Icons/WebsiteDesign/mockupsDesign.svg'
import testingOptimization from '@/app/components/common/Icons/WebsiteDesign/testingOptimization.svg'
import websiteDevelopment from '@/app/components/common/Icons/WebsiteDesign/websiteDevelopment.svg'


const WORK_WITH_CARDS = [
    {
        title: "Patient-Focused Design",
        description:
            "We design websites that make it easy for patients to explore your services, understand treatments, and confidently choose your clinic.",
        icon: patientFocused
    },
    {
        title: "Trust-Building Layouts",
        description:
            "From testimonials to service clarity, we structure your website to build credibility and reassure patients at every step.",
        icon: trustBuilding
    },
    {
        title: "Mobile-Optimized Experience",
        description:
            "Your website works seamlessly across all devices, ensuring patients can browse and book appointments easily on mobile or desktop.",
        icon: mobileOptimized
    },
    {
        title: "Fast & Performance-Driven",
        description:
            "We build fast-loading websites that reduce drop-offs, improve user experience, and help keep potential patients engaged.",
        icon: fastPerformance
    },
    {
        title: "Easy Appointment Booking",
        description:
            "We simplify the booking process with clear calls-to-action and user-friendly forms that encourage more patient inquiries.",
        icon: easyAppointmentBooking
    },
    {
        title: "Scalable for Growth",
        description:
            "Our websites are built to grow with your clinic, making it easy to add services, locations, and features as your practice expands.",
        icon: scalableGrowth
    }
];

const DENTAL_FEATURE_CARDS = [
    {
        title: "Custom Dental Website Design",
        icon: customDentalDesign,
    },
    {
        title: "Patient-Focused User Experience",
        icon: patientFocussed,
    },
    {
        title: "Mobile-Optimized Design",
        icon: mobileOptimizeDesign,
    },
    {
        title: "Fast Loading & Performance",
        icon: fastLoading,
    },
    {
        title: "Easy Appointment Integration",
        icon: easyAppointment,
    },
];

const DENTAL_POINTS = [
    "We design modern dental websites that create a strong first impression, helping your clinic stand out while building trust with potential patients from the moment they land on your site.",

    "Every website is fully responsive and optimized for mobile devices, ensuring patients can easily browse your services and book appointments from any screen without friction.",

    "Our focus is on performance and usability, creating fast, easy-to-navigate websites that improve patient experience and increase the chances of turning visitors into booked appointments."
];

const STEPS = [
    {
        step: "01",
        title: "Discovery & Planning",
        description: "We understand your clinic, services, and goals to create a clear plan for building a website that attracts and converts patients.",
        icon: discoveryPlanning
    },
    {
        step: "02",
        title: "Mockups & Design Concepts",
        description: "We create modern design concepts and layouts that reflect your brand, build trust, and deliver a seamless and engaging patient experience.",
        icon: mocksupDesign
    },
    {
        step: "03",
        title: "Website Development",
        description: "We turn designs into a fast, responsive, and fully functional website optimized for performance and smooth experience across all devices.",
        icon: websiteDevelopment
    },
    {
        step: "04",
        title: "Testing & Optimization",
        description: "We test your website across devices and browsers, optimizing speed, usability, and functionality to ensure a smooth user experience.",
        icon: testingOptimization
    },
    {
        step: "05",
        title: "Launch & Ongoing Support",
        description: "After launch, we provide continuous support, updates, and improvements to keep your website secure, updated, and performing at its best.",
        icon: launchOnging
    },
];

const DEFAULT_POINTS = [
    {
        number: "1",
        title: "Websites Built for Every Type of Practice",
        description:
            "Whether you're a new clinic or a multi-location practice, we design websites that match your scale, services, and patient expectations.",
    },
    {
        number: "2",
        title: "Consistent Experience Across Locations",
        description:
            "For growing clinics, we create structured websites that maintain brand consistency while making it easy for patients to find and contact the right location.",
    },
    {
        number: "3",
        title: "Designed to Grow With Your Practice",
        description:
            "Our websites are flexible and scalable, allowing you to add new services, locations, and features as your dental practice continues to expand.",
    },
];

const FAQ_DATA = [
    {
        question: "What is dental website development?",
        answer:
            "Dental website development involves creating a fast, user-friendly, and SEO-optimized website for your clinic. It includes design, development, and functionality that help attract patients, build trust, and drive appointment bookings.",
    },
    {
        question: "Can you redesign my existing dental website?",
        answer:
            "Yes. We can redesign your current website to improve design, performance, and user experience, helping you convert more visitors into patients while aligning with modern standards.",
    },
    {
        question: "How much does it cost to design a dental website?",
        answer:
            "The cost depends on your requirements, features, and clinic size. We offer flexible solutions tailored to your goals and budget to ensure you get the best value for your investment.",
    },
    {
        question: "How long does it take to build a dental website?",
        answer:
            "Most dental websites take a few weeks depending on complexity, features, and feedback cycles. We focus on delivering high-quality websites without unnecessary delays.",
    },
    {
        question: "How often should I redesign my dental website?",
        answer:
            "It’s recommended to refresh your website every 2–3 years or when design trends, technology, or your services evolve to keep your clinic competitive and engaging.",
    },
    {
        question: "Do you provide website maintenance and updates?",
        answer:
            "Yes. We offer ongoing maintenance, updates, and support to keep your website secure, fast, and performing well as your clinic grows.",
    },
];
const WebsiteDesign = () => {
    return (
        <>
            <HeroSection
                heading={"Dental Websites That"}
                pinkHeading={"Build Patient Trust"}
                description1={"Your website is often the first impression patients have of your clinic, so we design websites that build trust, highlight your expertise, and encourage visitors to book appointments."}
                description2={"From design to functionality, we create fast, user-friendly dental websites that enhance patient experience, improve credibility, and help your practice grow with confidence."}
                bannerImage="/websiteDesign/dental-website-banner.svg"
                altText={"dental websites that build patient trust"}
            />
            <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
            <ServicesTwoGridSection
                background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
                headdingBlack="Modern Websites for"
                headingBlue="Growing Dental Practices"
                image="/websiteDesign/dentalPractice.svg"
                imageAltText="modern dental website design showing mobile responsiveness and patient experience"
                paragraphs={DENTAL_POINTS}
                headingBlueColor="text-secondary"
                headingBlackColor="text-white"
                limit={5}
            />
            <WorkWithCards
                title="Trusted Dental Website Design"
                highlightedTitle="for Clinics of All Sizes"
                description="Your website should do more than look good—it should build trust and turn visitors into patients. We design dental websites that clearly showcase your services, create confidence, and make booking easy for every visitor."
                cards={WORK_WITH_CARDS}
                showCards={2}
                ctaText="Talk to a Web Design Expert"
                ctaHref=""
                backgroundImage="/IndustryExpertise/seo-banner.webp"
                padding='py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20'
            />
            <WebsiteBrand
                titleStart="Design a Website That"
                highlightedTitle="Builds Trust & Books Patients"
                description="Your website should do more than look good. We design custom dental websites that reflect your clinic, make browsing effortless, and help turn visitors into confident, booked patients."
                ctaText="Book A Call Now"
                ctaHref=""
                cards={DENTAL_FEATURE_CARDS}
            />
            <CustomGeneration
                headdingBlack="Our Process for"
                headingBlue="Dental Website Design & Development"
                steps={STEPS}
                showCtaButton={true}
                ctaText="get my free website plan"
            />
            <BusineesSell
                titleStart="Supporting Clinics of"
                highlightedTitle="Every Size & Stage"
                points={DEFAULT_POINTS}
                ctaText="Speak With An Expert Now"
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

export default WebsiteDesign
