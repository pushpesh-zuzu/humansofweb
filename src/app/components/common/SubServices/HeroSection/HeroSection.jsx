"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ContainerWrapper from "../../Container/ContainerWrapper";
import PaddingWrapper2 from "../../Container/PaddingWrapper2";

export default function HeroSection({ heading, pinkHeading, description1, description2, bannerImage, altText }) {
    return (
        <ContainerWrapper background="#48179C" >
            <PaddingWrapper2>
                <section className="relative rounded-[34px] ">
                    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
                        {/* LEFT CONTENT */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex min-h-[320px] max-w-[600px] flex-col justify-center md:mx-auto md:min-h-[420px] md:text-center lg:mx-0 lg:text-left"
                        >
                            {/* Heading */}
                            <h1 className="text-h1 font-semibold text-white leading-[1.25]">
                                {heading}{" "}
                                <span className="text-secondary">{pinkHeading}</span>
                            </h1>

                            {/* Description */}
                            <p className="mt-5 p-default text-white max-w-[560px] md:mx-auto lg:mx-0">
                                {description1}
                            </p>

                            <p className="mt-5 p-default text-white max-w-[560px] md:mx-auto lg:mx-0">
                                {description2}
                            </p>

                            {/* CTA */}
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row md:justify-center lg:justify-start">
                                <input
                                    type="text"
                                    placeholder="Enter your website"
                                    className="h-[52px] w-full bg-white rounded-full border border-primary px-4 text-sm text-[#111111] outline-none transition focus:border-primary sm:max-w-[210px]"
                                />
                                <button className="h-[52px] cursor-pointer rounded-full bg-white px-6 text-sm font-bold uppercase tracking-[0.04em] text-secondary transition hover:bg-secondary hover:text-white">
                                    Get Free Growth Plan
                                </button>
                            </div>
                        </motion.div>

                        {/* RIGHT IMAGE */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            className="relative flex items-center justify-center"
                        >
                            {/* Decorative elements */}
                            <div className="absolute right-[12%] top-[10%] h-14 w-14 rounded-full border border-dashed border-[#1d1d1d]/30" />
                            <div className="absolute left-[0%] bottom-[12%] h-24 w-24 rounded-full border border-dashed border-[#1d1d1d]/20" />

                            {/* Image Card */}
                            <div className="relative h-[320px] w-full max-w-full overflow-hidden rounded-[32px] bg-[#f5f7ff] shadow-[0_20px_60px_rgba(72,23,156,0.15)] md:h-[420px]">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(72,23,156,0.12),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(246,90,117,0.14),_transparent_35%)]" />
                                <Image
                                    src={bannerImage}
                                    alt={altText}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>
            </PaddingWrapper2>
        </ContainerWrapper>
    );
}
