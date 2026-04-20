import React from "react";
import ContainerWrapper from "@/app/components/common/Container/ContainerWrapper";
import PaddingWrapper2 from "@/app/components/common/Container/PaddingWrapper2";
import GetCtaButton from "@/app/components/common/CtaButtons/GetCtaButton";

const MediaTimeEfforts = ({
  title,
  highlightedTitle,
  description1,
  description2,
  ctaText,
  image,
  imageAlt,
}) => {
  return (
    <ContainerWrapper>
      <PaddingWrapper2 padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20">
        <section className="relative overflow-hidden rounded-[20px] bg-[linear-gradient(135deg,#48179C_0%,#34106f_48%,#F65A75_145%)] px-5 py-10 text-white md:px-10 md:py-14 xl:px-16 xl:py-18">
          
          <div className="grid items-center gap-10 lg:grid-cols-2 xl:gap-16">
            
            {/* LEFT CONTENT */}
            <div className="max-w-[760px]">
              <h2 className="text-h2 font-semibold leading-tight text-secondary">
                {title}{" "}
                <span className="font-normal text-white">
                  {highlightedTitle}
                </span>
              </h2>

              <p className="p-default mt-6 max-w-[720px] leading-[1.9] text-white/88">
                {description1}
              </p>

              <p className="p-default mt-4 max-w-[720px] leading-[1.9] text-white/88">
                {description2}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <GetCtaButton text={ctaText} href="" />
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full flex justify-center">
              <img
                src={image}
                alt={imageAlt} // ✅ dynamic alt text
                className="w-full max-w-[450px] rounded-xl object-cover"
              />
            </div>

          </div>
        </section>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
};

export default MediaTimeEfforts;