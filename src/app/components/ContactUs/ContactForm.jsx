import ContainerWrapper from "../common/Container/ContainerWrapper";
import PaddingWrapper from "../common/Container/PaddingWrapper";
import PaddingWrapper2 from "../common/Container/PaddingWrapper2";

const ContactForm = () => {
  return (
    <ContainerWrapper>
      <PaddingWrapper2 padding="py-10 px-8.75 md:py-[50px] md:px-12.5 xl:py-18 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 ">
          {/* LEFT CARD */}
          <div className="bg-white border border-gray-200 rounded-2xl p-10 rounded-[36px]">
            <p className="text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-4">
              Let's Grow Together
            </p>
            <h2 className="text-[28px] font-light text-gray-900 leading-snug mb-4">
              Success is a team effort{" "}
              <span style={{ color: "#48179C" }} className="font-bold">
                let's achieve
              </span>{" "}
              it together
            </h2>
            <p className="text-[13.5px] text-gray-500 leading-relaxed mb-8">
              Partner with us to unlock new opportunities and drive meaningful
              digital results. One call or click is all it takes to start your
              next big success story.
            </p>

            {[
              { label: "Phone:", val: "(888) 273-1887766" },
              { label: "Send Email:", val: "hello@how.com" },
              {
                label: "Address:",
                val: "99 South Almaden UAE, 95113",
              },
            ].map((item) => (
              <div key={item.label} className="mb-5">
                <p
                  className="text-sm font-bold mb-1"
                  style={{ color: "#48179C" }}
                >
                  {item.label}
                </p>
                <p className="text-sm text-gray-700 whitespace-pre-line">
                  {item.val}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT CARD */}
          <div
            className="rounded-2xl p-9 rounded-[36px]"
            style={{ background: "#eef4fb" }}
          >
            <h3
              className="text-h3 font-extrabold mb-1.5"
              style={{ color: "#48179C" }}
            >
              Drop Us a Line
            </h3>
            <p className="text-[13px] text-gray-700 mb-6">
              Have Any Questions Or Second Thoughts? Let's Talk.
            </p>

            <div className="grid grid-cols-2 gap-x-6">
              {[
                "Your Name *",
                "Email *",
                "Phone *",
                "Website *",
                "Designation *",
                "How Did You Find Us?",
              ].map((ph) => (
                <div key={ph} className="border-b border-[#48179C] mb-5 pb-1.5">
                  <input
                    type="text"
                    placeholder={ph}
                    className="w-full bg-transparent border-none py-3.25 outline-none text-[16px] text-gray-700 placeholder:text-secondary"
                  />
                </div>
              ))}

              <div className="col-span-2 border-b border-[#48179C] mb-5 pb-1.5">
                <textarea
                  placeholder="How Can We Help You?"
                  rows={3}
                  className="w-full bg-transparent border-none outline-none text-[16px] text-gray-700 placeholder:text-secondary resize-none"
                />
              </div>

              <div className="col-span-2 flex items-start gap-2.5 mb-5">
                <input type="checkbox" className="mt-0.5 accent-[#48179C]" />
                <label className="text-[11.5px] text-gray-600 leading-relaxed">
                  I Agree To Terms & Conditions Provided By The Company. By
                  Providing My Phone Number, I Agree To Receive Text Messages
                  From The Business.
                </label>
              </div>
            </div>

            <button className="h-[52px] cursor-pointer rounded-full bg-secondary px-6 text-sm font-bold uppercase tracking-[0.04em] text-white transition hover:bg-white hover:text-primary">
              Send Message
            </button>
          </div>
        </div>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
};

export default ContactForm;
