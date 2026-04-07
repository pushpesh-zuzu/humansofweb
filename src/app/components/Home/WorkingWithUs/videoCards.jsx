import playOutlineIcon from "../../common/Icons/Home/play-outline.svg";

export default function VideoCards({ testimonial, onPlay }) {
  const description = testimonial.description || testimonial.title;

  return (
    <div
      className="group mx-auto w-full max-w-[450px] overflow-hidden border-2 border-primary bg-primary text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(72,23,156,0.28)]"
      style={{
        borderRadius: 18,
        height: 370,
      }}
    >
      <div className="relative h-[67%] w-full overflow-hidden">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        <button
          type="button"
          onClick={() => onPlay(testimonial)}
          className="absolute inset-0 flex cursor-pointer items-center justify-center -translate-y-4"
          aria-label={`Play ${testimonial.name} video`}
        >
          <div
            className="transition-transform duration-300 group-hover:scale-110"
            style={{ height: 80, width: 80 }}
          >
            <img
              src={playOutlineIcon.src}
              alt="play"
              className="block h-full w-full object-contain"
            />
          </div>
        </button>

      </div>
      <div className="flex h-[50%] w-full flex-col px-4 py-4">
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
    </div>
  );
}
