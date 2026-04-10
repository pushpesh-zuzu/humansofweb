import React from "react";
import HeroSectionServices from "../../common/Services/HeroSectionServices/HeroSectionServices";
import TrustedBy from "../../common/TrustedBy/TrustedBy";
import ServicesTwoGridDescriptionAndImage from "../../common/Services/ServicesTwoGridDescriptionAndImage/ServicesTwoGridDescriptionAndImage";
import {
  dentalTrustPara,
  marketAnalyzerParaDental,
  marketingServicesParaDental,
  servicesDental,
  smarterWayData,
  WhyChooseDentalService,
} from "./dentalAgencyData";
import ServicesGridSection from "../../common/Services/ServicesGridSection/ServicesGridSection";
import ReachWithUs from "../../common/Services/ReachWithUs/ReachWithUs";
import GrowthStrategiesSection from "./GrowthStrategiesSection";
import PillarsSection from "../../common/Services/PillarSection/PillarSection";
import WhyChooseDentalServce from "./WhyChooseDentalServce";
import WorkingWithUs from "../../Home/WorkingWithUs";

function DentalAgency() {
  return (
    <>
      <HeroSectionServices
        heading1="Turn Patient Searches "
        heading2="Into Real Appointments"
        bgImag="/IndustryExpertise/dentalAgency/dentalAgencyHero.webp"
        description1="Every day people search online for trusted dental care, from checkups to urgent treatments, but success depends on being seen and chosen at the right moment."
        description2="At Humans of Web, we help dental clinics connect with patients through SEO, local optimization, and smart advertising to drive visibility, bookings, and consistent growth."
        altText="dentalAgency Agency"
      />
      <TrustedBy padding={"py-5 px-[35px] px-0 md:py-12 xl:py-15"} />
      <ServicesTwoGridDescriptionAndImage
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
        // ctaText="Behind Every Full Schedule Is a Dental Practice"
        headdingBlack="Full Schedules "
        headingBlue="Start Here"
        image="/IndustryExpertise/dentalAgency/dentalHero.webp"
        paragraphs={marketAnalyzerParaDental}
        headingBlueColor='text-secondary'
        headingBlackColor="text-white"
      />
      {/* <GrowthStrategiesSection /> */}
      <PillarsSection />
      <ServicesGridSection
        background="#fafafa"
        services={servicesDental}
        headdingBlack={"Industries "}
        headingBlue={"We Serve"}
      />
      {/* <ServicesTwoGridDescriptionAndImage
        // ctaText="Behind Every Full Schedule Is a Dental Practice"
        headdingBlack="Everything Your Practice Needs to Grow — In One Place"
        headingBlue="See what's working, fix what isn't, and make every decision with confidence"
        image="/IndustryExpertise/eCommerce/marketAnalyzer.webp"
        paragraphs={marketAnalyzerParaDental}
      /> */}
      {/* <PillarsSection
        headdingBlack={smarterWayData.headdingBlack}
        headingBlue={smarterWayData.headingBlue}
        features={smarterWayData.features}
        footerText={smarterWayData.footerTexts.join(" ")}
        ctaLabel="Get a Free Proposal"
        ctaHref="#contact"
      /> */}
      <ServicesTwoGridDescriptionAndImage
          reverse
          isHeadingInGridSection
          ctaText="Book A Call Now"
          headdingBlack="Patients Choose Trust"
          headingBlue=" Not Just Clinics"
          image="/IndustryExpertise/eCommerce/brandTrust.webp"
          limit={5}
          paragraphs={dentalTrustPara}
          paragraphTextColor
          headingBlueColor="text-primary"
          breakLine
        />
      <ReachWithUs
        title="MAXIMIZE YOUR ONLINE REACH WITH US"
        buttonText="SCHEDULE CONSULTATION CALL"
        buttonHref=""
        imageSrc="/IndustryExpertise/pretty-women.webp"
        imageAlt="Consultation support"
      />
      {/* <WhyChooseDentalServce
        background="#fafafa"
        ctaText="Lets Talk"
        description="We know the 3 AM worry about no-shows. The frustration of empty chairs. The stress of wondering if your Google reviews are costing you new families.
"
        headdingBlack="More than just a marketing vendor"
        headingBlue="we’re the team that actually answers"
        image="/IndustryExpertise/eCommerce/marketAnalyzer.webp"
        paragraphs={WhyChooseDentalService}
        bottomParagraph={[
          'When you choose us, you’re not hiring a "marketing agency." You’re adding a partner who celebrates your 5-star reviews with you, troubleshoots the late-night website glitch without panic, and fights for every single new patient like they’re our own family member walking through your door.',
          "Let’s grow your practice—without the headaches, hidden fees, or hollow promises.",
        ]}
      /> */}
      {/* <WorkingWithUs /> */}
    </>
  );
}

export default DentalAgency;
