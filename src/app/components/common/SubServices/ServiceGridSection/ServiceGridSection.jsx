import Image from "next/image";
import Link from "next/link";
import ContainerWrapper from "../../../common/Container/ContainerWrapper";
import PaddingWrapper2 from "../../../common/Container/PaddingWrapper2";
import H2HeadingWrapper from "../../Container/H2HeadingWrapper";
import GetCtaButton from "../../CtaButtons/GetCtaButton";

const ServiceGridSection = ({
  title = "",
  highlightedTitle = "",
  description = "",
  services = [],
  backgroundImage = "/IndustryExpertise/seo-banner.webp",
  ctaText = "",
  ctaHref = "",
}) => {
  if (!services.length) return null;

  return (
    <ContainerWrapper>
      <PaddingWrapper2 padding="pb-10 px-8.75 md:pb-14 md:px-12.5 xl:pb-18 xl:px-20">
        <section className="relative overflow-hidden bg-white">
          <div className="relative z-10 max-w-[980px] text-center">
            <H2HeadingWrapper
              headdingBlack={title}
              headingBlue={highlightedTitle}
              padding="pb-[30px] md:pb-10 lg:pb-15"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-[980px] bg-white px-4 md:px-8">
            <div className="grid gap-x-20 gap-y-16 md:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="group bg-white"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="flex flex-none justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{
                          width: 68,
                          height: 89,
                        }}
                      >
                        {typeof Icon === "function" ? <Icon /> : (
                          <Image src={Icon} alt="" width={72} height={72} className="h-full w-full object-contain" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-h5 font-bold leading-tight text-primary">{service.title}</h3>
                        <p className="p-small mt-4 font-medium leading-[1.8] text-[#303030]">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {ctaText ? (
            <div className="flex relative z-10 justify-center pt-6 md:pt-[30px] lg:pt-10">
              <GetCtaButton text={ctaText}
                href="" />
            </div>
          ) : null}
        </section>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
};

export default ServiceGridSection;
