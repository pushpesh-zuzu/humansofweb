import Image from "next/image";
import ContainerWrapper from "../../../../../common/Container/ContainerWrapper";
import PaddingWrapper2 from "../../../../../common/Container/PaddingWrapper2";
import GuestPostsIcon from "../../../../../common/Icons/IndustryExpertise/GuestPosts.svg";
import LeadsGenerateIcon from "../../../../../common/Icons/IndustryExpertise/LeadsGenerate.svg";
import SEORevenueIcon from "../../../../../common/Icons/IndustryExpertise/SEORevenue.svg";
import H2HeadingWrapper from "@/app/components/common/Container/H2HeadingWrapper";
import GetCtaButton from "@/app/components/common/CtaButtons/GetCtaButton";

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
                    <H2HeadingWrapper
                        headdingBlack="E-commerce SEO for Strong"
                        headingBlue="Long-Term Growth"
                        subHeading=""
                        padding="pb-[30px] md:pb-10 lg:pb-15"
                    />
                    <div className="mx-auto grid max-w-[1100px] gap-6 md:grid-cols-3">
                        {PERFORMANCE_STATS.map(({ value, label, icon }) => (
                            <div
                                key={value}
                                className="rounded-[14px] bg-gradient-to-br from-primary to-secondary p-[2px] shadow-[8px_10px_18px_rgba(0,0,0,0.12)]"
                            >
                                <div className="flex min-h-[260px] flex-col justify-between rounded-[12px] bg-white p-8">
                                    <div
                                        className="flex flex-none justify-center transition-transform duration-300 hover:scale-110"
                                        style={{
                                            width: 68,
                                            height: 89,
                                        }}
                                    >
                                        <Image
                                            src={icon}
                                            alt=""
                                            width={72}
                                            height={72}
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

                    <div className="flex justify-center pt-6 md:pt-[30px] lg:pt-10">
                        <GetCtaButton text="Book a call now"
                            href="" />
                    </div>
                </section>
            </PaddingWrapper2>
        </ContainerWrapper>
    );
};

export default SeoPerformance;
