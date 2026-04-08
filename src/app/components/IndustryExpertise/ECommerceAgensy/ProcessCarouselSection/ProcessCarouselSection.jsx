"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useRef, useState, useCallback } from "react";
import ContainerWrapper from "@/app/components/common/Container/ContainerWrapper";
import PaddingWrapper2 from "@/app/components/common/Container/PaddingWrapper2";
import H2HeadingWrapper from "@/app/components/common/Container/H2HeadingWrapper";

export default function ProcessCarouselSection({
  headdingBlack,
  headingBlue,
  description = [],
  steps = [],
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false, // ✅ false rakhna loop ke saath — nahi to slides stick karti hain
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayRef = useRef(null);

  const stopAutoplay = useCallback(
    () => clearInterval(autoplayRef.current),
    [],
  );
  const startAutoplay = useCallback(() => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => emblaApi?.scrollNext(), 3000);
  }, [emblaApi, stopAutoplay]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () =>
      setSelectedIndex(emblaApi.selectedScrollSnap()),
    );
    setSelectedIndex(emblaApi.selectedScrollSnap());
    startAutoplay();
    return stopAutoplay;
  }, [emblaApi, startAutoplay, stopAutoplay]);

  return (
    <ContainerWrapper>
      <PaddingWrapper2>
        {/* Heading */}
        <div className="max-w-6xl mx-auto text-center">
          <H2HeadingWrapper
            headdingBlack={headdingBlack}
            headingBlue={headingBlue}
            multiParagraph={description}
            breakLine
          />
        </div>

        {/* Carousel */}
        <div className="mt-12">
          {/* 
            ✅ KEY FIX — overflow-hidden wale div ko -mx padding se offset karo
            aur har slide ko px lagao (gap ka replacement).
            Isse loop mode mein first/last slide kabhi nahi chipkenge.
          */}
          <div
            className="overflow-hidden"
            ref={emblaRef}
            // Mouse enter par autoplay pause, leave par resume
            onMouseEnter={stopAutoplay}
            onMouseLeave={startAutoplay}
          >
            <div className="flex">
              {" "}
              {/* ✅ gap-6 hata diya — padding ab slide pe hai */}
              {steps.map((step, index) => {
                const isActive = selectedIndex === index;
                return (
                  <div
                    key={index}
                    // ✅ px-3 = gap ka kaam karta hai without breaking loop
                    className="min-w-[88%] sm:min-w-[60%] md:min-w-[48%] lg:min-w-[34%] px-3 transition-all duration-500"
                  >
                    {/* Outer border gradient ring */}
                    <div
                      className={`
                        relative rounded-[20px] p-[1.5px] h-full
                        transition-all duration-500
                        ${
                          isActive
                            ? "bg-gradient-to-br from-primary via-secondary to-primary/40 shadow-[0_16px_48px_rgba(72,23,156,0.18)]"
                            : "bg-gradient-to-br from-primary/30 to-secondary/20 shadow-sm"
                        }
                      `}
                    >
                      {/* Card body */}
                      <div
                        className={`
                          relative bg-white rounded-[19px] p-6 h-full flex flex-col
                          transition-all duration-500
                          ${isActive ? "scale-[1.0]" : "scale-[0.97] opacity-80"}
                        `}
                      >
                        {/* Step number badge — top right */}
                        <span
                          className={`
                            absolute top-4 right-5 text-xs font-bold
                            w-7 h-7 rounded-full flex items-center justify-center
                            transition-all duration-300
                            ${
                              isActive
                                ? "bg-primary text-white"
                                : "bg-primary/10 text-primary/60"
                            }
                          `}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* Icon */}
                        <div
                          className={`
                            w-14 h-14 rounded-xl flex items-center justify-center mb-5 flex-shrink-0
                            transition-colors duration-300
                            ${isActive ? "bg-primary/10" : "bg-gray-100"}
                          `}
                        >
                          {step.icon}
                        </div>

                        {/* Title */}
                        <h3
                          className={`
                            text-h5 font-semibold mb-3
                            transition-colors duration-300
                            ${isActive ? "text-primary" : "text-gray-500"}
                          `}
                        >
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p
                          className={`
                            p-default leading-relaxed flex-grow
                            transition-colors duration-300
                            ${isActive ? "text-gray-600" : "text-gray-400"}
                          `}
                        >
                          {step.description}
                        </p>

                        {/* Bottom accent bar */}
                        <div
                          className={`
                            mt-5 h-[3px] rounded-full
                            transition-all duration-500
                            ${isActive ? "w-14 bg-secondary" : "w-6 bg-gray-200"}
                          `}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  emblaApi?.scrollTo(index);
                  startAutoplay(); // click ke baad autoplay reset
                }}
                aria-label={`Go to step ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? "w-7 bg-primary"
                    : "w-2 bg-gray-300 hover:bg-primary/40"
                }`}
              />
            ))}
          </div>
        </div>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
}
