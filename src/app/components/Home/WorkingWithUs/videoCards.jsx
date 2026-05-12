import playOutlineIcon from "../../common/Icons/Home/play-outline.svg";

export default function VideoCards({ testimonial, onPlay }) {
  const description = testimonial.description || testimonial.title;

  return (
    <div
      className="group relative mx-auto flex h-[275px] w-full max-w-[450px] flex-col overflow-hidden border-2 border-primary bg-primary text-white md:h-[315px] xl:h-[390px]"
      style={{
        borderRadius: 18,
      }}
    >
      {/* Hover Background Image */}
      <img
        src={testimonial.avatar}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center 
        translate-y-full scale-100 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] 
        group-hover:translate-y-0 group-hover:scale-100"
      />

      <div className="absolute inset-0 bg-primary/0 transition-all duration-700 group-hover:bg-primary/50" />

      {/* Top Image */}
      <div className="relative z-10 aspect-video w-full flex-none overflow-hidden xl:aspect-auto xl:h-[67%]">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-full w-full object-contain object-center 
          transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] 
          group-hover:scale-90 group-hover:opacity-0 xl:object-cover"
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
            <div
              className="h-full w-full transition-all duration-500 
              group-hover:scale-125 group-hover:rotate-12"
            >
              <img
                src={playOutlineIcon.src}
                alt="play"
                className="block h-full w-full object-contain"
              />
            </div>
          </div>
        </button>
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex min-h-0 flex-1 w-full flex-col px-4 py-4 
        transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] 
        group-hover:bg-transparent group-hover:-translate-y-2"
      >
        <p
          className="p-default overflow-hidden font-bold text-white 
          transition-all duration-500 group-hover:translate-y-1"
        >
          {description}
        </p>

        <div className="mt-3 flex items-center gap-6">
          <div
            className="flex flex-none items-center justify-center overflow-hidden rounded-full bg-white p-1
            transition-all duration-500 group-hover:scale-110"
            style={{ height: 40, width: 40 }}
          >
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="block rounded-full object-cover object-center"
              style={{ height: "100%", width: "100%" }}
            />
          </div>

          <p className="truncate font-medium text-white transition-all duration-500 group-hover:translate-x-1">
            {testimonial.name}
          </p>
        </div>
      </div>
    </div>
  );
}
