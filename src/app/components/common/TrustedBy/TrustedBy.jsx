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
    logo: <Image alt="Shopify Partners" src={"/Home/shopify.webp"} height={82} width={287} />,
  },
  {
    id: 2,
    name: "Google Cloud Partner",
    logo: (
      <div className="flex items-center gap-2">
        <svg
          width="56"
          height="44"
          viewBox="0 0 40 32"
          className="flex-shrink-0 h-8 w-9 xl:w-14  xl:h-11"
        >
          <path
            d="M24.5 6L20 2L15.5 6H13C9.7 6 7 8.7 7 12C7 15.3 9.7 18 13 18H27C30.3 18 33 15.3 33 12C33 8.7 30.3 6 27 6H24.5Z"
            fill="#4285F4"
          />
        </svg>
        <div>
          <div className="text-[16px] xl:text-[27px] text-gray-500 whitespace-nowrap">Google Cloud</div>
          <div className="text-[16px] xl:text-[27px] font-semibold text-gray-900">Partner</div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    name: "Meta Business Partners",
    logo: <Image alt="Meta Business Partners" src={"/Home/metaBusiness.webp"} height={82} width={287} />,
  },
  {
    id: 4,
    name: "Amazon Ads Verified Partner",
    logo: <Image alt="Amazon Ads Verified Partner" src={"/Home/amazon.webp"} height={82} width={287} />,
  },
  {
    id: 5,
    name: "world Ads Verified Partner",
    logo: <Image alt="world Ads Verified Partner" src={"/Home/klaviyo.webp"} height={82} width={287} />,
  },
];

export default function TrustedBy() {
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
    <ContainerWrapper>
      <PaddingWrapper2 padding="pb-10 px-8.75 md:pb-14 md:px-12.5 xl:pb-18 xl:px-20">
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
