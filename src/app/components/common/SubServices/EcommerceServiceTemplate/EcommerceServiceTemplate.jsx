import HeroSection from "@/app/components/common/SubServices/HeroSection/HeroSection";
import ServicesTwoGridSection from "@/app/components/common/SubServices/ServicesTwoGridSection/ServicesTwoGridSection";
import TrustedBy from "@/app/components/common/TrustedBy/TrustedBy";
import WorkWithCards from "@/app/components/common/SubServices/WorkWithCards/WorkWithCards";
import ServiceGridSection from "@/app/components/common/SubServices/ServiceGridSection/ServiceGridSection";
import CustomGeneration from "@/app/components/Home/CustomGeneration";
import BusineesSell from "@/app/components/common/SubServices/BusineesSell/BusineesSell";
import FaqComponent from "@/app/components/common/SubServices/FaqComponent/FaqComponent";
import ReachWithUs from "@/app/components/common/Services/ReachWithUs/ReachWithUs";

const EcommerceServiceTemplate = ({ data }) => {
  return (
    <>
      <HeroSection {...data.hero} />
      <TrustedBy padding="py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5" />
      <ServicesTwoGridSection
        background="linear-gradient(90deg, rgba(72, 23, 156, 1) 20%,rgba(246, 90, 117, 1) 100%)"
        headdingBlack={data.overview.title}
        headingBlue={data.overview.highlightedTitle}
        image={data.overview.image}
        paragraphs={data.overview.paragraphs}
        headingBlueColor="text-secondary"
        headingBlackColor="text-white"
        limit={data.overview.limit || 5}
        ctaText={data.overview.ctaText}
      />
      <WorkWithCards
        title={data.workWith.title}
        highlightedTitle={data.workWith.highlightedTitle}
        description={data.workWith.description}
        cards={data.workWith.cards}
        showCards={data.workWith.showCards || 3}
        ctaText={data.workWith.ctaText}
        ctaHref=""
        padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20"
      />
      <ServiceGridSection
        title={data.services.title}
        highlightedTitle={data.services.highlightedTitle}
        services={data.services.items}
        ctaText={data.services.ctaText}
        ctaHref=""
      />
      <CustomGeneration
        headdingBlack={data.steps.title}
        headingBlue={data.steps.highlightedTitle}
        steps={data.steps.items}
        showCtaButton={true}
        ctaText={data.steps.ctaText}
      />
      <BusineesSell
        titleStart={data.sell.title}
        highlightedTitle={data.sell.highlightedTitle}
        points={data.sell.points}
        ctaText={data.sell.ctaText}
      />
      <FaqComponent
        title="Frequently asked questions"
        items={data.faq}
        defaultOpen={0}
      />
      <ReachWithUs />
    </>
  );
};

export default EcommerceServiceTemplate;
