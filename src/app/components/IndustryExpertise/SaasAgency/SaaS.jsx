import React from "react";
import HeroSectionServices from "../../common/Services/HeroSectionServices/HeroSectionServices";
import SeoServiceVideo from "../ECommerceAgensy/ECommerceSubPages/SeoServices/SeoServiceVideo/SeoServiceVideo";
import TrustedBy from "../../common/TrustedBy/TrustedBy";

const SaaS = () => {
  return (
    <>
      <HeroSectionServices
        heading1="Accelerate Your SaaS Growth"
        heading2="Accelerate Your SaaS Growth"
        bgImag="/IndustryExpertise/saas/saasHero.webp"
        description1="Building a successful SaaS product is just the beginning — real growth comes from reaching the right audience and guiding them through a journey that converts. At Humans of Web, we work closely with you to understand your product, your users, and the challenges you face in scaling."
        description2=""
      />
      <TrustedBy padding={"py-5 px-[35px] px-0 md:py-12 xl:py-15"} />

      <SeoServiceVideo />
    </>
  );
};

export default SaaS;
