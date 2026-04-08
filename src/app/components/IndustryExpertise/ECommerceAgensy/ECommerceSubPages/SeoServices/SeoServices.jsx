import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import TrustedBy from '@/app/components/common/TrustedBy/TrustedBy'
import SeoServiceVideo from './SeoServiceVideo'
import SeoPerformance from './SeoPerformance'

const SeoServices = () => {
    return (
        <>
            <HeroSection
                heading={"E-commerce SEO That"}
                pinkHeading={"Drives Sales"}
                description={"We help your products rank higher, reach the right buyers, and turn search visibility into consistent sales."}
                bannerImage="/IndustryExpertise/industryHero.webp"
                altText={"E-commerce SEO That Drives Sales"}
            />
            <TrustedBy padding={'py-5 md:py-12 xl:py-15'} />
            <SeoServiceVideo />
            <SeoPerformance />
        </>
    )
}

export default SeoServices
