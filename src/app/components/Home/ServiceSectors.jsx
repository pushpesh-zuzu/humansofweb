import React from 'react'
import Image from 'next/image'
import ContainerWrapper from '../common/Container/ContainerWrapper'
import PaddingWrapper2 from '../common/Container/PaddingWrapper2'
import AISearch from "../common/Icons/Home/ai-search.svg"
import PRPrize from "../common/Icons/Home/pr-prize.svg"
import Global from "../common/Icons/Home/global.svg"

const SERVICES = [
    {
        title: 'AI Search Visibility',
        subtitle: 'Found in AI Conversations',
        description:
            'Show up in ChatGPT, Perplexity and other AI-powered search platforms when buyers look for solutions in your industry.',
        highlight: false,
        icon: AISearch,
    },
    {
        title: 'PR & Authority',
        subtitle: 'Build Trust That Converts',
        description:
            'Earn valuable media mentions, stronger backlinks and the authority signals that make your brand stand out.',
        highlight: true,
        icon: PRPrize,
    },
    {
        title: 'Global SEO Expansion',
        subtitle: 'Grow Beyond Your Market',
        description:
            'Reach new countries, languages and audiences with SEO strategies built for international growth.',
        highlight: false,
        icon: Global,
    },
]

const borderGradient = (reverse) => `linear-gradient(
    to ${reverse ? "top" : "bottom"},
    #48179C 0%,
    #48179C 50%,
    #6f3dcc 60%,
    #9b7ee0 70%,
    #c8b6ef 80%,
    #eee8fb 90%,
    transparent 100%
)`

const ServiceSectors = () => {
    return (
        <ContainerWrapper>
            <PaddingWrapper2 padding="pb-10 px-8.75 md:pb-14 md:px-12.5 xl:pb-18 xl:px-20">
                <section className="text-center">

                    {/* Heading */}
                    <div className="mx-auto max-w-[720px] space-y-6 mb-12">
                        <h2 className="text-h2 font-bold text-[#1c1c1c]">
                            Win Untapped <span className="text-primary">Growth Channels</span>
                        </h2>
                        <p className="p-secondary font-medium text-[#4b4b4b]">
                            We turn your brand into a scalable growth engine through AI search visibility, authority-driven PR and international SEO.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid gap-6 lg:grid-cols-3">
                        {SERVICES.map((service, index) => (
                            <article
                                key={service.title}
                                className="group overflow-hidden p-[2px] transition-transform duration-300 hover:-translate-y-1.5"
                                style={{
                                    borderRadius: 28,
                                    background: borderGradient(index % 2 !== 0),
                                }}
                            >
                                <div
                                    className={`overflow-hidden rounded-[26px] p-8 transition-all duration-300 group-hover:shadow-[0_12px_36px_rgba(72,23,156,0.2)] ${service.highlight ? 'bg-[#f9f7ff]' : 'bg-white'
                                        }`}
                                >
                                    {/* Icon */}
                                    <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary via-secondary to-secondary text-white shadow-lg">
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            width={48}
                                            height={48}
                                            className="h-12 w-12 object-contain"
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-h4 font-bold text-primary">
                                        {service.title}
                                    </h3>

                                    {/* Subtitle */}
                                    <p className="mt-3 text-h6 font-semibold text-[#1b1b1b]">
                                        {service.subtitle}
                                    </p>

                                    {/* Description */}
                                    <p className="mt-4 p-small text-[#4b4b4b]">
                                        {service.description}
                                    </p>

                                    {/* Button */}
                                    <button className="mt-8 inline-flex h-12 cursor-pointer items-center justify-center rounded-full bg-primary px-6 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-secondary">
                                        Learn More
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>

                </section>
            </PaddingWrapper2>
        </ContainerWrapper>
    )
}

export default ServiceSectors