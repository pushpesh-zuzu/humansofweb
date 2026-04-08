"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import ContainerWrapper from "../../../../common/Container/ContainerWrapper";
import PaddingWrapper2 from "../../../../common/Container/PaddingWrapper2";

const WorkWithCards = ({
  title = "Why Work With Us",
  highlightedTitle = "",
  description = "",
  cards = [],
  showCards = 3,
  ctaText = "Schedule A Free Consultation Today",
  ctaHref = "/contact",
  backgroundImage = "/IndustryExpertise/seo-banner.webp",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const desktopVisibleCount = Math.min(Math.max(showCards, 1), Math.max(cards.length, 1));

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
        return;
      }

      if (window.innerWidth < 1024) {
        setVisibleCount(Math.min(2, Math.max(cards.length, 1)));
        return;
      }

      setVisibleCount(desktopVisibleCount);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, [cards.length, desktopVisibleCount]);

  useEffect(() => {
    if (!cards.length) return undefined;

    const timer = setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % cards.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [cards.length]);

  if (!cards.length) return null;

  const sliderCards = [...cards, ...cards.slice(0, visibleCount)];

  const goToPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + cards.length) % cards.length);
  };
  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % cards.length);
  };

  return (
    <ContainerWrapper>
      <style>{`
        .work-with-track {
          transition: transform 0.55s ease;
        }
      `}</style>
      <PaddingWrapper2 padding="pb-10 px-8.75 md:pb-14 md:px-12.5 xl:pb-18 xl:px-20">
        <section className="relative overflow-hidden rounded-lg bg-[#f2fff8]">
          <Image
            src={backgroundImage}
            alt=""
            fill
            sizes="(min-width: 1280px) 1500px, 100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f4fff9]/90 to-[#f4fff9]" />

          <div className="relative z-10 mx-auto max-w-[1120px]">
            <div className="mx-auto max-w-[920px] text-center">
              <h2 className="text-h2 font-normal leading-[1.15] text-black">
                {title}{" "}
                {highlightedTitle ? (
                  <span className="font-bold text-primary">{highlightedTitle}</span>
                ) : null}
              </h2>
              {description ? (
                <p className="p-default mx-auto mt-4 max-w-[760px] text-[#303030]">
                  {description}
                </p>
              ) : null}
            </div>

            <div className="relative mt-9">
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Previous card"
                className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-primary shadow-md transition hover:bg-secondary hover:text-white"
              >
                <FaChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={goToNext}
                aria-label="Next card"
                className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-primary shadow-md transition hover:bg-secondary hover:text-white"
              >
                <FaChevronRight className="h-4 w-4" />
              </button>

              <div className="overflow-hidden px-14">
                <div
                  className="work-with-track flex"
                  style={{
                    width: `${(sliderCards.length / visibleCount) * 100}%`,
                    transform: `translateX(-${(activeIndex * 100) / sliderCards.length}%)`,
                  }}
                >
                  {sliderCards.map((card, index) => (
                    <article
                      key={`${card.title}-${index}`}
                      className="min-h-[280px] flex-none px-3"
                      style={{ flexBasis: `${100 / sliderCards.length}%` }}
                    >
                      <div className="h-full rounded-[14px] bg-gradient-to-br from-primary to-secondary p-[2px] shadow-[0_18px_45px_rgba(72,23,156,0.16)]">
                        <div className="flex h-full flex-col rounded-[12px] bg-white p-7">
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 p-3">
                            <Image
                              src={card.icon}
                              alt=""
                              width={36}
                              height={36}
                              className="h-full w-full object-contain"
                            />
                          </div>
                          <h3 className="mt-8 text-h5 font-bold text-primary">{card.title}</h3>
                          <p className="p-small mt-4 font-medium leading-[1.7] text-[#303030]">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-9 flex justify-center">
              <Link
                href={ctaHref}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 p-small font-bold uppercase tracking-[0.08em] text-white transition hover:bg-secondary"
              >
                {ctaText}
              </Link>
            </div>
          </div>
        </section>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
};

export default WorkWithCards;
