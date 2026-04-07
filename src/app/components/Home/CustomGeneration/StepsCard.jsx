import Image from "next/image";
import discovery from "../../common/Icons/Home/discovery-research.svg";
import onboard from "../../common/Icons/Home/onboarding.svg";
import strategy from "../../common/Icons/Home/strategy-implementaion.svg";
import operations from "../../common/Icons/Home/operations.svg";
import reporting from "../../common/Icons/Home/reporting.svg";

const STEPS = [
    {
        step: "01",
        title: "Discovery & Research",
        description: "We dive into your audience, market gaps, and positioning to build strategies based on clarity, not assumptions.",
        icon: discovery,
        colorClass: "bg-secondary",
    },
    {
        step: "02",
        title: "Onboarding",
        description: "We align early, understand your goals, and set everything up so execution starts without delays.",
        icon: onboard,
        colorClass: "bg-secondary",
    },
    {
        step: "03",
        title: "Strategy & Implementation",
        description: "We build a focused strategy around your goals and put it into action without unnecessary delays.",
        icon: strategy,
        colorClass: "bg-secondary",
    },
    {
        step: "04",
        title: "Operations & Execution",
        description: "We manage, launch, and optimize everything behind the scenes while you focus on what matters most.",
        icon: operations,
        colorClass: "bg-secondary",
    },
    {
        step: "05",
        title: "Reporting & Forecasting",
        description: "We keep you updated with clear insights, showing progress and what to expect moving forward.",
        icon: reporting,
        colorClass: "bg-secondary",
    },
];

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

const StepsCard = () => {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {STEPS.map((item, index) => (
                <article
                    key={item.step}
                    className="group overflow-hidden p-[2px] transition-transform duration-300 hover:-translate-y-1.5"
                    style={{
                        borderRadius: 16,
                        background: borderGradient(index % 2 !== 0),
                    }}
                >
                    <div className="flex min-h-[300px] flex-col bg-[#f5f6ff] p-6 transition-shadow duration-300 group-hover:shadow-[0_12px_36px_rgba(72,23,156,0.2)] rounded-[14px]">
                        <div className="flex items-center gap-4">
                            <div className={`${item.colorClass} flex h-14 w-14 flex-none items-center justify-center rounded-full p-3 transition-transform duration-300 group-hover:scale-110`}>
                                <Image src={item.icon} alt="" width={32} height={32} className="h-full w-full object-contain" />
                            </div>
                            <p className="text-sm font-bold uppercase tracking-[0.12em] text-primary">
                                Step {item.step}
                            </p>
                        </div>
                        <h3 className="mt-8 text-h5 font-bold text-primary">{item.title}</h3>
                        <p className="mt-4 p-small font-medium text-[#1c1c1c]">{item.description}</p>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default StepsCard;
