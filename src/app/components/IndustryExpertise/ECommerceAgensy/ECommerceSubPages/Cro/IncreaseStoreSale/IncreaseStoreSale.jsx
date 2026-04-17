import { FaArrowPointer, FaChartLine, FaCircleCheck } from "react-icons/fa6";
import ContainerWrapper from "@/app/components/common/Container/ContainerWrapper";
import PaddingWrapper2 from "@/app/components/common/Container/PaddingWrapper2";
import GetCtaButton from "@/app/components/common/CtaButtons/GetCtaButton";

const CRO_STEPS = [
  {
    title: "Smooth User Journey",
    description: "Make product discovery, comparison, cart, and checkout feel simple on every device.",
  },
  {
    title: "Stronger Page Messaging",
    description: "Use clearer copy, trust signals, offers, and calls to action to reduce hesitation.",
  },
  {
    title: "Smarter Growth Decisions",
    description: "Use behavior data to improve what matters most instead of redesigning by guesswork.",
  },
];

const INSIGHTS = [
  {
    value: "01",
    label: "Find conversion gaps",
  },
  {
    value: "02",
    label: "Improve buyer confidence",
  },
  {
    value: "03",
    label: "Turn visits into sales",
  },
];

const IncreaseStoreSale = () => {
  return (
    <ContainerWrapper>
      <PaddingWrapper2 padding="py-10 px-8.75 md:py-14 md:px-12.5 xl:py-20 xl:px-20">
        <section className="overflow-hidden bg-white">
          <div className="mx-auto max-w-[980px] text-center">
            <p className="p-small mb-4 font-bold uppercase tracking-[0.12em] text-secondary">
              Conversion rate optimization
            </p>
            <h2 className="text-h2 font-medium leading-tight text-[#151515]">
              Increase Store Sales with
              <span className="font-bold text-secondary"> our Ecommerce</span>
              <span className="block font-bold text-primary">CRO Services</span>
            </h2>
          </div>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] xl:mt-14 xl:gap-16">
            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="rounded-lg bg-[linear-gradient(135deg,rgba(72,23,156,0.08),rgba(246,90,117,0.1))] p-5 shadow-[0_22px_60px_rgba(72,23,156,0.1)] md:p-7">
                <div className="rounded-lg bg-white p-5 shadow-[0_16px_40px_rgba(72,23,156,0.08)]">
                  <div className="flex h-12 overflow-hidden rounded-t-lg bg-[#f0f1f5]">
                    {[1, 2, 3, 4, 5, 6].map((stripe) => (
                      <span
                        key={stripe}
                        className={`h-full flex-1 ${stripe % 2 ? "bg-secondary" : "bg-white"}`}
                      />
                    ))}
                  </div>

                  <div className="border-x border-b border-primary/8 bg-[#fafbff] px-5 py-6">
                    <div className="grid gap-5 md:grid-cols-[130px_minmax(0,1fr)]">
                      <div className="relative h-36 rounded-lg bg-primary/10 p-4">
                        <div className="mx-auto h-28 w-24 rounded-t-[36px] bg-primary/80">
                          <div className="mx-auto h-6 w-9 rounded-b-full bg-[#fafbff]" />
                        </div>
                        <span className="absolute bottom-4 left-10 h-6 w-2 bg-white/80" />
                        <span className="absolute bottom-4 right-10 h-6 w-2 bg-white/80" />
                      </div>

                      <div className="flex flex-col justify-center">
                        <span className="mb-4 h-3 w-36 rounded-full bg-primary/15" />
                        <span className="mb-3 h-3 w-48 rounded-full bg-[#dfe2ea]" />
                        <span className="mb-3 h-3 w-40 rounded-full bg-[#dfe2ea]" />
                        <span className="h-10 w-36 rounded-full bg-secondary shadow-[0_12px_26px_rgba(246,90,117,0.24)]" />
                      </div>
                    </div>

                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                      {INSIGHTS.map((insight) => (
                        <div
                          key={insight.value}
                          className="rounded-lg border border-primary/10 bg-white p-4"
                        >
                          <p className="text-h5 font-bold text-primary">{insight.value}</p>
                          <p className="p-small mt-2 font-semibold text-[#303030]">
                            {insight.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-primary p-5 text-white">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary">
                        <FaChartLine className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="p-small font-semibold text-white/70">Performance lift</p>
                        <p className="text-h5 font-bold">Better buying paths</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-secondary p-5 text-white">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-secondary">
                        <FaArrowPointer className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="p-small font-semibold text-white/75">Action focused</p>
                        <p className="text-h5 font-bold">More qualified clicks</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="p-default leading-[1.9] text-[#242424]">
                Your store may already be getting attention, but CRO makes that traffic more valuable. Humans of Web studies how shoppers move through your ecommerce website, then improves the moments that decide whether they keep browsing, add to cart, or leave.
              </p>
              <p className="p-default mt-4 leading-[1.9] text-[#242424]">
                We refine product pages, landing pages, navigation, checkout steps, offers, and trust signals so the customer journey feels easier, clearer, and more persuasive from the first click to the final purchase.
              </p>

              <div className="mt-7 space-y-4">
                {CRO_STEPS.map((step) => (
                  <div
                    key={step.title}
                    className="rounded-lg border border-primary/10 bg-[linear-gradient(135deg,rgba(72,23,156,0.05),rgba(246,90,117,0.05))] p-5"
                  >
                    <div className="flex items-start gap-4">
                      <FaCircleCheck className="mt-1 h-5 w-5 flex-none text-secondary" />
                      <div>
                        <h3 className="text-h5 font-bold text-primary">{step.title}</h3>
                        <p className="p-small mt-2 leading-[1.7] text-[#303030]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="p-default mt-7 leading-[1.9] text-[#242424]">
                The result is a store that works harder with the traffic you already have, helping your SEO, PPC, email, and social campaigns create more revenue without depending only on bigger budgets.
              </p>

              <div className="mt-8">
                <GetCtaButton text="Improve My Store Conversions" href="" />
              </div>
            </div>
          </div>
        </section>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
};

export default IncreaseStoreSale;
