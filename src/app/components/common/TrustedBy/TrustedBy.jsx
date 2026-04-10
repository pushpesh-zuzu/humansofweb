"use client";

import ContainerWrapper from "../Container/ContainerWrapper";
import Image from "next/image";
import PaddingWrapper2 from "../Container/PaddingWrapper2";
import H2HeadingWrapper from "../Container/H2HeadingWrapper";

const PARTNERS = [
  {
    id: 1,
    name: "Shopify Partners",
    src: "/Home/shopify.webp",
  },
  {
    id: 2,
    name: "Google Cloud Partner",
    src: "/Home/googleCloud.webp",
  },
  {
    id: 3,
    name: "Meta Business Partners",
    src: "/Home/metaBusiness.webp",
  },
  {
    id: 4,
    name: "Amazon Ads Verified Partner",
    src: "/Home/amazon.webp",
  },
  {
    id: 5,
    name: "Klaviyo Partner",
    src: "/Home/Klaviyo.webp",
  },
];

const LOOPED = [...PARTNERS, ...PARTNERS, ...PARTNERS];

export default function TrustedBy({
  padding = "pb-10 px-8.75 md:pb-14 md:px-12.5 xl:pb-18 xl:px-20",
}) {
  return (
    <ContainerWrapper maxWidth="max-w-[1440px] w-[100%] md:w-[92%] lg:w-[95%]">
      <PaddingWrapper2 padding={padding}>
        <section className="w-full bg-white">
          {/* Title */}
          <div className="mx-auto">
            {/* <h6 className="text-h6">Trusted by:</h6> */}
            <H2HeadingWrapper headdingBlack="Trusted by:"/>
          </div>

          {/* Marquee */}
          <div className="mx-auto px-4 overflow-hidden">
            <div className="flex w-max animate-marquee-scroll hover:[animation-play-state:paused]">
              {LOOPED.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center opacity-90 hover:opacity-100 transition duration-300 min-h-[80px] px-0 md:px-6 xl:px-12"
                >
                  <Image
                    alt={partner.name}
                    src={partner.src}
                    height={82}
                    width={287}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    className="h-14 w-auto max-w-[160px] sm:h-12 sm:max-w-none md:h-14 lg:h-16 xl:h-[82px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
}
