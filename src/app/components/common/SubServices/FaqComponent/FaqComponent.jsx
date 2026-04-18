"use client";

import { useState } from "react";
import ContainerWrapper from "../../../common/Container/ContainerWrapper";
import PaddingWrapper2 from "../../../common/Container/PaddingWrapper2";
import H2HeadingWrapper from "../../Container/H2HeadingWrapper";

const FaqComponent = ({
  title = "Frequently asked questions",
  items = [],
  defaultOpen = 0,
}) => {
  const [openIndex, setOpenIndex] = useState(items.length ? defaultOpen : null);

  if (!items.length) return null;

  return (
    <ContainerWrapper>
      <PaddingWrapper2 padding="pb-10 px-8.75 md:pb-14 md:px-12.5 xl:pb-18 xl:px-20">
        <section>
          <H2HeadingWrapper
              // headdingBlack={title}
              headingBlue={title}
              padding="pb-[30px] md:pb-10 lg:pb-15"
            />

          <div className="max-w-[980px] overflow-hidden rounded-[14px] bg-white shadow-[0_18px_45px_rgba(72,23,156,0.08)]">
            {items.map((item, index) => {
              const isOpen = index === openIndex;

              return (
                <div
                  key={item.question}
                  className={index !== 0 ? "border-t border-primary/12" : ""}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className={`flex w-full cursor-pointer items-start justify-between gap-4 px-5 py-5 text-left transition md:px-8 ${
                      isOpen ? "bg-[#f8fbff]" : "hover:bg-[#f8fbff]"
                    }`}
                  >
                    <span className={`text-h6 font-semibold leading-[1.5] md:text-h5 ${
                      isOpen ? "text-primary" : "text-[#222222]"
                    }`}>
                      {item.question}
                    </span>
                    <span className={`mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-full border text-xl font-semibold leading-none transition ${
                      isOpen
                        ? "border-secondary bg-secondary text-white"
                        : "border-primary/15 bg-white text-primary"
                    }`}>
                      <span
                        className="block leading-none"
                      >
                        {isOpen ? "-" : "+"}
                      </span>
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-6 md:px-8">
                        <p className="p-default max-w-[860px] leading-[1.9] text-[#303030]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
};

export default FaqComponent;
