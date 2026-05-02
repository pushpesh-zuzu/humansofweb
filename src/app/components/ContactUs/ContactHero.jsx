"use client";
import Image from "next/image";

function ContactHero({
  heading1 = "Ready When You Are",
  description = "Your digital growth partner is just one call or click away. Let's make it happen.",
}) {
  return (
    <div
      className="relative w-full h-[200px] md:h-[320px] lg:h-[405px]"
      style={{ backgroundColor: "#48179C" }}
    >
      {/* BG Image — desktop only */}
      <div className="absolute inset-0 hidden md:block z-0 w-full h-full">
        <Image
          src="/contactUs/contactUs3.webp"
          alt="Contact Us"
          fill
          priority
          fetchPriority="high"
          quality={90}
          className="object-cover object-center"
          sizes="(min-width: 768px) 100vw, 0px"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1500px] mx-auto h-full">
        <section className="flex flex-col justify-center h-full py-10 px-8.75 md:py-[50px] md:px-12.5 xl:py-18 xl:px-20">
          <div className="w-full md:w-1/2">
            <h1 className="text-h1 font-semibold text-white">
              {heading1}
            </h1>
            <p className="text-white/80 text-[15px] md:text-[16px] lg:text-[18px] leading-relaxed pt-3 md:pt-4 md:max-w-[420px]">
              {description}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactHero;