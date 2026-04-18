"use client";

import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const initialForm = {
  fullName: "",
  websiteUrl: "",
  email: "",
  phone: "",
  terms: false,
};

function InputField({ name, type = "text", placeholder, value, onChange }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded-[10px] border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
    />
  );
}

function TermsField({ checked, onChange }) {
  return (
    <label className="cursor-pointer text-xs leading-relaxed text-gray-500 flex items-center">
      <input
        type="checkbox"
        name="terms"
        checked={checked}
        onChange={onChange}
        className="mr-1 flex-shrink-0 accent-secondary"
      />
      <span>
        I agree to the{" "}
        <span className="underline" style={{ color: "#48179C" }}>
          terms & conditions
        </span>
        . I consent to receiving communication from HOW - Humans of Web.
      </span>
    </label>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m6 6 12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const GetProposalModal = ({
  isOpen = false,
  onClose,
  onSubmit,
  heading = "Get Your Free Proposal",
}) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }
    if (!form.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (form.phone.length < 10) {
      newErrors.phone = "Enter valid phone number";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!form.websiteUrl.trim()) {
      newErrors.websiteUrl = "Website URL is required";
    } else if (!/^https?:\/\/.+/.test(form.websiteUrl)) {
      newErrors.websiteUrl = "Invalid URL (must start with http:// or https://)";
    }
    if (!form.terms) {
      newErrors.terms = "You must agree to the terms & conditions";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    if (onSubmit) {
      onSubmit(form);
      return;
    }

    console.log(form);
  };

  const handleClose = () => {
    setErrors({});
    setForm(initialForm);
    onClose?.();
    onClose
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 md:p-5"
      style={{ background: "rgba(15,5,30,0.75)", backdropFilter: "blur(4px)" }}
      onClick={handleClose}>
      <div
        className="relative w-full overflow-hidden border border-secondary"
        style={{
          maxWidth: 620,
          maxHeight: "95vh",
          borderRadius: 20,
          boxShadow: "0 32px 80px rgba(72,23,156,0.3)",
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close modal"
          onClick={handleClose}
          className="absolute right-3 top-3 z-20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-2xl font-light bg-primary text-white transition-all"
        >
          <CloseIcon />
        </button>

        <div
          className="overflow-y-auto p-5 md:p-8"
          style={{
            background: "linear-gradient(160deg, #f5f0ff 0%, #fff0f3 100%)",
          }}
        >
          <div className="mb-5 pr-8">
            <h2 className="text-h3 font-bold" style={{ color: "#48179C" }}>
              {heading}
            </h2>
            <p className="p-small mt-2 text-gray-500">
              Tell us about your brand - we&apos;ll do the rest.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <InputField
                  name="fullName"
                  placeholder="Full Name *"
                  value={form.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>
              <div>
                <PhoneInput
                  country={"in"} // default India 🇮🇳
                  value={form.phone}
                  onChange={(phone) => {
                    setForm((prev) => ({
                      ...prev,
                      phone,
                    }));

                    setErrors((prev) => {
                      const newErrors = { ...prev };
                      delete newErrors.phone;
                      return newErrors;
                    });
                  }}
                  inputClass="!w-full !h-[42px] !pl-14 !rounded-[10px] !border !border-gray-200 focus:!border-purple-500 focus:!ring-2 focus:!ring-purple-100"
                  buttonClass="!bg-transparent !border-0"
                  containerClass="w-full"
                  dropdownClass="!rounded-md"
                  enableSearch={true}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <InputField
                name="email"
                type="email"
                placeholder="Email Address *"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <InputField
                name="websiteUrl"
                type="url"
                placeholder="Your Website URL *"
                value={form.websiteUrl}
                onChange={handleChange}
              />
              {errors.websiteUrl && (
                <p className="text-red-500 text-xs mt-1">{errors.websiteUrl}</p>
              )}
            </div>

            <div>
              <TermsField checked={form.terms} onChange={handleChange} />
              {errors.terms && (
                <p className="text-red-500 text-xs mt-1">{errors.terms}</p>
              )}
            </div>

            <button
              type="submit"
              className="button-primary rounded-full w-full bg-secondary hover:bg-primary transition-all duration-200"
              style={{ border: "none" }}
            >
              Get Free Proposal
            </button>

            <p className="pb-1 text-center text-xs text-gray-400">
              No spam. No commitments. Just results.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetProposalModal;