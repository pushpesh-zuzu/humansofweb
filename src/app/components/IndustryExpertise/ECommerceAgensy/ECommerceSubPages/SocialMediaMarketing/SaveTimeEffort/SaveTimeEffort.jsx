import { FaArrowTrendUp, FaClock, FaCoins } from "react-icons/fa6";
import ContainerWrapper from "@/app/components/common/Container/ContainerWrapper";
import PaddingWrapper2 from "@/app/components/common/Container/PaddingWrapper2";
import GetCtaButton from "@/app/components/common/CtaButtons/GetCtaButton";

const BENEFITS = [
  {
    label: "Save planning hours",
    value: "30%",
  },
  {
    label: "Reduce wasted spend",
    value: "24/7",
  },
  {
    label: "Improve campaign focus",
    value: "3x",
  },
];

const SaveTimeEffort = () => {
  return (
    <ContainerWrapper background="">
      <PaddingWrapper2 padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-18 xl:px-20">
        <section className="relative overflow-hidden rounded-[20px] bg-[linear-gradient(135deg,#48179C_0%,#34106f_48%,#F65A75_145%)] px-5 py-10 text-white md:px-10 md:py-14 xl:px-16 xl:py-18">
          <div className="relative z-10 grid items-center gap-0 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] xl:gap-16">
            <div className="max-w-[760px]">
              <h2 className="text-h2 font-semibold leading-tight text-secondary">
                Maximize Your Social Visibility{" "}
                <span className="font-normal text-white">
                  while saving time, effort, and budget
                </span>
              </h2>
              <p className="p-default mt-6 max-w-[720px] leading-[1.9] text-white/88">
                Your customers are already discovering, comparing, and judging brands on social media. We help your ecommerce business show up with a sharper plan, stronger content, and smarter campaign direction so every post, offer, and ad has a clear job.
              </p>
              <p className="p-default mt-4 max-w-[720px] leading-[1.9] text-white/88">
                Instead of spending hours guessing what to publish, we build a focused social system around audience research, content pillars, product storytelling, performance learning, and conversion paths that support real growth.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <GetCtaButton
                  text="Book a Call"
                  href=""
                />
              </div>
            </div>

            <div className="relative mx-auto min-h-[360px] w-full max-w-[500px]">
              <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12 bg-white/6 shadow-[0_30px_80px_rgba(0,0,0,0.22)] md:h-[340px] md:w-[340px]" />
              <div className="absolute left-[18%] top-[13%] rounded-lg bg-white/14 px-4 py-3 shadow-[0_14px_35px_rgba(0,0,0,0.18)] backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-white">
                    <FaArrowTrendUp className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-white/60">
                      Reach
                    </p>
                    <p className="text-h6 font-bold text-white">More buyers</p>
                  </div>
                </div>
              </div>

              <div className="absolute right-[8%] top-[18%] flex flex-col items-center">
                <div className="h-8 w-36 rounded-t-sm bg-white/28" />
                <div className="relative h-52 w-28 overflow-hidden bg-white/85 shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
                  <div className="absolute inset-x-4 top-4 h-24 rounded-b-full bg-[#dbe8f1]" />
                  <div className="absolute inset-x-4 bottom-4 h-24 rounded-t-full bg-[#dbe8f1]" />
                  <div className="absolute left-1/2 top-[42%] h-20 w-16 -translate-x-1/2 rounded-b-full bg-secondary/75" />
                  <div className="absolute bottom-6 left-1/2 h-12 w-20 -translate-x-1/2 rounded-t-full bg-secondary/70" />
                  <div className="absolute left-1/2 top-1/2 h-3 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20" />
                </div>
                <div className="h-8 w-36 rounded-b-sm bg-white/28" />
              </div>

              <div className="absolute bottom-[14%] left-[10%] h-40 w-40 rounded-full bg-[#d8edf6] p-3 shadow-[0_22px_55px_rgba(0,0,0,0.24)]">
                <div className="relative h-full w-full rounded-full bg-white">
                  <div className="absolute left-1/2 top-1/2 h-1.5 w-14 origin-left -translate-y-1/2 rounded-full bg-primary/55" />
                  <div className="absolute left-1/2 top-1/2 h-1.5 w-10 origin-left -translate-y-1/2 rotate-[-90deg] rounded-full bg-primary/55" />
                  <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
                  <div className="absolute right-4 top-8 h-14 w-14 rounded-full bg-secondary/35" />
                </div>
              </div>

              <div className="absolute bottom-[18%] right-[2%] flex flex-col gap-2">
                {[1, 2, 3, 4, 5, 6].map((coin) => (
                  <div
                    key={coin}
                    className="h-3 w-20 rounded-full border border-[#ffcf5f] bg-[#ffb842] shadow-[0_5px_0_rgba(174,99,0,0.24)]"
                  />
                ))}
              </div>

              <div className="absolute bottom-2 right-[28%] rounded-lg bg-white px-4 py-3 text-primary shadow-[0_18px_45px_rgba(0,0,0,0.22)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                    <FaCoins className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-primary/55">
                      Budget
                    </p>
                    <p className="text-h6 font-bold">Used smarter</p>
                  </div>
                </div>
              </div>

              <div className="absolute left-[42%] top-[50%] rounded-full bg-white px-4 py-2 text-primary shadow-[0_14px_35px_rgba(0,0,0,0.18)]">
                <div className="flex items-center gap-2">
                  <FaClock className="h-4 w-4 text-secondary" />
                  <span className="p-small font-bold">Time saved</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-10 grid gap-4 md:grid-cols-3">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.label}
                className="rounded-[20px] border border-white/14 bg-white/10 px-5 py-4 backdrop-blur"
              >
                <p className="text-h5 font-bold text-secondary">{benefit.value}</p>
                <p className="p-small mt-2 font-semibold text-white">{benefit.label}</p>
              </div>
            ))}
          </div>
        </section>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
};

export default SaveTimeEffort;
