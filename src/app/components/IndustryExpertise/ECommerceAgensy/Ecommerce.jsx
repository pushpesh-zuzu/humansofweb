import React from "react";
import HeroSectionEcommerse from "./HeroSectionEcommerse/HeroSectionEcommerse";
import TrustedBy from "../../common/TrustedBy/TrustedBy";

function Ecommerce() {
  return (
    <>
      <HeroSectionEcommerse />
      <TrustedBy padding={'py-5 md:py-12 xl:py-15'}/>
    </>
  );
}

export default Ecommerce;
