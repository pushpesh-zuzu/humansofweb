"use client";

import Image from "next/image";
import { useState } from "react";
import ContainerWrapper from "../../../../common/Container/ContainerWrapper";
import PaddingWrapper2 from "../../../../common/Container/PaddingWrapper2";

function getYouTubeEmbedUrl(url) {
  if (!url) return "";

  const shortsMatch = url.match(/youtube\.com\/shorts\/([^?&/]+)/);
  if (shortsMatch) return `https://www.youtube.com/embed/${shortsMatch[1]}`;

  const watchMatch = url.match(/[?&]v=([^?&]+)/);
  if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`;

  const shortUrlMatch = url.match(/youtu\.be\/([^?&/]+)/);
  if (shortUrlMatch) return `https://www.youtube.com/embed/${shortUrlMatch[1]}`;

  return url;
}

const SeoServiceVideo = ({
  coverImage = "/IndustryExpertise/seo-image.webp",
  videoSrc = "https://www.youtube.com/watch?v=sCOw5y1RQpY",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const embedUrl = getYouTubeEmbedUrl(videoSrc);
  const isEmbedVideo = embedUrl.includes("youtube.com/embed");

  return (
    <ContainerWrapper>
      <PaddingWrapper2 padding="pt-5 pb-10 px-8.75 md:pb-14 md:pt-2 md:px-12.5 xl:pt-5 xl:pb-18 xl:px-20">
        <div className="mx-auto max-w-[1135px]">
          <div className="relative aspect-[1135/553] w-full overflow-hidden rounded-lg bg-[#f7f7f7]">
            {isPlaying && videoSrc ? (
              <>
                <button
                  type="button"
                  onClick={() => setIsPlaying(false)}
                  aria-label="Close video"
                  className="absolute right-0.5 top-1 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white text-2xl font-medium leading-none text-primary shadow-md transition hover:bg-primary hover:text-white"
                >
                  x
                </button>
                {isEmbedVideo ? (
                  <iframe
                    src={`${embedUrl}?autoplay=1`}
                    title="E-commerce SEO Services video"
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={videoSrc}
                    poster={coverImage}
                    className="h-full w-full object-cover"
                    controls
                    autoPlay
                  />
                )}
              </>
            ) : (
              <>
                <Image
                  src={coverImage}
                  alt="E-commerce SEO Services designed to drive potential customers to website"
                  fill
                  className="object-cover rounded-[30px]"
                  sizes="(min-width: 1280px) 1135px, calc(100vw - 70px)"
                />
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  aria-label="Play E-commerce SEO Services video"
                  className="absolute left-1/2 top-1/2 flex h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#2130c7] text-white transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#2130c7]/30 md:h-[104px] md:w-[104px]"
                >
                  <span className="ml-1 block h-0 w-0 border-y-[14px] border-l-[22px] border-y-transparent border-l-white md:border-y-[20px] md:border-l-[32px]" />
                </button>
              </>
            )}
          </div>
        </div>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
};

export default SeoServiceVideo;
