import Link from "next/link";
import Image from "next/image";
import ContainerWrapper from "../../../../common/Container/ContainerWrapper";
import PaddingWrapper2 from "../../../../common/Container/PaddingWrapper2";
import GuestPostsIcon from "../../../../common/Icons/IndustryExpertise/GuestPosts.svg";
import LeadsGenerateIcon from "../../../../common/Icons/IndustryExpertise/LeadsGenerate.svg";
import SEORevenueIcon from "../../../../common/Icons/IndustryExpertise/SEORevenue.svg";

const PERFORMANCE_STATS = [
    {
        value: "$523 Million",
        label: "Revenue Driven Through SEO",
        icon: SEORevenueIcon,
    },
    {
        value: "1.2 Million",
        label: "Qualified Leads Delivered",
        icon: LeadsGenerateIcon,
    },
    {
        value: "15k+",
        label: "Guest Posts Delivered for eCommerce Brands",
        icon: GuestPostsIcon,
    },
];

const SeoPerformance = () => {
    return (
        <ContainerWrapper>
            <PaddingWrapper2 padding="pb-10 px-8.75 md:pb-14 md:px-12.5 xl:pb-18 xl:px-20">
                <section>
                    <div className="mx-auto max-w-[1100px] text-center">
                        <h2 className="text-h2 font-normal text-black">
                            <span className="font-bold text-primary">eCommerce SEO for Strong</span>{" "}
                            Long-Term Growth
                        </h2>
                        <p className="p-default mx-auto mt-5 max-w-[1120px] text-left leading-[1.4] text-black">
                            We help your store get discovered by the right customers and turn visibility into consistent sales. While you focus on running your business, we take care of driving growth.
                        </p>
                    </div>

                    <div className="mx-auto mt-8 grid max-w-[1100px] gap-6 md:grid-cols-3">
                        {PERFORMANCE_STATS.map(({ value, label, icon }) => (
                            <div
                                key={value}
                                className="rounded-[14px] bg-gradient-to-br from-primary to-secondary p-[2px] shadow-[8px_10px_18px_rgba(0,0,0,0.12)]"
                            >
                                <div className="flex min-h-[260px] flex-col justify-between rounded-[12px] bg-white p-8">
                                    <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-secondary p-3 transition-transform duration-300 hover:scale-110">
                                        <Image
                                            src={icon}
                                            alt=""
                                            width={32}
                                            height={32}
                                            className="h-full w-full object-contain"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-h3 font-bold text-primary">{value}</h3>
                                        <p className="p-small mt-3 text-[#3d3d3d]">{label}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-9 flex justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 p-small font-bold uppercase tracking-[0.08em] text-white transition hover:bg-secondary"
                        >
                            Get My Growth Plan
                        </Link>
                    </div>
                </section>
            </PaddingWrapper2>
        </ContainerWrapper>
    );
};

export default SeoPerformance;
