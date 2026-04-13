import playOutlineIcon from "../../common/Icons/Home/play-outline.svg";

export default function VideoCards({ testimonial, onPlay }) {
  const description = testimonial.description || testimonial.title;

  return (
    <div
      className="group relative mx-auto flex h-[275px] w-full max-w-[450px] flex-col overflow-hidden border-2 border-primary bg-primary text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(72,23,156,0.28)] md:h-[315px] xl:h-[390px]"
      style={{
        borderRadius: 18,
      }}
    >
      <img
        src={testimonial.avatar}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/45" />

      <div className="relative z-10 aspect-video w-full flex-none overflow-hidden xl:aspect-auto xl:h-[67%]">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-full w-full object-contain object-center transition-all duration-500 group-hover:scale-105 group-hover:opacity-0 xl:object-cover"
        />

        <button
          type="button"
          onClick={() => onPlay(testimonial)}
          className="absolute inset-0 cursor-pointer"
          aria-label={`Play ${testimonial.name} video`}
        >
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ height: 80, width: 80 }}
          >
            <div className="h-full w-full transition-transform duration-300 group-hover:animate-[playDrop_0.55s_ease-out] group-hover:scale-110">
              <img
                src={playOutlineIcon.src}
                alt="play"
                className="block h-full w-full object-contain"
              />
            </div>
          </div>
        </button>

      </div>
      <div className="relative z-10 flex min-h-0 flex-1 w-full flex-col px-4 py-4 transition-colors duration-500 group-hover:bg-transparent xl:h-[50%]">
        <p className="p-default overflow-hidden font-bold text-white">{description}</p>
        <div
          className="flex items-center gap-6 mt-3"
        >
          <div
            className="flex flex-none items-center justify-center overflow-hidden rounded-full bg-white p-1"
            style={{ height: 40, width: 40 }}
          >
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="block rounded-full object-cover object-center"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <p className="truncate font-medium text-white">{testimonial.name}</p>
        </div>
      </div>
      <style>{`
        @keyframes playDrop {
          0% {
            transform: translateY(-120px);
          }
          100% {
            transform: translateY(0) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
