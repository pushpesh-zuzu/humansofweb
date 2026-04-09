import Link from "next/link";
import ContainerWrapper from "../../../../../common/Container/ContainerWrapper";
import PaddingWrapper2 from "../../../../../common/Container/PaddingWrapper2";

const DEFAULT_POINTS = [
  {
    number: "1",
    title: "Responsive Storefronts That Convert Across Devices",
    description:
      "We create eCommerce websites that feel smooth and intuitive on mobile, tablet, and desktop so your customers can browse confidently and buy without friction wherever they are.",
  },
  {
    number: "2",
    title: "Fast-Loading Experiences Built for Growth",
    description:
      "Speed shapes trust and conversions. Our websites are designed to load quickly, feel lightweight, and support a better shopping experience that keeps visitors engaged longer.",
  },
  {
    number: "3",
    title: "Features That Support Sales, Not Just Looks",
    description:
      "From navigation clarity to product discovery and scalable store functionality, we build websites that help your business sell better while staying easy to manage over time.",
  },
];

const BusineesSell = ({
  titleStart = "How Our",
  highlightedTitle = "eCommerce Website Services",
  titleEnd = "Help Businesses Sell Better",
  points = DEFAULT_POINTS,
  ctaText = "Speak With An Expert Now",
  ctaHref = "",
}) => {
  return (
    <ContainerWrapper>
      <PaddingWrapper2 padding="pb-10 px-8.75 md:pb-14 md:px-12.5 xl:pb-18 xl:px-20">
        <section className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,#fffdfa_0%,#f8fbff_100%)]">
          <div className="absolute inset-0" />

          <div className="relative z-10 mx-auto max-w-[1180px]">
            <div className="mx-auto max-w-[760px] text-center">
              <h2 className="text-h2 font-normal leading-[1.12] text-black">
                {titleStart} <span className="font-bold text-primary">{highlightedTitle}</span>{" "}
                {titleEnd}
              </h2>
            </div>

            <div className="mx-auto mt-8 flex max-w-[1040px] flex-col gap-4 md:mt-10">
              {points.map((point) => (
                <article
                  key={point.number}
                  className="rounded-[16px] border border-primary/10 bg-[linear-gradient(135deg,rgba(72,23,156,0.08),rgba(255,77,141,0.04))] p-[1px] shadow-[0_16px_34px_rgba(72,23,156,0.08)]"
                >
                  <div className="grid gap-5 rounded-[15px] bg-white/90 px-5 py-5 md:grid-cols-[88px_minmax(0,1fr)] md:items-start md:px-7 md:py-6 xl:px-8">
                    <div className="flex items-center justify-start md:justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/8 text-[34px] font-light leading-none text-primary md:h-18 md:w-18 md:text-[42px]">
                        {point.number}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-h5 font-bold leading-[1.2] text-primary">{point.title}</h5>
                      <p className="p-default mt-3 text-[#303030]">{point.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {ctaText ? (
              <div className="mt-8 flex justify-center md:mt-10">
                <Link
                  href={ctaHref}
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 p-small font-bold uppercase tracking-[0.08em] text-white transition hover:bg-secondary"
                >
                  {ctaText}
                </Link>
              </div>
            ) : null}
          </div>
        </section>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
};

export default BusineesSell;
