import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContainerWrapper from "../Container/ContainerWrapper";
import PaddingWrapper2 from "../Container/PaddingWrapper2";
import H2HeadingWrapper from "../Container/H2HeadingWrapper";

const borderGradient = (reverse) => `linear-gradient(
  to ${reverse ? "top" : "bottom"},
  #48179C 0%,
  #48179C 50%,
  #6f3dcc 60%,
  #9b7ee0 70%,
  #c8b6ef 80%,
  #eee8fb 90%,
  transparent 100%
)`;

const renderIcon = (icon, title) => {
    if (!icon) return null;

    if (React.isValidElement(icon)) {
        return icon;
    }

    return <Image src={icon} alt={title} width={72} height={72} />;
};

const ServicesLinks = ({
    services = [],
    headdingBlack = "Explore Our",
    headingBlue = "Services",
    padding = "py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20",
    background='#fff'
}) => {
    if (!services.length) return null;

    return (
        <ContainerWrapper background={background}>
            <PaddingWrapper2 padding={padding}>
                <section className="text-center">
                    <H2HeadingWrapper
                        headdingBlack={headdingBlack}
                        headingBlue={headingBlue}
                        padding="pb-[30px] md:pb-10 lg:pb-13"
                    />

                    <div className="grid gap-6 lg:grid-cols-3 lg:pt-2">
                        {services.map((service, index) => {
                            const href = service.link || service.href || service.pageLink || "#";

                            return (
                                <article
                                    key={service.title}
                                    className="overflow-hidden p-[2px]"
                                    style={{
                                        borderRadius: 28,
                                        background: borderGradient(index % 2 !== 0),
                                    }}
                                >
                                    <div
                                        className={`h-full overflow-hidden rounded-[26px] p-8 ${service.highlight ? "bg-[#f9f7ff]" : "bg-white"
                                            }`}
                                    >
                                        <div
                                            className="mx-auto mb-6 flex items-center justify-center"
                                            style={{
                                                width: 68,
                                                height: 89,
                                            }}
                                        >
                                            {renderIcon(service.icon, service.title)}
                                        </div>

                                        <div className="lg:min-h-[72px] lg:flex lg:items-center lg:justify-center">
                                            <h3 className="text-h4 font-bold text-primary">
                                                <Link href={href} className="transition hover:text-secondary">
                                                    {service.title}
                                                </Link>
                                            </h3>
                                        </div>

                                        <p className="mt-4 md:mb-2 p-small text-[#4b4b4b]">
                                            {service.description}
                                        </p>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </section>
            </PaddingWrapper2>
        </ContainerWrapper>
    );
};

export default ServicesLinks;
