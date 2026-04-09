import Image from "next/image";
import Link from "next/link";
import ContainerWrapper from "../../Container/ContainerWrapper";
import PaddingWrapper2 from "../../Container/PaddingWrapper2";
import ShopifyIcon from "../../Icons/WebsiteDesign/shopify.svg";
import MagentoIcon from "../../Icons/WebsiteDesign/magneto.svg";
import WordpressIcon from "../../Icons/WebsiteDesign/wordpress-logo.svg";
import EcommerceIcon from "../../Icons/WebsiteDesign/ecommerce-logo.svg";
import PageSpeedIcon from "../../Icons/WebsiteDesign/page-speed.svg";

const DEFAULT_FEATURE_CARDS = [
    {
        title: "Shopify Expert Designs",
        icon: ShopifyIcon,
    },
    {
        title: "eCommerce Web Design Experts",
        icon: EcommerceIcon,
    },
    {
        title: "Magento Expert Designs",
        icon: MagentoIcon,
    },
    {
        title: "Page Speed Optimisation",
        icon: PageSpeedIcon,
    },
    {
        title: "WordPress Expert Designs",
        icon: WordpressIcon,
    },
];

const dotPositions = [
    "left-[6%] top-[10%]",
    "left-[10%] top-[14%]",
    "left-[86%] top-[32%]",
    "left-[80%] top-[72%]",
    "left-[68%] top-[8%]",
];

const dotColors = ["bg-secondary", "bg-[#ff72c4]", "bg-[#ffd24a]", "bg-[#ff6b6b]", "bg-[#74e0d3]"];

const WebsiteBrand = ({
  titleStart = "Build a",
  highlightedTitle = "Custom eCommerce Website",
  titleEnd = "That Looks Sharp and Sells Better",
  description = "Your store should do more than look good. We design custom eCommerce websites that reflect your brand, make shopping effortless, and help turn more visitors into loyal customers.",
  ctaText = "Book A Call Now",
    ctaHref = "",
    cards = DEFAULT_FEATURE_CARDS,
}) => {
    return (
        <ContainerWrapper>
            <PaddingWrapper2 padding="pb-10 px-8.75 md:pb-14 md:px-12.5 xl:pb-18 xl:px-20">
                <section background="#48179C">
                    <div className="relative overflow-hidden rounded-[24px] bg-primary text-white">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_34%)]" />

                        {dotPositions.map((position, index) => (
                            <span
                                key={position}
                                className={`absolute h-2 w-2 rounded-full ${position} ${dotColors[index % dotColors.length]}`}
                            />
                        ))}

                        <div className="relative z-10 grid items-center gap-8 px-5 py-8 md:px-8 md:py-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.85fr)] lg:gap-12 xl:px-14 xl:pt-12 xl:pb-9">
                            <div className="max-w-[560px]">
                                <h2 className="text-h2 max-w-[500px] font-normal leading-[1.08] tracking-[-0.03em] text-white">
                                    {titleStart} <span className="font-bold">{highlightedTitle}</span> {titleEnd}
                                </h2>
                                <p className="p-default mt-5 max-w-[560px] text-white/90">
                                    {description}
                                </p>
                                {ctaText ? (
                                    <div className="mt-6">
                                        <Link
                                            href={ctaHref}
                                            className="inline-flex min-h-11 items-center justify-center rounded-full bg-secondary px-5 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-white hover:text-primary md:text-sm"
                                        >
                                            {ctaText}
                                        </Link>
                                    </div>
                                ) : null}
                            </div>

                            <div className="mx-auto grid w-full max-w-[390px] grid-cols-2 gap-3 sm:grid-cols-2">
                                {cards.map((card, index) => (
                                    <article
                                        key={card.title}
                                        className={`rounded-[16px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(65,245,183,0.16))] p-4 shadow-[0_16px_34px_rgba(0,0,0,0.18)] backdrop-blur-[2px] ${index === 0 ? "translate-y-[-10px] sm:translate-y-[-14px]" : ""
                                            } ${index === 1 ? "translate-y-[12px] sm:translate-y-[18px]" : ""} ${index === 2 ? "translate-y-[-2px] sm:translate-y-[-4px]" : ""
                                            } ${index === 3 ? "translate-y-[16px] sm:translate-y-[22px]" : ""} ${index === 4 ? "col-span-2 mx-auto mt-5 w-full max-w-[calc(50%-6px)] md:mt-7 sm:col-span-2 sm:max-w-[calc(50%-6px)]" : ""
                                            }`}
                                    >
                                        <div className="flex min-h-[130px] flex-col justify-between gap-6">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-white/8">
                                                <Image
                                                    src={card.icon}
                                                    alt=""
                                                    width={34}
                                                    height={34}
                                                    className="h-8.5 w-8.5 object-contain"
                                                />
                                            </div>
                                            <h4 className="text-base font-semibold leading-tight text-white md:text-[17px]">{card.title}</h4>
                                        </div>
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

export default WebsiteBrand;
