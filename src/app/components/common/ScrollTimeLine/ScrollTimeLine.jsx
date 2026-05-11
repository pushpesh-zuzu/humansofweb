"use client";
import { useEffect, useRef, useState } from "react";
import ContainerWrapper from "../Container/ContainerWrapper";
import PaddingWrapper2 from "../Container/PaddingWrapper2";
import H2HeadingWrapper from "../Container/H2HeadingWrapper";
import { GetYourFreeConsultationButton } from "../CtaButtons";
import TimelineIcon from "./TimeLineIcon";

export default function ScrollTimeline({
  items = [],
  buttonText = "Schedule A Free Consultation",
  buttonHref = "#",
  headdingBlack,
  headingBlue,
  subheading,
  headingBlueColor,
  headingBlackColor,
  background,
  isBackgroundPrimary = false,
}) {
  const containerRef = useRef(null);

  // FIXED
  const mobileIconRefs = useRef([]);
  const desktopIconRefs = useRef([]);

  const lineRef = useRef(null);
  const [fillHeight, setFillHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !lineRef.current) return;

      // FIXED
      const activeRefs =
        window.innerWidth < 768
          ? mobileIconRefs.current
          : desktopIconRefs.current;

      const lineRect = lineRef.current.getBoundingClientRect();
      const lineTop = lineRect.top + window.scrollY;
      const lineHeight = lineRef.current.offsetHeight;
      const viewportCenter = window.scrollY + window.innerHeight / 2;

      let filled = 0;

      for (let i = 0; i < activeRefs.length; i++) {
        const icon = activeRefs[i];
        if (!icon) continue;

        const iconRect = icon.getBoundingClientRect();
        const iconCenter = iconRect.top + window.scrollY + iconRect.height / 2;

        if (viewportCenter >= iconCenter) {
          filled = iconCenter - lineTop;
        } else {
          const prevIconCenter =
            i === 0
              ? lineTop
              : (() => {
                  const prev = activeRefs[i - 1];
                  if (!prev) return lineTop;
                  const r = prev.getBoundingClientRect();
                  return r.top + window.scrollY + r.height / 2;
                })();

          const progress =
            (viewportCenter - prevIconCenter) / (iconCenter - prevIconCenter);

          filled =
            prevIconCenter - lineTop + progress * (iconCenter - prevIconCenter);

          break;
        }
      }

      const percentage = Math.min(
        Math.max((filled / lineHeight) * 100, 0),
        100
      );

      setFillHeight(percentage);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [items]);

  return (
    <ContainerWrapper background={isBackgroundPrimary ? "#48179C" : background}>
      <PaddingWrapper2>
        <H2HeadingWrapper
          headdingBlack={headdingBlack}
          headingBlue={headingBlue}
          subHeading={subheading}
          padding="pb-[35px] md:pb-[60px]"
          headingBlueColor={headingBlueColor}
          headingBlackColor={headingBlackColor}
        />

        <div ref={containerRef} className="relative">
          <div
            ref={lineRef}
            className="
              absolute w-[2px] bg-gray-200 top-0 bottom-0 z-0
              left-[20px]
              md:left-1/2 md:-translate-x-1/2
            "
          >
            <div
              className="absolute top-0 left-0 w-full bg-[#2B3990]"
              style={{ height: `${fillHeight}%` }}
            />
          </div>

          <div className="flex flex-col">
            {items.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={index}>

                  {/* Mobile */}
                  <div className="flex items-start gap-4 py-5 md:hidden">
                    <div
                      ref={(el) => (mobileIconRefs.current[index] = el)}
                      className="relative z-10 shrink-0 w-10 flex justify-center"
                    >
                      <div className="scale-75 origin-center">
                        <TimelineIcon name={item.iconPath} />
                      </div>
                    </div>

                    <div className="pt-1">
                      <h3 className="h3 text-h3 mb-1">{item.title}</h3>
                      <p className="p-default mb-4">{item.description}</p>
                    </div>
                  </div>

                  {/* Desktop */}
                  <div
                    className="
                      hidden md:grid
                      grid-cols-[1fr_auto_1fr]
                      items-center
                      min-h-[140px]
                    "
                  >
                    <div className={`pr-10 ${isLeft ? "block" : "invisible"}`}>
                      {isLeft && (
                        <div className="text-right">
                          <h3 className="h3 text-h3 mb-1">{item.title}</h3>
                          <p className="p-default mb-4">{item.description}</p>
                        </div>
                      )}
                    </div>

                    {/* FIXED */}
                    <div
                      ref={(el) => (desktopIconRefs.current[index] = el)}
                      className="relative z-10 shrink-0"
                    >
                      <TimelineIcon name={item.iconPath} />
                    </div>

                    <div className={`pl-10 ${!isLeft ? "block" : "invisible"}`}>
                      {!isLeft && (
                        <div className="text-left">
                          <h3 className="h3 text-h3 mb-1">{item.title}</h3>
                          <p className="p-default mb-4">{item.description}</p>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {buttonText && (
          <div className="flex justify-center mt-6 md:mt-10">
            <GetYourFreeConsultationButton text={buttonText} />
          </div>
        )}
      </PaddingWrapper2>
    </ContainerWrapper>
  );
}