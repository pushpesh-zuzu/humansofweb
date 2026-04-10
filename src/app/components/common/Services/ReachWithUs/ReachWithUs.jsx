import Image from "next/image";
import Link from "next/link";
import ContainerWrapper from "../../Container/ContainerWrapper";
import PaddingWrapper2 from "../../Container/PaddingWrapper2";

const ReachWithUs = ({
  title = "BOOST YOUR DIGITAL REACH WITH US",
  buttonText = "SCHEDULE CONSULTATION CALL",
  buttonHref = "",
  imageSrc = "/IndustryExpertise/prettyWoman1.webp",
  imageAlt = "Consultation support",
  backgroundColor = "#a8dff2",
}) => {
  const normalizedTitle = String(title);
  const titleLines = normalizedTitle.includes("\n")
    ? normalizedTitle.split("\n")
    : normalizedTitle.split(" Reach with us").length > 1
      ? [normalizedTitle.replace(" Reach with us", ""), "Reach with us"]
      : [normalizedTitle];

  return (
    <ContainerWrapper maxWidth="max-w-none">
      <PaddingWrapper2 padding="pb-10 px-0 md:pb-14 xl:pb-18">
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor }}
        >
          <div className="mx-auto grid max-w-[1500px] items-center xl:h-[365px] xl:grid-cols-[minmax(420px,0.44fr)_minmax(0,0.56fr)]">
            <div className="order-1 relative flex h-[230px] items-end justify-center md:h-[340px] xl:order-1 xl:h-[365px]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={760}
                height={560}
                className="h-[230px] w-auto object-contain md:h-[340px] xl:h-[365px]"
                priority={false}
              />
            </div>

            <div className="order-2 flex flex-col items-center px-6 py-5 text-center md:px-6 md:py-8 xl:order-2 xl:items-start xl:px-2 xl:text-left">
              <h1 className="text-h1 max-w-[580px] font-bold uppercase leading-[1.08] text-white">
                {titleLines.map((line) => (
                  <span key={line} className="block xl:text-left">
                    {line}
                  </span>
                ))}
              </h1>
              <Link
                href={buttonHref}
                className="mt-6 md:mt-10 inline-flex min-h-[46px] items-center justify-center rounded-full bg-secondary px-6 text-[12px] font-bold uppercase tracking-[0.02em] text-white transition hover:bg-primary md:px-10 md:text-[14px]"
              >
                {buttonText}
              </Link>
            </div>
          </div>
        </section>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
};

export default ReachWithUs;
