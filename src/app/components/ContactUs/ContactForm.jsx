"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ContainerWrapper from "../common/Container/ContainerWrapper";
import PaddingWrapper2 from "../common/Container/PaddingWrapper2";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  domain: "",
  designation: "",
  message: "",
  terms: false,
};

const ContactForm = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));
  };

  const handlePhoneChange = (phone) => {
    setForm((current) => ({
      ...current,
      phone,
    }));

    setErrors((current) => ({
      ...current,
      phone: "",
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      nextErrors.email = "Invalid email address";
    }
    if (!form.phone.trim()) {
      nextErrors.phone = "Phone number is required";
    } else if (form.phone.length < 10) {
      nextErrors.phone = "Enter a valid phone number";
    }
    if (!form.domain.trim()) nextErrors.domain = "Domain is required";
    if (!form.designation.trim()) {
      nextErrors.designation = "Designation is required";
    }
    if (!form.terms) {
      nextErrors.terms = "You must agree to the terms & conditions";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    const whatsappMessage = `New Contact Form Enquiry

● Name: ${form.name}
● Phone: +${form.phone}
● Email: ${form.email}
● Domain: ${form.domain}
● Designation: ${form.designation}
● Message: ${form.message || "N/A"}

- Humans of Web`;

    const whatsappUrl = `https://wa.me/447897024186?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappUrl, "_blank");
    setForm(initialForm);
    setErrors({});
  };

  return (
    <ContainerWrapper>
      <PaddingWrapper2 padding="py-10 px-8.75 md:py-[50px] md:px-12.5 xl:py-18 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 ">
          {/* LEFT CARD */}
          <div className="bg-white border border-gray-200 rounded-2xl p-10 rounded-[36px]">
            <p className="text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-4">
              Let&apos;s Grow Together
            </p>
            <h2 className="text-[28px] font-light text-gray-900 leading-snug mb-4">
              Success is a team effort{" "}
              <span style={{ color: "#48179C" }} className="font-bold">
                let&apos;s achieve
              </span>{" "}
              it together
            </h2>
            <p className="text-[13.5px] text-gray-500 leading-relaxed mb-8">
              Partner with us to unlock new opportunities and drive meaningful
              digital results. One call or click is all it takes to start your
              next big success story.
            </p>

            {[
              { label: "Whatsapp:", val: "+44 7897 024186" },
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
              Have Any Questions Or Second Thoughts? Let&apos;s Talk.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2">
                <div className="mb-3 md:mb-5">
                  <div className=" border-b border-[#48179C] ">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name *"
                      className="w-full bg-transparent border-none py-3.25 outline-none text-[16px] text-gray-700 placeholder:text-secondary"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>
                <div className="mb-3 md:mb-5">
                  <div className=" border-b border-[#48179C] ">
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email *"
                      className="w-full bg-transparent border-none py-3.25 outline-none text-[16px] text-gray-700 placeholder:text-secondary"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="mb-3 md:mb-1">
                  <PhoneInput
                    country="in"
                    value={form.phone}
                    onChange={handlePhoneChange}
                    inputClass="!w-full !h-[52px] !pl-11 !border-0 !border-b !border-[#48179C] !rounded-none !bg-transparent !text-[16px] !text-gray-700 focus:!shadow-none"
                    buttonClass="!bg-transparent !border-0 !border-b !border-[#48179C] !rounded-none"
                    containerClass="w-full"
                    dropdownClass="!rounded-md"
                    enableSearch={true}
                  />
                  <p className="mt-1 text-xs text-gray-500 md:hidden">
                    Please ensure this is a WhatsApp number.
                  </p>
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                  )}
                </div>

                {/* Domain */}
                <div className="mb-3 md:mb-5">
                  <div className="border-b border-[#48179C]">
                    <input
                      type="text"
                      name="domain"
                      value={form.domain}
                      onChange={handleChange}
                      placeholder="Enter Your Desired Domain *"
                      className="w-full bg-transparent border-none py-3.25 outline-none text-[16px] text-gray-700 placeholder:text-secondary"
                    />
                  </div>
                  {errors.domain && (
                    <p className="mt-1 text-xs text-red-500">{errors.domain}</p>
                  )}
                </div>

                {/* WhatsApp note — desktop only */}
                <p className="-mt-4 mb-5 hidden text-xs text-gray-500 md:col-span-2 md:block">
                  Please ensure this is a WhatsApp number.
                </p>
                <div className="mb-3 md:mb-5 col-span-1 md:col-span-2">
                  <div className=" border-b border-[#48179C]  ">
                    <input
                      type="text"
                      name="designation"
                      value={form.designation}
                      onChange={handleChange}
                      placeholder="Designation *"
                      className="w-full bg-transparent border-none py-3.25 outline-none text-[16px] text-gray-700 placeholder:text-secondary"
                    />
                  </div>
                  {errors.designation && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.designation}
                    </p>
                  )}
                </div>

                <div className="col-span-1 mb-5 border-b border-[#48179C]  md:col-span-2">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onInput={(e) => {
                      e.target.style.height = "auto";

                      if (e.target.scrollHeight <= 100) {
                        e.target.style.height = `${e.target.scrollHeight}px`;
                        e.target.style.overflowY = "hidden";
                      } else {
                        e.target.style.height = "100px";
                        e.target.style.overflowY = "auto";
                      }
                    }}
                    placeholder="How Can We Help You?"
                    rows={1}
                    className="pt-[13px] pb-[8px] w-full bg-transparent border-none outline-none text-[16px] text-gray-700 placeholder:text-secondary resize-none"
                  />
                </div>
                <div className="mb-5 md:mb-8 col-span-1 md:col-span-2">
                  <div className="">
                    <label className="flex items-start gap-2.5 text-[11.5px] leading-relaxed text-gray-600">
                      <input
                        type="checkbox"
                        name="terms"
                        checked={form.terms}
                        onChange={handleChange}
                        className="mt-0.5 accent-[#48179C]"
                      />
                      <span>
                        I Agree To Terms & Conditions Provided By The Company.
                        By Providing My Phone Number, I Agree To Receive Text
                        Messages From The Business.
                      </span>
                    </label>
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    {errors.terms && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.terms}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="h-[52px] cursor-pointer rounded-full bg-secondary px-6 text-sm font-bold uppercase tracking-[0.04em] text-white transition hover:bg-primary"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
};

export default ContactForm;
