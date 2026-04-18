"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import ContainerWrapper from "../../../common/Container/ContainerWrapper";
import PaddingWrapper2 from "../../../common/Container/PaddingWrapper2";
import H2HeadingWrapper from "../../Container/H2HeadingWrapper";
import GetCtaButton from "../../CtaButtons/GetCtaButton";

const WorkWithCards = ({
  title = "Why Work With Us",
  highlightedTitle = "",
  description = "",
  cards = [],
  showCards = 3,
  ctaText = "Schedule A Free Consultation Today",
  ctaHref = "",
  padding = "pb-10 px-8.75 md:pb-14 md:px-12.5 xl:pb-18 xl:px-20"
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
      <PaddingWrapper2 padding={padding}>
        <section className="relative overflow-hidden rounded-lg bg-[#f2fff8]">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f4fff9]/90 to-[#f4fff9]" />
          <div className="relative z-10">
            <H2HeadingWrapper
              headdingBlack={title}
              headingBlue={highlightedTitle}
              padding="pb-[30px] md:pb-10 lg:pb-15"
              textAlign="text-center"
            />
            <div className="mx-auto max-w-[1120px]">
              <div className="relative px-4 md:px-14">
                <button
                  type="button"
                  onClick={goToPrevious}
                  aria-label="Previous card"
                  className="absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-primary shadow-md transition hover:bg-secondary hover:text-white md:left-3"
                >
                  <FaChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="Next card"
                  className="absolute right-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-primary shadow-md transition hover:bg-secondary hover:text-white md:right-3"
                >
                  <FaChevronRight className="h-4 w-4" />
                </button>

                <div className="overflow-hidden">
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
                        className="group box-border min-h-[280px] flex-none px-3"
                        style={{ flex: `0 0 ${100 / sliderCards.length}%` }}
                      >
                        <div className="h-full rounded-[14px] bg-gradient-to-br from-primary to-secondary p-[2px] shadow-[0_18px_45px_rgba(72,23,156,0.16)]">
                          <div className="flex h-full flex-col rounded-[12px] bg-white p-7 transition-shadow duration-300 group-hover:shadow-[0_12px_36px_rgba(72,23,156,0.2)]">
                            <div className="flex items-center gap-4">
                              <div
                                className="flex flex-none justify-center transition-transform duration-300 group-hover:scale-110"
                                style={{
                                  width: 68,
                                  height: 89,
                                }}
                              >
                                <Image
                                  src={card.icon}
                                  alt=""
                                  width={72}
                                  height={72}
                                  className="h-full w-full object-contain"
                                />
                              </div>
                              <h3 className="text-h5 font-bold text-primary">{card.title}</h3>
                            </div>
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

              <div className="flex justify-center pt-6 md:pt-[30px] lg:pt-10 pb-4">
                <GetCtaButton text={ctaText}
                  href="" />
              </div>
            </div>
          </div>
        </section>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
};

export default WorkWithCards;
