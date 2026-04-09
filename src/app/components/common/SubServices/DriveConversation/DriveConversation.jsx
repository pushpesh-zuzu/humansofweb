import Image from "next/image";
import Link from "next/link";
import ContainerWrapper from "../../Container/ContainerWrapper";
import PaddingWrapper2 from "../../Container/PaddingWrapper2";

const DEFAULT_ITEMS = [
    {
        number: "1",
        title: "Understand Your Brand and Goals",
        description:
            "We begin by learning about your business, customers, and growth goals so the website strategy is shaped around what matters most to your brand.",
    },
    {
        number: "2",
        title: "Plan the User Journey",
        description:
            "From homepage flow to product discovery, we map a shopping experience that feels intuitive, reduces friction, and supports better conversions.",
    },
  {
    number: "3",
    title: "Design for Trust and Sales",
    description:
      "We craft layouts, visuals, and messaging that make your store feel polished, credible, and easy to buy from across every key page.",
  },
  {
    number: "4",
    title: "Build for Speed and Flexibility",
    description:
      "We make sure your website feels fast, responsive, and easy to manage so it supports both a better user experience and future growth.",
  },
  {
    number: "5",
    title: "Refine and Launch with Confidence",
    description:
      "Before launch, we review the final experience carefully, fine-tune key details, and make sure your store is ready to perform from day one.",
  },
];

const DriveConversation = ({
    titleStart = "How We Create",
    highlightedTitle = "eCommerce Website Designs",
    titleEnd = "That Drive Real Conversions",
    descriptionOne = "A strong eCommerce website should do more than look modern. It should guide visitors clearly, build trust fast, and make every step toward purchase feel simple.",
    descriptionTwo = "Our process blends strategy, user experience, and conversion-focused design so your store feels on-brand, performs smoothly, and supports long-term growth.",
    ctaText = "Get My Free Website Plan",
    ctaHref = "",
    items = DEFAULT_ITEMS,
}) => {
    return (
        <ContainerWrapper>
            <PaddingWrapper2 padding="pb-10 px-8.75 md:pb-14 md:px-12.5 xl:pb-18 xl:px-20">
                <section className="relative overflow-hidden rounded-[28px] border border-primary/8 bg-[linear-gradient(135deg,#fffdf9_0%,#f7fbff_46%,#fdf7ff_100%)] shadow-[0_24px_80px_rgba(72,23,156,0.10)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(72,23,156,0.08),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,77,141,0.08),_transparent_24%)]" />
                    <div className="absolute -left-20 top-10 h-44 w-44 rounded-full bg-primary/6 blur-3xl" />
                    <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-secondary/10 blur-3xl" />

                    <div className="relative z-10 grid gap-10 px-6 py-8 md:px-8 md:py-10 lg:grid-cols-[minmax(0,1fr)_minmax(390px,540px)] lg:items-start lg:gap-14 xl:px-12 xl:py-12">
                        <div className="max-w-[700px]">
                            <h2 className="text-h2 max-w-[620px] font-normal leading-[1.08] text-black">
                                <span className="font-bold text-primary">{titleStart}</span>{" "}
                                <span className="font-bold text-primary">{highlightedTitle}</span>{" "}
                                <span>{titleEnd}</span>
                            </h2>

                            {descriptionOne ? (
                                <p className="p-default mt-7 max-w-[660px] text-[#303030]">{descriptionOne}</p>
                            ) : null}
                            {descriptionTwo ? (
                                <p className="p-default mt-5 max-w-[660px] text-[#303030]">{descriptionTwo}</p>
                            ) : null}

                            {ctaText ? (
                                <div className="mt-8">
                                    <Link
                                        href={ctaHref}
                                        className="inline-flex min-h-11 items-center text-[12px] md:text-[14px] justify-center rounded-full bg-primary px-6 p-small font-bold uppercase tracking-[0.08em] text-white transition hover:bg-secondary"
                                    >
                                        {ctaText}
                                    </Link>
                                </div>
                            ) : null}
                        </div>

                        <div className="relative rounded-[24px] border border-primary/15 bg-white/92 p-4 shadow-[0_24px_60px_rgba(72,23,156,0.16)] backdrop-blur-sm md:p-5">
                            <div className="max-h-[560px] space-y-5 overflow-y-auto pr-6 md:pr-8">
                                {items.map((item, index) => (
                                    <article
                                        key={`${item.title}-${index}`}
                                        className="relative rounded-[18px] border border-primary/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,244,255,0.96))] p-4 shadow-[0_12px_28px_rgba(72,23,156,0.08)]"
                                    >
                                        <div className="mb-4 flex items-start gap-4">
                                            {item.icon ? (
                                                <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-secondary/12 ring-1 ring-secondary/15">
                                                    <Image
                                                        src={item.icon}
                                                        alt=""
                                                        width={34}
                                                        height={34}
                                                        className="h-8.5 w-8.5 object-contain"
                                                    />
                                                </div>
                                            ) : item.number ? (
                                                <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-[linear-gradient(135deg,#48179C_0%,#6e37d1_100%)] text-[28px] font-bold leading-none text-white shadow-[0_12px_30px_rgba(72,23,156,0.24)]">
                                                    {item.number}
                                                </div>
                                            ) : null}
                                            <div className="min-w-0">
                                                <h3 className="text-h5 max-w-[300px] font-bold leading-[1.2] text-primary">
                                                    {item.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {item.description ? (
                                            <p className="p-default text-[#303030]">{item.description}</p>
                                        ) : null}
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </PaddingWrapper2>
        </ContainerWrapper>
    );
};

export default DriveConversation;
