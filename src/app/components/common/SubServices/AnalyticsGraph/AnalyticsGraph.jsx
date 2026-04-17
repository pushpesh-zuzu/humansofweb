"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import ContainerWrapper from "../../Container/ContainerWrapper";
import PaddingWrapper2 from "../../Container/PaddingWrapper2";
import H2HeadingWrapper from "../../Container/H2HeadingWrapper";

const AnalyticsGraph = ({
  title = "Track The SEO Growth That Matters",
  highlightedTitle = "",
  images = [],
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return undefined;

    const timer = setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  if (!images.length) return null;

  const activeImage = images[activeIndex];
  const goToPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + images.length) % images.length);
  };
  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
  };

  return (
    <ContainerWrapper>
      <style>{`
        @keyframes analyticsGraphFade {
          0% {
            opacity: 0;
            transform: translateX(40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .analytics-graph-active {
          animation: analyticsGraphFade 0.55s ease-out;
        }
      `}</style>
      <PaddingWrapper2 padding="pb-10 px-8.75 md:pb-14 md:px-12.5 xl:pb-18 xl:px-20">
        <section>
          <H2HeadingWrapper
            headdingBlack={title}
            headingBlue={highlightedTitle}
            padding="pb-[30px] md:pb-10 lg:pb-15"
          />

          <div className="relative mx-auto max-w-[1040px]">
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous graph"
              className="absolute left-3 top-[36%] z-20 flex md:h-10 md:w-10 h-5 w-5 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-2xl font-bold leading-none text-primary shadow-md transition hover:bg-secondary hover:text-white md:top-1/2"
            >
              <FaChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next graph"
              className="absolute right-3 top-[36%] z-20 flex md:h-10 md:w-10 h-5 w-5 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-2xl font-bold leading-none text-primary shadow-md transition hover:bg-secondary hover:text-white md:top-1/2"
            >
              <FaChevronRight className="h-4 w-4" />
            </button>

            <div className="rounded-[26px] bg-gradient-to-br from-primary to-secondary p-3 pb-10 shadow-[0_22px_60px_rgba(72,23,156,0.22)]">
              <div className="overflow-hidden rounded-[18px] bg-white">
                <Image
                  key={activeImage.alt || activeIndex}
                  src={activeImage.src}
                  alt={activeImage.alt || ""}
                  width={1172}
                  height={531}
                  className="analytics-graph-active h-auto w-full"
                />
              </div>
            </div>

            <div className="mt-5 flex justify-center gap-2">
              {images.map((image, index) => (
                <button
                  key={image.alt || index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show graph ${index + 1}`}
                  className={`h-2.5 w-2.5 cursor-pointer rounded-full transition ${index === activeIndex ? "bg-secondary" : "bg-primary/20 hover:bg-primary/40"
                    }`}
                />
              ))}
            </div>
          </div>
        </section>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
};

export default AnalyticsGraph;
