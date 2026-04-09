import Image from "next/image";
import Link from "next/link";
import ContainerWrapper from "../../../common/Container/ContainerWrapper";
import PaddingWrapper2 from "../../../common/Container/PaddingWrapper2";

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
          <Image
            src={backgroundImage}
            alt=""
            fill
            sizes="(min-width: 1280px) 1500px, 100vw"
            className="object-cover opacity-5"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-[#f8fbff]/95 to-white" />

          <div className="relative z-10 mx-auto max-w-[980px] text-center">
            <h2 className="text-h2 font-normal leading-[1.15] text-black">
              {title}{" "}
              {highlightedTitle ? (
                <span className="font-bold text-primary">{highlightedTitle}</span>
              ) : null}
            </h2>
            {description ? (
              <p className="p-small mx-auto mt-5 max-w-[900px] font-medium leading-[1.8] text-[#303030]">
                {description}
              </p>
            ) : null}
          </div>

          <div className="relative z-10 mx-auto mt-8 max-w-[980px] bg-white px-4 py-2 md:px-8 md:py-4">
            <div className="grid gap-x-20 gap-y-16 md:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="bg-white"
                  >
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 flex-none">
                        {typeof Icon === "function" ? <Icon /> : (
                          <Image src={Icon} alt="" width={48} height={48} className="h-full w-full object-contain" />
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
            <div className="relative z-10 mt-10 flex justify-center">
              <Link
                href={ctaHref}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 p-small font-bold uppercase tracking-[0.08em] text-white transition hover:bg-secondary"
              >
                {ctaText}
              </Link>
            </div>
          ) : null}
        </section>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
};

export default ServiceGridSection;
