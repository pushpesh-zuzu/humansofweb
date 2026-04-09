import Link from "next/link";
import ContainerWrapper from "../../../../../common/Container/ContainerWrapper";
import PaddingWrapper2 from "../../../../../common/Container/PaddingWrapper2";

const SEO_TIPS = [
  {
    title: "Write Product Descriptions That Sell",
    description:
      "Clear, helpful descriptions make it easier for shoppers to understand the product, compare options, and move toward checkout.",
  },
  {
    title: "Optimize Category Pages",
    description:
      "Strong category copy, clean headings, and useful internal links help search engines understand your collections.",
  },
  {
    title: "Use Keywords With Buyer Intent",
    description:
      "Target search terms your customers use when they are close to buying, not just broad keywords with high volume.",
  },
  {
    title: "Improve Product Page Speed",
    description:
      "Fast-loading product pages reduce drop-offs and help customers browse, compare, and purchase with less friction.",
  },
  {
    title: "Add Helpful FAQs",
    description:
      "Answer shipping, sizing, material, warranty, and usage questions directly on product and collection pages.",
  },
  {
    title: "Build Trust With Content",
    description:
      "Buying guides, comparison pages, and care tips give customers confidence and create more paths into your store.",
  },
];

const SeoTipsSection = () => {
  return (
    <ContainerWrapper>
      <PaddingWrapper2 padding="pb-10 px-8.75 md:pb-14 md:px-12.5 xl:pb-18 xl:px-20">
        <section className="relative overflow-hidden rounded-[14px] bg-primary">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/75 to-primary rounded-[14px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(246,90,117,0.45),transparent_32%)]" />

          <div className="relative z-10 mx-auto max-w-[1160px] py-4 md:py-5 xl:py-6 px-3 lg:px-0">
            <div className="mx-auto max-w-[820px] text-center">
              <h2 className="mt-3 text-h2 font-bold leading-[1.15] text-white">
                Build Product Pages That Search Engines and Shoppers Trust
              </h2>
              <p className="p-default mx-auto mt-4 max-w-[760px] text-white/85">
                Small improvements across product pages, category pages, and content can create stronger visibility and smoother buying decisions.
              </p>
            </div>

            <div className="mt-9 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
              {SEO_TIPS.map((tip, index) => (
                <article
                  key={tip.title}
                  className="h-full rounded-[14px] bg-gradient-to-br from-secondary to-primary p-[2px]"
                >
                  <div className="flex h-full min-h-[230px] flex-col rounded-[12px] bg-white/95 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-6 text-h5 font-bold text-primary">{tip.title}</h3>
                    <p className="p-small mt-3 font-medium leading-[1.7] text-[#303030]">
                      {tip.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-9 text-center">
              <p className="p-default mx-auto max-w-[760px] font-semibold text-white">
                Talk to our experts and get practical insights to improve your eCommerce experience.
              </p>
              <Link
                href=""
                className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-secondary px-6 p-small font-bold uppercase tracking-[0.08em] text-white transition hover:bg-white hover:text-primary"
              >
                Talk To Our Experts
              </Link>
            </div>
          </div>
        </section>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
};

export default SeoTipsSection;
