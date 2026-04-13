"use client";

import React, { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ContainerWrapper from "../common/Container/ContainerWrapper";
import H2HeadingWrapper from "../common/Container/H2HeadingWrapper";
import VideoCards from "./WorkingWithUs/videoCards";
import PaddingWrapper2 from "../common/Container/PaddingWrapper2";

const TESTIMONIALS = [
  {
    brand: "PURE",
    title: "Driving growth through consistent results and real impact.",
    name: "Linda Zindroski",
    company: "Purr Glass",
    image: "/Home/thumb1.webp",
    video: "/Home/thumbvideo1.mp4",
    avatar: "/Home/avatar1.webp",
    avatarMarginTop: 0,
  },
  {
    brand: "RUSTY",
    title: "Turning vision into measurable digital success.",
    name: "Ben Stewart",
    company: "Rusty Rooster Metal",
    image: "/Home/thumb2.webp",
    video: "/Home/thumbvideo2.mp4",
    avatar: "/Home/avatar2.webp",
    avatarMarginTop: 0,
  },
  {
    brand: "COAST",
    title: "Scaling traffic and sales with the right strategy.",
    name: "Garry Mueller",
    company: "Treasure Coast Metal Detector",
    image: "/Home/thumb3.webp",
    video: "/Home/thumbvideo3.mp4",
    avatar: "/Home/avatar3.webp",
    avatarMarginTop: 0,
  }
];

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

function WorkingWithUs() {
  const [activeVideo, setActiveVideo] = useState(null);
  const activeEmbedUrl = activeVideo ? getYouTubeEmbedUrl(activeVideo.video) : "";
  const isYouTubeVideo = activeEmbedUrl.includes("youtube.com/embed");
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true },
    [Autoplay({ delay: 2500, stopOnInteraction: false })]
  );
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <>
      <style>{`
        .testimonials-embla {
          overflow: hidden;
        }

        .testimonials-embla-track {
          display: flex;
          margin-left: -24px;
          padding-top: 12px;
          padding-bottom: 20px;
        }

        .testimonials-embla-slide {
          flex: 0 0 100%;
          min-width: 0;
          padding-left: 24px;
        }

        @media (min-width: 768px) {
          .testimonials-embla-slide {
            flex-basis: 50%;
          }
        }

        @media (min-width: 1280px) {
          .testimonials-embla-slide {
            flex-basis: 33.333%;
          }
        }
      `}</style>
      <ContainerWrapper>
        <PaddingWrapper2 padding="pb-10 px-8.75 md:pb-14 md:px-12.5 xl:pb-18 xl:px-20">
          <H2HeadingWrapper
            headdingBlack="Trusted by Teams"
            headingBlue="That Want to Grow"
            subHeading=""
          />
          <div className="relative px-8 xl:px-0">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous testimonial"
              className="absolute left-[-10px] top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-secondary xl:hidden"
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div ref={emblaRef} className="testimonials-embla">
              <div className="testimonials-embla-track">
                {TESTIMONIALS.map((testimonial) => (
                  <div key={testimonial.name} className="testimonials-embla-slide">
                    <VideoCards testimonial={testimonial} onPlay={setActiveVideo} />
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next testimonial"
              className="absolute right-[-10px] top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-secondary xl:hidden"
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </PaddingWrapper2>
      </ContainerWrapper>
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-[900px] overflow-hidden rounded-lg bg-black"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white text-xl font-bold text-primary"
            >
              x
            </button>
            {isYouTubeVideo ? (
              <iframe
                src={`${activeEmbedUrl}?autoplay=1`}
                title={`${activeVideo.name} video`}
                className="aspect-video w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <video
                src={activeVideo.video}
                poster={activeVideo.image}
                className="aspect-video w-full"
                controls
                autoPlay
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default WorkingWithUs;
