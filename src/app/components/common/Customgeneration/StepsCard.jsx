import Image from "next/image";

const borderGradient = (reverse) => `linear-gradient(
    to ${reverse ? "top" : "bottom"},
    #48179C 0%,
    #48179C 50%,
    #6f3dcc 60%,
    #9b7ee0 70%,
    #c8b6ef 80%,
    #eee8fb 90%,
    transparent 100%
)`;

const StepsCard = ({
    steps = [],
    stepPrefix = "Step",
    gridClassName = "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
}) => {
    return (
        <div className={gridClassName}>
            {steps.map((item, index) => (
                <article
                    key={item.step ?? item.title}
                    className="group overflow-hidden p-[2px] transition-transform duration-300 hover:-translate-y-1.5"
                    style={{
                        borderRadius: 16,
                        background: borderGradient(index % 2 !== 0),
                    }}
                >
                    <div className="flex min-h-[300px] flex-col bg-[#f5f6ff] p-6 transition-shadow duration-300 group-hover:shadow-[0_12px_36px_rgba(72,23,156,0.2)] rounded-[14px] xl:min-h-[320px]">
                        <div className="flex items-center gap-4">
                            {item.icon && (
                                <div
                                    className="flex flex-none justify-center transition-transform duration-300 group-hover:scale-110"
                                    style={{
                                        width: 68,
                                        height: 89,
                                    }}
                                >
                                    <Image
                                        src={item.icon}
                                        alt={item.iconAlt ?? ""}
                                        width={72}
                                        height={72}
                                    />
                                </div>
                            )}
                            {item.step && (
                                <p className="text-sm font-bold uppercase tracking-[0.12em] text-primary">
                                    {stepPrefix} {item.step}
                                </p>
                            )}
                        </div>
                        <h3 className="mt-4 md:mt-6 text-h5 font-bold text-primary">
                            {item.title}
                        </h3>
                        <p className="mt-4 p-small font-medium text-[#1c1c1c]">
                            {item.description}
                        </p>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default StepsCard;
