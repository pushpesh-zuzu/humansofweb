import HeroSection from "@/app/components/common/SubServices/HeroSection/HeroSection";
import TrustedBy from "@/app/components/common/TrustedBy/TrustedBy";
import IncreaseStoreSale from "./IncreaseStoreSale/IncreaseStoreSale";

const Cro = () => {
  return (
    <>
      <HeroSection
        heading={"CRO Services That"}
        pinkHeading={"Turn Traffic Into Revenue"}
        description1={"We help ecommerce brands improve conversion rates by finding friction, testing stronger experiences, and making every key page easier to buy from."}
        description2={"Humans of Web combines analytics, UX thinking, and persuasive messaging to help more visitors become customers without simply spending more on traffic."}
        bannerImage="/"
        altText={"conversion rate optimization dashboard and ecommerce website improving user experience"}
      />
      <TrustedBy padding={'py-5 md:py-12 xl:py-15 px-8.75 md:px-12.5 xl:px-13.5'} />
      <IncreaseStoreSale />
    </>
  );
};

export default Cro;
