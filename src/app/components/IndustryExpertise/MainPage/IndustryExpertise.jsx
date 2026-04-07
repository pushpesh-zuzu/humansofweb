import React from 'react'
import IndustryHeroSection from './HeroSection/HeroSection'
import TrustedBy from '../../common/TrustedBy/TrustedBy'
import IndustriesWeServe from './IndustriesWeServe/IndustriesWeServe'
import IndustryDeepDive from './IndustryDeepDive/IndustryDeepDive'
import HowWeWork from './HowWeWork/HowWeWork'
import ResultsSection from './ResultsSection/ResultsSection'
import WhyHOW from './WhyHOW/WhyHOW'
import CTASection from './CTASection/CTASection'

function IndustryExpertise() {
  return (<>
    <IndustryHeroSection/>
    <TrustedBy padding={'py-5 md:py-12 xl:py-15'}/>
    <IndustriesWeServe/>
    <IndustryDeepDive/>
    <HowWeWork/>
    <ResultsSection/>
    <WhyHOW/>
    <CTASection/>
  </>
  )
}

export default IndustryExpertise