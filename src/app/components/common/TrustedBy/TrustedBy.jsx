"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContainerWrapper from "../Container/ContainerWrapper";
import Image from "next/image";
import PaddingWrapper2 from "../Container/PaddingWrapper2";

const PARTNERS = [
  {
    id: 1,
    name: "Shopify Partners",
    logo: (
      <Image
        alt="Shopify Partners"
        src={"/Home/shopify.webp"}
        height={82}
        width={287}
        // className="h-[50px] w-[260px] md:h-[82px] md:w-[287px]"
      />
    ),
  },
  {
    id: 2,
    name: "Google Cloud Partner",
    logo: (
      <Image
        alt="Google Cloud Partner"
        src={"/Home/googleCloud.webp"}
        height={82}
        width={287}
        // className="h-[50px] w-[260px] md:h-[82px] md:w-[287px]"
      />
    ),
  },
  {
    id: 3,
    name: "Meta Business Partners",
    logo: (
      <Image
        alt="Meta Business Partners"
        src={"/Home/metaBusiness.webp"}
        height={82}
        width={287}
        // className="h-[50px] w-[260px] md:h-[82px] md:w-[287px]"
      />
    ),
  },
  {
    id: 4,
    name: "Amazon Ads Verified Partner",
    logo: (
      <Image
        alt="Amazon Ads Verified Partner"
        src={"/Home/amazon.webp"}
        height={82}
        width={287}
        // className="h-[50px] w-[260px] md:h-[82px] md:w-[287px]"
      />
    ),
  },
  {
    id: 5,
    name: "world Ads Verified Partner",
    logo: (
      <Image
        alt="world Ads Verified Partner"
        src={"/Home/Klaviyo.webp"}
        height={82}
        width={287}
        // className="h-[50px] w-[260px] md:h-[82px] md:w-[287px]"
      />
    ),
  },
];

export default function TrustedBy({padding='pb-10 px-8.75 md:pb-14 md:px-12.5 xl:pb-18 xl:px-20'}) {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    cssEase: "linear",

    arrows: false,
    dots: false,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <ContainerWrapper maxWidth="max-w-[1440px] w-[100%] md:w-[92%] lg:w-[95%]">
      <PaddingWrapper2 padding={padding}>
        <section className="w-full  overflow-hidden bg-white">
          {/* Title */}
          <div className="mx-auto px-4 mb-6">
            <h6 className="text-h6">Trusted by:</h6>
          </div>

          {/* Slider */}
          <div className=" mx-auto px-4 h-24 xl:h-37.5">
            <Slider {...settings}>
              {PARTNERS.map((partner) => (
                <div key={partner.id} className="px-6">
                  <div className="flex items-center justify-center opacity-90 hover:opacity-100 transition duration-300">
                    {partner.logo}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
}
